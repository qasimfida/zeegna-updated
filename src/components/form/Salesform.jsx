import React, { useState } from "react";
import FormInput from "./Input";
import ReactQuill from "react-quill";
import Uploadicon from "../../assets/icons/contacticons/Uploadicon";
// import "react-quill/dist/quill.snow.css";

const Form = () => {
  const [value, setValue] = useState("");
  return (
    <form className="bg-[#F7F7F7] md:mt-[40px] flex justify-center rounded-[30px] max-sm:rounded-[15px] w-full poppin">
      <div className="md:w-[67%] max-sm:mx-[15px] pt-[44px]  select-icon flex flex-col justify-center">
        <select
          className="bg-transparent border border-gray-300 rounded-lg !px-4 py-3 h-[50px]	w-full text-gray-600 text-sm font-medium text-[14px]"
          defaultValue=""
        >
          <option value="please select a topic">Please select a topic</option>
          <option value="self">one</option>
          <option value="family">Two</option>
          <option value="friend">Three</option>
        </select>
        <div className="flex flex-col justify-between md:flex-row pt-4 gap-[15px]">
          <FormInput placeholder="Name" />
          <FormInput placeholder="Last Name" />
        </div>
        <div className="flex flex-col justify-between md:flex-row pt-4 gap-[15px]">
          <FormInput placeholder="Email" />
          <FormInput placeholder="Phone Number" />
        </div>
        <div className="flex flex-col  select-icon   justify-between md:flex-row pt-4 gap-3">
          <FormInput placeholder="Company Name" />
          <select
            className="bg-transparent border border-gray-300 rounded-lg !px-4 py-3 md:w-[49%]	font-medium text-[14px] text-gray-600"
            defaultValue=""
          >
            <option value="" disabled>
              Company category
            </option>

            <option value="self">one</option>
            <option value="family">Two</option>
            <option value="friend">Three</option>
          </select>
        </div>

        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Please enter your comments"
          className=" bg-transparent mt-4 rounded-t-[15px] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none touch-action-manipulation text-[14px] font-medium sm:text-[16px]"
        />

        <div
          className="flex items-center flex-col mt-3 max-sm:px-[10px] border-dashed rounded-lg border-[2px] border-[#B6B9CE] py-4 gap-[15px] cursor-pointer"
          onClick={() => document.getElementById("fileUpload").click()}
        >
          <div>
            <Uploadicon />
          </div>
          <h3 className="text-[17px] font-semibold text-[#5E5E6F]">
            Upload Documents
          </h3>
          <p className="text-[#5E5E6F] text-base">
            Supports .pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx types
          </p>

          <input
            id="fileUpload"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
            onChange={(e) => console.log(e.target.files)}
          />
        </div>
        <div className=" flex gap-[15px] max-sm:gap-[7px] mt-[15px] md:items-center">
          <input
            type="checkbox"
            className="!rounded-[5px] !w-[22px] max-sm:!w-[40px]  !h-[22px]  "
          />
          <p className="text-[#5E5E6F] text-sm font-medium">
            By submitting this form, I acknowledge receipt of the Zeegna. See
            our{" "}
            <span>
              <a href="/privacy" className="underline underline-offset-2">
                Privacy policy
              </a>
            </span>
          </p>
        </div>
        <div className="flex justify-center mt-[23px] pb-[56px]">
          <button className="py-2 px-14 bg-black hover:bg-transparent hover:text-black hover:border-black border-[1px] text-white rounded-full max-sm:w-full">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
