import React, {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import Constants from "./utilities/Constants";
import RoleCreateForm from "./components/RoleCreateForm";
import RoleUpdateForm from "./components/RoleUpdateForm";
import NavBar from "./appBar";
import Box from "@mui/material/Box";
import imageURL from "./images/JOBK_Img_HeaderMobile_Home.png";
import Section from "./Sections";
import UserIcon from './images/user-solid.svg';

export default function AppCrudRole() {
    const [roles, SetRoles] = useState([]);
    const [showingCreateNewRoleForm, setShowingCreateNewRoleForm] = useState(false);
    const [roleCurrentlyBeingUpdated, setRoleCurrentlyBeingUpdated] = useState(false);

    useEffect(() => {
        getRoles();
    }, []);

    function getRoles() {
        const url = Constants.API_URL_GET_ALL_ROLES;

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(studentsFromServer => {
                console.log(studentsFromServer);
                SetRoles(studentsFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

    function deleteRole(roleId) {
        const url = `${Constants.API_URL_DELETE_ROLES_BY_ID}/${roleId}`;

        fetch(url, {
            method: 'DELETE',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                onRoleDeleted(responseFromServer);
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


    function renderRolesTable() {
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
                            {roles.map((role) => (
                                <TableRow key={role.roleId} style={{
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
                                    }}>{role.roleId}</TableCell>
                                    <TableCell style={{
                                        width: '90px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>{role.roleName}
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
                                            onClick={() => setRoleCurrentlyBeingUpdated(role)}
                                            style={{background: '#141E66'}}
                                            size='small'
                                        >
                                            Update
                                        </Button>

                                    </TableCell>
{/*
                                    {role.roleId !== 1 || role.roleId !== 2 && (
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
                                                            `Are you sure you want to delete the role "${role.roleName}"?`
                                                        )
                                                    )
                                                        deleteRole(role.roleId);
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
                    onClick={() => setShowingCreateNewRoleForm(true)}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
                >
                    Create new roles
                </Button>
            </Box>
        )
            ;
    }

    function onRoleCreated(createdRole) {
        setShowingCreateNewRoleForm(false);
        if (createdRole === null) {
            return;
        }
        alert(`Role : "${createdRole.roleName}", has been created, and will show up in the table below`);
        getRoles();
    }

    function onRoleUpdated(updatedRole) {
        setRoleCurrentlyBeingUpdated(false);
        if (updatedRole === null) {
            return;
        }
        let rolesCopy = [...roles];

        const index = rolesCopy.findIndex((role) => role.roleId === updatedRole.roleId);
        if (index !== -1) {
            rolesCopy[index] = updatedRole;
        }
        SetRoles(rolesCopy);
        alert(`Role successfully updated "${updatedRole.roleName}"`);
    }

    function onRoleDeleted(deletedRoleId) {
        let rolesCopy = [...roles];
        const index = rolesCopy.findIndex((role) => role.roleId === deletedRoleId);
        if (index !== -1) {
            rolesCopy.splice(index, 1);
        }
        SetRoles(rolesCopy);
        alert('Role successfully deleted');
    }

    return (
        <div className="container" style={{maxWidth: '100%', margin: '0'}}>
            <div className="row min-vh-100">
                <div className="col d-flex flex flex-column justify-content-center ">
                    {!showingCreateNewRoleForm && !roleCurrentlyBeingUpdated && (
                        <div>
                            {roles.length > 0 && renderRolesTable()}
                        </div>
                    )}
                    {showingCreateNewRoleForm && (
                        <RoleCreateForm onRoleCreated={onRoleCreated}/>
                    )}
                    {roleCurrentlyBeingUpdated && (
                        <RoleUpdateForm role={roleCurrentlyBeingUpdated} onRoleUpdated={onRoleUpdated}/>
                    )}
                </div>
            </div>
        </div>
    );
}
