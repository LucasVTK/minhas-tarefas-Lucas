import { configureStore } from '@reduxjs/toolkit'
import TarefaReducer from './reducers/tarefas'
import filtroRecuder from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: TarefaReducer,
    filtro: filtroRecuder
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
