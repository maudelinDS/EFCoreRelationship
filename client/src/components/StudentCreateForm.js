import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from 'bcryptjs';

export default function StudentCreateForm(props) {

    const initialFormData = Object.freeze({
        userFirstName: "First Name Etudiant x",
        userLastName: "Last Name Etudiant x",
        userEmail: "Email Etudiant x",
        userPassword: "Password Etudiant x",
        userPhone: "Phone Etudiant x",
        jobId: "", // Modifier la valeur ici
        roleId: "" // Modifier la valeur ici
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.name === "jobId" || e.target.name === "roleId" ? parseInt(e.target.value) : e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(formData.userPassword, saltRounds);

        const studentToCreate = {
            userId: 0,
            userFirstName: formData.userFirstName,
            userLastName: formData.userLastName,
            userEmail: formData.userEmail,
            userPassword: hashedPassword,
            userPhone: formData.userPhone,
            jobId: parseInt(formData.jobId),
            roleId: parseInt(formData.roleId)
        };
        const url = Constants.API_URL_CREATE_STUDENT;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentToCreate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                console.log(formData.firstName, formData.lastName, formData.email, formData.password, formData.phone, formData.job, formData.role);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        props.onStudentCreated(studentToCreate);

    };
    return (
        <form action="" className="w-100 px-5" onSubmit={handleSubmit}>
            <h1 className="mt-5">Create new User</h1>
            <div className="mt-5">
                <label htmlFor="" className="h3 form-label">Student First Name</label>
                <input type="text" value={formData.userFirstName} name="userFirstName" className="form-control"
                       onChange={handleChange}/>
            </div>

            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Student Last Name</label>
                <input type="text" value={formData.userLastName} name="userLastName" className="form-control"
                       onChange={handleChange}/>
            </div>

            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Student Email</label>
                <input type="email" value={formData.userEmail} name="userEmail" className="form-control"
                       onChange={handleChange}/>
            </div>

            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Student Phone</label>
                <input type="tel" value={formData.userPhone} name="userPhone" className="form-control"
                       onChange={handleChange}/>
            </div>


            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Student Student</label>
                <input type="password" value={formData.userPassword} name="userPassword" className="form-control"
                       onChange={handleChange}/>
            </div>

            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Job Student</label>
                <input type="number" value={formData.jobId} name="jobId" className="form-control" onChange={handleChange} />
            </div>

            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Role Student</label>
                <input type="number" value={formData.roleId} name="roleId" className="form-control" onChange={handleChange} />
            </div>


            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
                Submit
            </button>
            <button onClick={() => props.onStudentCreated(null)} className="btn secondary btn-lg w-100 mt-3">
                Cancel
            </button>
        </form>
    );
}