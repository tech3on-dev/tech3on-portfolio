"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Sparkles,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroStats } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const floatingIcons = [
  { Icon: Cloud, className: "left-[6%] top-[22%]", delay: 0 },
  { Icon: Cpu, className: "right-[8%] top-[18%]", delay: 1.2 },
  { Icon: Bot, className: "left-[12%] bottom-[26%]", delay: 0.6 },
  { Icon: Database, className: "right-[12%] bottom-[30%]", delay: 1.8 },
  { Icon: GitBranch, className: "left-[44%] top-[10%]", delay: 2.2 },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 bg-hero-grid bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_50%,transparent_100%)] opacity-50" />
        {/* Aurora blobs */}
        <div className="absolute -left-32 top-10 size-[34rem] animate-float-slow rounded-full bg-azure/20 blur-3xl dark:bg-azure/25" />
        <div className="absolute right-0 top-1/3 size-[30rem] animate-float rounded-full bg-violet-500/20 blur-3xl animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 size-[26rem] animate-float-slow rounded-full bg-sky-400/20 blur-3xl animation-delay-4000" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute hidden lg:block ${className}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -16, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: delay * 0.2 },
            scale: { duration: 0.8, delay: delay * 0.2 },
            y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-primary shadow-xl backdrop-blur-md">
            <Icon className="size-6" />
          </span>
        </motion.div>
      ))}

      <div className="container-wide">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="glass" className="mx-auto gap-2 px-4 py-1.5">
              <Sparkles className="size-3.5 text-primary" />
              AI, Cloud & Full-Stack Engineering for Modern Businesses
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Transforming Ideas into{" "}
            <span className="text-gradient animate-gradient-pan">
              Scalable Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            We help startups and enterprises build software products, AI
            solutions, and cloud-native platforms that drive business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                <CalendarCheck className="size-5" />
                Schedule a Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="#services">
                View Our Services
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-5 text-xs text-muted-foreground"
          >
            Global delivery across {siteConfig.locations.join(" · ")}
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/70 px-6 py-8 text-center backdrop-blur"
            >
              <div className="font-heading text-3xl font-bold text-gradient sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
