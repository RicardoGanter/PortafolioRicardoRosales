import styles from '@/styles/components/heroSection/heroSection.module.scss'

const HeroSection = ()=>{
	return(
		<div id="home" className={styles.contain}>
				<h1> Ricardo Rosales Ganter</h1>
				<div className={styles.welcome}>
					<h2> BIENVENIDO A MI PORTAFOLIO </h2>
					<h2> Soy Desarrollador Full Stack, especializado en crear soluciones eficientes. </h2>
				</div>
		</div>
	)
}

export default HeroSection