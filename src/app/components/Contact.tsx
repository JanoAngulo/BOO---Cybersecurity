import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Send, Clock, ShieldCheck, MessageSquare, Key, CheckCircle2, AlertTriangle } from "lucide-react";

export function Contact() {
  const [chars, setChars] = useState(0);

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.04] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div aria-hidden="true" className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
      <div aria-hidden="true" className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 text-brand-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span>Secure Channel</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Open a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-600">Secure Channel</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Encrypted by default. Routed through our SOC. A human reads every message — usually within an hour.
            </p>

            {/* Trust strip */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 py-2 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm font-mono text-[11px] tracking-widest">
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                <Clock className="w-3 h-3" /> &lt;1H REPLY
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <ShieldCheck className="w-3 h-3 text-brand-ink" /> SOC2 TYPE II
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <Key className="w-3 h-3 text-brand-ink" /> PGP READY
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Channels */}
            <div className="relative overflow-hidden bg-white dark:bg-surface p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_top_right,#000_30%,transparent_75%)]"></div>
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand/10 rounded-full blur-3xl"></div>
              </div>

              <div className="relative flex items-center justify-between mb-5 border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Command Center</h3>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                  ONLINE
                </div>
              </div>

              <div className="relative space-y-4">
                {[
                  { icon: <MapPin size={18} />, label: "HQ Coordinates", value: "1337 Cyber Lane, Suite 100\nSilicon Valley, CA 94025", aria: "Address" },
                  { icon: <Mail size={18} />, label: "Encrypted Mail", value: "security@boo.security", aria: "Email" },
                  { icon: <Phone size={18} />, label: "Emergency Line", value: "+1 (555) 000-SECURE", aria: "Phone" },
                  { icon: <MessageSquare size={18} />, label: "Secure Chat", value: "Available 24/7 · End-to-end encrypted", aria: "Chat" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg text-brand-ink group-hover:bg-brand group-hover:text-slate-900 transition-colors duration-300 shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{c.label}</h4>
                      <p className="text-slate-600 dark:text-slate-400 mt-0.5 text-sm leading-relaxed whitespace-pre-line">
                        {c.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* PGP key chip */}
              <div className="relative mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-mono">
                  <Key className="w-3.5 h-3.5 text-brand-ink" />
                  PGP · 0xB00 4F2C 2E91
                </div>
                <button type="button" className="cursor-pointer text-brand-ink font-semibold hover:underline">
                  Download key
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="h-[260px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="BOO Security HQ location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621062!2d-122.08374688469227!3d37.422408279825215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1657662999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:invert-[.9] dark:hue-rotate-180"
              ></iframe>
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-700 font-mono text-[10px] tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
                LAT 37.42°N · LON 122.08°W
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 h-full bg-white dark:bg-surface p-5 lg:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50"></div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
              <svg className="absolute bottom-2 right-2 w-28 h-28 text-brand/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="50" cy="50" r="20" />
                <circle cx="50" cy="50" r="35" strokeDasharray="2 5" />
                <circle cx="50" cy="50" r="48" />
              </svg>
            </div>

            <div className="relative flex flex-col flex-1">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Transmission</h3>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest bg-brand/10 border border-brand/30 text-brand-ink">
                  E2E ENCRYPTED
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Open a secure channel with our SOC team. Most messages get a human reply within an hour.
              </p>

              <form className="space-y-3 flex flex-col flex-1">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 ml-1 flex items-center gap-1.5">
                      Identity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 ml-1 flex items-center gap-1.5">
                      Digital Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 ml-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      autoComplete="organization"
                      className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 ml-1">
                      Clearance Level
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        defaultValue="General Inquiry"
                        className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option>General Inquiry</option>
                        <option>Report an Incident</option>
                        <option>Enterprise Sales</option>
                        <option>Support</option>
                        <option>Press / Media</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 flex flex-col flex-1 min-h-[120px]">
                  <div className="flex items-center justify-between ml-1">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      Message Data <span className="text-red-500">*</span>
                    </label>
                    <span className={`text-[10px] font-mono ${chars > 480 ? "text-amber-600 dark:text-amber-400" : "text-slate-500"}`}>
                      {chars}/500
                    </span>
                  </div>
                  <textarea
                    id="message"
                    maxLength={500}
                    required
                    onChange={(e) => setChars(e.target.value.length)}
                    className="w-full flex-1 min-h-[100px] px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="Describe the nature of your inquiry..."
                  ></textarea>
                </div>

                {/* Priority + consent */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer select-none">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-brand focus:ring-brand cursor-pointer" />
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span>This is an active security incident</span>
                  </label>
                  <span className="text-[11px] text-slate-500 dark:text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-ink" />
                    Routed via TLS 1.3 + at-rest AES-256
                  </span>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 bg-brand hover:bg-brand-strong text-slate-900 font-bold rounded-lg shadow-lg shadow-brand/20 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01] active:scale-[0.99] group"
                >
                  <span>Transmit Securely</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-500 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>By submitting, you agree to our privacy & encryption policy.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
