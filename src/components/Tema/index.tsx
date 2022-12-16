import { FormControl, MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mudarTema } from '../../store/Reducers/temaSlice';
import { TTema } from '../../util/types';

export const Tema: React.FC = () => {
    const dispatch = useDispatch();
    const tema = useSelector((state: TTema) => state.tema.tema);
    const handleChange = (event: SelectChangeEvent<string>) => {
        dispatch(mudarTema(event.target.value));
    };
    return (
        <Box>
            <FormControl fullWidth
                sx={{
                    background: `${tema}`,
                    color: 'white',
                }}
            >
                <Select
                    labelId="demo-simple-select-label"
                    id="tema"
                    label="Tema"
                    onChange={handleChange}
                    defaultValue={'Tema Roxo'}
                    placeholder='Tema'
                    sx={{
                        background: `${tema}`,
                        color: 'white',
                        height: '50px',
                        width: '180px'
                    }}
                >
                    <MenuItem value={'Tema Roxo'}>Tema Roxo</MenuItem>
                    <MenuItem value={'Tema Azul'}>Tema Azul</MenuItem>
                    <MenuItem value={'Tema Vermelho'}>Tema Vermelho</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}