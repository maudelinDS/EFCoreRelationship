import React, {useState} from 'react';
import Constants from "../utilities/Constants";
import bcrypt from "bcryptjs";

export default function StudentUpdateForm(props) {

    const initialFormData = Object.freeze({
        userFirstName: props.student.userFirstName || '',
        userLastName: props.student.userLastName || '',
        userEmail: props.student.userEmail || '',
        userPassword: props.student.userPassword || '',
        userPhone: props.student.userPhone || '',
        jobId: props.student.jobId || '',
        roleId: props.student.roleId || '',
    });
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async(e) => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(formData.userPassword, saltRounds);

        e.preventDefault();
        const studentToUpdate = {
            userId: props.student.userId,
            userFirstName: formData.userFirstName,
            userLastName: formData.userLastName,
            userEmail: formData.email,
            userPassword: formData.userPassword,
            userPhone: parseInt(formData.userPhone),
            jobId: parseInt(formData.jobId),
            roleId: parseInt(formData.roleId),

        };
        const url = Constants.API_URL_UPDATE_STUDENT;
        console.log(studentToUpdate)
        fetch(`${url}/${props.student.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentToUpdate)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error: ' + response.status);
                }
                return response.json();
            })
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch(error => {
                console.log(error);
                alert(error);
            });





        props.onStudentUpdated(studentToUpdate);

    };
    return (
        <form action="" className="w-100 px-5">
            <h1 className="mt-5">Update Student "{props.student.userFirstName}".</h1>
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
                <label htmlFor="" className="h3 form-label">Job ID</label>
                <input type="number" value={formData.jobId} name="jobId" className="form-control"
                       onChange={handleChange}/>
            </div>
            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Role ID</label>
                <input type="number" value={formData.roleId} name="roleId" className="form-control"
                       onChange={handleChange}/>
            </div>
            <div className="mt-4">
                <label htmlFor="" className="h3 form-label">Student Password</label>
                <input type="password" value={formData.userPassword} name="userPassword" className="form-control"
                       onChange={handleChange}/>
            </div>


            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
                Submit
            </button>
            <button onClick={() => props.onStudentUpdated(null)} className="btn secondary btn-lg w-100 mt-3">
                Cancel
            </button>
        </form>
    );
}