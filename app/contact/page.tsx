import type { Metadata } from "next";
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";
import { btnFilled } from "@/components/btn";

export const metadata: Metadata = {
  title: "Contact — Risin Automation",
  description:
    "Send a project brief to Risin Automation. A discipline lead responds within one business day with a scope outline and a call slot.",
};

const fieldClass =
  "w-full appearance-none border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy transition-[border-color,box-shadow] focus:border-green focus:shadow-[0_0_0_3px_rgba(40,167,69,0.12)] focus:outline-none";
const labelClass = "mb-2 block text-[12px] font-semibold text-navy";

type DetailIcon = "mail" | "phone" | "pin" | "clock";

function DetailMark({ name }: { name: DetailIcon }) {
  const p = {
    className: "h-4 w-4 shrink-0 text-green",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "mail":
      return (
        <svg {...p}>
          <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
          <path d="m3 6.5 9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...p}>
          <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...p}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5.2l3.4 2" />
        </svg>
      );
  }
}

const details: { icon: DetailIcon; label: string; value: React.ReactNode }[] = [
  {
    icon: "mail",
    label: "Email",
    value: (
      <a href="mailto:projects@risinautomation.com" className="hover:text-green">
        projects@risinautomation.com
      </a>
    ),
  },
  {
    icon: "phone",
    label: "Phone",
    value: (
      <>
        <a href="tel:+923325919059" className="hover:text-green">+92 332 5919059</a>
        {" · "}
        <a href="tel:+923453164250" className="hover:text-green">+92 345 3164250</a>
      </>
    ),
  },
  {
    icon: "pin",
    label: "Head office",
    value: "Office # 01, 1st Floor, Kashmir Mention Plaza, Commercial Area, Pakistan Town, Islamabad",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-slate py-[clamp(72px,10vh,120px)] text-navy" id="contact">
      <Wrap className="grid grid-cols-1 items-stretch gap-[clamp(40px,5vw,72px)] min-[961px]:grid-cols-[.85fr_1.15fr]">
        {/* Left: intro + reachable details, over an Islamabad backdrop */}
        <div className="relative isolate flex flex-col overflow-hidden bg-navy p-[clamp(28px,4vw,48px)] text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/islamabad.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,42,61,.72),rgba(18,42,61,.42)_45%,rgba(18,42,61,.82))]" />

          <Kick scramble>CONTACT</Kick>
          <h2 className={`lines ${sectionTitleClass} text-white`}>
            <span className="ln"><span>START WITH</span></span>
            <span className="ln"><span>A SCOPE CALL.</span></span>
          </h2>
          <p className="reveal mt-5 max-w-[440px] text-white/75">
            Send a brief — even a rough one. A discipline lead responds within one business day
            with a scope outline and a call slot.
          </p>

          <ul className="reveal mt-10 space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 bg-white/10">
                  <DetailMark name={d.icon} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50">
                    {d.label}
                  </span>
                  <span className="mt-1 block max-w-[320px] text-[14px] leading-snug text-white">
                    {d.value}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 flex items-center min-[961px]:mt-auto min-[961px]:pt-10 gap-2.5 text-[10px] uppercase tracking-[0.22em] text-white/40">
            <span className="h-1.5 w-1.5 shrink-0 bg-green" />
            Islamabad, Pakistan
          </p>
        </div>

        {/* Right: brief form */}
        <form
          id="briefForm"
          noValidate
          className="relative border border-navy/12 bg-white p-[clamp(24px,3vw,44px)] shadow-[0_18px_50px_rgba(26,59,86,0.07)] before:absolute before:-left-px before:-top-px before:h-3.5 before:w-3.5 before:border-l before:border-t before:border-green before:content-['']"
        >
          <div className="mb-7 border-b border-navy/10 pb-5">
            <h3 className="text-[17px] text-navy">Send a project brief</h3>
            <p className="mt-1.5 text-[13px] text-steel">
              Fields marked <span className="text-green-dark">*</span> are required.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 min-[621px]:grid-cols-2">
            <div>
              <label htmlFor="fn" className={labelClass}>
                Full name <span className="text-green-dark">*</span>
              </label>
              <input id="fn" name="fullName" type="text" autoComplete="name" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="fc" className={labelClass}>
                Company <span className="text-green-dark">*</span>
              </label>
              <input id="fc" name="company" type="text" autoComplete="organization" required className={fieldClass} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 min-[621px]:grid-cols-2">
            <div>
              <label htmlFor="fe" className={labelClass}>
                Work email <span className="text-green-dark">*</span>
              </label>
              <input id="fe" name="email" type="email" autoComplete="email" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="fp" className={labelClass}>Phone</label>
              <input id="fp" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="fd" className={labelClass}>Discipline</label>
            <select
              id="fd"
              name="discipline"
              defaultValue="Smart Entrance Automation"
              className={`${fieldClass} bg-no-repeat pr-9`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2328a745'/%3E%3C/svg%3E\")",
                backgroundPosition: "right 16px center",
              }}
            >
              <option>Smart Entrance Automation</option>
              <option>Renewable Energy · Solar</option>
              <option>Power Infrastructure</option>
              <option>Traffic &amp; Road Safety</option>
              <option>Water &amp; Hydromet</option>
              <option>Multi-Discipline / Other</option>
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="fb" className={labelClass}>
              Project brief <span className="text-green-dark">*</span>
            </label>
            <textarea
              id="fb"
              name="brief"
              required
              rows={5}
              className={`${fieldClass} min-h-[132px] resize-y`}
            ></textarea>
            <p className="mt-2 text-[12px] text-steel-dim">
              Site, scale and timeline help us route it to the right lead.
            </p>
          </div>

          <button className={`${btnFilled} mt-7 w-full justify-center`} type="submit" id="sendBtn">
            SEND BRIEF <span className="ar">↗</span>
          </button>

          <div
            id="formOk"
            className="mt-4.5 hidden items-center gap-2.5 border border-green/40 bg-green/[0.07] px-4 py-4 text-[13px] text-green-dark [&.show]:flex"
          >
            <span className="h-1.5 w-1.5 shrink-0 bg-green" />
            Brief received — a discipline lead will respond within one business day.
          </div>
        </form>
      </Wrap>
    </section>
  );
}
