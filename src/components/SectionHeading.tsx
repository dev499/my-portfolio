"use client";

import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <>
      <Reveal x={-20} y={0} className={`flex items-center gap-3 mb-4 ${className}`}>
        <span className="text-[11px] font-mono text-muted tracking-[0.3em] uppercase">
          {eyebrow}
        </span>
        <div className="flex-1 h-px bg-line max-w-xs" />
      </Reveal>
      <Reveal y={20} className={`mb-14 ${center ? "text-center" : ""}`}>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
          {title}
        </h2>
        {subtitle ? (
          <p className={`text-muted mt-3 max-w-md ${center ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        ) : null}
      </Reveal>
    </>
  );
}
