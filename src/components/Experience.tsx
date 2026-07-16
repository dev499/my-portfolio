"use client";

import { motion, useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useRef } from "react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const tagTone = {
  cobalt: "bg-cobalt-soft text-cobalt",
  coral: "bg-coral-soft text-coral-deep",
  cobaltSolid: "bg-cobalt text-white",
  ink: "bg-ink text-paper",
  mint: "bg-mint-soft text-mint-deep",
  muted: "bg-paper text-muted border border-line",
} as const;

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              {portfolio.experience.title}
              <span className="text-coral">.</span>
            </>
          }
          subtitle={portfolio.experience.subtitle}
        />

        <div className="relative pl-6 md:pl-10">
          <motion.div
            ref={lineRef}
            className="absolute left-0 md:left-2 top-2 bottom-2 w-px bg-line"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "50% 0%" }}
          />

          {portfolio.experience.roles.map((role, ri) => (
            <Reveal key={role.version} y={24} delay={ri * 0.1} className="relative mb-10 last:mb-0">
              <span className="absolute -left-6 md:-left-10 top-6 -translate-x-1/2 font-mono text-[11px] font-bold px-2 py-1 rounded-md bg-ink text-paper whitespace-nowrap">
                {role.version}
              </span>
              <div className="card shadow-card p-7 md:p-8 hover:shadow-lift transition-shadow duration-300 ml-4 md:ml-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="font-display text-xl font-bold text-ink">
                        {role.role}
                      </h3>
                      {role.current ? (
                        <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-mint-soft text-mint-deep border border-mint/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                          Current release
                        </span>
                      ) : null}
                    </div>
                    <div className="text-base font-semibold text-cobalt">
                      {role.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end font-mono text-xs">
                      <Calendar size={12} aria-hidden />
                      {role.period}
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end text-xs">
                      <MapPin size={12} aria-hidden />
                      {role.location}
                    </div>
                  </div>
                </div>
                <div className="h-px bg-line mb-6" />
                <ul className="space-y-3.5">
                  {role.bullets.map((bullet, bi) => (
                    <Reveal key={`${role.version}-${bi}`} x={10} y={0} delay={bi * 0.05}>
                      <li className="flex items-start gap-3 text-sm leading-relaxed">
                        <span
                          className={`font-mono text-[10px] font-bold tracking-wide px-2 py-0.5 rounded mt-0.5 shrink-0 ${tagTone[bullet.tone]}`}
                        >
                          {bullet.tag}
                        </span>
                        <span className="text-ink/75">{bullet.text}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
