import styles from "@/styles/(landingPage)/aboutMe/aboutMe.module.scss"
import AnimatedComponent from "../utils/animation"
import { dataAboutMe } from "./data/dataAboutMe" 

const AboutMe = ()=>{
  return (
    <div id="aboutMe" className={styles.contain}>

      <AnimatedComponent animationType="rightToLeft">
        <h2 className={styles.h2}>Sobre mi</h2>
        <p className={styles.p}>
          {dataAboutMe.paragraph}
        </p>
        <p className={styles.p}>
          {dataAboutMe.paragraphTwo}
        </p>

      </AnimatedComponent>
    </div>
  )
}

export default AboutMe