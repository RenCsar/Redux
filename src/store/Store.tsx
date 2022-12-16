import { configureStore } from "@reduxjs/toolkit";
import { digimonReducer } from "./Reducers/digimonSlice";
import { nomeReducer } from './Reducers/nomeSlice'
import { temaReducer } from "./Reducers/temaSlice";

export const Store = configureStore({
    reducer: {
        nome: nomeReducer,
        tema: temaReducer,
        digimon: digimonReducer
    }
})