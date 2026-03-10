import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScanEye, FileSearch, DatabaseBackup } from 'lucide-react';
import { ServiceDetail } from './ServiceDetail';

const services = [
  {
    title: "Advanced Threat Detection",
    description: "Stay a step ahead of detected and undetected cyberthreats and stop them in their tracks with 24/7 threat prevention, detection and response capabilities powered by AI—all while improving the productivity of your security operations center. Leverage endpoint monitoring and management features to secure all devices across your environments and mitigate endpoint attacks.",
    icon: <ScanEye className="w-10 h-10 text-white" />,
    gradient: "from-[#e2b331] to-orange-500"
  },
  {
    title: "Incident Response and Forensics",
    description: "Investigate and respond to a detected security incident by leveraging capabilities such as incident triage, incident response, threat intelligence curation and management, compliance monitoring and management. Take advantage of preventative and proactive services, significantly reducing the time to respond to an incident.",
    icon: <FileSearch className="w-10 h-10 text-white" />,
    gradient: "from-[#e2b331] to-yellow-600"
  },
  {
    title: "Managed Backup Services",
    description: "Minimize data loss risk with our fully managed data backup services that provide ‘anytime, anywhere’ access to your information—and help you protect and retrieve critical data quickly after a cyber incident. You can flexibly scale your backup data volume according to your business needs. The analytics feature help you monitor the health of your data protection environment and support information resiliency.",
    icon: <DatabaseBackup className="w-10 h-10 text-white" />,
    gradient: "from-yellow-500 to-[#e2b331]"
  }
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
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e2b331]/50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e2b331]/50 to-transparent opacity-50"></div>
        
        {/* Left Vertical HUD Line */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#e2b331]/30 to-transparent hidden xl:block"></div>
        {/* Right Vertical HUD Line */}
        <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#e2b331]/30 to-transparent hidden xl:block"></div>

        {/* Abstract Digital Image Overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 mix-blend-soft-light">
             <img 
                src="https://images.unsplash.com/photo-1762264644162-363c5b4e151d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZCUyMGRhcmslMjBnb2xkfGVufDF8fHx8MTc3MDg3MDY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover"
            />
        </div>

        {/* Ambient Glows for Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e2b331]/5 rounded-full blur-[120px]"></div>
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
                  <div className="inline-flex items-center space-x-2 bg-[#e2b331]/10 border border-[#e2b331]/20 text-[#e2b331] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e2b331] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e2b331]"></span>
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
                    className="group flex flex-col h-full bg-white dark:bg-[#0f1526] backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#e2b331]/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedService(index)}
                  >
                    <div className="p-8 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                         <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                            {React.cloneElement(service.icon as React.ReactElement, { className: "w-7 h-7 text-white" })}
                         </div>
                         <div className="text-4xl font-bold text-slate-300 dark:text-slate-700 select-none">
                            0{index + 1}
                         </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#e2b331] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description - Flex grow to push footer down */}
                      <div className="flex-1 mb-8">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm lg:text-base">
                          {service.description}
                        </p>
                      </div>

                      {/* Footer / Action */}
                      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm font-medium">
                         <span className="text-slate-500 dark:text-slate-500">View Documentation</span>
                         <button className="cursor-pointer flex items-center gap-2 text-[#e2b331] group-hover:translate-x-1 transition-transform">
                            Explore
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
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
