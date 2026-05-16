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

  @media (max-width: 1200px) {
    padding: 120px 60px 0;
    gap: 80px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;

    padding: 120px 40px 40px;

    gap: 60px;
  }

  @media (max-width: 480px) {
    padding: 110px 20px 32px;
    gap: 40px;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 620px;

  display: flex;
  flex-direction: column;

  gap: 32px;

  span {
    font-size: 12px;

    text-transform: uppercase;

    color: #71717a;

    letter-spacing: 2px;

    @media (max-width: 480px) {
      font-size: 11px;
    }
  }

  h1 {
    font-size: 45px;

    line-height: 1;

    font-weight: 300;

    letter-spacing: -4px;

    margin: 0;

    @media (max-width: 992px) {
      font-size: 40px;
    }

    @media (max-width: 768px) {
      font-size: 34px;
      letter-spacing: -2px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
      line-height: 1.1;
      letter-spacing: -1px;
    }
  }

  p {
    max-width: 540px;

    font-size: 18px;

    color: #a1a1aa;

    line-height: 1.8;

    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 1.7;
    }

    @media (max-width: 480px) {
      font-size: 15px;
      line-height: 1.6;
    }
  }

  h2 {
    font-size: 22px;

    font-weight: 400;

    line-height: 1.8;

    color: #fafafa;

    word-break: break-word;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      line-height: 1.6;
    }
  }

  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`

/* ================= DESKTOP SLIDER ================= */

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;

  @media (max-width: 480px) {
    display: none;
  }
`

export const ProjectsSlider = styled.div`
  overflow: hidden;
  width: 380px;
  padding: 20px 0;

  @media (max-width: 768px) {
    width: 340px;
  }
`

export const ProjectsTrack = styled.div<{ $current: number }>`
  display: flex;
  gap: 0;
  transition: transform 0.5s ease;
  transform: translateX(${({ $current }) => `-${$current * 100}%`});
`

export const ArrowButton = styled.button<{ disabled?: boolean }>`
  width: 52px;
  height: 52px;

  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);

  background: ${({ disabled }) => disabled ? 'rgba(24, 24, 27, 0.4)' : 'rgba(24, 24, 27, 0.85)'};
  color: ${({ disabled }) => disabled ? '#52525b' : '#fafafa'};

  font-size: 20px;

  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: 0.3s;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ disabled }) => disabled ? 'rgba(24, 24, 27, 0.4)' : 'rgba(0, 252, 76, 0.18)'};
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 16px;
  }
`

/* ================= MOBILE SLIDER ================= */

export const MobileSlider = styled.div`
  display: none;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    display: flex;
    padding: 16px 0;
  }
`

export const MobileTrack = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 16px;
`

export const MobileCardWrapper = styled.div`
  flex: 0 0 85%;
  scroll-snap-align: start;
`