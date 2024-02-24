import { ClientPortrait, DEFAULT_EXCLUDE_DIR, DEFAULT_EXCLUDE_FILE } from "../index.ts";

interface diffHandlerOptions {
    path?: string;
    contract?: string;
    mode?: string;
}

export enum DIFF_MODE {
    NONE,
    OVERRIDE = "override",
    UPGRADE = "upgrade"
};

const formatDiffResult = (c: ClientPortrait, targetContract?: string) => {
    let res = new Map<string, Map<string, Array<[string, string]>>>();

    c.singltonContracts.forEach(contract => {
        let functionTable = new Map<string, Array<[string, string]>>();
        
        contract.functionsUpdated.forEach((funcs, sig) => {
        functionTable.set(sig, (functionTable.get(sig) || []).concat(funcs.map(func => {
            return [func.contract.name, func.getSourceCode()];
        })));     
        });

        res.set(contract.name, functionTable);
    })

    let diffContents: Array<Array<string>> = [];
    let sigs: Array<string> = [];
    let files: Array<Array<string>> = [];
    let inheritanceChain: Array<string> = [];

    let index = 0;
    if (targetContract) {
        for(const [key, functionTable] of res.get(targetContract)!.entries()){
            files.push([]);
            diffContents.push([]);
            let tmpTitle = [functionTable[functionTable.length-1][0]];
    
            for(let i = functionTable.length - 1; i >  0; i--){
                const currentF = functionTable[i];
                const nextF = functionTable[i-1];
    
                const [fileName, code] = currentF;
                const [nextFileName, nextCode] = nextF;
                tmpTitle.push(nextFileName);
    
                console.log(`[LOG] comparing ${fileName} - ${nextFileName}`);
                
                files[index].push(fileName);
                diffContents[index].push(code);
                if (i === 1) {
                    files[index].push(nextFileName);
                    diffContents[index].push(nextCode);
                }
            }
            sigs.push(key);
            inheritanceChain.push(tmpTitle.join(" → "))
    
            index++;
        }
        let summaryTable = [];
        for(let i = 0; i < sigs.length; i++){
            console.log(`> ${sigs[i]}: ${inheritanceChain[i]}\n`)
            summaryTable.push({"upgrade": `${sigs[i]}: ${inheritanceChain[i]}`});

            for(let j = 0; j < diffContents[i].length; j++){
                console.log(`@${files[i][j]}\n`);
                console.log(diffContents[i][j], '\n');
            }
        }
        
        console.table(summaryTable);
    }

}

export const diffHandler = (opts: diffHandlerOptions) => {
    const mode = opts.mode || DIFF_MODE.OVERRIDE;
    
    
    if(mode === DIFF_MODE.OVERRIDE){
        const path = opts.path;
        const c = new ClientPortrait(path as string);

        const contract = opts.contract;
        formatDiffResult(c, contract);
    } else {
        console.error("Mode not support");
    }
}