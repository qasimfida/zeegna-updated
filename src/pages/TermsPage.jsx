import React from "react";
import TermsContent from "../components/terms/TermsContent";
import HelpCenterHeroSection from "../components/helpcenter/HelpCenterHeroSection";

function TermsPage() {
  return (
    <>
      <HelpCenterHeroSection
        changeTheHeading="Terms of use"
        changeTheText="Understand the policies and conditions for using our services and platform securely"
      />
      <div className="container px-4 max-w-screen-lg mx-auto poppin mt-10 mb-10">
        <TermsContent />
      </div>
    </>
  );
}

export default TermsPage;
