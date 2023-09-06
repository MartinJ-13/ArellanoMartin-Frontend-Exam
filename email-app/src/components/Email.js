import React, { useState, useEffect } from "react";
import {MdOutlineDragIndicator} from "react-icons/md";
import {GrStatusGoodSmall} from "react-icons/gr";
import {TfiClip} from "react-icons/tfi";
import {AiOutlineClockCircle} from "react-icons/ai";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import EmailDetails from "./EmailDetails";
import dayjs from "dayjs";
function Email({data}) {
    const [show, setShow] = useState(false); //show email details
    const date = dayjs(data.date);
    const tags = data.tags;
    const tagsArray = tags.split(", ");

    function showDetails(){
        setShow(!show);
    }

    return (
      <>
        <div className="border rounded-md border-gray-200 w-full my-3">
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
              <p className="text-xl mx-2 mt-1">{date.format("D")}</p>
              <p className="text-xs mx-2 mb-1">
                {date.format("MMM").toUpperCase()}
              </p>
            </div>

            <div className="w-10 h-10 my-2 mx-2 bg-black rounded-full items-center inline-flex text-xl text-white justify-center text-center overflow-hidden">
              TA
            </div>

            <div className="flex-row">
              <div className="text-black font-semibold">
                <span className="text-xl"> {data.subject} </span>
                <span className="font-bold"> [NEW-10707/1715] </span>
              </div>
              <div className="">
                <span className="text-black"> {data.sender_name} </span>
                <span className="text-gray-400">
                  {" "}
                  &lt;{data.sender_email}&gt; {date.format("MMMM D, YYYY")} at
                  4:04PM | {date.format("MMMM D, YYYY")} at 3:41PM |{" "}
                </span>
                <TfiClip className="inline mb-1 text-blue" />
                <span className="text-blue"> {tagsArray.length} </span>
              </div>
            </div>


            {/* Tags and Time */}

            <div className="flex mt-3 ml-auto right-0 mr-5">

            {show === false ? ( 
              <div className="mr-5">
                {tagsArray.slice(0, 2).map((tag) => {
                  return (
                    <span className="border border-blue mb-3 px-3 bg-bluebg text-blue rounded-md font-semibold drop-shadow-sm mx-1">
                      {tag}
                    </span>
                  );
                })}
                <div className="border border-blue w-fit px-3 bg-bluebg text-blue rounded-md font-semibold drop-shadow-sm mx-1 ml-auto right-0 mt-1">
                   {tagsArray.length - 2}+
                </div>
              </div>
            ) : (
              <></>
            )}
              <div>
                <AiOutlineClockCircle className="inline text-yellow mb-1" />
                <span className="text-yellow"> 13 hrs. </span>
              </div>
              <div className="ml-1 cursor-pointer" onClick={showDetails}>
                {show === false ? (
                  <FiChevronDown
                    className=" text-gray-400 hover:text-gray-300"
                    size="1.7rem"
                  />
                ) : (
                  <FiChevronUp
                    className=" text-gray-400 hover:text-gray-300"
                    size="1.7rem"
                  />
                )}
              </div>
            </div>
          </div>
          {show === false ? (
            <></>
          ) : (
            <EmailDetails data={data} tagsArray={tagsArray} />
          )}
        </div>
      </>
    );
}

export default Email;
