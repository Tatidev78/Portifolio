import {
  Card,
  ProjectImage,
  Content,
  Title,
  Description,
  Stack,
  Tech,
  Links
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  stack: string[]
  github: string
  live: string
}

const ProjectCard = ({
  title,
  description,
  image,
  stack,
  github,
  live
}: Props) => {
  return (
    <Card>
      <ProjectImage
        src={image}
        alt={title}
      />

      <Content>
        <Title>
          {title}
        </Title>

        <Description>
          {description}
        </Description>

        <Stack>
          {stack.map((tech) => (
            <Tech key={tech}>
              {tech}
            </Tech>
          ))}
        </Stack>

        <Links>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </Links>
      </Content>
    </Card>
  )
}

export default ProjectCard