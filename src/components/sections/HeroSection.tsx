import * as React from "react";
import { Link } from "react-router-dom";
import { Search, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { heroContent } from "@/data/hero";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/tests?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[hsl(174,75%,95%)] via-white to-[hsl(199,89%,95%)]"
      aria-label="Hero section"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-emerald/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 lg:pt-40 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-accent-teal/10 px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="w-4 h-4 text-accent-teal" />
                <span className="text-sm font-medium text-accent-teal">NABL Accredited Lab</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Your Health,
                <br />
                <span className="text-accent-teal">Our Priority</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Accurate diagnostics with state-of-the-art technology.
                Get lab-quality tests from the comfort of your home.
              </motion.p>

              {/* Search Bar */}
              <motion.form
                onSubmit={handleSearch}
                className="relative max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                <Input
                  type="text"
                  placeholder="Search for Vitamin D, CBC, Thyroid..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-14 rounded-full border-2 border-border focus:border-accent-teal bg-white text-base"
                />
              </motion.form>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="btn-primary h-14 px-8 text-base"
                  onClick={() => scrollToSection("#home-collection")}
                >
                  Book Home Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-outline h-14 px-8 text-base"
                  onClick={() => scrollToSection("#tests")}
                >
                  View Health Packages
                </Button>
              </motion.div>

              {/* Trust Indicators - Data Driven */}
              <motion.div
                className="flex flex-wrap gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {heroContent.trustIndicators.map((indicator) => (
                  <motion.div
                    key={indicator.title}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + heroContent.trustIndicators.indexOf(indicator) * 0.1 }}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      `bg-${indicator.color}/10`
                    )}>
                      <indicator.icon className={cn("w-5 h-5", `text-${indicator.color}`)} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{indicator.title}</p>
                      <p className="text-xs text-muted-foreground">{indicator.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Main Visual Card */}
                <div className="w-[400px] h-[500px] sm:w-[450px] sm:h-[550px] bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 w-20 h-20 bg-white/80 rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-accent-teal/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl" aria-hidden="true">🧪</span>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/80 rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="w-14 h-14 bg-accent-emerald/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl" aria-hidden="true">💉</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-5xl" aria-hidden="true">🏥</span>
                      <p className="text-sm font-semibold text-foreground mt-2">Trusted Care</p>
                    </div>
                  </div>

                  {/* Floating Stats */}
                  <motion.div
                    className="absolute -left-4 top-1/3 bg-white rounded-xl shadow-lg px-4 py-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p className="text-2xl font-bold text-accent-teal">50K+</p>
                    <p className="text-xs text-muted-foreground">Tests Done</p>
                  </motion.div>

                  <motion.div
                    className="absolute -right-4 bottom-1/3 bg-white rounded-xl shadow-lg px-4 py-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <p className="text-2xl font-bold text-accent-emerald">5+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <ArrowRight className="w-5 h-5" />
      </motion.div>
    </section>
  );
}