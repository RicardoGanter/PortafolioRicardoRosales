'use client'
import ContainRedirectText from './components/ContainRedirectText'
import styles from '@/styles/(layout)/containRedirectText.module.scss'
import PublicationDate from './components/publicationDate'

const Layout: React.FC = () => {
  return (
    <div className={styles.contain}>
      <ContainRedirectText />
      <PublicationDate />
    </div>
  )
}

export default Layout
