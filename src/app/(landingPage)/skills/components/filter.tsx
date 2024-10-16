import styles from '@/styles/(landingPage)/skills/filterComponent.module.scss'
import Input from '@/components/ui/input/input'
import Select from '@/components/ui/select/select'
import { useState } from 'react'
import { useAppContext } from '../skills' 
const FilterComponent = ()=>{
  const { dataSkill, setStyleTitle, setFilter} = useAppContext()
  const [searchTerm, setSearchTerm] = useState('');
  const [knowledgeLevel, setKnowledgeLevel] = useState('Todo'); 
  const knowledge : string[] = ['Todo','Avanzado','Intermedio','básico']
  const view : string[] = ['Todo', 'Por Categorías']
  const switchStyleTitle = ( vista : string) =>{
    if(vista === 'Todo'){
      return setStyleTitle(false)
    }
    else if(vista === 'Por Categorías'){
      return setStyleTitle(true)
    }
  }
  const combinedFilter = (dataName: string, dataCategory: string) => {
    const filteredBySearch = dataSkill.map((data) => {
        const filteredSkills = data.skills.filter((skill) => {
            return skill.name.toLowerCase().includes(dataName.toLowerCase());
        }); 
        return {
            category: data.category,
            skills: filteredSkills,
        };
    }).filter(category => category.skills.length > 0) 
    const finalFilter = filteredBySearch.map((data) => {
        const filteredSkills = data.skills.filter((skill) => {
            return dataCategory === 'Todo' || skill.knowledge === dataCategory.toLowerCase()
        })
        return {
            category: data.category,
            skills: filteredSkills,
        };
    }).filter(category => category.skills.length > 0);

    setFilter(finalFilter)
};
const searchFilter = (term: string) => {
  setSearchTerm(term)
  combinedFilter(term, knowledgeLevel); 
};

const knowledgeLevelFilter = (level : string) => {
  setKnowledgeLevel(level)
  combinedFilter(searchTerm, level) 
}
  return(
    <div className={styles.contain}>
      <p>Filtro</p>
      <Input functionOnChange={searchFilter} placeHolder='Buscar'/>
      <Select title='Nivel de conocimientos' functionOnClick={knowledgeLevelFilter} options={knowledge}/>
      <Select functionOnClick={switchStyleTitle} title='Vista' options={view} />
    </div>
  )
}

export default FilterComponent