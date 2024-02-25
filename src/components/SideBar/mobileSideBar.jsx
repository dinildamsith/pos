
import "bootstrap/dist/css/bootstrap.min.css";
import './mobileNav.css'
import { openNav, closeNav } from '../SideBar/mobliNav';
import React, { useState, useEffect } from 'react';

function MobileSideBar() {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileNavVisible(window.innerWidth <= 770);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div>
            <div id="mobile_navi" className="position-relative" style={{ zIndex: "9999999999999999", display: isMobileNavVisible ? "block" : "none" }}>
                <div id="mySidenav" className="sidenav">
                    <button className="closebtn" onClick={closeNav}>&times;</button>
                    <a href="#">Home</a>
                </div>

                <div id="main">
                    <span style={{ fontSize: '30px', cursor: 'pointer', color: 'black' }} onClick={openNav} className="fw-bold">
                        &#9776; #D Zone
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MobileSideBar;