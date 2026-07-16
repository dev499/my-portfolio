"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { TiltCard } from "./TiltCard";
import { Typewriter } from "./Typewriter";

const fade = (delay: number, y = 16) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const nameParts = portfolio.name.split(" ");
  const last = nameParts.pop();
  const firstLines = nameParts.join(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          {portfolio.openToWork ? (
            <motion.div
              {...fade(0.1)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-soft border border-mint/20 text-xs font-mono text-mint-deep mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              {portfolio.openLabel}
            </motion.div>
          ) : null}

          <motion.h1
            {...fade(0.2, 24)}
            className="font-display font-extrabold tracking-tight leading-[0.95] text-5xl sm:text-6xl xl:text-7xl text-ink mb-6"
          >
            {firstLines}
            <br />
            {last}
            <span className="text-coral">.</span>
          </motion.h1>

          <motion.p
            {...fade(0.3)}
            className="font-mono text-sm text-cobalt tracking-wide mb-5"
          >
            {portfolio.tagline}
          </motion.p>

          <motion.p
            {...fade(0.38)}
            className="text-muted text-lg leading-relaxed max-w-xl mb-7"
          >
            {portfolio.hero.summary}{" "}
            <span className="text-ink font-semibold">{portfolio.hero.highlight}</span>.
          </motion.p>

          <motion.div {...fade(0.46)} className="flex flex-wrap gap-2.5 mb-10">
            {portfolio.hero.chips.map((chip) => (
              <span
                key={chip}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-surface border border-line text-ink/80"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...fade(0.54)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cobalt text-white font-semibold text-sm hover:bg-cobalt-dark dark:shadow-glow transition-colors duration-200"
            >
              View my work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
                aria-hidden
              />
            </a>
            <a
              href={portfolio.resumePath}
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface border border-line text-ink font-semibold text-sm hover:border-ink transition-colors duration-200"
            >
              <Download size={16} aria-hidden />
              Download résumé
            </a>
          </motion.div>
        </div>

        <motion.div {...fade(0.35, 24)}>
          <TiltCard maxTilt={10}>
            <div className="window shadow-window dark:shadow-glow">
              <div className="window-bar flex items-center gap-2 px-4 py-3">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-xs font-mono text-white/40">
                  {portfolio.terminalHost}
                </span>
              </div>
              <div className="p-5 font-mono text-[13px] min-h-[176px]">
                <Typewriter lines={portfolio.typewriterLines} />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ delay: 1.1, duration: 0.45 }}
              style={{ transform: "translateZ(40px)" }}
              className="absolute -bottom-5 -left-3"
            >
              <div className="sticker px-4 py-2 font-mono text-xs font-bold text-ink">
                {portfolio.shippingSince}
              </div>
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted/60 hover:text-cobalt transition-colors"
      >
        <span className="text-[10px] font-mono tracking-[0.3em]">SCROLL</span>
        <span>
          <ArrowDown size={14} aria-hidden />
        </span>
      </motion.a>
    </section>
  );
}
