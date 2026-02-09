import styled from 'styled-components'

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`

export const Nome = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 16px;
`

export const Info = styled.div`
  margin-bottom: 12px;
  display: flex;
  gap: 8px;
  align-items: baseline;
`

export const InfoLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #718096;
  min-width: 70px;
`

export const InfoValue = styled.span`
  font-size: 14px;
  color: #4a5568;
`

export const Campo = styled.div`
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 6px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #2d3748;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

export const BarraAcoes = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
`

const BotaoBase = styled.button`
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`

export const BotaoEditar = styled(BotaoBase)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`

export const BotaoRemover = styled(BotaoBase)`
  background: #fff;
  color: #e53e3e;
  border: 2px solid #e53e3e;

  &:hover {
    background: #e53e3e;
    color: #fff;
  }
`

export const BotaoSalvar = styled(BotaoBase)`
  background: #48bb78;
  color: #fff;

  &:hover {
    background: #38a169;
  }
`

export const BotaoCancelar = styled(BotaoBase)`
  background: #cbd5e0;
  color: #2d3748;

  &:hover {
    background: #a0aec0;
  }
`
