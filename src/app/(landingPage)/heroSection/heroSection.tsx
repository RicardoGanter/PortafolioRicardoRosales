import styles from '@/styles/(landingPage)/heroSection/heroSection.module.scss'

const HeroSection = ()=>{
  return(
    <div id="home" className={styles.contain}>
      <h1> Portafolio <br/> Ricardo Rosales Ganter</h1> 
      <p> BIENVENIDO A MI PORTAFOLIO </p>
      <p> Soy Desarrollador Full Stack, especializado en crear soluciones eficientes. </p>
    </div>
  )
}

export default HeroSection