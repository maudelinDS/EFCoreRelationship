import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Cookies from 'js-cookie';


import {ReactComponent as Logo} from '../src/images/logo-white.svg';
import Section from "./Sections";
import {useEffect, useState} from "react";
import Constants from "./utilities/Constants";
import { useNavigate } from 'react-router-dom';




export default function ButtonAppBar() {
    const location = useLocation();

    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Effectuer une requête GET vers votre point de terminaison "user"

        const url = Constants.CONNECTE;

        fetch(url, {
            method: 'GET',
            credentials: 'include', // Inclure les cookies dans la requête
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json();
                } else {
                    throw new Error('Échec de la récupération de l\'utilisateur connecté');
                }
            })
            .then(data => {
                // Extraire le nom d'utilisateur de la réponse et mettre à jour l'état
                const userName = data.userFirstName;
                console.log(userName)
                setUserName(userName);

            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    function handleLogout() {
        const url = Constants.LOGOUT;

        fetch(url, {
            method: 'POST',
            credentials: 'include',
        })
            .then(response => {
                if (response.ok) {
                    Cookies.remove('jwt');
                    Cookies.remove('userName');
                    // Ou utilisez la redirection vers la page de connexion si vous préférez
                    navigate('/login');

                    // window.location.href = '/login';
                } else {
                    console.log('Échec de la déconnexion');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
    const hideSection = location.pathname === '/login';

    return (
        <Box>
            <AppBar position="absolute" sx={{ background: '#141E66', height: '86px' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Logo />
                    </Typography>

                        <>
                            <IconButton edge="end" color="inherit" onClick={handleLogout}>
                                <ExitToAppIcon />
                                <Typography variant="body1" sx={{ ml: 1 }}>Déconnexion</Typography>
                            </IconButton>
                            <Typography variant="body1" sx={{ ml: 1 }}>{`${userName}`}</Typography>

                        </>

                </Toolbar>
                {!hideSection && <Section />}
            </AppBar>
        </Box>
    );
}