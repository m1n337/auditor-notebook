const HTML_Template = `
<!doctype html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/default.min.css">
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css"
    />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/diff2html/bundles/js/diff2html-ui.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsdiff/5.2.0/diff.min.js"></script>
    <script type="text/javascript" src="./highlightjs-solidity/dist/solidity.min.js"></script>
  </head>

  <script>
  const titles = {{titles}}
  const diffObjs = {{diffObjs}}
  
  window.addEventListener('DOMContentLoaded', (event) => {
      
      diffObjs.forEach((diffStrings, diffIndex) => {
          const titleElement = document.createElement('h2');
          titleElement.textContent = titles[diffIndex]; 
          titleElement.style.cssText = "color: navy;";
          document.body.appendChild(titleElement);
    
          diffStrings.forEach((diffString, stringIndex) => {
              const diffElement = document.createElement('div');
              diffElement.id = \`diffElement\$\{diffIndex}_\$\{stringIndex}\`;
              document.body.appendChild(diffElement);

              const configuration = {
                  drawFileList: false,
                  fileListToggle: false,
                  fileListStartVisible: false,
                  stickyFileHeaders: false,
                  fileContentToggle: true,
                  matching: 'words',
                  diffStyle: 'char',
                  outputFormat: 'side-by-side',
                  synchronisedScroll: true,
                  renderNothingWhenEmpty: false,
              };

              const diff2htmlUi = new Diff2HtmlUI(diffElement, diffString, configuration, hljs);
              diff2htmlUi.draw();
              
              diff2htmlUi.hljs.registerLanguage("solidity", window.solidity);
              diff2htmlUi.hljs.highlightAll();
              
              diff2htmlUi.highlightCode();
          });
          if (diffIndex < diffObjs.length - 1) {
            const separator = document.createElement('hr');
            separator.style.cssText = "height:2px;border-width:0;color:gray;background-color:gray";
            document.body.appendChild(separator);
        }
      });
  });
  </script>
  
  <body>
    <div id="myDiffElement"></div>
  </body>
</html>
`

import * as http from 'http';
import * as jsDiff from "diff";
import { ClientPortrait } from '..';
import { exit } from 'process';

const port = 3030;


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
        return [`${func.contract.name}:${func.signature}`, func.getSourceCode()];
       })));     
    });

    res.set(contract.name, functionTable);
})

let diffObjs: Array<Array<string>> = [];
let titles: Array<string> = [];

let index = 0;
for(const [key, functionTable] of res.get(targetContract)!.entries()){
  diffObjs.push([]);
  let tmpTitle = [functionTable[functionTable.length-1][0]];

  for(let i = functionTable.length - 1; i >  0; i--){
    const currentF = functionTable[i];
    const nextF = functionTable[i-1];

    const [name, code] = currentF;
    const [nextName, nextCode] = nextF;
    tmpTitle.push(nextName);

    console.log(`[LOG] comparing ${name} - ${nextName}`);

    diffObjs[index].push(
      jsDiff.createTwoFilesPatch("", "", code, nextCode, name + __dirname + ".sol", nextName + ".sol", {
        newlineIsToken: true
      })
    );
  }
  titles.push(tmpTitle.join(" → "))
  index++;
}

// console.log(diffObjs);

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     res.end();
// }).listen(port, () => {
//     console.log(`\nServer running at http://localhost:${port}/`);
// });
import { writeFileSync } from 'fs';

writeFileSync('index.html', HTML_Template.replace("{{titles}}", JSON.stringify(titles)).replace("{{diffObjs}}", JSON.stringify(diffObjs)));