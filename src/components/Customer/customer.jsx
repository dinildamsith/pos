import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import SideBar from "../SideBar/SideBar";
import MobileSideBar from "../SideBar/mobileSideBar";
import '../Item/Item.css'


function Customer(){

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

                    <div className="col-12 mt-4">
                        <h1 className="text-center fw-bold">Customer Manage</h1>
                    </div>


                    <div className="row mt-5">

                        <div className="col-12 col-xxl-4">
                            <img src={images.customerLogo2} className="mt-5 ml-5" style={{width:"200px"}}/>
                        </div>


                        <div className="col-12 col-xxl-8">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Customer Id</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder="C001"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Customer Name</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder="Dinil Damsith"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Mail</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder="dinil@gmail.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Address</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder="Avissawella"/>
                                </div>
                            </form>
                        </div>


                        <div className="col-12 col-xxl-4"></div>

                        <div className="col-12 col-xxl-8">
                            <button type="button" className="btn btn-success">Save</button>
                            <button type="button" className="btn btn-warning">Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>


                        <div className="col-12 mt-5">
                            <h1 className="text-center fw-bold">Save Customers</h1>
                        </div>

                        <div className="col-12 col-xxl-12">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Customer Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Mail</th>
                                    <th scope="col">Address</th>
                                </tr>
                                </thead>
                                <tbody id="customer_Table">

                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>



            </div>

        </div>
    );
}

export default Customer;