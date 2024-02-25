
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import SideBar from "../SideBar/SideBar";




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

    const rowCoulr = {
        backgroundColor:"red",
    }


    const headSetImageStyle = {
        // width: "calc(600px - 10px)"
        width: "550px"

}
    const headSetImageColStyle = {
        marginTop: "-187px"
    }

    const dataAndTimeStyles = {
            height:"317px"
    }

    return(
        <div>
            {showSideBar && <SideBar />}

            <div className="container-fluid">

                <div className="row" style={{ ...home, ...mediaQueryStyles }}>

                    <div className="col-10">
                        <h1 className="mt-5 fw-bold">Good Morning...</h1>
                    </div>

                    <div className="col-2">
                        <h1 className="fw-bold">#D Zone</h1>
                    </div>

                    <div className="col-12">
                        <h1 className="mt-5 fw-bold fs-2">Welcome To Dz <br/> Management <br/> System</h1>
                    </div>

                    <div className="col-12" style={{...headSetImageColStyle,...dataAndTimeStyles}}>
                        <img src={images.headSetLogo} className="rounded mx-auto d-block" style={headSetImageStyle} alt="Headset" />
                    </div>

                    {/*<div className="col-8"></div>*/}

                    {/*<div className="col-4" style={dataAndTimeStyles}>*/}
                    {/*    <div className="bg-black">*/}

                    {/*        <h1 className="fw-bold text-white text-center">2022/02/24</h1>*/}
                    {/*        <h1 className="fw-bold text-white text-center">00 : 00</h1>*/}

                    {/*    </div>*/}

                    {/*</div>*/}

                </div>




            </div>
        </div>
    );
}

export default Home;