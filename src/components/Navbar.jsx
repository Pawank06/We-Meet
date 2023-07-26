import React from "react";
import DateTime from "./DateTime";




const Navbar = () => {
    return(
        <>
        <div className="flow-root">
        <div className=" float-left flex flex-row m-4">
            <img  className="p-4 pr-0" src="./img/wemate.png" alt=""/>
            <p className=" p-4 pl-1 text-gray-500">Meet</p>
        </div>
        <div className=" float-right m-4 text-gray-500">
            <p className="m-4"><DateTime/></p>
        </div>
        </div>
        </>
    )
}

export default Navbar;