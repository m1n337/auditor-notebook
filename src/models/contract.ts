import { Base } from "./base";
import {FunctionBase, VisibilityType} from "./function";

export class Contract extends Base {
    name: string;

    #baseContracts: Contract[];
    #baseContractsLinearization: Contract[] | undefined;
    
    #functionTable: Map<number, FunctionBase>;
    #selfFunctionIds: number[];
    #selfExternalFunctionIds: number[];
    #selfInternalFunctionIds: number[];
    #allFunctionIds: number[];

    #functionSignaturesTable: Map<string, FunctionBase[]>;

    #notSingleton!: boolean;

    #alreadBuilt: boolean;

    constructor(
        name: string,
    ) {
        super();

        this.name = name;

        this.#baseContracts = [];
        this.#baseContractsLinearization = undefined;
        
        // Functions:
        this.#selfFunctionIds = [];
        this.#selfExternalFunctionIds = [];
        this.#selfInternalFunctionIds = [];
        
        this.#allFunctionIds = [];
        this.#functionTable = new Map();
        this.#functionSignaturesTable = new Map();

        this.#alreadBuilt = false;
    }

    public setIsNotSingleton() {
        this.#notSingleton = true;
    }

    public get isSingleton() {
        return !this.#notSingleton;
    }

    addBaseContract(contract: Contract) {
        this.#baseContracts.push(contract);
    }

    hasBaseContract() {
        return this.#baseContracts.length !== 0;
    }

    public get baseContracts() {
        return this.#baseContracts;
    }
    
    public get inheritanceChain() {
        if (this.#baseContractsLinearization === undefined) {
            this.#baseContractsLinearization = inheritanceLinearization(this);
        }
        
        return this.#baseContractsLinearization;
    }

    addFunction(func: FunctionBase) {
        func.withContract(this);

        const funcId = func.id;
        this.#functionTable.set(funcId, func);

        this.#selfFunctionIds.push(funcId);
        this.#allFunctionIds.push(funcId);
        if (func.isPublicAccess) {
            this.#selfExternalFunctionIds.push(funcId);
        } else {
            this.#selfInternalFunctionIds.push(funcId);
        }

        this.#functionSignaturesTable.set(func.signature, (this.#functionSignaturesTable.get(func.signature) || []).concat(func));
    }

    public get allFunctions() {
        return Array.from(this.#functionTable.values()).map(func => func.signature);
    }

    public get functionSignaturesTable() {
        return this.#functionSignaturesTable;
    }

    public get functionsUpdated() {
        return new Map(
            Array.from(this.#functionSignaturesTable.entries()).filter(value => value[1].length > 1)
        );
    }
    
    public build() {
        const baseContractsLinearization = inheritanceLinearization(this);

        for(const contract of baseContractsLinearization){
            for(const [sig, func] of contract.functionSignaturesTable.entries()){
                const _funcList = this.#functionSignaturesTable.get(sig);
                this.#functionSignaturesTable.set(sig, (_funcList || []).concat([...func]));
                
                // console.log(`[UPDATE] sig = ${sig} => funcs = ${_funcList?.map(item => `${item.contract.name}:${item.signature}`)} => add ${func.map(item => `${item.contract.name}:${item.signature}`)}`)
            }

            if(contract.#alreadBuilt){
                break;
            }
        }
        
        this.#baseContractsLinearization = [this, ...baseContractsLinearization];

        this.#alreadBuilt = true;
    }
}

function inheritanceLinearization(root: Contract) {
    
    if (!root.hasBaseContract()) return [];

    let res: Contract[] = [];

    // const nextBaseContract = root.nextBaseContract();
    for(const nextBaseContract of root.baseContracts){
        res.push(nextBaseContract);
        res = res.concat(inheritanceLinearization(nextBaseContract));
    }

    return res;
}