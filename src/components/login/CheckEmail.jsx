import React from "react";
import LoginPageHeader from "../../layout/header/LoginPageHeader";
import Footer from "../../layout/footer/Footer";
import Email from "../../assets/icons/loginIcons/EmailIcon";

function CheckYourEmail() {
  return (
    <div className="">
      <LoginPageHeader />
      <div className="h-[650px] flex flex-col items-center  w-full poppin mt-[90px] max-sm:h-[496px] max-sm:px-[16px] ">
        <Email />
        <div className="  mt-[30px] flex flex-col items-center	">
          <h1 className="text-[32px]	 font-semibold text-center mb-2 max-sm:text-[24px] ">
            Check your email for more details
          </h1>
          <p className="text-center text-[17px] md:w-[470px] max-sm:text-[16px]	text-[#5E5E6F] font-medium mb-10">
            We have sent an email with instructions to reset your password. If
            you don't see the email, make sure you check your spam folder.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckYourEmail;
