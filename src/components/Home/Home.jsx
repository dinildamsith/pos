
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import SideBar from "../SideBar/SideBar";




function Home () {

    const [showSideBar, setShowSideBar] = useState(false);

    const home = {
        position:"absolute",
        backgroundColor:"red",
        left:"282px",
        width: "calc(100% - 270px)",



    };

    useEffect(() => {
        const handleResize = () => {
            // Update showSideBar state based on screen width
            setShowSideBar(window.innerWidth > 768); // Adjust the breakpoint as needed

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

    //
    // const mediaQueryStyles = {
    //     backgroundColor: "yellow",
    //     left: "2px",
    //     width:"101%"
    // };

    // const mediaQuery = window.matchMedia("(max-width: 756px)");
    // const mediaQueryStyles = mediaQuery.matches
    //     ? { backgroundColor: "yellow", left: "2px", width: "101%" }
    //     : {};

    const [mediaQueryStyles, setMediaQueryStyles] = useState({});

    useEffect(() => {
        const handleResize = () => {
            const newMediaQuery = window.matchMedia("(max-width: 770px)");
            setMediaQueryStyles(newMediaQuery.matches ? { backgroundColor: "yellow", left: "", width: "100%" } : {});
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <div>
            {showSideBar && <SideBar />}

            <div className="container-fluid">

                <div className="row" style={{ ...home, ...mediaQueryStyles }}>
                    <div className="col-7">
                        <h1 className="mt-5 fw-bold">Good Morning...</h1>
                    </div>

                    <div className="col-5">
                        <h1>#D Zone</h1>
                    </div>

                    <div className="col-12">
                        <h1 className="mt-5 fw-bold fs-2">Welcome To Dz <br/> Management <br/> System</h1>
                    </div>



                </div>




            </div>
        </div>
    );
}

export default Home;