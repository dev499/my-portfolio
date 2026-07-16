"use client";

import {
  AppWindow,
  CloudCog,
  LayoutPanelLeft,
  Plug,
  Server,
  Wrench,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

const icons = {
  panels: LayoutPanelLeft,
  server: Server,
  window: AppWindow,
  cloud: CloudCog,
  plug: Plug,
  wrench: Wrench,
} as const;

const toneBg = {
  cobalt: "bg-cobalt-soft",
  coral: "bg-coral-soft",
  mint: "bg-mint-soft",
} as const;

const toneIcon = {
  cobalt: "text-cobalt",
  coral: "text-coral-deep",
  mint: "text-mint-deep",
} as const;

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Stack"
          title={
            <>
              {portfolio.skills.title[0]}
              <span className="text-gradient">{portfolio.skills.title[1]}</span>
            </>
          }
          subtitle={portfolio.skills.subtitle}
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {portfolio.skills.categories.map((cat, i) => {
            const Icon = icons[cat.icon];
            return (
              <Reveal key={cat.title} y={24} delay={i * 0.06}>
                <TiltCard>
                  <div className="card shadow-card p-6 hover:shadow-lift transition-shadow duration-300 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`w-10 h-10 rounded-xl ${toneBg[cat.tone]} flex items-center justify-center`}
                      >
                        <Icon className={toneIcon[cat.tone]} size={18} aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-bold tracking-wide uppercase text-ink">
                          {cat.title}
                        </h3>
                        <p className="text-muted/70 text-xs mt-0.5">
                          {cat.items.length} technologies
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-line mb-5" />
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-3 py-1.5 rounded-full bg-paper border border-line text-ink/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          {portfolio.skills.softSkills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-mono text-muted border border-line bg-surface px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
