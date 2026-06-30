"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How We Work"
          title="A proven delivery process"
          description="A transparent, milestone-driven workflow that de-risks delivery from first conversation to long-term support."
        />

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 grid size-14 place-items-center rounded-2xl border border-border bg-card text-primary shadow-sm">
                    <Icon className="size-6" />
                    <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-accent-gradient text-[11px] font-bold text-white shadow">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
