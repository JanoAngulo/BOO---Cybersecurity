import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';

const plans = [
  {
    name: "Standard",
    price: "$0",
    description: "Basic visibility for personal devices.",
    features: [
      "Single Device Protection",
      "Basic Firewall",
      "Daily Scans",
      "Email Support"
    ],
  },
  {
    name: "Advanced",
    price: "$29",
    description: "Advanced stealth for growing teams.",
    popular: true,
    features: [
      "Up to 10 Devices",
      "Advanced Obfuscation",
      "Real-time Threat Elimination",
      "24/7 Priority Support",
      "Dark Web Monitoring"
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Total invisibility for enterprise.",
    features: [
      "Unlimited Devices",
      "Dedicated Security Analyst",
      "On-premise Deployment",
      "Custom Audit Logs",
      "SLA Guarantee"
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={clsx(
                "relative p-8 rounded-2xl border transition-all duration-300 flex flex-col",
                plan.popular
                  ? "bg-white dark:bg-[#0f1526] border-[#e2b331] shadow-2xl shadow-[#e2b331]/20 scale-105 z-10"
                  : "bg-white dark:bg-[#0f1526] border-slate-200 dark:border-slate-800 hover:border-[#e2b331]/50"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#e2b331] to-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap text-center">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500 dark:text-slate-400 ml-2">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-[#e2b331] mr-3 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  "cursor-pointer w-full py-3 px-6 rounded-lg font-semibold transition-colors",
                  plan.popular
                    ? "bg-[#e2b331] text-white hover:bg-[#c59a20]"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                )}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
