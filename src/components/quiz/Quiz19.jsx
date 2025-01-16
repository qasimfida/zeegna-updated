import React, { useState, useEffect } from "react";
import Visa from "../../../public/images/Visa.png";
import Amex from "../../../public/images/Amex.png";
import Discover from "../../../public/images/Discover.png";
import Master from "../../../public/images/Mastercard.png";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Quiz19 = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const isFormComplete =
    cardNumber &&
    expirationDate &&
    securityCode &&
    country &&
    zipCode &&
    firstName &&
    lastName &&
    email;

  const handleNext = () => {
    navigate("/next-page");
  };

  return (
    <div className="flex items-center justify-center flex-col font-poppins pb-[40px] md:pb-[215px] max-sm:px-[16px]">
      <div className="font-poppins text-center py-[50px]">
        <h1 className="font-bold text-[21px] font-poppins">
          Pay now to book your consultation
        </h1>
        <p className="text-[18px] font-medium text-[#5E5E6F]">
          Secure your spot with a quick and safe payment
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-[7px] max-sm:w-full">
          <label htmlFor="" className="font-semibold text-[18px]">
            Card number
          </label>
          <div className="flex border-2 rounded-xl border-[#EAEAF1] w-[auto] lg:w-[470px] px-[5px] md:px-[15px] justify-between">
            <input
              type="number"
              placeholder="XXX XXXX XXXX XXXX"
              className="outline-none py-[11px]"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="flex py-[11px] md:gap-[5px] gap-0 max-sm:hidden">
              <img src={Visa} alt="" />
              <img src={Amex} alt="" />
              <img src={Discover} alt="" />
              <img src={Master} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row pt-[15px] gap-[15px] justify-between max-sm:w-full">
          <div className="flex flex-col gap-[7px] ">
            <label htmlFor="" className="font-semibold text-[18px]">
              Expiration date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-[auto] lg:w-[227px] border-2 rounded-xl outline-none p-[15px] border-[#EAEAF1]"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[7px]">
            <label htmlFor="" className="font-semibold text-[18px]">
              Security code
            </label>
            <input
              type="text"
              placeholder="CVC"
              className="w-auto lg:w-[227px] border-2 rounded-xl outline-none p-[15px] border-[#EAEAF1]"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row pt-[15px] gap-[15px] justify-between max-sm:w-full">
          <div className="flex flex-col gap-[7px] ">
            <label htmlFor="" className="font-semibold text-[18px]">
              Country
            </label>
            <input
              type="text"
              placeholder="USA"
              className="w-auto lg:w-[227px]  border-2 rounded-xl outline-none p-[15px] border-[#EAEAF1]"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[7px] ">
            <label htmlFor="" className="font-semibold text-[18px]">
              ZIP code
            </label>
            <input
              type="text"
              placeholder="12345"
              className="w-auto lg:w-[227px] p-[15px] border-[#EAEAF1] outline-none border-2 rounded-xl "
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>

        <div className="flex pt-[15px] flex-col gap-[7px] max-sm:w-full">
          <label htmlFor="" className="font-semibold text-[18px]">
            Cardholder first name
          </label>
          <input
            type="text"
            placeholder="John"
            className="w-auto lg:w-[470px] p-[15px] border-[#EAEAF1] outline-none border-2 rounded-xl "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="flex pt-[15px] flex-col gap-[7px] max-sm:w-full">
          <label htmlFor="" className="font-semibold text-[18px]">
            Cardholder last name
          </label>
          <input
            type="text"
            placeholder="Smith"
            className="w-auto lg:w-[470px] p-[15px] border-[#EAEAF1] outline-none border-2 rounded-xl "
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex pt-[15px] flex-col gap-[7px] max-sm:w-full">
          <label htmlFor="" className="font-semibold text-[18px]">
            Email
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-auto lg:w-[470px] p-[15px] border-2 rounded-xl outline-none border-[#EAEAF1]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="pt-[15px]">
          <DynamicNextButton onClick={handleNext} disabled={!isFormComplete} />
        </div>
      </div>
    </div>
  );
};

const DynamicNextButton = ({ onClick, disabled }) => {
  return (
    <button
      className={`rounded-full flex items-center gap-4  bg-black border-2 px-20 text-base font-medium py-3.5 text-white ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:text-black hover:border-[#1C1C1C] hover:bg-transparent"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      Next
      <FaChevronRight />
    </button>
  );
};

export default Quiz19;
