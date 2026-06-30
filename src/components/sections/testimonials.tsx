"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const paginate = React.useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  React.useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [paginate]);

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden bg-card/30"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by founders and technology leaders"
          description="Hear from the teams we've partnered with to build, scale and modernize their products."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[20rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="gradient-border rounded-3xl bg-card p-8 sm:p-10"
              >
                <Quote className="size-9 text-primary/30" />
                <blockquote className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">
                  “{active.review}”
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-heading font-semibold">
                      {active.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {active.role}, {active.company}
                    </div>
                    <div
                      className="mt-1 flex gap-0.5"
                      aria-label={`${active.rating} out of 5 stars`}
                    >
                      {Array.from({ length: active.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => paginate(-1)}
              className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-7 bg-accent-gradient"
                      : "w-2 bg-border hover:bg-primary/40",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => paginate(1)}
              className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
