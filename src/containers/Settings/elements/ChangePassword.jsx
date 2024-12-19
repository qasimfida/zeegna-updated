import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModals } from "@/contexts/Modals";

const ChangePassword = () => {
  const [value, setValue] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [email, setEmail] = useState("");
  const { setEmailSent } = useModals();

  const pathname = usePathname();
  const [buttonColor, setButtonColor] = useState("!bg-grey-200");

  const handleChange = (event, field) => {
    const updatedValue = { ...value, [field]: event.target.value };
    setValue(updatedValue);

    const isAllFilled = Object.values(updatedValue).every((val) => val !== "");
    const isNewPasswordMatched =
      updatedValue.newPassword === updatedValue.confirmPassword;

    setButtonColor(
      isAllFilled && isNewPasswordMatched ? "!bg-grey-1800" : "!bg-grey-200"
    );
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (pathname.includes("forgot-password")) {
    return (
      <div className="bg-white rounded-2xl ">
        <div className="flex flex-wrap xl:flex-nowrap">
          <div className="w-full h-auto md:h-[458px] order-3 xl:order-1 mb-3 xl:w-3/4 p-5 xl:p-5">
            <h2 className="text-grey-400 text-xl font-semibold">
              Forgot Password?
            </h2>
            <p className="text-grey-500 font-medium mt-[5px] text-sm">
              Please enter your email address to receive password recovery link
            </p>
            <form className="form flex flex-col gap-4 w-full mt-1 ">
              <div className="w-full">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  type="text"
                  placeholder="Email"
                  hasIcon
                />
              </div>
              <Button
                className={`text-center !h-11 ${
                  isEmailValid > 0 ? "!bg-grey-1800" : "!bg-grey-200"
                } hover:bg-primary-light justify-center`}
                size="xl"
                onClick={() => isEmailValid && setEmailSent(true)}
              >
                Recover Password
              </Button>
            </form>
          </div>
          <div className="w-full order-1 xl:order-3 my-0 xl:my-0 justify-center flex ">
            <div className="relative h-full min-h-[20rem] xl:min-h-[10rem] w-full ">
              <Image
                src="/images/password-frame.png"
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                width={0}
                height={0}
                sizes="100%"
                alt="lock"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl ">
      <div className="flex flex-wrap xl:flex-nowrap">
        <div className="w-full order-3 xl:order-1 mb-3 xl:w-3/4 p-4 xl:p-5">
          <h2 className="text-grey-400 text-5xl ">Change Password</h2>
          <form className="form flex flex-col  w-full mt-1">
            <div className="w-full">
              <Input
                value={value.currentPassword}
                className="w-full"
                type="password"
                placeholder="Current Password"
                hasIcon
                onChange={(e) => handleChange(e, "currentPassword")}
              />
            </div>
            <div className="w-full">
              <Input
                value={value.newPassword}
                className="w-full"
                type="password"
                placeholder="New Password"
                hasIcon
                onChange={(e) => handleChange(e, "newPassword")}
              />
            </div>
            <div className="w-full">
              <Input
                value={value.confirmPassword}
                className="w-full"
                type="password"
                placeholder="Confirm New Password"
                hasIcon
                onChange={(e) => handleChange(e, "confirmPassword")}
              />
            </div>

            <Link
              href="/settings/forgot-password"
              className="text-base font-medium text-grey-400 underline mt-4 mb-5"
            >
              Forgot Password?
            </Link>
            <Button
              className={`text-center mb-4 !h-11 ${buttonColor} hover:bg-primary-light justify-center`}
              size="xl"
            >
              Save Changes
            </Button>
            <ol className="">
              <li className="flex items-center font-medium text-grey-500 text-sm">
                <span className="h-2 w-2 min-w-[0.5rem] rounded-full bg-grey-1800 mr-1 inline-flex"></span>
                Password must contain at least 8 characters
              </li>
              <li className="flex items-center font-medium text-grey-500 text-sm">
                <span className="h-2 w-2 min-w-[0.5rem] rounded-full bg-grey-1800 mr-1 inline-flex"></span>
                Password must contain an uppercase letter
              </li>
              <li className="flex items-center font-medium text-grey-500 text-sm">
                <span className="h-2 w-2 min-w-[0.5rem] rounded-full bg-grey-1800 mr-1 inline-flex"></span>
                Password must contain number
              </li>
            </ol>
          </form>
        </div>
        <div className="w-full order-1 xl:order-3  flex justify-center xl:block">
          <div className="relative h-full min-h-[20rem] xl:min-h-[10rem] w-full">
            <Image
              src="/images/password-frame.png"
              fill
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              priority
              width={0}
              height={0}
              sizes="100%"
              alt="lock"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
