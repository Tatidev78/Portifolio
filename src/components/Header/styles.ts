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

  box-sizing: border-box;

  background: rgba(11, 11, 15, 0.8);

  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 1024px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 18px 24px;

    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;

    gap: 12px;

    flex-wrap: wrap;
  }
`

export const Logo = styled.h1`
  font-size: 24px;

  color: #FFFFFF;

  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const Nav = styled.nav`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 32px;

  flex: 1;

  button {
    background-color: transparent;

    border: none;

    color: #fff;

    font-size: 16px;

    font-weight: 500;

    cursor: pointer;

    transition: 0.3s;

    white-space: nowrap;

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
    width: 100%;

    justify-content: flex-start;

    gap: 16px;

    overflow-x: auto;

    white-space: nowrap;

    padding-bottom: 4px;

    order: 3;

    &::-webkit-scrollbar {
      display: none;
    }

    button {
      font-size: 13px;

      flex-shrink: 0;
    }
  }
`

export const Status = styled.div`
  display: flex;

  align-items: center;

  color: #8DB600;

  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

export const Language = styled.div`
  display: flex;

  align-items: center;

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
    gap: 6px;

    button {
      font-size: 13px;
    }
  }
`