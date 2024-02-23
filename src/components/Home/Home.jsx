import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Home(){
    const columnStyle = {
        height: "95%",
        width: "270px"
    };

    return(
        <div className="container-fluid">
               <div className="col mt-3 bg-black position-absolute" style={columnStyle}>

               </div>
        </div>
    );
}

export default Home;