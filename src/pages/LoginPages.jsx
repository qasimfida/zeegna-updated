<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useState } from "react";

>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
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
