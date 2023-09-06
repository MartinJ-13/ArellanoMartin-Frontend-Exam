import dayjs from "dayjs";

function EmailDetails({ data, tagsArray }) {
  const date = dayjs(data.date);


  return (
    <>
      <hr className=" my-5 border-0 h-0.5 bg-gray-100" />
      <div className="mx-5">
        <div className="flex">
          <div className="font-semibold text-xl text-black">Leo M'anaban</div>

          <div className="flex ml-auto right-0">
            {tagsArray.map((tag) => {
               return (
               <div className="border border-blue w-fit px-3 bg-bluebg text-blue rounded-md font-semibold drop-shadow-sm mx-1">
                      {tag}
                </div>
                );
            })}
          </div>
        </div>

        <div className="text-lg text-gray-400">
          {date.format("DD MMM YYYY")} 03:41 PM
        </div>
        <div className="text-lg text-black my-3 text-justifY mr-5">
          {" "}
          {data.content}
        </div>
        <div className="text-lg text-black my-10">
          ----- Forwarded message -----
          <p>
            From: <span className="font-semibold"> {data.sender_name} </span>
            &lt;<span className="text-hyperlink">{data.sender_email}</span>
            &gt;
          </p>
          <p>Date: {data.date}</p>
          <p>Subject: {data.subject}</p>
          <p>
            To: Isabel Bowen &lt;
            <span className="text-hyperlink">sbtest.khr@gmail.com</span>&gt;
          </p>
        </div>
      </div>
    </>
  );
}
export default EmailDetails;
