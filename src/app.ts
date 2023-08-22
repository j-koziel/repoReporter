#! /usr/bin/env bun

import figlet from "figlet"
import { Command, OptionValues } from "commander"
import dotenv from "dotenv"

import { createReportBasedOnOption } from "./utils"
import pjson from "./../package.json"

dotenv.config()

const program: Command = new Command();

program
  .version(`${pjson.version}`)
  .description("A CLI which will create Issues and Pulls reports from an organisation's repositories")
  .option("-i, --issues <value...>", "Create issues report for a specific repository")
  .option("-p, --pulls <value...>", "Create pulls report for a specific repository")
  .parse(process.argv);

const options: OptionValues = program.opts()


if (!Object.keys(options).length) {
  console.log(figlet.textSync("Repo Reporter"));
  program.outputHelp();
}

// Create reports based on provided option 
createReportBasedOnOption(options)