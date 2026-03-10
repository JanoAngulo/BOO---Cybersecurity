import React from "react";
import {
  Ghost,
  Twitter,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="flex items-center space-x-2 mb-4 w-fit cursor-pointer"
            >
              <div className="p-2 bg-[#e2b331] rounded-lg text-white">
                <Ghost size={20} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white font-[Open_Sans]">
                BOO!
              </span>
            </button>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Securing the digital landscape. We provide
              cutting-edge protection for enterprises across the
              globe.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-[20px]">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#features")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-[#e2b331] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-[#e2b331] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-[#e2b331] transition-colors"
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-[#e2b331] transition-colors"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-[20px]">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-[#e2b331] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-[#e2b331] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 BOO Cyber Security. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-slate-500 hover:text-[#e2b331] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-[#e2b331] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-[#e2b331] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-[#e2b331] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}