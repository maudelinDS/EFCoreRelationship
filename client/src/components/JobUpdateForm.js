import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import {TextField} from "@mui/material";

export default function JobUpdateForm(props) {

    const initialFormData = Object.freeze({
        jobName: props.job.jobName,
        jobDescription: props.job.jobDescription,

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
        const jobToUpdate = {
            jobId: props.job.jobId,
            jobName: formData.jobName,
            jobDescription: formData.jobDescription,

        };
        const url = Constants.API_URL_UPDATE_JOB;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobToUpdate)
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
        props.onJobUpdated(jobToUpdate);

    };
    return (
        <form action="" className="w-100 px-5"
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%'}}>

            <h1 className="mt-5">Update Job "{props.job.jobName}".</h1>


            <TextField type="text" value={formData.jobName} id="jobName" label="jobName"
                       name="jobName" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>



            <TextField type="text" value={formData.jobDescription} id="jobDescription" label="jobDescription"
                       name="jobDescription" variant="outlined" onChange={handleChange} style={{width: '60%'}}/>

            <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5"
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E', width: '100px'}}

            >
                Submit
            </button>
            <button onClick={() => props.onJobUpdated(null)} className="btn secondary btn-lg w-100 mt-3"
                    style={{marginBottom: '10px', marginTop: '20px', width: '100px'}}

            >
                Cancel
            </button>
            </div>
        </form>
    );
}