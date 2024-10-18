import { CertificateType } from '../data/dataCertificates'

const searchCertificateFilter = (
  data: string,
  filterContext: CertificateType[],
) => {
  const filter = filterContext.filter((dataCertificate) => {
    return dataCertificate.course.toLowerCase().includes(data.toLowerCase())
  })
  return filter
}

export default searchCertificateFilter
