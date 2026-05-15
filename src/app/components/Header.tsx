import React from "react";
import { Ghost, Menu, X, ShieldCheck, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // Active section detection
      const mid = window.innerHeight / 3;
      let current = "";
      for (const item of navItems) {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= mid && rect.bottom > mid) {
          current = item.href;
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* Top status strip */}
      <div className="hidden md:block border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-50/60 dark:bg-slate-950/60">
        <div className="container mx-auto px-4 h-7 flex items-center justify-between text-[10px] font-mono tracking-widest">
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              SYSTEMS OPERATIONAL
            </span>
            <span className="hidden lg:inline">218 NODES · 4.2K REQ/S</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <span className="hidden lg:flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-brand-ink" />
              SOC2 TYPE II
            </span>
            <span>v3.0 // BOO</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-fit flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative p-2 bg-brand rounded-lg text-slate-900 group-hover:scale-105 transition-transform shadow-md shadow-brand/30">
            <Ghost size={22} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-950 animate-pulse"></span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="tracking-tighter text-slate-900 dark:text-white font-extrabold font-[Open_Sans] text-[20px]">
              BOO!
            </span>
            <span className="hidden sm:block text-[9px] font-mono tracking-[0.25em] text-slate-500 dark:text-slate-500">
              SECURITY
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur rounded-full p-1 border border-slate-200 dark:border-slate-800">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.href);
                }}
                className={`relative text-sm font-semibold px-3.5 lg:px-4 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => go("#pricing")}
            className="cursor-pointer bg-brand text-slate-900 hover:bg-brand-strong px-4 py-2 rounded-full text-sm font-bold shadow-md shadow-brand/20 transition-all flex items-center gap-1.5 group"
          >
            Get Protected
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen ? "true" : "false"}
            className="cursor-pointer w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
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
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1.5">
              {navItems.map((item, i) => {
                const isActive = active === item.href;
                return (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      go(item.href);
                    }}
                    className={`group flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                      isActive
                        ? "bg-brand/10 border-brand/40 text-slate-900 dark:text-white"
                        : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-brand/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[10px] tracking-widest w-6 ${isActive ? "text-brand-ink" : "text-slate-500"}`}>
                        0{i + 1}
                      </span>
                      <span className="font-bold text-base">{item.label}</span>
                    </div>
                    <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-0.5 group-hover:text-brand-ink transition-all" />
                  </motion.a>
                );
              })}

              <motion.button
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                onClick={() => {
                  setIsOpen(false);
                  go("#pricing");
                }}
                className="mt-2 cursor-pointer w-full bg-brand hover:bg-brand-strong text-slate-900 py-3 rounded-xl font-bold shadow-md shadow-brand/20 flex items-center justify-center gap-2"
              >
                Get Protected <ArrowRight size={16} />
              </motion.button>

              <div className="pt-2 mt-1 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  SYSTEMS OPERATIONAL
                </span>
                <span>v3.0 // BOO</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
