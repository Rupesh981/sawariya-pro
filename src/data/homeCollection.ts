// Home Collection Content
import type { HomeCollectionBenefit, FAQItem, HomeCollectionContent } from "../types";
import { Shield, CheckCircle, Clock } from "lucide-react";

export const homeCollectionBenefits: HomeCollectionBenefit[] = [
  {
    icon: Shield,
    title: "NABL Accredited Labs",
    description: "Quality assurance you can trust",
  },
  {
    icon: CheckCircle,
    title: "Vaccinated Phlebotomists",
    description: "Safe and trained professionals",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We respect your schedule",
  },
];

export const homeCollectionFAQ: FAQItem[] = [
  {
    question: "How does home collection work?",
    answer:
      "Once you book a slot, our certified phlebotomist will arrive at your scheduled time, collect samples following strict hygiene protocols, and transport them to our lab for analysis.",
  },
  {
    question: "Is home collection safe?",
    answer:
      "Yes, we follow all WHO and ICMR guidelines for sample collection. Our staff uses PPE, sterile equipment, and maintains proper temperature control during transport.",
  },
  {
    question: "What are the charges for home collection?",
    answer:
      "Home collection service is free within Charkhi Dadri city limits. For areas outside the city, a nominal charge may apply based on distance.",
  },
  {
    question: "How long does it take to get reports?",
    answer:
      "Most routine tests are available within 6-24 hours. Specialized tests may take longer, and you will be informed at the time of sample collection.",
  },
  {
    question: "Can I book for someone else?",
    answer:
      "Yes, you can book a home collection for a family member or friend. Just provide their details during booking.",
  },
  {
    question: "What tests are available for home collection?",
    answer:
      "Most of our tests including blood tests, hormone panels, and health packages are available for home collection. Check individual test details for availability.",
  },
];

export const homeCollectionFeatures = [
  "Flexible Timing",
  "Hygienic Collection",
  "On-time Arrival",
  "Digital Reports",
  "Free Consultation",
];

export const homeCollectionContent: HomeCollectionContent = {
  title: "Home Collection Service",
  subtitle:
    "Get tested from the comfort of your home. Our trained phlebotomists ensure safe and hygienic sample collection.",
  features: homeCollectionFeatures,
  benefits: homeCollectionBenefits,
  faq: homeCollectionFAQ,
};