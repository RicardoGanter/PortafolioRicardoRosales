'use client'
import styles from '@/styles/(landingPage)/skills/SkillsProgramming.module.scss'
import Skill from './ui/skill'
import { useState } from 'react'  
import finalSkillCategories from './ui/dataSkill'
// let skillCategories = [
//   {
//     category: "Frontend",
//     skills: [
//       { name: "Html", knowledge: "Avanzado", image: ImageSkills.HTML },
//       { name: "CSS", knowledge: "Avanzado", image: ImageSkills.CSS }, 
//       { name: "JavaScript", knowledge: "Avanzado", image: ImageSkills.JavaScript },
//     ]
//   },
//   {
//     category: "Backend",
//     skills: [
//       { name: "Node.js", knowledge: "Intermedio", image: ImageSkills.NodeJS },
//       { name: "Express", knowledge: "Intermedio", image: ImageSkills.ExpressJS }
//     ]
//   },
//   {
//     category: "Tools",
//     skills: [
//       { name: "Git", knowledge: "Avanzado", image: ImageSkills.Git },
//       { name: "Docker", knowledge: "Intermedio", image: ImageSkills.HardHat }
//     ]
//   }
// ];


const SkillsProgramming = ()=>{   
  const [styleTitle, setStyleTitle] = useState(true)

let a = finalSkillCategories
console.log(a)

 return (
    <div className={styleTitle ? styles.contain : styles.containAllViewFilter}>
      <button onClick={() => setStyleTitle(!styleTitle)}>Toggle View</button>  
       {/* {svgUrls.html && <img src={svgUrls.html} alt="HTML" />} */}
      {finalSkillCategories.map((category, catIndex) => (
        <div key={catIndex} style={{display:"contents"}}>
          <h3 className={styleTitle ? styles.title : styles.titleNone}>
            {category.category}
          </h3>
          
          <div className={styleTitle ? styles.containSkillCategory : styles.containSkillAllViewFilter}>
            {category.skills.map((skill, key) => (
              <Skill key={key} name={skill.name} knowledge={""} image={<skill.image />} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsProgramming