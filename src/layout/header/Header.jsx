import React from "react";
import Logo from "../../assets/icons/logo/Logo";
import Facebook from "../../assets/icons/headerIcons/Facebook";
import Twitter from "../../assets/icons/headerIcons/Twitter";
import Linkedin from "../../assets/icons/headerIcons/Linkedin";
import HeaderIcon from "../../assets/icons/footerIcons/LeftArrowIcon";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Header({ styles = "" }) {
  return (
    <Disclosure as="nav" className="border-b poppin">
      <div className="px-[37px] max-sm:px-[15px] lg:px-[37px] bg-[#FFFDFD] max-sm:border-b">
        <div className="flex py-[20px] max-sm:py-[15px]  justify-between">
          {/* Logo */}
          <Link to="/" className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-8 text-[17px] font-semibold text-[#5E5E6F]">
            <Link
              to="/help-center"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 hover:border-gray-300 hover:text-gray-700"
            >
              Find help
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 hover:border-gray-300 hover:text-gray-700"
            >
              Resources
            </Link>
            <Link
              to="/become-partner"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 hover:border-gray-300 hover:text-gray-700"
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
          <div className="-mr-2 flex items-center lg:hidden shadow-sm ">
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Disclosure.Panel className="lg:hidden pb-4 bg-gradient-to-b h-[740px] from-white to-pink-100">
        {/* Menu Items */}
        <div className="   px-4">
          <Link
            to="/find-help"
            className="block w-full py-[15px] border-b border-[#EAEAF1] text-[24px] text-black font-semibold flex justify-between items-center hover:text-gray-700 "
          >
            Find Help
            <HeaderIcon />
          </Link>
          <Link
            to="/resources"
            className="block w-full py-[15px]  border-b border-[#EAEAF1] text-[24px] text-black font-semibold  flex justify-between items-center hover:text-gray-700"
          >
            Resources
            <HeaderIcon />
          </Link>
          <Link
            to="/become-partner"
            className="block w-full py-[15px]  border-b border-[#EAEAF1] text-[24px] text-black font-semibold  flex justify-between items-center hover:text-gray-700"
          >
            Become a Partner
            <HeaderIcon />
          </Link>
          <Link
            to="/all-services"
            className="block w-full py-[15px]  border-b border-[#EAEAF1] text-[24px] text-black font-semibold  flex justify-between items-center hover:text-gray-700"
          >
            All service categories
            <HeaderIcon />
          </Link>
        </div>

        {/* Login Button (Mobile) */}
        <div className="flex justify-center my-4 mt-[332px]">
          <Link
            to="/login"
            className="border-2 border-black text-black font-semibold hover:text-white hover:bg-black hover:text-white px-12 py-[13px] rounded-full transition w-full mx-[16px] "
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
            <Facebook />
          </a>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}

export default Header;
