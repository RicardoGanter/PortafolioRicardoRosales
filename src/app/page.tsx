import React from "react"
import styles from "@/styles/page.module.scss"
import HeroSection from "@/app/(landingPage)/heroSection/heroSection"
import AboutMe from "@/app/(landingPage)/aboutMe/aboutMe"
import dynamic from 'next/dynamic'

const Skills = dynamic(() => import("./(landingPage)/skills/skills"), {
  suspense: true, 
})
const Certificates = dynamic (() => import('./(landingPage)/certificates/certificates'),{
  suspense :true
})
export default function Home() {
  return (
    <div className={styles.contain}>
      <HeroSection/>
      <AboutMe/>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </React.Suspense>
      <React.Suspense>
        <Certificates/> 
      </React.Suspense>
    </div>
  )
}
