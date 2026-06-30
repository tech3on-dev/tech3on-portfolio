"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import { caseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="section-padding relative overflow-hidden bg-card/30"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real outcomes for real businesses"
          description="A look at how we turn complex challenges into measurable business results."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Result banner */}
              <div className="relative overflow-hidden bg-accent-gradient bg-[length:200%_200%] p-6 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="relative">
                  <Badge variant="glass" className="border-white/25 text-white">
                    {study.industry}
                  </Badge>
                  <p className="mt-4 font-heading text-2xl font-bold leading-tight">
                    {study.result}
                  </p>
                </div>
                <ArrowUpRight className="absolute right-5 top-5 size-6 opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-semibold">
                  {study.title}
                </h3>

                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="flex items-center gap-2 font-semibold text-foreground">
                      <Target className="size-4 text-primary" />
                      Challenge
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      {study.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 font-semibold text-foreground">
                      <Lightbulb className="size-4 text-primary" />
                      Solution
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      {study.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 font-semibold text-foreground">
                      <TrendingUp className="size-4 text-primary" />
                      Outcomes
                    </dt>
                    <dd className="mt-2">
                      <ul className="space-y-1.5">
                        {study.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
