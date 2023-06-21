import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


import {ReactComponent as Logo} from '../src/images/logo-white.svg';
import Section from "./Sections";
import Constants from "./utilities/Constants";



export default function ButtonAppBar({ showSection }) {
    const location = useLocation();

    const hideSection = location.pathname === '/login';

    function handleLogout() {
        // Code pour envoyer une requête POST vers l'URL de déconnexion

        const url = Constants.LOGOUT;

        fetch(url, {

            method: 'POST'
        })
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Box>
            <AppBar position="absolute" sx={{background: '#141E66', height: '86px'}}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Logo/>
                    </Typography>
                    <IconButton edge="end" color="inherit" onClick={handleLogout}>
                        <ExitToAppIcon /> {/* Icône de déconnexion */}
                        <Typography variant="body1" sx={{ ml: 1 }}>Déconnexion</Typography> {/* Texte du bouton */}
                    </IconButton>
                </Toolbar>
                {!hideSection  && <Section />}

            </AppBar>


        </Box>

    )
        ;
}