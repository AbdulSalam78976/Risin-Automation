"use server";

export type BriefState = { ok: boolean; message: string } | null;

const LIMITS: Record<string, number> = {
  fullName: 120,
  company: 120,
  email: 160,
  phone: 40,
  discipline: 80,
  brief: 5000,
};

const SENT = "Brief received — a discipline lead will respond within one business day.";

export async function sendBrief(_prev: BriefState, formData: FormData): Promise<BriefState> {
  // Honeypot — bots fill every field they find, people never see this one.
  if (String(formData.get("website") ?? "").trim()) return { ok: true, message: SENT };

  const field = (name: string) => String(formData.get(name) ?? "").trim();
  const fullName = field("fullName");
  const company = field("company");
  const email = field("email");
  const phone = field("phone");
  const discipline = field("discipline");
  const brief = field("brief");

  if (!fullName || !company || !email || !brief) {
    return { ok: false, message: "Name, company, work email and the brief are all required." };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
    return { ok: false, message: "That email address doesn't look right — please check it." };
  }
  for (const [name, value] of Object.entries({ fullName, company, email, phone, discipline, brief })) {
    if (value.length > LIMITS[name]) {
      return { ok: false, message: "One of the fields is longer than we can accept." };
    }
  }

  // FormSubmit posts the brief straight to the addresses we name — no account.
  // CONTACT_TO_EMAIL is the primary recipient, CONTACT_CC_EMAILS a comma-separated
  // list of everyone else. The first submission to a new primary address triggers a
  // one-time activation link sent to it; click that once and delivery starts.
  const to = (process.env.CONTACT_TO_EMAIL || "info@risinautomation.com").trim();
  const cc = (process.env.CONTACT_CC_EMAILS || "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean)
    .join(",");

  // FormSubmit refuses requests with no Referer ("open this page through a web
  // server"), and a Server Action's fetch is server-to-server, so pass the page's
  // own origin along explicitly.
  const { headers } = await import("next/headers");
  const requestHeaders = await headers();
  const origin =
    requestHeaders.get("origin") ||
    (requestHeaders.get("host") ? `https://${requestHeaders.get("host")}` : "https://risinautomation.com");

  let res: Response;
  let payload: { success?: string | boolean; message?: string } | null = null;
  try {
    res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: `${origin}/contact`,
      },
      body: JSON.stringify({
        _subject: `Project brief — ${company}${discipline ? ` · ${discipline}` : ""}`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
        ...(cc ? { _cc: cc } : {}),
        Name: fullName,
        Company: company,
        Email: email,
        Phone: phone || "—",
        Discipline: discipline || "—",
        Brief: brief,
      }),
    });
    payload = await res.json().catch(() => null);
  } catch (err) {
    console.error("Contact form: submit request failed", err);
    return { ok: false, message: "Couldn't send just now — please try again or email us directly." };
  }

  // FormSubmit answers 200 with success:"false" for a not-yet-activated address.
  if (!res.ok || String(payload?.success) === "false") {
    console.error("Contact form: FormSubmit returned", res.status, payload);
    return { ok: false, message: "Couldn't send just now — please try again or email us directly." };
  }

  return { ok: true, message: SENT };
}
