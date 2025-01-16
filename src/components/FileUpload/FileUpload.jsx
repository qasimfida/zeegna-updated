import { UploadCloudIcon } from "@/svgs/UploadCloudIcon";
import React, { useEffect, useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import { DeleteIcon } from "@/svgs/DeleteIcon";
import formatSize from "@/utils/fileSize";
import cls from "classnames";

export const FileUpload = ({
  accept = ".pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx",
  multiple = false,
  title = "",
  description = "",
  icon = <UploadCloudIcon />,
  className = "",
  showFiles = true,
  onChange,
  variant = "internal",
  files = [],
  children,
  ...rest
}) => {
  const [cFiles, setFiles] = useState(files);

  useEffect(() => {}, [onChange, files]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).map((file) => ({
      id: Date.now() + file.name,
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
    }));

    // Update files state and onChange using the most recent files state
    setFiles((prevFiles) => {
      const updatedFiles = multiple
        ? [...prevFiles, ...selectedFiles]
        : [...selectedFiles];

      // onChange(updatedFiles);
      return updatedFiles;
    });
    const updatedFiles = multiple
      ? [...cFiles, ...selectedFiles]
      : [...selectedFiles];
    onChange ? onChange(updatedFiles) : null;
    // const uploading = selectedFiles.map(uploadFile);
    selectedFiles.forEach(uploadFile);
    // if (onChange) {
    //   console.log("cFiles", cFiles);
    //   onChange(cFiles);
    // }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    setFiles((currentFiles) =>
      currentFiles.map((f) => {
        if (f.id === file.id) {
          return { ...f, progress: 70 };
        }
        return f;
      })
    );

    // try {
    //   const response = await axios.post(uploadUrl, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     onUploadProgress: (progressEvent) => {
    //       const progress = Math.round(
    //         (progressEvent.loaded * 100) / progressEvent.total
    //       );
    //       // Update the file's progress in the state
    //       setFiles((currentFiles) =>
    //         currentFiles.map((f) => {
    //           if (f.id === file.id) {
    //             return { ...f, progress };
    //           }
    //           return f;
    //         })
    //       );
    //     },
    //   });
    //   console.log("Upload success:", response.data);
    // } catch (error) {
    //   console.error("Upload error:", error);
    // }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();

    const selectedFiles = Array.from(event.dataTransfer.files).map((file) => ({
      id: Date.now() + file.name, // Unique ID for the key prop
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0, // Initial progress is 0
    }));

    // Set files to state and start upload
    setFiles(multiple ? [...cFiles, ...selectedFiles] : [...selectedFiles]);
    selectedFiles.forEach(uploadFile);
  };

  const deleteFile = (fileId) => {
    setFiles(cFiles.filter((file) => file.id !== fileId));
  };

  return (
    <>
      <div
        className={cls(
          `rounded-2xl p-10 flex flex-col items-center justify-center text-center border-dashed cursor-pointer border-primary ${className}`,
          {
            border: !cFiles?.length,
            "border-2": cFiles?.length,
          }
        )}
        onClick={() => document.getElementById("fileInput").click()}
        onDrop={handleFileDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          {...rest}
        />
        {variant !== "external" ? (
          <>
            {icon}
            <p className="text-[1.0625rem] font-semibold text-grey-400 mt-3">
              {title || "Drag files here or click to upload"}
            </p>
            <p className="text-grey-400 text-base mt-1 ">
              {" "}
              {description || `Supports ${accept} types`}
            </p>
          </>
        ) : (
          children
        )}
      </div>
      {variant !== "external" && (
        <ul className="">
          {cFiles.map((file) => (
            <li
              key={file.id}
              className={`flex justify-between items-center ${
                showFiles ? "border border-gray-100" : ""
              } rounded-2xl p-4 mt-[.625rem]`}
            >
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="text-grey-400 font-semibold">{file.name}</p>
                    <p className="text-grey-400 font-medium">
                      {formatSize(file.size)}
                    </p>
                  </div>
                  <span onClick={() => deleteFile(file.id)}>
                    <DeleteIcon className="text-warning-light h-5 w-5 mr-[2px] cursor-pointer " />
                  </span>
                </div>
                <ProgressBar variant="primary" progress={70} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
