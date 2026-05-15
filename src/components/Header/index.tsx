import { Container, Logo, Nav, Status, Language } from './styles'

type Props = {
  setSection: (section: string) => void
  setLanguage: (language: string) => void
  language: string
}

const Header = ({ setSection, setLanguage, language }: Props) => {
  return (
    <Container>
      <Logo>Tati.OS</Logo>

      <Nav>
        <button onClick={() => setSection('stack')}>
          {language === 'pt' ? 'Tecnologias' : 'Stack'}
        </button>

        <button onClick={() => setSection('projects')}>
          {language === 'pt' ? 'Projetos' : 'Projects'}
        </button>

        {/* <button onClick={() => setSection('journey')}>
          {language === 'pt' ? 'Jornada' : 'Journey'}
        </button> */}

        <button onClick={() => setSection('connect')}>
          {language === 'pt' ? 'Contato' : 'Connect'}
        </button>
      </Nav>

      <Language>
        <button onClick={() => setLanguage('pt')}>
          PT
        </button>

        <button onClick={() => setLanguage('en')}>
          EN
        </button>
      </Language>

      <Status>
        <span></span>
        {language === 'pt'
          ? 'Disponível para projetos'
          : 'Available for work'}
      </Status>
    </Container>
  )
}

export default Header