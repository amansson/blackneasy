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
            <NavLink exact to="/blackneasy" className="logo">Black and Easy</NavLink>
            <nav className={sidebarOpen ? "side" : "top"}>
                <NavLink onClick={sidebarOpen ? toggleSidebar : ""} exact to="/blackneasy" className="link" activeClassName="link active">Hem</NavLink>
                <NavLink onClick={sidebarOpen ? toggleSidebar : ""} exact to="/blackneasy/animal" className="link" activeClassName="link active">Djur</NavLink>
                <NavLink onClick={sidebarOpen ? toggleSidebar : ""} exact to="/blackneasy/certificate" className="link" activeClassName="link active">MH och HD</NavLink>
                <NavLink onClick={sidebarOpen ? toggleSidebar : ""} exact to="/blackneasy/puppies" className="link" activeClassName="link active">Valpar</NavLink>
                <NavLink onClick={sidebarOpen ? toggleSidebar : ""} exact to="/blackneasy/brood" className="link" activeClassName="link active">Kullar</NavLink>
                <NavLink onClick={sidebarOpen ? toggleSidebar : ""} exact to="/blackneasy/about" className="link" activeClassName="link active">Om Mig</NavLink>
                <NavLink onClick={sidebarOpen ? toggleSidebar : ""} exact to="/blackneasy/gallery" className="link" activeClassName="link active">Fotocollage</NavLink>
                <NavLink onClick={sidebarOpen ? toggleSidebar : ""} exact to="/blackneasy/meetup" className="link" activeClassName="link active">Kennel Träff</NavLink>
            </nav>
            <button onClick={toggleSidebar} className="nav-button"><FaAlignRight /></button>
        </div>
    )
}

export default Navbar;
