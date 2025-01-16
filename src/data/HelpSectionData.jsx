import HomeMaintance from "../assets/icons/homeLove/HomeMaintance";
import CarIcon from "../assets/icons/homeLove/CarIcon";
import MovingIcon from "../assets/icons/homeLove/MovingIcon";
import WellNess from "../assets/icons/homeLove/WellNess";
import PersonalCareIcon from "../assets/icons/homeLove/PersonalCareIcon";
import EndLifePlanning from "../assets/icons/homeLove/End-of-LifePlanning";
import PetCare from "../assets/icons/homeLove/PetCare";
import MedicalEquipment from "../assets/icons/homeLove/MedicalEquipment";
import ProfessionalServices from "../assets/icons/homeLove/ProfessionalServices";
const HelpCardsData = [
  {
    id: 1,
    name: "Bathroom safety ",
    description:
      "Bathroom remodel, walk-in showers, walk-in bathtubs, grab bars, etc.",
    Icon: PersonalCareIcon,
    bgColor: "bg-[#BFB5FE]",
    onselect: "/",
    link: "/question1",
  },
  {
    id: 2,
    name: "Kitchen accessibility ",
    description:
      "Kitchen remodel, lowered countertops, pull-out shelves, accessible appliances, etc.",
    Icon: HomeMaintance,
    bgColor: "bg-[#FEBCD5]",
    link: "/question1",
  },
  {
    id: 3,
    name: "Stair modifications ",
    description:
      "Electric stairlifts, ramp installation, dual handrail installation, home elevators, etc.",
    Icon: CarIcon,
    bgColor: "bg-[#A9EEB8]",
    link: "/question1",
  },
  {
    id: 4,
    name: "Entryway adjustments",
    description:
      "Wheelchair ramps, entryway lighting, widened doorways, intercom systems, etc.",
    Icon: MovingIcon,
    bgColor: "bg-[#9DEFEB]",
    link: "/question1",
  },
  {
    id: 5,
    name: "Flooring improvements",
    description:
      "Non-slip flooring, low-pile carpeting, threshold ramps, durable vinyl flooring, etc.",
    Icon: WellNess,
    bgColor: "bg-[#F1AAF2]",
    link: "/question1",
  },
  {
    id: 6,
    name: "Lighting & electrical",
    description:
      "Motion-sensor lighting, lowered outlets, smart switches, adjustable lighting, etc.",
    Icon: MedicalEquipment,
    bgColor: "bg-[#AADCF2]",
    link: "/question1",
  },
  {
    id: 7,
    name: "Installations & mounting",
    description:
      "Grab bars, safety railings, mounted storage, adjustable shelves, mounted appliances, etc.",
    Icon: ProfessionalServices,
    bgColor: "bg-[#F2BBAA]",
    link: "/question1",
  },
  {
    id: 8,
    name: "Home safety",
    description:
      "Smart locks, security cameras, fall detection monitors, automated lighting systems, etc.",
    Icon: PetCare,
    bgColor: "bg-[#D7F2AA]",
    link: "/question1",
  },
  {
    id: 9,
    name: "Home automation",
    description:
      "Smart lighting systems, automated thermostats, voice assistive technology, etc.",
    Icon: EndLifePlanning,
    bgColor: "bg-[#FCDD8E]",
    link: "/question1",
  },
];

export default HelpCardsData;
