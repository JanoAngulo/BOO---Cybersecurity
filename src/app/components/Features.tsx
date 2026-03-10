import React from 'react';
import { Shield, Database, Zap, Lock, Ghost, EyeOff, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Ghost className="w-8 h-8 text-[#e2b331]" />,
    title: "Stealth Protocol",
    description: "Our proprietary algorithms operate in the background, undetectable by intruders until it's too late. We utilize polymorphic code that shifts every 60 seconds.",
    benefits: ["Polymorphic code engine", "Zero-day exploit shielding", "Silent alarm triggers"]
  },
  {
    icon: <Shield className="w-8 h-8 text-[#e2b331]" />,
    title: "Invisible Shield",
    description: "Layer 7 protection that wraps your infrastructure in a robust barrier. It filters 99.9% of malicious traffic before it even touches your server.",
    benefits: ["DDoS mitigation", "WAF integration", "Real-time IP reputation"]
  },
  {
    icon: <Database className="w-8 h-8 text-[#e2b331]" />,
    title: "Data Preservation",
    description: "Your data is secured in our encrypted vaults. We use sharded storage across multiple dimensions (availability zones) to ensure zero data loss.",
    benefits: ["AES-256 encryption", "Immutable backups", "Geo-redundancy"]
  },
  {
    icon: <Zap className="w-8 h-8 text-[#e2b331]" />,
    title: "Active Response",
    description: "Active defense systems that deploy counter-measures instantly. When a breach is attempted, our system automatically isolates and neutralizes the threat.",
    benefits: ["Automated countermeasures", "Honey-pot deployment", "Attacker disorientation"]
  },
  {
    icon: <EyeOff className="w-8 h-8 text-[#e2b331]" />,
    title: "Obfuscation Tech",
    description: "Mask your digital footprint completely. Be everywhere and nowhere at once with our rotating proxy network and header obfuscation.",
    benefits: ["IP masking", "Header obfuscation", "VPN-less anonymity"]
  },
  {
    icon: <Lock className="w-8 h-8 text-[#e2b331]" />,
    title: "Quantum Encryption",
    description: "Quantum-proof encryption that stands the test of time. We prepare your data for the post-quantum computing era today.",
    benefits: ["Post-quantum algorithms", "Perfect forward secrecy", "Key rotation automation"]
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* Geometric Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[-5%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-[#e2b331]/20 to-transparent transform -rotate-12"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#e2b331]/10 to-transparent transform rotate-6"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#e2b331]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#e2b331]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#e2b331]/10 border border-[#e2b331]/20 text-[#e2b331] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e2b331] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e2b331]"></span>
              </span>
              <span>Advanced Cyber Defense Grid</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Features That <span className="text-[#e2b331]">Stop Hackers</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We don't just stop attacks; we deter them instantly. Our advanced cybersecurity suite provides invisible protection against visible threats, ensuring your digital assets remain strictly secure.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white dark:bg-[#0f1526] border border-slate-100 dark:border-slate-700 hover:border-[#e2b331]/30 hover:shadow-xl hover:shadow-[#e2b331]/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#e2b331]/10 dark:bg-[#e2b331]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-[#e2b331] mr-2 shrink-0" />
                        {benefit}
                    </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats / Trust Section */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800"
        >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        Trusted by the <span className="text-[#e2b331]">Uncompromisingly Secure</span>
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                        From Fortune 500 corporations to government research labs, BOO Security protects the infrastructure that matters most. We've handled the most complex cyber intrusions in digital history without a single byte lost.
                    </p>
                    <div className="flex items-center space-x-2 text-sm font-medium text-[#e2b331]">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>SOC2 Type II Certified Experts</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {/* Mock Client Logos */}
                    <div className="flex items-center justify-center h-16 bg-slate-200 dark:bg-[#0f1526] rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 font-bold tracking-widest opacity-70 hover:opacity-100 transition-opacity">
                        TECH<span className="text-slate-400 dark:text-slate-600">CORP</span>
                    </div>
                    <div className="flex items-center justify-center h-16 bg-slate-200 dark:bg-[#0f1526] rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 font-bold tracking-widest opacity-70 hover:opacity-100 transition-opacity">
                        SECURE<span className="text-slate-400 dark:text-slate-600">DATA</span>
                    </div>
                    <div className="flex items-center justify-center h-16 bg-slate-200 dark:bg-[#0f1526] rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 font-bold tracking-widest opacity-70 hover:opacity-100 transition-opacity">
                        NET<span className="text-slate-400 dark:text-slate-600">SYS</span>
                    </div>
                    <div className="flex items-center justify-center h-16 bg-slate-200 dark:bg-[#0f1526] rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 font-bold tracking-widest opacity-70 hover:opacity-100 transition-opacity">
                        CYBER<span className="text-slate-400 dark:text-slate-600">NET</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 bg-white dark:bg-[#0f1526] rounded-2xl border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-4xl font-bold text-[#e2b331] mb-2">100%</div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1">Uptime Guarantee</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Even under attack</div>
                </div>
                <div className="p-6 bg-white dark:bg-[#0f1526] rounded-2xl border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-4xl font-bold text-[#e2b331] mb-2">24/7</div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1">Continuous Monitoring</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Eyes always watching</div>
                </div>
                <div className="p-6 bg-white dark:bg-[#0f1526] rounded-2xl border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-4xl font-bold text-[#e2b331] mb-2">0ms</div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1">Latency Added</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Faster than fear</div>
                </div>
                <div className="p-6 bg-white dark:bg-[#0f1526] rounded-2xl border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-4xl font-bold text-[#e2b331] mb-2">500+</div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1">Threats Eliminated</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Daily interventions</div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
