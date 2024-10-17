 
enum KnowledgeLevel {
    Basic = 'básico',
    Intermediate = 'intermedio',
    Advanced = 'avanzado'
}
 
const dataSkillKnowLedge: Record<string, KnowledgeLevel> = {
    'HTML': KnowledgeLevel.Advanced,
    'CSS': KnowledgeLevel.Intermediate,
    'JavaScript': KnowledgeLevel.Advanced,
    'React': KnowledgeLevel.Intermediate,
    'NextJS': KnowledgeLevel.Intermediate,
    'SCSS': KnowledgeLevel.Intermediate,
    'WebJS': KnowledgeLevel.Intermediate,
    'TailWind': KnowledgeLevel.Basic,
    'BootStrap': KnowledgeLevel.Intermediate,
    'Solidity': KnowledgeLevel.Intermediate,
    'MySQL': KnowledgeLevel.Intermediate,
    'ExpressJS': KnowledgeLevel.Intermediate,
    'Jest': KnowledgeLevel.Basic,
    'HardHat': KnowledgeLevel.Intermediate,
    'PostMan': KnowledgeLevel.Intermediate,
    'GitHub': KnowledgeLevel.Intermediate,
    'Jira': KnowledgeLevel.Basic,
    'Trello': KnowledgeLevel.Basic,
    'Git': KnowledgeLevel.Intermediate,
    'NodeJS': KnowledgeLevel.Intermediate,
};

export default dataSkillKnowLedge;
