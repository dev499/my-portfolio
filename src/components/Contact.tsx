"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          center
          title={
            <>
              {portfolio.contact.title[0]}
              <span className="text-gradient">{portfolio.contact.title[1]}</span>
              {portfolio.contact.title[2]}
            </>
          }
          subtitle={portfolio.contact.subtitle}
          className="justify-center"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Reveal x={-30} y={0} className="flex flex-col gap-4">
            <a
              href={`mailto:${portfolio.email}`}
              className="card shadow-card p-5 group hover:shadow-lift hover:border-cobalt/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-cobalt-soft flex items-center justify-center shrink-0">
                  <Mail className="text-cobalt" size={18} aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted font-mono mb-0.5">Email</p>
                  <p className="text-ink text-sm font-semibold truncate">
                    {portfolio.email}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted/40 group-hover:text-cobalt group-hover:translate-x-1 transition-all"
                  aria-hidden
                />
              </div>
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card shadow-card p-5 group hover:shadow-lift hover:border-cobalt/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-cobalt-soft flex items-center justify-center shrink-0">
                  <LinkedinIcon className="text-cobalt" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted font-mono mb-0.5">LinkedIn</p>
                  <p className="text-ink text-sm font-semibold">
                    {portfolio.linkedinHandle}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted/40 group-hover:text-cobalt group-hover:translate-x-1 transition-all"
                  aria-hidden
                />
              </div>
            </a>

            <div className="card shadow-card p-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-mint-soft flex items-center justify-center shrink-0">
                  <Phone className="text-mint-deep" size={18} aria-hidden />
                </div>
                <div>
                  <p className="text-xs text-muted font-mono mb-0.5">Phone</p>
                  <p className="text-ink text-sm font-semibold">{portfolio.phone}</p>
                </div>
              </div>
            </div>

            <div className="card shadow-card p-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-coral-soft flex items-center justify-center shrink-0">
                  <MapPin className="text-coral-deep" size={18} aria-hidden />
                </div>
                <div>
                  <p className="text-xs text-muted font-mono mb-0.5">Location</p>
                  <p className="text-ink text-sm font-semibold">{portfolio.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal x={30} y={0}>
            <div className="card shadow-card p-8">
              <h3 className="font-display text-lg font-bold text-ink mb-6">
                Send a message
              </h3>
              <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono text-muted mb-2 block"
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-paper border border-line rounded-xl px-4 py-3 text-ink text-sm placeholder-muted/50 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/15 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono text-muted mb-2 block"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-paper border border-line rounded-xl px-4 py-3 text-ink text-sm placeholder-muted/50 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/15 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-mono text-muted mb-2 block"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder={portfolio.contact.formPlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-paper border border-line rounded-xl px-4 py-3 text-ink text-sm placeholder-muted/50 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/15 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-cobalt text-white font-semibold text-sm hover:bg-cobalt-dark dark:shadow-glow transition-colors duration-200 mt-2"
                >
                  <Send size={15} aria-hidden />
                  {status === "sent" ? "Opening mail…" : "Send message"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
