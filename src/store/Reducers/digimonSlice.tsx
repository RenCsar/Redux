import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDigimon = createAsyncThunk('Digimon/getData', async () => {
    try {
        const response = await axios.get('https://digimon-api.vercel.app/api/digimon')
        return [...response.data]

    } catch (error: any) {
        return error.response.data
    }
});

const digimonSlice = createSlice({
    name: 'digimon',
    initialState: {
        digimon: [],
        status: 'idle', // idle | loading | succeede | failed
        error: ''
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getDigimon.pending, (state, action) => {
                state.status = 'Loading'
            })
            .addCase(getDigimon.fulfilled, (state, action) => {
                state.status = 'Succeeded'
                state.digimon = action.payload
            })
            .addCase(getDigimon.rejected, (state, action) => {
                state.status = 'Failed'
                state.error = action.error.message ? action.error.message : ''
            })
    }
})

export const digimonReducer = digimonSlice.reducer
export const getDigimonsStatus = (state: any) => state.pokemon.status
export const getDigimonsError = (state: any) => state.pokemon.error