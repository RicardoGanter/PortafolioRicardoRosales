
'use server'

const fs = require('fs');
const path = require('path');

const skillIconDir = path.join(__dirname,  '..', '..', 'public', 'skillicon');
const outputFilePath = path.join(skillIconDir, 'svgImports.ts');

const generateSvgImports = () => {
  const files = fs.readdirSync(skillIconDir);
  const imports = files
    .filter((file:string) => file.endsWith('.svg'))
    .map((file:string) => {
      const name = file.replace('.svg', '');
      return `import ${name} from './${file}';`;
    })
    .join('\n');

  const exports = `\nconst ImageSkills = {\n  ${files
    .filter((file:string) => file.endsWith('.svg'))
    .map((file:string) => file.replace('.svg', ''))
    .join(',\n  ')}\n};\n\nexport default ImageSkills;`;

  const content = `${imports}${exports}`;

  fs.writeFileSync(outputFilePath, content, 'utf8');
  console.log('SVG imports generated successfully!');
};

generateSvgImports();

