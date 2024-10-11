import styles from '@/styles/(landingPage)/skills/skills.module.scss'
import FilterComponent from './components/filter'


const Skills = ()=>{
    return(
        <div className={styles.contain}>
            <h2>Skills</h2> 
            <div></div>
            <FilterComponent/>
        </div>
    )
}


export default Skills