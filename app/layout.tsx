import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "cAIrlink — Equitable Healthcare with AI Multi‑Agent",
  description: "Modular, mobile‑first AI platform for triage, scheduling and follow‑up across hospitals and underserved communities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
