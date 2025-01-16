import React, { useState, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css";
import {
  AttachmentIcon,
  ForwardIcon,
  ParagraphIcon,
  ReturnIcon,
} from "@/svgs/icons";

var icons = Quill.import("ui/icons");
icons["link"] = `<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.53067 12.7728L7.47001 13.8335C6.00554 15.2979 3.63118 15.2979 2.16671 13.8335C0.702243 12.369 0.702243 9.99465 2.16671 8.53018L3.22737 7.46952M12.7733 8.53018L13.834 7.46952C15.2984 6.00506 15.2984 3.63069 13.834 2.16622C12.3695 0.701754 9.99514 0.701755 8.53067 2.16622L7.47001 3.22688M5.37534 10.6248L10.6253 5.37484"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>`;
icons["bold"] = `<svg
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.12489 11.3999C1.64849 11.3999 1.30715 11.2943 1.10088 11.0831C0.899508 10.8669 0.798828 10.5257 0.798828 10.0591V1.94065C0.798828 1.46425 0.901968 1.12291 1.10824 0.916629C1.31942 0.705441 1.6583 0.599854 2.12489 0.599854C3.71172 0.599854 5.90592 0.599854 6.83305 0.599854C8.16359 0.599854 9.26351 1.77769 9.26351 3.22137C9.26351 4.30187 8.72327 5.18211 7.64275 5.68308C9.03767 5.93807 9.81995 7.3533 9.81995 8.37739C9.81995 9.61485 9.18707 11.3999 7.13164 11.3999C6.53173 11.3999 3.71034 11.3999 2.12489 11.3999ZM6.05352 6.60395H2.95883V9.75705H6.05352C6.67883 9.75705 7.55435 9.14517 7.55435 8.15838C7.55435 7.17157 6.67883 6.60395 6.05352 6.60395ZM2.95883 2.24269V5.03478H5.81446C6.2457 5.03478 7.13164 4.63112 7.13164 3.59988C7.13164 2.56862 6.17539 2.24269 5.81446 2.24269H2.95883Z"
        fill="currentColor"
      />
    </svg>`;
icons["italic"] = `<svg
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.81095 1.20016C2.81095 0.90192 3.05271 0.660156 3.35095 0.660156H8.7509C9.04922 0.660156 9.2909 0.90192 9.2909 1.20016C9.2909 1.49839 9.04922 1.74016 8.7509 1.74016H6.80807L4.6781 10.26H6.65094C6.94916 10.26 7.19094 10.5018 7.19094 10.8C7.19094 11.0983 6.94916 11.34 6.65094 11.34H1.25094C0.952701 11.34 0.710938 11.0983 0.710938 10.8C0.710938 10.5018 0.952701 10.26 1.25094 10.26H3.19379L5.32375 1.74016H3.35095C3.05271 1.74016 2.81095 1.49839 2.81095 1.20016Z"
        fill="currentColor"
      />
    </svg>`;
icons["list"] = `<svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.79844 2.3C2.29549 2.3 2.69844 1.89705 2.69844 1.4C2.69844 0.902948 2.29549 0.5 1.79844 0.5C1.30139 0.5 0.898438 0.902948 0.898438 1.4C0.898438 1.89705 1.30139 2.3 1.79844 2.3ZM4.79844 1.4C4.79844 1.06863 5.06707 0.8 5.39844 0.8H16.1984C16.5298 0.8 16.7984 1.06863 16.7984 1.4C16.7984 1.73137 16.5298 2 16.1984 2H5.39844C5.06707 2 4.79844 1.73137 4.79844 1.4ZM5.39844 4.4C5.06707 4.4 4.79844 4.66863 4.79844 5C4.79844 5.33137 5.06707 5.6 5.39844 5.6H16.1984C16.5298 5.6 16.7984 5.33137 16.7984 5C16.7984 4.66863 16.5298 4.4 16.1984 4.4H5.39844ZM5.39844 8C5.06707 8 4.79844 8.26868 4.79844 8.6C4.79844 8.93132 5.06707 9.2 5.39844 9.2H16.1984C16.5298 9.2 16.7984 8.93132 16.7984 8.6C16.7984 8.26868 16.5298 8 16.1984 8H5.39844ZM2.69844 5C2.69844 5.49705 2.29549 5.9 1.79844 5.9C1.30139 5.9 0.898438 5.49705 0.898438 5C0.898438 4.50295 1.30139 4.1 1.79844 4.1C2.29549 4.1 2.69844 4.50295 2.69844 5ZM1.79844 9.5C2.29549 9.5 2.69844 9.09704 2.69844 8.6C2.69844 8.10296 2.29549 7.7 1.79844 7.7C1.30139 7.7 0.898438 8.10296 0.898438 8.6C0.898438 9.09704 1.30139 9.5 1.79844 9.5Z"
        fill="currentColor"
      />
    </svg>`;

const CustomToolbar = ({ handleRedo, handleUndo }) => (
  <div id="toolbar">
    <div className="flex flex-wrap items-center pr-2.5 ">
      <div className="flex items-center">
        <div className="pr-2.5 border-r">
          <button
            type="button"
            className=" text-grey-500  cursor-pointer ql-undo"
            onClick={handleUndo}
          >
            <ReturnIcon />
          </button>
        </div>
        <div className="px-2.5 border-r ">
          <button
            type="button"
            className=" text-grey-500  cursor-pointer ql-redo"
            onClick={handleRedo}
          >
            <ForwardIcon />
          </button>
        </div>
        <div className="px-2.5 border-r ">
          <button
            type="button"
            className={` text-grey-500 cursor-pointer ql-bold`}
          />
        </div>
        <div className="px-2.5 border-r">
          <button
            type="button"
            className={` text-grey-500  cursor-pointer ql-italic `}
          />
        </div>
        <span className="px-2.5 border-r">
          <select className="ql-align"></select>
        </span>
      </div>
      <div className="px-2.5  flex">
        <button
          type="button"
          className=" text-grey-500  cursor-pointer ql-link"
        >
          <AttachmentIcon />
        </button>
      </div>
      <div className="pl-2.5 border-l">
        <button
          type="button"
          className=" text-grey-500  cursor-pointer ql-list"
          value="bullet"
        >
          <ParagraphIcon />
        </button>
      </div>
    </div>
  </div>
);

export const Editor = ({ placeholder }) => {
  const editorRef = useRef(null);
  const [editorHtml, setEditorHtml] = useState("");

  const handleUndo = () => {
    const editor = editorRef.current.getEditor();
    editor.history.undo();
  };
  const handleRedo = () => {
    const editor = editorRef.current.getEditor();
    editor.history.redo();
  };

  return (
    <div className="w-full">
      <div className="">
        <CustomToolbar handleRedo={handleRedo} handleUndo={handleUndo} />
        <ReactQuill
          ref={editorRef}
          value={editorHtml}
          onChange={setEditorHtml}
          theme="snow"
          placeholder={placeholder}
          modules={Editor.modules}
          formats={Editor.formats}
          className="w-full h-[8rem]"
        />
      </div>
    </div>
  );
};

Editor.modules = {
  history: {
    delay: 2500,
    userOnly: true,
  },
  toolbar: {
    container: "#toolbar",
  },
};

Editor.formats = ["bold", "italic", "list", "bullet", "align", "clean"];
