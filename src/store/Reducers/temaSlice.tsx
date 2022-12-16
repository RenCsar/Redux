import { createSlice } from "@reduxjs/toolkit";

const temaSlice = createSlice({
    name: 'tema',
    initialState: {
        tema: 'Purple'
    },
    reducers: {
        mudarTema: (state, action) => {
            switch (action.payload) {
                case 'Tema Roxo':
                    state.tema = 'purple';
                    break;
                case 'Tema Azul':
                    state.tema = 'blue'
                    break;
                case 'Tema Vermelho':
                    state.tema = 'red';
                    break;
                default: state.tema = 'purple'
            }
        }
    }
})

export const temaReducer = temaSlice.reducer;
export const { mudarTema } = temaSlice.actions;