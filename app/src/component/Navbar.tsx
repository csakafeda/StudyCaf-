import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../pictures/logo.jpg"

function Navbar() {
    return (
        <nav className="bg-camel">
            <div className="container mx-auto py-4 flex items-center justify-between">
                <Link className="flex items-center" to="/">
                    <img className="h-8 w-8 mr-2" src={logo} alt="Logo" />
                    <span className="text-white text-2xl font-bold">Study Cafe</span>
                </Link>
                <div className="space-x-16 ml-10 mr-40">
                    <Link className="text-white hover:text-gray-300" to="/menu">Menu</Link>
                    <Link className="text-white hover:text-gray-300" to="/groups">Groups</Link>
                    <Link className="text-white hover:text-gray-300" to="/contact">Contact us</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;