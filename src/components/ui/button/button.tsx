import styles from './button.module.scss'
import { monomaniacOne } from '@/app/fonts'
import ExternalLink from '@/public/externalLink.svg'
import Image from 'next/image'
const Button = ()=>{
    return(
        <button className={` ${monomaniacOne.className} + '' + ${styles.contain}`}>
           <p> Ver Certificado </p>
           <ExternalLink  className={styles.image}/> 
        </button>
    )
}

export default Button