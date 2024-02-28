
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../constants/image";
import './mobileNav.css'
import {BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";

import React, { useState, useEffect } from 'react';


function SideBar(){
    const sideBar = {
        height: "100%",
        width: "270px",
        backgroundColor:"white",

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


        <div className="container-fluid position-fixed">

           <div className="row position-absolute " style={sideBar}>
               <div className="col">
                   <img src={images.dzLogo} className="mx-auto d-block img-fluid position-relative "  style={dzLogo}/>
               </div>

            </div>


            <div className="row" style={btnGroupRow} >

                <Link to="/home">
                    <img src={images.homeLogo} style={imageStyle} alt="Home Logo" />
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Home</button>
                </Link>


                <div className="col-12 ">
                    <Link to="/customer">
                    <img src={images.customerLogo} style={imageStyle} />
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Customer</button>
                    </Link>
                </div>


                <div className="col-12 ">
                    <Link to="/item">
                    <img src={images.itemLogo} style={imageStyle}/>
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Item</button>
                    </Link>
                </div>
                <div className="col-12 ">
                    <Link to="/order">
                    <img src={images.orderLogo} style={imageStyle}/>
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Order</button>
                    </Link>
                </div>

                <div className="col-12 ">
                    <Link to="/">
                    <img src={images.orderManage} style={imageStyle}/>
                    <button className="btn btn-outline-light btn-lg" style={{ ...btnStyle, borderColor: 'transparent' }}>Order Manage</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default SideBar;


