import styles from './button.module.scss'
import { monomaniacOne } from '@/app/fonts'
import ExternalLink from '@/public/externalLink.svg'
const Button = () => {
  return (
    <button className={` ${monomaniacOne.className} + '' + ${styles.contain}`}>
      <p> Ver Certificado </p>
      <ExternalLink className={styles.image} />
    </button>
  )
}

export default Button
