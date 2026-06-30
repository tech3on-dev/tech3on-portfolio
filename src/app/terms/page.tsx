import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions governing the use of ${siteConfig.name}'s website and services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="June 14, 2026">
      <p>
        These Terms of Service govern your use of the {siteConfig.name} website
        and services. By accessing our website or engaging our services, you
        agree to these terms. This is a template and should be reviewed by legal
        counsel before launch.
      </p>

      <section>
        <h2>Services</h2>
        <p>
          {siteConfig.name} provides software engineering, AI/ML, cloud and
          DevOps consulting services. The specific scope, deliverables and fees
          for any engagement are defined in a separate written agreement or
          statement of work.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All content on this website is the property of {siteConfig.name} unless
          otherwise stated. Ownership of work product delivered under an
          engagement is governed by the applicable statement of work.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.name} shall not be
          liable for any indirect, incidental or consequential damages arising
          from the use of this website or our services.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the applicable jurisdiction
          specified in your engagement agreement.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>For questions regarding these terms, contact {siteConfig.email}.</p>
      </section>
    </LegalPage>
  );
}
