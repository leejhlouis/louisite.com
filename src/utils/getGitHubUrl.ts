import { social } from "@/constants"

export default function getGitHubUrl(repoName: string): string {
  const githubUrl = `https://github.com/${social.github}`
  return `${githubUrl}/${repoName}`
}
