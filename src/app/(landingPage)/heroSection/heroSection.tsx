import styles from '@/styles/(landingPage)/heroSection/heroSection.module.scss'
import AnimatedComponent from '../utils/animation'
import { dataHeroSection } from './data/data'

const HeroSection = () => {
  return (
    <div id="home" className={styles.contain}>
      <AnimatedComponent animationType="rightToLeft">
        <h1 className={styles.h1}>
          {' '}
          Portafolio <br />
          {dataHeroSection.name}
        </h1>
        <p className={styles.p}> BIENVENIDO A MI PORTAFOLIO </p>
        <p className={styles.p}> {dataHeroSection.info} </p>
      </AnimatedComponent>
    </div>
  )
}

export default HeroSection
