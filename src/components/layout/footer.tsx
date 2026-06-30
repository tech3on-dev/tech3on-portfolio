import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/logo";

const footerColumns: { title: string; links: { label: string; href: string }[] }[] =
  [
    {
      title: "Services",
      links: [
        { label: "Full Stack Development", href: "#services" },
        { label: "AI & Machine Learning", href: "#services" },
        { label: "Cloud Engineering", href: "#services" },
        { label: "DevOps Services", href: "#services" },
        { label: "Python Development", href: "#services" },
      ],
    },
    {
      title: "Technologies",
      links: [
        { label: "AWS & Azure", href: "#technology" },
        { label: "Kubernetes & Docker", href: "#technology" },
        { label: "OpenAI & LangChain", href: "#technology" },
        { label: "React & Next.js", href: "#technology" },
        { label: "Python & FastAPI", href: "#technology" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "SaaS & Startups", href: "#case-studies" },
        { label: "Fintech", href: "#case-studies" },
        { label: "Enterprise IT", href: "#case-studies" },
        { label: "Business Intelligence", href: "#case-studies" },
        { label: "Customer Service", href: "#case-studies" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Case Studies", href: "#case-studies" },
        { label: "Our Process", href: "#process" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

// X / Twitter glyph (not available in lucide as a brand mark)
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand column */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-primary" />
                {siteConfig.phone}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-primary" />
                <span>{siteConfig.locations.join(" · ")}</span>
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="size-4" />
              </Link>
              <Link
                href={siteConfig.social.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="size-4" />
              </Link>
              <Link
                href={siteConfig.social.twitter}
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <XIcon className="size-4" />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
