export class Location {
    private start_line: number;
    private start_col: number;
    private end_line: number;
    private end_col: number;

    constructor(start_line: number, start_col: number, end_line: number, end_col: number) {
        this.start_line = start_line;
        this.start_col = start_col;
        this.end_line = end_line;
        this.end_col = end_col;
    }

    public getContent(lines: string[]) {
        if (this.start_line === this.end_line) return lines[this.start_line-1].slice(0, this.end_col+1);
        
        const first_line = lines[this.start_line-1].slice(0);
        const body = lines.slice(this.start_line, this.end_line-1);
        const last_line = lines[this.end_line-1].slice(0, this.end_col+1);
    
        return [
            first_line,
            ...body,
            last_line
        ].join('\n');
    }
}