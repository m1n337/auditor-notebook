import { FunctionDefinition } from "../parser/ast-types";

export const getFunctionName = (f: FunctionDefinition): string => {
    let funcName = f.name;

    if (!f.name) {
      if (f.isConstructor) {
        funcName = "constructor";
      } else if (f.isFallback) {
        funcName = "fallback";
      } else if (f.isReceiveEther) {
        funcName = "receive";
      } else{
        throw Error(`not support function name: ${f.name}`);
      }
    }
  
    return funcName as string;
  }
    
export const getFunctionSignature = (f: FunctionDefinition) => {
    const functionName = getFunctionName(f);
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

export const exprToString = (e: any): string => {
    // Expression = IndexAccess | IndexRangeAccess | TupleExpression | BinaryOperation | Conditional | MemberAccess | FunctionCall | UnaryOperation | NewExpression | PrimaryExpression | NameValueExpression;

    // Expression = IndexAccess | IndexRangeAccess | TupleExpression | BinaryOperation | Conditional | MemberAccess | FunctionCall | UnaryOperation | NewExpression | PrimaryExpression | NameValueExpression

    // BooleanLiteral | HexLiteral | StringLiteral | NumberLiteral | Identifier | 
    // TupleExpression | TypeNameExpression
    if (e === undefined) return "";
    switch (e.type) {
    case 'IndexAccess':
        return `${exprToString(e.base)}[${exprToString(e.index)}]`;
    case 'IndexRangeAccess':
        return `${exprToString(e.base)}[${exprToString(e.indexStart)}:${exprToString(e.indexEnd)}]`;
    case 'TupleExpression':
        return `(tuple)`;
    case 'BinaryOperation':
        return `${exprToString(e.left)} ${e.operator} ${exprToString(e.right)}`;
    case 'Conditional':
        return `${exprToString(e.condition)} ? ${exprToString(e.trueExpression)} : ${exprToString(e.falseExpression)}`;
    case 'MemberAccess':
        return `${exprToString(e.expression)}.${e.memberName}`;
    case 'FunctionCall':
        return `${exprToString(e.expression)}.${e.memberName}`;
    case 'UnaryOperation':
        return `${e.operator}${exprToString(e.subExpression)}`;
    case 'NewExpression':
        return `${e.operator}${exprToString(e.subExpression)}`;

    case 'BooleanLiteral':
    case 'HexLiteral':
    case 'StringLiteral':
    case 'NumberLiteral':
        return `${e.value}`;
    case 'Identifier':
        return `${e.name}`;
    case 'TupleExpression':
        return `${e.name}`;
    default:
        return '';
    }
  }