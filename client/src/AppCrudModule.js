import React, {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import Constants from "./utilities/Constants";
import ModuleCreateForm from "./components/ModuleCreateForm";
import ModuleUpdateForm from "./components/ModuleUpdateForm";
import NavBar from "./appBar";
import Box from "@mui/material/Box";
import imageURL from "./images/JOBK_Img_HeaderMobile_Home.png";
import Section from "./Sections";
import UserIcon from './images/user-solid.svg';

export default function AppCrudModule() {
    const [modules, SetModules] = useState([]);
    const [showingCreateNewModuleForm, setShowingCreateNewModuleForm] = useState(false);
    const [moduleCurrentlyBeingUpdated, setModuleCurrentlyBeingUpdated] = useState(false);

    useEffect(() => {
        getModules();
    }, []);

    function getModules() {
        const url = Constants.API_URL_GET_ALL_MODULES;

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(studentsFromServer => {
                console.log(studentsFromServer);
                SetModules(studentsFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

    function deleteModule(moduleId) {
        const url = `${Constants.API_URL_DELETE_MODULE_BY_ID}/${moduleId}`;

        fetch(url, {
            method: 'DELETE',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                onModuleDeleted(responseFromServer);
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


    function renderModulesTable() {
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
                                }}>Nom du Module</TableCell>
                                <TableCell style={{
                                    height: '80px',
                                    width: '90px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Lieux du Module</TableCell>


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
                            {modules.map((module) => (
                                <TableRow key={module.moduleId} style={{
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
                                    }}>{module.moduleId}</TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>{module.moduleName}
                                    </TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}>{module.moduleLieux/*{/* > 8 ? module.moduleLieux.substring(0, 4) + '...' : module.moduleLieux}*/}</TableCell>

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
                                            onClick={() => setModuleCurrentlyBeingUpdated(module)}
                                            style={{background: '#141E66'}}
                                            size='small'
                                        >
                                            Update
                                        </Button>

                                    </TableCell>
{/*
                                    {module.roleId !== 1 || module.roleId !== 2 && (
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
                                                            `Are you sure you want to delete the module "${module.moduleName}"?`
                                                        )
                                                    )
                                                        deleteModule(module.moduleId);
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
                    onClick={() => setShowingCreateNewModuleForm(true)}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
                >
                    Create new modules
                </Button>
            </Box>
        )
            ;
    }

    function onModuleCreated(createdModule) {
        setShowingCreateNewModuleForm(false);
        if (createdModule === null) {
            return;
        }
        alert(`Module : "${createdModule.moduleName}", has been created, and will show up in the table below`);
        getModules();
    }

    function onModuleUpdated(updatedModule) {
        setModuleCurrentlyBeingUpdated(false);
        if (updatedModule === null) {
            return;
        }
        let modulesCopy = [...modules];

        const index = modulesCopy.findIndex((module) => module.moduleId === updatedModule.moduleId);
        if (index !== -1) {
            modulesCopy[index] = updatedModule;
        }
        SetModules(modulesCopy);
        alert(`Module successfully updated "${updatedModule.moduleName}"`);
    }

    function onModuleDeleted(deletedModuleId) {
        let modulesCopy = [...modules];
        const index = modulesCopy.findIndex((module) => module.moduleId === deletedModuleId);
        if (index !== -1) {
            modulesCopy.splice(index, 1);
        }
        SetModules(modulesCopy);
        alert('Module successfully deleted');
    }

    return (
        <div className="container" style={{maxWidth: '100%', margin: '0'}}>
            <div className="row min-vh-100">
                <div className="col d-flex flex flex-column justify-content-center ">
                    {!showingCreateNewModuleForm && !moduleCurrentlyBeingUpdated && (
                        <div>
                            {modules.length > 0 && renderModulesTable()}
                        </div>
                    )}
                    {showingCreateNewModuleForm && (
                        <ModuleCreateForm onModuleCreated={onModuleCreated}/>
                    )}
                    {moduleCurrentlyBeingUpdated && (
                        <ModuleUpdateForm module={moduleCurrentlyBeingUpdated} onModuleUpdated={onModuleUpdated}/>
                    )}
                </div>
            </div>
        </div>
    );
}
