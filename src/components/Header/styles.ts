import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px clamp(20px, 4vw, 48px);

  background: rgba(11, 11, 15, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`

export const Logo = styled.h1`
  font-size: clamp(20px, 1.5vw, 24px);
  color: #ffffff;
  margin: 0;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const MenuButton = styled.button<{ $isOpen?: boolean }>`
  display: none;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 1100;
  padding: 4px;
  transition: transform 0.3s ease, color 0.3s;

  ${({ $isOpen }) => $isOpen && `
    transform: rotate(90deg);
    color: #00fc4c;
  `}

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

/* ================= OVERLAY ESCURO ================= */

export const Overlay = styled.div<{ $isOpen?: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 1001;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  }
`

/* ================= MENU MOBILE ================= */

export const MobileMenu = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    max-width: 320px;
    height: 100vh;
    z-index: 1002;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 80px 28px 40px;

    background: rgba(15, 15, 20, 0.98);
    backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.06);

    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    /* Sombra sutil para dar profundidade */
    box-shadow: ${({ $isOpen }) => 
      $isOpen ? '-10px 0 40px rgba(0, 0, 0, 0.5)' : 'none'
    };
  }

  @media (max-width: 480px) {
    width: 85%;
    padding: 72px 24px 32px;
  }
`

/* ================= NAVEGAÇÃO ================= */

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 2vw, 32px);

  button {
    background-color: transparent;
    border: none;
    color: #a1a1aa;
    font-size: clamp(14px, 1vw, 16px);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    padding: 4px 0;

    &:hover {
      color: #ffffff;
    }

    /* Underline animado no hover (desktop) */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: #00fc4c;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    button {
      width: 100%;
      text-align: left;
      font-size: 16px;
      color: #e4e4e7;
      padding: 14px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      font-weight: 400;
      letter-spacing: 0.5px;

      &:hover {
        color: #00fc4c;
        padding-left: 8px;
      }

      &::after {
        display: none;
      }

      /* Ícone sutil à esquerda no mobile */
      &::before {
        content: '›';
        margin-right: 12px;
        color: #52525b;
        font-size: 18px;
        transition: color 0.3s;
      }

      &:hover::before {
        color: #00fc4c;
      }
    }
  }
`

/* ================= IDIOMA ================= */

export const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: #71717a;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 6px 14px;
    min-width: 42px;

    &:hover {
      border-color: rgba(255, 255, 255, 0.3);
      color: #ffffff;
    }

    &.active {
      background: rgba(0, 252, 76, 0.1);
      border-color: rgba(0, 252, 76, 0.3);
      color: #00fc4c;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);

    button {
      font-size: 14px;
      padding: 8px 18px;
    }
  }
`

/* ================= STATUS ================= */

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #8db600;
  font-size: 14px;
  font-weight: 500;

  white-space: nowrap;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #8db600;
    position: relative;

    &.pulse {
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgba(141, 182, 0, 0.3);
        animation: pulse 2s ease-in-out infinite;
      }
    }
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    margin-top: auto;
    font-size: 13px;
    color: #a1a1aa;
    padding-top: 24px;

    span {
      width: 6px;
      height: 6px;

      &.pulse::before {
        width: 14px;
        height: 14px;
      }
    }
  }
`