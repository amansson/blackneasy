import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        console.log(sidebarOpen);
    };

    return (
        <div className="nav">
            <NavLink exact to="/" className="logo">Black and Easy</NavLink>
            <nav className={sidebarOpen ? "side" : "top"}>
                <NavLink exact to="/" className="link" activeClassName="link active">Hem</NavLink>
                <NavLink exact to="/animal" className="link" activeClassName="link active">Djur</NavLink>
                <NavLink exact to="/certificate" className="link" activeClassName="link active">MH och HD</NavLink>
                <NavLink exact to="/puppies" className="link" activeClassName="link active">Valpar</NavLink>
                <NavLink exact to="/brood" className="link" activeClassName="link active">Kullar</NavLink>
                <NavLink exact to="/about" className="link" activeClassName="link active">Om Mig</NavLink>
                <NavLink exact to="/gallery" className="link" activeClassName="link active">Fotocollage</NavLink>
                <NavLink exact to="/kennel" className="link" activeClassName="link active">Kennel Träff</NavLink>
            </nav>
            <button onClick={toggleSidebar} className="nav-button"><FaAlignRight /></button>
        </div>
    )
}

export default Navbar;
