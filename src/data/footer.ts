// Footer Content
import type { FooterContent } from "../types";
import { navigationLinks } from "./navigation";
import { contactInfo } from "./contact";

export const footerContent: FooterContent = {
  description:
    "Sawariya Diagnostic is a premier pathology lab in Charkhi Dadri, committed to providing accurate and timely diagnostic services.",
  quickLinks: navigationLinks,
  services: [
    { label: "Blood Testing", href: "/tests" },
    { label: "Thyroid Profile", href: "/tests" },
    { label: "Lipid Profile", href: "/tests" },
    { label: "Diabetes Screening", href: "/tests" },
    { label: "Home Collection", href: "/home-collection" },
    { label: "Online Reporting", href: "/contact" },
  ],
  contact: contactInfo,
};