"use client";

import { usePathname } from "next/navigation";
import BackgroundCheck from "@/components/BackgroundCheck";
import ParticipationAgreement from "@/components/ParticipationAgreement";
import LegalConsent from "@/components/LegalConsent";

export const Agreement = () => {
  const pathname = usePathname();
  let renderedComponent;

  const regex = /\/profile\/(.+)/;
  const match = pathname?.match(regex);

  if (match && match.length > 1) {
    const param = match[1];
    const componentMappings = {
      "participation-agreement": <ParticipationAgreement />,
      "legal-consent": <LegalConsent />,
      "background-check": <BackgroundCheck />,
    };
    renderedComponent = componentMappings[param];
  } else {
    console.log("No match found");
  }
  return renderedComponent || null;
};
