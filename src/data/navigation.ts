// Navigation Content
import type { NavigationLink } from "../types";

export const navigationLinks: NavigationLink[] = [
  { label: "Tests", href: "/tests" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Home Collection", href: "/home-collection" },
  { label: "Contact", href: "/contact" },
];

export const navigation = {
  links: navigationLinks,
};