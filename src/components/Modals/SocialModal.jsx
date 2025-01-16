import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";

export const SocialModal = () => {
  const { setSteps, social, setSocial } = useModals();
  return (
    <Modal
      id="social"
      open={social}
      onClose={() => setSocial(false)}
      title="Add Social Profile"
      className="!max-w-[46.5rem] !w-full shadow-xl"
      onSave={() => {
        setSteps("social", 1);
        setSocial(false);
      }}
    >
      <div className="">
        <div className="flex gap-2.5 w-full items-end">
          <Input placeholder="Website" />
        </div>
        <div className="flex gap-2.5 w-full items-end">
          <Input placeholder="LinkedIn" />
        </div>
        <div className="flex gap-2.5 items-end">
          <Input placeholder="Twitter" />
        </div>
      </div>
    </Modal>
  );
};
