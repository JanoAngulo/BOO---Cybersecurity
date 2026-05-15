import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Crown, Sparkles, ArrowRight, X } from 'lucide-react';
import { clsx } from 'clsx';

type Plan = {
  name: string;
  tagline: string;
  price: { monthly: number | "Custom"; annual: number | "Custom" };
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
  badge?: string;
  meta: { devices: string; sla: string; support: string };
  features: { label: string; included: boolean }[];
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Standard",
    tagline: "Personal perimeter defense",
    price: { monthly: 0, annual: 0 },
    description: "Get the essentials to keep a single device under continuous protection.",
    icon: <Shield className="w-5 h-5" />,
    meta: { devices: "1 device", sla: "Best effort", support: "Email" },
    features: [
      { label: "Single device protection", included: true },
      { label: "Basic firewall + daily scans", included: true },
      { label: "Email support", included: true },
      { label: "Real-time threat elimination", included: false },
      { label: "Dark web monitoring", included: false },
      { label: "Dedicated security analyst", included: false },
    ],
    cta: "Start free",
  },
  {
    name: "Advanced",
    tagline: "Active stealth for growing teams",
    price: { monthly: 29, annual: 23 },
    description: "Autonomous threat elimination and 24/7 response for teams that need to move fast.",
    icon: <Zap className="w-5 h-5" />,
    popular: true,
    badge: "Most Popular",
    meta: { devices: "Up to 10 devices", sla: "99.95% uptime", support: "24/7 priority" },
    features: [
      { label: "Up to 10 devices", included: true },
      { label: "Advanced obfuscation engine", included: true },
      { label: "Real-time threat elimination", included: true },
      { label: "24/7 priority support", included: true },
      { label: "Dark web monitoring", included: true },
      { label: "Dedicated security analyst", included: false },
    ],
    cta: "Get Protected",
  },
  {
    name: "Enterprise",
    tagline: "Total invisibility, custom-fit",
    price: { monthly: "Custom", annual: "Custom" },
    description: "On-prem deployment, white-glove forensics, and a security analyst on retainer.",
    icon: <Crown className="w-5 h-5" />,
    badge: "Custom SLA",
    meta: { devices: "Unlimited", sla: "Custom SLA", support: "Dedicated CSM" },
    features: [
      { label: "Unlimited devices", included: true },
      { label: "Dedicated security analyst", included: true },
      { label: "On-premise deployment", included: true },
      { label: "Custom audit logs & reporting", included: true },
      { label: "Tailored SLA guarantee", included: true },
      { label: "Quarterly red-team exercises", included: true },
    ],
    cta: "Talk to sales",
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  const formatPrice = (p: Plan["price"]) => {
    const v = annual ? p.annual : p.monthly;
    return v === "Custom" ? "Custom" : `$${v}`;
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Section decor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]"></div>
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 text-brand-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              <span>Pricing</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-600">Plan</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Cancel anytime.
            </p>
          </motion.div>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full bg-white dark:bg-surface border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={clsx(
                "cursor-pointer relative px-5 py-2 rounded-full text-sm font-semibold transition-colors",
                !annual ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900" : "text-slate-600 dark:text-slate-400"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={clsx(
                "cursor-pointer relative px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2",
                annual ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900" : "text-slate-600 dark:text-slate-400"
              )}
            >
              Annual
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-brand text-slate-900">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={clsx(
                "relative p-7 rounded-2xl border transition-all duration-300 flex flex-col",
                plan.popular
                  ? "bg-white dark:bg-surface border-brand shadow-2xl shadow-brand/20 md:scale-105 md:-my-3 z-10"
                  : "bg-white dark:bg-surface border-slate-200 dark:border-slate-800 hover:border-brand/50 hover:-translate-y-1"
              )}
            >
              {/* Decorative background */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]"></div>
                {plan.popular && (
                  <>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"></div>
                  </>
                )}
              </div>

              {/* Ribbon */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-r from-brand to-yellow-600 text-slate-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="relative z-[1] flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={clsx(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                    plan.popular
                      ? "bg-brand text-slate-900"
                      : "bg-slate-100 dark:bg-slate-800 text-brand-ink"
                  )}>
                    {plan.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{plan.name}</h3>
                    <p className="text-[12px] text-brand-ink font-medium">{plan.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {formatPrice(plan.price)}
                    </span>
                    {plan.price.monthly !== "Custom" && (
                      <span className="text-slate-600 dark:text-slate-400 ml-2 text-sm">
                        /{annual ? "mo, billed yearly" : "mo"}
                      </span>
                    )}
                  </div>
                  {annual && plan.price.monthly !== "Custom" && (plan.price.monthly as number) > 0 && (
                    <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      Save ${((plan.price.monthly as number) - (plan.price.annual as number)) * 12}/yr
                    </div>
                  )}
                  {plan.price.monthly === "Custom" && (
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      Volume + on-prem pricing
                    </div>
                  )}
                </div>

                {/* Meta chips */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    { label: "Devices", value: plan.meta.devices },
                    { label: "SLA", value: plan.meta.sla },
                    { label: "Support", value: plan.meta.support },
                  ].map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <div className="text-[9px] font-mono tracking-widest text-slate-600 dark:text-slate-400 uppercase mb-0.5">{m.label}</div>
                      <div className="text-[11px] font-semibold text-slate-900 dark:text-white leading-tight">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={clsx(
                      "flex items-start text-sm",
                      feature.included ? "text-slate-700 dark:text-slate-300" : "text-slate-400 dark:text-slate-600"
                    )}>
                      {feature.included ? (
                        <span className="w-5 h-5 mr-3 shrink-0 rounded-full bg-brand/15 flex items-center justify-center">
                          <Check className="w-3 h-3 text-brand-ink" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="w-5 h-5 mr-3 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          <X className="w-3 h-3 text-slate-400 dark:text-slate-600" strokeWidth={3} />
                        </span>
                      )}
                      <span className={feature.included ? "" : "line-through"}>{feature.label}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  className={clsx(
                    "cursor-pointer w-full py-3 px-6 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 group",
                    plan.popular
                      ? "bg-brand text-slate-900 hover:bg-brand-strong shadow-lg shadow-brand/30"
                      : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200"
                  )}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono tracking-widest uppercase text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-brand-ink" /> No setup fees</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-brand-ink" /> Cancel anytime</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-brand-ink" /> SOC2 type II</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-brand-ink" /> 30-day refund</span>
        </div>
      </div>
    </section>
  );
}
