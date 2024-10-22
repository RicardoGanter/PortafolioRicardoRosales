import styles from '@/styles/(layout)/containRedirectText.module.scss'
import { useRef, useState, useEffect } from 'react'
import scrollToSection from '../utils/scrollToSection'
import RedirectText from './ui/redirectText'
import getSectionName from '../utils/getSectionName'
const sections = ['home', 'aboutMe', 'skills', 'certificates']
const ContainRedirectText = () => {
  const [activeSection, setActiveSection] = useState<string>('home')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const isScrollingRef = useRef<boolean>(false)
  useEffect(() => {
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
      { threshold: [0.5] },
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
  )
}
export default ContainRedirectText
