import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import {Container, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import imageURL from "../images/JOBK_Img_HeaderMobile_Home.png";
import NavBar from "../appBar";
import Constants from "../utilities/Constants";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

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
            });

            const urlCheck = Constants.CONNECTE;
            const responseCheck = await fetch(urlCheck, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserEmail: data.get('UserEmail'),
                    UserPassword: data.get('UserPassword'),
                }),
            });
            console.log(responseCheck)
            if (responseCheck.ok) {
                // La connexion a réussi, vous pouvez effectuer des actions supplémentaires ici
                const responseData = await responseCheck.json();

                setIsLoggedIn(true);

                console.log(responseData)
                console.log(isLoggedIn)
                navigate("/student");

            }else {
                // La connexion a échoué, vous pouvez gérer l'erreur ici
                throw new Error('Échec de la connexion');
            }
        } catch (error) {
            console.error(error);
        }


    };


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
                    {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
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
