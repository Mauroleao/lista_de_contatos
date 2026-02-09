import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  nomeCompleto: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeCompleto, setNomeCompleto] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeCompleto(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        id,
        nomeCompleto,
        email,
        telefone
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      {estaEditando ? (
        <>
          <S.Campo>
            <S.Label>Nome Completo</S.Label>
            <S.Input
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
          </S.Campo>
          <S.Campo>
            <S.Label>E-mail</S.Label>
            <S.Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.Campo>
          <S.Campo>
            <S.Label>Telefone</S.Label>
            <S.Input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </S.Campo>
        </>
      ) : (
        <>
          <S.Nome>{nomeCompleto}</S.Nome>
          <S.Info>
            <S.InfoLabel>Email:</S.InfoLabel>
            <S.InfoValue>{email}</S.InfoValue>
          </S.Info>
          <S.Info>
            <S.InfoLabel>Telefone:</S.InfoLabel>
            <S.InfoValue>{telefone}</S.InfoValue>
          </S.Info>
        </>
      )}
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
