import ImageSkills from "@/public/skillIcon/svgImports";

export interface Skill {
    name: string;
    knowledge?: 'básico' | 'intermedio' | 'avanzado';
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>;  
    type: string; 
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [];

const Frontend: string = 'Front End'
const Backend: string = 'Back End' 
const Testing: string = 'Testing'
const Tools: string = 'Otras Herramientas'

// Mapa de categorías por habilidad
const categoryMap: Record<string, string> = {
    Frontend: 'HTML,CSS,SCSS,TailWind,BootStrap,JavaScript,React,NextJS,WebJS,Angular',
    Backend: 'NodeJS,MySQL,Solidity,ExpressJS',
    Testing: 'Jest,HardHat,PostMan',
    Tools: 'Git,GitHub,Jira,Trello'
};

// Función para agregar habilidades a las categorías automáticamente
const addSkillsAutomatically = () => {
    Object.keys(ImageSkills).forEach(skillName => {
        let skillType = '';
        for (const [category, skills] of Object.entries(categoryMap)) {
            if (skills.split(',').includes(skillName)) {
                skillType = eval(category); // Usamos eval para obtener el valor de la variable (Frontend, Backend, etc.)
                break;
            }
        }
        
        if (skillType) {
            const skillImage = ImageSkills[skillName as keyof typeof ImageSkills];
            const skill: Skill = { 
                name: skillName, 
                image: skillImage as React.ComponentType<React.SVGProps<SVGSVGElement>>, 
                type: skillType 
            };
            const existingCategory = skillCategories.find(cat => cat.category === skillType);
            if (existingCategory) {
                existingCategory.skills.push(skill);
            } else {
                skillCategories.push({ category: skillType, skills: [skill] });
            }
        }
    });
}; 

addSkillsAutomatically();
 
const removeEmptyCategories = () => {
    return skillCategories.filter(category => category.skills.length > 0);
}; 

export const finalSkillCategories = removeEmptyCategories();

export default finalSkillCategories;