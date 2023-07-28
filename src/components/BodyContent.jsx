import React from "react";
import { BiVideoPlus } from "react-icons/bi";
import { MdKeyboard } from "react-icons/md";

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
              <div className=" mr-12">
                <p className="meet-text-2">
                  We re-engineered the service we built for sacure business
                  meetings, Google Meet, to make it free and available to all.
                </p>
              </div>
              <div>
                <button className="flex items-center meet-text-3 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <p className="p-2 pl-0">
                    <BiVideoPlus />
                  </p>
                  New meeting
                </button>
                <div class="flex items-center">
                  <form method="GET">
                    <div class="relative text-gray-600">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" class="p-1">
                          <p className="text-2xl">
                            <MdKeyboard />
                          </p>
                        </button>
                      </span>
                      <input
                        type="search"
                        className="placeholder-gray-600 border-2 border-gray-400  rounded-[4px] pl-10 p-3"
                        placeholder="Enter a code or link"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">03</div>
      </div>
    </>
  );
};
export default BodyContent;
