'use client'
import { useEffect, useState } from 'react'
import ContainRedirectText from './components/ContainRedirectText'
import styles from '@/styles/(layout)/containRedirectText.module.scss'
import PublicationDate from './components/publicationDate'

const Layout: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.contain}>
      <ContainRedirectText />
      {isDesktop && <PublicationDate />}
    </div>
  )
}

export default Layout
