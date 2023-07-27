import React from "react";
import DateTime from "./DateTime";
import {AiOutlineQuestionCircle} from "react-icons/ai"
import {BiCommentError} from "react-icons/bi"
import {AiOutlineSetting} from "react-icons/ai"




const Navbar = () => {
    return(
        <>
        <div className="flow-root">
        <div className=" float-left flex flex-row m-1">
            <img  className="p-4 pr-0" src="./img/wemate.png" alt=""/>
            <p className=" meet-text p-4 pl-1 text-gray-500">Meet</p>
        </div>
        <div className="flex flex-row float-right m-2 text-gray-500">
            <p className=" date-time m-4 mr-4 "><DateTime/></p>
            <p className="meet-text m-4 ml-0 support-icon"><AiOutlineQuestionCircle/></p>
            <p className="meet-text m-4 ml-0 support-icon"><BiCommentError/></p>
            <p className="meet-text m-4 ml-0 support-icon"><AiOutlineSetting/></p>
        </div>
        </div>
        </>
    )
}

export default Navbar;