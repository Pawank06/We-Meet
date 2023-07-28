import React from "react";
import DateTime from "./DateTime";
import {AiOutlineQuestionCircle} from "react-icons/ai"
import {BiCommentError} from "react-icons/bi"
import {AiOutlineSetting} from "react-icons/ai"




const Navbar = () => {
    return(
        <>

        <div className="grid grid-cols-12">
        <div className="flex items-center col-span-9 ml-2">
            <img  className="" src="./img/wemate.png" alt=""/>
            <p className=" meet-text text-gray-500">Meet</p>
        </div>
        <div className="flex items-center col-span-3 text-gray-500">
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