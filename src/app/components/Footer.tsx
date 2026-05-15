import React, { useState } from "react";
import { Ghost, Twitter, Github, Linkedin, Mail, ShieldCheck, Send, ArrowUp } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Enterprise", href: "#pricing" },
  { label: "Status", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#" },
  { label: "Press Kit", href: "#" },
];

const resourceLinks = [
  { label: "Docs", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "Threat Intel Blog", href: "#" },
  { label: "Changelog", href: "#" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
  { label: "Cookies", href: "#" },
];

const compliance = ["SOC2", "ISO 27001", "GDPR", "HIPAA", "FedRAMP"];

const scrollTo = (sel: string) => {
  if (sel === "#") return;
  document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
};

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-widest font-mono">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              onClick={(e) => {
                if (l.href.startsWith("#") && l.href !== "#") {
                  e.preventDefault();
                  scrollTo(l.href);
                }
              }}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-ink transition-colors flex items-center gap-1.5 group"
            >
              <span className="w-1 h-1 rounded-full bg-brand/40 group-hover:bg-brand transition-colors"></span>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"></div>
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-14 relative">
        {/* Top: brand + newsletter */}
        <div className="relative grid lg:grid-cols-5 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2 mb-4 w-fit cursor-pointer group"
            >
              <div className="p-2 bg-brand rounded-lg text-slate-900 group-hover:scale-110 transition-transform">
                <Ghost size={20} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white font-[Open_Sans]">
                BOO!
              </span>
            </button>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm mb-4">
              Securing the digital landscape. Autonomous, AI-driven cyber defense for enterprises that can't afford to be visible.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              ALL SYSTEMS OPERATIONAL
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-surface rounded-2xl border border-slate-200 dark:border-slate-800 p-5 lg:p-6 relative overflow-hidden">
              <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-brand/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-ink" />
                  Threat Intel Brief
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Weekly digest of zero-days, breaches, and defense playbooks. No spam.
                </p>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    Subscribed. Check your inbox.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      aria-label="Email address"
                      className="flex-1 px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                    <button
                      type="submit"
                      className="cursor-pointer px-5 py-2.5 bg-brand hover:bg-brand-strong text-slate-900 font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 group"
                    >
                      Subscribe
                      <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-slate-200 dark:border-slate-800">
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        {/* Compliance */}
        <div className="relative py-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400">
            Certified & Compliant
          </div>
          <div className="flex flex-wrap gap-2">
            {compliance.map((c) => (
              <span
                key={c}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-mono font-bold tracking-widest text-slate-700 dark:text-slate-300"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            © 2026 BOO Cyber Security · Crafted in the shadows
          </p>
          <div className="flex items-center gap-1">
            {[
              { icon: <Twitter size={16} />, label: "Twitter" },
              { icon: <Github size={16} />, label: "GitHub" },
              { icon: <Linkedin size={16} />, label: "LinkedIn" },
              { icon: <Mail size={16} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-ink hover:border-brand/40 transition-colors"
              >
                {s.icon}
              </a>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="ml-2 w-9 h-9 rounded-lg flex items-center justify-center bg-brand hover:bg-brand-strong text-slate-900 cursor-pointer transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
