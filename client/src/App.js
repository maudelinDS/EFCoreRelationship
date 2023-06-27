import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Layout from "./pages/Layout";
import Student from "./pages/StudentPage";
import Project from "./pages/ProjectPage";
import Job from "./pages/JobPage";
import Stat from "./pages/StatPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Cookies from 'js-cookie';

const isLoggedIn = () => {
    const jwt = Cookies.get('jwt');
    return !!jwt;
};

export default function App() {
    const navigate = useNavigate();



    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/projet" element={<Project />} />
            <Route path="/job" element={<Job />} />
            <Route path="/stat" element={<Stat />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}
