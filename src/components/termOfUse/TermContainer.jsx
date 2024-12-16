import React from "react";
import PrivacyCard from "../PrivacyContainer/PrivacyCard";
import TermsData from "../../data/TermsData";
import TermsHero from "./TermsHero";

const TermContainer = () => {
  return (
    <>
      <TermsHero
        heading={"Terms of use"}
        details={
          "Understand the policies and conditions for using our services and platform securely"
        }
      />
      {TermsData.map((item) => (
        <PrivacyCard
          key={item.id}
          heading={item.title}
          text={item.description}
        />
      ))}
    </>
  );
};

export default TermContainer;
