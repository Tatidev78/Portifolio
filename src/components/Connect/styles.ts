import styled from 'styled-components'

export const Container = styled.section`
  text-align: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 32px 20px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #f5f5f5;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 1.3;
  }
`

export const Text = styled.p`
  color: #bdbdbd;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
`

export const LinkItem = styled.a`
  text-decoration: none;
  color: #f5f5f5;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 12px 20px;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: 0.3s ease;

  min-width: 180px;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(0, 255, 120, 0.5);

    box-shadow: 0 0 18px rgba(0, 255, 120, 0.2);

    color: #6dff95;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`