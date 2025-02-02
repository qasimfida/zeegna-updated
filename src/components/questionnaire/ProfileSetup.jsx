import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Question20() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const isFormValid =
    firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "";

  return (
    <div className="">
      <div className="lg:pb-[215px] flex max-md:items-center justify-center w-full poppin lg:py-[50px]">
        <div className="px-8 max-w-[552px] max-sm:px-[15px] max-sm:pt-[50px] max-sm:pb-[100px]">
          <h1 className="text-[32px] font-semibold text-center mb-2 max-sm:text-[24px]">
            Profile setup
          </h1>
          <p className="text-center text-[17px] text-[#5E5E6F] font-medium mb-10 max-sm:text-[16px]">
            Yay! You're one step away from accessing the trusted providers to
            connect with the help you need
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold md:text-[18px] font-semibold mb-2"
              >
                First name
              </label>
              <input
                type="text"
                id="first-name"
                className="text-[14px] text-[#5E5E6F] rounded-[10px] w-full px-[15px] py-[15px] border border-[#B6B9CE] 
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                appearance-none touch-action-manipulation"
                placeholder="John"
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
                }
                autoComplete="given-name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="block text-sm  md:text-[18px] font-semibold mb-2"
              >
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                className="text-[14px] text-[#5E5E6F] rounded-[10px] w-full px-[15px] py-[15px] border border-[#B6B9CE] 
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                appearance-none touch-action-manipulation"
                placeholder="Smith"
                value={lastName}
                onChange={(e) =>
                  setLastName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
                }
                autoComplete="family-name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm md:text-[18px] font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="text-[14px] text-[#5E5E6F] rounded-[10px] w-full px-[15px] py-[15px] border border-[#B6B9CE] 
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                appearance-none touch-action-manipulation"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                autoComplete="email"
                inputMode="email"
                required
              />
            </div>

            {/* Navigation Buttons */}
            <div className="mt-[40px] md:mt-[60px] flex justify-between items-center gap-4">
              <Link to="">
                <button className="text-[#5E5E6F] text-[16px] font-medium">
                  &lt; Previous
                </button>
              </Link>

              <Link to={isFormValid ? "/email-verification" : "#"}>
                <button
                  className={`rounded-full flex items-center justify-center gap-4 w-[200px] py-[12px] text-base font-medium text-white border-[#1C1C1C] ${
                    isFormValid
                      ? "bg-[#1C1C1C] border-2 hover:bg-white hover:text-black"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                >
                  Next
                  <FaChevronRight />
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Question20;
