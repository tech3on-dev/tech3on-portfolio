"use client";

import { motion } from "framer-motion";
import { techExpertise } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export function Technology() {
  return (
    <section id="technology" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Technology Expertise"
          title="A modern, battle-tested stack"
          description="We work across the full spectrum of modern technologies — choosing the right tool for each job, not the trendiest."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techExpertise.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card className="h-full p-7 transition-colors hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold">
                      {group.category}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
