import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from "bcryptjs";
import {Button, TextField} from "@mui/material";

export default function StudentUpdateForm(props) {

    const initialFormData = Object.freeze({
        userFirstName: props.student.userFirstName || '',
        userLastName: props.student.userLastName || '',
        userEmail: props.student.userEmail || '',
        userPassword: props.student.userPassword || '',
        userPhone: props.student.userPhone || '',
        jobId: props.student.jobId || '',
        roleId: props.student.roleId || '',
        projetId: props.student.projetId || '',
    });
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async(e) => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(formData.userPassword, saltRounds);

        e.preventDefault();
        const studentToUpdate = {
            userId: props.student.userId,
            userFirstName: formData.userFirstName,
            userLastName: formData.userLastName,
            userEmail: formData.userEmail,
            userPassword:hashedPassword,
            userPhone: parseInt(formData.userPhone),
            jobId: parseInt(formData.jobId),
            roleId: parseInt(formData.roleId),
            projetId: parseInt(formData.projetId),

        };
        const url = Constants.API_URL_UPDATE_STUDENT;
        console.log(studentToUpdate)
        fetch(`${url}/${props.student.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentToUpdate)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error: ' + response.status);
                }
                return response.text(); // Lire la réponse sous forme de texte
            })
            .then((responseText) => {
                try {
                    const responseJSON = JSON.parse(responseText); // Tenter de parser la réponse JSON
                    console.log(responseJSON);
                    // Traiter la réponse JSON ici
                } catch (error) {
                    console.log(error);
                    throw new Error('Invalid JSON response');
                }
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });





        props.onStudentUpdated(studentToUpdate);

    };
    return (
        <form action="" className="w-100 px-5" style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <h1 className="mt-5">Update Student "{props.student.userFirstName}".</h1>

            <TextField type="text" value={formData.userFirstName} id="userFirstName" label="userFirstName" name="userFirstName" variant="outlined" onChange={handleChange}/>


            <TextField type="text" value={formData.userLastName} id="userLastName" label="userLastName" name="userLastName" variant="outlined" onChange={handleChange}/>

            <TextField type="email" value={formData.userEmail} id="userEmail" label="userEmail" name="userEmail" variant="outlined" onChange={handleChange}/>

            <TextField type="tel" value={formData.userPhone} id="userPhone" label="userPhone" name="userPhone" variant="outlined" onChange={handleChange}/>

            <TextField type="password" value={formData.userPassword} id="userPassword" label="userPassword" name="userPassword" variant="outlined" onChange={handleChange}/>

            <TextField type="number" value={formData.jobId} id="jobId" label="jobId" name="jobId" variant="outlined" onChange={handleChange}/>

            <TextField type="number" value={formData.roleId} id="roleId" label="roleId" name="roleId" variant="outlined" onChange={handleChange}/>

            <TextField type="number" value={formData.projetId} id="projetId" label="projetId" name="projetId" variant="outlined" onChange={handleChange}/>



            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
            >
                Submit
            </Button>
            <button onClick={() => props.onStudentUpdated(null)} className="btn secondary btn-lg w-100 mt-3">
                Cancel
            </button>
        </form>
    );
}