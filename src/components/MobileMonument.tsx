"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

function ShieldIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3L5 6.5V11.5C5 16 8 19.8 12 21C16 19.8 19 16 19 11.5V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 12H20.5M12 3.5C14.5 6.2 15.7 9 15.7 12C15.7 15 14.5 17.8 12 20.5C9.5 17.8 8.3 15 8.3 12C8.3 9 9.5 6.2 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 3L5 13H11L10 21L19 10H13L13 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 1.5C12.4 7.2 16.8 11.6 22.5 12C16.8 12.4 12.4 16.8 12 22.5C11.6 16.8 7.2 12.4 1.5 12C7.2 11.6 11.6 7.2 12 1.5Z" />
    </svg>
  );
}

type Tip = {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  live?: boolean;
  iconPos: string;
  pillPos: string;
};

const tips: Tip[] = [
  {
    id: "audit",
    icon: <ShieldIcon />,
    title: "Live: Web5 Audit",
    subtitle: "Scanning Solidity, Rust + more.",
    live: true,
    iconPos: "left-[6%] top-[10%] sm:left-[10%] sm:top-[12%]",
    pillPos: "left-2 top-[4%] sm:left-4 sm:top-[6%]",
  },
  {
    id: "devs",
    icon: <GlobeIcon />,
    title: "10K+ Developers",
    subtitle: "Trust Knox tooling.",
    iconPos: "right-[6%] top-[42%] sm:right-[10%] sm:top-[40%]",
    pillPos: "right-2 top-[34%] sm:right-4 sm:top-[32%]",
  },
  {
    id: "langs",
    icon: <BoltIcon />,
    title: "10+ Languages",
    subtitle: "Covered in one vault.",
    iconPos: "right-[10%] bottom-[14%] sm:right-[14%] sm:bottom-[16%]",
    pillPos: "bottom-[6%] right-2 sm:bottom-[8%] sm:right-4",
  },
];

export default function MobileMonument() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setRevealed(tips.length);
      return;
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Start revealing as the vault moves up through the viewport
      const progress = (vh * 0.72 - rect.top) / (vh * 0.45);
      const next = Math.min(
        tips.length,
        Math.max(0, Math.floor(progress * (tips.length + 0.35))),
      );
      setRevealed(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={stageRef} className="relative mx-auto w-full">
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 700 700"
        fill="none"
        aria-hidden
      >
        <circle cx="350" cy="350" r="250" stroke="#4A90E2" strokeOpacity="0.16" strokeWidth="1" />
        <circle cx="350" cy="350" r="310" stroke="#4A90E2" strokeOpacity="0.1" strokeWidth="1" />
      </svg>

      <div className="hero-monument relative mx-auto w-[94%] max-w-md sm:w-[90%] sm:max-w-lg">
        <Image
          src="/hero/knox-seamless.jpg"
          alt="Fort Knox vault transitioning from stone to blueprint wireframe"
          width={1200}
          height={900}
          priority
          sizes="(max-width: 1024px) 94vw, 50vw"
          className="hero-monument-img relative z-10 h-auto w-full object-contain"
        />
        <div className="hero-monument-veil absolute inset-0 z-20" aria-hidden />
      </div>

      <Sparkle className="sparkle sparkle-delay absolute left-[18%] top-[12%] z-[25] h-3 w-3 text-foreground/35" />
      <Sparkle className="sparkle absolute right-[16%] top-[22%] z-[25] h-2.5 w-2.5 text-foreground/30" />

      {tips.map((tip, index) => {
        const open = revealed > index;
        return (
          <div key={tip.id} className="contents">
            {/* Shining icon beacon — visible until pill opens */}
            <button
              type="button"
              aria-label={tip.title}
              className={`icon-beacon absolute z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-foreground shadow-[0_6px_20px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-500 sm:h-11 sm:w-11 ${tip.iconPos} ${
                open
                  ? "pointer-events-none scale-75 opacity-0"
                  : "opacity-100"
              }`}
              onClick={() => setRevealed((n) => Math.max(n, index + 1))}
            >
              <span className="icon-beacon-ring" aria-hidden />
              {tip.icon}
            </button>

            {/* Full glass pill — reveals on scroll, one by one */}
            <div
              className={`absolute z-30 max-w-[12rem] rounded-2xl border border-white/70 bg-white/85 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-500 ease-out sm:max-w-[13rem] ${tip.pillPos} ${
                open
                  ? "translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none translate-y-2 scale-95 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${index * 60}ms` : "0ms" }}
            >
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background/90 text-foreground ring-1 ring-border/70">
                  {tip.icon}
                </span>
                <span className="min-w-0 text-[11px] leading-snug text-muted">
                  <span className="flex items-center gap-1.5 font-semibold text-foreground">
                    {tip.live && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-50" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
                      </span>
                    )}
                    {tip.title}
                  </span>
                  {tip.subtitle}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
