import React from 'react';
import { Shield, Database, Zap, Lock, Ghost, EyeOff, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  codename: string;
  description: string;
  benefits: string[];
  metric: { value: string; label: string };
  level: "ACTIVE" | "PRIMED" | "AUTO";
};

const features: Feature[] = [
  {
    icon: <Ghost className="w-8 h-8 text-brand-ink" />,
    title: "Stealth Protocol",
    codename: "GH0ST-01",
    description:
      "Background algorithms run undetectable by intruders until it's too late. Polymorphic code shifts every 60 seconds, leaving no fingerprint.",
    benefits: ["Polymorphic code engine", "Zero-day exploit shielding", "Silent alarm triggers"],
    metric: { value: "60s", label: "Mutation cycle" },
    level: "ACTIVE",
  },
  {
    icon: <Shield className="w-8 h-8 text-brand-ink" />,
    title: "Invisible Shield",
    codename: "SHLD-07",
    description:
      "Layer-7 protection wraps your infrastructure in a hardened barrier, filtering 99.9% of malicious traffic before it reaches a single server.",
    benefits: ["DDoS mitigation", "WAF integration", "Real-time IP reputation"],
    metric: { value: "99.9%", label: "Traffic filtered" },
    level: "ACTIVE",
  },
  {
    icon: <Database className="w-8 h-8 text-brand-ink" />,
    title: "Data Preservation",
    codename: "VAULT-12",
    description:
      "Encrypted, sharded storage across multiple availability zones guarantees zero data loss — even under regional failure or ransomware.",
    benefits: ["AES-256 encryption", "Immutable backups", "Geo-redundancy"],
    metric: { value: "11×9", label: "Durability" },
    level: "PRIMED",
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-ink" />,
    title: "Active Response",
    codename: "STRIKE-03",
    description:
      "Counter-measures deploy the instant a breach is attempted: our system isolates, neutralizes, and disorients the attacker in real time.",
    benefits: ["Automated countermeasures", "Honey-pot deployment", "Attacker disorientation"],
    metric: { value: "<3s", label: "Response time" },
    level: "AUTO",
  },
  {
    icon: <EyeOff className="w-8 h-8 text-brand-ink" />,
    title: "Obfuscation Tech",
    codename: "MASK-09",
    description:
      "Rotate identity across a global proxy network and obfuscate request headers — be everywhere and nowhere, without ever installing a VPN.",
    benefits: ["IP masking", "Header obfuscation", "VPN-less anonymity"],
    metric: { value: "2.1k", label: "Exit nodes" },
    level: "ACTIVE",
  },
  {
    icon: <Lock className="w-8 h-8 text-brand-ink" />,
    title: "Quantum Encryption",
    codename: "Q-KEY-22",
    description:
      "Quantum-proof encryption that future-proofs your data for the post-quantum computing era — deployed and rotated automatically today.",
    benefits: ["Post-quantum algorithms", "Perfect forward secrecy", "Key rotation automation"],
    metric: { value: "CRYSTALS", label: "Kyber + Dilithium" },
    level: "PRIMED",
  },
];

const levelStyles: Record<Feature["level"], string> = {
  ACTIVE: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
  PRIMED: "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400",
  AUTO: "bg-brand/10 border-brand/30 text-brand-ink",
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* Geometric Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[-5%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-brand/20 to-transparent transform -rotate-12"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-brand/10 to-transparent transform rotate-6"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
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
              <span>Advanced Cyber Defense Grid</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Features That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-600">Stop Hackers</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We don't just stop attacks; we deter them instantly. Six modules of invisible protection — armed, calibrated, and operational the moment you deploy.
            </p>

            {/* Hero stat strip */}
            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-3 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm font-mono text-[11px] tracking-widest">
              <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                GRID ONLINE
              </span>
              <span className="text-slate-600 dark:text-slate-400">6 MODULES</span>
              <span className="text-slate-600 dark:text-slate-400">218 NODES</span>
              <span className="text-brand-ink">v3.0 // BOO</span>
            </div>
          </motion.div>
        </div>

        {/* Mobile carousel hint */}
        <div className="md:hidden flex items-center justify-between mb-3 px-1 text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">
          <span>Swipe to explore →</span>
          <span className="text-brand-ink">06 MODULES</span>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 md:mx-0 px-6 md:px-0 scroll-px-6 md:scroll-px-0 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden p-7 md:p-8 rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-slate-700 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 group shrink-0 w-[82%] md:w-auto snap-start"
            >
              {/* Card decoration */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -top-16 -right-16 w-44 h-44 bg-brand/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,179,49,0.06),transparent_55%)]"></div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"></div>
              </div>

              <div className="relative">
                {/* Top row: icon + status pill */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 bg-brand/10 dark:bg-brand/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-1 ring-brand/20">
                    {feature.icon}
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest border ${levelStyles[feature.level]}`}>
                    <span className="w-1 h-1 rounded-full bg-current animate-pulse"></span>
                    {feature.level}
                  </div>
                </div>

                {/* Codename + title */}
                <div className="font-mono text-[10px] tracking-[0.25em] text-brand-ink/80 mb-1">
                  {feature.codename}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-5">
                  {feature.description}
                </p>

                {/* Metric chip */}
                <div className="flex items-center justify-between mb-5 p-3 rounded-lg bg-gradient-to-br from-slate-100/60 to-transparent dark:from-slate-800/60 dark:to-transparent border border-slate-200 dark:border-slate-700">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-slate-600 dark:text-slate-400 uppercase">
                      {feature.metric.label}
                    </div>
                    <div className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {feature.metric.value}
                    </div>
                  </div>
                  <Zap className="w-5 h-5 text-brand-ink shrink-0" />
                </div>

                <div className="space-y-2.5 pt-5 border-t border-slate-200 dark:border-slate-700">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-ink mr-2 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust + Stats Section */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800"
        >
            <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 text-brand-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>SOC2 Type II Certified</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-600">Uncompromisingly Secure</span>
                </h3>
                <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                    From Fortune 500 corporations to government research labs, BOO Security protects the infrastructure that matters most — without ever losing a single byte.
                </p>
            </div>

            {/* Logo strip */}
            <div className="relative mb-10 md:mb-14 py-5 md:py-6 border-y border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl overflow-hidden">
                <div aria-hidden="true" className="pointer-events-none hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
                <div aria-hidden="true" className="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-x-6 md:gap-x-10 lg:gap-x-14 gap-y-4 md:gap-y-5 px-2">
                    {[
                        { name: "TECHCORP", sub: "Fortune 500" },
                        { name: "SECUREDATA", sub: "Fintech" },
                        { name: "NETSYS", sub: "Telecom" },
                        { name: "CYBERNET", sub: "Defense" },
                        { name: "QUANTUMX", sub: "Research" },
                        { name: "VAULTLY", sub: "Health" },
                    ].map((c) => (
                        <div key={c.name} className="flex flex-col items-center text-center group">
                            <div className="text-sm md:text-base lg:text-lg font-bold tracking-widest text-slate-700 dark:text-slate-300 opacity-70 group-hover:opacity-100 transition-opacity">
                                {c.name}
                            </div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500 mt-0.5">
                                {c.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {[
                    { value: "100%", label: "Uptime Guarantee", sub: "Even under attack", trend: "+0.00%" },
                    { value: "24/7", label: "Continuous Monitoring", sub: "Eyes always watching", trend: "LIVE" },
                    { value: "0ms", label: "Latency Added", sub: "Faster than fear", trend: "p99" },
                    { value: "500+", label: "Threats Eliminated", sub: "Daily interventions", trend: "↑ today" },
                ].map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="relative overflow-hidden p-4 md:p-6 bg-white dark:bg-surface rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-brand/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300"
                    >
                        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
                        <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-10 w-28 md:w-32 h-28 md:h-32 bg-brand/10 rounded-full blur-3xl"></div>

                        <div className="relative flex items-start justify-between gap-2 mb-2 md:mb-3">
                            <div className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand to-amber-700 dark:to-amber-300 tracking-tight leading-none">
                                {s.value}
                            </div>
                            <span className="shrink-0 text-[9px] md:text-[10px] font-mono tracking-widest text-brand-ink/90 bg-brand/10 border border-brand/20 px-1.5 py-0.5 rounded whitespace-nowrap">
                                {s.trend}
                            </span>
                        </div>
                        <div className="relative font-bold text-slate-900 dark:text-white text-[13px] md:text-sm leading-tight mb-1">{s.label}</div>
                        <div className="relative text-[11px] md:text-xs text-slate-600 dark:text-slate-400">{s.sub}</div>
                    </motion.div>
                ))}
            </div>

            {/* Compliance strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-mono tracking-widest uppercase text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-ink" /> SOC2 Type II</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-ink" /> ISO 27001</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-ink" /> HIPAA</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-ink" /> GDPR</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-ink" /> FedRAMP</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
