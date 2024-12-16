import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import FileUpload from "../FileUpload";

export const ResumeModal = () => {
  const { resume, setResume, setSteps } = useModals();
  return (
    <Modal
      id="resume"
      open={resume}
      onClose={() => setResume(false)}
      title="Upload Resume"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("resume", 1);
        setResume(false);
      }}
    >
      <div className="">
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
