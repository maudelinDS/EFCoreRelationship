import React, {useEffect, useState} from 'react';

import Constants from "./utilities/Constants"
import ProjetUpdateForm from "./components/ProjetUpdateForm";
import ProjetCreateForm from "./components/ProjetCreateForm";
import NavBar from "./appBar";
import Section from "./Sections";
import StudentCreateForm from "./components/StudentCreateForm";
import StudentUpdateForm from "./components/StudentUpdateForm";
import Box from "@mui/material/Box";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import UserIcon from "./images/user-solid.svg";


export default function AppCrudProjet() {
    const [projets, setProjets] = useState([]);
    const [showingCreateNewProjetForm, setShowingCreateNewProjetForm] = useState(false);
    const [projetCurrentlyBeingUpdated, setProjetCurrentlyBeingUpdated] = useState(null);
    useEffect(() => {
        getProjets();
    }, []);

    function getProjets() {
        const url = Constants.API_URL_GET_ALL_PROJETS;

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(projetFromServer => {
                console.log(projetFromServer);

                setProjets(projetFromServer);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }


    function deleteProjet(projetId) {
        const url = `${Constants.API_URL_DELETE_PROJET_BY_ID}/${projetId}`;

        fetch(url, {
            method: 'DELETE',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(projetsFromServer => {
                console.log(projetsFromServer);

                onProjetDeleted(projetsFromServer);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

    const containerStyles = {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        width: "100%",
        overflowY: "hidden",
    }

    function renderProjetsTable() {
        return (
            <Box sx={containerStyles}>

                <NavBar showSection={false}/>

                <TableContainer style={{width: '100%', marginTop: '150px', overflow: 'hidden', overflowX: 'hidden'}}>
                    <Table style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "500px",
                        width: '100%',
                        alignItems: 'center',
                        tableLayout: 'fixed',
                    }}>
                        <TableHead style={{width: '98%'}}>
                            <TableRow style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                                textAlign: 'center'
                            }}>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>img</TableCell>

                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Id</TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Name</TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Description</TableCell>

                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}></TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody style={{overflow: "scroll", height: "900px", width: '100%', textAlign: 'center'}}>
                            {projets.map((projet) => (
                                <TableRow key={projet.projetId} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '16px'
                                }}>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <img src={UserIcon} alt="User Icon" width="24" height="24"/>
                                    </TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>{projet.projetId}</TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>{projet.projetName}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            width: '90px',
                                            height: '30px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>{projet.projetDescription}</TableCell>


                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setProjetCurrentlyBeingUpdated(projet)}
                                            style={{background: '#141E66', padding: '3px', width: '50px'}}
                                            size='small'
                                        >
                                            Update
                                        </Button>

                                    </TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        `Are you sure you want to delete the student "${projet.projetName}"?`
                                                    )
                                                )
                                                    deleteProjet(projet.projetId);
                                            }}
                                            style={{background: 'red'}}

                                            size='small'

                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowingCreateNewProjetForm(true)}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
                >
                    Create new users
                </Button>
            </Box>
        )
            ;
    }


    function onProjetCreated(createdprojet) {
        setShowingCreateNewProjetForm(false);
        if (createdprojet === null) {
            return;
        }
        alert(`Projet : "${createdprojet.projetName}",has been created, will show up in the table below`)
        getProjets();
    }

    function onProjetUpdated(updateProjet) {
        setProjetCurrentlyBeingUpdated(null);
        if (updateProjet === null) {
            return;
        }
        let projetsCopy = [...projets];

        // eslint-disable-next-line array-callback-return
        const index = projetsCopy.findIndex((projetsCopyProjet, currentIndex) => {

            if (projetsCopyProjet.projetId === updateProjet.projetId) {
                return true;
            }
        });
        if (index !== -1) {
            projetsCopy[index] = updateProjet;
        }
        setProjets(projetsCopy);
        alert(`Projet successfully updated "${updateProjet.projetName}"`);
    }

    function onProjetDeleted(deleteProjetProjetId) {

        let projetsCopy = [...projets];

        // eslint-disable-next-line array-callback-return
        const index = projetsCopy.findIndex((projetsCopyProjet, currentIndex) => {

            if (projetsCopyProjet.projetId === deleteProjetProjetId) {
                return true;
            }
        });
        if (index !== -1) {
            projetsCopy.splice(index, 1);
        }
        setProjets(projetsCopy);
        alert('Projet successfully deleted');
    }

    return (
        <div className="container" style={{maxWidth: '100%', margin: '0'}}>
            <div className="r   ow min-vh-100">
                <div className="col d-flex flex flex-column justify-content-center ">
                    {!showingCreateNewProjetForm && !projetCurrentlyBeingUpdated && (
                        <div>
                            {projets.length > 0 && renderProjetsTable()}
                        </div>
                    )}
                    {showingCreateNewProjetForm && (
                        <ProjetCreateForm onProjetCreated={onProjetCreated}/>
                    )}
                    {projetCurrentlyBeingUpdated && (
                        <ProjetUpdateForm projet={projetCurrentlyBeingUpdated} onProjetUpdated={onProjetUpdated}/>
                    )}
                </div>
            </div>
        </div>
    );
}

