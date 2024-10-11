import styles from "@/styles/page.module.scss"
import HeroSection from "@/app/(landingPage)/heroSection/heroSection"
import AboutMe from "@/app/(landingPage)/aboutMe/aboutMe"
import Skills from "./(landingPage)/skills/skills"

export default function Home() {
  return (
    <div className={styles.contain}>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}
