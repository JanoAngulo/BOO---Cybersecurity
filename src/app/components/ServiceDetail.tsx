import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceDetailProps {
  service: any;
  onClose: () => void;
}

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'specs', label: 'Technical Specs' },
  { id: 'process', label: 'Implementation' }
];

export function ServiceDetail({ service, onClose }: ServiceDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto bg-white dark:bg-[#0f1526] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative"
    >
      {/* Header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <button 
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-slate-900 dark:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-white dark:from-[#0f1526] to-transparent">
          <div className="flex items-center gap-4 mb-2">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
              {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{service.title}</h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Tabs Navigation */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8 border-b border-slate-200 dark:border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer relative px-4 py-3 md:py-4 text-left md:text-center text-sm font-medium transition-colors md:min-w-[120px] ${
                activeTab === tab.id 
                  ? "text-[#e2b331] bg-[#e2b331]/5 md:bg-transparent" 
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 md:hover:bg-transparent"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bg-[#e2b331] left-0 top-0 bottom-0 w-1 md:w-full md:h-0.5 md:top-auto md:bottom-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
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
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#e2b331] shrink-0" />
                          <span>Enterprise-grade protection scaling</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#e2b331] shrink-0" />
                          <span>24/7 autonomous monitoring & response</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#e2b331] shrink-0" />
                          <span>Seamless integration with existing stack</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Ready to deploy?</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Our team can have this module active in your environment within 48 hours.
                        </p>
                      </div>
                      <button className="cursor-pointer mt-4 flex items-center justify-between w-full px-4 py-3 bg-[#e2b331] hover:bg-[#c59a20] text-white rounded-lg font-semibold transition-colors">
                        <span>Initiate Protocol</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">System Requirements</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { label: "Architecture", value: "Microservices / Serverless", icon: "🏗️" },
                        { label: "Latency", value: "< 50ms edge response", icon: "⚡" },
                        { label: "Encryption", value: "AES-256 / ChaCha20", icon: "🔒" },
                        { label: "Compliance", value: "SOC2, HIPAA, GDPR", icon: "📜" }
                      ].map((item, i) => (
                        <div key={i} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800 flex flex-col justify-center">
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">{item.label}</span>
                          <span className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-200">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Integration Points</h4>
                    <div className="flex flex-wrap gap-2">
                      {["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Splunk"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-slate-900 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                      <code>
                        <span className="text-[#e2b331]">npm</span> install @boo-security/core<br/>
                        <span className="text-purple-400">import</span> {'{ Shield }'} <span className="text-purple-400">from</span> '@boo-security/core';<br/><br/>
                        <span className="text-blue-400">const</span> defense = <span className="text-purple-400">new</span> Shield({'{'}<br/>
                        &nbsp;&nbsp;apiKey: process.env.BOO_KEY,<br/>
                        &nbsp;&nbsp;mode: 'active_defense'<br/>
                        {'}'});
                      </code>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'process' && (
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
                    {[
                      { title: "Assessment", desc: "We scan your current infrastructure for vulnerabilities." },
                      { title: "Deployment", desc: "Zero-downtime installation of our security agents." },
                      { title: "Calibration", desc: "AI models learn your normal traffic patterns (24-48h)." },
                      { title: "Active Defense", desc: "System goes live, actively neutralizing threats." }
                    ].map((step, i) => (
                      <div key={i} className="relative pl-12 pb-8 last:pb-0">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white dark:bg-[#0f1526] border-2 border-[#e2b331] text-[#e2b331] flex items-center justify-center font-bold text-sm z-10">
                          {i + 1}
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">{step.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 mt-1">{step.desc}</p>
                      </div>
                    ))}
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