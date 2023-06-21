import AppCrudProjet from "../AppCrudProjet";
import React from "react";
import NavBar from "../appBar";

const Project = () => {

    return  <div>

        <NavBar showSection={false}/>

        <AppCrudProjet/>
    </div>

};

export default Project;