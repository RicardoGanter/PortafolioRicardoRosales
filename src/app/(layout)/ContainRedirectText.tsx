'use client'

import { useState, useEffect, useRef } from 'react'
import RedirectText from './ui/redirectText'
import styles from '@/styles/(layout)/containRedirectText.module.scss'
import getPushGitDate from '@/app/(layout)/services/getpushGitdate'
import scrollToSection from '@/app/(layout)/utils/scrollToSection'
import getSectionName from './utils/getSectionName'

const ContainRedirectText: React.FC = () => {
  const [commitDate, setCommitDate] = useState<string>('')
  const [activeSection, setActiveSection] = useState<string>('home')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const isScrollingRef = useRef<boolean>(false)

  const sections = ['home', 'aboutMe', 'skills', 'certificates', 'contact']

  useEffect(() => {
    const fetchCommitDate = async () => {
      const date = await getPushGitDate()
      if (date) {
        setCommitDate(new Date(date).toLocaleDateString())
      }
    }
    fetchCommitDate()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (!isScrollingRef.current) {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(entry.target.id)
            }
          })
        }
      },
      { threshold: [0.5] }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleRedirect = (id: string) => {
    isScrollingRef.current = true
    scrollToSection(id)
    setActiveSection(id)
    setTimeout(() => {
      isScrollingRef.current = false
    }, 1200)
  }

  return (
    <div className={styles.contain}>
      <div className={styles.containerRedirection}>
        {sections.map((section) => (
          <RedirectText
            key={section}
            name={getSectionName(section)}
            id={section}
            isActive={activeSection === section}
            onClick={handleRedirect}
          />
        ))}
      </div>

      <div className={styles.containPublication}>
        <p>Publicado</p>
        <p>{commitDate || '??/??/????'}</p>
      </div>
    </div>
  )
}

export default ContainRedirectText