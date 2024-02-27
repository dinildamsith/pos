
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import SideBar from "../SideBar/SideBar";
import MobileSideBar from "../SideBar/mobileSideBar";
import DateAndTime from "../DateAndTime/DateAndTime";





function Home () {

    const [showSideBar, setShowSideBar] = useState(false);

    const home = {
        position:"absolute",
        left:"282px",
        width: "calc(100% - 270px)",
    };

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


    const headSetImageStyle = {
        // width: "calc(600px - 10px)"
        width: "550px"

}
    const headSetImageColStyle = {
        marginTop: "-187px"
    }

    const dataAndTimeStyles = {
            width:"254px",
           height:"80px",

    }

    const dataAndTimeRow = {
        height:"72px"
    }


    const isLargeScreen = window.innerWidth > 769;

    return(
        <div>
            {showSideBar && <SideBar />}
            <MobileSideBar/>

            <div className="container-fluid">

                <div className="row" style={{ ...home, ...mediaQueryStyles }}>

                    <div className="col-12 mt-3 col-sm-7 ">
                        <h1 className="mb-5 fw-bold fs-5" >Good Morning...</h1>
                    </div>

                    <div className="col-12 col-sm-5" >
                        {/*<h1 className="fw-bold">#D Zone</h1>*/}


                        {isLargeScreen && (
                            <>
                                <span style={{ color: "#4EDCFD", fontSize: "3em" }} className="fw-bold">#D </span>
                                {' '}
                                <span style={{ color: "#54615E", fontSize: "3em" }} className="fw-bold">Zone</span>
                            </>
                        )}
                    </div>

                    <div className="col-12 mb-5">
                        <h1 className="mb-5 fw-bold fs-5">Welcome To Dz <br/> Management <br/> System</h1>
                    </div>

                    <div className="col-12 mb-sm-5 col-md-10" style={{...headSetImageColStyle}}>
                        <img src={images.headSetLogo} className="mx-auto d-block img-fluid mt-4" style={headSetImageStyle} alt="Headset" />
                    </div>



                    <div className="col-12  col-sm-6 col-md-6"></div>

                    <div className="position-relative col-12 mt-1 d-flex justify-content-center col-sm-6 mb-sm-5 col-md-6"  style={dataAndTimeRow}>
                        <div className="bg-black rounded-4 position-relative" style={dataAndTimeStyles}>

                            <DateAndTime />
                        </div>
                    </div>

                </div>




            </div>
        </div>
    );
}

export default Home;