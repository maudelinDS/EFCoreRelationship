import React, {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import Constants from "./utilities/Constants";
import CompetenceCreateForm from "./components/CompetenceCreateForm";
import CompetenceUpdateForm from "./components/CompetenceUpdateForm";
import NavBar from "./appBar";
import Box from "@mui/material/Box";
import imageURL from "./images/JOBK_Img_HeaderMobile_Home.png";
import Section from "./Sections";
import UserIcon from './images/user-solid.svg';

export default function AppCrudCompetence() {
    const [competences, SetCompetences] = useState([]);
    const [showingCreateNewCompetenceForm, setShowingCreateNewCompetenceForm] = useState(false);
    const [competenceCurrentlyBeingUpdated, setCompetenceCurrentlyBeingUpdated] = useState(false);

    useEffect(() => {
        getCompetences();
    }, []);

    function getCompetences() {
        const url = Constants.API_URL_GET_ALL_COMPETENCES;

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(studentsFromServer => {
                console.log(studentsFromServer);
                SetCompetences(studentsFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

    function deleteCompetence(competenceId) {
        const url = `${Constants.API_URL_DELETE_COMPETENCE_BY_ID}/${competenceId}`;

        fetch(url, {
            method: 'DELETE',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                onCompetenceDeleted(responseFromServer);
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


    function renderCompetencesTable() {
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
                                }}>First N.</TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Last N.</TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Domaine</TableCell>
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
                            {competences.map((competence) => (
                                <TableRow key={competence.competenceId} style={{
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
                                    }}>{competence.competenceId}</TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>{competence.competenceName}
                                    </TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}>{competence.competenceDescription}</TableCell>

                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}>{competence.domaineId}</TableCell>


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
                                            onClick={() => setCompetenceCurrentlyBeingUpdated(competence)}
                                            style={{background: '#141E66'}}
                                            size='small'
                                        >
                                            Update
                                        </Button>

                                    </TableCell>
                                    {/*
                                    {competence.roleId !== 1 || competence.roleId !== 2 && (
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
                                                        `Are you sure you want to delete the competence "${competence.competenceName}"?`
                                                    )
                                                )
                                                    deleteCompetence(competence.competenceId);
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
                    onClick={() => setShowingCreateNewCompetenceForm(true)}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
                >
                    Create new competences
                </Button>
            </Box>
        )
            ;
    }

    function onCompetenceCreated(createdCompetence) {
        setShowingCreateNewCompetenceForm(false);
        if (createdCompetence === null) {
            return;
        }
        alert(`Competence : "${createdCompetence.competenceName}", has been created, and will show up in the table below`);
        getCompetences();
    }

    function onCompetenceUpdated(updatedCompetence) {
        setCompetenceCurrentlyBeingUpdated(false);
        if (updatedCompetence === null) {
            return;
        }
        let competencesCopy = [...competences];

        const index = competencesCopy.findIndex((competence) => competence.competenceId === updatedCompetence.competenceId);
        if (index !== -1) {
            competencesCopy[index] = updatedCompetence;
        }
        SetCompetences(competencesCopy);
        alert(`Competence successfully updated "${updatedCompetence.competenceName}"`);
    }

    function onCompetenceDeleted(deletedCompetenceId) {
        let competencesCopy = [...competences];
        const index = competencesCopy.findIndex((competence) => competence.competenceId === deletedCompetenceId);
        if (index !== -1) {
            competencesCopy.splice(index, 1);
        }
        SetCompetences(competencesCopy);
        alert('Student successfully deleted');
    }

    return (
        <div className="container" style={{maxWidth: '100%', margin: '0'}}>
            <div className="row min-vh-100">
                <div className="col d-flex flex flex-column justify-content-center ">
                    {!showingCreateNewCompetenceForm && !competenceCurrentlyBeingUpdated && (
                        <div>
                            {competences.length > 0 && renderCompetencesTable()}
                        </div>
                    )}
                    {showingCreateNewCompetenceForm && (
                        <CompetenceCreateForm onCompetenceCreated={onCompetenceCreated}/>
                    )}
                    {competenceCurrentlyBeingUpdated && (
                        <CompetenceUpdateForm competence={competenceCurrentlyBeingUpdated}
                                           onCompetenceUpdated={onCompetenceUpdated}/>
                    )}
                </div>
            </div>
        </div>
    );
}
