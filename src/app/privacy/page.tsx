import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 14, 2026">
      <p>
        This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses and safeguards
        your information when you visit our website or engage our services. This
        is a template and should be reviewed by legal counsel before launch.
      </p>

      <section>
        <h2>Information We Collect</h2>
        <p>
          We collect information you voluntarily provide through our contact
          forms, including your name, company, email address, phone number and
          project details. We also collect standard analytics data such as
          browser type, pages visited and referral source.
        </p>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries and provide requested services</li>
          <li>To improve our website, services and customer experience</li>
          <li>To send relevant communications where you have consented</li>
          <li>To comply with legal and regulatory obligations</li>
        </ul>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We implement industry-standard technical and organizational measures
          aligned with SOC 2, ISO 27001 and GDPR principles to protect your
          information against unauthorized access, alteration or disclosure.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct, delete or restrict the processing of your personal data. To
          exercise these rights, contact us at {siteConfig.email}.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be directed to {siteConfig.email}.
        </p>
      </section>
    </LegalPage>
  );
}
