import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — Risin Automation",
  description: "Terms governing use of the Risin Automation website and submission of project inquiries.",
};

const sections: LegalSection[] = [
  {
    id: "purpose",
    title: "1. Purpose of This Site",
    body: (
      <p>
        This website provides information about Risin Automation&apos;s EPCM capabilities across
        Smart Entrance Automation, Solar Energy, Power Infrastructure and Traffic &amp; Road
        Safety, and allows visitors to submit project inquiries. Content on this site is for
        general informational purposes and does not constitute a binding quotation or contract.
      </p>
    ),
  },
  {
    id: "quotations",
    title: "2. Quotations & Proposals",
    body: (
      <p>
        Specifications, capacities and figures referenced on this site (project counts, MW
        commissioned, uptime, etc.) are illustrative and may change between updates. Binding
        scope, pricing and delivery terms are established only through a formal, signed proposal
        or contract issued after technical review of your inquiry.
      </p>
    ),
  },
  {
    id: "ip",
    title: "3. Intellectual Property",
    body: (
      <p>
        All text, graphics, logos and imagery on this site are the property of Risin Automation
        or its licensors and may not be reproduced without permission, except for personal,
        non-commercial reference.
      </p>
    ),
  },
  {
    id: "accuracy",
    title: "4. Accuracy of Information",
    body: (
      <p>
        We make reasonable efforts to keep technical specifications and case-study figures
        current. Confirm current specifications with a discipline lead before relying on them for
        procurement decisions.
      </p>
    ),
  },
  {
    id: "liability",
    title: "5. Limitation of Liability",
    body: (
      <p>
        Risin Automation is not liable for decisions made solely on the basis of information
        published on this site. Engineering, procurement and construction commitments are
        governed exclusively by the executed project contract.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "6. Governing Law",
    body: (
      <p>
        These terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute
        arising from use of this site falls under the jurisdiction of the courts of Islamabad.
      </p>
    ),
  },
  {
    id: "contact",
    title: "7. Contact",
    body: (
      <p>
        Questions about these terms can be directed to Risin Automation, Office # 01, 1st Floor,
        Kashmir Mention Plaza, Commercial Area, Pakistan Town, Islamabad, by phone at
        0332-5919059 / 0345-3164250, or by email at{" "}
        <a href="mailto:projects@risinautomation.com">projects@risinautomation.com</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      intro="Terms governing use of the Risin Automation website and submission of project inquiries."
      updated="16 August 2026"
      sections={sections}
    />
  );
}
