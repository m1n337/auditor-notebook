import * as http from 'http';
import * as jsDiff from "diff";
import { ClientPortrait } from '..';
import { exit } from 'process';

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const HTML_Template = readFileSync(path.join(__dirname, "index.template.html")).toString();

export const run = (dir: string, targetContract: string) => {
  const c = new ClientPortrait(dir, {
    includeContracts: [targetContract],
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
};

// writeFileSync('index.html', HTML_Template.replace("{{titles}}", JSON.stringify(titles)).replace("{{diffObjs}}", JSON.stringify(diffObjs)));