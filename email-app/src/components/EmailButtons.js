import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import {FiFilter} from "react-icons/fi";

function EmailButtons() {
  return (
    <>
      <div className="flex font-medium mx-10">
        <div className="flex">
          <input id="rounded-checkbox" type="checkbox" className="mt-1 ml-1" />
          <div className="border border-green flex w-fit px-3 bg-greenbg text-green rounded-md drop-shadow-md mx-2">
            SAVE
            <span className="mt-1 ml-2">
              <FaSave size="1rem" />
            </span>
          </div>

          <div className="border  border-gray-400 flex w-fit px-3 bg-gray-100 text-black rounded-md drop-shadow-md mx-2">
            MANAGE FILTERS
            <span className="mt-1 ml-2">
              <FiFilter size="1rem" />
            </span>
          </div>

          <div className="border border-red flex w-fit px-3 bg-gray-200 text-red rounded-md drop-shadow-md mx-2">
            DELETE
            <span className="ml-1">
              <TiDelete size="1.4rem" />
            </span>
          </div>
        </div>

        <div>
          {" "}
          <span> &lt; </span>
           50 of 150 
           <span> &gt; </span>
        </div>
      </div>
    </>
  );
}

export default EmailButtons;
