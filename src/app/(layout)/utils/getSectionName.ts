


const  getSectionName = (section: string)=>{
  switch (section) {
  case 'home': return 'Inicio'
  case 'aboutMe': return 'Sobre mi'
  case 'skills': return 'Habilidades'
  case 'certificates': return 'Certificados'
  case 'contact': return 'Contacto'
  default: return section
  }
}

export default getSectionName