import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  const [showTeam, setShowTeam] = useState(false);

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
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#e2b331]/5 to-transparent skew-x-12 transform origin-top-right pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#e2b331]/10 border border-[#e2b331]/20 text-[#e2b331] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e2b331] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e2b331]"></span>
              </span>
              <span>Our Mission</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2b331] to-amber-600">
                Future of Security
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
              <p>
                Founded in 2026 by elite ethical hackers and cryptographers, BOO Security was built to outpace the threats of the quantum age.
              </p>
              <p>
                We don't just patch vulnerabilities; we anticipate them. Our predictive AI creates a digital immune system that identifies and neutralizes threats before they strike.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="border-l-2 border-[#e2b331] pl-6">
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  5B+
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Attacks Blocked
                </div>
              </div>
              <div className="border-l-2 border-[#e2b331] pl-6">
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  99.9%
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Detection Rate
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button 
                onClick={() => setShowTeam(!showTeam)}
                className="cursor-pointer text-[#e2b331] text-3xl font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                {showTeam ? "Hide Team" : "Meet the Team"} <span className="text-2xl">→</span>
              </button>
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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white dark:bg-slate-900 border-2 border-[#e2b331] rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_-5px_rgba(226,179,49,0.3)]"
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
                    <Shield className="w-10 h-10 text-[#e2b331]" />
                    <div className="absolute inset-0 border border-[#e2b331] rounded-full animate-ping opacity-20"></div>
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
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#e2b331]/20 to-transparent rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>

        <AnimatePresence>
          {showTeam && (
            <TeamSection onClose={() => setShowTeam(false)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}