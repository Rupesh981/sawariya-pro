import * as React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, FileDown, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { footerContent } from "@/data/footer";
import { navigation } from "@/data/navigation";

export function Footer() {
  const { description, quickLinks, services, contact } = footerContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 lg:py-20 bg-foreground text-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-teal/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent-teal rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-background">Sawariya Diagnostic</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              {description}
            </p>

            {/* Download Report Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-accent-teal hover:bg-accent-teal/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Download Report
            </a>

            {/* Social/Contact Quick Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-accent-teal transition-colors"
              >
                <Phone className="w-4 h-4" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-accent-teal transition-colors"
              >
                <Mail className="w-4 h-4" />
                {contact.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-background mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-background mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background">
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="hover:text-accent-teal transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </p>
                  <p className="text-xs text-background/60">24/7 Support Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                <p className="text-sm text-background">{contact.email}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                <p className="text-sm text-background/70">
                  <a
                    href={contact.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-teal transition-colors"
                  >
                    {contact.address}
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background">Mon - Sat: {contact.businessHours.mondayToSaturday}</p>
                  <p className="text-sm text-background/70">Sun: {contact.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {currentYear} Sawariya Diagnostic. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}