import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import SideBar from "../SideBar/SideBar";
import MobileSideBar from "../SideBar/mobileSideBar";
import '../Item/Item.css'
import './orderManage.css'


function OrderManage(){


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

                    <div className="col-12 mt-5 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0   ">
                        <h1 className="text-center fw-bold mt-5 ">Order Manage</h1>
                    </div>

                    <div className="col-12 col-xxl-6 col-xl-5 col-lg-4 col-md-5 col-sm-5 mt-3">

                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Order Id</label>
                                <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                            </div>
                             <div className="form-group">
                                 <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Customer Id</label>
                                 <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                            </div>
                           <div className="form-group">
                                <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Date</label>
                                <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                            </div>

                           <button type="button" className="btn btn-danger col-12">Delete </button>
                    </div>


                    <div className="col-12 col-xxl-6 col-xl-7 col-lg-8 col-md-7 col-sm-7 mt-5 bg-black rounded-5">
                        <h1 >Order Details Table</h1>
                        <table className="table mt-2 ">
                            <thead >
                            <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Customer Id</th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody id="orderDetails">
                            </tbody>
                        </table>
                    </div>


                    <div className="col-12" id="div"></div>

                </div>

            </div>


        </div>

    );
}

export default OrderManage