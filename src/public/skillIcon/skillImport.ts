'use server'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const skillIconDir = path.join(__dirname, '..', '..', 'public', 'skillicon')
const outputFilePath = path.join(skillIconDir, 'svgImports.ts')

const generateSvgImports = () => {
  const files = fs.readdirSync(skillIconDir)
  const imports = files
    .filter((file: string) => file.endsWith('.svg'))
    .map((file: string) => {
      const name = file.replace('.svg', '')
      return `import ${name} from './${file}'`
    })
    .join('\n')

  const exports = `\nconst ImageSkills = {\n  ${files
    .filter((file: string) => file.endsWith('.svg'))
    .map((file: string) => file.replace('.svg', ','))
    .join('\n  ')}\n}\n\nexport default ImageSkills`

  const content = `${imports}${exports}`

  fs.writeFileSync(outputFilePath, content, 'utf8')
}

generateSvgImports()
