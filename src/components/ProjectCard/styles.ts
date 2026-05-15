import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;

  min-width: 100%;

  max-width: 380px;

  flex: 0 0 100%;

  box-sizing: border-box;

  background: rgba(24, 24, 27, 0.85);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 24px;

  overflow: hidden;

  backdrop-filter: blur(12px);

  transition: 0.4s ease;

  cursor: pointer;

  scroll-snap-align: center;

  &:hover {
    transform: translateY(-8px);

    border-color: rgba(0, 252, 76, 0.36);

    box-shadow: 0 20px 50px rgba(92, 246, 226, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }

  @media (max-width: 480px) {
    max-width: 100%;

    min-width: 100%;

    border-radius: 20px;
  }
`

export const ProjectImage = styled.img`
  width: 100%;

  height: 220px;

  object-fit: cover;

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`

export const Content = styled.div`
  padding: 24px;

  display: flex;

  flex-direction: column;

  gap: 18px;

  @media (max-width: 480px) {
    padding: 20px;

    gap: 16px;
  }
`

export const Title = styled.h3`
  font-size: 24px;

  font-weight: 600;

  color: #fafafa;

  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  font-size: 16px;

  line-height: 1.7;

  color: #a1a1aa;

  margin: 0;

  @media (max-width: 480px) {
    font-size: 15px;

    line-height: 1.6;
  }
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

  @media (max-width: 480px) {
    font-size: 12px;

    padding: 7px 12px;
  }
`

export const Links = styled.div`
  display: flex;

  align-items: center;

  flex-wrap: wrap;

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

  @media (max-width: 480px) {
    gap: 14px;

    a {
      font-size: 13px;
    }
  }
`

export const ProjectsWrapper = styled.div`
  position: relative;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`

export const ProjectsSlider = styled.div`
  display: flex;

  gap: 24px;

  overflow-x: auto;

  scroll-behavior: smooth;

  width: 100%;

  max-width: 380px;

  padding: 20px 0;

  scroll-snap-type: x mandatory;

  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    gap: 18px;

    padding: 16px 0;

    max-width: 100%;
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

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  &:hover {
    background: rgba(0, 252, 76, 0.18);
  }

  @media (max-width: 768px) {
    width: 42px;

    height: 42px;

    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 34px;

    height: 34px;

    font-size: 14px;
  }
`