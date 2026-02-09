import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const initialState: Contato[] = [
  new Contato('João Silva', 'joao.silva@email.com', '(11) 98765-4321', 1),
  new Contato('Maria Santos', 'maria.santos@email.com', '(11) 91234-5678', 2),
  new Contato(
    'Pedro Oliveira',
    'pedro.oliveira@email.com',
    '(11) 99876-5432',
    3
  )
]

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.findIndex((c) => c.id === action.payload.id)
      if (indexDoContato >= 0) {
        state[indexDoContato] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
