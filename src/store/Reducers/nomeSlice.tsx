import { createSlice } from '@reduxjs/toolkit'

const nomeSlice = createSlice({
    name: 'nome',
    initialState: {
        nome: 'Usuário',
        img: ''
    },
    reducers: {
        mudarNome: (state, action) => { state.nome = action.payload },
        setImg: (state, action) => { state.img = action.payload }
    }
});

export const nomeReducer = nomeSlice.reducer;
export const { mudarNome, setImg } = nomeSlice.actions;