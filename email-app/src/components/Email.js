import React, { useState } from "react";
import {MdOutlineDragIndicator} from "react-icons/md";
import {GrStatusGoodSmall} from "react-icons/gr";
function Email() {
    return (
      <>
        <div className="border rounded-md border-gray-200">
          <div className="flex my-5 mx-2">
            <MdOutlineDragIndicator
              size="1.5rem"
              className="text-gray-400 mx-1 my-4"
            />
            <input
              type="checkbox"
              id="rounded-checkbox"
              className="my-5 mx-1"
            />
            <GrStatusGoodSmall className="my-5 text-green mx-1" />

            <div className="text-black border text-center rounded-lg bg-gray-100 border-gray-300 px-1 mx-2">
              <p className="text-xl mx-2 mt-1">12</p>
              <p className="text-xs mx-2 mb-1">JAN</p>
            </div>

            <div className="w-10 h-10 my-2 mx-2 bg-black rounded-full items-center inline-flex text-xl text-white justify-center text-center overflow-hidden">
              TA
            </div>

            <div className="flex-row">
              <div className="text-black font-semibold">
                <span className="text-xl"> Header </span>
                <span className="font-bold"> [NEW-10707/1715] </span>
              </div>
              <div className="">
                <span className="text-black"> Leo M'anaban </span>
                <span className="text-black">  </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Email;
