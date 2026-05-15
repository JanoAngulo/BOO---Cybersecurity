import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScanEye, FileSearch, DatabaseBackup, ArrowUpRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { ServiceDetail } from './ServiceDetail';

const services = [
  {
    title: "Advanced Threat Detection",
    tagline: "AI-driven 24/7 prevention, detection & response",
    description:
      "Stop known and zero-day threats before they reach your perimeter. Our AI SOC fuses endpoint telemetry, behavioral analytics, and global intel into a single autonomous defense loop.",
    icon: <ScanEye className="w-10 h-10 text-white" />,
    gradient: "from-brand to-orange-500",
    accent: "amber",
    metric: { value: "<50ms", label: "Mean detection time" },
    capabilities: [
      "AI-powered behavioral analytics",
      "Endpoint + network unified telemetry",
      "Zero-day exploit shielding",
      "Autonomous SOC playbooks",
    ],
    stack: ["EDR", "XDR", "NDR", "SIEM"],
    kpis: [
      { value: "<50ms", label: "Detection latency" },
      { value: "99.97%", label: "True-positive rate" },
      { value: "4.2B", label: "Events / day" },
      { value: "24/7", label: "Human + AI SOC" },
    ],
    useCases: [
      { title: "Ransomware kill-chain", desc: "Disrupts encryption staging in under 3s of process exec." },
      { title: "Supply-chain anomaly", desc: "Flags signed-binary drift across CI/CD artifacts." },
      { title: "Insider exfiltration", desc: "Detects abnormal data-egress patterns by role." },
    ],
    specs: [
      { label: "Architecture", value: "Distributed agents + cloud SOC" },
      { label: "Latency", value: "< 50ms edge response" },
      { label: "Encryption", value: "AES-256 / ChaCha20" },
      { label: "Compliance", value: "SOC2, HIPAA, GDPR, ISO 27001" },
      { label: "Deployment", value: "Agent + agentless" },
      { label: "Telemetry", value: "OpenTelemetry, eBPF" },
    ],
    integrations: ["AWS", "Azure", "GCP", "Kubernetes", "CrowdStrike", "Splunk", "Okta", "Datadog"],
    process: [
      { title: "Assessment", desc: "Map your current attack surface and existing tooling gaps." },
      { title: "Agent rollout", desc: "Zero-downtime deployment via your existing MDM/CI pipeline." },
      { title: "Baseline calibration", desc: "AI learns normal behavior across users and workloads (24–48h)." },
      { title: "Active defense", desc: "Autonomous playbooks neutralize threats; analysts validate." },
    ],
    codeSnippet:
`import { Shield } from '@boo-security/core';

const defense = new Shield({
  apiKey: process.env.BOO_KEY,
  mode: 'active_defense',
  signals: ['edr', 'network', 'identity'],
});

defense.on('threat', (t) => t.severity === 'critical' && t.contain());`,
  },
  {
    title: "Incident Response & Forensics",
    tagline: "Triage, contain, and prove out every incident",
    description:
      "When something slips through, we move at machine speed. Our analysts pair with automated triage and chain-of-custody forensics to contain blast radius and shorten dwell time to minutes.",
    icon: <FileSearch className="w-10 h-10 text-white" />,
    gradient: "from-brand to-yellow-600",
    accent: "gold",
    metric: { value: "12 min", label: "Average containment" },
    capabilities: [
      "Tier-1 to Tier-3 triage on-call",
      "Forensic chain-of-custody capture",
      "Threat intel curation & enrichment",
      "Compliance-grade incident reports",
    ],
    stack: ["DFIR", "MITRE ATT&CK", "SOAR", "Audit"],
    kpis: [
      { value: "12 min", label: "Avg containment" },
      { value: "<5 min", label: "Page-out SLA" },
      { value: "100%", label: "Chain of custody" },
      { value: "MITRE", label: "ATT&CK mapped" },
    ],
    useCases: [
      { title: "Active ransomware event", desc: "Isolate hosts, capture memory, and freeze blast radius." },
      { title: "Insider misuse case", desc: "Court-admissible timeline reconstruction within hours." },
      { title: "Cloud account takeover", desc: "Token revocation + IAM forensics across SaaS apps." },
    ],
    specs: [
      { label: "Response SLA", value: "< 5 min page-out, 24/7/365" },
      { label: "Forensic format", value: "RFC 3227 chain-of-custody" },
      { label: "Coverage", value: "Endpoint, cloud, identity, email" },
      { label: "Compliance", value: "NIST 800-61, ISO 27035" },
      { label: "Retention", value: "Up to 7y immutable evidence" },
      { label: "Playbooks", value: "120+ MITRE-mapped" },
    ],
    integrations: ["Splunk", "ServiceNow", "Jira", "Slack", "PagerDuty", "CrowdStrike", "SentinelOne", "Velociraptor"],
    process: [
      { title: "Page-out", desc: "Tier-1 on-call acknowledges within 5 minutes of detection." },
      { title: "Triage & contain", desc: "Automated playbooks isolate affected assets in parallel." },
      { title: "Forensics", desc: "Memory + disk capture with cryptographic chain-of-custody." },
      { title: "Recovery & report", desc: "Compliance-grade post-incident report within 72h." },
    ],
    codeSnippet:
`import { IR } from '@boo-security/ir';

const ticket = await IR.open({
  severity: 'high',
  artifacts: ['edr-alert-9821', 'auth-trace-44'],
});

await ticket.containHost('web-prod-04');
await ticket.captureMemory();   // chain-of-custody preserved`,
  },
  {
    title: "Managed Backup Services",
    tagline: "Anytime-anywhere data recovery you can trust",
    description:
      "Survive ransomware, hardware failure, and operator error. Immutable, geo-redundant backups paired with health analytics keep your data — and your business — operational under any scenario.",
    icon: <DatabaseBackup className="w-10 h-10 text-white" />,
    gradient: "from-yellow-500 to-brand",
    accent: "amber",
    metric: { value: "99.999%", label: "Durability SLA" },
    capabilities: [
      "Immutable, ransomware-proof snapshots",
      "Geo-redundant multi-region storage",
      "Point-in-time recovery (1-min RPO)",
      "Backup health analytics dashboard",
    ],
    stack: ["S3", "Azure", "GCP", "On-prem"],
    kpis: [
      { value: "99.999%", label: "Durability" },
      { value: "1 min", label: "RPO" },
      { value: "< 15 min", label: "RTO" },
      { value: "3+", label: "Geo regions" },
    ],
    useCases: [
      { title: "Ransomware rollback", desc: "Restore to a clean snapshot within 15 minutes." },
      { title: "Compliance audits", desc: "WORM-locked, 7-year retention with audit trail." },
      { title: "Migration safety net", desc: "Continuous backup during cloud / DC migrations." },
    ],
    specs: [
      { label: "Durability", value: "99.999% (11 nines)" },
      { label: "RPO / RTO", value: "1 min / < 15 min" },
      { label: "Encryption", value: "AES-256 at rest + TLS 1.3" },
      { label: "Compliance", value: "SOC2, HIPAA, GDPR, FedRAMP" },
      { label: "Storage tiers", value: "Hot, warm, cold (Glacier)" },
      { label: "Immutability", value: "S3 Object Lock / WORM" },
    ],
    integrations: ["AWS S3", "Azure Blob", "GCS", "VMware", "Postgres", "MongoDB", "Kubernetes", "On-prem NAS"],
    process: [
      { title: "Inventory", desc: "Discover and classify data sources across your environment." },
      { title: "Policy", desc: "Define RPO / RTO, retention, and immutability windows per dataset." },
      { title: "Continuous backup", desc: "Incremental snapshots stream to geo-redundant storage." },
      { title: "Verified restore", desc: "Quarterly drill-restores prove recovery actually works." },
    ],
    codeSnippet:
`import { Vault } from '@boo-security/backup';

const policy = await Vault.policy({
  source: 'postgres://prod-db',
  rpo: '1m', retention: '7y',
  regions: ['us-east-1', 'eu-west-1'],
  immutable: true,
});

await policy.test('drill-restore');`,
  },
];

export function DetailedServices() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden min-h-[800px]">
      {/* Background Decor */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        {/* Base Texture & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Cyber-Security HUD Elements - Creating a "framed" layout feel */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-50"></div>
        
        {/* Left Vertical HUD Line */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent hidden xl:block"></div>
        {/* Right Vertical HUD Line */}
        <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent hidden xl:block"></div>

        {/* Abstract Digital Image Overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 mix-blend-soft-light">
             <img 
                src="https://images.unsplash.com/photo-1762264644162-363c5b4e151d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZCUyMGRhcmslMjBnb2xkfGVufDF8fHx8MTc3MDg3MDY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover"
            />
        </div>

        {/* Ambient Glows for Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px]"></div>
      </div>

        <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {selectedService === null ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-16">
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
                    <span>System Capabilities</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Comprehensive Cybersecurity Defense
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Deep-dive capabilities to eliminate threats from your digital infrastructure.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden flex flex-col h-full bg-white dark:bg-surface backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedService(index)}
                  >
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-80">
                      <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-25 transition-opacity duration-500`}></div>
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"></div>
                      <svg className="absolute bottom-4 right-4 w-24 h-24 text-brand/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                        <path d="M0 50 L100 50 M50 0 L50 100" />
                        <circle cx="50" cy="50" r="20" />
                        <circle cx="50" cy="50" r="40" strokeDasharray="2 6" />
                      </svg>
                    </div>
                    <div className="p-7 flex flex-col h-full relative">
                      {/* Top row: icon + index chip */}
                      <div className="flex justify-between items-start mb-5">
                        <div className="flex items-center gap-3">
                          <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                            {React.cloneElement(service.icon as React.ReactElement, { className: "w-7 h-7 text-white" })}
                            <div className="absolute -inset-1 rounded-xl border border-brand/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-mono text-[10px] tracking-[0.25em] text-brand-ink/80">
                              CAPABILITY · 0{index + 1}
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-500">
                              MODULE / ACTIVE
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Title + tagline */}
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-brand-ink transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[13px] font-medium text-brand-ink mb-4">
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-5">
                        {service.description}
                      </p>

                      {/* Metric chip */}
                      <div className="relative mb-5 p-3 rounded-xl bg-gradient-to-br from-slate-100/60 to-transparent dark:from-slate-800/60 dark:to-transparent border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="absolute -right-6 -top-6 w-20 h-20 bg-brand/10 rounded-full blur-2xl"></div>
                        <div className="relative flex items-baseline justify-between">
                          <div className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {service.metric.value}
                          </div>
                          <Sparkles className="w-4 h-4 text-brand-ink" />
                        </div>
                        <div className="relative text-[10px] font-mono tracking-widest text-slate-600 dark:text-slate-400 uppercase mt-0.5">
                          {service.metric.label}
                        </div>
                      </div>

                      {/* Capability bullets */}
                      <ul className="space-y-2 mb-5 flex-1">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <ShieldCheck className="w-4 h-4 text-brand-ink mt-0.5 shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.stack.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer / Action */}
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm font-medium">
                        <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-xs font-mono uppercase tracking-wider">
                          <Zap className="w-3 h-3 text-brand-ink" /> Tap for spec
                        </span>
                        <button className="cursor-pointer flex items-center gap-1.5 text-brand-ink font-semibold group-hover:gap-2.5 transition-all">
                          Explore
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
             <ServiceDetail 
                key="detail" 
                service={services[selectedService]} 
                onClose={() => setSelectedService(null)} 
             />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
