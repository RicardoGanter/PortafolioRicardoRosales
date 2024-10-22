import styles from './input.module.scss'
import { monomaniacOne } from '@/app/fonts'
import { ReactNode } from 'react'

interface InputProps {
  placeHolder: string
  functionOnChange: (value: string) => void
  icon?: ReactNode
  type?: string
}

const Input: React.FC<InputProps> = ({
  placeHolder = '',
  functionOnChange,
  icon,
  type,
}) => {
  return (
    <div className={styles.contain}>
      {icon && <div className={styles.iconSearch}>{icon}</div>}
      <input
        type={type || 'text'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          functionOnChange(e.target.value)
        }
        placeholder={placeHolder}
        className={`${styles.input}  + '' + ${monomaniacOne.className}`}
      />
    </div>
  )
}

export default Input
