import styles from '@/styles/(layout)/containRedirectText.module.scss'
import { useState, useEffect } from 'react'
import getPushGitDate from '../services/getpushGitdate'

const PublicationDate = () => {
  const [commitDate, setCommitDate] = useState<string>('')

  useEffect(() => {
    const fetchCommitDate = async () => {
      const getStoragePushGitDate = sessionStorage.getItem('storagePushGitDate')
      if (getStoragePushGitDate) {
        return setCommitDate(
          new Date(getStoragePushGitDate).toLocaleDateString(),
        )
      }
      const date = await getPushGitDate()
      if (date) {
        sessionStorage.setItem('storagePushGitDate', date)
        return setCommitDate(new Date(date).toLocaleDateString())
      }
    }
    fetchCommitDate()
  }, [])

  return (
    <div className={styles.containPublication}>
      <p>Publicado</p>
      <p>{commitDate || '??/??/????'}</p>
    </div>
  )
}

export default PublicationDate
