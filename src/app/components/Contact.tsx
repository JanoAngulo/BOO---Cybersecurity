import React from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#e2b331]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
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
              <span>Secure Channel</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ready to secure your digital assets? Reach out to
              our team of experts.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white dark:bg-[#0f1526] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#e2b331]/30 transition-colors shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 border-b border-slate-100 dark:border-slate-800 pb-3">
                Command Center
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 group sm:col-span-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg text-[#e2b331] group-hover:bg-[#e2b331] group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                      HQ Coordinates
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-sm leading-relaxed">
                      1337 Cyber Lane, Suite 100 Silicon Valley,
                      CA 94025
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg text-[#e2b331] group-hover:bg-[#e2b331] group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                      Encrypted Mail
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-sm">
                      security@boo.security
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg text-[#e2b331] group-hover:bg-[#e2b331] group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                      Emergency Line
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-sm">
                      +1 (555) 000-SECURE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621062!2d-122.08374688469227!3d37.422408279825215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1657662999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:invert-[.9] dark:hue-rotate-180"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#0f1526] px-6 pt-6 pb-4 lg:px-8 lg:pt-8 lg:pb-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e2b331] to-transparent opacity-50"></div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Transmission
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
              Fill out the form below to open a secure channel
              with our support team.
            </p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1"
                  >
                    Identity
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#e2b331]/50 focus:border-[#e2b331] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1"
                  >
                    Digital Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#e2b331]/50 focus:border-[#e2b331] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1"
                >
                  Clearance Level
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#e2b331]/50 focus:border-[#e2b331] transition-all appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Report an Incident</option>
                    <option>Enterprise Sales</option>
                    <option>Support</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1"
                >
                  Message Data
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#e2b331]/50 focus:border-[#e2b331] transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  placeholder="Describe the nature of your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full py-3 bg-[#e2b331] hover:bg-[#c59a20] text-white font-bold rounded-lg shadow-lg shadow-[#e2b331]/20 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01] active:scale-[0.99] mt-2 group"
              >
                <span>Transmit Securely</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}