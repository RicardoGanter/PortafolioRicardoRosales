import { SkillCategory } from './dataSkill'

type KnowledgeLevel = 'básico' | 'intermedio' | 'avanzado'

export function updateSkillKnowledge(
  categories: SkillCategory[],
  skillName: string,
  level: KnowledgeLevel,
): SkillCategory[] {
  return categories.map((category) => ({
    ...category,
    skills: category.skills.map((skill) =>
      skill.name === skillName ? { ...skill, knowledge: level } : skill,
    ),
  }))
}

export function updateMultipleSkills(
  categories: SkillCategory[],
  skills: Record<string, KnowledgeLevel>,
): SkillCategory[] {
  let updatedCategories = [...categories]

  Object.entries(skills).forEach(([skillName, level]) => {
    updatedCategories = updateSkillKnowledge(
      updatedCategories,
      skillName,
      level,
    )
  })

  return updatedCategories
    .map((category) => ({
      ...category,
      skills: category.skills.filter((skill) => skill.knowledge),
    }))
    .filter((category) => category.skills.length > 0)
}
