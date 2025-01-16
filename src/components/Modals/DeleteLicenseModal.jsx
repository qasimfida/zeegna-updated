import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import { DeleteIcon } from "@/svgs/icons";
import Button from "../Button";

export const DeleteLicenseModal = () => {
  const { deleteLicense, setDeleteLicense } = useModals();

  const renderFooter = () => {
    return (
      <div className="flex justify-center">
        <Button
          variant="text"
          color="warning"
          size="large"
          className="flex gap-1"
        >
          <DeleteIcon /> Delete
        </Button>
      </div>
    );
  };
  return (
    <Modal
      id="deleteLicense"
      open={deleteLicense}
      onClose={() => setDeleteLicense(false)}
      title="Delete licenses"
      className="!max-w-[33.6rem] !w-full"
      footer={renderFooter()}
    >
      <div className="pt-4 pb-2 flex flex-col items-center gap-4 ">
        <div className="bg-primary h-11 w-11 text-white flex items-center justify-center rounded-full ">
          <DeleteIcon className="h-5 w-5" />
        </div>
        <p className="text-[1.0625rem] font-semibold text-grey-400 ">
          Are you sure you want to delete this entry?
        </p>
      </div>
    </Modal>
  );
};
