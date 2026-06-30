"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built to scale your business"
          description="From product engineering to AI and cloud modernization, we deliver end-to-end solutions tailored to your goals."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="inline-grid size-14 place-items-center rounded-2xl bg-accent-gradient bg-[length:200%_200%] text-white shadow-lg shadow-primary/25 transition-all duration-500 group-hover:bg-[position:100%_50%]">
                    <Icon className="size-7" />
                  </span>

                  <h3 className="mt-6 font-heading text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
