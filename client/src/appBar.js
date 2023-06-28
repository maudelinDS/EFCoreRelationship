import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Cookies from 'js-cookie';

import { ReactComponent as Logo } from '../src/images/logo-white.svg';
import Section from "./Sections";
import { useEffect, useState } from "react";
import Constants from "./utilities/Constants";
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const location = useLocation();

    const [userName, setUserName] = useState('');
    const [role, setUserRole] = useState('');
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchUserData = () => {
        const jwt = Cookies.get('jwt');
        const url = Constants.CONNECTE;

        fetch(url, {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Échec de la récupération de l\'utilisateur connecté');
                }
            })
            .then(data => {
                const userName = data.userFirstName;
                const role = data.roleId;
                setUserName(userName);
                setUserRole(role);
                setIsLoggedIn(true);
            })
            .catch(error => {
                console.error(error);
                setIsLoggedIn(false);
            });
    };

    useEffect(() => {
        fetchUserData();
    }, [navigate]);

    useEffect(() => {
        console.log(isLoggedIn); // Exécuté après la mise à jour de l'état
    }, [isLoggedIn]);

    function handleLogout() {
        const url = Constants.LOGOUT;

        fetch(url, {
            method: 'POST',
            credentials: 'include',
        })
            .then(response => {
                if (response.ok) {
                    Cookies.remove('jwt');
                    fetchUserData();
                    navigate('/login');
                    setIsLoggedIn(false);
                    Cookies.remove('jwt', { path: '/' });

                } else {
                    console.log('Échec de la déconnexion');
                    setIsLoggedIn(false);
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
                    {isLoggedIn && (
                        <>
                            <IconButton edge="end" color="inherit" onClick={handleLogout}>
                                <ExitToAppIcon />
                                <Typography variant="body1" sx={{ ml: 1 }}>Déconnexion</Typography>
                            </IconButton>
                            <Typography variant="body1" sx={{ ml: 1 }}>{`${userName}`}</Typography>
                            <Typography variant="body1" sx={{ ml: 1 }}>{`${role}`}</Typography>
                        </>
                    )}
                </Toolbar>
                {!hideSection && <Section />}
            </AppBar>
        </Box>
    );
}
