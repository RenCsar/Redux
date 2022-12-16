import { createSlice } from '@reduxjs/toolkit'

const nomeSlice = createSlice({
    name: 'nome',
    initialState: {
        nome: 'Usuário'
    },
    reducers: {
        mudarNome: (state, action) => { state.nome = action.payload }
    }
});

export const nomeReducer = nomeSlice.reducer;
export const { mudarNome } = nomeSlice.actions;