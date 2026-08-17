import * as React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { teamContent } from "@/data/team";

export function TeamSection() {
  const teamMembers = teamContent.members;

  return (
    <section
      id="team"
      className="relative py-20 lg:py-28 bg-background"
      aria-label="Team section"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-accent-purple/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-accent-purple" />
            <span className="text-sm font-medium text-accent-purple">Our Experts</span>
          </div>

          <h2 className="section-title">
            Meet Our Medical Team
          </h2>

          <p className="section-subtitle">
            Experienced professionals dedicated to accurate diagnostics and patient care
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <Card variant="glass" hover padding="md">
                {/* Photo */}
                <div className="relative mb-4 mx-auto">
                  <Avatar
                    src={member.image}
                    alt={member.alt}
                    fallback={member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    size="2xl"
                    shape="circle"
                    className="ring-4 ring-background group-hover:ring-accent-teal/50 transition-all duration-300"
                  />
                </div>

                {/* Info */}
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-teal font-medium text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground mb-3 bg-secondary/50 inline-block px-3 py-1 rounded-full">
                  {member.qualification}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Our team is here to provide you with the highest quality diagnostic care.
            Schedule an appointment today.
          </p>
          <a
            href="/contact"
            className="btn-primary h-12 px-8 text-base inline-flex"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}