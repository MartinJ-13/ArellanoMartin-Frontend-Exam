import './App.css';
import React, { useState } from "react";
import Email from './components/Email';
import Data from "./DATA.json";
import { FaSave } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FiFilter } from "react-icons/fi";

function App() {
  const [checkedBoxes, setCheckedBoxes] = useState([]); //Array that stores selected emails
  const [emails, setEmails] = useState(Data); //Generated Data

  // removeItem(): Deletes checked items
  function removeEmail() {
    const updatedEmails = emails.filter(
      (email) => !checkedBoxes.some((check) => check.id === email.id)
    );

    setEmails(updatedEmails);
    setCheckedBoxes([]);

    // Uncheck all checkboxes in the DOM
    const checkboxes = document.querySelectorAll("input");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.value = false;
    });
  }

  function selectAll(event) {
    const checked = event.target.checked;
    const newCheckedBoxes = [...checkedBoxes];

    if (checked) {
      emails.forEach((email) => {
        newCheckedBoxes.push(email);
        setCheckedBoxes(newCheckedBoxes);
      });
    } else {
      setCheckedBoxes([]);
    }
    const checkboxes = document.querySelectorAll("input");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checked;
    });
  }
  // handleCheckboxChange(): Handles the selecting of emails
  function handleCheckboxChange(event, emails) {
    const checked = event.target.checked;
    const newCheckedBoxes = [...checkedBoxes];

    if (checked) {
      newCheckedBoxes.push(emails);
    } else {
      const emailIndex = newCheckedBoxes.findIndex(
        (email) => email.itemID === emails.id
      );
      if (emailIndex >= 0) {
        newCheckedBoxes.splice(emailIndex, 1);
      }
    }
    setCheckedBoxes(newCheckedBoxes);
  }

  return (
    <div className="font-poppins mx-20">
      {/* Email Buttons*/}

      <div className="flex font-medium mt-20">
        <div className="flex">
          <input
            id="rounded-checkbox"
            type="checkbox"
            className="mt-1 ml-1"
            onChange={(e) => selectAll(e)}
          />
          <div className="border border-green flex w-fit px-3 bg-greenbg hover:bg-green text-green hover:text-white rounded-md drop-shadow-md mx-2 cursor-pointer">
            SAVE
            <span className="mt-1 ml-2">
              <FaSave size="1rem" />
            </span>
          </div>

          <div className="border  border-gray-400 flex w-fit px-3 bg-gray-100 hover:bg-gray-400 text-black hover:text-white rounded-md drop-shadow-md mx-2 cursor-pointer">
            MANAGE FILTERS
            <span className="mt-1 ml-2">
              <FiFilter size="1rem" />
            </span>
          </div>

          <div
            className="border border-red flex w-fit px-3 bg-redbg hover:bg-red text-red hover:text-white rounded-md drop-shadow-md mx-2 cursor-pointer"
            onClick={removeEmail}
          >
            DELETE
            <span className="ml-1">
              <TiDelete size="1.4rem" />
            </span>
          </div>
        </div>

        <div className="ml-auto right-0">
          {" "}
          <span> &lt; </span>
          50 of 150
          <span> &gt; </span>
        </div>
      </div>

      <hr className=" my-5 border-0 h-0.5 bg-gray-200" />
      {/* Email Cards*/}
      <div className="flex">
        <div className="font-semibold text-gray-400 my-3"> Unread </div>
        <div className="ml-auto right-0 w-10 h-10 my-2  bg-gray-400 rounded-full items-center inline-flex text-lg text-white justify-center text-center overflow-hidden">
          {" "}
          {emails.length} <span className="text-xs ml-0.5">˅</span>
        </div>
      </div>
      {emails.map((email) => {
        return <Email data={email} handleCheckbox={handleCheckboxChange} />;
      })}
    </div>
  );
}

export default App;
