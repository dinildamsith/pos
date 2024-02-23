import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";


function SideBar(){
    const sideBar = {
        height: "100%",
        width: "270px"

    };

    const dzLogo = {
        left: "-21px"
    }

    const imageStyle ={
        width: "63px",
        height: "58px"
    }

    const btnGroupRow ={

        width: "270px",
        position: "absolute",
        top: "166px",

    }

    const btnStyle ={
        color: "#54615E",
        fontSize: "21px",
        fontWeight: "bold",
        width: "176px",
        height: "77px",

    }



    return(
        <div className="container-fluid">

           <div className="row bg-black position-absolute" style={sideBar}>
               <div className="col">
                   <img src={images.dzLogo} className="mx-auto d-block img-fluid position-relative "  style={dzLogo}/>
               </div>

            </div>


            <div className="row" style={btnGroupRow} >

                <div className="col-12  bg-black">
                    <img src={images.homeLogo} style={imageStyle} />
                    <button className="btn btn-outline-light btn-lg " style={{ ...btnStyle, borderColor: 'transparent' }}>Home</button>
                </div>


                <div className="col-12  bg-black">
                    <img src={images.customerLogo} style={imageStyle} />
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Customer</button>
                </div>

                <div className="col-12  bg-black">
                    <img src={images.itemLogo} style={imageStyle}/>
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Item</button>
                </div>
                <div className="col-12  bg-black">
                    <img src={images.orderLogo} style={imageStyle}/>
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Order</button>
                </div>

                <div className="col-12  bg-black">
                    <img src={images.orderManage} style={imageStyle}/>
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Order Manage</button>
                </div>
            </div>


        </div>
    );
}

export default SideBar;