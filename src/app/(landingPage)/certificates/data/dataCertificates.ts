import Platzi from '@/public/certificates/Platzi.svg'
import UCC from '@/public/certificates/UCChile.svg'
import Generation from '@/public/certificates/Generation.svg'

export interface CertificateType {
  organization: string
  image: string
  course: string
  date: string
  url?: string
}

const dataCertificates: CertificateType[] = [
  {
    organization: 'Platzi',
    image: Platzi,
    course: 'Curso de Closures y Scope en JavaScript',
    date: '07/05/2023',
    url: 'https://platzi.com/p/ricardorosalesganter/curso/1557-git-github/diploma/detalle/',
  },
  {
    organization: 'Platzi',
    image: Platzi,
    course: 'Curso Básico de Figma',
    date: '08/05/2023',
    url: 'https://platzi.com/p/ricardorosalesganter/curso/4038-figma-basico/diploma/detalle/',
  },
  {
    organization: 'Platzi',
    image: Platzi,
    course: 'Curso Profesional de Git y GitHub',
    date: '07/05/2023',
    url: 'https://platzi.com/p/ricardorosalesganter/curso/1557-git-github/diploma/detalle/',
  },
  {
    organization: 'Ponticia Universidad Católica de Chile',
    image: UCC,
    course: 'Ruta del Emprendimiento: Potencia tu negocio',
    date: '29/01/2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/7SRWGUC22RC5',
  },
  {
    organization: 'Generation Chile',
    image: Generation,
    course: 'Desarrollador/a Full Stack JavaScript',
    date: '01/09/2024',
  },
]

export default dataCertificates
