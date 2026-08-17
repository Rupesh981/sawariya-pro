// Hero Content
import type { TrustIndicator } from "../types";
import { Clock, Shield, Users, MapPin } from "lucide-react";

export const heroTrustIndicators: TrustIndicator[] = [
  {
    icon: Clock,
    title: "Same Day",
    subtitle: "Reports",
    color: "accent-emerald",
  },
  {
    icon: Shield,
    title: "100% Accurate",
    subtitle: "Results",
    color: "accent-blue",
  },
  {
    icon: Users,
    title: "24/7 Support",
    subtitle: "Available",
    color: "accent-purple",
  },
  {
    icon: MapPin,
    title: "Home Collection",
    subtitle: "Across City",
    color: "accent-teal",
  },
];

export const heroContent = {
  trustIndicators: heroTrustIndicators,
};