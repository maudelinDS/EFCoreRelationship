import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from "bcryptjs";
import {Button, TextField} from "@mui/material";

export default function StudentUpdateForm(props) {

    const initialFormData = Object.freeze({
        moduleName: props.module.moduleName || '',
        moduleLieux: props.module.moduleLieux || '',
   
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
        const moduleToUpdate = {
            moduleId: props.module.moduleId,
            moduleName: formData.moduleName,
            moduleLieux: formData.moduleLieux,


        };
        const url = Constants.API_URL_UPDATE_MODULE;
        console.log(moduleToUpdate)
        fetch(`${url}/${props.module.moduleId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(moduleToUpdate)
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


        props.onModuleUpdated(moduleToUpdate);

    };
    return (
        <form action="" className="w-100 px-5"
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%'}}>
            <h1 className="mt-5">Update Module "{props.module.moduleName}".</h1>

            <TextField type="text" value={formData.moduleName} id="moduleName" label="moduleName"
                       name="moduleName" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>


            <TextField type="text" value={formData.moduleLieux} id="moduleLieux" label="moduleLieux"
                       name="moduleLieux" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E', width: '100px'}}
                >
                    Submit
                </Button>
                <button onClick={() => props.onModuleUpdated(null)} className="btn secondary btn-lg w-100 mt-3"
                        style={{marginBottom: '10px', marginTop: '20px', width: '100px'}}

                >
                    Cancel
                </button>
            </div>
        </form>
    );
}