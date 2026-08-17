// Core type definitions for Sawariya Diagnostic

import type { LucideIcon } from "lucide-react";

// Navigation
export interface NavigationLink {
  label: string;
  href: string;
}

// Trust Indicators
export interface TrustIndicator {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: "accent-teal" | "accent-blue" | "accent-emerald" | "accent-purple" | "accent-orange";
}

// Journey Steps
export interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "accent-teal" | "accent-blue" | "accent-emerald" | "accent-purple" | "accent-orange";
}

// Features
export interface Feature {
  label: string;
  icon?: LucideIcon;
}

// Team Members
export interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  image: string;
  alt: string;
}

// Services
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "accent-teal" | "accent-blue" | "accent-emerald" | "accent-purple" | "accent-orange" | "accent-pink" | "accent-violet";
}

// Home Collection
export interface HomeCollectionBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HomeCollectionContent {
  title: string;
  subtitle: string;
  features: string[];
  benefits: HomeCollectionBenefit[];
  faq: FAQItem[];
}

// Medical Tests
export type TestCategory = "blood" | "hormone" | "specialized" | "package";

export interface MedicalTest {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  turnaroundTime: string;
  category: TestCategory;
  parameters?: string[];
  homeCollection: boolean;
  popular?: boolean;
}

export interface HealthPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  testsIncluded: string[];
  recommended: boolean;
}

export interface TestCategoryItem {
  id: TestCategory | "all";
  name: string;
}

// Contact
export interface BusinessHours {
  mondayToSaturday: string;
  sunday: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapsLink: string;
  businessHours: BusinessHours;
}

// Testimonials
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  alt: string;
}

// Footer
export interface FooterContent {
  description: string;
  quickLinks: NavigationLink[];
  services: NavigationLink[];
  contact: ContactInfo;
}

// Hero
export interface HeroContent {
  trustIndicators: TrustIndicator[];
}

// About
export interface AboutContent {
  journeySteps: JourneyStep[];
  features: Feature[];
}

// Team
export interface TeamContent {
  members: TeamMember[];
}

// Services
export interface ServicesContent {
  list: Service[];
}

// Contact Section
export interface ContactSectionContent {
  infoCards: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    color: "accent-teal" | "accent-blue" | "accent-emerald" | "accent-purple" | "accent-orange";
  }>;
}

// Global Content
export interface SiteContent {
  navigation: { links: NavigationLink[] };
  hero: HeroContent;
  about: AboutContent;
  team: TeamContent;
  services: ServicesContent;
  homeCollection: HomeCollectionContent;
  contact: ContactInfo;
  contactSection: ContactSectionContent;
  footer: FooterContent;
  testimonials: Testimonial[];
}