import React from "react";
import DateTime from "./DateTime";




const Navbar = () => {
    return(
        <>
        <div className="grid grid-cols-6 gap-4">
        <div className=" col-start-1 col-end-3  meet-nav flex flex-row m-4">
            <img  className="" src="./img/wemate.png" alt=""/>
            <p className=" p-0 pl-1 text-gray-500">Meet</p>
        </div>
        <div className=" m-4 col-end-7 col-span-1 text-gray-500">
            <p><DateTime/></p>
        </div>
        </div>
        </>
    )
}

export default Navbar;