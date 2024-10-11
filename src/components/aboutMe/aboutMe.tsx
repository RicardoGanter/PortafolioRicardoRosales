import styles from "@/styles/components/aboutMe/aboutMe.module.scss"


const AboutMe = ()=>{
    return (
        <div id="aboutMe" className={styles.contain}>
            <h1 >Sobre mi</h1>
            <p>
                Soy un Desarrollador Full Stack con experiencia.
                Comencé a programar en 2022, impulsado por el desarrollo de un
                proyecto en blockchain. Desde entonces, he adquirido conocimientos 
                en diversas tecnologías y estoy comprometido en crear soluciones eficientes.
            </p>
            <p>
                Actualmente, me especializo en JavaScript de manera avanzada, enfocándome
                en escribir código limpio y mantenible,
                asegurando que sea fácil de entender y adaptarse a cambios futuros.
            </p>
        </div>
    )
}

export default AboutMe