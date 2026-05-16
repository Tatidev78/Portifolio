import {
  Container,
  Title,
  Text,
  Links,
  LinkItem
} from './styles'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

type Props = {
  language: string
}

const Connect = ({ language }: Props) => {
  return (
    <Container>
      <Title>
        {language === 'pt' ? 'Conecte-se comigo' : 'Connect with me'}
      </Title>

      <Text>
        {language === 'pt'
          ? 'Para mais projetos e atualizações, acompanhe meu trabalho:'
          : 'For more projects and updates, follow my work:'}
      </Text>

      <Links>
        <LinkItem
          href="https://github.com/Tatidev78"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} />
          GitHub
        </LinkItem>

        <LinkItem
          href="https://www.linkedin.com/in/tatiana-coimbra-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
          LinkedIn
        </LinkItem>
      </Links>
    </Container>
  )
}

export default Connect