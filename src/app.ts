#! /usr/bin/env bun

import { Command } from "commander"
import dotenv from "dotenv"

import pjson from "./../package.json"

dotenv.config()

const program: Command = new Command();

program
  .version(`${pjson.version}`)
  .description("A CLI which will create Issues and Pulls reports for a repository/ies")
  .command("all", "Create reports for issues, pull requests and security advisories").alias("a").executableDir("./commands")
  .command("issues", "Create a report for issues").alias("i").executableDir("./commands")
  .command("pulls", "Create a report for pull requests").alias("p").executableDir("./commands")
  .command("advisories", "Create a report for security advisories").alias("sa").executableDir("./commands")
  .parse(process.argv);


// Create reports based on provided option 
// createReportBasedOnOption(options)

