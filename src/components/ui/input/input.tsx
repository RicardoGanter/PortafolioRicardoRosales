import styles from './input.module.scss'
import SearchIcon from '@/public/search.svg'
import { monomaniacOne } from '@/app/fonts'
interface InputProps {
    placeHolder : string
    functionOnChange: (value: string) => void;
}

const Input : React.FC<InputProps> = ({ placeHolder='', functionOnChange })=>{
  return (
    <div className={styles.contain}>
      <SearchIcon className={styles.iconSearch} fill={"white"}/>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        functionOnChange(e.target.value)
      } placeholder={placeHolder} className={ `${styles.input }  + '' + ${monomaniacOne.className}`}  />
    </div>
  )
}

export default Input