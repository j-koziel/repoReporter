import { Octokit } from "octokit"
import dotenv from "dotenv"

dotenv.config()


// const octokit = new Octokit({
//   auth: process.env.PERSONAL_ACCESS_TOKEN
// })

const octokit = new Octokit()

// For now just returns all the issues from a repository
async function getIssues(owner: string, repo: string) {
  try {
    const issues = await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
      owner,
      repo,
      headers: {
        "X-Github-Api-Version": process.env.GITHUB_API_VERSION
      }
    });

    console.log(issues)
  } catch (err) {
    console.log("An error occured while trying to retreive the issues!", err)
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

    console.log(pulls)
  } catch (err) {
    console.log("An error occured while trying to retreive the issues!", err)
  }
}


export { getIssues, getPulls }