import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <header className="sticky top-0 bg-[#0a192f] p-3">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-5xl font-bold text-[#64ffda]">
                    <Link to="/">Toufiq</Link>
                </div>
                <div className="flex space-x-4">
                    <HashLink 
                        className="text-[#64ffda] font-semibold text-lg" 
                        to="/home#home"
                    >
                        Home
                    </HashLink>
                    <HashLink 
                        className="text-[#64ffda] font-semibold text-lg" 
                        to="/home#about"
                    >
                        About
                    </HashLink>
                    <HashLink 
                        className="text-[#64ffda] font-semibold text-lg" 
                        to="/home#projects"
                    >
                        Projects
                    </HashLink>
                    <HashLink 
                        className="text-[#64ffda] font-semibold text-lg" 
                        to="/home#contact"
                    >
                        Contact
                    </HashLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
