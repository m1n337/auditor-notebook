import { Base } from "./base";
import { Contract } from "./contract";

export enum StateMutabilityType {
    NONE,
    VIEW,
    PURE
}

export enum VisibilityType {
    NONE,
    DEFAULT,
    PRIVATE,
    INTERNAL,
    EXTERNAL,
    PUBLIC,
}

export class FunctionBase extends Base {
    name: string;
    signature: string;

    contract!: Contract;

    #isVirtual: Boolean;
    
    // TODO: is that same with payable?
    #isReceiveEther: Boolean;
    #isOverride: Boolean;
    #stateMutability: StateMutabilityType;
    #visibility!: VisibilityType;

    constructor(
        name: string,
        sig: string
    ) {
        super();

        this.name = name;
        this.signature = sig;

        this.#isVirtual = false;
        this.#isReceiveEther = false;
        this.#isOverride = false;
        this.#stateMutability = StateMutabilityType.NONE;
    }

    public withContract(c: Contract) {
        this.contract = c;
    }
        
    public setIsVirtual(flg: boolean) {
        this.#isVirtual = flg;
        return this;
    }
    
    public setIsReceiveEther(flg: boolean) {
        this.#isReceiveEther = flg;
        return this;
    }

    public setIsOverride(flg: boolean) {
        this.#isOverride = flg;
        return this;
    }

    public setStateMutability(s: string | null) {
        if (s === null) {
            this.#stateMutability = StateMutabilityType.NONE;
        } else if (s === "view") {
            this.#stateMutability = StateMutabilityType.VIEW;
        } else if (s === "pure") {
            this.#stateMutability = StateMutabilityType.PURE;
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
        } else if (v === "public") {
            this.#visibility = VisibilityType.PUBLIC;
        } else if (v === "default") {
            this.#visibility = VisibilityType.DEFAULT;
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