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
import {useEffect} from "react";



export default function ButtonAppBar({ showSection , userName, isLoggedIn}) {
    const location = useLocation();

    const hideSection = location.pathname === '/login';

    useEffect(() => {
        getStudents();
    }, []);

    function getStudents() {
        const url = Constants.CONNECTE;

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(studentsFromServer => {
                console.log(studentsFromServer);
                const user = studentsFromServer.userFirstName; // Assuming the response contains the name field
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
    function handleLogout(setIsLoggedIn) {
        const url = Constants.LOGOUT;

        fetch(url, {
            method: 'POST',
            credentials: 'include' // Inclure les cookies dans la requête
        })
            .then(response => {
                if (response.ok) {
                    setIsLoggedIn(false);
                    window.location.href = '/login';
                } else {
                    // La déconnexion a échoué, affichez un message d'erreur ou effectuez d'autres actions
                    console.log('Failed to logout');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <Box>
            <AppBar position="absolute" sx={{ background: '#141E66', height: '86px' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Logo />
                    </Typography>
                    {isLoggedIn ? (
                        <>
                            <IconButton edge="end" color="inherit" onClick={handleLogout}>
                                <ExitToAppIcon />
                                <Typography variant="body1" sx={{ ml: 1 }}>Déconnexion</Typography>
                            </IconButton>
                            <Typography variant="body1" sx={{ ml: 1 }}>{`Bonjour, ${userName}`}</Typography>
                        </>
                    ) : (
                        <Typography variant="body1" sx={{ ml: 1 }}>Non connecté</Typography>
                    )}
                </Toolbar>
                {!hideSection && <Section />}
            </AppBar>
        </Box>
    );
}