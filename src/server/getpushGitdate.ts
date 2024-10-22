'use server'

export const getPushGitDate = async () => {
  const owner = process.env.NEXT_PUBLIC_DATA_NAME_OWNER_GITHUB
  const repository = process.env.NEXT_PUBLIC_DATA_NAME_REPOSITORY_GITHUB
  const branch = process.env.NEXT_PUBLIC_DATA_NAME_BRANCH_GITHUB
  if (owner && repository && branch) {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repository}/commits/${branch}`,
    )
    const commitData = await response.json()
    const lastCommitDate = commitData.commit.committer.date
    return lastCommitDate
  }
}
 
