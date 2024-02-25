import { exit } from 'process';
import { ClientPortrait } from './client-portrait';

export {DEFAULT_EXCLUDE_FILE, DEFAULT_EXCLUDE_DIR} from './constants';

export { ClientPortrait } from "./client-portrait";


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

const cp = new ClientPortrait(dir);

cp.singltonContracts.forEach(contract => {
  let contractTable: any = [];
  contract.functionSignaturesTable.forEach((funcs, sig) => {
    let obj = {};
    funcs.forEach(func => {
      obj = {
        [func.contract.name]: func.name,
        ...obj
      };  
    });

    contractTable.push(obj);
  })

  console.log(`> ${contract.name}:\n`);
  console.table(contractTable);
})