import styled from 'styled-components'

/* ================= CARD ================= */

export const Card = styled.div`
  flex: 0 0 380px;
  width: 100%;
  max-width: 100%;

  box-sizing: border-box;

  background: rgba(24, 24, 27, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;

  backdrop-filter: blur(12px);
  transition: 0.3s ease;
  cursor: pointer;

  scroll-snap-align: center;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 252, 76, 0.36);
    box-shadow: 0 18px 40px rgba(92, 246, 226, 0.12);
  }

  @media (max-width: 768px) {
    flex: 0 0 320px;
  }

  @media (max-width: 480px) {
  flex: 0 0 88%%;
  max-width: 88%%;
  margin: 0 auto;
  border-radius: 18px;
}
`

/* ================= IMAGE ================= */

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

/* ================= CONTENT ================= */

export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;

  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 480px) {
  padding: 16px;
  gap: 14px;
}
`

/* ================= TITLE ================= */

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #fafafa;
  margin: 0;

  word-break: break-word;

  @media (max-width: 480px) {
  font-size: 18px;
  line-height: 1.3;
}
`

/* ================= DESCRIPTION ================= */

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #a1a1aa;
  margin: 0;

  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 480px) {
  font-size: 14px;
  line-height: 1.5;
}
`

/* ================= STACK ================= */

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Tech = styled.span`
  padding: 6px 12px;

  background: rgba(7, 255, 152, 0.12);
  border: 1px solid rgba(0, 252, 76, 0.36);

  border-radius: 999px;

  font-size: 12px;
  color: #b5fdb8;

  white-space: nowrap;

  @media (max-width: 480px) {
  font-size: 11px;
  padding: 5px 10px;
  white-space: normal; /* 🔥 importante */
}
`

/* ================= LINKS ================= */

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: 6px;

  a {
    font-size: 14px;
    font-weight: 500;
    color: #fafafa;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: #d9f18a;
    }
  }

  @media (max-width: 480px) {
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  a {
    font-size: 13px;
  }
}
`

/* ================= WRAPPER ================= */

export const ProjectsWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  overflow: hidden;
`

/* ================= SLIDER ================= */

export const ProjectsSlider = styled.div`
  display: flex;
  gap: 28px;

  width: 100%;
  max-width: 1200px;

  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  padding: 40px 0;

  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 22px;
    padding: 24px 0;
  }

  @media (max-width: 480px) {
  gap: 16px;

  padding: 16px;

  scroll-snap-type: x mandatory;

  justify-content: flex-start;

  max-width: 100%;
}
`

/* ================= ARROWS ================= */

export const ArrowButton = styled.button`
  width: 48px;
  height: 48px;

  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(24, 24, 27, 0.85);
  color: #fafafa;

  font-size: 20px;

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
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
  display: none;
}
`