import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { SuggestionDropdown } from "@/components/Select/Select";
import { IssuingInstitution } from "./data";

export const OtherCertificationsModal = () => {
  const { setSteps, otherCertifications, setOtherCertifications } = useModals();
  return (
    <Modal
      id="otherCertifications"
      open={otherCertifications}
      onClose={() => setOtherCertifications(false)}
      title="Add Other Certifications"
      className="!max-w-[46.5rem] !w-full shadow-xl"
      onSave={() => {
        setSteps("otherCertifications", 1);
        setOtherCertifications(false);
      }}
    >
      <div className="">
        <div className="flex gap-2.5 w-full  items-end">
          <Input placeholder="Certification Name" />
        </div>
        <SuggestionDropdown
          placeholder="Issuing Institution"
          label="Issuing Institution"
          options={IssuingInstitution}
        />
        <div className="flex gap-2.5 items-end">
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
