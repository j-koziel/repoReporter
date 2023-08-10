import { Octokit } from "octokit"
import dotenv from "dotenv"

dotenv.config()


const octokit = new Octokit({
  auth: process.env.PERSONAL_ACCESS_TOKEN
})

const issues = await octokit.request("GET /repos/twitter/the-algorithm/issues", {
  owner: "twitter",
  repo: "the-algorithm",
  headers: {
    "X-Github-Api-Version": "2022-11-28"
  }
});

console.log(issues)

const pulls = await octokit.request('GET /repos/twitter/the-algorithm/pulls', {
  owner: 'OWNER',
  repo: 'REPO',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

console.log(pulls)