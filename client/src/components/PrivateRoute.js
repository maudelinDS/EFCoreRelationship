import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const isLoggedIn = !!Cookies.get('jwt'); // Check if the user is logged in

    return (
        <Route
            {...rest}
            element={isLoggedIn ? <Element /> : <Navigate to="/login" replace />}
        />
    );
};

export default PrivateRoute;
