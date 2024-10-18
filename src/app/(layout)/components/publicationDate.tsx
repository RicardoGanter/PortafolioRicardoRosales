import styles from '@/styles/(layout)/containRedirectText.module.scss'
import { useState, useEffect } from 'react'
import getPushGitDate from '../services/getpushGitdate'

const PublicationDate = () => {
  const [commitDate, setCommitDate] = useState<string>('')

  useEffect(() => {
    const fetchCommitDate = async () => {
      const date = await getPushGitDate()
      if (date) {
        setCommitDate(new Date(date).toLocaleDateString())
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
