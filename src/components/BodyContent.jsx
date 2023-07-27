import React from "react";

const BodyContent = () => {
    return (
        <>
            <div className="container-body grid grid-cols-12 ">
                <div className="col-span-7 m-12">
                    <div className="pt-4 pb-4">
                        <div className="ml-12 mr-12">
                            <h1 className="pb-6">
                                Premium video meetings. Now free for everyone.
                            </h1>

                            <div className=" mr-12"><p className="meet-text-2">We re-engineered the service we built for sacure business meetings, Google Meet, to make it free and available to all.
                            </p></div>

                            <div>
                                <button class="meet-text-3 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    New meeting
                                </button>

                            </div>


                        </div>

                    </div>
                </div>
                <div className="col-span-5">03</div>
            </div>
        </>
    )
}
export default BodyContent;