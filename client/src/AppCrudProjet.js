import React, {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import Constants from "./utilities/Constants";
import ProjetCreateForm from "./components/ProjetCreateForm";
import ProjetUpdateForm from "./components/ProjetUpdateForm";
import NavBar from "./appBar";
import Box from "@mui/material/Box";
import imageURL from "./images/JOBK_Img_HeaderMobile_Home.png";
import Section from "./Sections";
import UserIcon from './images/user-solid.svg';

export default function AppCrudProjet() {
    const [projets, SetProjets] = useState([]);
    const [showingCreateNewProjetForm, setShowingCreateNewProjetForm] = useState(false);
    const [projetCurrentlyBeingUpdated, setProjetCurrentlyBeingUpdated] = useState(false);

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
            .then(studentsFromServer => {
                console.log(studentsFromServer);
                SetProjets(studentsFromServer);
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
            .then(responseFromServer => {
                console.log(responseFromServer);
                onProjetDeleted(responseFromServer);
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
                                }}>Nom du projet</TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Description du projet</TableCell>


                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}></TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
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
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}>{projet.projetDescription/*{/* > 8 ? projet.projetDescription.substring(0, 4) + '...' : projet.projetDescription}*/}</TableCell>
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
                                            style={{background: '#141E66'}}
                                            size='small'
                                        >
                                            Update
                                        </Button>

                                    </TableCell>
                                    {/*
                                    {projet.roleId !== 1 || projet.roleId !== 2 && (
*/}
                                    <TableCell style={{
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
                                                        `Are you sure you want to delete the projet "${projet.projetName}"?`
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
                                    {/*
                                    )}
*/}
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
                    Create new projets
                </Button>
            </Box>
        )
            ;
    }

    function onProjetCreated(createdProjet) {
        setShowingCreateNewProjetForm(false);
        if (createdProjet === null) {
            return;
        }
        alert(`Projet : "${createdProjet.projetName}", has been created, and will show up in the table below`);
        getProjets();
    }

    function onProjetUpdated(updatedProjet) {
        setProjetCurrentlyBeingUpdated(false);
        if (updatedProjet === null) {
            return;
        }
        let projetsCopy = [...projets];

        const index = projetsCopy.findIndex((projet) => projet.projetId === updatedProjet.projetId);
        if (index !== -1) {
            projetsCopy[index] = updatedProjet;
        }
        SetProjets(projetsCopy);
        alert(`Student successfully updated "${updatedProjet.projetName}"`);
    }

    function onProjetDeleted(deletedProjetId) {
        let projetsCopy = [...projets];
        const index = projetsCopy.findIndex((projet) => projet.projetId === deletedProjetId);
        if (index !== -1) {
            projetsCopy.splice(index, 1);
        }
        SetProjets(projetsCopy);
        alert('Projet successfully deleted');
    }

    return (
        <div className="container" style={{maxWidth: '100%', margin: '0'}}>
            <div className="row min-vh-100">
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
