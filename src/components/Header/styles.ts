import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px clamp(20px, 4vw, 48px);
  gap: 24px;

  background: rgba(11, 11, 15, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
`

export const Logo = styled.h1`
  font-size: clamp(20px, 1.5vw, 24px);
  color: #FFFFFF;
  margin: 0;
  white-space: nowrap;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(18px, 2vw, 32px);

  button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: clamp(14px, 1vw, 16px);
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 14px;
  }
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #8DB600;
  font-size: 16px; /* maior */
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`