'use client'

import { useState, useEffect, useRef } from 'react'
import styles from '@/styles/(landingPage)/animation.module.scss'

interface AnimatedComponentProps {
  animationType: 'rightToLeft' | 'opacity'
  children: React.ReactNode
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  animationType,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' },
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
    <div
      ref={ref}
      className={`${styles[animationType]} ${isVisible ? styles.enter : styles.exit}`}
    >
      {children}
    </div>
  )
}

export default AnimatedComponent
