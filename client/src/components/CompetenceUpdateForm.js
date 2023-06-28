import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from "bcryptjs";
import {Button, TextField} from "@mui/material";

export default function CompetenceUpdateForm(props) {

    const initialFormData = Object.freeze({
        competenceName: props.competence.competenceName || '',
        competenceDescription: props.competence.competenceDescription || '',

        domaineId: props.competence.domaineId || '',
    });
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        const competenceToUpdate = {
            competenceId: props.competence.competenceId,
            competenceName: formData.competenceName,
            competenceDescription: formData.competenceDescription,

            domaineId: parseInt(formData.domaineId),

        };
        const url = Constants.API_URL_UPDATE_COMPETENCE;
        console.log(competenceToUpdate)
        fetch(`${url}/${props.competence.competenceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(competenceToUpdate)
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


        props.onCompetenceUpdated(competenceToUpdate);

    };
    return (
        <form action="" className="w-100 px-5"
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%'}}>
            <h1 className="mt-5">Update Student "{props.competence.competenceName}".</h1>

            <TextField type="text" value={formData.competenceName} id="competenceName" label="competenceName"
                       name="competenceName" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>


            <TextField type="text" value={formData.competenceDescription} id="competenceDescription" label="competenceDescription"
                       name="competenceDescription" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <TextField type="number" value={formData.domaineId} id="domaineId" label="domaineId" name="domaineId"
                       variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E', width: '100px'}}
                >
                    Submit
                </Button>
                <button onClick={() => props.onCompetenceUpdated(null)} className="btn secondary btn-lg w-100 mt-3"
                        style={{marginBottom: '10px', marginTop: '20px', width: '100px'}}

                >
                    Cancel
                </button>
            </div>
        </form>
    );
}