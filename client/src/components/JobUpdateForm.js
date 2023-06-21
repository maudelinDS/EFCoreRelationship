import React, {useState} from 'react';
import Constants from "../utilities/Constants";

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
        <form action="" className="w-100 px-5">
            <h1 className="mt-5">Update Job "{props.job.jobName}".</h1>
            <div className="mt-5">
                <label htmlFor="" className="h3 form-label">Job Name</label>
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
            <button onClick={() => props.onJobUpdated(null)} className="btn secondary btn-lg w-100 mt-3">
                Cancel
            </button>
        </form>
    );
}