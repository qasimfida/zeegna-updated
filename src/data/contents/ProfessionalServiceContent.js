import Nancy from "../../../public/images/nancy.png";
import Bill from "../../../public/images/bill.png";
import Brad from "../../../public/images/brad.png";
import pro_services_section1 from "../../../public/images/pro_services_section1.png";
import LongTermCareInsurance from "../../assets/icons/newHomeIcons/LongTermCareInsurance";
import EstatePlanning from "../../assets/icons/newHomeIcons/EstatePlanning";
import FinancialPlanning from "../../assets/icons/newHomeIcons/FinancialPlanning";
import TaxSupport from "../../assets/icons/newHomeIcons/TaxSupport";
import NotaryServices from "../../assets/icons/newHomeIcons/NotaryServices";
import RetirementPlanning from "../../assets/icons/newHomeIcons/RetirementPlanning";
import pro_services_seniors from "../../../public/images/pro_services_seniors.png";

const ProfessionalServiceContent = {
  header: {
    title: "Professional services made easy",
    description:
      "Find top-rated pros to make your home safer, more comfortable, and perfectly suited to age at home",
    button1: "Find the help you need",
    button2: "Explore free helpful resources",
  },
  section1: {
    title: "Professional support for life’s important decisions",
    description:
      "Navigating complex processes like retirement planning, long-term care insurance, and estate management can feel overwhelming. With access to vetted experts, you can simplify these tasks and feel confident in your decisions. Whether it’s setting up a will, managing financial goals, or organizing legal documents, Zeegna connects you with the right professionals for your needs.",
    image: pro_services_section1,
  },

  section2: {
    title:
      "Why prioritize professional services for peace of mind and comfort?",
    description:
      "Professional services provide the guidance necessary to navigate important aspects of aging with confidence and ease. Whether it’s achieving financial security or ensuring peace of mind, these services help you stay prepared and in control of your future.",
    bullets: [
      {
        title: "Plan for the future",
        description:
          "Organize your finances, retirement goals, and long-term care arrangements with professional guidance, ensuring a stress-free and well-prepared future",
      },

      {
        title: "Simplify decision-making",
        description:
          "Collaborate with experts who can walk you through complex legal and financial decisions",
      },

      {
        title: "Protect your family",
        description:
          "Secure your loved ones’ future by creating a comprehensive estate plan, including wills, trusts, and powers of attorney, to safeguard their well-being",
      },
    ],

    button: "Get expert help from professionals",
  },

  section3: {
    title: "Essential professional services for seniors",
    image: pro_services_seniors,
    bullets: [
      "Will creation: draft or update your will with expert advice",
      "Power of attorney setup: ensure trusted decision-makers are in place",
      "Retirement planning: plan for long-term needs",
      "Insurance guidance: find the right coverage for health and care",
      "Legal documentation: manage trusts, deeds, and other paperwork",
    ],

    button: "Find the help you need",
  },

  section4: {
    title: "Are professional services right for your family?",
    description:
      "Not sure if you need help with financial or legal planning? From retirement savings to estate organization, professional services can make these processes smoother and more manageable. Zeegna connects you with trusted experts to navigate important life decisions with clarity and confidence.",
  },

  section5: {
    title: "Your guide to professional services for seniors",
    faqs: [
      {
        question: "What professional services are most important for seniors?",
        answer:
          "Essential professional services for seniors include retirement planning, estate planning, legal documentation, insurance guidance, and financial management. These services help seniors navigate complex decisions with confidence and peace of mind.",
      },
      {
        question: "What types of professional services can I find on Zeegna?",
        answer:
          "Zeegna connects you with a variety of professional services, including legal assistance, financial planning, retirement advice, and insurance consultations. Our network of trusted experts ensures that you receive the support you need.",
      },
      {
        question:
          "How can I find reliable professionals for financial or legal help?",
        answer:
          "To find reliable professionals, consider their experience, reputation, and expertise in senior-focused services. Zeegna provides access to vetted experts to ensure you receive top-notch support for your financial and legal needs.",
      },
      {
        question: "How do professional services help with retirement planning?",
        answer:
          "Professional services assist with retirement planning by helping you outline your financial goals, assess your retirement savings, and create a comprehensive plan to ensure a comfortable and secure retirement.",
      },
      {
        question: "What is estate planning, and why is it important?",
        answer:
          "Estate planning involves organizing your assets, creating wills and trusts, and designating power of attorney to protect your legacy. It ensures your wishes are fulfilled and provides peace of mind for you and your family.",
      },
      {
        question:
          "Do I need professional help to manage long-term care expenses?",
        answer:
          "Professional guidance can be invaluable when managing long-term care expenses. Experts can help you explore insurance options, financial strategies, and government programs to cover the costs associated with long-term care.",
      },
      {
        question:
          "What’s the typical cost of estate planning or financial advice?",
        answer:
          "The cost of estate planning or financial advice varies based on the complexity of your needs and the services provided. It's essential to consult with professionals to obtain a detailed estimate tailored to your situation.",
      },
    ],
  },

  section6: [
    {
      id: 1,
      testimonial:
        "I found a great financial advisor through Zeegna who completely transformed my retirement plan. Now I feel ready and secure for the years ahead.",
      name: "Nancy",
      image: Nancy,
    },
    {
      id: 2,
      testimonial:
        "I had no idea where to start with my dad’s estate planning. Zeegna connected us with an amazing attorney who guided us every step of the way. We couldn’t have done it without them.",
      name: "Bill",
      image: Bill,
    },
    {
      id: 3,
      testimonial:
        "Finding a reliable, mobile notary for my mom’s legal documents was quick and easy with Zeegna. The service was professional and stress-free.",
      name: "Brad",
      image: Brad,
    },
  ],

  section7: [
    {
      id: 1,
      title: "Long-term care insurance",
      description:
        "Explore coverage options and find the best plan for your future.",
      Icon: LongTermCareInsurance,
      bgColor: "bg-[#BFB5FE]",
      path: "long-term-care",
    },
    {
      id: 2,
      title: "Estate planning",
      description:
        "Protect your legacy with tailored wills, trusts, and power of attorney.",
      Icon: EstatePlanning,
      bgColor: "bg-[#FEBCD5]",
      path: "estate-planning",
    },
    {
      id: 3,
      title: "Financial planning",
      description:
        "Receive guidance on retirement, investments, and budgeting.",
      Icon: FinancialPlanning,
      bgColor: "bg-[#A9EEB8]",
      path: "financial-planning",
    },
    {
      id: 4,
      title: "Tax support",
      description:
        "Simplify tax filing and management with professional assistance.",
      Icon: TaxSupport,
      bgColor: "bg-[#9DEFEB]",
      path: "tax-support",
    },
    {
      id: 5,
      title: "Notary services",
      description: "Get important documents notarized quickly and securely.",
      Icon: NotaryServices,
      bgColor: "bg-[#F1AAF2]",
      path: "notary-services",
    },
    {
      id: 7,
      title: "Retirement planning",
      description:
        "Plan for a great retirement with evaluations and actionable insights.",
      Icon: RetirementPlanning,
      bgColor: "bg-[#F2BBAA]",
      path: "retirement-planning",
    },
  ],
};

export default ProfessionalServiceContent;
