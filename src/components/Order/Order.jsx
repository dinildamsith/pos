import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import SideBar from "../SideBar/SideBar";
import MobileSideBar from "../SideBar/mobileSideBar";


function Order(){


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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return(
        <div>
            {showSideBar && <SideBar />}
            <MobileSideBar/>

            <div className="container-fluid">

                <div className="row" style={{ ...rowCss, ...mediaQueryStyles }}  id="PageColour">

                    <div className="col-12 mt-5 mt-xxl-0 mt-xl-0 mt-lg-0 mt-sm-0">
                        <h1 className="text-center fw-bold mt-5">Order</h1>
                    </div>


                    <div className="row">

                        <div className="col-12">
                            <h2>Order Id</h2>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>

                            </select>
                            <h2>Order Id</h2>
                        </div>


                    </div>

                </div>


            </div>


        </div>
    );
}

export default Order