import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, Target, FileCode2, Workflow, ShieldCheck, Zap } from 'lucide-react';

interface ServiceDetailProps {
  service: any;
  onClose: () => void;
}

const tabs = [
  { id: 'overview', label: 'Overview', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'specs', label: 'Technical Specs', icon: <FileCode2 className="w-3.5 h-3.5" /> },
  { id: 'process', label: 'Implementation', icon: <Workflow className="w-3.5 h-3.5" /> },
];

export function ServiceDetail({ service, onClose }: ServiceDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full bg-white dark:bg-surface rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative"
    >
      {/* Header */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_85%)]"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-12 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <svg aria-hidden="true" className="absolute top-6 right-16 w-36 h-36 text-brand/15" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6">
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="35" strokeDasharray="2 5" />
          <circle cx="50" cy="50" r="48" />
        </svg>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close service detail"
          className="cursor-pointer absolute top-4 right-4 z-10 p-2 bg-white/70 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md rounded-full text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="absolute top-4 left-6 flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-brand-ink">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
          MODULE · ACTIVE
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-white dark:from-surface via-white/80 dark:via-surface/80 to-transparent">
          <div className="flex items-start gap-4 mb-2">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg shrink-0`}>
              {React.cloneElement(service.icon, { className: 'w-7 h-7 text-white' })}
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">{service.title}</h2>
              <p className="text-sm md:text-base text-brand-ink font-medium mt-1">{service.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* KPI strip */}
      {service.kpis && (
        <div className="px-6 md:px-8 -mt-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            {service.kpis.map((kpi: any, i: number) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{kpi.value}</div>
                <div className="text-[10px] font-mono tracking-widest text-slate-600 dark:text-slate-400 uppercase mt-0.5">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Tabs Navigation */}
        <div className="flex flex-col md:flex-row md:space-x-2 mb-6 border-b border-slate-200 dark:border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer relative px-4 py-3 md:py-4 text-left md:text-center text-sm font-semibold transition-colors md:min-w-[140px] flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'text-brand-ink bg-brand/5 md:bg-transparent'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 md:hover:bg-transparent'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bg-brand left-0 top-0 bottom-0 w-1 md:w-full md:h-0.5 md:top-auto md:bottom-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <p className="text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Capabilities */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-brand-ink" /> Core Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {(service.capabilities || []).map((cap: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-brand-ink shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use cases */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4 text-brand-ink" /> Real-world Use Cases
                      </h4>
                      <ul className="space-y-4">
                        {(service.useCases || []).map((u: any, i: number) => (
                          <li key={i}>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white">{u.title}</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{u.desc}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA banner */}
                  <div className="relative overflow-hidden rounded-xl border border-brand/30 bg-gradient-to-r from-brand/10 via-transparent to-amber-500/10 p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Ready to deploy?</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                        Our team can have this module active in your environment within 48 hours.
                      </p>
                    </div>
                    <button type="button" className="cursor-pointer flex items-center justify-between gap-2 px-5 py-3 bg-brand hover:bg-brand-strong text-slate-900 rounded-lg font-bold transition-colors whitespace-nowrap group">
                      <span>Initiate Protocol</span>
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                      <FileCode2 className="w-4 h-4 text-brand-ink" /> System Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(service.specs || []).map((item: any, i: number) => (
                        <div key={i} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
                          <span className="block text-[10px] text-slate-600 dark:text-slate-400 font-mono uppercase tracking-widest mb-1">{item.label}</span>
                          <span className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-200">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                      <Zap className="w-4 h-4 text-brand-ink" /> Integration Points
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {(service.integrations || []).map((tech: string) => (
                        <span key={tech} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-mono font-semibold border border-slate-200 dark:border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="relative p-4 bg-slate-950 rounded-lg font-mono text-[12px] text-slate-300 overflow-x-auto border border-slate-800">
                      <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 py-1.5 border-b border-slate-800 bg-slate-900 rounded-t-lg">
                        <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500/70"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500/70"></span>
                        <span className="ml-2 text-[10px] text-slate-500">example.ts</span>
                      </div>
                      <pre className="pt-8 leading-relaxed whitespace-pre">{service.codeSnippet}</pre>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'process' && (
                <div className="space-y-8">
                  <p className="text-sm text-slate-700 dark:text-slate-300 max-w-2xl">
                    From discovery to active defense in days, not quarters. Each step is run by a dedicated engineer paired with our automation.
                  </p>
                  <div className="relative">
                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand/40 via-brand/20 to-transparent"></div>
                    {(service.process || []).map((step: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="relative pl-14 pb-8 last:pb-0"
                      >
                        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-white dark:bg-surface border-2 border-brand text-brand-ink flex items-center justify-center font-bold text-sm z-10 shadow-[0_0_0_4px_rgba(226,179,49,0.12)]">
                          {i + 1}
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">{step.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm leading-relaxed">{step.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Average time to value</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">From kick-off to production-grade defense</div>
                    </div>
                    <div className="text-2xl font-extrabold text-brand-ink">~ 5 business days</div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
