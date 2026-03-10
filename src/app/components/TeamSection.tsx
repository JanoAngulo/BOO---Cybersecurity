import React from "react";
import { motion } from "motion/react";
import { Linkedin, Twitter, Mail, X } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Elena Rostova",
    role: "Lead Cryptographer",
    image:
      "https://plus.unsplash.com/premium_photo-1763734694097-65bc788c78bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Former NSA analyst with a double PhD in Quantum Computing. She architects the core encryption protocols that power BOO's Shield system.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Marcus Chen",
    role: "Chief of Offensive Operations",
    image:
      "https://images.unsplash.com/photo-1641524215028-651f316fef3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "An ethical hacker who has successfully breached over 500 enterprise networks. Now he builds the walls he used to break down.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Threat Intelligence",
    image:
      "https://images.unsplash.com/photo-1634149136549-47350a401065?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Specializes in dark web surveillance and APT group tracking. Her team feeds real-time data into our predictive AI models.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "David Okafor",
    role: "Director of Network Engineering",
    image:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Expert in zero-trust architecture and high-availability systems. Ensures our defense grid remains operational even under massive DDoS loads.",
    social: { linkedin: "#", twitter: "#" },
  },
];

interface TeamSectionProps {
  onClose: () => void;
}

export function TeamSection({ onClose }: TeamSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full overflow-hidden"
    >
      <div className="pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 relative">
        <div className="flex justify-between items-start gap-4 mb-8 md:mb-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Command Center Operatives
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              The minds behind the machine.
            </p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4 bg-slate-200 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <div className="flex justify-center gap-4 text-white">
                    <a
                      href={member.social.linkedin}
                      className="hover:text-[#e2b331] transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="hover:text-[#e2b331] transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#e2b331] transition-colors">
                {member.name}
              </h4>
              <p className="text-sm text-[#e2b331] font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}