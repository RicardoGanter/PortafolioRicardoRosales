import React from 'react'
import styles from '@/styles/(landingPage)/skills/SkillsProgramming.module.scss'
import Skill from './ui/skill'
import { useAppContext } from '../skills'


const SkillsProgramming = () => {
  const { styleTitle, filter } = useAppContext() 
  return (
    <div className={styleTitle ? styles.contain : styles.containAllViewFilter}>
      {filter &&  filter.map((category, catIndex) => (
        <div key={catIndex} style={{ display:"contents" }}>
          <h3 className={styleTitle ? styles.title : styles.titleNone}>
            {category.category}
          </h3>
          <div className={styleTitle ? styles.containSkillCategory : styles.containSkillAllViewFilter}>
            {category.skills.map((skill, key) => (
              <Skill
                key={key}
                name={skill.name}
                knowledge={skill.knowledge || ""}
                image={<skill.image/>}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsProgramming