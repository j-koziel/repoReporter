import { Octokit } from "octokit"
import dotenv from "dotenv"

import { issuesCsvCreator } from "./csvCreator"

dotenv.config()


// const octokit = new Octokit({
//   auth: process.env.PERSONAL_ACCESS_TOKEN
// })

const octokit = new Octokit()

// For now just returns all the issues from a repository
async function createIssueReport(owner: string, repo: string): Promise<void> {
  try {
    const issues = await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
      owner,
      repo,
      headers: {
        "X-Github-Api-Version": process.env.GITHUB_API_VERSION
      }
    });

    const cleanedIssues = [["issue", "creation_date", "num_comments"]];
    issues.data.forEach((issue: { title: string; created_at: string; comments: string }) => cleanedIssues.push([issue.title, issue.created_at, issue.comments]));

    issuesCsvCreator(cleanedIssues)
  } catch (err) {
    console.log("An error occured while trying to retreive the issues!", err);
  }
}


// For now just returns all the pulls from a repository
async function getPulls(owner: string, repo: string): Promise<void> {
  try {
    const pulls = await octokit.request(`GET /repos/${owner}/${repo}/pulls`, {
      owner,
      repo,
      headers: {
        "X-Github-Api-Version": process.env.GITHUB_API_VERSION
      }
    });

    console.log(pulls.data.data)
  } catch (err) {
    console.log("An error occured while trying to retreive the issues!", err)
  }
}


export { createIssueReport, getPulls }