import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  padding: 14px 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  position: fixed;

  top: 0;
  left: 0;

  z-index: 10;

  box-sizing: border-box;

  background: rgba(11, 11, 15, 0.82);

  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 1024px) {
    padding: 14px 40px;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;

    gap: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;

    gap: 10px;
  }
`

export const Logo = styled.h1`
  font-size: 20px;

  color: #FFFFFF;

  margin: 0;

  white-space: nowrap;

  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`

export const Nav = styled.nav`
  display: flex;

  align-items: center;

  gap: 20px;

  flex: 1;

  overflow-x: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    background-color: transparent;

    border: none;

    color: #fff;

    font-size: 14px;

    font-weight: 500;

    cursor: pointer;

    transition: 0.3s;

    white-space: nowrap;

    flex-shrink: 0;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    gap: 16px;

    button {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    gap: 12px;

    button {
      font-size: 12px;
    }
  }
`

export const Status = styled.div`
  display: flex;

  align-items: center;

  color: #8DB600;

  font-size: 13px;

  white-space: nowrap;

  @media (max-width: 480px) {
    display: none;
  }
`

export const Language = styled.div`
  display: flex;

  align-items: center;

  gap: 6px;

  flex-shrink: 0;

  button {
    background-color: transparent;

    border: none;

    color: #fff;

    font-size: 13px;

    font-weight: 500;

    cursor: pointer;

    transition: 0.3s;

    white-space: nowrap;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 480px) {
    gap: 4px;

    button {
      font-size: 11px;
    }
  }
`