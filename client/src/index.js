import React from 'react';
import '@fontsource/roboto/300.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/HomePage";
import Student from "./pages/StudentPage";
import Project from "./pages/ProjectPage";
import JobPage from "./pages/JobPage";
import StatPage from "./pages/StatPage";
import LoginPage from "./pages/LoginPage";
import { render } from "react-dom";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="student" element={<Student />} />
                    <Route path="projet" element={<Project />} />
                    <Route path="job" element={<JobPage />} />
                    <Route path="stat" element={<StatPage />} />
{/*
                    <Route path="Home" element={<Home />} />
*/}

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

render(<App />, document.getElementById("root"));
