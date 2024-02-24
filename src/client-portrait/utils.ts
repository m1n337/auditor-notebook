import * as fs from 'fs';
import * as path from 'path';

export const readDirectory = (dir: string, excludeDirs: string[], excludeFiles: string[]): Map<string, string> => {
    const files = fs.readdirSync(dir, { withFileTypes: true })
    let res: Map<string, string> = new Map();

    files.forEach(file => {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            if(excludeDirs.some(w => file.name.toLowerCase().includes(w.toLowerCase()))) return;
  
            readDirectory(filePath, excludeDirs, excludeFiles);
        } else {

            if(excludeFiles.some(w => file.name.toLowerCase().includes(w.toLowerCase()))) return;
            console.log(`[LOG] reading file: ${filePath}`);
  
            const data = fs.readFileSync(filePath, { encoding: 'utf-8' });

            res.set(filePath, data);
        }
    });
  
    return res;
}