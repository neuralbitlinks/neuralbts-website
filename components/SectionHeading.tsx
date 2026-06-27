import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${
        className ?? ""
      }`}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="display mt-4 text-3xl sm:text-4xl md:text-[2.6rem]">
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-base leading-relaxed text-ink-soft md:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
