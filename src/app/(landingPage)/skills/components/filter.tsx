import styles from '@/styles/(landingPage)/skills/filterComponent.module.scss'
import Input from '@/components/ui/input/input'
import Select from '@/components/ui/select/select'
import { useState } from 'react'
import { useAppContext } from '../skills'
import SearchIcon from '@/public/search.svg'
import combinedFilter from './utils/filter'
const FilterComponent = () => {
  const { dataSkill, setStyleTitle, setFilter } = useAppContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [knowledgeLevel, setKnowledgeLevel] = useState('Todo')
  const knowledge: string[] = ['Todo', 'Avanzado', 'Intermedio', 'básico']
  const view: string[] = ['Todo', 'Por Categorías']
  const switchStyleTitle = (vista: string) => {
    if (vista === 'Todo') {
      return setStyleTitle(false)
    } else if (vista === 'Por Categorías') {
      return setStyleTitle(true)
    }
  }
  const searchFilter = (term: string) => {
    setSearchTerm(term)
    const combinedFiltered = combinedFilter(dataSkill, term, knowledgeLevel)
    setFilter(combinedFiltered)
  }

  const knowledgeLevelFilter = (level: string) => {
    setKnowledgeLevel(level)
    const combinedFiltered = combinedFilter(dataSkill, searchTerm, level)
    setFilter(combinedFiltered)
  }
  return (
    <div className={styles.contain}>
      {/* <p>Filtro</p> */}
      <Input
        functionOnChange={searchFilter}
        icon={<SearchIcon />}
        placeHolder="Buscar"
      />
      <Select
        title="Nivel de conocimientos"
        functionOnClick={knowledgeLevelFilter}
        options={knowledge}
      />
      <Select functionOnClick={switchStyleTitle} title="Vista" options={view} />
    </div>
  )
}

export default FilterComponent
