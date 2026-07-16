"use client";

import { CircleCheckBig, TrendingUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              {portfolio.projects.title[0]}
              <span className="text-gradient">{portfolio.projects.title[1]}</span>
            </>
          }
          subtitle={portfolio.projects.subtitle}
        />

        <div
          className={`grid gap-5 auto-rows-auto ${
            portfolio.projects.compact.length > 0
              ? "md:grid-cols-2 xl:grid-cols-3"
              : "md:grid-cols-2"
          }`}
        >
          {portfolio.projects.featured.map((project, i) => (
            <Reveal key={project.code} y={24} delay={i * 0.08} className="xl:col-span-1">
              <TiltCard>
                <div className="card shadow-card p-7 group hover:shadow-lift transition-shadow duration-300 overflow-hidden h-full">
                  <div className="absolute top-4 right-4 text-7xl font-display font-extrabold text-ink opacity-[0.04] select-none pointer-events-none">
                    {project.code}
                  </div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl">{project.emoji}</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-mint-soft text-mint-deep border border-mint/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                        In Production
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-cobalt transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <ul className="flex flex-col gap-2 mb-5">
                      {project.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="flex items-center gap-2 text-xs font-mono text-coral-deep"
                        >
                          <TrendingUp
                            size={12}
                            className="shrink-0 opacity-70"
                            aria-hidden
                          />
                          {metric}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-cobalt-soft text-cobalt border border-cobalt/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}

          {portfolio.projects.compact.length > 0 ? (
            <div className="flex flex-col gap-5 xl:col-span-1 md:col-span-2 xl:row-span-1">
              {portfolio.projects.compact.map((project, i) => (
                <Reveal key={project.code} y={24} delay={0.16 + i * 0.08} className="flex-1">
                  <TiltCard>
                    <div className="card shadow-card p-6 group hover:shadow-lift transition-shadow duration-300 overflow-hidden h-full">
                      <div className="absolute top-3 right-3 text-4xl font-display font-extrabold text-ink opacity-[0.04] select-none pointer-events-none">
                        {project.code}
                      </div>
                      <div className="relative flex gap-4 items-start">
                        <span className="text-2xl shrink-0">{project.emoji}</span>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-display text-base font-bold text-ink group-hover:text-cobalt transition-colors">
                              {project.title}
                            </h3>
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-paper text-muted border border-line shrink-0">
                              <CircleCheckBig size={10} className="opacity-60" aria-hidden />
                              Delivered
                            </span>
                          </div>
                          <p className="text-muted text-xs leading-relaxed mb-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-mono px-2 py-0.5 rounded bg-cobalt-soft text-cobalt"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
