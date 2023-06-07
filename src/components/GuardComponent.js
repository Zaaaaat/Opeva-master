import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import { auth } from '../firebase.config.js';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = !!auth.currentUser;

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Navigate to="/connexion" />
            }
        />
    );
};

export default PrivateRoute;
