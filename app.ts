import figlet from "figlet"
import { Command } from "commander"
import pjson from "./package.json"
import dotenv from "dotenv"

dotenv.config()

const program: Command = new Command();


program
  .version(`${pjson.version}`)
  .description("A CLI which will create Issues and Pulls reports from an organisations repositories")
  .option("-i, --issues <value> <value>", "Create issues report for an organisation")
  .option("-p, --pulls <value> <value>", "Create pulls report for an organisation")
  .parse(process.argv);

console.log(figlet.textSync("Repo Reporter"));
program.outputHelp();


export default program