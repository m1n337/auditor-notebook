import { Location } from "./location";

export class Base {
    static #unique_id: number = 0;

    id: number;

    #loc!: Location;
    
    #file!: string[];

    constructor(
    ) {    
        this.id = Base.#unique_id++;
    }

    public addLoc(
        start_l: number, 
        start_c: number,
        end_l: number, 
        end_c: number
    ) {
        this.#loc = new Location(start_l, start_c, end_l, end_c);
    }

    public getSourceCodeRaw(lines: string[]) {
        return this.#loc.getContent(lines);
    }

    public getSourceCode() {
        return this.#loc.getContent(this.#file);
    }

    public attachFile(file: string[]) {
        this.#file = file;
    }
}