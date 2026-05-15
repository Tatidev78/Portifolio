import {
  Panel,
  PanelTitle,
  SkillCategory,
  SkillsGrid,
  Tech
} from './styles'

type Props = {
  language: string
}

const StackPanel = ({ language }: Props) => {
  return (
    <Panel>
      <PanelTitle>
  {language === 'pt'
    ? 'MINHAS HABILIDADES'
    : 'MY SKILLS'}
</PanelTitle>

      <SkillCategory>
        <h3>
  {language === 'pt'
    ? 'STACK PRINCIPAL'
    : 'MAIN STACK'}
</h3>

        <SkillsGrid>
          <Tech>⚛ React</Tech>
          <Tech>🟦 TypeScript</Tech>
          <Tech>☕ Java</Tech>
          <Tech>🌱 Spring Boot</Tech>
          <Tech>🐘 PostgreSQL</Tech>
          <Tech>🟩 Node.js</Tech>
        </SkillsGrid>
      </SkillCategory>

      <SkillCategory>
        <h3>FRONTEND</h3>

        <SkillsGrid>
          <Tech>HTML5</Tech>
          <Tech>CSS3</Tech>
          <Tech>SASS</Tech>
          <Tech>Styled Components</Tech>
          <Tech>Bootstrap</Tech>
          <Tech>Redux</Tech>
        </SkillsGrid>
      </SkillCategory>

      <SkillCategory>
        <h3>BACKEND & {language === 'pt'
    ? 'ARQUITETURA'
    : 'ARCHITECTURE'}</h3>

        <SkillsGrid>
          <Tech>APIs REST</Tech>
          <Tech>JPA</Tech>
          <Tech>Maven</Tech>
          <Tech>JSF</Tech>
          <Tech>WildFly</Tech>
          <Tech>SQL</Tech>
        </SkillsGrid>
      </SkillCategory>

      <SkillCategory>
        <h3>{language === 'pt'
    ? 'TESTE E QUALIDADE'
    : 'TESTING & QUALITY'}</h3>

        <SkillsGrid>
          <Tech>Jest</Tech>
          <Tech>Testing Library</Tech>
          <Tech>Cypress</Tech>
        </SkillsGrid>
      </SkillCategory>

      <SkillCategory>
        <h3>
    {language === 'pt'
  ? 'FERRAMENTAS'
  : 'TOOLS'}
        </h3>
        
        <SkillsGrid>
          <Tech>Git</Tech>
          <Tech>GitHub</Tech>
          <Tech>Scrum</Tech>
          <Tech>CI/CD</Tech>
          <Tech>DevOps</Tech>
          <Tech>Big-O</Tech>
        </SkillsGrid>
      </SkillCategory>
    </Panel>
  )
}

export default StackPanel