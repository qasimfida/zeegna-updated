import React, { useState } from "react";
import FormInput from "./Input";
import ReactQuill from "react-quill";
import Uploadicon from "../../assets/icons/contacticons/Uploadicon";
import "react-quill/dist/quill.snow.css";

const Salesform = () => {
  const [value, setValue] = useState("");

  return (
    <form className="bg-[#F7F7F7] mt-[30px] flex justify-center rounded w-full poppin">
      <div className="w-[80%] py-12 flex flex-col justify-center">
        <select
          className="border border-gray-300 rounded-full px-4 py-3	w-full text-gray-600 text-sm"
          defaultValue="pleade"
        >
          <option value="please select a topic">Please select a topic</option>
          <option value="self">one</option>
          <option value="family">Two</option>
          <option value="friend">Three</option>
        </select>
        <div className="flex flex-col justify-between md:flex-row pt-4 gap-3">
          <FormInput placeholder="Name" />
          <FormInput placeholder="Last Name" />
        </div>
        <div className="flex flex-col justify-between md:flex-row pt-4 gap-3">
          <FormInput placeholder="Email" />
          <FormInput placeholder="Phone Number" />
        </div>
        <div className="flex flex-col justify-between md:flex-row pt-4 gap-3">
          <FormInput placeholder="Company Name" />
          <FormInput placeholder="Company Category" />
        </div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Please enter your comments"
          className="bg-white mt-4 rounded-lg border-none"
        />
        <div className="flex items-center flex-col mt-3 bg-white py-4 gap-2">
          <div>
            <Uploadicon />
          </div>
          <h3 className="text-base font-semibold text-[#5E5E6F]">
            Upload Documents
          </h3>
          <p className="text-[#5E5E6F] text-base">
            Supports .pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx types
          </p>
        </div>
        <div className=" flex gap-3 mt-3 items-center">
          <input type="checkbox" />
          <p className="text-[#5E5E6F] text-sm">
            By submitting this form, I acknowledge receipt of the
            ZyraHealth Privacy policy
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <button className="py-2 px-14 bg-black text-white rounded-full">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Salesform;
