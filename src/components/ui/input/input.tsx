import styles from './input.module.scss'

interface InputProps {
    text : string
    // onChange : ( id:string ) => void
    placeHolder : string
}

const Input : React.FC<InputProps> = ({text='' })=>{
    return (
        <input placeholder=''  className={styles.input}  />
    )
}

export default Input