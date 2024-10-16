import React from "react";
import Logo from "../../assets/icons/logo/logo";
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
      <div className=" px-[37px] sm:px-6 lg:px-[37px]">
        <div className="flex py-[20px] justify-between">
          <Link to="/" className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
          </Link>

          <div className="hidden sm:ml-6 lg:hidden lg:space-x-8 text-lg font-semibold text-[#5E5E6F]"></div>
          <div className="hidden sm:ml-6 lg:flex lg:space-x-8 text-[17px] font-semibold text-[#5E5E6F]">
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
          <div className="hidden sm:ml-6 lg:flex lg:items-center">
            <Link
              to="/login"
              className="border-2 border-black text-black font-medium hover:text-white hover:bg-gray-600 px-7 py-2 rounded-full transition"
            >
              Login
            </Link>
          </div>
          {/* Mobile menu button - Visible on medium screens and below */}
          <div className="-mr-2 flex items-center lg:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden pb-4 ">
        <div className="space-y-1 pb-3 pt-2">
          <DisclosureButton className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
            <Link to="/resources">Find help</Link>
          </DisclosureButton>
          <DisclosureButton className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
            <Link to="/resources"> Resources</Link>
          </DisclosureButton>
          <DisclosureButton className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
            <Link to="/become-partner"> Become a partner</Link>
          </DisclosureButton>
        </div>
        <Link
          to="/login"
          className="border-2 border-black text-black mb-4 ml-4 font-semibold hover:text-white hover:bg-gray-600 px-7 py-2 rounded-full transition"
        >
          Login
        </Link>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Header;
