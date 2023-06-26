import React from 'react';
import '@fontsource/roboto/300.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from "./pages/Layout";
import Student from "./pages/StudentPage";
import Project from "./pages/ProjectPage";
import JobPage from "./pages/JobPage";
import StatPage from "./pages/StatPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { render } from "react-dom";

import Cookies from 'js-cookie';

export default function App() {
    const jwt = Cookies.get('jwt');
    const isLoggedIn = !!jwt; // Check if the user is logged in

    console.log(isLoggedIn)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {!isLoggedIn ? (
                        <Route index element={<Navigate to="/login" />} />
                    ) : null}
                    <Route path="login" element={<LoginPage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="student" element={<Student />} />
                    <Route path="projet" element={<Project />} />
                    <Route path="job" element={<JobPage />} />
                    <Route path="stat" element={<StatPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

render(<App />, document.getElementById("root"));
