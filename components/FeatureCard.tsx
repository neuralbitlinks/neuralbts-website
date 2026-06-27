import Link from "next/link";

type AccentKey = "teal" | "amber" | "red" | "purple" | "blue" | "orange";

const ACCENTS: Record<AccentKey, { solid: string; from: string; to: string }> = {
  teal: { solid: "#10a37f", from: "#13b892", to: "#0a7763" },
  amber: { solid: "#c8a02e", from: "#d9b13a", to: "#a9831f" },
  red: { solid: "#e2574c", from: "#ec6a60", to: "#c23b32" },
  purple: { solid: "#7c4dff", from: "#8d63ff", to: "#5f2fe0" },
  blue: { solid: "#3b6fd4", from: "#4f82e6", to: "#2b54ad" },
  orange: { solid: "#e0913a", from: "#eda24c", to: "#c4762a" },
};

export type IconKey =
  | "tool"
  | "automation"
  | "ml"
  | "chat"
  | "integration"
  | "mlops";

function Icon({ name }: { name: IconKey }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "tool":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "automation":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "ml":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-6" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z" />
        </svg>
      );
    case "integration":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M8.7 10.5 15.3 7.2M8.7 13.5l6.6 3.3" />
        </svg>
      );
    case "mlops":
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 4v5h-5" />
        </svg>
      );
  }
}

/** Abstract striped-geometric corner artwork, themed by accent colour. */
function CardArt({ color, light, uid }: { color: string; light?: boolean; uid: string }) {
  const c = light ? "#ffffff" : color;
  return (
    <svg
      viewBox="0 0 170 130"
      className="pointer-events-none absolute bottom-0 right-0 h-[120px] w-[170px]"
      aria-hidden
    >
      <defs>
        <clipPath id={`sphere-${uid}`}>
          <circle cx="118" cy="92" r="34" />
        </clipPath>
        <clipPath id={`loaf-${uid}`}>
          <path d="M40 130v-20a22 22 0 0 1 44 0v20Z" />
        </clipPath>
      </defs>

      {/* striped sphere */}
      <g clipPath={`url(#sphere-${uid})`}>
        <rect x="84" y="58" width="68" height="68" fill={c} opacity={light ? 0.32 : 0.95} />
        {Array.from({ length: 9 }).map((_, i) => (
          <rect
            key={i}
            x="84"
            y={60 + i * 7.5}
            width="68"
            height="3.2"
            fill={light ? color : "#ffffff"}
            opacity={light ? 0.55 : 0.28}
          />
        ))}
      </g>

      {/* striped half-loaf */}
      <g clipPath={`url(#loaf-${uid})`}>
        <rect x="40" y="86" width="44" height="44" fill={c} opacity={light ? 0.26 : 0.75} />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={i}
            x="40"
            y={90 + i * 7}
            width="44"
            height="2.6"
            fill={light ? color : "#ffffff"}
            opacity={light ? 0.5 : 0.3}
          />
        ))}
      </g>

      {/* quarter round */}
      <path
        d="M150 130a40 40 0 0 0-40-40v40Z"
        fill={c}
        opacity={light ? 0.22 : 0.45}
      />
      {/* small dot */}
      <circle cx="92" cy="112" r="8" fill={c} opacity={light ? 0.5 : 0.9} />
    </svg>
  );
}

export function FeatureCard({
  title,
  body,
  href = "#",
  accent,
  icon,
  filled = false,
  uid,
}: {
  title: string;
  body: string;
  href?: string;
  accent: AccentKey;
  icon: IconKey;
  filled?: boolean;
  uid: string;
}) {
  const a = ACCENTS[accent];

  return (
    <Link
      href={href}
      className={`group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-lg p-7 transition-all duration-300 hover:-translate-y-1.5 ${
        filled
          ? "text-white shadow-lg"
          : "border border-line bg-white text-ink shadow-sm hover:shadow-lg"
      }`}
      style={
        filled
          ? { backgroundImage: `linear-gradient(150deg, ${a.from}, ${a.to})` }
          : undefined
      }
    >
      {/* icon top-right */}
      <div
        className="absolute right-6 top-6"
        style={{ color: filled ? "#ffffff" : a.solid }}
      >
        <Icon name={icon} />
      </div>

      {/* title + body */}
      <div className="relative max-w-[78%]">
        <h3 className="font-display text-xl font-semibold leading-snug">{title}</h3>
        <p
          className={`mt-2.5 text-sm leading-relaxed ${
            filled ? "text-white/80" : "text-ink-soft"
          }`}
        >
          {body}
        </p>
      </div>

      {/* arrow bottom-left */}
      <div className="relative mt-auto pt-8">
        <span
          className={`flex h-6 w-6 items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 ${
            filled ? "text-white" : "text-ink"
          }`}
        >
          <svg width="26" height="16" viewBox="0 0 26 16" fill="none">
            <path
              d="M1 8h22M17 1l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <CardArt color={a.solid} light={filled} uid={uid} />
    </Link>
  );
}
