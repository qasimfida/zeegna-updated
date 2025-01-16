// src/data/cardsData.js
import PersonalCareIcon from "../assets/icons/homeLove/PersonalCareIcon";
import HomeMaintance from "../assets/icons/homeLove/HomeMaintance";
import CarIcon from "../assets/icons/homeLove/CarIcon";
import MovingIcon from "../assets/icons/homeLove/MovingIcon";
import WellNess from "../assets/icons/homeLove/WellNess";
import EndLifePlanning from "../assets/icons/homeLove/End-of-LifePlanning";
import PetCare from "../assets/icons/homeLove/PetCare";
import ProfessionalServices from "../assets/icons/homeLove/ProfessionalServices";

const cardsData = [
  {
    id: 1,
    title: "Bathroom safety",
    description:
      "Bathroom remodel, walk-in showers, walk-in bathtubs, grab bars, non-slip flooring, etc.",
    Icon: HomeMaintance,
    bgColor: "bg-[#BFB5FE]",
  },
  {
    id: 2,
    title: "Kitchen accessibility",
    description:
      "Kitchen remodel, lowered countertops, pull-out shelves, accessible appliances, etc.",
    Icon: CarIcon,
    bgColor: "bg-[#FEBCD5]",
  },
  {
    id: 3,
    title: "Stair modifications",
    description:
      "Electric stairlifts, ramp installation, dual handrail installation, home elevators, etc.",
    Icon: MovingIcon,
    bgColor: "bg-[#A9EEB8]",
  },
  {
    id: 4,
    title: "Entryway adjustments",
    description:
      "Wheelchair ramps, entryway lighting, widened doorways, intercom systems, etc.",
    Icon: WellNess,
    bgColor: "bg-[#9DEFEB]",
  },
  {
    id: 5,
    title: "Flooring improvements",
    description:
      "Non-slip flooring, low-pile carpeting, threshold ramps, durable vinyl flooring, etc.",
    Icon: PersonalCareIcon,
    bgColor: "bg-[#F1AAF2]",
  },
  {
    id: 6,
    title: "Lighting and electrical",
    description:
      "Motion-sensor lighting, lowered outlets, smart switches, adjustable lighting, etc.",
    Icon: ProfessionalServices,
    bgColor: "bg-[#AADCF2]",
  },
  {
    id: 7,
    title: "Installations and mounting",
    description:
      "Grab bars, safety railings, mounted storage, adjustable shelves, mounted appliances, etc.",
    Icon: PetCare,
    bgColor: "bg-[#F2BBAA]",
  },
  {
    id: 8,
    title: "Home safety",
    description:
      "Smart locks, security cameras, fall detection monitors, automated lighting systems, etc.",
    Icon: EndLifePlanning,
    bgColor: "bg-[#D7F2AA]",
  },
  {
    id: 9,
    title: "Home automation",
    description:
      "Smart lighting systems, automated thermostats, voice assistive technology, etc.",
    Icon: PersonalCareIcon,
    bgColor: "bg-[#FCDD8E]",
  },
];

export default cardsData;
