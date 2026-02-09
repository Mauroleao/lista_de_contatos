import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'
import * as S from './styles'

const ListaContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos)
  const [busca, setBusca] = useState('')

  const contatosFiltrados = contatos.filter(
    (contato) =>
      contato.nomeCompleto.toLowerCase().includes(busca.toLowerCase()) ||
      contato.email.toLowerCase().includes(busca.toLowerCase()) ||
      contato.telefone.includes(busca)
  )

  return (
    <S.Container>
      <S.Header>
        <S.Titulo>Meus Contatos</S.Titulo>
        <S.Contador>
          {contatosFiltrados.length}{' '}
          {contatosFiltrados.length === 1 ? 'contato' : 'contatos'}
        </S.Contador>
      </S.Header>

      <S.BuscaContainer>
        <S.IconeBusca>🔍</S.IconeBusca>
        <S.InputBusca
          type="text"
          placeholder="Buscar por nome, e-mail ou telefone..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        {busca && <S.BotaoLimpar onClick={() => setBusca('')}>✕</S.BotaoLimpar>}
      </S.BuscaContainer>

      {contatosFiltrados.length === 0 ? (
        <S.MensagemVazia>
          {busca
            ? 'Nenhum contato encontrado com esse termo de busca.'
            : 'Você ainda não tem contatos cadastrados.'}
        </S.MensagemVazia>
      ) : (
        <S.Grid>
          {contatosFiltrados.map((contato) => (
            <Contato key={contato.id} {...contato} />
          ))}
        </S.Grid>
      )}
    </S.Container>
  )
}

export default ListaContatos
