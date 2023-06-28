import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from 'bcryptjs';
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from '@mui/material';

export default function ModuleCreateForm(props) {

    const initialFormData = Object.freeze({
        moduleName: "Nom du module",
        moduleLieux: "Lieux du module",

    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.name 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
     
        const moduleToCreate = {
            moduleId: 0,
            moduleName: formData.moduleName,
            moduleLieux: formData.moduleLieux,
        };
        const url = Constants.API_URL_CREATE_MODULE;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(moduleToCreate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        props.onModuleCreated(moduleToCreate);

    };
    return (
        <form action="" className="w-100 px-5" onSubmit={handleSubmit}
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%'}}>
            <h1 className="mt-5">Create new Module</h1>



            <TextField type="text" value={formData.moduleName} id="moduleName" label="moduleName" name="moduleName" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>


            <TextField type="text" value={formData.moduleLieux} id="moduleLieux" label="moduleLieux" name="moduleLieux" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5"
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E', width: '100px'}}
            >
                Submit
            </button>
            <button

                color="primary" onClick={() => props.onModuleCreated(null)}
                className="btn secondary btn-lg w-100 mt-3"
                style={{marginBottom: '10px', marginTop: '20px', width: '100px'}}>

                Cancel
            </button>
            </div>


        </form>
    );
}