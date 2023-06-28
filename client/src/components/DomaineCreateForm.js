import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from 'bcryptjs';
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from '@mui/material';

export default function DomaineCreateForm(props) {

    const initialFormData = Object.freeze({
        domaineName: "Nom du domaine",
        domaineDescription: "Descrition du domaine",
    
        domaineId: "" // Modifier la valeur ici
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const domaineToCreate = {
            domaineId: 0,
            domaineName: formData.domaineName,
            domaineDescription: formData.domaineDescription,
     
            jobId: parseInt(formData.jobId),
    
        };
        const url = Constants.API_URL_CREATE_DOMAINE;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(domaineToCreate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        props.onDomaineCreated(domaineToCreate);

    };
    return (
        <form action="" className="w-100 px-5" onSubmit={handleSubmit}
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%'}}>
            <h1 className="mt-5">Create new Domaine</h1>



            <TextField type="text" value={formData.domaineName} id="domaineName" label="domaineName" name="domaineName" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>


            <TextField type="text" value={formData.domaineDescription} id="domaineDescription" label="domaineDescription" name="domaineDescription" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <TextField type="number" value={formData.jobId} id="jobId" label="jobId" name="jobId" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5"
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E', width: '100px'}}
            >
                Submit
            </button>
            <button

                color="primary" onClick={() => props.onDomaineCreated(null)}
                className="btn secondary btn-lg w-100 mt-3"
                style={{marginBottom: '10px', marginTop: '20px', width: '100px'}}>

                Cancel
            </button>
            </div>


        </form>
    );
}