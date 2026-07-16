"use client";

import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative bg-shell text-white/60 font-mono text-xs border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            main — build passing
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline">{portfolio.locationShort}</span>
        </div>
        <div className="flex items-center gap-5">
          {portfolio.github ? (
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/50 hover:text-white transition-colors duration-200"
            >
              <GithubIcon size={16} />
            </a>
          ) : null}
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/50 hover:text-white transition-colors duration-200"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${portfolio.email}`}
            aria-label="Email"
            className="text-white/50 hover:text-white transition-colors duration-200"
          >
            <Mail size={16} />
          </a>
        </div>
        <span className="text-white/40">
          © {new Date().getFullYear()} {portfolio.name}
        </span>
      </div>
    </footer>
  );
}
