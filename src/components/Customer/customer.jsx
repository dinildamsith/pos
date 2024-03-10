import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import SideBar from "../SideBar/SideBar";
import MobileSideBar from "../SideBar/mobileSideBar";
import '../Item/Item.css'
import './Customers'




function Customer(){

    ////////////////////////////////////////////////////////////////////////////////////////////////

    const [showSideBar, setShowSideBar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Update showSideBar state based on screen width
            setShowSideBar(window.innerWidth >= 770); // Adjust the breakpoint as needed

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


    const customer = {
        position:"absolute",
        left:"282px",
        width: "calc(100% - 270px)",
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
            {showSideBar && <SideBar />}
            <MobileSideBar/>

            <div className="container-fluid">

                <div className="row" style={{ ...customer, ...mediaQueryStyles }} id="PageColour">

                    <div className="col-12 mt-5 mt-sm-5">
                        <h1 className="text-center fw-bold mt-sm-5 mt-5 mt-md-1">Customer Manage</h1>
                    </div>


                    <div className="row mt-5">

                        <div className="col-12 col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-7 mt-3">
                            <img src={images.customerLogo2} className="mt-5 ml-5 mt-sm-2 mw-100 d-block mx-auto" style={{width:"200px"}}/>
                        </div>


                        <div className="col-12 col-xxl-8 col-xl-8 col-lg-7 col-md-5 col-sm-5">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="customerIdTxt" className="text-black fw-bold">Customer Id</label>
                                    <input type="text" className="form-control fw-bold" id="customerIdTxt" placeholder="C001"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="customerNameTxt" className="text-black fw-bold">Customer Name</label>
                                    <input type="text" className="form-control fw-bold" id="customerNameTxt" placeholder="Dinil Damsith"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="customerMailTxt" className="text-black fw-bold">Mail</label>
                                    <input type="text" className="form-control fw-bold" id="customerMailTxt" placeholder="dinil@gmail.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="customerAddresTxt" className="text-black fw-bold">Address</label>
                                    <input type="text" className="form-control fw-bold" id="customerAddressTxt" placeholder="Avissawella"/>
                                </div>
                            </form>
                        </div>


                        <div className="col-12 col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-7"></div>

                        <div className="col-12 col-xxl-8 col-xl-8 col-lg-7 col-md-5 col-sm-5 mt-sm-0 text-center">
                            <button type="button" className="btn btn-success fw-bold col-12" id="customerSaveBtn">Save</button>
                            <button type="button" className="btn btn-warning fw-bold col-6 " id="customerUpdateBtn">Update</button>
                            <button type="button" className="btn btn-danger fw-bold col-6" id="customerDeleteBtn">Delete</button>
                        </div>




                        <div className="col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 bg-black rounded-5 ml-xxl-2 ml-xl-2 ml-lg-2 ml-md-2 ml-sm-2 ml-2 mt-xxl-5">
                            <div className="col-12 mt-3">
                                <h1 className="text-center fw-bold mt-3 text-white">Save Customers</h1>
                            </div>

                            <table className="table mt-3 mt-xxl-4">
                                <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Address</th>
                                </tr>
                                </thead>
                                <tbody id="customer_Table"></tbody>
                            </table>
                        </div>


                    </div>

                </div>



            </div>

        </div>
    );
}

export default Customer;