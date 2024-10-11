import styles from '@/styles/(landingPage)/skills/filterComponent.module.scss'
import Input from '@/components/ui/input/input'
import Select from '@/components/ui/select/select'

const FilterComponent = ()=>{
  const knowledge = ['Avanzado','Intermedio','Basico']
  return(
    <div className={styles.contain}>
      <p>Filtro</p>
      <Input/>
      <Select title='Nivel de conocimientos' options={knowledge}/> 
      
      <Select options={knowledge}/> 
    </div>
  )
}

export default FilterComponent