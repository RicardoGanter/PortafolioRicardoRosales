'use client'
import AnimatedComponent from "../utils/animation"
import styles from '@/styles/(landingPage)/certificates/certificates.module.scss'
import Certificate from "./components/certificate"
import FilterCertificates from "./components/filter"
import Platzi from '@/public/certificates/Platzi.svg'
const data = [
    {
        organization: 'Platzi',
        image : Platzi,
        course: 'Diploma del Curso de Closures y Scope en JavaScript',
        date: '07/05/2023',
        url : 'https://platzi.com/p/ricardorosalesganter/curso/1557-git-github/diploma/detalle/'
    }
]


const Certificates = ()=>{  
return (

    <div id="certificates" className={styles.contain}>
        <AnimatedComponent animationType="rightToLeft">
            <h2>Certificados</h2> 
            <FilterCertificates/>
            <div className={styles.containCertificates}>
                {data.map((data, key)=>{
                    return( 
                        <Certificate key={key} course={data.course} organization={data.organization} date={data.date} image={<data.image/>} url={data.url}/> 
                    )
                })}
            </div>
        </AnimatedComponent>
    </div>
    )
}



export default Certificates
