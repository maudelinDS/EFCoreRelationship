import { Outlet, Link } from "react-router-dom";
/*import { List, ListItem } from "@mui/material";
import NavBar from "../appBar";
import Tabs from "../Tabs";*/
import * as React from "react";

const Layout = () => {
    return (
        <>
{/*
            <nav>
                <List
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#f2f2f2", // Couleur de fond de la barre de navigation
                        padding: "10px 0", // Espacement intérieur de la barre de navigation
                    }}
                >
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/student">Apprentis</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/job">Métiers</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/projet">Projets</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/stat">Statistiques</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/login">Login</Link>
                    </ListItem>

                </List>
            </nav>*/}

            <Outlet />

        </>
    );
};

export default Layout;
