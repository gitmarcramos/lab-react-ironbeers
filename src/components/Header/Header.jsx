import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header (props) {

    return (
        <header className="header">
        <Link to="/"><span className="logo">Iron Beers</span></Link>
        <Link to="/"><nav className="nav">Menu</nav></Link>
        </header>
    )
}