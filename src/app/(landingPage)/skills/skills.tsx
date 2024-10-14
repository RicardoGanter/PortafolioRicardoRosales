import styles from '@/styles/(landingPage)/skills/skills.module.scss'
import FilterComponent from './components/filter'
import SkillsProgramming from './components/skillsProgramming'

const Skills = ()=>{
  return(
    <div id='skills' className={styles.contain}>
      <h2>Skills</h2>
      <div></div>
      <FilterComponent/>
      <SkillsProgramming/>
    </div>
  )
}


export default Skills