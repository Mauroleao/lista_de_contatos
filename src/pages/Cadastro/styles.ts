import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`

export const Header = styled.div`
  margin-bottom: 32px;
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
`

export const Subtitulo = styled.p`
  font-size: 16px;
  color: #718096;
`

export const FormularioCard = styled.form`
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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

export const BotoesContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`

const BotaoBase = styled.button`
  flex: 1;
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`

export const BotaoSalvar = styled(BotaoBase)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`

export const BotaoCancelar = styled(BotaoBase)`
  background: #fff;
  color: #718096;
  border: 2px solid #e2e8f0;

  &:hover {
    background: #f7fafc;
    border-color: #cbd5e0;
  }
`
