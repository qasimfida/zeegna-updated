import React from "react";
import Privacy from "../components/privacy/Privacy";
import HelpCenterHeroSection from "../components/helpcenter/HelpCenterHeroSection";

function PolicyPage() {
  return (
    <>
      <HelpCenterHeroSection
        changeTheHeading="Privacy policy"
        changeTheText="Your privacy matters to us - learn how we protect and handle your personal information"
      />
      <div className="container px-4 max-w-screen-lg mx-auto poppin mt-10 mb-10">
        <Privacy />
      </div>
    </>
  );
}

export default PolicyPage;
