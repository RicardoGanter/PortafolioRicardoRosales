const getSectionName = (section: string) => {
  if (section === 'home') {
    return 'Inicio'
  } else if (section === 'aboutMe') {
    return 'Sobre mi'
  } else if (section === 'skills') {
    return 'Habilidades'
  } else if (section === 'certificates') {
    return 'Certificados'
  } else if (section === 'contact') {
    return 'Contacto'
  } else {
    return section
  }
}

export default getSectionName
