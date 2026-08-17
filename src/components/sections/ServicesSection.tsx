import * as React from "react";
import { motion } from "framer-motion";
import { Microscope } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { servicesContent } from "@/data/services";

export function ServicesSection() {
  const servicesList = servicesContent.list;

  return (
    <section
      id="services"
      className="relative py-20 lg:py-28 bg-secondary/30"
      aria-label="Services section"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-accent-blue/10 px-4 py-2 rounded-full mb-6">
            <Microscope className="w-4 h-4 text-accent-blue" />
            <span className="text-sm font-medium text-accent-blue">Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Diagnostic Services
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to specialized diagnostics, we offer a complete range of laboratory services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover padding="lg">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-accent-teal/10">
                  <service.icon className="w-7 h-7 text-accent-teal" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Need a specific test or service not listed here? Contact us for custom requirements.
          </p>
          <a
            href="/contact"
            className="bg-accent-teal text-white hover:bg-accent-teal/90 active:bg-accent-teal/80 transition-colors duration-200 rounded-xl font-medium inline-flex h-12 px-8 text-base"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}