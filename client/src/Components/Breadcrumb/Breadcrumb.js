import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './style.css'

function Breadcrumb() {
    return (
        <nav>
            <Link to="/">Find a book! </Link><span> / </span>
            <Link to="/mybooks">View my books! </Link>
        </nav>
    )
}

export default Breadcrumb;