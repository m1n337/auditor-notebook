import * as http from 'http';
import * as jsDiff from "diff";
import { ClientPortrait } from '..';
import { exit } from 'process';

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const HTML_Template = readFileSync(path.join(__dirname, "index.template.html")).toString();

// Example: `yarn run display path/to/your/contracts:ContractName`
if (process.argv.length !== 3) exit(-1);
const target = process.argv[2].split(':')

let dir: string = "";
let targetContract: string = "";
if (target.length === 1) {
  // TODO: Not support multiple contract display now.
  exit(-1);
} else if (target.length == 2) {
  [dir, targetContract] = target;
} else {
  exit(-1);
}

const excludeKeyWords = [
  "Mock",
  "Test"
];

const excludeDirs = [
  "interfaces",
  "mocks"
]

const c = new ClientPortrait(dir, {
    excludeDirs: excludeDirs,
    excludeFiles: excludeKeyWords
})

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

let diffObjs: Array<Array<string>> = [];
let sigs: Array<string> = [];
let inheritanceChain: Array<string> = [];

let index = 0;
for(const [key, functionTable] of res.get(targetContract)!.entries()){
  diffObjs.push([]);
  let tmpTitle = [functionTable[functionTable.length-1][0]];

  for(let i = functionTable.length - 1; i >  0; i--){
    const currentF = functionTable[i];
    const nextF = functionTable[i-1];

    const [fileNmae, code] = currentF;
    const [nextFileName, nextCode] = nextF;
    tmpTitle.push(nextFileName);

    console.log(`[LOG] comparing ${fileNmae} - ${nextFileName}`);

    diffObjs[index].push(
      jsDiff.createTwoFilesPatch("", "", code, nextCode, fileNmae + ".sol", nextFileName + ".sol", {
        newlineIsToken: true
      })
    );
  }
  sigs.push(key);
  inheritanceChain.push(tmpTitle.join(" → "))

  index++;
}

// console.log(diffObjs);
const port = 3000;
http.createServer((req, res) => {
  if(req.url == "/highlightjs-solidity/dist/solidity.min.js"){
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    const data = readFileSync(path.join(__dirname, 'highlightjs-solidity/dist/solidity.min.js'), 'utf8')
      res.statusCode = 500;
      res.end(data);
      return;
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(HTML_Template.replace("{{sigs}}", JSON.stringify(sigs)).replace("{{inheritanceChain}}", JSON.stringify(inheritanceChain)).replace("{{diffObjs}}", JSON.stringify(diffObjs)));
  }
}).listen(port, () => {
    console.log(`\nServer running at http://localhost:${port}/`);
});

// writeFileSync('index.html', HTML_Template.replace("{{titles}}", JSON.stringify(titles)).replace("{{diffObjs}}", JSON.stringify(diffObjs)));