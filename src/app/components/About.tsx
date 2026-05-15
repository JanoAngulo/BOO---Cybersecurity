import React from "react";
import { motion } from "motion/react";
import {
  Shield,
  Lock,
  Cpu,
  Globe,
  Award,
  Users,
} from "lucide-react";
import { TeamSection } from "./TeamSection";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Diagonal Line */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand/5 to-transparent skew-x-12 transform origin-top-right pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 text-brand-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span>Our Mission</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Architecting the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-600">
                Future of Security
              </span>
            </h2>

            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Founded in 2026 by elite hackers and cryptographers. We don't patch threats — our predictive AI neutralizes them before they strike.
            </p>

            {/* Mission pillars */}
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: <Shield className="w-4 h-4" />, title: "Anticipate", desc: "Predict threats before they exist." },
                { icon: <Cpu className="w-4 h-4" />, title: "Automate", desc: "AI-led defense at machine speed." },
                { icon: <Lock className="w-4 h-4" />, title: "Endure", desc: "Quantum-resilient by default." },
              ].map((p, i) => (
                <div key={i} className="p-3 rounded-xl bg-white dark:bg-surface border border-slate-200 dark:border-slate-800 hover:border-brand/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-7 h-7 rounded-md bg-brand/10 text-brand-ink flex items-center justify-center ring-1 ring-brand/20">
                      {p.icon}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{p.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { value: "5B+", label: "Attacks blocked" },
                { value: "99.9%", label: "Detection rate" },
                { value: "218", label: "Edge nodes" },
                { value: "2026", label: "Founded" },
              ].map((s, i) => (
                <div key={i} className="border-l-2 border-brand pl-3">
                  <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mb-0.5 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Milestones timeline */}
            <div className="relative pl-5 border-l border-slate-200 dark:border-slate-800 space-y-4 mb-8">
              {[
                { year: "2026", title: "BOO founded", desc: "Six founders. One mission: invisible defense." },
                { year: "2027", title: "Q-Key launched", desc: "First production post-quantum encryption stack." },
                { year: "2028", title: "5B threats blocked", desc: "Crossed the 5-billion-attack milestone." },
              ].map((m, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-brand ring-4 ring-brand/20"></span>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-mono text-xs tracking-widest text-brand-ink font-bold">{m.year}</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{m.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Awards / accolades chips */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
              <Award className="w-4 h-4 text-brand-ink" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 mr-2">As featured in</span>
              {["WIRED", "TechCrunch", "Forbes", "DarkReading"].map((p) => (
                <span key={p} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-mono font-bold tracking-widest text-slate-700 dark:text-slate-300">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
              {/* Layered background decorations */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,#000_45%,transparent_80%)]"></div>
                {/* Radial gold glow center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-brand/15 rounded-full blur-3xl"></div>
                {/* Corner glows */}
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-brand/15 rounded-full blur-3xl"></div>
                {/* Crosshair corners */}
                <svg className="absolute top-3 left-3 w-6 h-6 text-brand/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9V3h6M3 3l6 6"/></svg>
                <svg className="absolute top-3 right-3 w-6 h-6 text-brand/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 9V3h-6M21 3l-6 6"/></svg>
                <svg className="absolute bottom-3 left-3 w-6 h-6 text-brand/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 15v6h6M3 21l6-6"/></svg>
                <svg className="absolute bottom-3 right-3 w-6 h-6 text-brand/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v6h-6M21 21l-6-6"/></svg>
                {/* HUD readout strips */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[9px] font-mono text-brand-ink/70 tracking-[0.25em]">
                  <span className="w-1 h-1 bg-brand rounded-full animate-pulse"></span>
                  <span>SECURE NODE // 0xBOO</span>
                  <span className="w-1 h-1 bg-brand rounded-full animate-pulse"></span>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-500 dark:text-slate-400/70 tracking-[0.2em]">
                  LAT 37.42°N · LON 122.08°W
                </div>
                {/* Concentric rings */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] text-brand/15" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <circle cx="100" cy="100" r="40"/>
                  <circle cx="100" cy="100" r="65" strokeDasharray="2 4"/>
                  <circle cx="100" cy="100" r="88"/>
                  <circle cx="100" cy="100" r="98" strokeDasharray="1 6"/>
                </svg>
                {/* Diagonal scan beam */}
                <div className="absolute -inset-1/2 bg-[linear-gradient(115deg,transparent_45%,rgba(226,179,49,0.08)_50%,transparent_55%)] animate-pulse"></div>
              </div>

              {/* Abstract Tech Graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-sm max-h-sm p-8">
                  {/* Circuit Board SVG Layer */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 400 400"
                  >
                    <defs>
                      <linearGradient
                        id="circuit-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#e2b331"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#e2b331"
                          stopOpacity="0.8"
                        />
                      </linearGradient>
                    </defs>
                    {/* Circuit Traces */}
                    <motion.path
                      d="M200 200 L200 100 L100 100"
                      fill="none"
                      stroke="#e2b331"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                    <motion.path
                      d="M200 200 L200 100 L300 100"
                      fill="none"
                      stroke="#e2b331"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                    />
                    <motion.path
                      d="M200 200 L200 300 L100 300"
                      fill="none"
                      stroke="#e2b331"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                    />
                    <motion.path
                      d="M200 200 L200 300 L300 300"
                      fill="none"
                      stroke="#e2b331"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />

                    {/* Moving Data Packets */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.circle
                        key={i}
                        r="3"
                        fill="#e2b331"
                        filter="url(#glow)"
                      >
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path={
                            i === 0
                              ? "M200 200 L200 100 L100 100"
                              : i === 1
                                ? "M200 200 L200 100 L300 100"
                                : i === 2
                                  ? "M200 200 L200 300 L100 300"
                                  : "M200 200 L200 300 L300 300"
                          }
                          begin={`${i * 0.7}s`}
                        />
                      </motion.circle>
                    ))}
                  </svg>

                  {/* Central Hub */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white dark:bg-slate-900 border-2 border-brand rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_-5px_rgba(226,179,49,0.3)]"
                    animate={{
                      boxShadow: [
                        "0 0 30px -5px rgba(226,179,49,0.3)",
                        "0 0 50px -5px rgba(226,179,49,0.6)",
                        "0 0 30px -5px rgba(226,179,49,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Shield className="w-10 h-10 text-brand-ink" />
                    <div className="absolute inset-0 border border-brand rounded-full animate-ping opacity-20"></div>
                  </motion.div>

                  {/* Satellite Nodes */}
                  {/* Top Left */}
                  <motion.div
                    className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg z-10"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "#e2b331",
                    }}
                  >
                    <Globe className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </motion.div>

                  {/* Top Right */}
                  <motion.div
                    className="absolute top-[25%] right-[25%] translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg z-10"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "#e2b331",
                    }}
                  >
                    <Cpu className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </motion.div>

                  {/* Bottom Left */}
                  <motion.div
                    className="absolute bottom-[25%] left-[25%] -translate-x-1/2 translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg z-10"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "#e2b331",
                    }}
                  >
                    <Users className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </motion.div>

                  {/* Bottom Right */}
                  <motion.div
                    className="absolute bottom-[25%] right-[25%] translate-x-1/2 translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg z-10"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "#e2b331",
                    }}
                  >
                    <Lock className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand/20 to-transparent rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>

        <TeamSection />
      </div>
    </section>
  );
}