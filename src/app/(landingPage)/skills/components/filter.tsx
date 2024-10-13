import styles from '@/styles/(landingPage)/skills/filterComponent.module.scss'
import Input from '@/components/ui/input/input'
import Select from '@/components/ui/select/select'

const FilterComponent = ()=>{
  const knowledge : string[] = ['Avanzado','Intermedio','Basico']
  const view : string[] = ['Todo', 'Por Categorías']
  return(
    <div className={styles.contain}>
      <p>Filtro</p>
      <Input placeHolder='Buscar'/>
      <Select title='Nivel de conocimientos' options={knowledge}/>

      <Select title='Vista' options={view}/>
    </div>
  )
}

export default FilterComponent