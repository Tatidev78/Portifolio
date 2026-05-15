import {
  Container,
  Title,
  Text,
  Links,
  LinkItem
} from './styles'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Connect = () => {
  return (
    <Container>
      <Title>Conecte-se comigo</Title>

      <Text>
        Para mais projetos e atualizações, acompanhe meu trabalho:
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