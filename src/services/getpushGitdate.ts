const owner = "RicardoGanter"
const repo = "PortafolioRicardoRosales"
const branch = "master"

const getPushGitDate = async ()=>{
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${branch}`);
  console.log(response)
  const commitData = await response.json();
 
  const lastCommitDate = commitData.commit.committer.date;
  return lastCommitDate;
}

export default getPushGitDate
