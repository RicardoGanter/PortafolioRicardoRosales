import styles from "@/styles/(landingPage)/aboutMe/aboutMe.module.scss"
import AnimatedComponent from "../utils/animation"

const data = {
  paragraph : `Soy un Desarrollador Full Stack con experiencia.
          Comencé a programar en 2022, impulsado por el desarrollo de un
          proyecto en blockchain. Desde entonces, he adquirido conocimientos
          en diversas tecnologías y estoy comprometido en crear soluciones eficientes.`,
  paragraphTwo : ` Actualmente, me especializo en JavaScript de manera avanzada, enfocándome
          en escribir código limpio y mantenible,
          asegurando que sea fácil de entender y adaptarse a cambios futuros.`,
}


const AboutMe = ()=>{
  return (
    <div id="aboutMe" className={styles.contain}>

      <AnimatedComponent animationType="rightToLeft">
        <h2 className={styles.h2}>Sobre mi</h2>
        <p className={styles.p}>
          {data.paragraph}
        </p>
        <p className={styles.p}>
          {data.paragraphTwo}
        </p>

      </AnimatedComponent>
    </div>
  )
}

export default AboutMe