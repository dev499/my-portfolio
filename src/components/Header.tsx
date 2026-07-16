"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ThemeButton = ({ className = "" }: { className?: string }) => (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className={`w-9 h-9 rounded-full border border-line bg-surface/60 backdrop-blur flex items-center justify-center text-muted hover:text-ink hover:border-muted transition-colors ${className}`}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 ${
        scrolled
          ? "bg-surface/75 backdrop-blur-md border-b border-line shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display font-extrabold text-lg text-ink tracking-tight">
            {portfolio.shortName}
          </span>
          <span
            className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-cobalt-soft text-cobalt border border-cobalt/15"
            title={`${portfolio.experienceYears}+ years of experience`}
          >
            {portfolio.experienceBadge}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {portfolio.nav.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
            >
              <a
                href={item.href}
                className="text-sm text-muted hover:text-ink transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full bg-cobalt transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeButton />
          <a
            href={portfolio.resumePath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-paper bg-ink rounded-full hover:bg-cobalt hover:text-white transition-colors duration-200"
          >
            <Download size={14} aria-hidden />
            Résumé
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeButton />
          <button
            type="button"
            className="text-ink/70 hover:text-ink transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-surface/95 backdrop-blur border-t border-line"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {portfolio.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-ink transition-colors py-1 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={portfolio.resumePath}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-paper bg-ink rounded-full hover:bg-cobalt hover:text-white transition-colors"
              >
                <Download size={14} aria-hidden />
                Download résumé
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
