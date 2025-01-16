import HammerIcon from "../assets/icons/findHelpIcons/Hammer";
import PersonIcon from "../assets/icons/findHelpIcons/Person";
import NoteIcon from "../assets/icons/findHelpIcons/Note";
import ShopIcon from "../assets/icons/findHelpIcons/Shop";
import FundingIcon from "../assets/icons/findHelpIcons/Funding";
const FindHelpData = [
  {
    id: 1,
    title: "Find pros to transform your home",
    description:
      "Connect with vetted local home experts to help you with home modification projects",
    Icon: HammerIcon,
    bgColor: "bg-[#FEBCD5]",
    next: "Find local pros",
    link: "/help-section",
  },
  {
    id: 2,
    title: "Take home evaluation quiz ",
    description:
      "Take the first step toward safe aging at home with this free home evaluation quiz",
    Icon: NoteIcon,
    bgColor: "bg-[#DACDF5]",
    next: "Take free home evaluation quiz",
    link: "/quiz",
  },
  {
    id: 3,
    title: "Home expert evaluation for safe living",
    description:
      "Get professional advice on making your home safer with a virtual or in-home visit.",
    Icon: PersonIcon,
    bgColor: "bg-[#BFE2F5]",
    next: "Schedule home evaluation visit",
    link: "/quiz-9",
  },
  {
    id: 4,
    title: "Shop products for home accessibility ",
    description:
      "Discover a curated selection of products to enhance safety and accessibility in your home.",
    Icon: ShopIcon,
    bgColor: "bg-[#FCDD8E]",
    next: "Shop home safety products",
    link: "/shop-products-1",
  },
  {
    id: 5,
    title: "Funding made simple for home mods",
    description:
      "Find the right financing options to make your home improvements stress-free",
    Icon: FundingIcon,
    bgColor: "bg-[#A9EEB8]",
    next: "Explore financing options",
    link: "/funding-made",
  },
];

export default FindHelpData;
