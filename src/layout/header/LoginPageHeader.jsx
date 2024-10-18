import Logo from "../../assets/icons/logo/Logo";
import React from "react";
import { Link } from "react-router-dom";

function LoginPageHeader() {
  return (
    <header
      className=" py-5 px-[37px] border-2   border-[#EAEAF1]"
    >
      <div className=" mx-auto flex justify-between items-center ">
        <div className="font-bold text-2xl">
          <Link to="/" className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default LoginPageHeader;
