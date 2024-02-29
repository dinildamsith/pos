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
            <MobileSideBar/>

             <div className="container-fluid">

                 <div className="row" style={{ ...rowCss, ...mediaQueryStyles }}  id="PageColour">

                     <div className="col-12 mt-5 mt-xxl-0 mt-xl-0 mt-lg-0 mt-sm-0">
                            <h1 className="text-center fw-bold mt-5">Stoke Manage</h1>
                     </div>


                    <div className="row mt-5">

                        <div className="col-12 col-xxl-4 col-xl-5 col-lg-6  col-md-7 col-sm-7">
                            <img src={images.selectItem} className="mt-5 ml-5 mw-100 d-block mx-auto"/>
                        </div>

                        <div className="col-12 col-xxl-3 col-xl-3 col-lg-6  col-md-5 col-sm-5">

                            <form>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Item Id</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder="I001"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Item Name</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder="Lap Top"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Unit Price</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder="400000.00"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2" className="text-black fw-bold">Qty</label>
                                    <input type="text" className="form-control fw-bold" id="formGroupExampleInput2" placeholder="20"/>
                                </div>
                            </form>

                        </div>

                        <div className="col-12 col-xxl-5 col-xl-4 col-lg-12 col-md-12 col-lg-12 text-center mb-5" id="manageItemCol">
                            <h3 className="fw-bold">Last Mange Item </h3>
                            <img src={images.selectItem} className="mx-auto" />
                        </div>

                    </div>

                     <div className="col-12 col-xxl-3 col-xl-4 col-lg-5 lg-mb-5  col-md-6  col-sm-5            mb-5 " id="fileChoseCol">
                         <p className="ml-4">Click on the "Choose File" button to upload Save Item Image:</p>

                         <form action="/action_page.php">
                             <input type="file" id="myFile" name="filename"  className="ml-5"/>

                         </form>
                     </div>

                     <div className="col-12 col-xxl-3 col-xl-3 col-lg-4  col-md-6  col-sm-5 mt-5  sm-ml-5  text-center" id="itemBtnCol">
                         <button type="button" className="btn btn-success">Save</button>
                         <button type="button" className="btn btn-warning">Update</button>
                         <button type="button" className="btn btn-danger">Delete</button>
                     </div>


     {/*////////////////////-----------------------------Save Item Table---------------------------/////////////////////////*/}

                         <div className="col-12 lg-mt-5">
                             <h3 className="text-center mt-3 fw-bold">Save Items</h3>
                         </div>


                         <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-2 ml-5 mt-3">
                             <img src={images.selectItem}/>
                             <h5 className="text-center fw-bold">I001</h5>
                             <h5 className="text-center fw-bold">Lap Top</h5>
                             <h5 className="text-center fw-bold">Rs 40000.00</h5>
                             <h5 className="text-center fw-bold">40</h5>
                         </div>



                 </div>


            </div>
        </div>
    );
}

export default Item