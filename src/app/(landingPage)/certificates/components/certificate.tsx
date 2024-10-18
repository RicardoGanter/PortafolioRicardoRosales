
import styles from '@/styles/(landingPage)/certificates/certificate.module.scss'
 import Link from 'next/link'
import Button from '@/components/ui/button/button'
import React,{ ReactNode } from 'react'

interface certificateProps {
    course : string
    organization :string
    image : ReactNode
    date : string
    url: string
}


const Certificate : React.FC<certificateProps> = ( {course, organization,image, date,url})=>{
    return(
        <div className={styles.contain}>
            <div className={styles.containImageAndText}> 
                
                 {image}
                {organization}
            </div>
            <p>{course}</p>
            <div className={styles.containVerifiedCertificate }>
                <div className={styles.containVerified}>
                    <p>Aprovado </p> 
                    <p>{date}</p>
                </div> 
                <Link target='_blank' href={url}>
                
            <Button/>
                </Link>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}

export default Certificate