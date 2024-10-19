const getPushGitDate = async () => {
  const owner = process.env.NEXT_PUBLIC_DATA_NAME_OWNER_GITHUB
  const repository = process.env.NEXT_PUBLIC_DATA_NAME_REPOSITORY_GITHUB
  const branch = process.env.NEXT_PUBLIC_DATA_NAME_BRANCH_GITHUB
  const getStoragePushGitDate = sessionStorage.getItem('storagePushGitDate')
  if (getStoragePushGitDate) {
    return getStoragePushGitDate
  } else if (owner && repository && branch) {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repository}/commits/${branch}`,
    )
    const commitData = await response.json()
    const lastCommitDate = commitData.commit.committer.date
    sessionStorage.setItem('storagePushGitDate', lastCommitDate)
    return lastCommitDate
  }
}

export default getPushGitDate
