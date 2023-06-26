import React, { useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import imageURL from "../images/JOBK_Img_HeaderMobile_Home.png";
import NavBar from "../appBar";
import Constants from "../utilities/Constants";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Cookies from 'js-cookie';

export default function SignIn() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {
            const url = Constants.LOGIN;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserEmail: data.get('UserEmail'),
                    UserPassword: data.get('UserPassword'),
                }),
                credentials: 'include',
            });

            if (response.ok) {
                const responseData = await response.json();
                const jwt = responseData.jwt;

                if (jwt) {
                    Cookies.set('jwt', jwt);
                }

                navigate("/student");
            } else {
                throw new Error('Échec de la connexion');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const jwt = Cookies.get('jwt');
        if (jwt) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    const containerStyles = {
        height: "100vh",
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };


    if (isLoggedIn) {
        return null; // Render nothing if user is already logged in
    }

    return (
        <Box sx={containerStyles}>
            <NavBar onLogin={setUserName} />
            <Container component="main" maxWidth="sm" sx={{background: '#fff',}}>
                <Typography component="h1" variant="h5" sx={{mt: 5}}>
                    Se connecter
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{
                    mt: 4,
                    maxWidth: '100%', maxHeight: '100%',
                }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="UserEmail"
                        label="Addresse mail"
                        name="UserEmail"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="UserPassword"
                        label="Mot de passe"
                        type="UserPassword"
                        id="UserPassword"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 5, background: '#8FC62E'}}
                    >
                        Se connecter
                    </Button>

                </Box>
            </Container>
        </Box>
    );
}






