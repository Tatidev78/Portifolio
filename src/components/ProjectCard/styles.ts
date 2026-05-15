import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  max-width: 380px;
  flex-shrink: 0;

  background: rgba(24, 24, 27, 0.85);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 24px;

  overflow: hidden;

  backdrop-filter: blur(12px);

  transition: 0.4s ease;

  cursor: pointer;

  &:hover {
    transform: translateY(-8px);

    border-color: rgba(0, 252, 76, 0.36);

    box-shadow: 0 20px 50px rgba(92, 246, 226, 0.15);
  }
`

export const ProjectImage = styled.img`
  width: 100%;

  height: 220px;

  object-fit: cover;

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`

export const Content = styled.div`
  padding: 24px;

  display: flex;

  flex-direction: column;

  gap: 18px;
`

export const Title = styled.h3`
  font-size: 24px;

  font-weight: 600;

  color: #fafafa;

  margin: 0;
`

export const Description = styled.p`
  font-size: 16px;

  line-height: 1.7;

  color: #a1a1aa;

  margin: 0;
`

export const Stack = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
`

export const Tech = styled.span`
  padding: 8px 14px;

  background: rgba(7, 255, 152, 0.12);

  border: 1px solid rgba(0, 252, 76, 0.36);

  border-radius: 999px;

  font-size: 13px;

  color: #b5fdb8ff;
`

export const Links = styled.div`
  display: flex;

  align-items: center;

  gap: 18px;

  margin-top: 8px;

  a {
    font-size: 14px;

    font-weight: 500;

    color: #fafafa;

    text-decoration: none;

    transition: 0.3s;

    &:hover {
      
      color: #d9f18aff;
    }
  }
`
export const ProjectsWrapper = styled.div`
  position: relative;

  display: flex;

  align-items: center;

  width: 100%;
`
export const ProjectsSlider = styled.div`
  display: flex;

  gap: 24px;

  overflow-x: auto;

  scroll-behavior: smooth;

  width: 100%;

  padding: 20px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const ArrowButton = styled.button`
  width: 52px;

  height: 52px;

  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(24, 24, 27, 0.85);

  color: #fafafa;

  font-size: 24px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: rgba(0, 252, 76, 0.18);
  }
`