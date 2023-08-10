import figlet from "figlet"
import { Command, OptionValues } from "commander"
import dotenv from "dotenv"

import { getIssues, getPulls } from "./reportsCreator"
import pjson from "./package.json"

dotenv.config()

const program: Command = new Command();

program
  .version(`${pjson.version}`)
  .description("A CLI which will create Issues and Pulls reports from an organisations repositories")
  .option("-i, --issues <value...>", "Create issues report for an organisation")
  .option("-p, --pulls <value...>", "Create pulls report for an organisation")
  .parse(process.argv);

console.log(figlet.textSync("Repo Reporter"));
program.outputHelp();

const options: OptionValues = program.opts()

if (options.issues) {
  const [owner, repo] = options.issues
  getIssues(owner, repo)
}

if (options.pulls) {
  const [owner, repo] = options.pulls
  getPulls(owner, repo)
}