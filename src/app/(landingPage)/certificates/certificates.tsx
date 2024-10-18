'use client'
import AnimatedComponent from "../utils/animation"
import styles from '@/styles/(landingPage)/certificates/certificates.module.scss'
import Certificate from "./components/certificate"
import FilterCertificates from "./components/filter" 
import dataCertificates from "./data/dataCertificates"
import React, { createContext,useContext, useEffect, useState } from "react"
import { CertificateType } from "./data/dataCertificates"

export interface AppContextType{ 
    dataCertificatesContext : CertificateType[]
    setDataCertificatesContext : React.Dispatch<React.SetStateAction<CertificateType[]>>
    filterContext : CertificateType[]
    setFilterContext : React.Dispatch<React.SetStateAction<CertificateType[]>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}



const Certificates = ()=>{  
    const [dataCertificatesContext, setDataCertificatesContext] = useState<CertificateType[]>(dataCertificates)
    const [filterContext, setFilterContext] = useState<CertificateType[]>([])

    useEffect(()=>{
        setFilterContext(dataCertificatesContext)
    },[])


return (
    <AppContext.Provider value={{dataCertificatesContext,setDataCertificatesContext,filterContext,setFilterContext}}>

        <div id="certificates" className={styles.contain}>
            <AnimatedComponent animationType="rightToLeft">
                <h2>Certificados</h2> 
                <FilterCertificates/>
                <div className={styles.containCertificates}>
                    {filterContext.map((data, key)=>{
                        return( 
                            <Certificate key={key} course={data.course} organization={data.organization} date={data.date} image={<data.image/>} url={ data.url || ''}/> 
                        )
                    })}
                </div>
            </AnimatedComponent>
        </div>
        
    </AppContext.Provider>
    )
} 
export default Certificates 