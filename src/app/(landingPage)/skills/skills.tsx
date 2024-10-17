'use client'

import React, { createContext, useContext, useState,useEffect } from 'react'
import styles from '@/styles/(landingPage)/skills/skills.module.scss'
import FilterComponent from './components/filter'
import SkillsProgramming from './components/skillsProgramming'
import finalSkillCategories, { SkillCategory } from './components/ui/dataSkill'
import { updateMultipleSkills } from './components/ui/skillsKnowledge'
import AnimatedComponent from '../utils/animation'


interface AppContextType {
  styleTitle: boolean
  setStyleTitle: React.Dispatch<React.SetStateAction<boolean>>
  setDataSkill: React.Dispatch<React.SetStateAction<SkillCategory[]>>
  dataSkill: SkillCategory[]
  dataSkillNoModify : SkillCategory[]
  filter: SkillCategoryfilter[]
  setFilter: React.Dispatch<React.SetStateAction<SkillCategoryfilter[]>>

}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}
interface Skill {
  name: string;
  knowledge?: string;
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SkillCategoryfilter {
  category: string;
  skills: Skill[];
}
export default function Skills() {
  const [styleTitle, setStyleTitle] = useState(true)
  const [dataSkill, setDataSkill] = useState<SkillCategory[]>(finalSkillCategories)
  const [filter, setFilter] = useState<SkillCategoryfilter[]>([])
  const intermedio = 'intermedio'
  const avanzado= 'avanzado'
  const basico = 'básico'

  useEffect(() => {
    const updatedSkills = updateMultipleSkills(dataSkill, {
      'HTML': avanzado,
      'CSS': intermedio,
      'JavaScript': avanzado,
      'React': intermedio,
      'NextJS' : intermedio,
      'SCSS' : intermedio,
      'WebJS' : intermedio,
      'TailWind': basico,
      'BootStrap' : basico,
      'Solidity' : intermedio,
      'MySQL' : intermedio,
      'ExpressJS' : intermedio,
      'Jest' : basico,
      "HardHat" : intermedio,
      'PostMan' : intermedio,
      'GitHub' : intermedio,
      'Jira': basico,
      'Trello': intermedio,
      'Git' : intermedio,
      'NodeJS':  intermedio,

    })
    setDataSkill(updatedSkills)
    setFilter(updatedSkills)
  }, [])

  const dataSkillNoModify = dataSkill

  return (
    <AppContext.Provider value={{ filter, setFilter,dataSkillNoModify, setStyleTitle, styleTitle, dataSkill, setDataSkill }}>
      <div id="skills" className={styles.contain}>
        <AnimatedComponent animationType='opacity'>
          <h2 className={styles.h2}>Skills</h2>
          <FilterComponent />
          <SkillsProgramming />
        </AnimatedComponent>
      </div>
    </AppContext.Provider>
  )
}