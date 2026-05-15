import { useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import Header from "../../components/Header";
import StackPanel from "../../components/StackPanel";
import Connect from "../../components/Connect";


import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container, Content,  ProjectsWrapper,
  ProjectsSlider, ArrowButton, ProjectsTrack } from './styles'

const Home = () => {
  const [section, setSection] = useState('stack')
  const [language, setLanguage] = useState('pt')
  const [current, setCurrent] = useState(0)

const nextSlide = () => {
  if (current < projects.length - 1) {
    setCurrent(current + 1)
  }
}

const prevSlide = () => {
  if (current > 0) {
    setCurrent(current - 1)
  }
}

  return (
    <>
      <Header setSection={setSection} setLanguage={setLanguage} language={language}/>

      <Container>
        <Content>
          {section === 'stack' && (
            <>
               <h1>
                    {language === 'pt' ? (
                      <>
                        Desenvolvedora
                        <br />
                        Full Stack Jr
                      </>
                    ) : (
                      <>
                        Jr Full Stack
                        <br />
                        Engineering
                      </>
                    )}
                </h1>

              <p>
                {language === 'pt' ? (
                  <>
                    React no frontend.
                    <br />
                    Java & Spring Boot no backend.
                    <br />
                    Construindo aplicações modernas com arquitetura escalável.
                  </>
                ) : (
                  <>
                    React on the frontend.
                    <br />
                    Java & Spring Boot on the backend.
                    <br />
                    Building modern applications with scalable architecture.
                  </>
                )}
              </p>
              <StackPanel language={language} />
            </>
          )}

          {section === 'projects' && (
  <>
    <h1>
      {language === 'pt' ? (
        <>
          Projetos
          <br />
          em Destaque
        </>
      ) : (
        <>
          Featured
          <br />
          Projects
        </>
      )}
    </h1>

    <p>
      {language === 'pt' ? (
        <>
          Projetos desenvolvidos com foco em experiência do usuário,
          performance e arquitetura profissional.
        </>
      ) : (
        <>
          Projects built with focus on user experience,
          performance and professional architecture.
        </>
      )}
    </p>

  <ProjectsWrapper>
  <ArrowButton onClick={prevSlide}>
  ◀
  </ArrowButton>

  <ProjectsSlider>
  <ProjectsTrack
    style={{
      transform: `translateX(-${current * 380}px)`
    }}
  >
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        image={project.image}
        stack={project.stack}
        github={project.github}
        live={project.live}
      />
    ))}
  </ProjectsTrack>
</ProjectsSlider>

  <ArrowButton onClick={nextSlide}>
  ▶
</ArrowButton>
</ProjectsWrapper>
</>
)}

          {section === 'journey' && (
                  <>
                    <h1>
                      {language === 'pt' ? (
                        <>
                          Minha
                          <br />
                          Jornada
                        </>
                      ) : (
                        <>
                          Developer
                          <br />
                          Journey
                        </>
                      )}
                    </h1>

                    <p>
                      {language === 'pt' ? (
                        <>
                          Minha história. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit.
                        </>
                      ) : (
                        <>
                          My story. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit.
                        </>
                      )}
                    </p>
                  </>
                )}

         {section === 'connect' && <Connect />}
         </Content>
      </Container>
    </>
  )
}

export default Home