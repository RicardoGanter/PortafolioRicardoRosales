import Input from '@/components/ui/input/input'
import searchCertificateFilter from '../utils/filter'
import { useAppContext } from '../certificates'

const FilterCertificates = () => {
  const { dataCertificatesContext, setFilterContext } = useAppContext()

  const filtered = (data: string) => {
    const resultFilter = searchCertificateFilter(data, dataCertificatesContext)
    setFilterContext(resultFilter)
  }
  return (
    <div style={{ margin: '4rem' }}>
      <Input placeHolder="Buscar" functionOnChange={filtered} />
    </div>
  )
}

export default FilterCertificates
