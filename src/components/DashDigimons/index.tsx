import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mudarNome } from "../../store/Reducers/nomeSlice";
import { TTema } from "../../util/types";
import Tilt from 'react-parallax-tilt';
import { getDigimon } from "../../store/Reducers/digimonSlice";

export const DashPokemons = () => {
    const tema = useSelector((state: TTema) => state.tema.tema);
    const dispatch = useDispatch<any>();
    const [digimons, setDigimons] = useState<object[]>([]);

    // const getDigimon = async () => {
    //     try {
    //         const { data } = await axios.get('https://digimon-api.vercel.app/api/digimon');
    //         setDigimons(data);

    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    useEffect(() => {
        // getDigimon()
        dispatch(getDigimon())
    }, []);

    const selectDigimon = (digimon: string) => {
        dispatch(mudarNome(digimon))
    }

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            width: '100%',
            height: '100%',
            padding: '0 40px',
            margin: '100px 0 50px 0',
        }}>
            {digimons.map((digimon: any) =>
                <Box key={digimon?.name}
                    onClick={() => selectDigimon(digimon.name)}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '10px',
                        width: '200px',
                        height: '230px',
                        background: `${tema}`,
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer',

                        "&:hover": {
                            transform: 'scale(1.03)'
                        }
                    }}
                >
                    {digimon.name}

                    <Tilt>
                        <Box component='img' src={`${digimon.img}`}
                            sx={{
                                width: '150px',
                                borderRadius: '50%'
                            }}
                        />
                    </Tilt>
                    {digimon.level}
                </Box>
            )}
        </Box>
    )
}