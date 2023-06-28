import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from "./pages/Layout";
import Student from "./pages/StudentPage";
import Projet from "./pages/ProjectPage";
import Job from "./pages/JobPage";
import Competence from "./pages/CompetencePage";
import Stat from "./pages/StatPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Teacher from "./pages/TeacherPage";
import Domaine from "./pages/DomainePage";
import Module from "./pages/ModulePage";
import Role from "./pages/RolePage";
import Cookies from 'js-cookie';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const lastVisitedPage = localStorage.getItem('lastVisitedPage');
    const initialRoute = lastVisitedPage || '/home';
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        setIsInitialized(true);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        console.log(isLoggedIn);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        Cookies.remove('jwt');
        console.log(isLoggedIn);
        localStorage.removeItem('isLoggedIn');
        Cookies.remove('isLoggedIn');
        localStorage.setItem('isLoggedIn', 'false');

    };

    useEffect(() => {
        const isLoggedInCookie = Cookies.get('isLoggedIn');

    //    const isLoggedInStorage = localStorage.getItem('isLoggedIn');
        if (isLoggedInCookie === 'true') {
            setIsLoggedIn(true);
        }
    }, []);


    return (
        <Routes>
            {isLoggedIn ? (
                <>
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        path="/student"
                        element={<Student />}
                    />
                    <Route
                        path="/teacher"
                        element={<Teacher />}
                    />
                    <Route
                        path="/projet"
                        element={<Projet />}
                    />
                    <Route
                        path="/job"
                        element={<Job />}
                    />
                    <Route
                        path="/competence"
                        element={<Competence />}
                    />
                    <Route
                        path="/domaine"
                        element={<Domaine />}
                    />
                    <Route
                        path="/module"
                        element={<Module />}
                    />
                    <Route
                        path="/role"
                        element={<Role />}
                    />
                    <Route
                        path="/stat"
                        element={<Stat />}
                    />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />

                </>
            ) : (
                <Route path="/*" element={<Navigate to="/login" replace />} />
            )}
        </Routes>
    );
}
