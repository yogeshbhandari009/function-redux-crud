import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to='/'>Form</Link></li>
                <li><Link to='/table'>Table</Link></li>
            </ul>
        </div>
    )
}

export default Navbar