import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <p> This log in page</p>
            <Link to={'/signUp'}> This is Registration Page</Link>
        </div>
    );
};

export default LogIn;