import { useLocation } from 'react-router-dom'
import * as S from './styles'

const Menu = () => {
  const location = useLocation()

  return (
    <S.MenuContainer>
      <S.Logo>Lista de Contatos</S.Logo>
      <S.Nav>
        <S.MenuItem to="/" $active={location.pathname === '/'}>
          <S.Icon>📋</S.Icon>
          Visualizar Contatos
        </S.MenuItem>
        <S.MenuItem to="/cadastro" $active={location.pathname === '/cadastro'}>
          <S.Icon>➕</S.Icon>
          Novo Contato
        </S.MenuItem>
      </S.Nav>
    </S.MenuContainer>
  )
}

export default Menu
