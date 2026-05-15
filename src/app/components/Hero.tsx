import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Terminal,
  Activity,
  Lock,
  Globe,
  Cpu,
  Wifi,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
        {/* Base Grid - Light Mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 dark:hidden"></div>
        {/* Base Grid - Dark Mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 hidden dark:block"></div>

        {/* Dynamic Lines */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-brand/10 to-transparent"></div>
          <div className="absolute right-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-brand/5 to-transparent"></div>
          <div className="absolute left-1/3 bottom-0 w-[1px] h-1/2 bg-gradient-to-t from-transparent via-slate-500/20 to-transparent"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px]"></div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)] opacity-50 dark:opacity-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16 md:pt-32 md:pb-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 text-brand-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span>System Operational</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Defending Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-600">
                Digital Infrastructure
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
              BOO Security provides an impenetrable barrier
              between your data and malicious actors. Automated
              threat elimination for the modern web.
            </p>

            {/* Version / Download Box */}

            {/* Trusted By */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-4">
                Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap items-center gap-8 opacity-90">
                <div className="text-lg font-bold font-mono text-slate-700 dark:text-white flex items-center gap-2">
                  <span className="text-brand-ink">⚡</span>{" "}
                  TECHCORP
                </div>
                <div className="text-lg font-bold font-serif text-slate-700 dark:text-white flex items-center gap-2">
                  <span className="text-brand-ink">◎</span>{" "}
                  SECUREDATA
                </div>
                <div className="text-lg font-bold font-sans text-slate-700 dark:text-white flex items-center gap-2">
                  <span className="text-brand-ink">◈</span>{" "}
                  NETSYS
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Vector Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="perspective-1000 relative w-full"
          >
            {/* Glass Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xl transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700">
              {/* Header */}
              <div className="h-11 bg-slate-100/80 dark:bg-slate-900/80 flex items-center px-4 gap-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 font-mono text-[10px] text-slate-600 dark:text-slate-400 tracking-widest uppercase">
                  <Lock className="w-3 h-3 text-brand-ink" />
                  <span>boo://sentinel.boo.security</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  LIVE
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="relative bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 p-4">
                {/* Background Grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(226,179,49,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(226,179,49,0.4) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                    maskImage:
                      "radial-gradient(ellipse 70% 60% at 50% 40%, #000 50%, transparent 100%)",
                  }}
                ></div>

                {/* Top KPI Row */}
                <div className="relative grid grid-cols-3 gap-2 mb-3">
                  {[
                    { label: "BLOCKED / 24h", value: "12,847", trend: "+8.2%", up: true },
                    { label: "ATTACK SURFACE", value: "98.6%", trend: "covered", up: true },
                    { label: "MEAN RESPONSE", value: "47ms", trend: "-12ms", up: true },
                  ].map((kpi, i) => (
                    <div
                      key={i}
                      className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-lg border border-slate-200 dark:border-slate-800"
                    >
                      <div className="text-[9px] font-mono tracking-widest text-slate-600 dark:text-slate-400 mb-0.5">
                        {kpi.label}
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                        {kpi.value}
                      </div>
                      <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                        ▲ {kpi.trend}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main split panel */}
                <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-3 sm:h-[260px]">
                  {/* Radar */}
                  <div className="sm:col-span-3 relative bg-white/60 dark:bg-slate-950/60 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden h-[240px] sm:h-auto">
                    <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono tracking-widest text-slate-600 dark:text-slate-400">
                      <span>RADAR · GLOBAL</span>
                      <span className="text-brand-ink">SCAN-0xBOO</span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Rings */}
                      <div className="absolute w-56 h-56 border border-brand/25 rounded-full animate-[spin_18s_linear_infinite]"></div>
                      <div className="absolute w-40 h-40 border border-brand/30 border-dashed rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                      <div className="absolute w-24 h-24 bg-brand/15 rounded-full blur-2xl animate-pulse"></div>

                      {/* Crosshairs */}
                      <div className="absolute w-56 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
                      <div className="absolute h-56 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent"></div>

                      {/* Sweeping beam */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute w-56 h-56 rounded-full"
                        style={{
                          background:
                            "conic-gradient(from 0deg, rgba(226,179,49,0.35) 0deg, transparent 60deg)",
                        }}
                      ></motion.div>

                      {/* Center shield */}
                      <div className="relative z-10 w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-brand/40 shadow-[0_0_25px_rgba(226,179,49,0.35)]">
                        <ShieldCheck className="w-8 h-8 text-brand-ink" />
                      </div>

                      {/* Orbiting nodes */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-48 h-48"
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.7)]"></div>
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.7)]"></div>
                      </motion.div>
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                        className="absolute w-56 h-56"
                      >
                        <div className="absolute -bottom-1 left-[30%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.7)]"></div>
                        <div className="absolute top-[20%] -left-1 w-2 h-2 bg-red-400 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.7)]"></div>
                      </motion.div>
                    </div>

                    {/* Bottom legend */}
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1"><Globe className="w-2.5 h-2.5" /> 218 NODES</span>
                      <span>LAT 37.42°N</span>
                    </div>
                  </div>

                  {/* Threat feed */}
                  <div className="sm:col-span-2 bg-white/60 dark:bg-slate-950/60 rounded-lg border border-slate-200 dark:border-slate-800 p-2.5 flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-slate-600 dark:text-slate-400 mb-2">
                      <span>THREAT FEED</span>
                      <span className="text-brand-ink">·LIVE</span>
                    </div>

                    <div className="flex-1 space-y-1.5 overflow-hidden">
                      {[
                        { ip: "203.0.113.42", type: "SQLi", c: "red" },
                        { ip: "198.51.100.7", type: "XSS", c: "amber" },
                        { ip: "192.0.2.184", type: "DDOS", c: "red" },
                        { ip: "203.0.113.91", type: "BOT", c: "amber" },
                        { ip: "198.51.100.32", type: "SCAN", c: "emerald" },
                      ].map((t, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex items-center justify-between text-[10px] font-mono px-1.5 py-1 rounded bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800"
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${t.c === "red" ? "bg-red-500" : t.c === "amber" ? "bg-amber-400" : "bg-emerald-400"}`}></span>
                            <span className="text-slate-700 dark:text-slate-300 truncate">{t.ip}</span>
                          </div>
                          <span className={`shrink-0 px-1.5 py-0.5 rounded text-[9px] font-bold ${t.c === "red" ? "bg-red-500/15 text-red-600 dark:text-red-400" : t.c === "amber" ? "bg-amber-500/15 text-amber-700 dark:text-amber-400" : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"}`}>
                            {t.type}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mini sparkline */}
                    <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex items-end gap-0.5 h-6">
                        {[40, 65, 30, 80, 55, 90, 45, 70, 60, 95, 50, 75, 85, 60, 100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-brand/40 to-brand rounded-sm"
                            style={{ height: `${h}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-600 dark:text-slate-400 mt-1">
                        <span>REQ/SEC</span>
                        <span className="text-brand-ink">PEAK 4.2k</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Strip */}
                <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1.5 rounded-md flex items-center gap-1.5 text-[10px] font-mono">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold">FIREWALL · UP</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-2.5 py-1.5 rounded-md flex items-center gap-1.5 text-[10px] font-mono">
                    <Wifi className="w-3 h-3 text-brand-ink" />
                    <span className="text-slate-700 dark:text-slate-300">218 NODES</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-2.5 py-1.5 rounded-md flex items-center gap-1.5 text-[10px] font-mono">
                    <Cpu className="w-3 h-3 text-brand-ink" />
                    <span className="text-slate-700 dark:text-slate-300">CPU 12%</span>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 px-2.5 py-1.5 rounded-md flex items-center gap-1.5 text-[10px] font-mono">
                    <AlertTriangle className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    <span className="text-amber-700 dark:text-amber-300 font-bold">3 WATCH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements behind dashboard */}
            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-brand/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute animate-bounce bottom-8 left-1/2 -translate-x-1/2 text-slate-600 dark:text-slate-400 flex flex-col items-center gap-2 cursor-pointer"
        aria-label="Scroll to features"
        role="button"
        tabIndex={0}
        onClick={() =>
          document
            .getElementById("features")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-widest">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}