import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from 'bcryptjs';
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from '@mui/material';

export default function ProjetCreateForm(props) {

    const initialFormData = Object.freeze({
        projetName: "Nom du projet",
        projetDescription: "Description du projet",
    
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.name === "projetId" || e.target.name === "projetId" ? parseInt(e.target.value) : e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const projetToCreate = {
            projetId: 0,
            projetName: formData.projetName,
            projetDescription: formData.projetDescription,

        };
        const url = Constants.API_URL_CREATE_PROJET;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projetToCreate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        props.onProjetCreated(projetToCreate);

    };
    return (
        <form action="" className="w-100 px-5" onSubmit={handleSubmit}
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%'}}>
            <h1 className="mt-5">Create new Projet</h1>



            <TextField type="text" value={formData.projetName} id="projetName" label="projetName" name="projetName" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>


            <TextField type="text" value={formData.projetDescription} id="projetDescription" label="projetDescription" name="projetDescription" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5"
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E', width: '100px'}}
            >
                Submit
            </button>
            <button

                color="primary" onClick={() => props.onProjetCreated(null)}
                className="btn secondary btn-lg w-100 mt-3"
                style={{marginBottom: '10px', marginTop: '20px', width: '100px'}}>

                Cancel
            </button>
            </div>


        </form>
    );
}