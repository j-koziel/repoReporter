#! /usr/bin/env bun

import { Command } from "commander"
import dotenv from "dotenv"

import pjson from "./../package.json"

dotenv.config()

const program: Command = new Command();

program
  .version(`${pjson.version}`)
  .description("A CLI which will create Issues and Pulls reports for a repository/ies")
  .command("all").description("Create reports for issues, pull requests and security advisories").alias("a")
  .option("-at, --access-token <token>", "The access token needed to create reports for private repos")
  .action((options) => {
    console.log(options)
  })
// .command("issues", "Create a report for issues").alias("i").command("pulls", "Create a report for pull requests").alias("p").command("advisories", "Create a report for security advisories").alias("sa")

// program.option("--no-csv", "Don't generate a csv file just display stats to the console.")

program.parse(process.argv);
// Create reports based on provided option 
// createReportBasedOnOption(options)

export default program