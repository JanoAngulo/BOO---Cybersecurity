import React from "react";
import { motion } from "motion/react";
import { Linkedin, Twitter, Mail, MapPin, Shield } from "lucide-react";

type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
  location: string;
  expertise: string[];
  social: { linkedin: string; twitter: string; email: string };
};

const teamMembers: Member[] = [
  {
    name: "Dr. Elena Rostova",
    role: "Lead Cryptographer",
    image:
      "https://plus.unsplash.com/premium_photo-1763734694097-65bc788c78bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Former NSA analyst with a double PhD in Quantum Computing. Architects the core encryption protocols powering BOO's Shield system.",
    location: "Geneva, CH",
    expertise: ["Post-Quantum", "Cryptography", "ZK Proofs"],
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Marcus Chen",
    role: "Chief of Offensive Operations",
    image:
      "https://images.unsplash.com/photo-1641524215028-651f316fef3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Ethical hacker who has successfully breached 500+ enterprise networks. Now he builds the walls he used to break down.",
    location: "Singapore",
    expertise: ["Red Team", "Pentesting", "Zero-day Research"],
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Threat Intelligence",
    image:
      "https://images.unsplash.com/photo-1634149136549-47350a401065?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Specializes in dark-web surveillance and APT group tracking. Feeds real-time intel into our predictive AI models.",
    location: "Washington, DC",
    expertise: ["APT Tracking", "Dark Web", "OSINT"],
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "David Okafor",
    role: "Director of Network Engineering",
    image:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Expert in zero-trust architecture and high-availability systems. Keeps our defense grid online under massive DDoS loads.",
    location: "Lagos, NG",
    expertise: ["Zero-Trust", "Edge Networks", "HA Systems"],
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
];

export function TeamSection() {
  return (
    <div className="w-full">
      <div className="pt-20 mt-16 border-t border-slate-200 dark:border-slate-800 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 text-brand-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
            <Shield className="w-3 h-3" />
            <span>Command Center Operatives</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            The minds behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-600">machine</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm md:text-base">
            Decades of combined experience across offensive security, cryptography, and resilient infrastructure.
          </p>
        </div>

        {/* Mobile carousel hint */}
        <div className="sm:hidden flex items-center justify-between mb-3 px-1 text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">
          <span>Swipe to explore →</span>
          <span className="text-brand-ink">04 OPERATIVES</span>
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none -mx-4 sm:mx-0 px-6 sm:px-0 scroll-px-6 sm:scroll-px-0 pb-4 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col bg-white dark:bg-surface rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 shrink-0 w-[82%] sm:w-auto snap-start"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>

                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/95 text-slate-900 text-[10px] font-mono font-bold tracking-widest backdrop-blur-sm shadow">
                  <span className="w-1 h-1 rounded-full bg-slate-900 animate-pulse"></span>
                  OPERATIVE 0{index + 1}
                </div>

                <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-mono">
                  <MapPin className="w-2.5 h-2.5 text-brand" />
                  {member.location}
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs text-brand font-semibold mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {member.expertise.map((e) => (
                    <span
                      key={e}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-mono font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {e}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-1 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <a href={member.social.linkedin} aria-label={`${member.name} on LinkedIn`} className="w-8 h-8 rounded-md flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-ink hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Linkedin size={14} />
                  </a>
                  <a href={member.social.twitter} aria-label={`${member.name} on Twitter`} className="w-8 h-8 rounded-md flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-ink hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Twitter size={14} />
                  </a>
                  <a href={member.social.email} aria-label={`Email ${member.name}`} className="w-8 h-8 rounded-md flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-ink hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Mail size={14} />
                  </a>
                  <span className="ml-auto text-[10px] font-mono tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
