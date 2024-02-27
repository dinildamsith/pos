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

                 <div className="row" style={{ ...rowCss, ...mediaQueryStyles }}  id="PageColour">

                     <div className="col-12 mt-4">
                            <h1 className="text-center fw-bold">Stoke Manage</h1>
                     </div>


                    <div className="row">

                        <div className="col-12">
                            <img src={images.selectItem} className="mt-4 ml-5"/>
                        </div>

                        <div className="col-12">

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

                        <div className="col-12">
                            <h3>Last Mange Item</h3>
                            <img src={images.selectItem}/>
                        </div>
                    </div>

                     <div className="col-12">
                         <p>Click on the "Choose File" button to upload Save Item Image:</p>

                         <form action="/action_page.php">
                             <input type="file" id="myFile" name="filename" />

                         </form>
                     </div>









                 </div>


            </div>
        </div>
    );
}

export default Item