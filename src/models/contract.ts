import { Base } from "./base";
import {Function, VisibilityType} from "./function";

export class Contract extends Base {
    name: string;

    #baseContracts: Contract[] = [];
    #baseContractsLinearization: Contract[] | undefined = undefined;
    
    #functionTable: Map<number, Function> = new Map();
    
    #selfFunctionIds: number[] = [];
    #selfExternalFunctionIds: number[] = [];
    #selfInternalFunctionIds: number[] = [];

    #functionSignaturesTable: Map<string, Function[]> = new Map();

    #notSingleton: boolean = false;

    #alreadBuilt: boolean = false;

    constructor(
        name: string,
    ) {
        super();

        this.name = name;
    }

    public setIsNotSingleton() {
        this.#notSingleton = true;
    }

    public get isSingleton() {
        return !this.#notSingleton;
    }

    public addBaseContract(contract: Contract) {
        this.#baseContracts.push(contract);
    }

    public hasBaseContract() {
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

    public addFunction(func: Function) {
        func.withContract(this);

        const funcId = func.id;
        this.#functionTable.set(funcId, func);

        this.#selfFunctionIds.push(funcId);

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
            }

            if(contract.#alreadBuilt){
                break;
            }
        }
        
        this.#baseContractsLinearization = [this, ...baseContractsLinearization];

        this.#alreadBuilt = true;
    }

    public get alreadyBuilt() {
        return this.#alreadBuilt;
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