"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  SiClaude,
  SiEthereum,
  SiGithub,
  SiGooglechrome,
  SiNear,
  SiRust,
  SiSolidity,
} from "react-icons/si";
import { FaShieldHalved, FaKey } from "react-icons/fa6";

const steps = [
  {
    title: "Bring what you ship into Knox",
    body: "Connect GitHub repos, Solidity contracts, or a vibe-coded site. Knox is the front door — one vault for every surface you need to protect.",
    terminal: "connect github.com/acme/vault · contracts/Token.sol",
    focus: "sources" as const,
  },
  {
    title: "Scan with Web5 Audit",
    body: "Run AI-assisted audits across Solidity, Rust, Move, and more. Severity-graded findings, line-level context, and remediation land in seconds — not days.",
    terminal: "audit Token.sol · 11 findings · 0.8s · critical:1 high:3",
    focus: "audit" as const,
  },
  {
    title: "Harden the live surface",
    body: "Site Guard and Agent Shield extend the same trust outward — browser checks for leaked keys and headers, plus spend limits and allowlists for agents.",
    terminal: "harden site · chrome · headers ok · keys:0 leaked",
    focus: "harden" as const,
  },
  {
    title: "Keep one trust layer",
    body: "Identities, receipts, and incident history stay under Knox Vault Ops. Every future tool inherits the same institutional layer — so trust does not scatter.",
    terminal: "vault sync · policy shared · receipts:42 · suite linked",
    focus: "vault" as const,
  },
];

type Focus = (typeof steps)[number]["focus"];

function CornerMarks() {
  return (
    <>
      <span className="pointer-events-none absolute left-3 top-3 h-3.5 w-3.5 border-l border-t border-blueprint/55" />
      <span className="pointer-events-none absolute right-3 top-3 h-3.5 w-3.5 border-r border-t border-blueprint/55" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-3.5 w-3.5 border-b border-l border-blueprint/55" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-3.5 w-3.5 border-b border-r border-blueprint/55" />
    </>
  );
}

function SelectFrame({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <>
      <span className="pointer-events-none absolute -left-1 -top-1 h-2.5 w-2.5 border-l border-t border-blueprint/70" />
      <span className="pointer-events-none absolute -right-1 -top-1 h-2.5 w-2.5 border-r border-t border-blueprint/70" />
      <span className="pointer-events-none absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b border-l border-blueprint/70" />
      <span className="pointer-events-none absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b border-r border-blueprint/70" />
    </>
  );
}

function Node({
  active,
  dimmed,
  children,
  className = "",
}: {
  active: boolean;
  dimmed: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-md border bg-white px-2.5 py-2 transition-all duration-500 ${
        active
          ? "border-[#D8DEE8] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_6px_16px_rgba(59,130,246,0.08)]"
          : dimmed
            ? "border-[#E6E9EF] opacity-[0.38]"
            : "border-[#E6E9EF] opacity-80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
      } ${className}`}
    >
      <SelectFrame show={active} />
      {children}
    </div>
  );
}

function FlowDiagram({ active }: { active: number }) {
  const focus: Focus = steps[active]?.focus ?? "sources";
  const is = (f: Focus) => focus === f;

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#D9DEE7] bg-[#F3F4F6]">
      <CornerMarks />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.18)_1px,transparent_0)] bg-[size:14px_14px] opacity-[0.32]" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col p-3 sm:p-4">
        {/*
          Absolute SVG in the gutters only — nodes sit above in a 3-col grid
          so curves never paint across card faces.
        */}
        <div className="relative min-h-0 flex-1">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 640 420"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden
          >
            {/* Left gutter → hub */}
            <path
              className={is("sources") ? "flow-line flow-line-active" : "flow-line"}
              d="M168 78 H220 C248 78, 248 168, 276 168"
            />
            <path
              className={
                is("sources") || is("audit") ? "flow-line flow-line-active" : "flow-line"
              }
              d="M168 210 H276"
            />
            <path
              className={
                is("sources") || is("harden") ? "flow-line flow-line-active" : "flow-line"
              }
              d="M168 342 H220 C248 342, 248 252, 276 252"
            />

            {/* Trust → hub (center column only) */}
            <path
              className={is("vault") ? "flow-line flow-line-active" : "flow-line"}
              d="M320 118 V148"
            />

            {/* Hub → right gutter */}
            <path
              className={is("audit") ? "flow-line flow-line-active" : "flow-line"}
              d="M364 168 C392 168, 392 62, 420 62 H472"
            />
            <path
              className={is("harden") ? "flow-line flow-line-active" : "flow-line"}
              d="M364 210 H472"
            />
            <path
              className={
                is("harden") || is("vault") ? "flow-line flow-line-active" : "flow-line"
              }
              d="M364 252 C392 252, 392 300, 420 300 H472"
            />
            <path
              className={is("vault") ? "flow-line flow-line-active" : "flow-line"}
              d="M364 252 C392 252, 392 358, 420 358 H472"
            />
          </svg>

          <div className="relative z-10 grid h-full grid-cols-[minmax(0,1fr)_minmax(7.5rem,0.78fr)_minmax(0,1.12fr)] gap-x-3 sm:gap-x-5 lg:gap-x-6">
            {/* Sources */}
            <div className="flex flex-col justify-between py-0.5">
              <Node active={is("sources")} dimmed={!is("sources")}>
                <div className="flex items-center gap-2">
                  <SiGithub className="h-4 w-4 shrink-0 text-[#181717]" />
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-medium leading-tight text-foreground">
                      GitHub
                    </p>
                    <p className="truncate text-[9px] leading-tight text-muted">
                      repos & contracts
                    </p>
                  </div>
                </div>
              </Node>
              <Node
                active={is("sources") || is("audit")}
                dimmed={!(is("sources") || is("audit"))}
              >
                <div className="flex items-center gap-2">
                  <SiEthereum className="h-4 w-4 shrink-0 text-[#627EEA]" />
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-medium leading-tight text-foreground">
                      Ethereum
                    </p>
                    <p className="truncate text-[9px] leading-tight text-muted">
                      on-chain targets
                    </p>
                  </div>
                </div>
              </Node>
              <Node
                active={is("sources") || is("harden")}
                dimmed={!(is("sources") || is("harden"))}
              >
                <div className="flex items-center gap-2">
                  <SiGooglechrome className="h-4 w-4 shrink-0 text-[#4285F4]" />
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-medium leading-tight text-foreground">
                      Browser
                    </p>
                    <p className="truncate text-[9px] leading-tight text-muted">
                      vibe-coded sites
                    </p>
                  </div>
                </div>
              </Node>
            </div>

            {/* Center: Trust above Knox */}
            <div className="flex flex-col items-center justify-center gap-3.5">
              <Node
                active={is("vault")}
                dimmed={!is("vault")}
                className="w-full max-w-[9.5rem]"
              >
                <div className="flex items-center gap-2">
                  <div className="relative flex h-7 w-7 shrink-0 items-center justify-center">
                    <svg viewBox="0 0 36 36" className="absolute inset-0" aria-hidden>
                      <circle
                        cx="18"
                        cy="18"
                        r="14.5"
                        fill="none"
                        stroke="#E8EBF0"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14.5"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                        strokeDasharray={`${is("vault") ? 72 : 38} 100`}
                        strokeLinecap="round"
                        transform="rotate(-90 18 18)"
                        className="transition-all duration-700"
                      />
                    </svg>
                    <FaKey className="relative h-3 w-3 text-[#F59E0B]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium leading-tight text-foreground">
                      Trust layer
                    </p>
                    <p className="text-[9px] leading-tight text-muted">
                      Vault Ops · shared
                    </p>
                  </div>
                </div>
              </Node>

              <div
                className={`relative w-full max-w-[8.5rem] rounded-md border border-[#1a1a1a] bg-[#111111] px-3 py-2.5 text-center text-white transition-all duration-500 ${
                  is("vault")
                    ? "shadow-[0_0_0_3px_rgba(59,130,246,0.2)]"
                    : "shadow-[0_6px_18px_rgba(0,0,0,0.16)]"
                }`}
              >
                <SelectFrame show={is("vault") || is("sources")} />
                <div className="mx-auto mb-1 flex h-3 items-end justify-center gap-[2px]">
                  <span className="h-1.5 w-[2px] rounded-[1px] bg-white" />
                  <span className="h-3 w-[2px] rounded-[1px] bg-white" />
                  <span className="h-2 w-[2px] rounded-[1px] bg-white" />
                </div>
                <p className="text-[12px] font-semibold tracking-tight">knox</p>
                <p className="mt-0.5 text-[9px] text-white/55">parent vault</p>
              </div>
            </div>

            {/* Products */}
            <div className="flex flex-col justify-between gap-2 py-0.5">
              <Node active={is("audit")} dimmed={!is("audit")}>
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex min-w-0 items-center gap-2">
                    <FaShieldHalved className="h-3.5 w-3.5 shrink-0 text-[#2563EB]" />
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium leading-tight text-foreground">
                        Web5 Audit
                      </p>
                      <p className="truncate text-[9px] leading-tight text-muted">Live</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <SiSolidity className="h-3 w-3 text-[#363636]" />
                    <SiRust className="h-3 w-3 text-[#DEA584]" />
                    <span className="font-mono text-[9px] tabular-nums text-muted">
                      0.1800
                    </span>
                  </div>
                </div>
              </Node>
              <Node active={is("harden")} dimmed={!is("harden")}>
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex min-w-0 items-center gap-2">
                    <SiGooglechrome className="h-3.5 w-3.5 shrink-0 text-[#EA4335]" />
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium leading-tight text-foreground">
                        Site Guard
                      </p>
                      <p className="truncate text-[9px] leading-tight text-muted">
                        Coming soon
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] tabular-nums text-muted">
                    0.1840
                  </span>
                </div>
              </Node>
              <Node
                active={is("harden") || is("vault")}
                dimmed={!(is("harden") || is("vault"))}
              >
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex min-w-0 items-center gap-2">
                    <SiClaude className="h-3.5 w-3.5 shrink-0 text-[#D97757]" />
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium leading-tight text-foreground">
                        Agent Shield
                      </p>
                      <p className="truncate text-[9px] leading-tight text-muted">
                        Coming soon
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] tabular-nums text-muted">
                    0.1990
                  </span>
                </div>
              </Node>
              <Node active={is("vault")} dimmed={!is("vault")}>
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex min-w-0 items-center gap-2">
                    <SiNear className="h-3.5 w-3.5 shrink-0 text-[#00C08B]" />
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium leading-tight text-foreground">
                        Vault Ops
                      </p>
                      <p className="truncate text-[9px] leading-tight text-muted">
                        Shared receipts
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] tabular-nums text-muted">
                    0.2150
                  </span>
                </div>
              </Node>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-md border border-[#E1E5EC] bg-white/95 px-3 py-2 font-mono text-[10px] text-muted sm:text-[11px]">
          <span className="text-blueprint">{active + 1}/4</span>{" "}
          <span className="text-foreground/75">{steps[active].terminal}</span>
        </div>
      </div>
    </div>
  );
}

export default function Approach() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    const pickActive = () => {
      const mid = window.innerHeight * 0.42;
      let best = 0;
      let bestDist = Infinity;
      nodes.forEach((node, i) => {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, []);

  return (
    <section id="approach" className="scroll-mt-16 sm:scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-12">
          {/* Left: intro + full-viewport steps */}
          <div className="relative order-2 lg:order-1">
            <div className="mb-6 max-w-2xl pt-2 lg:mb-2 lg:pt-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-blueprint">
                Approach
              </p>
              <h2 className="mt-3 font-serif text-[2.15rem] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
                One vault, start to finish
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Scroll the steps. Knox routes what you ship through audit, surface
                hardening, and a shared trust layer — as one visible flow.
              </p>
            </div>

            <div className="relative mt-8">
              <div className="absolute bottom-4 left-[13px] top-2 w-px bg-border/80 sm:left-[15px]" />
              <div
                className="absolute left-[13px] top-2 w-px origin-top bg-blueprint transition-all duration-400 sm:left-[15px]"
                style={{
                  height: `${((active + 1) / steps.length) * 100}%`,
                  maxHeight: "calc(100% - 0.5rem)",
                }}
              />

              <div className="space-y-8 sm:space-y-10">
                {steps.map((step, i) => {
                  const on = active === i;
                  return (
                    <div
                      key={step.title}
                      ref={(el) => {
                        stepRefs.current[i] = el;
                      }}
                      data-step={i}
                      className="relative py-1"
                    >
                      <div className="relative w-full max-w-xl pl-11 sm:pl-14">
                        <span
                          className={`absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold transition-colors duration-300 sm:h-8 sm:w-8 sm:text-[13px] ${
                            on
                              ? "bg-blueprint text-white"
                              : "bg-[#D9DEE6] text-foreground/70"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <h3
                          className={`font-serif text-[1.55rem] tracking-tight transition-colors duration-300 sm:text-[1.8rem] md:text-[1.95rem] md:leading-[1.2] ${
                            on ? "text-foreground" : "text-foreground"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-base">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: compact sticky diagram */}
          <div className="order-1 sticky top-[4.5rem] z-10 mx-auto w-full max-w-xl lg:order-2 lg:mx-0 lg:max-w-none lg:top-24">
            <div className="h-[340px] sm:h-[380px] lg:h-[min(58vh,460px)]">
              <FlowDiagram active={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
