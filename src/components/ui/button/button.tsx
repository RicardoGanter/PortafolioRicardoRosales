import styles from './button.module.scss'
import { monomaniacOne } from '@/app/fonts'
import React, { ReactNode } from 'react'

interface ButtonProps {
  text: string
  icon?: ReactNode
}

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className={` ${monomaniacOne.className} + '' + ${styles.contain}`}>
      <p>{text}</p>
      {icon && (
        <div className={icon ? styles.image : styles.noImage}>{icon}</div>
      )}
    </button>
  )
}

export default Button
