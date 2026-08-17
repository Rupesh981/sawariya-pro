// Services Content
import type { Service, ServicesContent } from "../types";
import { Microscope, FileCheck } from "lucide-react";

export const servicesList: Service[] = [
  {
    title: "Pathology",
    description: "Comprehensive blood & body fluid analysis",
    icon: Microscope,
    color: "accent-teal",
  },
  {
    title: "Microbiology",
    description: "Advanced testing for infectious diseases",
    icon: Microscope,
    color: "accent-blue",
  },
  {
    title: "Biochemistry",
    description: "Liver, Kidney & specialized metabolic tests",
    icon: FileCheck,
    color: "accent-emerald",
  },
  {
    title: "Hematology",
    description: "Complete blood count and blood disorders",
    icon: FileCheck,
    color: "accent-purple",
  },
  {
    title: "Histopathology",
    description: "Tissue biopsy and cancer screening",
    icon: Microscope,
    color: "accent-violet",
  },
  {
    title: "Serology",
    description: "Antibody and antigen testing for infections",
    icon: FileCheck,
    color: "accent-pink",
  },
];

export const servicesContent: ServicesContent = {
  list: servicesList,
};