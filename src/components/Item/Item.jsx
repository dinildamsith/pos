import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import SideBar from "../SideBar/SideBar";
import MobileSideBar from "../SideBar/mobileSideBar";
import './Item.css'

function Item() {

    ////////////////////////////////////////////////////////////////////////////////////////////////

    const [showSideBar, setShowSideBar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Update showSideBar state based on screen width
            setShowSideBar(window.innerWidth >=770); // Adjust the breakpoint as needed

        };

        // Initial check on mount
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    const [mediaQueryStyles, setMediaQueryStyles] = useState({});

    useEffect(() => {
        const handleResize = () => {
            const newMediaQuery = window.matchMedia("(max-width: 770px)");
            setMediaQueryStyles(newMediaQuery.matches ? {  left: "", width: "100%" } : {});
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const rowCss = {
        position:"absolute",
        left:"282px",
        width: "calc(100% - 270px)",
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            {showSideBar && <SideBar />}

             <div className="container-fluid">

                 <div className="row" style={{ ...rowCss, ...mediaQueryStyles }}>

                     <div className="col">
                            <h1>Hi</h1>
                     </div>

                 </div>

            </div>
        </div>
    );
}

export default Item