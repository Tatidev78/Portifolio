import styled from 'styled-components'

export const Container = styled.section`
  text-align: center;
  padding: 40px;
`

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #f5f5f5;
`

export const Text = styled.p`
  color: #bdbdbd;
  line-height: 1.6;
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`

export const LinkItem = styled.a`
  text-decoration: none;

  color: #f5f5f5;

  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px 20px;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(0, 255, 120, 0.5);

    box-shadow: 0 0 18px rgba(0, 255, 120, 0.2);

    color: #6dff95;
  }
`