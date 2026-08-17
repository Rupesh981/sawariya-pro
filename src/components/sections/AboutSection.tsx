import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Microscope, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  const { journeySteps, features } = aboutContent;

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-background"
      aria-label="About section"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-accent-emerald/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-accent-emerald">Why Choose Us</span>
          </div>

          <h2 className="section-title">
            Your Path to Better Health
          </h2>

          <p className="section-subtitle">
            Simple, convenient, and reliable diagnostic services right at your doorstep
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-border" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 mx-auto mb-4">
                  <div className={cn(
                    "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center relative",
                    `bg-${step.color}/10`
                  )}>
                    <step.icon className={cn("w-8 h-8", `text-${step.color}`)} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden sm:block lg:hidden absolute top-8 -right-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
                  </div>
                )}

                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features & NABL Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-accent-teal/5 to-accent-blue/5 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Committed to Excellence in Diagnostics
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Sawariya Diagnostic, we combine cutting-edge technology with
                compassionate care to deliver accurate results you can trust.
                Our team of experienced professionals ensures every test is
                performed with precision and care.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-accent-teal rounded-full flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-foreground">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-accent-teal/10 rounded-full flex items-center justify-center">
                    <Microscope className="w-12 h-12 text-accent-teal" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">NABL Certified</h4>
                  <p className="text-sm text-muted-foreground">
                    Quality assurance at every step
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-accent-teal">99.9%</p>
                      <p className="text-xs text-muted-foreground">Accuracy Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent-emerald">24/7</p>
                      <p className="text-xs text-muted-foreground">Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-xl shadow-md px-4 py-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm font-semibold text-foreground">ISO Certified</p>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-md px-4 py-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <p className="text-sm font-semibold text-foreground">10+ Years</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Want to learn more about our journey and commitment to quality?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="btn-outline h-14 px-8 text-base"
            asChild
          >
            <Link to="/about">Read Our Full Story <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}