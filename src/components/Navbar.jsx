import React from "react";
import DateTime from "./DateTime";




const Navbar = () => {
    return(
        <>
        <div className="flex items-start">
            <img  className="p-0 pl-1 pr-1" src="./img/wemate.png" alt=""/>
            <p className=" p-0 text-gray-500">Meet</p>
            <div className="flex items-end">
            <p className="pl-12 text-gray-500"><DateTime/></p>
            </div>
        </div>
       
        </>
    )
}

export default Navbar;