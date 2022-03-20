import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div className = 'navbar'>
            <Link className = 'link' to = '/'>Login/Signup</Link>
            <Link className = 'link' to = '/my_profile'>My Profile</Link>
            <Link className = 'link' to = '/public_issues'>Public Issues</Link>
        </div>
    )
};

export default Navbar;