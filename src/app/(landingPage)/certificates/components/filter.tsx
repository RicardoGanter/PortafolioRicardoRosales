import Input from "@/components/ui/input/input"
import searchCertificateFilter from "../utils/filter"


const filterCertificates = ()=>{

    return(
        <div>
            <Input placeHolder="Buscar" functionOnChange={searchCertificateFilter}/>
        </div>
    )
}

export default filterCertificates