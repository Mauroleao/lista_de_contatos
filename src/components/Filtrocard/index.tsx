import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'
import Contato from '../../models/Contato'
import styled from 'styled-components'

const FormularioContato = () => {
  const dispatch = useDispatch()
  const contatos = useSelector((state: RootReducer) => state.contatos)
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!nomeCompleto.trim() || !email.trim() || !telefone.trim()) {
      return
    }

    const novoId =
      contatos.length > 0 ? Math.max(...contatos.map((c) => c.id)) + 1 : 1

    const novoContato = new Contato(nomeCompleto, email, telefone, novoId)

    dispatch(adicionar(novoContato))

    setNomeCompleto('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <Titulo>Novo Contato</Titulo>
      <Campo>
        <Label htmlFor="nomeCompleto">Nome Completo</Label>
        <Input
          id="nomeCompleto"
          type="text"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          placeholder="Digite o nome completo"
        />
      </Campo>
      <Campo>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o e-mail"
        />
      </Campo>
      <Campo>
        <Label htmlFor="telefone">Telefone</Label>
        <Input
          id="telefone"
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(00) 00000-0000"
        />
      </Campo>
      <BotaoAdicionar type="submit">Adicionar Contato</BotaoAdicionar>
    </Formulario>
  )
}

export const Formulario = styled.form`
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`

export const Titulo = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 24px;
`

export const Campo = styled.div`
  margin-bottom: 24px;
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 15px;
  color: #2d3748;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`

export const BotaoAdicionar = styled.button`
  width: 100%;
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }
`

export default FormularioContato
