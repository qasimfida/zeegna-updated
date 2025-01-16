import React from "react";

const NotFound = () => {
  return (
    <div className="w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] lg:w-[calc(100%-40rem)] flex flex-col justify-center items-center sm:auto relative rounded-2xl h-[40rem] p-3">
      <div>
        <h1>404</h1>
        <p>Could not find the page!</p>
      </div>
    </div>
  );
};

export default NotFound;
