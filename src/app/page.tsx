import React from "react"
import styles from "@/styles/page.module.scss"
import HeroSection from "@/app/(landingPage)/heroSection/heroSection"
import AboutMe from "@/app/(landingPage)/aboutMe/aboutMe"
import dynamic from 'next/dynamic'

const Skills = dynamic(() => import("./(landingPage)/skills/skills"), {
  suspense: true, // Habilita el soporte de Suspense
})
export default function Home() {
  return (
    <div className={styles.contain}>
      <HeroSection/>
      <AboutMe/>
      <React.Suspense fallback={<div>Loading...</div>}> {/* Muestra un fallback mientras se carga */}
        <Skills />
      </React.Suspense>
    </div>
  )
}
