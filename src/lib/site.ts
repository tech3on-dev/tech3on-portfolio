/**
 * Central site configuration. Update these values (especially `url`,
 * social links and contact details) before deploying to production.
 */
export const siteConfig = {
  name: "TECH3ON",
  shortName: "TECH3ON",
  tagline: "Building Scalable Software, Cloud Solutions & AI-Powered Products",
  description:
    "TECH3ON delivers AI/ML solutions, cloud modernization (AWS & Azure), Python engineering, full-stack product development, and DevOps for startups and enterprises worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tech3on.com",
  ogImage: "/opengraph-image",
  email: "hello@tech3on.com",
  phone: "+1 (555) 010-2030",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/tech3on/consultation",
  locations: ["United States", "EMEA", "APAC", "Middle East"],
  social: {
    linkedin: "https://www.linkedin.com/company/tech3on",
    github: "https://github.com/tech3on",
    twitter: "https://x.com/tech3on",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Technology", href: "#technology" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
