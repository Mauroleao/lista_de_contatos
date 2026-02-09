import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #2d3748;
`

export const Contador = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #667eea;
  background: #f7fafc;
  padding: 8px 16px;
  border-radius: 20px;
`

export const BuscaContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
  max-width: 600px;
`

export const IconeBusca = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
`

export const InputBusca = styled.input`
  width: 100%;
  padding: 14px 48px 14px 48px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
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

export const BotaoLimpar = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #a0aec0;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: #718096;
    background: #f7fafc;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
`

export const MensagemVazia = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #718096;
  font-size: 16px;
  background: #f7fafc;
  border-radius: 12px;
  border: 2px dashed #e2e8f0;
`
