import React, {useEffect, useState} from 'react';

import Constants from "./utilities/Constants"
import JobUpdateForm from "./components/JobUpdateForm";
import JobCreateForm from "./components/JobCreateForm";
import Box from "@mui/material/Box";
import NavBar from "./appBar";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import UserIcon from "./images/user-solid.svg";
import StudentCreateForm from "./components/StudentCreateForm";
import StudentUpdateForm from "./components/StudentUpdateForm";


export default function AppCrudJob() {
    const [jobs, setJobs] = useState([]);
    const [showingCreateNewJobForm, setShowingCreateNewJobForm] = useState(false);
    const [jobCurrentlyBeingUpdated, setJobCurrentlyBeingUpdated] = useState(null);

    useEffect(() => {
        getJobs();
    }, []);

    function getJobs() {
        const url = Constants.API_URL_GET_ALL_JOBS;

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(jobsFromServer => {
                console.log(jobsFromServer);

                setJobs(jobsFromServer);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }


    function deleteJob(jobId) {
        const url = `${Constants.API_URL_DELETE_JOB_BY_ID}/${jobId}`;

        fetch(url, {
            method: 'DELETE',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(jobsFromServer => {
                console.log(jobsFromServer);

                onJobDeleted(jobsFromServer);

            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }

    const containerStyles = {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        width: "100%",
        overflowX: "hidden",
    }

    function renderJobsTable() {
        return (
            <Box sx={containerStyles}>

                <NavBar showSection={false}/>


                <TableContainer style={{width: '100%', marginTop: '200px', overflow: 'hidden'}}>
                    <Table style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "500px",
                        width: '100%',
                        alignItems: 'center',
                        tableLayout: 'fixed',
                    }}>
                        <TableHead style={{width: '100%'}}>
                            <TableRow style={{
                                display: 'flex',
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '30px'
                            }}>
                                <TableCell style={{textAlign: 'center', height: '50px'}}>img</TableCell>

                                <TableCell style={{textAlign: 'center', height: '80px'}}>Id</TableCell>
                                <TableCell style={{textAlign: 'center', height: '80px'}}>Name</TableCell>
                                <TableCell style={{textAlign: 'center', height: '80px'}}>Description</TableCell>
                                <TableCell style={{textAlign: 'center', height: '80px'}}></TableCell>
                                <TableCell style={{textAlign: 'center', height: '80px'}}></TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody style={{overflow: "scroll", height: "600px", width: '100%'}}>
                            {jobs.map((job) => (
                                <TableRow key={job.jobId} style={{
                                    display: 'flex',
                                    textAlign: 'center',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <TableCell>
                                        <img src={UserIcon} alt="User Icon" width="24" height="24"/>
                                    </TableCell>
                                    <TableCell style={{width: '50px', height: '50px'}}>{job.jobId}</TableCell>
                                    <TableCell style={{width: '50px', height: '50px'}}>{job.jobName}
                                    </TableCell>
                                    <TableCell style={{width: '50px', height: '50px'}}>{job.jobDescription}</TableCell>

                                    <TableCell style={{height: '50px', display: 'flex', gap: '10px'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setJobCurrentlyBeingUpdated(job)}
                                            style={{background: '#141E66', padding: '3px', width: '50px'}}
                                            size='small'
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        `Are you sure you want to delete the student "${job.jobName}"?`
                                                    )
                                                )
                                                    deleteJob(job.jobId);
                                            }}
                                            style={{background: 'red'}}

                                            size='small'

                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowingCreateNewJobForm(true)}
                    style={{marginBottom: '10px', marginTop: '20px', background: '#8FC62E'}}
                >
                    Create new users
                </Button>
            </Box>
        )
            ;
    }


    function onJobCreated(createdjob) {
        setShowingCreateNewJobForm(false);
        if (createdjob === null) {
            return;
        }
        alert(`Job : "${createdjob.jobName}",has been created, will show up in the table below`)
        getJobs();
    }

    function onJobUpdated(updateJob) {
        setJobCurrentlyBeingUpdated(null);
        if (updateJob === null) {
            return;
        }
        let jobsCopy = [...jobs];

        // eslint-disable-next-line array-callback-return
        const index = jobsCopy.findIndex((jobsCopyJob, currentIndex) => {

            if (jobsCopyJob.jobId === updateJob.jobId) {
                return true;
            }
        });
        if (index !== -1) {
            jobsCopy[index] = updateJob;
        }
        setJobs(jobsCopy);
        alert(`Job successfully updated "${updateJob.jobName}"`);
    }

    function onJobDeleted(deleteJobJobId) {

        let jobsCopy = [...jobs];

        // eslint-disable-next-line array-callback-return
        const index = jobsCopy.findIndex((jobsCopyJob, currentIndex) => {

            if (jobsCopyJob.jobId === deleteJobJobId) {
                return true;
            }
        });
        if (index !== -1) {
            jobsCopy.splice(index, 1);
        }
        setJobs(jobsCopy);
        alert('Job successfully deleted');
    }

    return (
        <div className="container" style={{maxWidth: '100%', margin: '0'}}>
            <div className="row min-vh-100">
                <div className="col d-flex flex flex-column justify-content-center ">
                    {!showingCreateNewJobForm && !jobCurrentlyBeingUpdated && (
                        <div>
                            {jobs.length > 0 && renderJobsTable()}
                        </div>
                    )}
                    {showingCreateNewJobForm && (
                        <JobCreateForm onJobCreated={onJobCreated}/>
                    )}
                    {jobCurrentlyBeingUpdated && (
                        <JobUpdateForm job={jobCurrentlyBeingUpdated} onJobUpdated={onJobUpdated}/>
                    )}
                </div>
            </div>
        </div>
    );
}

