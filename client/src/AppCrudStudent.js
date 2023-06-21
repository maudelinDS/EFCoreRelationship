import React, {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import Constants from "./utilities/Constants";
import StudentCreateForm from "./components/StudentCreateForm";
import StudentUpdateForm from "./components/StudentUpdateForm";
import NavBar from "./appBar";
import Box from "@mui/material/Box";
import imageURL from "./images/JOBK_Img_HeaderMobile_Home.png";
import Section from "./Sections";
import UserIcon from './images/user-solid.svg';

export default function AppCrudStudent() {
    const [users, SetUsers] = useState([]);
    const [showingCreateNewStudentForm, setShowingCreateNewStudentForm] = useState(false);
    const [studentCurrentlyBeingUpdated, setStudentCurrentlyBeingUpdated] = useState(false);

    useEffect(() => {
        getStudents();
    }, []);

    function getStudents() {
        const url = Constants.API_URL_GET_ALL_STUDENTS;

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(studentsFromServer => {
                console.log(studentsFromServer);
                SetUsers(studentsFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

    function deleteStudent(studentId) {
        const url = `${Constants.API_URL_DELETE_STUDENT_BY_ID}/${studentId}`;

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


    function renderStudentsTable() {
        return (
            <Box sx={containerStyles}>

                <NavBar showSection={false}/>


                <TableContainer style={{width: '100%', marginTop: '200px', overflow:'hidden', overflowX: 'hidden'}}>
                    <Table style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "500px",
                        width: '100%',
                        alignItems: 'center',
                        tableLayout: 'fixed',
                    }}>
                        <TableHead style={{width: '98%'}}>
                            <TableRow style={{display:'flex',width: '100%',justifyContent: 'space-between', textAlign: 'center'}}>
                                <TableCell style={{height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>img</TableCell>
                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>Id</TableCell>
                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>First N.</TableCell>
                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>Last N.</TableCell>
                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>Email</TableCell>

                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>Phone</TableCell>
                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>Job</TableCell>
                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>Role</TableCell>
                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}></TableCell>
                                <TableCell style={{ height: '80px', width: '90px',display:'flex', justifyContent: 'center', alignItems: 'center'}}></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody style={{overflow: "scroll", height: "600px", width: '100%'}}>
                            {users.map((user) => (
                                    <TableRow key={user.userId} style={{display: 'flex', flexDirection:'row',justifyContent: 'space-between',alignItems:'center', padding: '16px'}}>
                                    <TableCell style={{ width: '90px',height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={UserIcon} alt="User Icon" width="24" height="24"/>
                                    </TableCell>
                                    <TableCell style={{ width: '90px',height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{user.userId}</TableCell>
                                    <TableCell style={{ width: '90px',height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{user.userFirstName}
                                    </TableCell>
                                    <TableCell style={{ width: '90px',height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{user.userLastName/*{/* > 8 ? user.userLastName.substring(0, 4) + '...' : user.userLastName}*/}</TableCell>
                                    <TableCell style={{ width: '90px',height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>  {user.userEmail}</TableCell>
                                    <TableCell style={{ width: '90px',height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{user.userPhone}</TableCell>
                                    <TableCell style={{ width: '90px',height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{user.jobId}</TableCell>
                                    <TableCell style={{ width: '90px',height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{user.roleId}</TableCell>
                                    <TableCell style={{width: '90px' , height: '80px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setStudentCurrentlyBeingUpdated(user)}
                                            style={{background: '#141E66'}}
                                            size='small'
                                        >
                                            Update
                                        </Button>

                                    </TableCell>
                                        <TableCell style={{height: '80px',display:'flex', justifyContent: 'center', alignItems: 'center'}}>

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        `Are you sure you want to delete the user "${user.userFirstName}"?`
                                                    )
                                                )
                                                    deleteStudent(user.userId);
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
                        onClick={() => setShowingCreateNewStudentForm(true)}
                        style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
                    >
                        Create new users
                    </Button>
            </Box>
        )
            ;
    }

    function onStudentCreated(createdStudent) {
        setShowingCreateNewStudentForm(false);
        if (createdStudent === null) {
            return;
        }
        alert(`Student : "${createdStudent.userFirstName}", has been created, and will show up in the table below`);
        getStudents();
    }

    function onStudentUpdated(updatedStudent) {
        setStudentCurrentlyBeingUpdated(false);
        if (updatedStudent === null) {
            return;
        }
        let studentsCopy = [...users];

        const index = studentsCopy.findIndex((user) => user.userId === updatedStudent.userId);
        if (index !== -1) {
            studentsCopy[index] = updatedStudent;
        }
        SetUsers(studentsCopy);
        alert(`Student successfully updated "${updatedStudent.userFirstName}"`);
    }

    function onStudentDeleted(deletedStudentId) {
        let studentsCopy = [...users];
        const index = studentsCopy.findIndex((user) => user.userId === deletedStudentId);
        if (index !== -1) {
            studentsCopy.splice(index, 1);
        }
        SetUsers(studentsCopy);
        alert('Student successfully deleted');
    }

    return (
        <div className="container" style={{maxWidth: '100%', margin: '0'}}>
            <div className="row min-vh-100">
                <div className="col d-flex flex flex-column justify-content-center ">
                    {!showingCreateNewStudentForm && !studentCurrentlyBeingUpdated && (
                        <div>
                            {users.length > 0 && renderStudentsTable()}
                        </div>
                    )}
                    {showingCreateNewStudentForm && (
                        <StudentCreateForm onStudentCreated={onStudentCreated}/>
                    )}
                    {studentCurrentlyBeingUpdated && (
                        <StudentUpdateForm student={studentCurrentlyBeingUpdated} onStudentUpdated={onStudentUpdated}/>
                    )}
                </div>
            </div>
        </div>
    );
}
