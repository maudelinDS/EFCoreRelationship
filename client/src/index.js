import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from "./pages/Layout";
import Student from "./pages/StudentPage";
import Project from "./pages/ProjectPage";
import Job from "./pages/JobPage";
import Stat from "./pages/StatPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import { render } from "react-dom";
import Cookies from 'js-cookie';

const PrivateRouteWrapper = ({ element: Element, isLoggedIn, ...rest }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { replace: true });
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null;
    }

    return <Element {...rest} />;
};

const App = () => {
    const jwt = Cookies.get('jwt');
    const isLoggedIn = !!jwt; // Check if the user is logged in

    console.log(isLoggedIn);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/home"
                    element={<PrivateRouteWrapper element={Home} isLoggedIn={isLoggedIn} />}
                />
                <Route
                    path="/student"
                    element={<PrivateRouteWrapper element={Student} isLoggedIn={isLoggedIn} />}
                />
                <Route
                    path="/projet"
                    element={<PrivateRouteWrapper element={Project} isLoggedIn={isLoggedIn} />}
                />
                <Route
                    path="/job"
                    element={<PrivateRouteWrapper element={Job} isLoggedIn={isLoggedIn} />}
                />
                <Route
                    path="/stat"
                    element={<PrivateRouteWrapper element={Stat} isLoggedIn={isLoggedIn} />}
                />
            </Routes>
        </Router>
    );
};

render(<App />, document.getElementById("root"));