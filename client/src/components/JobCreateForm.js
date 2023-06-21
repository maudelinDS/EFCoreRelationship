import React, {useState} from 'react';
import Constants from "../utilities/Constants";

export default function JobCreateForm(props) {

    const initialFormData = Object.freeze({
        jobName: "First Name Etudiant x",
        jobDescription: "First Name Etudiant x",

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
        const jobToCreate = {
            jobId: 0,
            jobName: formData.jobName,
            jobDescription: formData.jobDescription,

        };
        const url = Constants.API_URL_CREATE_JOB;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobToCreate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                console.log(formData.jobName, formData.jobDescription);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        props.onJobCreated(jobToCreate);

    };
    return (
        <form action="" className="w-100 px-5">
            <h1 className="mt-5">Create new Job</h1>
            <div className="mt-5">
                <label htmlFor="" className="h3 form-label">Job  Name</label>
                <input type="text" value={formData.jobName} name="jobName" className="form-control"
                       onChange={handleChange}/>
            </div>

            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Job Description</label>
                <input type="text" value={formData.jobDescription} name="jobDescription" className="form-control"
                       onChange={handleChange}/>
            </div>

            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
                Submit
            </button>
            <button onClick={() => props.onJobCreated(null)} className="btn secondary btn-lg w-100 mt-3">
                Cancel
            </button>
        </form>
    );
}