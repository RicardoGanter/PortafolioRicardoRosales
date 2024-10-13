import styles from './input.module.scss'
import SearchIcon from '@/public/search.svg'
import { monomaniacOne } from '@/app/fonts'
interface InputProps { 
    // onChange : ( id:string ) => void
    placeHolder : string
}

const Input : React.FC<InputProps> = ({placeHolder='' })=>{
    return (
        <div className={styles.contain}>
            <SearchIcon className={styles.iconSearch} fill={"white"}/>
            <input placeholder={placeHolder} className={ `${styles.input }  + '' + ${monomaniacOne.className}`}  />
        </div>
    )
}

export default Input