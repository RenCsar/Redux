import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { mudarNome, setImg } from '../../store/Reducers/nomeSlice'
import { TForm, TTema } from '../../util/types'

export const Form: React.FC = () => {
    const dispatch = useDispatch();
    const tema = useSelector((state: TTema) => state.tema.tema);
    const { register, handleSubmit, reset } = useForm<TForm>()

    const handleChange = (data: TForm) => {
        data.img = '';
        dispatch(mudarNome(data.nome))
        dispatch(setImg(data.img))
        reset();
    }

    return (
        <Box component='form' onSubmit={handleSubmit(handleChange)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '50px',
                border: `1px solid ${tema}`,
                borderRadius: '5px'
            }}
        >
            <TextField type="text" label='Usuário' id='nome' {...register('nome')}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: `${tema}`,
                        }
                    },
                    '& label.Mui-focused': {
                        color: `${tema}`,
                    }
                }}
            />
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