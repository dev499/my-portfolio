"use client";

import { Briefcase, Package, Users, Zap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

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

const tagTone = {
  cobalt: "text-cobalt",
  coral: "text-coral-deep",
  mint: "text-mint-deep",
} as const;

const icons = {
  briefcase: Briefcase,
  users: Users,
  package: Package,
} as const;

function Avatar() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full drop-shadow-xl"
      role="img"
      aria-label={`Stylized avatar of ${portfolio.firstName} wearing a holographic visor`}
    >
      <defs>
        <linearGradient id="av-visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6478FF" />
          <stop offset="55%" stopColor="#9B78FF" />
          <stop offset="100%" stopColor="#FF7E5F" />
        </linearGradient>
        <linearGradient id="av-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A3558" />
          <stop offset="100%" stopColor="#141B30" />
        </linearGradient>
      </defs>
      <path
        d="M38 196 C38 152 66 132 100 132 C134 132 162 152 162 196 Z"
        fill="url(#av-hoodie)"
      />
      <path
        d="M62 160 C70 144 130 144 138 160"
        stroke="#3D4A75"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="86" y="112" width="28" height="26" rx="10" fill="#D9A16E" />
      <rect x="58" y="38" width="84" height="86" rx="36" fill="#E8B583" />
      <path
        d="M58 76 C54 42 78 28 100 28 C122 28 146 42 142 76 C138 56 122 46 100 46 C78 46 62 56 58 76 Z"
        fill="#1B2135"
      />
      <path
        d="M52 70 C52 40 148 40 148 70"
        stroke="#0B1120"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="54" cy="82" r="10" fill="#0B1120" />
      <circle cx="146" cy="82" r="10" fill="#0B1120" />
      <rect
        x="62"
        y="66"
        width="76"
        height="28"
        rx="14"
        fill="url(#av-visor)"
        opacity="0.92"
      />
      <path
        d="M70 74 L92 74"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M88 106 Q100 114 112 106"
        stroke="#B97C42"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function About() {
  const [p1, p2] = portfolio.about.paragraphs;

  return (
    <section id="about" className="section-pad relative max-w-7xl mx-auto">
      <Reveal x={-20} y={0} className="flex items-center gap-3 mb-16">
        <span className="text-[11px] font-mono text-muted tracking-[0.3em] uppercase">
          About
        </span>
        <div className="flex-1 h-px bg-line max-w-xs" />
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal x={-40} y={0} className="flex justify-center">
          <TiltCard>
            <div className="card shadow-card p-8 w-80">
              <div
                className="relative flex flex-col items-center gap-5"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative w-56 h-56 flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-6 rounded-full bg-cobalt/15 dark:bg-cobalt/25 blur-2xl" />
                  <div className="absolute inset-2" style={{ transform: "rotateX(62deg)" }}>
                    <div className="w-full h-full rounded-full border-2 border-dashed border-cobalt/30 animate-spin-slow" />
                  </div>
                  <div className="absolute -inset-2" style={{ transform: "rotateX(66deg)" }}>
                    <div className="w-full h-full rounded-full border border-coral/30 animate-spin-slower" />
                  </div>
                  <div
                    style={{ transform: "translateZ(36px)" }}
                    className="relative w-44 h-44"
                  >
                    <Avatar />
                  </div>
                  {portfolio.about.avatarTags.map((tag) => {
                    const placement =
                      tag.side === "left-top"
                        ? { className: "left-0 top-3", x: "-50%" }
                        : tag.side === "right"
                          ? { className: "right-0 top-14", x: "50%" }
                          : { className: "left-0 bottom-2", x: "-50%" };

                    return (
                      <div
                        key={tag.label}
                        style={{
                          transform: `translateZ(${tag.z}px) translateX(${placement.x})`,
                        }}
                        className={`absolute ${placement.className} pointer-events-none z-10`}
                      >
                        <span
                          style={{ animationDelay: tag.delay }}
                          className={`animate-float inline-block whitespace-nowrap text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-surface/80 backdrop-blur border border-line shadow-card ${tagTone[tag.tone]}`}
                        >
                          {tag.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ transform: "translateZ(24px)" }} className="text-center">
                  <p className="font-display font-bold text-ink">{portfolio.name}</p>
                  <p className="text-xs font-mono text-muted mt-1 mb-3">
                    Full Stack Developer · {portfolio.locationShort}
                  </p>
                  {portfolio.openToWork ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-mint-soft text-mint-deep border border-mint/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                      Open to work
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal x={40} y={0}>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-6 leading-tight">
            {portfolio.about.headline[0]}{" "}
            <span className="text-gradient">{portfolio.about.headline[1]}</span>
            <br />
            {portfolio.about.headline[2]}
          </h2>

          <p className="text-muted leading-relaxed mb-6">
            {p1.before}{" "}
            {"highlights" in p1 &&
              p1.highlights.map((h, i) =>
                h.color === "ink" ? (
                  <span key={i} className="text-ink font-semibold">
                    {h.text}{" "}
                  </span>
                ) : (
                  <span key={i}>
                    {h.text}{" "}
                  </span>
                )
              )}
          </p>

          <p className="text-muted leading-relaxed mb-8">
            {p2.before}{" "}
            <span className="text-cobalt font-semibold">{p2.company}</span>
            {p2.after}
          </p>

          <div className="card shadow-card p-4 mb-8 flex items-start gap-3">
            <span className="w-9 h-9 rounded-lg bg-coral-soft flex items-center justify-center shrink-0">
              <Zap className="text-coral-deep" size={16} aria-hidden />
            </span>
            <div>
              <p className="text-xs text-muted font-mono mb-1">
                {portfolio.about.currentlyBuilding.label}
              </p>
              <p className="text-sm text-ink/90">
                {portfolio.about.currentlyBuilding.boldParts.map((part, idx, arr) => (
                  <span key={part}>
                    <span className="font-semibold">{part}</span>
                    {idx < arr.length - 1 ? " & " : ""}
                  </span>
                ))}{" "}
                —{" "}
                {portfolio.about.currentlyBuilding.text.includes(" — ")
                  ? portfolio.about.currentlyBuilding.text.split(" — ").slice(1).join(" — ")
                  : portfolio.about.currentlyBuilding.text}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {portfolio.about.stats.map((stat, i) => {
              const Icon = icons[stat.icon];
              return (
                <Reveal key={stat.label} y={20} delay={i * 0.08}>
                  <div className="card shadow-card p-4 text-center hover:shadow-lift transition-shadow">
                    <span
                      className={`w-8 h-8 rounded-lg ${toneBg[stat.tone]} inline-flex items-center justify-center mb-2`}
                    >
                      <Icon className={toneIcon[stat.tone]} size={15} aria-hidden />
                    </span>
                    <div className="font-display text-2xl font-extrabold text-ink">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-muted text-xs mt-1">{stat.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
