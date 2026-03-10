import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Terminal,
  Activity,
  Lock,
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
          <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#e2b331]/10 to-transparent"></div>
          <div className="absolute right-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#e2b331]/5 to-transparent"></div>
          <div className="absolute left-1/3 bottom-0 w-[1px] h-1/2 bg-gradient-to-t from-transparent via-slate-500/20 to-transparent"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#e2b331]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px]"></div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)] opacity-50 dark:opacity-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#e2b331]/10 border border-[#e2b331]/20 text-[#e2b331] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e2b331] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e2b331]"></span>
              </span>
              <span>System Operational</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Defending Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2b331] to-amber-600">
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
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap items-center gap-8 opacity-90">
                <div className="text-lg font-bold font-mono text-slate-700 dark:text-white flex items-center gap-2">
                  <span className="text-[#e2b331]">⚡</span>{" "}
                  TECHCORP
                </div>
                <div className="text-lg font-bold font-serif text-slate-700 dark:text-white flex items-center gap-2">
                  <span className="text-[#e2b331]">◎</span>{" "}
                  SECUREDATA
                </div>
                <div className="text-lg font-bold font-sans text-slate-700 dark:text-white flex items-center gap-2">
                  <span className="text-[#e2b331]">◈</span>{" "}
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
            className="perspective-1000 relative hidden lg:block"
          >
            {/* Glass Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-xl transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700">
              {/* Header */}
              <div className="h-12 bg-slate-100 dark:bg-slate-900 flex items-center px-6 gap-4 border-b border-slate-200 dark:border-slate-800 transition-colors">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 text-center font-mono text-xs text-slate-500 tracking-widest uppercase">
                  BOO_Security_Protocol_v3.0
                </div>
                <Activity className="w-4 h-4 text-slate-600" />
              </div>

              {/* Dashboard Content */}
              <div className="relative h-[400px] bg-white dark:bg-slate-950 p-6 flex flex-col transition-colors">
                {/* Background Grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(226,179,49,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(226,179,49,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                ></div>

                {/* Main Visualization Area */}
                <div className="flex-1 flex items-center justify-center relative">
                  {/* Animated Rings */}
                  <div className="absolute w-64 h-64 border border-[#e2b331]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute w-48 h-48 border border-[#e2b331]/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute w-32 h-32 bg-[#e2b331]/10 rounded-full blur-2xl animate-pulse"></div>

                  {/* Center Icon */}
                  <div className="relative z-10 w-20 h-20 bg-[#e2b331]/10 rounded-2xl flex items-center justify-center border border-[#e2b331]/30 shadow-[0_0_30px_rgba(226,179,49,0.2)]">
                    <ShieldCheck className="w-10 h-10 text-[#e2b331]" />
                  </div>

                  {/* Orbiting Nodes */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-56 h-56 rounded-full border border-slate-400/30 dark:border-slate-500/30"
                  >
                    <div className="w-3 h-3 bg-red-500 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  </motion.div>
                </div>

                {/* Bottom Stats Row */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors">
                    <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400 text-xs font-mono">
                      <Lock className="w-3 h-3" /> Encrypted
                    </div>
                    <div className="text-[#e2b331] font-bold">
                      100%
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors">
                    <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400 text-xs font-mono">
                      <Activity className="w-3 h-3" /> Network
                    </div>
                    <div className="text-emerald-500 dark:text-emerald-400 font-bold">
                      Secure
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors">
                    <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400 text-xs font-mono">
                      <Terminal className="w-3 h-3" /> Threats
                    </div>
                    <div className="text-slate-700 dark:text-slate-200 font-bold">
                      0 Active
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements behind dashboard */}
            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-[#e2b331]/20 rounded-full blur-[100px] pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute animate-bounce bottom-8 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 cursor-pointer"
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