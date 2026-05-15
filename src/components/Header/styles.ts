import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 24px 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  background: rgba(11, 11, 15, 0.8);
  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 1024px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 18px 24px;
    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    flex-direction: column;
    gap: 18px;
  }
`

export const Logo = styled.h1`
  font-size: 24px;
  color: #FFFFFF;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;

  button {
    background-color: transparent;
    border: none;
    color: #fff;

    font-size: 16px;
    font-weight: 500;

    cursor: pointer;

    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    gap: 20px;

    button {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    gap: 14px;

    button {
      font-size: 14px;
    }
  }
`

export const Status = styled.div`
  display: flex;
  align-items: center;

  color: #8DB600;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const Language = styled.div`
  display: flex;
  gap: 8px;

  button {
    background-color: transparent;
    border: none;
    color: #fff;

    font-size: 16px;
    font-weight: 500;

    cursor: pointer;

    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 14px;
    }
  }
`