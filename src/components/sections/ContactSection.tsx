import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, FileCheck, Home, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { contactInfo, contactSectionContent } from "@/data/contact";

export function ContactSection() {
  const [showCalendar, setShowCalendar] = React.useState(false);

  const { infoCards } = contactSectionContent;
  const { address, phone, whatsapp, email, mapsLink, businessHours } = contactInfo;

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-secondary/30"
      aria-label="Contact section"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-accent-teal/10 px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-accent-teal" />
            <span className="text-sm font-medium text-accent-teal">Book Appointment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Schedule Your Test Today
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a convenient time slot and we'll handle the rest
          </p>
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-background rounded-3xl overflow-hidden shadow-lg border border-border min-h-[400px]">
            {/* Widget Header */}
            <div className="bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 px-8 py-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Sawariya Diagnostic - Book Appointment
                  </h3>
                  <p className="text-muted-foreground">
                    30 minutes • Video or Phone Call • Free consultation
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground font-medium">Available now</span>
                </div>
              </div>
            </div>

            {/* Cal.com Embed Container or Facade */}
            <div className="p-0 bg-white min-h-[500px] flex items-center justify-center">
              {!showCalendar ? (
                <motion.div
                  className="text-center p-8 space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-20 h-20 bg-accent-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-10 h-10 text-accent-teal" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Ready to Schedule?</h4>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Click below to load the interactive booking calendar.
                    Check available slots for Home Collection or Lab Visit.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-accent-teal to-accent-emerald hover:from-accent-teal/90 hover:to-accent-emerald/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-6 text-lg rounded-full"
                    onClick={() => setShowCalendar(true)}
                  >
                    View Available Slots
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "600px",
                    overflow: "scroll"
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-full h-full">
                    {/* Cal.com embed would go here */}
                    <div className="w-full h-full flex flex-col items-center justify-center p-8">
                      <Calendar className="w-16 h-16 text-accent-teal/30 mb-4" />
                      <h4 className="text-xl font-bold text-foreground mb-2">Booking Calendar</h4>
                      <p className="text-muted-foreground text-center mb-6 max-w-md">
                        In production, this would embed the Cal.com booking widget.
                        For now, please use the contact form below or call us directly.
                      </p>
                      <Button
                        size="lg"
                        variant="outline"
                        className="px-8 py-3"
                        onClick={() => setShowCalendar(false)}
                      >
                        Back to Contact Options
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {infoCards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: infoCards.indexOf(card) * 0.1 }}
            >
              <Card variant="glass" hover padding="lg" className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-accent-teal/10">
                  <card.icon className="w-7 h-7 text-accent-teal" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{card.title}</h4>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Phone */}
          <Card variant="glass" padding="lg" className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-teal/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-accent-teal" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Call Us</h4>
            <p className="text-sm text-muted-foreground mb-1">
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-accent-teal transition-colors">
                {phone}
              </a>
            </p>
            <p className="text-xs text-muted-foreground">24/7 Support Available</p>
          </Card>

          {/* WhatsApp */}
          <Card variant="glass" padding="lg" className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-emerald/10 flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-accent-emerald" />
            </div>
            <h4 className="font-bold text-foreground mb-2">WhatsApp</h4>
            <p className="text-sm text-muted-foreground mb-1">
              <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent-teal transition-colors">
                Chat on WhatsApp
              </a>
            </p>
            <p className="text-xs text-muted-foreground">Quick Response</p>
          </Card>

          {/* Email */}
          <Card variant="glass" padding="lg" className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-blue/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent-blue" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Email Us</h4>
            <p className="text-sm text-muted-foreground mb-1">
              <a href={`mailto:${email}`} className="hover:text-accent-teal transition-colors">
                {email}
              </a>
            </p>
            <p className="text-xs text-muted-foreground">Replies within 24h</p>
          </Card>

          {/* Location */}
          <Card variant="glass" padding="lg" className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-purple/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-accent-purple" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Visit Us</h4>
            <p className="text-sm text-muted-foreground mb-1">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent-teal transition-colors">
                Get Directions
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              Mon-Sat: {businessHours.mondayToSaturday}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}