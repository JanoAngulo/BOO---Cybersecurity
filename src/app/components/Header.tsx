import React from "react";
import { Ghost, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="w-fit flex items-center space-x-2 cursor-pointer"
        >
          <div className="p-2 bg-[#e2b331] rounded-lg text-white">
            <Ghost size={24} />
          </div>
          <span className="tracking-tighter text-slate-900 dark:text-white font-bold font-[Open_Sans] text-[20px]">
            BOO!
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "Pricing", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(`#${item.toLowerCase()}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium text-slate-600 hover:text-[#e2b331] dark:text-slate-300 dark:hover:text-[#e2b331] transition-colors"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
          <button
            onClick={() =>
              document
                .querySelector("#pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
          >
            Get Protected
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-slate-900 dark:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <nav className="flex flex-col p-4 space-y-4 items-end">
              {["Features", "Pricing", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document
                      .querySelector(`#${item.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#e2b331] dark:hover:text-[#e2b331] font-medium text-right"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  document
                    .querySelector("#pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer w-full bg-[#e2b331] text-white py-2 rounded-lg font-semibold"
              >
                Get Protected
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}