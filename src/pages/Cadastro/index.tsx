import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adicionar } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'
import Contato from '../../models/Contato'
import * as S from './styles'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contatos = useSelector((state: RootReducer) => state.contatos)
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!nomeCompleto.trim() || !email.trim() || !telefone.trim()) {
      alert('Preencha todos os campos!')
      return
    }

    const novoId =
      contatos.length > 0 ? Math.max(...contatos.map((c) => c.id)) + 1 : 1

    const novoContato = new Contato(nomeCompleto, email, telefone, novoId)

    dispatch(adicionar(novoContato))

    setNomeCompleto('')
    setEmail('')
    setTelefone('')

    alert('Contato adicionado com sucesso!')
    navigate('/')
  }

  return (
    <S.Container>
      <S.Header>
        <S.Titulo>Novo Contato</S.Titulo>
        <S.Subtitulo>
          Preencha os dados abaixo para adicionar um novo contato
        </S.Subtitulo>
      </S.Header>

      <S.FormularioCard onSubmit={handleSubmit}>
        <S.Campo>
          <S.Label htmlFor="nomeCompleto">Nome Completo *</S.Label>
          <S.Input
            id="nomeCompleto"
            type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            placeholder="Ex: João da Silva"
          />
        </S.Campo>

        <S.Campo>
          <S.Label htmlFor="email">E-mail *</S.Label>
          <S.Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: joao@email.com"
          />
        </S.Campo>

        <S.Campo>
          <S.Label htmlFor="telefone">Telefone *</S.Label>
          <S.Input
            id="telefone"
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Ex: (11) 98765-4321"
          />
        </S.Campo>

        <S.BotoesContainer>
          <S.BotaoSalvar type="submit">Salvar Contato</S.BotaoSalvar>
          <S.BotaoCancelar type="button" onClick={() => navigate('/')}>
            Cancelar
          </S.BotaoCancelar>
        </S.BotoesContainer>
      </S.FormularioCard>
    </S.Container>
  )
}

export default Cadastro
