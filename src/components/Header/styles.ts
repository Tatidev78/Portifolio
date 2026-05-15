import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  padding: 16px 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  position: fixed;

  top: 0;
  left: 0;

  z-index: 10;

  box-sizing: border-box;

  background: rgba(11, 11, 15, 0.82);

  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 1024px) {
    padding: 16px 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 24px;

    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;

    display: grid;

    grid-template-columns: 1fr auto;

    row-gap: 10px;
  }
`

export const Logo = styled.h1`
  font-size: 22px;

  color: #FFFFFF;

  margin: 0;

  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const Nav = styled.nav`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 24px;

  flex: 1;

  button {
    background-color: transparent;

    border: none;

    color: #fff;

    font-size: 15px;

    font-weight: 500;

    cursor: pointer;

    transition: 0.3s;

    white-space: nowrap;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    gap: 16px;

    button {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    grid-column: 1 / -1;

    justify-content: flex-start;

    overflow-x: auto;

    gap: 14px;

    padding-bottom: 2px;

    &::-webkit-scrollbar {
      display: none;
    }

    button {
      font-size: 12px;

      flex-shrink: 0;
    }
  }
`

export const Status = styled.div`
  display: flex;

  align-items: center;

  color: #8DB600;

  font-size: 14px;

  @media (max-width: 480px) {
    display: none;
  }
`

export const Language = styled.div`
  display: flex;

  align-items: center;

  gap: 6px;

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

  @media (max-width: 480px) {
    button {
      font-size: 12px;
    }
  }
`