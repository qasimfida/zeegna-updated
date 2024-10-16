import React, { useState } from "react";
import LeftArrow from "../../assets/icons/faqsDropDown/LeftArrow";
import RightArrow from "../../assets/icons/faqsDropDown/RightArrow";

function MessageIcon() {
  return <span>💬</span>;
}

function HelpDropdownIcon() {
  return <span>⬇️</span>;
}

function DeliveryForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="poppin">
      <div className="  py-10 max-md:px-6 px-8">
        <div className="max-w-screen-sm mx-auto">
          <h2 className="text-center text-2xl font-semibold text-[#DBDBE0] mb-6">
            Section 2
          </h2>

          {/* Description */}
          <div className="flex items-center gap-2 justify-center">
            <p className="text-center text-gray-600 text-lg font-medium">
              Get professional, vetted help delivered to your home
            </p>
            <div className="relative inline-block group">
              <div className="inline-block text-[#109088]">
                <MessageIcon />
              </div>

              {/* Tooltip that appears on hover */}
              <div className="absolute  hidden right-[0px] top-[16px] group-hover:block bg-gray-50 border border-gray-300 rounded-lg p-4 w-80 text-gray-600 mt-5 text-sm font-medium">
                <p>Get professional, vetted help delivered to your home</p>
                <div className="absolute top-[1px] right-[11px] transform translate-x-1 -translate-y-3 w-5 h-5 bg-gray-50 border-t border-l border-gray-300 rotate-45"></div>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-semibold mt-10 mb-4">
            Where do you need help?
          </h4>
          <div>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your zip code"
              className="w-full rounded-full border py-3	 px-4 text-black border border-[#B6B9CE]"
            />
          </div>
        </div>

        {/* Checkout Section */}
        <div className="w-full max-w-3xl mx-auto ">
          <div className="bg-white p-2 rounded-lg max-w-screen-md  ">
            <h1 className="text-xl	text-[#5E5E6F] font-semibold text-black mb-4 mt-10">
              How soon do you need help?
            </h1>

            {/* Shipping Address */}
            <div className="mb-6">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <input
                    type="text"
                    id="immediately"
                    placeholder="Immediately"
                    className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="Within-2-weeks"
                    placeholder="Within 2 weeks"
                    className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="Within-1-month"
                    placeholder="Within 1 month"
                    className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="not-sure"
                    placeholder="I'm not sure"
                    className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                  />
                </div>
              </div>
              <div className="mt-8 mb-4	">
                <h1 className="text-xl	text-[#5E5E6F] font-semibold text-black mb-4">
                  Will you need help just once or on a recurring basis?
                </h1>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      id="One-Time"
                      placeholder="One-Time"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="Recurring"
                      placeholder="Recurring"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="not-sure"
                      placeholder="I'm not sure"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 mb-4	">
                <h1 className="text-xl	text-[#5E5E6F] font-semibold text-black mb-4">
                  How much help do you need each week?
                </h1>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <input
                      type="number"
                      id="1-10-hours"
                      placeholder="1-10 hours"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="11-20-hours"
                      placeholder="11-20 hours"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="not-sure"
                      placeholder="I'm not sure"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 mb-4	">
                <h1 className="text-xl	text-[#5E5E6F] font-semibold text-black mb-4">
                  How long will you need help?
                </h1>

                <div className="grid grid-cols-5 gap-4">
                  <div>
                    <input
                      type="number"
                      id="1-4-weeks"
                      placeholder="1-4 weeks"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="1-3-months"
                      placeholder="1-3 months"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="3-6-months"
                      placeholder="3-6 months"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="6+months"
                      placeholder="6+months"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="not-sure"
                      placeholder="I'm not sure"
                      className="w-full rounded-lg  py-3	 px-4 text-black  border border-[#B6B9CE] text-sm	font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-between max-md:flex-col max-md:gap-4">
              <button className="rounded-full flex items-center gap-4 bg-transparent border-[#B6B9CE] border-2 px-20	text-base	font-medium py-3.5	 text-[#B6B9CE]">
                <RightArrow />
                Back
              </button>
              <button className="rounded-full flex items-center gap-4 bg-transparent border-[#1C1C1C] border-2 px-20	text-base	font-medium py-3.5	 text-black">
                Next
                <LeftArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryForm;
