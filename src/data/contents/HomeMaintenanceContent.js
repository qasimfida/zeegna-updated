import Anne from "../../../public/images/anne.png";
import John from "../../../public/images/john.png";
import Linda from "../../../public/images/linda.png";
import home_maintenance_section1 from "../../../public/images/home_maintenance_section1.png";
import ApplianceRepairs from "../../assets/icons/newHomeIcons/ApplianceRepairs";
import ElectricalAndLighting from "../../assets/icons/newHomeIcons/ElectricalAndLighting";
import PlumbingRepairs from "../../assets/icons/newHomeIcons/PlumbingRepairs";
import HVACServicing from "../../assets/icons/newHomeIcons/HVACServicing";
import PestControl from "../../assets/icons/newHomeIcons/PestControl";
import RoofAndGutterServices from "../../assets/icons/newHomeIcons/RoofAndGutterServices";
import recommenden_main_serv from "../../../public/images/recommenden_main_serv.png";

const HomeMaintenanceContent = {
  header: {
    title: "Home maintenance made easy",
    description:
      "Find top-rated pros to make your home safer, more comfortable, and perfectly suited to age at home",
    button1: "Find the help you need",
    button2: "Explore free helpful resources",
  },
  section1: {
    title: "Home maintenance for a stress-free aging at home",
    description:
      "Keeping up with home repairs and maintenance can feel overwhelming, but regular upkeep ensures your house remains safe, efficient, and comfortable. From fixing plumbing leaks to repairing appliances and maintaining electrical systems, professional home maintenance services are here to take care of the hard work so you can focus on enjoying your home.",
    image: home_maintenance_section1,
  },

  section2: {
    title: "Why prioritize home maintenance for safety and comfort?",
    description:
      "Regular home maintenance not only helps older adults live independently but also prevents expensive repairs down the road. By staying on top of small fixes and upkeep, you ensure your home remains safe, secure, and a more welcoming place to live comfortably.",
    bullets: [
      {
        title: "Improves safety",
        description:
          "Addressing potential hazards such as loose railings, uneven flooring, or faulty wiring significantly lowers the risk of accidents, creating a safer and more secure home environment",
      },

      {
        title: "Preserves functionality",
        description:
          "Keeping appliances and home systems in good condition ensures everything runs smoothly and efficiently, making daily life more convenient and stress-free",
      },

      {
        title: "Prevents major repairs",
        description:
          "Taking care of minor problems promptly helps you avoid costly and time-consuming repairs later, ensuring your home stays in great condition with less effort",
      },
    ],

    button: "Take free home evaluation quiz",
  },

  section3: {
    title: "Recommended home maintenance services",
    image: recommenden_main_serv,
    bullets: [
      "Plumbing fixes: keep water systems running smoothly",
      "Electrical upgrades: efficient power throughout your home",
      "Appliance servicing: keep everyday appliances in top condition",
      "Roof inspections: protect your home with regular roof, gutter checks",
      "HVAC maintenance: seasonal heating and cooling tune-ups",
    ],

    button: "Find the help you need",
  },

  section4: {
    title: "Is home maintenance necessary for my home?",
    description:
      "Keeping up with home maintenance is essential for safety, avoiding costly repairs, and maintaining a comfortable space as you age at home. Tasks like plumbing, electrical checks, and HVAC servicing prevent bigger issues later. Whether it’s a quick fix or regular upkeep, Zeegna connects you with trusted pros to keep your home safe, reliable, and supportive.",
  },

  section5: {
    title: "Your guide to home maintenance for seniors",
    faqs: [
      {
        question:
          "What types of home maintenance services do seniors typically need?",
        answer:
          "Home modifications create a safer, more accessible, and comfortable environment tailored to help seniors age at home. From installing grab bars in the bathroom and widening doorways to enhancing lighting for better visibility, these thoughtful changes make daily activities safer and more convenient.",
      },
      {
        question:
          "What types of home maintenance services are available through Zeegna?",
        answer:
          "Zeegna offers a free home evaluation quiz to help you identify which areas of your home need improvement. Our quiz takes you through a room-by-room assessment of your home, providing tailored recommendations for modifications based on your specific needs.",
      },
      {
        question: "How often should I schedule home maintenance services?",
        answer:
          "A senior-friendly home should include features such as grab bars, walk-in showers, non-slip flooring, widened doorways, and accessible appliances. Additionally, motion-sensor lighting, smart switches, and lowered outlets can make everyday tasks simpler.",
      },
      {
        question:
          "How can I find reliable experts for my home maintenance needs?",
        answer:
          "The cost of home modifications varies depending on the type and extent of the modifications. Factors such as materials, labor costs, and the complexity of the project will influence the final cost.",
      },
      {
        question: "Can I get an estimate for maintenance costs before hiring?",
        answer:
          "Materials such as durable, slip-resistant flooring and senior-friendly appliances are ideal for creating a home that supports aging comfortably. Designs that incorporate accessible features, such as widened doorways and grab bars, can also make a significant difference.",
      },
      {
        question: "What is the average cost of common home maintenance tasks?",
        answer:
          "Zeegna offers resources to help you explore insurance or grant options to fund home modifications. Consult with a licensed insurance professional or a financial advisor to explore available options.",
      },
      {
        question:
          "What qualifications should I look for in a home maintenance pro?",
        answer:
          "The timeline for completing common home upgrades varies depending on the type and extent of the modifications. On average, a bathroom remodel can take 2-4 weeks, while a kitchen remodel can take 4-6 weeks.",
      },
    ],
  },

  section6: [
    {
      id: 1,
      testimonial:
        "I found an amazing pro through Zeegna who fixed my leaky faucet and checked all the plumbing in my kitchen at a competitive rate. It’s such a relief knowing everything is working now, and I didn’t have to overspend.",
      name: "Anne",
      image: Anne,
    },
    {
      id: 2,
      testimonial:
        "Our HVAC stopped working, and I wasn’t sure where to turn. Thanks to Zeegna, I found a great technician who had it running perfectly the same day!",
      name: "John",
      image: John,
    },
    {
      id: 3,
      testimonial:
        "Keeping up with home maintenance was getting tough for my dad. Zeegna made it easy to find reliable help, and now his home feels safe and secure again.",
      name: "Linda",
      image: Linda,
    },
  ],

  section7: [
    {
      id: 1,
      title: "Appliance repairs",
      description:
        "Extend the life of your appliances with regular checkups and repairs",
      Icon: ApplianceRepairs,
      bgColor: "bg-[#BFB5FE]",
      path: "/home-modifications",
    },
    {
      id: 2,
      title: "Electrical and lighting",
      description:
        "Keep wiring, outlets, and lighting fixtures in top shape for safety",
      Icon: ElectricalAndLighting,
      bgColor: "bg-[#FEBCD5]",
    },
    {
      id: 3,
      title: "Plumbing repairs",
      description:
        "Address leaks, drips, and other plumbing issues to avoid damage",
      Icon: PlumbingRepairs,
      bgColor: "bg-[#A9EEB8]",
    },
    {
      id: 4,
      title: "HVAC servicing",
      description:
        "Keep your home comfortable with heating and cooling system tune-ups",
      Icon: HVACServicing,
      bgColor: "bg-[#9DEFEB]",
    },
    {
      id: 5,
      title: "Pest control",
      description: "Maintain a clean, healthy, and comfortable living space",
      Icon: PestControl,
      bgColor: "bg-[#F1AAF2]",
    },
    {
      id: 7,
      title: "Roof and gutter services",
      description: "Protect your home from leaks and water damage",
      Icon: RoofAndGutterServices,
      bgColor: "bg-[#F2BBAA]",
    },
  ],
};

export default HomeMaintenanceContent;
