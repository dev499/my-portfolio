"use client";

import {
  BadgeCheck,
  Crown,
  GraduationCap,
  Medal,
  Star,
  Trophy,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

const icons = {
  trophy: Trophy,
  star: Star,
  medal: Medal,
  crown: Crown,
  badge: BadgeCheck,
  grad: GraduationCap,
} as const;

const toneBg = {
  coral: "bg-coral-soft",
  cobalt: "bg-cobalt-soft",
  mint: "bg-mint-soft",
  ink: "bg-paper border border-line",
} as const;

const toneIcon = {
  coral: "text-coral-deep",
  cobalt: "text-cobalt",
  mint: "text-mint-deep",
  ink: "text-ink",
} as const;

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Recognition"
          title={
            <>
              {portfolio.recognition.title[0]}
              <span className="text-gradient">{portfolio.recognition.title[1]}</span>
            </>
          }
          subtitle={portfolio.recognition.subtitle}
        />

        {portfolio.recognition.awards.length > 0 ? (
          <>
            <p className="text-[11px] font-mono text-muted tracking-[0.25em] uppercase mb-5">
              Awards &amp; recognition
            </p>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
              {portfolio.recognition.awards.map((award, i) => {
                const Icon = icons[award.icon];
                return (
                  <Reveal key={award.title} y={24} delay={i * 0.06} className="h-full">
                    <TiltCard>
                      <div className="card shadow-card p-6 hover:shadow-lift transition-shadow duration-300 group h-full">
                        <div className="relative">
                          <div
                            className={`w-11 h-11 rounded-xl ${toneBg[award.tone]} flex items-center justify-center mb-4`}
                          >
                            <Icon className={toneIcon[award.tone]} size={19} aria-hidden />
                          </div>
                          {award.featured ? (
                            <span className="absolute top-0 right-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-coral-soft text-coral-deep border border-coral/20">
                              ★ FEATURED
                            </span>
                          ) : null}
                          <h3 className="font-display font-bold text-ink text-sm leading-snug mb-1 group-hover:text-cobalt transition-colors">
                            {award.title}
                          </h3>
                          <p className="text-xs font-mono text-muted mb-3">{award.org}</p>
                          <p className="text-muted/90 text-xs leading-relaxed">
                            {award.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </>
        ) : null}

        <p className="text-[11px] font-mono text-muted tracking-[0.25em] uppercase mb-5">
          Certifications &amp; education
        </p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {portfolio.recognition.credentials.map((cred, i) => {
            const Icon = icons[cred.icon];
            return (
              <Reveal key={cred.title} y={24} delay={i * 0.06} className="h-full">
                <TiltCard>
                  <div className="card shadow-card p-6 hover:shadow-lift transition-shadow duration-300 group h-full">
                    <div className="relative">
                      <div
                        className={`w-11 h-11 rounded-xl ${toneBg[cred.tone]} flex items-center justify-center mb-4`}
                      >
                        <Icon className={toneIcon[cred.tone]} size={19} aria-hidden />
                      </div>
                      <h3 className="font-display font-bold text-ink text-sm leading-snug mb-1 group-hover:text-cobalt transition-colors">
                        {cred.title}
                      </h3>
                      <p className="text-xs font-mono text-muted mb-3">{cred.org}</p>
                      <p className="text-muted/90 text-xs leading-relaxed">
                        {cred.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
