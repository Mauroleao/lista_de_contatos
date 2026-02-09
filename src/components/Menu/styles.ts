import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuContainer = styled.aside`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 32px 24px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.h1`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
  letter-spacing: 0.5px;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const MenuItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 12px;
  text-decoration: none;
  color: ${(props) => (props.$active ? '#667eea' : '#fff')};
  background-color: ${(props) => (props.$active ? '#fff' : 'transparent')};
  font-weight: ${(props) => (props.$active ? '600' : '500')};
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$active ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    background-color: ${(props) =>
      props.$active ? '#fff' : 'rgba(255, 255, 255, 0.15)'};
    transform: translateX(4px);
  }
`

export const Icon = styled.span`
  font-size: 20px;
`
