import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="nav">
            <label className="logo">Black and Easy</label>
            <nav className="links">
                <NavLink exact to="/" className="link" activeClassName="link active">Home</NavLink>
                <NavLink exact to="/animal" className="link" activeClassName="link active">Djur</NavLink>
                <NavLink exact to="/services" className="link" activeClassName="link active">Services</NavLink>
                <NavLink exact to="/contact" className="link" activeClassName="link active">Contact</NavLink>
                <NavLink exact to="/feedback" className="link" activeClassName="link active">Feedback</NavLink>
            </nav>
            <a href="#" className="cta"><button>Contact</button></a>
        </div>
    )
}

export default Navbar;
