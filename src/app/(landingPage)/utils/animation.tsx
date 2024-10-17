'use client'
import { useState,useEffect, useRef } from "react"
import styles from '@/styles/(landingPage)/animation.module.scss'


interface AnimatedComponentProps {
    animationType: string;
    children: React.ReactNode;
  }

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ animationType, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true) // Aparece cuando entra en la vista
          } else {
            setIsVisible(false) // Se mantiene la animación al desaparecer
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`${styles[animationType]} ${isVisible ? styles.enter : styles.exit}`}>
      {children}
    </div>
  )
}

export default AnimatedComponent