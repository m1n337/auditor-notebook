import { Command, program } from "commander";
import { diffHandler } from "./diff";

program
    .name("audit")
    .version("0.0.1");

program
    .command("diff")
    .option("-p, --path [string]", "the code base of the diff project.")
    .option("-c, --contract [string]", "The diff contract.")
    .option("-m, --mode <type>", "The diff mode: override, upgrade... (deafult is override)")
    .action(diffHandler);

if (!process.argv.slice(2).length || !process.argv.slice(3).length) program.help();
const cmd = program.parse(process.argv);
if (!cmd.args.length) program.help();