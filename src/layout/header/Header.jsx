import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/icons/logo/Logo";
import Facebook from "../../assets/icons/headerIcons/Facebook";
import Twitter from "../../assets/icons/headerIcons/Twitter";
import Linkedin from "../../assets/icons/headerIcons/Linkedin";
import HeaderIcon from "../../assets/icons/footerIcons/LeftArrowIcon";
import Xicon from "../../assets/icons/headerIcons/Twitter";
import { FaXTwitter } from "react-icons/fa6";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header({ styles = "" }) {
  const location = useLocation();
  const bgColor =
    location.pathname === "/article"
      ? "bg-[#F7F7F7]"
      : location.pathname === "/new-resources" ||
        location.pathname === "/find-help"
      ? "bg-white"
      : location.pathname === "/guiding-hero"
      ? "bg-[#FFF9C6]"
      : "bg-[#FFFDFD]";

  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    console.log(isOpen);
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Disclosure
      as="nav"
      className={`max-sm:top-0 max-sm:w-full max-sm:z-50 border-b poppin`}
    >
      <div className="px-[37px] max-sm:px-[15px] lg:px-[37px]  max-sm:border-b">
        <div className="flex py-[18px] max-sm:py-[15px] justify-between">
          {/* Logo */}
          <Link to="/" onClick={togglePanel} className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-8 text-[17px] font-semibold text-[#5E5E6F]">
            <Link
              to="/find-help"
              className={`inline-flex items-center   px-1 pt-1 hover:border-gray-300 hover:text-gray-700 ${
                isActive("/find-help") ? "text-[#109088]" : "text-[#5E5E6F]"
              }`}
            >
              Find help
            </Link>
            <Link
              to="/resources"
              className={`inline-flex items-center  px-1 pt-1 hover:border-gray-300 hover:text-gray-700 ${
                isActive("/resources") ? "text-[#109088]" : "text-[#5E5E6F]"
              }`}
            >
              Resources
            </Link>
            <Link
              to="/become-partner"
              className={`inline-flex items-center  px-1 pt-1 hover:border-gray-300 hover:text-gray-700 ${
                isActive("/become-partner")
                  ? "text-[#109088]"
                  : "text-[#5E5E6F]"
              }`}
            >
              Become a partner
            </Link>
          </div>

          {/* Login Button (Desktop) */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              to="/login"
              className="border-2 border-black text-black font-medium hover:text-white hover:bg-black px-7 py-2 rounded-full transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center lg:hidden shadow-sm">
            <button
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={togglePanel}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
              ) : (
                <XMarkIcon
                  aria-hidden="true"
                  className={`block h-6 w-6 group-data-[open]:block`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden pb-4  ">
          {/* Menu Items */}
          <div className="px-4 mb-[30px]">
            <Link
              to="/"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Home
              <HeaderIcon />
            </Link>
            <Link
              to="/resources"
              className=" w-full py-[15px] text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Resources
              <HeaderIcon />
            </Link>
            <Link
              to="/become-partner"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Become a Partner
              <HeaderIcon />
            </Link>
            <Link
              to="/home-modifications"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Home modifications
              <HeaderIcon />
            </Link>
            <Link
              to="/homes-safety"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Home safety
              <HeaderIcon />
            </Link>
            <Link
              to="/homes-automation"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Home automation
              <HeaderIcon />
            </Link>{" "}
            <Link
              to="/homes-care"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Home care
              <HeaderIcon />
            </Link>{" "}
            <Link
              to="/home-maintenance"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Home maintenance
              <HeaderIcon />
            </Link>{" "}
            <Link
              to="/professional-service"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Professional services
              <HeaderIcon />
            </Link>
            <Link
              to="/services/bathroom-safety"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              All service categories
              <HeaderIcon />
            </Link>
            <Link
              to="/help-center"
              className=" w-full py-[15px]  text-[18px] text-black font-semibold flex justify-between items-center hover:text-gray-700 border-b border-[#EAEAF1]"
              onClick={togglePanel}
            >
              Help center
              <HeaderIcon />
            </Link>
          </div>

          {/* Login Button (Mobile) */}
          <div className="flex justify-center my-4 mt-[]">
            <Link
              to="/login"
              className="border-2 border-black text-black font-semibold hover:text-white hover:bg-black px-12 py-[13px] rounded-full transition w-full mx-[16px] max-sm:text-center"
              onClick={togglePanel}
            >
              Login
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-[30px] mt-[30px]">
            <a href="#" className="text-black">
              <Linkedin />
            </a>
            <a href="#" className="text-black">
              <Facebook />
            </a>
            <a href="#" className="text-black">
              <FaXTwitter className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
      )}
    </Disclosure>
  );
}

export default Header;
