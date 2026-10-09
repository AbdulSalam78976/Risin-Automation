"use client";

import { useActionState } from "react";
import { sendBrief, type BriefState } from "@/app/contact/actions";
import { btnFilled } from "@/components/btn";

const fieldClass =
  "w-full appearance-none border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy transition-[border-color,box-shadow] focus:border-green focus:shadow-[0_0_0_3px_rgba(40,167,69,0.12)] focus:outline-none";
const labelClass = "mb-2 block text-[12px] font-semibold text-navy";

const initialState: BriefState = null;

export function BriefForm() {
  const [state, formAction, pending] = useActionState(sendBrief, initialState);

  return (
    <form
      id="briefForm"
      action={formAction}
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
          <input id="fn" name="fullName" type="text" autoComplete="name" required maxLength={120} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="fc" className={labelClass}>
            Company <span className="text-green-dark">*</span>
          </label>
          <input id="fc" name="company" type="text" autoComplete="organization" required maxLength={120} className={fieldClass} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 min-[621px]:grid-cols-2">
        <div>
          <label htmlFor="fe" className={labelClass}>
            Work email <span className="text-green-dark">*</span>
          </label>
          <input id="fe" name="email" type="email" autoComplete="email" required maxLength={160} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="fp" className={labelClass}>Phone</label>
          <input id="fp" name="phone" type="tel" autoComplete="tel" maxLength={40} className={fieldClass} />
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
          maxLength={5000}
          className={`${fieldClass} min-h-[132px] resize-y`}
        ></textarea>
        <p className="mt-2 text-[12px] text-steel-dim">
          Site, scale and timeline help us route it to the right lead.
        </p>
      </div>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <button className={`${btnFilled} mt-7 w-full justify-center`} type="submit" disabled={pending}>
        {pending ? "SENDING…" : <>SEND BRIEF <span className="ar">↗</span></>}
      </button>

      {state && (
        <div
          aria-live="polite"
          className={`mt-4.5 flex items-center gap-2.5 border px-4 py-4 text-[13px] ${
            state.ok
              ? "border-green/40 bg-green/[0.07] text-green-dark"
              : "border-warn/40 bg-warn/[0.07] text-navy"
          }`}
        >
          <span className={`h-1.5 w-1.5 shrink-0 ${state.ok ? "bg-green" : "bg-warn"}`} />
          {state.message}
        </div>
      )}
    </form>
  );
}
