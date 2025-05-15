import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const inicialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar javaScript revendo o exercício do módulo 7',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'Estudar material de apoio',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar TypeScript'
    },
    {
      id: 3,
      descricao: 'Praticar a construção de uma landingPade',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Boostratp'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: inicialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefas) => tarefas.id !== action.payload)
      ]
    },
    editar: (State, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = State.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        State.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
