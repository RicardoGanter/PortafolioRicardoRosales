import { SkillCategory } from '../ui/dataSkill'

const combinedFilter = (
  dataSkill: SkillCategory[],
  dataName: string,
  dataCategory: string,
) => {
  const filteredBySearch = dataSkill
    .map((data) => {
      const filteredSkills = data.skills.filter((skill) => {
        return skill.name.toLowerCase().includes(dataName.toLowerCase())
      })
      return {
        category: data.category,
        skills: filteredSkills,
      }
    })
    .filter((category) => category.skills.length > 0)
  const finalFilter = filteredBySearch
    .map((data) => {
      const filteredSkills = data.skills.filter((skill) => {
        return (
          dataCategory === 'Todo' ||
          skill.knowledge === dataCategory.toLowerCase()
        )
      })
      return {
        category: data.category,
        skills: filteredSkills,
      }
    })
    .filter((category) => category.skills.length > 0)

  return finalFilter
}

export default combinedFilter
