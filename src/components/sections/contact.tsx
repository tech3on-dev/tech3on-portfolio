import Link from "next/link";
import { CalendarClock, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-card/30"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-20 top-10 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-wide">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's build something exceptional"
          description="Tell us about your project and we'll get back to you within one business day. Prefer to talk? Book a consultation directly."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: contact channels + Calendly */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-heading text-lg font-semibold">
                Book a consultation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Schedule a free 30-minute discovery call with our engineering
                leadership.
              </p>
              {/* Calendly integration placeholder — replace href in src/lib/site.ts */}
              <Button asChild className="mt-5 w-full">
                <Link
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarClock className="size-5" />
                  Schedule via Calendly
                </Link>
              </Button>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Email us</span>
                  <span className="block text-sm text-muted-foreground">
                    {siteConfig.email}
                  </span>
                </span>
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Linkedin className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    Connect on LinkedIn
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    Follow TECH3ON for insights
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    Global delivery
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {siteConfig.locations.join(" · ")}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
