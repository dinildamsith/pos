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

                        <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-4 ">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Order Id</label>
                                    <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Customer Id</label>
                                    <select className="form-select" aria-label="Default select example" id="formGroupExampleInput2" defaultValue="defaultOption">
                                        <option value="defaultOption">Open this select menu</option>
                                    </select>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Customer Name</label>
                                    <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Order Date</label>
                                    <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-xxl-5 col-xl-5 col-lg-4 col-md-4 ">
                            <img src={images.selectItem} className="mt-5 mw-100 d-block mx-auto"/>
                        </div>

                        <div className="col-12 col-xxl-4 col-xl-4 col-lg-5 col-md-4">

                            <div>

                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Item Id</label>
                                    <select className="form-select" aria-label="Default select example" id="formGroupExampleInput2" defaultValue="defaultOption">
                                        <option value="defaultOption">Open this select menu</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Description</label>
                                    <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Qty</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder=""/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Unit Price</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder=""/>
                                </div>

                                <button type="button" className="btn btn-success col-12">Add To Cart </button>
                            </div>

                        </div>



                    </div>



                    <div className="col-12 col-xxl-8 col-xl-8 col-lg-7 col-md-7 mt-4">
                        <h1 className="fw-bold text-center">Cart</h1>


                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody id="customer_Table">
                            </tbody>
                        </table>

                    </div>



                    <div className="col-12 col-xxl-2 col-xl-3 col-lg-4 col-md-4 mt-5">

                        <div className="mt-5">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Total</label>
                                <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Cash</label>
                                <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder=""/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Balance</label>
                                <input type="text" className="form-control fw-bold bg-white" id="formGroupExampleInput2" placeholder="" disabled/>
                            </div>

                            <button type="button" className="btn btn-success col-12">Add To Cart </button>
                        </div>


                    </div>




                </div>


            </div>


        </div>
    );
}

export default Order