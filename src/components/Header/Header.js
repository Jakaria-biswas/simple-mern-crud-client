import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
                <Link className='nav-items' to="/">Home</Link>
                <Link className='nav-items' to="/addUser">Add User</Link>
                <Link className='nav-items' to="/user">User</Link>
                <Link className='nav-items' to="/updateUser">Update User</Link>
                
        </div>
    );
};

export default Header;