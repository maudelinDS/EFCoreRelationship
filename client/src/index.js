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
import LoginWrapper from "./pages/LoginPage";
import { render } from "react-dom";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LoginPage />} />
                    <Route
                        path="/login"
                        element={<LoginWrapper><LoginPage /></LoginWrapper>}
                    />
                    <Route
                        path="/student"
                        element={<LoginWrapper><Student /></LoginWrapper>}
                    />
                    <Route
                        path="/projet"
                        element={<LoginWrapper><Project /></LoginWrapper>}
                    />
                    <Route
                        path="/job"
                        element={<LoginWrapper><JobPage /></LoginWrapper>}
                    />
                    <Route
                        path="/stat"
                        element={<LoginWrapper><StatPage /></LoginWrapper>}
                    />
                    {/* ...other routes */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

render(<App />, document.getElementById("root"));
