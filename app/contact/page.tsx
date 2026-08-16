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
  "w-full appearance-none border border-navy/10 bg-slate px-3.5 py-3.5 text-sm text-navy transition-[border-color,box-shadow] focus:border-green focus:shadow-[0_0_0_3px_rgba(40,167,69,0.12)] focus:outline-none";
const labelClass = "mb-2 block text-[10px] uppercase tracking-[0.22em] text-steel-dim";

export default function ContactPage() {
  return (
    <section className="bg-white py-[clamp(72px,10vh,120px)] text-navy" id="contact">
      <Wrap className="grid grid-cols-1 gap-[clamp(40px,5vw,80px)] min-[961px]:grid-cols-[.9fr_1.1fr]">
        <div>
          <Kick scramble>CONTACT</Kick>
          <h2 className={`lines ${sectionTitleClass} text-navy`}>
            <span className="ln"><span>START WITH</span></span>
            <span className="ln"><span>A SCOPE CALL.</span></span>
          </h2>
          <p className="reveal mt-5 max-w-[440px] text-steel">
            Send a brief — even a rough one. A discipline lead responds within one business day
            with a scope outline and a call slot.
          </p>
          <dl className="reveal mt-9 border-t border-navy/10">
            <div className="flex justify-between gap-4.5 border-b border-navy/10 py-3.5 text-xs">
              <dt className="pt-0.5 text-[10px] uppercase tracking-[0.2em] text-steel-dim">Email</dt>
              <dd className="text-right"><a href="mailto:projects@risinautomation.com" className="hover:text-green-dark">projects@risinautomation.com</a></dd>
            </div>
            <div className="flex justify-between gap-4.5 border-b border-navy/10 py-3.5 text-xs">
              <dt className="pt-0.5 text-[10px] uppercase tracking-[0.2em] text-steel-dim">Phone</dt>
              <dd className="text-right">
                <a href="tel:03325919059" className="hover:text-green-dark">0332-5919059</a>,{" "}
                <a href="tel:03453164250" className="hover:text-green-dark">0345-3164250</a>
              </dd>
            </div>
            <div className="flex justify-between gap-4.5 border-b border-navy/10 py-3.5 text-xs">
              <dt className="pt-0.5 text-[10px] uppercase tracking-[0.2em] text-steel-dim">HQ</dt>
              <dd className="text-right">KASHMIR MENTION PLAZA, PAKISTAN TOWN, ISLAMABAD</dd>
            </div>
            <div className="flex justify-between gap-4.5 border-b border-navy/10 py-3.5 text-xs">
              <dt className="pt-0.5 text-[10px] uppercase tracking-[0.2em] text-steel-dim">Ops Room</dt>
              <dd className="text-right">24 × 7 × 365</dd>
            </div>
          </dl>
        </div>

        <form
          id="briefForm"
          noValidate
          className="relative border border-navy/10 bg-white p-[clamp(26px,3vw,44px)] before:absolute before:-left-px before:-top-px before:h-3.5 before:w-3.5 before:border-l before:border-t before:border-green before:content-['']"
        >
          <div className="grid grid-cols-1 gap-4.5 min-[621px]:grid-cols-2">
            <div className="mb-4.5">
              <label htmlFor="fn" className={labelClass}>Full Name</label>
              <input id="fn" type="text" required placeholder="A. Sharma" className={fieldClass} />
            </div>
            <div className="mb-4.5">
              <label htmlFor="fc" className={labelClass}>Company</label>
              <input id="fc" type="text" required placeholder="Acme Industries Ltd." className={fieldClass} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4.5 min-[621px]:grid-cols-2">
            <div className="mb-4.5">
              <label htmlFor="fe" className={labelClass}>Work Email</label>
              <input id="fe" type="email" required placeholder="you@company.com" className={fieldClass} />
            </div>
            <div className="mb-4.5">
              <label htmlFor="fd" className={labelClass}>Discipline</label>
              <select
                id="fd"
                defaultValue="Smart Entrance Automation"
                className={`${fieldClass} bg-no-repeat pr-8`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2328a745'/%3E%3C/svg%3E\")",
                  backgroundPosition: "right 14px center",
                }}
              >
                <option>Smart Entrance Automation</option>
                <option>Renewable Energy · Solar</option>
                <option>Power Infrastructure</option>
                <option>Traffic &amp; Road Safety</option>
                <option>Multi-Discipline / Other</option>
              </select>
            </div>
          </div>
          <div className="mb-4.5">
            <label htmlFor="fb" className={labelClass}>Project Brief</label>
            <textarea id="fb" placeholder="Site, scale, timeline — whatever you have." className={`${fieldClass} min-h-[110px] resize-y`}></textarea>
          </div>
          <button className={`${btnFilled} w-full justify-center`} type="submit" id="sendBtn">
            TRANSMIT BRIEF <span className="ar">↗</span>
          </button>
          <div id="formOk" className="mt-4.5 hidden border border-dashed border-green px-4 py-4 text-xs tracking-[0.08em] text-green-dark [&.show]:block">
            ✓ BRIEF RECEIVED — A DISCIPLINE LEAD WILL RESPOND WITHIN ONE BUSINESS DAY.
          </div>
        </form>
      </Wrap>
    </section>
  );
}
