import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 24px 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 180px;

  position: fixed;
  top: 0;
  left: 0;
  
  z-index: 10;

  background: rgba(11, 11, 15, 0.8);
  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`

export const Logo = styled.h1`
  font-size: 24px;
  color: #FFFFFF;
`

export const Nav = styled.nav`
  display: flex;
  gap: 32px;

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
`

export const Status = styled.div`
  display: flex;
  color: #8DB600;
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
`