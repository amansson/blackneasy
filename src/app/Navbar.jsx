import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);        
    };

    return (
        <div className="nav">
            <NavLink exact to="/" className="logo">Black and Easy</NavLink>
            <nav className={sidebarOpen ? "side" : "top"}>
                <NavLink onClick={toggleSidebar} exact to="/" className="link" activeClassName="link active">Hem</NavLink>
                <NavLink onClick={toggleSidebar} exact to="/animal" className="link" activeClassName="link active">Djur</NavLink>
                <NavLink onClick={toggleSidebar} exact to="/certificate" className="link" activeClassName="link active">MH och HD</NavLink>
                <NavLink onClick={toggleSidebar} exact to="/puppies" className="link" activeClassName="link active">Valpar</NavLink>
                <NavLink onClick={toggleSidebar} exact to="/brood" className="link" activeClassName="link active">Kullar</NavLink>
                <NavLink onClick={toggleSidebar} exact to="/about" className="link" activeClassName="link active">Om Mig</NavLink>
                <NavLink onClick={toggleSidebar} exact to="/gallery" className="link" activeClassName="link active">Fotocollage</NavLink>
                <NavLink onClick={toggleSidebar} exact to="/meetup" className="link" activeClassName="link active">Kennel Träff</NavLink>
            </nav>
            <button onClick={toggleSidebar} className="nav-button"><FaAlignRight /></button>
        </div>
    )
}

export default Navbar;
