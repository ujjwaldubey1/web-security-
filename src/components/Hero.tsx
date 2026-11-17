import Image from "next/image";
import MobileMonument from "@/components/MobileMonument";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 1.5C12.4 7.2 16.8 11.6 22.5 12C16.8 12.4 12.4 16.8 12 22.5C11.6 16.8 7.2 12.4 1.5 12C7.2 11.6 11.6 7.2 12 1.5Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 3L5 13H11L10 21L19 10H13L13 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(74,144,226,0.08),transparent_55%)]" />

      {/* ===== Mobile / tablet ===== */}
      <div className="relative z-[15] mx-auto flex max-w-6xl flex-col items-center px-4 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 lg:hidden">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-live" />
          Web5 Security
        </div>

        <h1 className="animate-fade-up-delay-1 mt-5 max-w-md text-center font-serif text-[2.35rem] leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:text-[2.85rem]">
          Threats expire.
          <br />
          <span className="font-semibold not-italic">Knox </span>
          <em className="italic text-[#1e3a5f]">doesn&apos;t.</em>
        </h1>

        <p className="animate-fade-up-delay-1 mt-4 max-w-sm text-center text-[14px] leading-relaxed text-muted sm:mt-5 sm:max-w-md sm:text-[15px]">
          Knox is the parent vault for security tools that protect contracts,
          vibe-coded sites, and the systems builders ship next.
        </p>

        <div className="animate-soft-rise relative mt-5 w-full max-w-xl sm:mt-7">
          <MobileMonument />
        </div>

        {/* Clean CTA pair — primary solid + secondary ghost */}
        <div className="animate-fade-up-delay-2 mt-7 flex w-full max-w-sm flex-col gap-2.5 sm:mt-8 sm:max-w-md">
          <a
            href="#products"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground text-[14px] font-medium tracking-tight text-background shadow-[0_10px_28px_rgba(10,10,10,0.18)] transition-[transform,opacity] hover:opacity-90 active:scale-[0.98]"
          >
            Explore products
            <span className="ml-1.5 opacity-70" aria-hidden>
              →
            </span>
          </a>
          <a
            href="https://audit.web5.nexus/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-foreground/15 bg-surface/70 text-[14px] font-medium tracking-tight text-foreground backdrop-blur-sm transition-[background,transform] hover:bg-surface active:scale-[0.98]"
          >
            Open Web5 Audit
            <span className="ml-1.5 opacity-50" aria-hidden>
              →
            </span>
          </a>
        </div>

        <a
          href="#products"
          className="mt-7 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-surface/70 text-muted shadow-sm backdrop-blur-sm"
          aria-label="Scroll to products"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M3.5 5.5L7 9L10.5 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* ===== Desktop ===== */}
      <div className="relative z-[15] mx-auto hidden max-w-6xl grid-cols-2 items-center gap-8 px-8 pb-20 pt-4 lg:grid">
        <div className="relative min-w-0">
          <div className="hero-monument animate-soft-rise relative ml-[-6%] w-[128%]">
            <svg
              className="pointer-events-none absolute -inset-[8%] z-0 h-[116%] w-[116%]"
              viewBox="0 0 700 700"
              fill="none"
              aria-hidden
            >
              <circle cx="340" cy="360" r="250" stroke="#4A90E2" strokeOpacity="0.14" strokeWidth="1" />
              <circle cx="340" cy="360" r="310" stroke="#4A90E2" strokeOpacity="0.09" strokeWidth="1" />
            </svg>
            <Image
              src="/hero/knox-seamless.jpg"
              alt="Fort Knox vault transitioning from stone to blueprint wireframe"
              width={1200}
              height={900}
              priority
              sizes="50vw"
              className="hero-monument-img relative z-10 h-auto w-full object-contain"
            />
            <div className="hero-monument-veil absolute inset-0 z-20" aria-hidden />
          </div>
          <Sparkle className="sparkle sparkle-delay pointer-events-none absolute left-[14%] top-[12%] z-[25] h-4 w-4 text-foreground/40" />
          <Sparkle className="sparkle pointer-events-none absolute left-[22%] top-[8%] z-[25] h-2.5 w-2.5 text-foreground/28" />
        </div>

        <div className="relative z-30 flex min-w-0 flex-col justify-center">
          <svg
            className="pointer-events-none absolute right-0 top-0 h-52 w-80 opacity-80"
            viewBox="0 0 340 240"
            fill="none"
            aria-hidden
          >
            <path
              className="orbit-path"
              d="M24 168 C90 42, 230 18, 312 96"
              stroke="#0a0a0a"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
            <g transform="translate(308 90)" className="sparkle">
              <path
                d="M0 -7.5 C0.35 -2.2 2.2 -0.35 7.5 0 C2.2 0.35 0.35 2.2 0 7.5 C-0.35 2.2 -2.2 0.35 -7.5 0 C-2.2 -0.35 -0.35 -2.2 0 -7.5Z"
                fill="#0a0a0a"
                fillOpacity="0.72"
              />
            </g>
          </svg>

          <div className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            Web5 Security
          </div>

          <h1 className="animate-fade-up-delay-1 mt-5 font-serif text-[3.35rem] leading-[1.06] tracking-tight text-foreground">
            Threats expire.
            <br />
            <span className="font-semibold not-italic">Knox </span>
            <em className="italic text-[#1e3a5f]">doesn&apos;t.</em>
          </h1>

          <p className="animate-fade-up-delay-1 mt-5 max-w-md text-base leading-relaxed text-muted">
            Knox is the parent vault for security tools that protect contracts,
            vibe-coded sites, and the systems builders ship next.
          </p>

          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background shadow-[0_8px_24px_rgba(10,10,10,0.16)] transition-opacity hover:opacity-90"
            >
              Explore products →
            </a>
            <a
              href="https://audit.web5.nexus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-foreground/12 bg-surface/80 px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Open Web5 Audit →
            </a>
          </div>

          <ul className="animate-fade-up-delay-3 mt-12 grid grid-cols-3 gap-3 border-t border-border/80 pt-6">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-border">
                <ShieldIcon />
              </span>
              <span className="text-[12px] leading-snug text-muted">
                <span className="block font-medium text-foreground">Live: Web5 Audit</span>
                Scanning Solidity, Rust + more.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-border">
                <GlobeIcon />
              </span>
              <span className="text-[12px] leading-snug text-muted">
                <span className="block font-medium text-foreground">10K+ Developers</span>
                Trust Knox tooling.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-border">
                <BoltIcon />
              </span>
              <span className="text-[12px] leading-snug text-muted">
                <span className="block font-medium text-foreground">10+ Languages</span>
                Covered in one vault.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_right,rgba(10,10,10,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,10,0.045)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:56px_56px]"
        aria-hidden
      />
    </section>
  );
}
