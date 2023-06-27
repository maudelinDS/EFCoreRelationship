import React, {useEffect, useState} from 'react';
import { Routes, Route, Navigate, useNavigate, BrowserRouter as Router } from 'react-router-dom';
import Layout from "./pages/Layout";
import Student from "./pages/StudentPage";
import Project from "./pages/ProjectPage";
import Job from "./pages/JobPage";
import Stat from "./pages/StatPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Teacher from "./pages/TeacherPage";
import Cookies from 'js-cookie';


export default function App() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        Cookies.remove('jwt');
    };
    console.log(isLoggedIn)

    useEffect(() => {
        const jwt = Cookies.get('jwt');
        if (jwt) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    isLoggedIn ? <Navigate to="/home" replace /> : <Login onLogin={handleLogin} />
                }
            />
            <Route
                path="/home"
                element={isLoggedIn ? <Home /> : <Navigate to="/home" replace />}
            />
            <Route
                path="/student"
                element={isLoggedIn ? <Student /> : <Navigate to="/login" replace />}
            />
            <Route
                path="/teacher"
                element={isLoggedIn ? <Teacher /> : <Navigate to="/login" replace />}
            />
            <Route
                path="/projet"
                element={isLoggedIn ? <Project /> : <Navigate to="/login" replace />}
            />
            <Route
                path="/job"
                element={isLoggedIn ? <Job /> : <Navigate to="/login" replace />}
            />
            <Route
                path="/stat"
                element={isLoggedIn ? <Stat /> : <Navigate to="/login" replace />}
            />
            <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}