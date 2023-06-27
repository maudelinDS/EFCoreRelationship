import {Outlet, Link} from "react-router-dom";
import {List, ListItem} from "@mui/material";

import * as React from "react";

const containerStyles = {
    display: 'flex',

    justifyContent: "center",
}

const Section = () => {
    return (

        <nav style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#f2f2f2", // Couleur de fond de la barre de navigation
            width: "100%",
            height: '82px'

        }}>
            <List
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    backgroundColor: "rgba(91,96,100,0.15)", // Couleur de fond de la barre de navigation
                    padding: "30px",
                    width: "100%",
                }}
            >

                <ListItem style={{
                    display: 'flex',

                    justifyContent: "center",
                }}>
                    <Link to="/§">Home</Link>
                </ListItem>
                <ListItem style={{
                    display: 'flex',

                    justifyContent: "center",
                }}>
                    <Link to="/student">Utilisateurs</Link>
                </ListItem>
                <ListItem style={{
                    display: 'flex',

                    justifyContent: "center",
                }}>
                    <Link to="/teacher">Formateurs</Link>
                </ListItem>
                <ListItem style={{
                    display: 'flex',

                    justifyContent: "center",
                }}>
                    <Link to="/job">Métiers</Link>
                </ListItem>
                <ListItem style={{
                    display: 'flex',

                    justifyContent: "center",
                }}>
                    <Link to="/projet">Projets</Link>
                </ListItem>
                <ListItem style={{
                    display: 'flex',

                    justifyContent: "center",
                }}>
                    <Link to="/stat">Statistiques</Link>
                </ListItem>


            </List>
        </nav>


    )
};

export default Section;
