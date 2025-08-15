import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, org, email, phone, message } = body || {};

    if (!name || !org || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Option A: Resend (email)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL || "";
    if (RESEND_API_KEY && TO_EMAIL) {
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({
        from: "cAIrlink <noreply@cairlink.health>",
        to: [TO_EMAIL],
        subject: "New Pilot/Partnership Request",
        text: `Name: ${name}\nOrg: ${org}\nEmail: ${email}\nPhone: ${phone || ""}\n\nMessage:\n${message}`
      });
      return NextResponse.json({ ok: true });
    }

    // Option B: Formspree (server-side forward)
    const FORMSPREE_ID = process.env.FORMSPREE_ID;
    if (FORMSPREE_ID) {
      const resp = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, org, email, phone, message })
      });
      if (!resp.ok) {
        const t = await resp.text();
        return NextResponse.json({ ok: false, error: "Formspree error", details: t }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    // Fallback
    console.log("Contact submission (no delivery provider configured):", body);
    return NextResponse.json({ ok: true, warning: "No delivery provider configured. Set RESEND_API_KEY+TO_EMAIL or FORMSPREE_ID." });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
