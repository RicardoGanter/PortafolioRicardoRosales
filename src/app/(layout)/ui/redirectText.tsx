"use client"

import React from 'react'
import styles from '@/styles/(layout)/ui/redirectText.module.scss'

interface RedirectTextProps {
  name: string
  id: string
  isActive: boolean
  onClick: (id: string) => void
}

const RedirectText: React.FC<RedirectTextProps> = ({ name, id, isActive, onClick }) => {
  return (
    <a
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      onClick={() => onClick(id)}
    >
      {name}
    </a>
  )
}

export default RedirectText