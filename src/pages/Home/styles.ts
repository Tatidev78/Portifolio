import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 120px 120px 0;

  background: #0b0b0f;

  position: relative;
  overflow: hidden;

  gap: 120px;
`

export const Content = styled.div`
  max-width: 620px;

  display: flex;
  flex-direction: column;

  gap: 32px;

  span {
    font-size: 12px;

   text-transform: uppercase;

    color: #71717a;
  }

  h1 {
    font-size: 45px;

    line-height: 1;

    font-weight: 300;

    letter-spacing: -4px;

    margin: 0;
  }

  p {
    max-width: 540px;

    font-size: 18px;

    color: #a1a1aa;

    line-height: 1.8;

    margin: 0;
  }

  h2 {
    font-size: 22px;

    font-weight: 400;

    line-height: 1.8;

    color: #fafafa;

    word-break: break-word;
  }
`
export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`
export const ProjectsSlider = styled.div`
  display: flex;
  gap: 0;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 380px;
  padding: 20px 0;
`

export const ArrowButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: #1f1f1f;
  color: white;
  font-size: 24px;
  cursor: pointer;
  flex-shrink: 0;
`

export const ProjectsTrack = styled.div`
  display: flex;

  transition: 0.5s ease;
`