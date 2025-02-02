import emily from "../../../public/images/emily.png";
import mike from "../../../public/images/mike.png";
import josh from "../../../public/images/josh.png";
import home_care_section1 from "../../../public/images/home_care_section1.png";
import PersonalCare from "../../assets/icons/newHomeIcons/PersonalCare";
import Championship from "../../assets/icons/newHomeIcons/Championship";
import MealPreparation from "../../assets/icons/newHomeIcons/MealPreparation";
import MedicationReminder from "../../assets/icons/newHomeIcons/MedicationReminder";
import MobilitySupport from "../../assets/icons/newHomeIcons/MobilitySupport";
import Transportation from "../../assets/icons/newHomeIcons/Transportation";
import home_care_seniors from "../../../public/images/home_care_seniors.png";

const HomeCareContent = {
  header: {
    title: "Home care made easy",
    description:
      "Find top-rated pros to make your home safer, more comfortable, and perfectly suited to age at home",
    button1: "Find the help you need",
    button2: "Take home evaluation quiz",
  },
  section1: {
    title: "Home care for comfort and independence at every step",
    description:
      "Professional home care services give older adults the support they need while helping them stay independent. From assistance with personal care and meal preparation to companionship and specialized health services, these solutions make aging at home feel comfortable and safe, giving families peace of mind along the way.",
    image: home_care_section1,
  },

  section2: {
    title: "Why consider home care for comfort and independence?",
    description:
      "Home care offers vital support to help older adults stay safe, comfortable, and independent at home. From daily tasks like bathing and meal prep to companionship and health services, caregivers make life easier for seniors and their families, promoting dignity and peace of mind.",
    bullets: [
      {
        title: "Promotes independence",
        description:
          "Professional caregivers help with daily tasks like bathing, dressing, and meal preparation, enabling older adults to live with dignity in their own homes.",
      },

      {
        title: "Improves safety",
        description:
          "Caregivers help reduce risks by assisting with mobility, preventing falls, and managing medications, providing a safe environment and peace of mind for seniors and their families.",
      },

      {
        title: "Increases quality of life",
        description:
          "Home care services go beyond basic assistance, offering companionship, emotional support, and tailored health care solutions that make everyday living more fulfilling.",
      },
    ],

    button: "Take free home evaluation quiz",
  },

  section3: {
    title: "Common home care services for seniors",
    image: home_care_seniors,
    bullets: [
      "Bathing and grooming assistance: maintain hygiene and confidence",
      "Meal prep and planning: ensure healthy, balanced meals",
      "Companionship services: provide company and social interaction",
      "Mobility assistance: navigate the home safely",
      "Health monitoring: regular check-ins for chronic conditions",
    ],

    button: "Find the help you need",
  },

  section4: {
    title: "Is home care the right solution for my family?",
    description:
      "Not sure if home care is the solution? Whether your loved one needs companionship, mobility assistance, or specialized health support, home care services provide tailored solutions to meet their needs. Take our free home care quiz to explore care options. Let Zeegna connect you with trusted professionals for compassionate, reliable care at home.",
  },

  section5: {
    title: "Your guide to home care for seniors",
    faqs: [
      {
        question: "What types of services does home care include?",
        answer:
          "Home care services can include personal care, meal preparation, companionship, light housekeeping, and assistance with daily living activities. Additionally, some agencies offer specialized health care services, such as wound care, physical therapy, and medical management.",
      },
      {
        question:
          "How do I know if home care is the right choice for my loved one?",
        answer:
          "Home care may be the right choice if your loved one needs support with daily activities, such as bathing, dressing, or meal preparation. It can also be beneficial if they require companionship, have a chronic condition, or are recovering from a hospital stay.",
      },
      {
        question: "How do I choose the right home care agency?",
        answer:
          "When choosing a home care agency, consider factors such as their reputation, the qualifications of their caregivers, and the services they offer. Ask for references, check online reviews, and verify their licensure and certifications.",
      },
      {
        question: "Is home care covered by insurance or Medicare/Medicaid?",
        answer:
          "Some home care services may be covered by insurance or government programs, such as Medicare or Medicaid. However, the availability of coverage depends on the specific services and the individual's insurance plan. Consult with the agency and the insurance provider to determine coverage.",
      },
      {
        question: "What is the average cost of home care services?",
        answer:
          "The cost of home care services varies depending on the type and frequency of services, as well as the location. On average, home care services can range from $15 to $30 per hour, with daily rates ranging from $100 to $250.",
      },
      {
        question: "Can home care be customized to specific needs?",
        answer:
          "Yes, home care services can be tailored to meet the specific needs of the individual. Caregivers can work with the individual and their family to develop a personalized care plan that addresses their unique needs and goals.",
      },
      {
        question: "What qualifications do home caregivers have?",
        answer:
          "Home caregivers typically have a high school diploma and complete a training program, such as the Certified Nursing Assistant (CNA) or Home Health Aide (HHA) program. They may also have additional certifications or experience in specific areas, such as Alzheimer's care or wound care.",
      },
    ],
  },

  section6: [
    {
      id: 1,
      testimonial:
        "After my dad’s rehab, we needed reliable care to help him recover. Zeegna connected us with an amazing agency. The caregivers were patient, kind, and made all the difference during his recovery",
      name: "Emily",
      image: emily,
    },
    {
      id: 2,
      testimonial:
        "Mom needed a bit of extra help with meals and daily tasks. Zeegna helped us find a caregiver who’s been a perfect fit. It’s given us peace of mind and made Mom’s life so much easier.",
      name: "Mike",
      image: mike,
    },
    {
      id: 3,
      testimonial:
        "We found the perfect caregiver for mom. She's kind and incredibly helpful. The process of getting the care my mom needed was simple, and now she's happy and well taken care of. It feels wonderful to see her content.",
      name: "Josh",
      image: josh,
    },
  ],

  section7: [
    {
      id: 1,
      title: "Personal care",
      description: "Help with bathing, dressing, grooming, and hygiene tasks.",
      Icon: PersonalCare,
      bgColor: "bg-[#BFB5FE]",
      path: "personal-care",
    },
    {
      id: 2,
      title: "Companion care",
      description:
        "Social interaction and emotional support for seniors living alone.",
      Icon: Championship,
      bgColor: "bg-[#FEBCD5]",
      path: "companion-care",
    },

    {
      id: 7,
      title: "Transportation",
      description:
        "Safe and reliable rides to appointments, errands, and more.",
      Icon: Transportation,
      bgColor: "bg-[#F2BBAA]",
      path: "transportation",
    },
    {
      id: 3,
      title: "Skilled nursing",
      description:
        "Nutritious meals tailored to dietary needs and preferences.",
      Icon: MealPreparation,
      bgColor: "bg-[#A9EEB8]",
      path: "skilled-nursing",
    },
    {
      id: 4,
      title: "Home health therapy",
      description:
        "Stay on top of daily health routines with friendly assistance.",
      Icon: MedicationReminder,
      bgColor: "bg-[#9DEFEB]",
      path: "home-health-therapy",
    },
    {
      id: 5,
      title: "End of life planning",
      description: "Help with moving around the house safely and comfortably.",
      Icon: MobilitySupport,
      bgColor: "bg-[#F1AAF2]",
      path: "end-of-life-planning",
    }
  ],
};

export default HomeCareContent;
