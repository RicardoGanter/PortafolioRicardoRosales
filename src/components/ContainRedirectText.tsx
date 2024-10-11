'use client'

import { useState, useEffect, useRef } from 'react'
import RedirectText from './ui/redirectText'
import styles from '@/styles/components/containRedirectText.module.scss'
import getPushGitDate from '@/services/getpushGitdate'
import scrollToSection from '@/utils/scrollToSection'

const ContainRedirectText: React.FC = () => {
  const [commitDate, setCommitDate] = useState<string>('')
  const [activeSection, setActiveSection] = useState<string>('home')
  const observerRef = useRef<IntersectionObserver | null>(null)

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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
    scrollToSection(id)
    setActiveSection(id)
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
        <p>{commitDate}</p>
      </div>
    </div>
  )
}

function getSectionName(section: string): string {
  switch (section) {
  case 'home': return 'Inicio'
  case 'aboutMe': return 'Sobre mi'
  case 'skills': return 'Habilidades'
  case 'certificates': return 'Certificados'
  case 'contact': return 'Contacto'
  default: return section
  }
}

export default ContainRedirectText