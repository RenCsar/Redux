import { configureStore } from "@reduxjs/toolkit";
import { nomeReducer } from './Reducers/nomeSlice'
import { temaReducer } from "./Reducers/temaSlice";

export const Store = configureStore({
    reducer: {
        nome: nomeReducer,
        tema: temaReducer,
    }
})