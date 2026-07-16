"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  lines: readonly string[];
  typingSpeed?: number;
  linePause?: number;
};

export function Typewriter({
  lines,
  typingSpeed = 28,
  linePause = 700,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }

    const current = lines[lineIndex];
    if (charIndex <= current.length) {
      const id = window.setTimeout(() => {
        setText(
          lines.slice(0, lineIndex).join("\n") +
            (lineIndex > 0 ? "\n" : "") +
            current.slice(0, charIndex)
        );
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(id);
    }

    const id = window.setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, linePause);
    return () => clearTimeout(id);
  }, [charIndex, lineIndex, lines, typingSpeed, linePause, done]);

  return (
    <div className="whitespace-pre-wrap leading-6">
      <span className="text-[#B9C4DE]">{text}</span>
      <span className="typewriter-cursor" />
    </div>
  );
}
