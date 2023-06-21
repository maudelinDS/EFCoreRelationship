import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';


import {ReactComponent as Logo} from '../src/images/logo-white.svg';
import Section from "./Sections";



export default function ButtonAppBar({ showSection }) {
    const location = useLocation();

    const hideSection = location.pathname === '/login';
    return (
        <Box>
            <AppBar position="absolute" sx={{background: '#141E66', height: '86px'}}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Logo/>
                    </Typography>
                </Toolbar>
                {!hideSection  && <Section />}

            </AppBar>


        </Box>

    )
        ;
}