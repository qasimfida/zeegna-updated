import React, { useState } from "react";

import Login from "../components/login/Login";
import Footer from "../layout/footer/Footer";
import NewPassword from "../components/login/NewPassword";
import ResetPassword from "../components/login/ResetPassword";
import CheckYourEmail from "../components/login/CheckEmail";
function LoginPages() {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}

export default LoginPages;
