// Contact Content
import type { ContactInfo, ContactSectionContent } from "../types";
import { FileCheck, Home, Clock } from "lucide-react";

export const contactInfo: ContactInfo = {
  address: "Opposite R.S. Sangwan Hospital, Loharu Road, Charkhi Dadri, Haryana 127306",
  phone: "+91 7015290782",
  whatsapp: "+91 7015290782",
  email: "contact@sawariyadiagnostic.com",
  mapsLink: "https://maps.google.com/?q=Sawariya+Diagnostic+Charkhi+Dadri",
  businessHours: {
    mondayToSaturday: "8:00 AM - 6:00 PM",
    sunday: "Closed",
  },
};

export const contactSectionInfoCards = [
  {
    icon: FileCheck,
    title: "Choose Your Tests",
    description: "Select from our comprehensive test menu or health packages",
    color: "accent-teal" as const,
  },
  {
    icon: Home,
    title: "Home or Lab Visit",
    description: "Get sample collected at home or visit our nearest center",
    color: "accent-blue" as const,
  },
  {
    icon: Clock,
    title: "Quick Reports",
    description: "Receive accurate reports within 6-24 hours on WhatsApp",
    color: "accent-emerald" as const,
  },
];

export const contactSectionContent: ContactSectionContent = {
  infoCards: contactSectionInfoCards,
};