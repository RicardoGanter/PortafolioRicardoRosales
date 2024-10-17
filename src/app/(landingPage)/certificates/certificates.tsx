'use client'
import AnimatedComponent from "../utils/animation"
import styles from '@/styles/(landingPage)/certificates/certificates.module.scss'
 
const Certificates = ()=>{  
return (

    <div id="certificates" className={styles.contain}>
        <AnimatedComponent animationType="rightToLeft">
        <h2>Certificados</h2> 
        </AnimatedComponent>
    </div>
    )
}



export default Certificates