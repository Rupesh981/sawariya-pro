// About Content
import type { JourneyStep, Feature, AboutContent } from "../types";
import { CalendarCheck, Home, Microscope, FileCheck } from "lucide-react";

export const aboutJourneySteps: JourneyStep[] = [
  {
    icon: CalendarCheck,
    title: "Book Online",
    description: "Schedule your test online or call us anytime",
    color: "accent-teal",
  },
  {
    icon: Home,
    title: "Sample Collection",
    description: "Our trained phlebotomist visits your home",
    color: "accent-blue",
  },
  {
    icon: Microscope,
    title: "Lab Analysis",
    description: "Samples processed in our NABL certified lab",
    color: "accent-emerald",
  },
  {
    icon: FileCheck,
    title: "Get Reports",
    description: "Receive results on WhatsApp & Email",
    color: "accent-purple",
  },
];

export const aboutFeatures: Feature[] = [
  { label: "State-of-the-art equipment" },
  { label: "Experienced pathologists" },
  { label: "Quick turnaround time" },
  { label: "Affordable pricing" },
  { label: "Home sample collection" },
  { label: "Digital reports" },
  { label: "NABL Accredited" },
  { label: "Hygienic sample collection" },
];

export const aboutContent: AboutContent = {
  journeySteps: aboutJourneySteps,
  features: aboutFeatures,
};