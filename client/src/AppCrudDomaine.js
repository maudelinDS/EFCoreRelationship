import React, {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import Constants from "./utilities/Constants";
import DomaineCreateForm from "./components/DomaineCreateForm";
import DomaineUpdateForm from "./components/DomaineUpdateForm";
import NavBar from "./appBar";
import Box from "@mui/material/Box";
import imageURL from "./images/JOBK_Img_HeaderMobile_Home.png";
import Section from "./Sections";
import UserIcon from './images/user-solid.svg';

export default function AppCrudDomaine() {
    const [domaines, SetDomaines] = useState([]);
    const [showingCreateNewDomaineForm, setShowingCreateNewDomaineForm] = useState(false);
    const [domaineCurrentlyBeingUpdated, setDomaineCurrentlyBeingUpdated] = useState(false);

    useEffect(() => {
        getDomaines();
    }, []);

    function getDomaines() {
        const url = Constants.API_URL_GET_ALL_DOMAINES;

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(studentsFromServer => {
                console.log(studentsFromServer);
                SetDomaines(studentsFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

    function deleteDomaine(domaineId) {
        const url = `${Constants.API_URL_DELETE_DOMAINE_BY_ID}/${domaineId}`;

        fetch(url, {
            method: 'DELETE',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                onStudentDeleted(responseFromServer);
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


    function renderDomainesTable() {
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
                                }}>Nom du Domaine</TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Description du Domaine</TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Job</TableCell>


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
                            {domaines.map((domaine) => (
                                <TableRow key={domaine.domaineId} style={{
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
                                    }}>{domaine.domaineId}</TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>{domaine.domaineName}
                                    </TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}>{domaine.domaineDescription/*{/* > 8 ? domaine.DomaineDescription.substring(0, 4) + '...' : domaine.DomaineDescription}*/}</TableCell>

                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>{domaine.jobId}</TableCell>
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
                                            onClick={() => setDomaineCurrentlyBeingUpdated(domaine)}
                                            style={{background: '#141E66'}}
                                            size='small'
                                        >
                                            Update
                                        </Button>

                                    </TableCell>
                                    {/*
                                    {domaine.roleId !== 1 || domaine.roleId !== 2 && (
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
                                                        `Are you sure you want to delete the domaine "${domaine.domaineName}"?`
                                                    )
                                                )
                                                    deleteDomaine(domaine.domaineId);
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
                    onClick={() => setShowingCreateNewDomaineForm(true)}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
                >
                    Create new domaines
                </Button>
            </Box>
        )
            ;
    }

    function onDomaineCreated(createdDomaine) {
        setShowingCreateNewDomaineForm(false);
        if (createdDomaine === null) {
            return;
        }
        alert(`Domaine : "${createdDomaine.domaineName}", has been created, and will show up in the table below`);
        getDomaines();
    }

    function onDomaineUpdated(updatedDomaine) {
        setDomaineCurrentlyBeingUpdated(false);
        if (updatedDomaine === null) {
            return;
        }
        let domainesCopy = [...domaines];

        const index = domainesCopy.findIndex((domaine) => domaine.domaineId === updatedDomaine.domaineId);
        if (index !== -1) {
            domainesCopy[index] = updatedDomaine;
        }
        SetDomaines(domainesCopy);
        alert(`Student successfully updated "${updatedDomaine.domaineName}"`);
    }

    function onStudentDeleted(deletedStudentId) {
        let domainesCopy = [...domaines];
        const index = domainesCopy.findIndex((domaine) => domaine.domaineId === deletedStudentId);
        if (index !== -1) {
            domainesCopy.splice(index, 1);
        }
        SetDomaines(domainesCopy);
        alert('Domaine successfully deleted');
    }

    return (
        <div className="container" style={{maxWidth: '100%', margin: '0'}}>
            <div className="row min-vh-100">
                <div className="col d-flex flex flex-column justify-content-center ">
                    {!showingCreateNewDomaineForm && !domaineCurrentlyBeingUpdated && (
                        <div>
                            {domaines.length > 0 && renderDomainesTable()}
                        </div>
                    )}
                    {showingCreateNewDomaineForm && (
                        <DomaineCreateForm onDomaineCreated={onDomaineCreated}/>
                    )}
                    {domaineCurrentlyBeingUpdated && (
                        <DomaineUpdateForm domaine={domaineCurrentlyBeingUpdated} onDomaineUpdated={onDomaineUpdated}/>
                    )}
                </div>
            </div>
        </div>
    );
}
