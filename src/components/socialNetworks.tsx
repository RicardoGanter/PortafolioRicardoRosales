import GithubIcon from "@/public/github.svg"
import LinkedinIcon from "@/public/linkedin.svg"
import styles from "@/styles/components/socialNetworks.module.scss"

const SocialNetworks = ()=>{
  return(
    <div className={styles.contain}>
      <GithubIcon width={70} className={styles.image} alt="Icono de redes sociales github."/>
      <LinkedinIcon className={styles.image} alt="Icono de redes sociales linkedin."/>
    </div>
  )
}


export default SocialNetworks