import React from 'react';
import '@fontsource/roboto/300.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from "./pages/Layout";
import Student from "./pages/StudentPage";
import Project from "./pages/ProjectPage";
import Job from "./pages/JobPage";
import Stat from "./pages/StatPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import { render } from "react-dom";
import PrivateRoute from './components/PrivateRoute';

import Cookies from 'js-cookie';

export default function App() {
    const jwt = Cookies.get('jwt');
    const isLoggedIn = !!jwt; // Check if the user is logged in

    console.log(isLoggedIn)
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={isLoggedIn ? <PrivateRoute /> : <Navigate to="/login" replace />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/projet" element={<Project />} />
                    <Route path="/job" element={<Job />} />
                    <Route path="/stat" element={<Stat />} />
                </Route>
            </Routes>
        </Router>
    );
};
render(<App />, document.getElementById("root"));


/*
<Route path="/login" element={<Login />} />
{isLoggedIn ? (
    <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/projet" element={<Project />} />
        <Route path="/job" element={<Job />} />
        <Route path="/stat" element={<Stat />} />
    </Route>
) : (
    <Navigate to="/login" replace />
)}*/
