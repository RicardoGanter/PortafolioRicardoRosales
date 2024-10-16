'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from './select.module.scss'
import { monomaniacOne } from "../../../app/fonts"

interface SelectProps {
    options: string[]
    title: string
    functionOnClick: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, title, functionOnClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const selectRef = useRef<HTMLDivElement>(null)

  const toggleSelect = () => setIsOpen(!isOpen)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  const clearOptionClick = () => {
    setSelectedOption('')
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={`${styles.selectContainer} + '' + ${monomaniacOne.className}`} ref={selectRef}>
      <div className={`${styles.select} ${isOpen ? styles.open : ''}`} onClick={toggleSelect}>
        {selectedOption || title}
        <span className={styles.arrow}>▼</span>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {/* <div className={ styles.option } onClick={()=> clearOptionClick()}> Limpar </div> */}
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.option} ${selectedOption === option ? styles.selected : ''}`}
              onClick={() => {
                handleOptionClick(option);
                functionOnClick(option);
              }
              } 
            >
              {option === 'Todo' && (
                <span className={styles.icon}>⊞</span>
              )}
              {option === 'Por Categorías' && (
                <span className={styles.icon}>≡</span>
              )}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select