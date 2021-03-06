import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider.js';

function Navbar(){
    
    const { token, logout } = useContext(UserContext);

    return (
        <div className = 'navbar'>
            <Link className = 'link' to = '/'>Login/Signup</Link>
            { token && <Link className = 'link' to = '/profile'>Profile</Link> }
            <Link className = 'link' to = '/publicIssues'>Public Issues</Link>
            <button className = 'logout' onClick = { logout }>Logout</button>
        </div>
    )
};

export default Navbar;