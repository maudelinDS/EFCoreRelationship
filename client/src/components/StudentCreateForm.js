import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from 'bcryptjs';
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from '@mui/material';

export default function StudentCreateForm(props) {

    const initialFormData = Object.freeze({
        userFirstName: "First Name Etudiant x",
        userLastName: "Last Name Etudiant x",
        userEmail: "Email Etudiant x",
        userPassword: "Password Etudiant x",
        userPhone: "Phone Etudiant x",
        jobId: "", // Modifier la valeur ici
        roleId: "" // Modifier la valeur ici
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.name === "jobId" || e.target.name === "roleId" ? parseInt(e.target.value) : e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(formData.userPassword, saltRounds);

        const studentToCreate = {
            userId: 0,
            userFirstName: formData.userFirstName,
            userLastName: formData.userLastName,
            userEmail: formData.userEmail,
            userPassword: hashedPassword,
            userPhone: formData.userPhone,
            jobId: parseInt(formData.jobId),
            roleId: parseInt(formData.roleId)
        };
        const url = Constants.API_URL_CREATE_STUDENT;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentToCreate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        props.onStudentCreated(studentToCreate);

    };
    return (
        <form action="" className="w-100 px-5" onSubmit={handleSubmit}
              style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <h1 className="mt-5">Create new User</h1>



            <TextField type="text" value={formData.userFirstName} id="userFirstName" label="userFirstName" name="userFirstName" variant="outlined" onChange={handleChange}/>


            <TextField type="text" value={formData.userLastName} id="userLastName" label="userLastName" name="userLastName" variant="outlined" onChange={handleChange}/>

            <TextField type="email" value={formData.userEmail} id="userEmail" label="userEmail" name="userEmail" variant="outlined" onChange={handleChange}/>

            <TextField type="tel" value={formData.userPhone} id="userPhone" label="userPhone" name="userPhone" variant="outlined" onChange={handleChange}/>

            <TextField type="password" value={formData.userPassword} id="userPassword" label="userPassword" name="userPassword" variant="outlined" onChange={handleChange}/>

            <TextField type="number" value={formData.jobId} id="jobId" label="jobId" name="jobId" variant="outlined" onChange={handleChange}/>

            <TextField type="number" value={formData.roleId} id="roleId" label="roleId" name="roleId" variant="outlined" onChange={handleChange}/>


            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5"
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
            >
                Submit
            </button>
            <button

                color="primary" onClick={() => props.onStudentCreated(null)}
                className="btn secondary btn-lg w-100 mt-3">

                Cancel
            </button>


        </form>
    );
}