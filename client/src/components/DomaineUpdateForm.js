import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from "bcryptjs";
import {Button, TextField} from "@mui/material";

export default function DomaineUpdateForm(props) {

    const initialFormData = Object.freeze({
        domaineName: props.domaine.domaineName || '',
        domaineDescription: props.domaine.domaineDescription || '',

        jobId: props.domaine.jobId || '',

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
        const domaineToUpdate = {
            domaineId: props.domaine.domaineId,
            domaineName: formData.domaineName,
            domaineDescription: formData.domaineDescription,

            jobId: parseInt(formData.jobId),


        };
        const url = Constants.API_URL_UPDATE_DOMAINE;
        console.log(domaineToUpdate)
        fetch(`${url}/${props.domaine.domaineId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(domaineToUpdate)
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


        props.onDomaineUpdated(domaineToUpdate);

    };
    return (
        <form action="" className="w-100 px-5"
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%'}}>
            <h1 className="mt-5">Update Domaine "{props.domaine.domaineName}".</h1>

            <TextField type="text" value={formData.domaineName} id="domaineName" label="domaineName"
                       name="domaineName" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>


            <TextField type="text" value={formData.domaineDescription} id="domaineDescription" label="domaineDescription"
                       name="domaineDescription" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <TextField type="number" value={formData.jobId} id="jobId" label="jobId" name="jobId" variant="outlined"
                       onChange={handleChange} style={{width: '60%'}}/>

            <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E', width: '100px'}}
                >
                    Submit
                </Button>
                <button onClick={() => props.onDomaineUpdated(null)} className="btn secondary btn-lg w-100 mt-3"
                        style={{marginBottom: '10px', marginTop: '20px', width: '100px'}}

                >
                    Cancel
                </button>
            </div>
        </form>
    );
}