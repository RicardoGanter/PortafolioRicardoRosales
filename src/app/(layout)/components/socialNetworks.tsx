import GithubIcon from "@/public/github.svg"
import LinkedinIcon from "@/public/linkedin.svg"
import styles from "@/styles/(layout)/socialNetworks.module.scss"
import Link from "next/link"
const SocialNetworks = ()=>{
  return(
    <div className={styles.contain}>
      <Link target="_blank" href={'https://github.com/RicardoGanter'}>
        <GithubIcon className={styles.image} alt="Icono de redes sociales github."/>
      </Link>
      <Link target="_blank" href={'https://www.linkedin.com/in/ricardo-adolfo-rosales-ganter-03362b242/'}>
        <LinkedinIcon className={styles.image} alt="Icono de redes sociales linkedin."/>
      </Link>
    </div>
  )
}


export default SocialNetworks