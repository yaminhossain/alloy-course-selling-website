import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <p> This log in page</p>
            <h1>Here is a dummy text for creating a login branch</h1>
            <Link to={'/signUp'}> This is Registration Page</Link>
        </div>
    );
};

export default LogIn;