import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from 'bcryptjs';
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from '@mui/material';

export default function CompetenceCreateForm(props) {

    const initialFormData = Object.freeze({
        competenceName: "First Name Etudiant x",
        competenceDescription: "Last Name Etudiant x",

        domaineId: "" // Modifier la valeur ici
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
        const handleSubmit = async (e) => {
            e.preventDefault();

            const competenceToCreate = {
                userId: 0,
                competenceName: formData.competenceName,
                competenceDescription: formData.competenceDescription,

                domaineId: parseInt(formData.domaineId)
            };
            const url = Constants.API_URL_CREATE_COMPETENCE;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(competenceToCreate)
            })
                .then(response => response.json())
                .then(responseFromServer => {
                    console.log(responseFromServer);

                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });
            props.onCompetenceCreated(competenceToCreate);

        };
        return (
            <form action="" className="w-100 px-5" onSubmit={handleSubmit}
                  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%'}}>
                <h1 className="mt-5">Create new Competences</h1>


                <TextField type="text" value={formData.competenceName} id="competenceName" label="competenceName"
                           name="competenceName" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>


                <TextField type="text" value={formData.competenceDescription} id="competenceDescription"
                           label="competenceDescription" name="competenceDescription" variant="outlined"
                           onChange={handleChange} style={{width: '60%'}}/>

                <TextField type="number" value={formData.domaineId} id="domaineId" label="domaineId" name="domaineId"
                           variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

                <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

                    <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5"
                            style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E', width: '100px'}}
                    >
                        Submit
                    </button>
                    <button

                        color="primary" onClick={() => props.onCompetenceCreated(null)}
                        className="btn secondary btn-lg w-100 mt-3"
                        style={{marginBottom: '10px', marginTop: '20px', width: '100px'}}>

                        Cancel
                    </button>
                </div>


            </form>
        );
    }