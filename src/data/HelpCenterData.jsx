import GettingStarted from "../assets/icons/helpcentericons/GettingStarted";
import ChoosingProviders from "../assets/icons/helpcentericons/ChoosingProviders";
import ServiceDetail from "../assets/icons/helpcentericons/ServiceDetails";
import ProviderInteraction from "../assets/icons/helpcentericons/ProviderInteraction";
import BookingServices from "../assets/icons/helpcentericons/BookingServices";
import PaymentsFees from "../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../assets/icons/helpcentericons/TrustSafety";
import FindingHelp from "../assets/icons/helpcentericons/FindingHelp";
import LegalCompliance from "../assets/icons/helpcentericons/LegalCompliance";
import ServiceListing from "../assets/icons/helpcentericons/ServiceListing";
import MarketingVisibility from "../assets/icons/helpcentericons/MarketingVisibility";
import SupportResources from "../assets/icons/helpcentericons/SupportResources";
import ClientInteraction from "../assets/icons/helpcentericons/ClientInteraction";
// Families data
const HelpCenterData = [
  {
    id: 1,
    name: "Getting started",
    description:
      "Learn how to easily sign up, explore, and find the right care for your loved ones.",
    Icon: GettingStarted,
    link: "/help-center/family/getting-started"
  },
  {
    id: 2,
    name: "Finding help",
    description:
      "Discover how to search and filter services to match your specific needs.",
    Icon: FindingHelp,
    link: "/help-center/family/finding-help"
  },
  {
    id: 3,
    name: "Choosing providers",
    description:
      "Tips on selecting the right providers and viewing qualifications.",
    Icon: ChoosingProviders,
    link: "/help-center/family/choosing-providers"
  },
  {
    id: 4,
    name: "Service details",
    description:
      "Understand the services offered, such as specialized care, home mods, etc.",
    Icon: ServiceDetail,
    link: "/help-center/family/service-details"
  },
  {
    id: 5,
    name: "Provider interaction",
    description: "Learn how to contact service providers and stay informed.",
    Icon: ProviderInteraction,
    link: "/help-center/family/provider-interaction"
  },
  {
    id: 6,
    name: "Booking service",
    description: "Find out how to easily request and book service providers.",
    Icon: BookingServices,
    link: "/help-center/family/booking-service"
  },
  {
    id: 7,
    name: "Payments & fees",
    description: "Learn how to pay for services and understand membership.",
    Icon: PaymentsFees,
    link: "/help-center/family/payments-fees"
  },
  {
    id: 8,
    name: "Account & profile",
    description: "Manage account settings and update profiles for loved ones.",
    Icon: AccountProfile,
    link: "/help-center/family/account-profile"
  },
  {
    id: 9,
    name: "Trust & safety",
    description:
      "Learn about the safety and quality of providers on the platform.",
    Icon: TrustSafety,
    link: "/help-center/family/trust-safety"
  },
];

// Partners data
const HelpCenterDataPartner = [
  {
    id: 10,
    name: "Getting started",
    description:
      "Learn how to join and start offering your services to families in need",
    Icon: GettingStarted,
    link: "/help-center/partner/getting-started"
  },
  {
    id: 11,
    name: "Account & profile",
    description:
      "Set up, manage, and update your profile, and keep your account safe",
    Icon: AccountProfile,
    link: "/help-center/partner/account-profile"
  },
  {
    id: 12,
    name: "Service listings",
    description:
      "Manage, and promote the services you offer to reach the right clients",
    Icon: ServiceListing,
    link: "/help-center/partner/service-listings"
  },
  {
    id: 13,
    name: "Client interaction",
    description:
      "Learn to connect with families, handle inquiries, and manage bookings.",
    Icon: ClientInteraction,
    link: "/help-center/partner/client-interaction"
  },
  {
    id: 14,
    name: "Payments & fees",
    description:
      "Learn about the fees to join, and how you get paid for services rendered",
    Icon: PaymentsFees,
    link: "/help-center/partner/payments-fees"
  },
  {
    id: 15,
    name: "Trust & safety",
    description:
      "Learn about credentialing process and safety measures in place",
    Icon: TrustSafety,
    link: "/help-center/partner/trust-safety"
  },
  {
    id: 16,
    name: "Marketing & visibility",
    description:
      "Discover how to boost your visibility and attract more clients",
    Icon: MarketingVisibility,
    link: "/help-center/partner/marketing-visibility"
  },
  {
    id: 17,
    name: "Support & resources",
    description: "Access helpful resources and support to grow your business",
    Icon: SupportResources,
    link: "/help-center/partner/support-resources"
  },
  {
    id: 18,
    name: "Legal & compliance",
    description:
      "Learn about legal and compliance requirements to provide services",
    Icon: LegalCompliance,
    link: "/help-center/partner/legal-compliance"
  },
];

export { HelpCenterData, HelpCenterDataPartner };
