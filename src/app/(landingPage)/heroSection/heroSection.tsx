import styles from '@/styles/(landingPage)/heroSection/heroSection.module.scss'
import AnimatedComponent from '../utils/animation'
const data = {
  name : 'Ricardo Rosales Ganter',
  info : 'Soy Desarrollador Full Stack, especializado en crear soluciones eficientes.',

}
const HeroSection = ()=>{

  return(
    <div id="home" className={styles.contain}>

      <AnimatedComponent animationType="rightToLeft" >
        <h1 className={styles.h1}> Portafolio <br/>{data.name}</h1>
        <p className={styles.p}> BIENVENIDO A MI PORTAFOLIO </p>
        <p className={styles.p}> {data.info} </p>

      </AnimatedComponent>
    </div>

  )
}

export default HeroSection