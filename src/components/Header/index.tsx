import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import {
  Container,
  Logo,
  Nav,
  Status,
  Language,
  MenuButton,
  MobileMenu,
  Overlay
} from './styles'

type Props = {
  setSection: (section: string) => void
  setLanguage: (language: string) => void
  language: string
}

const Header = ({ setSection, setLanguage, language }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (section: string) => {
    setSection(section)
    setMenuOpen(false)
  }

  return (
    <Container>
      <Logo onClick={() => handleNavClick('stack')}>Tati.OS</Logo>

      <MenuButton onClick={() => setMenuOpen(!menuOpen)} $isOpen={menuOpen}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <Overlay $isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

      <MobileMenu $isOpen={menuOpen}>
        <Nav>
          <button 
            onClick={() => handleNavClick('stack')}
            className={language === 'pt' ? 'pt' : 'en'}
          >
            {language === 'pt' ? 'Tecnologias' : 'Stack'}
          </button>

          <button onClick={() => handleNavClick('projects')}>
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </button>

          <button onClick={() => handleNavClick('connect')}>
            {language === 'pt' ? 'Contato' : 'Connect'}
          </button>
        </Nav>

        <Language>
          <button 
            onClick={() => setLanguage('pt')} 
            className={language === 'pt' ? 'active' : ''}
          >
            PT
          </button>

          <button 
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'active' : ''}
          >
            EN
          </button>
        </Language>

        <Status>
          <span className="pulse" />
          {language === 'pt'
            ? 'Disponível para projetos'
            : 'Available for work'}
        </Status>
      </MobileMenu>
    </Container>
  )
}

export default Header