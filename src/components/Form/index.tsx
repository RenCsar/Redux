import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { mudarNome } from '../../store/Reducers/nomeSlice'
import { TForm, TTema } from '../../util/types'

export const Form: React.FC = () => {
    const dispatch = useDispatch();
    const tema = useSelector((state: TTema) => state.tema.tema);
    const { register, handleSubmit, reset } = useForm<TForm>()

    const handleChange = (data: TForm) => {
        dispatch(mudarNome(data.nome))
        reset();
    }

    return (
        <Box component='form' onSubmit={handleSubmit(handleChange)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}
        >
            <TextField type="text" label='Usuário' id='nome' {...register('nome')} />
            <Button type='submit' variant="contained"
                sx={{
                    background: `${tema}`,
                    transition: '.8s',
                    "&:hover": {
                        background: 'white',
                        color: `${tema}`,
                        fontWeight: 'bold',
                        transform: 'scale(1.03)'
                    }
                }}>
                Alterar Nome
            </Button>
        </Box>
    )
}