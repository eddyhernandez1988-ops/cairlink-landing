"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Phone, Mail, Globe2, ShieldCheck, HeartPulse, Activity, Users, Database, MessageSquare, Smartphone, MapPinned, Clock, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function Page() {
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok || data.ok !== true && data.ok !== true) {
        setError(data?.error || "Submission failed");
      } else {
        setSubmitted(true);
      }
    } catch (err: any) {
      setError(err?.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: HeartPulse, title: "AI Triage Agent", desc: "Symptom assessment, urgency scoring, home‑care guidance." },
    { icon: Clock, title: "Scheduling Agent", desc: "Smart intake, queueing and appointment optimization." },
    { icon: MessageSquare, title: "Follow‑Up Agent", desc: "Personalized instructions and voice/text support." },
    { icon: Smartphone, title: "CHW Mobile Assistant", desc: "Step‑by‑step protocols and field documentation." },
    { icon: Database, title: "Medical History Agent", desc: "Lightweight, decentralized EHR for mobile use." },
    { icon: Globe2, title: "Multilingual & Offline", desc: "Built for SMS, WhatsApp, IVR and low‑connectivity." },
  ] as const;

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-sky-600 text-white grid place-items-center font-bold">cL</div>
            <span className="font-semibold tracking-tight">cAIrlink</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#solution" className="hover:text-sky-700">Solution</a>
            <a href="#insurance" className="hover:text-sky-700">Insurance</a>
            <a href="#pilots" className="hover:text-sky-700">Pilots</a>
            <a href="#team" className="hover:text-sky-700">Team</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild href="#contact">Request a Pilot</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Expanding Equitable Healthcare Access with <span className="text-sky-700">AI Multi‑Agent</span> Technology
            </h1>
            <p className="mt-5 text-slate-700 text-lg">
              cAIrlink is a modular, mobile‑first platform that delivers intelligent triage, scheduling, patient communication and decision support across hospitals, clinics and underserved communities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild href="#contact" className="rounded-2xl">Start a Conversation <ArrowRight size={18} /></Button>
              <Button variant="outline" asChild href="#solution" className="rounded-2xl">See How It Works</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck size={18} /> Privacy by Design</div>
              <div className="flex items-center gap-2"><Activity size={18} /> Offline‑capable</div>
              <div className="flex items-center gap-2"><Users size={18} /> Multilingual</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Impact Snapshot</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Metric label="Avg. wait time" value="−32%" sub="with smart scheduling" />
                <Metric label="ED diversions" value="−21%" sub="via early triage" />
                <Metric label="Follow‑up adherence" value="+38%" sub="personalized nudges" />
                <Metric label="CHW productivity" value="+27%" sub="guided workflows" />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="mx-auto max-w-7xl px-4 py-14">
        <div className="md:w-3/4">
          <h2 className="text-3xl font-semibold">A Modular Platform for Frontline Care</h2>
          <p className="mt-4 text-slate-700">Designed for real‑world constraints: low bandwidth, multilingual populations, and hybrid care teams.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-sky-600/10 grid place-items-center">
                  <f.icon className="text-sky-700" size={22} />
                </div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">{f.desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <ValuePoint icon={MapPinned} title="Global‑ready">
            Deployable across Latin America, Sub‑Saharan Africa and Southeast Asia with local language models and culturally adapted flows.
          </ValuePoint>
          <ValuePoint icon={ShieldCheck} title="Safe by Default">
            Role‑based access, audit trails and de‑identification options for research and reporting.
          </ValuePoint>
          <ValuePoint icon={Building2} title="Interoperable">
            Open APIs to integrate with NGO networks, health systems and insurer partners.
          </ValuePoint>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="bg-sky-50/60 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="md:w-3/5">
            <h2 className="text-3xl font-semibold">Built for Health Insurers, Too</h2>
            <p className="mt-3 text-slate-700">Create a sustainable adoption path with private‑sector alignment while serving public and community health.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Benefits for Insurers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                {[
                  "Reduced avoidable claims via early triage and remote follow-up",
                  "Higher loyalty with proactive, 24/7 assistance",
                  "Data-driven prevention and risk detection",
                  "Aggregated reporting on outcomes and cost savings",
                ].map((b, i) => (
                  <li key={i} className="list-none flex items-start gap-2"><Check className="mt-1 text-sky-700" size={18} /> <span>{b}</span></li>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Collaboration Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                <li className="list-none flex items-start gap-2"><Check className="mt-1 text-sky-700" size={18} /> <span>cAIrlink as a premium plan benefit</span></li>
                <li className="list-none flex items-start gap-2"><Check className="mt-1 text-sky-700" size={18} /> <span>Custom protocols, branding and regulatory fit</span></li>
                <li className="list-none flex items-start gap-2"><Check className="mt-1 text-sky-700" size={18} /> <span>Aggregated reporting on outcomes and savings</span></li>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pilots */}
      <section id="pilots" className="mx-auto max-w-7xl px-4 py-14">
        <div className="md:w-3/5">
          <h2 className="text-3xl font-semibold">Pilot Implementation</h2>
          <p className="mt-3 text-slate-700">Validate impact with NGO partners and health systems across regions.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <StepCard step="Phase 1" title="Deployment & Training" bullets={["2–3 NGO or health system partners", "Train CHWs and local staff", "Mobile triage & follow‑up agents", "Offline sync & remote reports"]} />
          <StepCard step="Phase 2" title="Impact Evaluation" bullets={["Response time improvements", "Referral accuracy & outcomes", "Satisfaction & usability feedback"]} />
          <StepCard step="Phase 3" title="Scale & Integrate" bullets={["Regional expansion", "Local language models", "Open APIs & interoperability"]} />
        </div>
      </section>

      {/* Team & Budget */}
      <section id="team" className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Our Team</h2>
            <p className="mt-3 text-slate-700">A clinical–technical team bridging frontline realities and scalable AI.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <PersonCard name="Dr. Lionel Lázaro" role="Orthopedic Surgeon & Founder" about="Healthcare systems innovator in Puerto Rico. Leads clinical safety, partnerships and deployment." />
              <PersonCard name="Valen Wardak" role="AI Architect" about="Designs multi‑agent orchestration and real‑world model integration." />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Budget & Use of Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li><b>$75k</b> — Software development & localization</li>
                <li><b>$60k</b> — Field deployment & training</li>
                <li><b>$40k</b> — Research & evaluation</li>
                <li><b>$25k</b> — Community engagement & feedback</li>
                <li><b>$20k</b> — Administration & reporting</li>
                <li><b>$30k</b> — Rapid‑response field updates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">Request a Pilot or Partnership</h2>
          <p className="mt-3 text-slate-700">Tell us about your organization. We’ll get back with a tailored next step.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <ThankYou />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    <Input aria-label="Full name" name="name" placeholder="Full name" required value={form.name} onChange={handleChange} />
                    <Input aria-label="Organization" name="org" placeholder="Organization / NGO / Insurer" required value={form.org} onChange={handleChange} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Input aria-label="Email" type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} />
                    <Input aria-label="Phone" type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
                  </div>
                  <Textarea aria-label="Message" name="message" placeholder="What problem are you trying to solve?" required value={form.message} onChange={handleChange} className="min-h-[120px]" />
                  <div className="flex items-center gap-3">
                    <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send"}</Button>
                    {error && <span className="text-red-600 text-sm">{error}</span>}
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <div className="flex items-center gap-2"><Mail size={18} /> hello@cairlink.health</div>
              <div className="flex items-center gap-2"><Phone size={18} /> +1 (787) 555‑0182</div>
              <div className="flex items-center gap-2"><Globe2 size={18} /> www.cairlink.health</div>
              <div className="pt-3 text-sm text-slate-500">
                By submitting this form you agree to our privacy policy.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-sky-600 text-white grid place-items-center font-bold">cL</div>
            <span>© {new Date().getFullYear()} cAIrlink. All rights reserved.</span>
          </div>
          <div className="flex gap-5">
            <a href="#solution" className="hover:text-sky-700">Solution</a>
            <a href="#insurance" className="hover:text-sky-700">Insurance</a>
            <a href="#pilots" className="hover:text-sky-700">Pilots</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Metric({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </div>
  );
}

function ValuePoint({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="h-11 w-11 rounded-2xl bg-sky-600/10 grid place-items-center">
          <Icon className="text-sky-700" size={22} />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700">{children}</CardContent>
    </Card>
  );
}

function StepCard({ step, title, bullets }: { step: string; title: string; bullets: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><span className="text-sky-700 font-semibold">{step}</span> — {title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-slate-700">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2"><Check className="mt-1 text-sky-700" size={18} /> <span>{b}</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function PersonCard({ name, role, about }: { name: string; role: string; about: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="text-lg">{name}</div>
          <div className="text-sm text-slate-600 font-normal">{role}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700 text-sm">{about}</CardContent>
    </Card>
  );
}

function ThankYou() {
  return (
    <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 text-slate-800">
      <h3 className="text-xl font-semibold">Thank you! 🎉</h3>
      <p className="mt-2">Your message has been received. Our team will reach out shortly with next steps for a pilot or partnership.</p>
    </div>
  );
}
