// src/data/cardsData.js
import PersonalCareIcon from "../assets/icons/homeLove/PersonalCareIcon";
import HomeMaintance from "../assets/icons/homeLove/HomeMaintance";
import CarIcon from "../assets/icons/homeLove/CarIcon";
import MovingIcon from "../assets/icons/homeLove/MovingIcon";
import WellNess from "../assets/icons/homeLove/WellNess";

const cardsData = [
  {
    id: 1,
    title: "Personal Care",
    description: "Bathing, dressing, meal prep, companionship, and more",
    Icon: PersonalCareIcon,
    bgColor: "bg-[#BFB5FE]",
  },
  {
    id: 2,
    title: "Home maintenance",
    description: "Home repairs, mods, appliance, electrical, and more",
    Icon: HomeMaintance,
    bgColor: "bg-[#FEBCD5]",
  },
  {
    id: 3,
    title: "Non-medical transportation",
    description: "Appointments, shopping, and errands",
    Icon: CarIcon,
    bgColor: "bg-[#A9EEB8]",
  },
  {
    id: 4,
    title: "Moving and storage",
    description: "Downsizing, packing, relocation, and storage solutions",
    Icon: MovingIcon,
    bgColor: "bg-[#9DEFEB]",
  },
  {
    id: 5,
    title: "Wellness",
    description:
      "Mobile massage, social activities, community engagement, holistic care",
    Icon: WellNess,
    bgColor: "bg-[#F1AAF2]",
  },
  {
    id: 6,
    title: "Medical equipment",
    description: "Mobility aids, monitoring devices, safety installations",
    Icon: PersonalCareIcon,
    bgColor: "bg-[#AADCF2]",
  },
  {
    id: 7,
    title: "Professional services",
    description:
      "Taxes, retirement and estate planning, mobile notary, wills, trusts, and more",
    Icon: PersonalCareIcon,
    bgColor: "bg-[#F2BBAA]",
  },
  {
    id: 8,
    title: "Pet care",
    description: "Feeding, walking, grooming, and veterinary care",
    Icon: PersonalCareIcon,
    bgColor: "bg-[#D7F2AA]",
  },
  {
    id: 9,
    title: "End-of-life planning",
    description: "Hospice care and funeral arrangements",
    Icon: PersonalCareIcon,
    bgColor: "bg-[#FCDD8E]",
  },
];

export default cardsData;
