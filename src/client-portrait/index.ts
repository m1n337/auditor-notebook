import * as parser from "../parser";


import { ASTNode, ASTVisitor, ContractDefinition, FunctionCall, FunctionDefinition, Identifier } from "../parser/ast-types";

import { FunctionBase } from "../models/function.ts";

import { Contract } from "../models/contract";
import { readDirectory } from "./utils.ts";

interface ClientPortraitConfigParams {
    excludeDirs?: string[];
    excludeFiles?: string[];
    excludeContracts?: string[];

    disableContractDefinition?: boolean;
    disableFunctionDefinition?: boolean;
    disableComment?: boolean;

    debugMode?: boolean;
}

interface ClientPortraitConstrucotr {
    new (contractPath: string, configParam?: ClientPortraitConfigParams): ClientPortrait;
    new (sourceTable: Map<string, string>, configParam?: ClientPortraitConfigParams): ClientPortrait;
}

export class ClientPortrait {
    
    // file path to the contents.
    private fileTable: Map<string, string[]> = new Map();

    // *** Configuration ***:
    // filters: DirName, FileName, ContractName...
    private excludeDirs: string[] = [];
    private excludeFiles: string[] = [];
    private excludeContracts: string[] = [];

    // Parser control: TODO (grouped by features)
    private disableContractDefinition: boolean = false;
    private disableFunctionDefinition: boolean = false;
    private disableComment: boolean = true;

    private debugMode: boolean = false;

    constructor(input: string | Map<string, string>, params?: ClientPortraitConfigParams) {
        
        if(params) {
            if(params.excludeDirs) 
                this.excludeDirs = params.excludeDirs;
            if(params.excludeFiles)
                this.excludeFiles = params.excludeFiles;
            if(params.excludeContracts)
                this.excludeContracts = params.excludeContracts;
        }

        let data = undefined; 
        if (typeof input === "string") {
            data = readDirectory(input, this.excludeDirs, this.excludeFiles)
        } else {
            data = input as Map<string, string>;
        }

        for(const [path, source] of data!.entries()) {
            const sourceLines = source.split(/\r?\n/);
            
            if(this.fileTable.get(path)) continue;
            this.fileTable.set(path, sourceLines);

            const ast = this.parse(source);
            if (!ast || ast.errors) {
                continue
            } 
            
            // prepare current build context:
            this.currentSourceCode = sourceLines;

            this.build(ast)
        }

        this.contractTable.forEach(contract => {
            console.log("[LOG] Build contract: ", contract.name);
            contract.build();
        });
    }    

    private parse(data: string) {
        try {
            const ast = parser.parse(data, {
              tokens: true,
              loc: true,
            })
            return ast;
        } catch (e) {
            if (e instanceof parser.ParserError) {
              console.error(e.errors)
            }
        }
    }

    // BUILD:
    private contractTable: Map<string, Contract> = new Map();

    private getOrCreateNewContract = (name: string) => {
        let contract = this.contractTable.get(name);
        if (!contract){
            contract = new Contract(name);
    
            this.contractTable.set(name, contract);
        }
    
        return contract;
    }

    private getFunctionName = (f: FunctionDefinition): string => {
        let funcName = f.name;
        if (!f.name) {
          if (f.isConstructor) funcName = "constructor";
          else if (f.isFallback) funcName = "fallback";
        }
      
        return funcName as string;
      }
      
    private getFunctionSignature = (f: FunctionDefinition) => {
        const functionName = this.getFunctionName(f);
        let content: string[] = [];
        f.parameters.forEach(p => {
          if (p.typeName && p.type === "VariableDeclaration") {
            if (p.typeName.type == "ElementaryTypeName") {
              content.push(p.typeName.name);
            } else if (p.typeName.type == "ArrayTypeName") {
              if (p.typeName.baseTypeName.type == "ElementaryTypeName") {
                content.push(`${p.typeName.baseTypeName.name}[]`)
              }
            }
          }
        })
      
        return `${functionName}(${content.join(',')})`;
    }

    // Build Context:
    private currentSourceCode: string[] = [];
    private currentContract?: Contract;
    private currentFunction?: FunctionBase;

    private build(ast: unknown) {

        parser.visit(ast, {
            Comment: (node, parent) => {
              if (this.disableComment) return;
              if (this.debugMode) {
                  console.log(`------------------------------- Comment:enter ----------------------------------`)
                  console.log(node)
              }

            //   let target;
            //   let found = false;
            //   let foundTarget = false;
            //   if (!parent) return;
      
            //   if (parent.type === 'SourceUnit') {
            //     for (let c of parent.children) {
            //       if (found) {
            //         if (c.type === 'ContractDefinition') {
            //           target = c;
            //           foundTarget = true;
            //           break;
            //         } else if (c.type !== 'Comment') {
            //           break;
            //         }
            //       }
            //       if (c === node) {
            //         found = true;
            //       }
            //     }
            //   } else if (parent.type === 'ContractDefinition') {
            //     for (let n of parent.subNodes) {
            //       if (found) {
            //         if (n.type === 'FunctionDefinition') {
            //           target = n;
            //           foundTarget = true;
            //           break;
            //         } else if (n.type !== 'Comment') {
            //           break;
            //         }
            //       }
            //       if (n === node) {
            //         found = true;
            //       }
            //     }
            //   } else if (parent.type === 'Block') {
            //     for (let n of parent.statements) {
            //       if (found) {
            //         if (n.type !== 'Comment') {
            //           if (!innerCommentsMp.has(currentFunction)) {
            //             innerCommentsMp.set(currentFunction, []);
            //           }
            //           innerCommentsMp.get(currentFunction).push(node);
        
            //           target = n;
            //           foundTarget = true;
            //           break;
            //         }
            //       }
            //       if (n === node) {
            //         found = true;
            //       }
            //     }
            //   }
            //   console.log(`> comment text = ${node.value}, foundTarget = ${foundTarget}, parentType = ${parent.type}`);
            //   if (!foundTarget) return;
            //   if(!commentsMp.has(target)){
            //     commentsMp.set(target, []);
            //   }
            //   commentsMp.get(target).push(node);
            },
            ContractDefinition: (node) => {
              if (this.disableContractDefinition) return;
              if (this.debugMode) {
                  console.log(`------------------------------- ContractDefinition:enter ----------------------------------`)
                  console.log(JSON.stringify(node));
              }
      
              const contractName = node.name;
      
              this.currentContract = this.getOrCreateNewContract(contractName)
      
              this.currentContract.addLoc(
                node.loc?.start.line as number, 
                node.loc?.start.column as number,
                node.loc?.end.line as number,
                node.loc?.end.column as number
              );
      
              this.currentContract.attachFile(this.currentSourceCode);
      
              node.baseContracts.forEach(baseContract => {
                const baseContractName = baseContract.baseName.namePath;
                const tmp = this.getOrCreateNewContract(baseContractName);
                tmp.setIsNotSingleton();
                
                // console.log(`> add base contract: ${currentContract?.name} -> ${tmp.name}`);

                this.currentContract!.addBaseContract(tmp);
              })
            },
            FunctionDefinition: (node) => {
              if (this.disableFunctionDefinition) return;
              if (this.debugMode) {
                  console.log(`------------------------------- FunctionDefinition:enter ----------------------------------`)
                  console.log(JSON.stringify(node));
              } 
              
              const functionName = this.getFunctionName(node);
              
              const func = new FunctionBase(functionName, this.getFunctionSignature(node))
                .setIsVirtual(node.isVirtual)
                .setIsReceiveEther(node.isReceiveEther)
                .setIsOverride(node.override !== null)
                .setIsReceiveEther(node.isReceiveEther)
                .setStateMutability(node.stateMutability)
                .setVisibility(node.visibility)
                
              func.addLoc(
                  node.loc?.start.line as number, 
                  node.loc?.start.column as number,
                  node.loc?.end.line as number,
                  node.loc?.end.column as number
              );
      
              func.attachFile(this.currentSourceCode);
              
              // TODO: handle FileLevelFunctions
              this.currentContract?.addFunction(func);
      
              this.currentFunction = func;

            //   findFile.set(func.id, currentFileData);
              // currentFunction = node;
              // const funcName = getFunctionName(node);
              
              // contract2Functions.set(currentContract.name, (contract2Functions.get(currentContract.name) || []).concat(funcName as string));
            },
            // ExpressionStatement: function(node) {
            //   if (!enableFunction) return;
              
            //   console.log(`------------------------------- ExpressionStatement:enter ----------------------------------`)
            //   console.log(JSON.stringify(node));
            //   // if (node.expression && node.expression.type === "FunctionCall") {
            //   //   const calleeFuncName = (node.expression.expression as Identifier).name;
            //   //   const callee = `${currentContract.name}:${calleeFuncName}`;
            //   //   const currentFuncName = `${currentContract.name}:${getFunctionName(currentFunction)}`;
                
            //   //   functionMp.set(callee, (functionMp.get(callee) || []).concat(currentFuncName));
            //   // }
            // },
        });
    }

    // Public functions:
    public get singltonContracts(){
        return Array.from(this.contractTable.values()).filter(contract => contract.isSingleton)
    };

}