import React, { useState, useEffect } from 'react';
import './navbar.css';

export const Navbar = () => {

    const [show, handleshow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true)
            } else handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);


    return (
        <>
            <nav className={`nav ${show && "nav_black"}`}>
                <div className="nav_logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                        alt="Netflix Logo"
                    />
                </div>
                <div className="nav_avatar">
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                        alt="Netflix Profile Logo"
                    />
                </div>
            </nav>
        </>
    )
}
