import ImageSkills from "@/public/skillIcon/svgImports";

// Definición de la interfaz Skill y SkillCategory
export interface Skill {
    name: string;
    knowledge?: string; // Conocimiento se asignará externamente
    image: string; // Ruta de la imagen
    type: string; // Tipo (Frontend, Backend, etc.)
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

// Inicializamos las categorías de habilidades
const skillCategories: SkillCategory[] = [];

const Frontend : string = 'Front End'
const Backend : string = 'Back End'
const tols : string = 'Otras Herramientas'
const Testing : string = 'Testing'
// Mapa de habilidades y sus categorías
const skillMap: Record<string, string> = {
    HTML: Frontend,
    CSS: Frontend,
    SCSS : Frontend,
    TailWind : Frontend,
    BootStrap : Frontend,
    JavaScript: Frontend,
    React: Frontend,
    NextJS: Frontend,
    WebJS : Frontend, 
    NodeJS: Backend,
    MySQL : Backend,
    Solidity: Backend,
    ExpressJS: Backend,
    Jest : Testing,
    HardHat : Testing,
    PostMan : Testing,
    Git: tols, 
};

// Función para agregar habilidades a las categorías automáticamente
const addSkillsAutomatically = () => {
    Object.keys(skillMap).forEach(skillName => {
        const category = skillMap[skillName];
        const skillImage = ImageSkills[skillName as keyof typeof ImageSkills];
        const skillType = category; // Tipo de habilidad es igual a la categoría
        const skill: Skill = { name: skillName, image: skillImage, type: skillType };

        // Busca si la categoría ya existe en skillCategories
        const existingCategory = skillCategories.find(cat => cat.category === category);
        if (existingCategory) {
            existingCategory.skills.push(skill);
        } else {
            skillCategories.push({ category, skills: [skill] });
        }
    });
};

// Llamar a la función para agregar las habilidades
addSkillsAutomatically();

// Función para limpiar categorías vacías
const removeEmptyCategories = () => {
    return skillCategories.filter(category => category.skills.length > 0);
};

// Obtenemos las categorías finales sin las vacías
const finalSkillCategories = removeEmptyCategories();

// Imprimir las categorías finales para verificar
console.log(finalSkillCategories);

export default finalSkillCategories;
