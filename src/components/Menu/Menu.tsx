import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { MenuContainer, LinkSC } from './Menu.styled';
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Tema } from '../Tema';
import { TNome, TTema } from '../../util/types';

export default function AccountMen() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let tema = useSelector((state: TTema) => state.tema.tema);
    let usuario = useSelector((state: TNome) => state.nome.nome);
    let imagem = useSelector((state: TNome) => state.nome.img);

    return (
        <MenuContainer>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', backgroundColor: `${tema}`, padding: '0 50px', height: '50px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white'
                }}>
                    <Typography sx={{ minWidth: 100 }}><LinkSC to='/'>Home</LinkSC></Typography>
                    <Typography sx={{ minWidth: 100 }}><LinkSC to='/lista'>Lista</LinkSC></Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    color: 'white',
                    alignItems: 'center'
                }}>
                    <Typography sx={{ minWidth: 100 }}>{usuario ? usuario : `Usuário`}</Typography>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            {imagem?
                                <Avatar src={`${imagem}`} sx={{ width: 32, height: 32 }}></Avatar> : 
                                <Avatar sx={{ width: 32, height: 32 }}>{usuario.substring(0, 1)}</Avatar>
                            }
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ marginLeft: '20px' }}>
                        <Tema />
                    </Box>
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </MenuContainer>
    );
}