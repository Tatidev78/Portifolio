import { useState, useRef, useEffect } from 'react'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import Header from "../../components/Header";
import StackPanel from "../../components/StackPanel";
import Connect from "../../components/Connect";

import {
  Container,
  Content,
  ProjectsWrapper,
  ProjectsSlider,
  ArrowButton,
  ProjectsTrack,
  MobileSlider,
  MobileTrack,
  MobileCardWrapper
} from './styles'

const Home = () => {
  const [section, setSection] = useState('stack')
  const [language, setLanguage] = useState('pt')
  const [current, setCurrent] = useState(0)

  const mobileSliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth <= 480 && mobileSliderRef.current) {
      const cardWidth = mobileSliderRef.current.scrollWidth / projects.length
      mobileSliderRef.current.scrollTo({
        left: current * cardWidth,
        behavior: 'smooth'
      })
    }
  }, [current])

  const nextSlide = () => {
    if (current < projects.length - 1) {
      setCurrent(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1)
    }
  }

  return (
    <>
      <Header setSection={setSection} setLanguage={setLanguage} language={language} />

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

              <ProjectsWrapper className="desktop-only">
                <ArrowButton onClick={prevSlide} disabled={current === 0}>
                  ◀
                </ArrowButton>

                <ProjectsSlider>
                  <ProjectsTrack $current={current}>
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

                <ArrowButton onClick={nextSlide} disabled={current === projects.length - 1}>
                  ▶
                </ArrowButton>
              </ProjectsWrapper>

              <MobileSlider ref={mobileSliderRef}>
                <MobileTrack>
                  {projects.map((project) => (
                    <MobileCardWrapper key={project.id}>
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        stack={project.stack}
                        github={project.github}
                        live={project.live}
                      />
                    </MobileCardWrapper>
                  ))}
                </MobileTrack>
              </MobileSlider>
            </>
          )}

          {section === 'connect' && <Connect language={language} />}
        </Content>
      </Container>
    </>
  )
}

export default Home