import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { basicCertifications } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const CertificationsModal = () => {
  const { setSteps, certifications, setCertifications } = useModals();
  return (
    <Modal
      id="certifications"
      open={certifications}
      onClose={() => setCertifications(false)}
      title="Add Basic Certifications"
      className="!max-w-[46.5rem] !w-full shadow-xl"
      onSave={() => {
        setSteps("certifications", 1);
        setCertifications(false);
      }}
    >
      <div className="">
        <div className="flex gap-2.5 w-full items-end">
          <SuggestionDropdown
          placeholder="Certification Name"
          label="Certification Name"
          options={basicCertifications}
        />
        </div>
        <div className="flex gap-2.5 w-full items-end">
          <Input
            placeholder="Expiration Date"
            type="date"
            hasIcon
            icon={<CalendarIcon />}
          />
        </div>
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
