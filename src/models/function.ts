import { Base } from "./base";
import { Contract } from "./contract";

export enum StateMutabilityType {
    NONE,
    VIEW,
    PURE
}

export enum VisibilityType {
    NONE,
    PRIVATE,
    INTERNAL,
    EXTERNAL,
    PUBLIC,
}

export class Function extends Base {
    name: string;
    signature: string;

    contract!: Contract;

    #isVirtual: Boolean = false;
    #isOverride: Boolean = false;

    #isConstructor: Boolean = false;
    #isFallback: Boolean = false;
    #isReceiveEther: Boolean = false;

    #stateMutability: StateMutabilityType = StateMutabilityType.NONE;
    #visibility!: VisibilityType;

    constructor(name: string, sig: string) {
        super();

        this.name = name;
        this.signature = sig;
    }

    public withContract(c: Contract) {
        this.contract = c;
    }
        
    public setIsVirtual(flg: boolean) {
        this.#isVirtual = flg;
        return this;
    }
    
    public setIsOverride(flg: boolean) {
        this.#isOverride = flg;
        return this;
    }

    public setIsConstructor(flg: boolean) {
        this.#isConstructor = flg;
        return this;
    }

    public setIsFallback(flg: boolean) {
        this.#isFallback = flg;
        return this;
    }

    public setIsReceiveEther(flg: boolean) {
        this.#isReceiveEther = flg;
        return this;
    }

    public setStateMutability(s: string | null) {
        if (s === null) {
            this.#stateMutability = StateMutabilityType.NONE;
        } else if (s === "view") {
            this.#stateMutability = StateMutabilityType.VIEW;
        } else if (s === "pure") {
            this.#stateMutability = StateMutabilityType.PURE;
        } else {
            throw Error(`not support state mutability: ${s}`);
        }

        return this;
    }

    public setVisibility(v: string | null) {
        if (v === "internal") {
            this.#visibility = VisibilityType.INTERNAL;
        } else if (v === "private") {
            this.#visibility = VisibilityType.PRIVATE;
        } else if (v === "external") {
            this.#visibility = VisibilityType.EXTERNAL;
        } else if (v === "public" || v === "default") {
            this.#visibility = VisibilityType.PUBLIC;
        } else {
            this.#visibility = VisibilityType.NONE;
        }

        return this;
    }

    public get visibility() {
        return this.#visibility;
    }

    public get isPublicAccess() {
        return this.#visibility === VisibilityType.PUBLIC || this.#visibility === VisibilityType.EXTERNAL;
    }
}