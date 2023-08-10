import { Octokit } from "octokit"
import dotenv from "dotenv"

dotenv.config()


const octokit = new Octokit({
  auth: process.env.PERSONAL_ACCESS_TOKEN
})


async function getIssues(repo: string, owner: string) {
  try {
    const issues = await octokit.request(`GET /repos/${repo}/${owner}/issues`, {
      owner,
      repo,
      headers: {
        "X-Github-Api-Version": "2022-11-28"
      }
    });

    console.log(issues)
  } catch (err) {
    console.log("An error occured while trying to retreive the issues!", err)
  }
}

async function getPulls(repo: string, owner: string): Promise<void> {
  try {
    const pulls = await octokit.request(`GET /repos/${repo}/${owner}/pulls`, {
      owner,
      repo,
      headers: {
        "X-Github-Api-Version": "2022-11-28"
      }
    });

    console.log(pulls)
  } catch (err) {
    console.log("An error occured while trying to retreive the issues!", err)
  }
}


export { getIssues, getPulls }