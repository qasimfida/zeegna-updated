import React from "react";
import HomeSafetyContainer from "../components/homesafety/HomeSafetyContainer";
import AllServicesHero from "../components/allServices/AllServicesHero";
import HeroSlider from "../components/homepage/HeroSlider";
import Larry from "../../public/images/larry.png";
import Angela from "../../public/images/angelina.png";
import Mark from "../../public/images/mark.png";
import HomeBanner from "../components/homeBanner/HomeBanner";
import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import LovedOneContainer from "../components/lovedOneContainer/LovedOneContainer";
import CareAndSupport from "../components/careAndSupport/CareAndSupport";
import { useParams } from "react-router-dom";
import KitchenAccess from "../data/contents/services/KitchenAccess";
import BathroomSafety from "../data/contents/services/BathroomSafety";
import StairModification from "../data/contents/services/StairModification";
import EntryAdjust from "../data/contents/services/EntryAdjust";
import FlooringImprove from "../data/contents/services/FlooringImprove";
import InstallMount from "../data/contents/services/InstallMount";
import FallDetection from "../data/contents/services/FallDetection";
import SecurityCamera from "../data/contents/services/SecurityCamera";
import SmartLocks from "../data/contents/services/SmartLocks";
import MotionLight from "../data/contents/services/MotionLight";
import AlarmSystems from "../data/contents/services/AlarmSystems";
import EnergyMonitoring from "../data/contents/services/EnergyMonitoring";
import SmartPlugs from "../data/contents/services/SmartPlugs";
import VoiceAssistant from "../data/contents/services/VoiceAssistant";
import HomeAlert from "../data/contents/services/HomeAlert";
import RemoteMonitoring from "../data/contents/services/RemoteMonitoring";
import SmartAppliance from "../data/contents/services/SmartAppliance";
import ApplianceRepairs from "../data/contents/services/ApplianceRepairs";
import ElectricalLightining from "../data/contents/services/ElectricalLightining";
import PlumbingRepairs from "../data/contents/services/PlumbingRepairs";
import Hvac from "../data/contents/services/Hvac";
import PestControl from "../data/contents/services/PestControl";
import RoofGutter from "../data/contents/services/RoofGutter";
import LongtermCare from "../data/contents/services/LongtermCare";
import EstatePlanning from "../data/contents/services/EstatePlanning";
import FinancialPlanning from "../data/contents/services/FinancialPlanning";
import TaxSupport from "../data/contents/services/TaxSupport";
import NotaryServices from "../data/contents/services/NotaryServices";
import RetirementPlanning from "../data/contents/services/RetirementPlanning";
import PersonalCare from "../data/contents/services/PersonalCare";
import CompanionCare from "../data/contents/services/CompanionCare";
import Transportation from "../data/contents/services/Transportation";
import SkilledNursing from "../data/contents/services/SkilledNursing";
import HomeHealthTerapy from "../data/contents/services/HomeHealthTerapy";
import EndLifePlanning from "../data/contents/services/EndLifePlanning";
import VideoDoorbell from "../data/contents/services/VideoDoorbell";

const content = [
  {
    id: 1,
    testimonial: `My son told me about Zeegna when I mentioned having trouble with my old bathtub. Zeegna’s home quiz made it easy to figure out what I needed, and they connected me with a great local contractor who put in a walk-in shower that’s just right for me.`,
    name: "Larry",
    image: Larry,
  },
  {
    id: 2,
    testimonial: `My dad was having trouble using his old kitchen, and we knew it needed an update. Zeegna connected us with a great contractor who created a safer, more functional space. Now, he cooks comfortably, and I feel so much better knowing he’s safe!`,
    name: "Angela",
    image: Angela,
  },
  {
    id: 3,
    testimonial: `I wanted my mom to be safe and independent at home. Zeegna connected me with a contractor who set up a great monitoring system, and now I can check in anytime. It’s been such a relief for both of us.`,
    name: "Mark",
    image: Mark,
  },
];

const allServices = {
  "kitchen-accessibility": KitchenAccess,
  "bathroom-safety": BathroomSafety,
  "stair-modifications": StairModification,
  "entryway-adjustments": EntryAdjust,
  "flooring-improvements": FlooringImprove,
  "installation-and-mounting": InstallMount,
  "fall-detection-systems": FallDetection,
  "security-cameras": SecurityCamera,
  "smart-locks": SmartLocks,
  "smart-lighting": MotionLight,
  "video-doorbells": VideoDoorbell,
  "alarm-systems": AlarmSystems,
  "energy-monitoring": EnergyMonitoring,
  "smart-plugs": SmartPlugs,
  "voice-assistants": VoiceAssistant,
  "home-alerts": HomeAlert,
  "remote-monitoring": RemoteMonitoring,
  "smart-appliances": SmartAppliance,
  "appliance-repairs": ApplianceRepairs,
  "electrical-and-lighting": ElectricalLightining,
  "plumbing-repairs": PlumbingRepairs,
  "hvac-servicing": Hvac,
  "pest-control": PestControl,
  "roof-and-gutter-services": RoofGutter,
  "long-term-care": LongtermCare,
  "estate-planning": EstatePlanning,
  "financial-planning": FinancialPlanning,
  "tax-support": TaxSupport,
  "notary-services": NotaryServices,
  "retirement-planning": RetirementPlanning,
  "personal-care": PersonalCare,
  "companion-care": CompanionCare,
  transportation: Transportation,
  "skilled-nursing": SkilledNursing,
  "home-health-therapy": HomeHealthTerapy,
  "end-of-life-planning": EndLifePlanning,
};

function AllServicesCategories() {
  const { service } = useParams();

  return (
    <>
      <AllServicesHero service={allServices[service]} />
      <LovedOneContainer service={allServices[service]} />
      <CareAndSupport />
      <HeroSlider
        name={"Larry"}
        fontSize="text-[27px] max-sm:text-[22px]"
        textSize="text-[18px] max-sm:text-[18px]"
        bg="bg-[#F7F7F7]"
        img={true}
        top="top-[93%]"
        PaddingBottom="max-sm:pb-[35px]"
        MarginTop="mt-[50px] max-sm:!mt-[30px]"
        content={content}
      />
      <HomeSafetyContainer backgroundClass="bg-[#F7F7F7]" />

      <KnowledgeContainer
        textSize="text-[27px] max-sm:text-[21px]"
        titleText={"Your guide to a safer living at home"}
        bg="bg-[#F7F7F7]"
      />

      <HomeBanner marginB="max-sm:mb-[30px] mb-[80px]" />
    </>
  );
}

export default AllServicesCategories;
