import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import { EmailSentIcon } from "@/svgs/icons";

export const EmailSentModal = () => {
  const { emailSent, setEmailSent } = useModals();
  return (
    <Modal
      id="email-sent"
      open={emailSent}
      onClose={() => setEmailSent(false)}
      className="!max-w-max !w-full shadow-xl !border-b-0"
      footerClass="hidden"
    >
      <div className=" pb-12 flex flex-col justify-center items-center">
        <EmailSentIcon />
        <p className="text-xl font-semibold text-grey-400 mt-2">Check Your Email</p>
        <p className="text-sm font-medium text-grey-500 w-9/12 text-center">
          We have sent instructions to your email Test@gmail.com{" "}
        </p>
      </div>
    </Modal>
  );
};
