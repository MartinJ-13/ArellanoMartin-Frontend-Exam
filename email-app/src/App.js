import './App.css';
import React, { useState } from "react";
import EmailButtons from './components/EmailButtons';
import Email from './components/Email';
import Data from "./DATA.json";

function App() {
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const [emails, setEmails] = useState(Data);
  return (
    <div className="font-poppins mx-20">
      <EmailButtons />

      <hr className=" my-5 border-0 h-0.5 bg-gray-200" />

      <div className="font-semibold text-gray-400 my-5"> Unread </div>
      {emails.map((email) => {
        return <Email data={email} />;
      })}
    </div>
  );
}

export default App;
