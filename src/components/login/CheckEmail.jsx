import React from "react";
import EmailIcon from "../../assets/icons/LoginIcons/EmailIcon";

function CheckYourEmail() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full poppin ">
      <EmailIcon />
      <div className="   px-8 py-6 max-w-lg	">
        <h1 className="text-[32px]	 font-semibold text-center mb-2 ">
          Check your email for more details
        </h1>
        <p className="text-center text-[17px]	text-[#5E5E6F] font-medium mb-10">
          We have sent an email with instructions to reset your password. If you
          don't see the email, make sure you check your spam folder.
        </p>
      </div>
    </div>
  );
}

export default CheckYourEmail;
