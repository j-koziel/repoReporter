import { OptionValues } from "commander"
import { createIssueReport, getPulls } from "./reportsCreator"

async function createReportBasedOnOption(options: OptionValues): Promise<void> {
  if (options.issues) {
    const [owner, repo]: [string, string] = options.issues
    await createIssueReport(owner, repo)
  }

  if (options.pulls) {
    const [owner, repo] = options.pulls
    getPulls(owner, repo)
  }
}

export { createReportBasedOnOption }