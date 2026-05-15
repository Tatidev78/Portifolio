import styled from 'styled-components'

export const Panel = styled.section`
  margin-bottom: 28px;
  padding-bottom: 28px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  background-image:
    radial-gradient(circle at top left, rgba(0, 255, 120, 0.08), transparent 30%),
    radial-gradient(circle at bottom right, rgba(0, 255, 120, 0.05), transparent 30%);
`

export const PanelTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: #ffffff;
`

export const SkillCategory = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  margin-bottom: 32px;
  padding-bottom: 32px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h3 {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;

    color: #6dff95;

    margin-bottom: 24px;
  }
`

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`

export const Tech = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border-radius: 999px;

  background: rgba(0, 252, 76, 0.08);

  border: 1px solid rgba(0, 252, 76, 0.22);

  color: #f5f5f5;

  font-size: 14px;

  transition: 0.3s ease;

  cursor: default;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(0, 252, 76, 0.5);

    box-shadow: 0 0 18px rgba(0, 255, 120, 0.22);
  }
`