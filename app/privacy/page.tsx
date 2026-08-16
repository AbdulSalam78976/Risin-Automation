import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Risin Automation",
  description: "How Risin Automation collects, uses and protects information submitted through this site.",
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <p>
        <strong>Risin Automation</strong> (&ldquo;Risin,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;
        or &ldquo;our&rdquo;) is a multi-discipline EPCM systems integrator based in Islamabad,
        Pakistan. This Privacy Policy explains how we collect, use, disclose and safeguard
        information when you visit this website or submit a project inquiry to us. By using this
        site, you agree to the practices described below.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: (
      <>
        <p>When you submit a Request for Quote or project brief, we collect:</p>
        <ul>
          <li><strong>Contact details</strong> — full name, company and work email.</li>
          <li><strong>Project information</strong> — discipline of interest and project brief or scope description.</li>
        </ul>
        <p>
          We do not collect payment information through this site, and we do not use advertising
          or third-party tracking cookies.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    body: (
      <ul>
        <li>Route your inquiry to the relevant discipline lead (Smart Entrance, Solar, Power Infrastructure or Traffic &amp; Road Safety)</li>
        <li>Prepare a scope outline and follow up by phone or email</li>
        <li>Maintain a record of past correspondence for ongoing projects</li>
        <li>Comply with applicable legal obligations</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "4. How We Share Your Information",
    body: (
      <>
        <p>We do not sell or rent your information. We may share it with:</p>
        <ul>
          <li>The internal discipline team best placed to respond to your inquiry</li>
          <li>Service providers who support our operations (e.g. hosting), under confidentiality obligations</li>
          <li>Authorities, where required to comply with applicable law</li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "5. Data Retention",
    body: (
      <p>
        Inquiry records are retained for as long as reasonably necessary to respond to your
        request and, for active or completed projects, for the duration of the engagement plus a
        reasonable period for record-keeping. Records are deleted when no longer needed.
      </p>
    ),
  },
  {
    id: "security",
    title: "6. Data Security",
    body: (
      <p>
        We apply reasonable administrative and technical safeguards to protect information
        against unauthorized access, alteration or disclosure. No method of transmission or
        storage is completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of any information you&apos;ve
        submitted to us at any time by emailing{" "}
        <a href="mailto:projects@risinautomation.com">projects@risinautomation.com</a>.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "8. Third-Party Links",
    body: (
      <p>
        This site may link to third-party websites, including social media. We are not
        responsible for the privacy practices of those sites and encourage you to review their
        policies before providing information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date
        at the top of this page reflects the most recent revision.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact",
    body: (
      <p>
        Questions about this policy can be directed to Risin Automation, Office # 01, 1st Floor,
        Kashmir Mention Plaza, Commercial Area, Pakistan Town, Islamabad, by phone at
        0332-5919059 / 0345-3164250, or by email at{" "}
        <a href="mailto:projects@risinautomation.com">projects@risinautomation.com</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How Risin Automation collects, uses and protects information submitted through this website."
      updated="16 August 2026"
      sections={sections}
    />
  );
}
