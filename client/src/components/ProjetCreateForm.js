import React, {useState} from 'react';
import Constants from "../utilities/Constants";

export default function ProjetCreateForm(props) {

    const initialFormData = Object.freeze({
        jobName: "First Name Etudiant x",
        jobDescription: "Last Name Etudiant x",

    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
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
                console.log(formData.projetName, formData.projetDescription);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        props.onProjetCreated(projetToCreate);

    };
    return (
        <form action="" className="w-100 px-5">
            <h1 className="mt-5">Create new Projet</h1>
            <div className="mt-5">
                <label htmlFor="" className="h3 form-label">Projet  Name</label>
                <input type="text" value={formData.projetName} name="projetName" className="form-control"
                       onChange={handleChange}/>
            </div>

            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Projet Description</label>
                <input type="text" value={formData.projetDescription} name="projetDescription" className="form-control"
                       onChange={handleChange}/>
            </div>


            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
                Submit
            </button>
            <button onClick={() => props.onProjetCreated(null)} className="btn secondary btn-lg w-100 mt-3">
                Cancel
            </button>
        </form>
    );
}