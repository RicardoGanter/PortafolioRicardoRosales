import Input from "@/components/ui/input/input"
import searchCertificateFilter from "../utils/filter"


const FilterCertificates = ()=>{

    return(
        <div style={{margin:'4rem'}}>
            <Input placeHolder="Buscar" functionOnChange={searchCertificateFilter}/>
        </div>
    )
}

export default FilterCertificates