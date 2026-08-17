import * as React from "react";
import { motion } from "framer-motion";
import { Home, CheckCircle, Phone, User, ChevronDown } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { homeCollectionContent } from "@/data/homeCollection";

export function HomeCollectionSection() {
  const [formData, setFormData] = React.useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "" });
    }, 3000);
  };

  const { features, benefits, faq } = homeCollectionContent;

  return (
    <section
      id="home-collection"
      className="relative py-20 lg:py-28 bg-gradient-to-br from-accent-teal to-[hsl(173,84%,15%)] text-white overflow-hidden"
      aria-label="Home collection section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Home Sample Collection</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Get Tested at
              <br />
              <span className="text-white/90">Your Doorstep</span>
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Skip the waiting room. Our trained phlebotomists come to your home,
              office, or any convenient location for safe and hygienic sample collection.
            </p>

            {/* Benefits */}
            <motion.div
              className="grid sm:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: benefits.indexOf(benefit) * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <benefit.icon className="w-8 h-8 mb-3 text-white/90" />
                  <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Service Areas */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {features.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white/80" />
                  <span className="text-sm text-white/80">{area}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" padding="lg" className="shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Request a Callback
              </h3>
              <p className="text-white/70 mb-6">
                Leave your details and we'll call you within 30 minutes
              </p>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent-emerald/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-accent-emerald" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-white/70">
                    We'll call you within 30 minutes.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-white/90 mb-2 block">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-12 h-12 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-accent-emerald focus:ring-2 focus:ring-accent-emerald/20"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/90 mb-2 block">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-12 h-12 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-accent-emerald focus:ring-2 focus:ring-accent-emerald/20"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-base font-semibold bg-white text-accent-teal hover:bg-white/90"
                  >
                    {isSubmitting ? "Submitting..." : "Call Me Back"}
                  </Button>

                  <p className="text-xs text-center text-white/50">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-accent-emerald hover:underline">
                      Terms & Conditions
                    </a>
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h3>

          <div className="max-w-3xl mx-auto space-y-3">
            {faq.map((item, index) => (
              <Accordion key={index} type="single" className="w-full">
                <AccordionItem value={index.toString()}>
                  <AccordionTrigger className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-xl px-6 py-4 text-left font-medium transition-colors">
                    {item.question}
                    <ChevronDown className="w-5 h-5 ml-auto text-white/70" aria-hidden="true" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-white/5 backdrop-blur-sm text-white/90 rounded-xl px-6 pb-4 pt-2 text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}