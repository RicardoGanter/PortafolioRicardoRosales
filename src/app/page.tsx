import styles from "@/styles/page.module.scss"
import HeroSection from "@/components/heroSection/heroSection"
import AboutMe from "@/components/aboutMe/aboutMe"
export default function Home() {
  return (
    <div className={styles.contain}> 
      <HeroSection/>
      <AboutMe/>  
    </div>
  )
}
