import type { ReactNode } from "react";
import {
  AnthropicMark,
  CheckBlue,
  ChromeMark,
  EthereumMark,
  FirefoxMark,
  GitHubMark,
  GoogleMark,
  KeyMark,
  MoveMark,
  NearMark,
  OpenAIMark,
  RustMark,
  SafariMark,
  SolidityMark,
  UsdcMark,
} from "@/components/BrandMarks";

function CornerBrackets() {
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-blueprint/50" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-blueprint/50" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-blueprint/50" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-blueprint/50" />
    </>
  );
}

function BlueprintCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-blueprint/25 bg-surface/90 ${className}`}
    >
      <CornerBrackets />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.12)_1px,transparent_0)] bg-[size:16px_16px] opacity-50" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function MarkRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">{children}</div>
  );
}

function MarkChip({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-white/80 px-2 py-1 text-[11px] font-medium text-foreground shadow-sm"
      title={label}
    >
      <span className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-full">
        {children}
      </span>
      {label}
    </span>
  );
}

function AuditVisual() {
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-blueprint/20 bg-[#F8FAFF] p-4 sm:min-h-[260px] sm:p-5">
      <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-blueprint/20" />
      <div className="pointer-events-none absolute -right-2 top-4 h-20 w-20 rounded-full border border-dashed border-blueprint/25" />

      {/* Code window */}
      <div className="relative mb-3 max-w-[15rem] rounded-lg border border-border bg-white p-3 shadow-sm">
        <div className="mb-2 flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <pre className="font-mono text-[10px] leading-relaxed text-muted">
          <span className="text-[#7C3AED]">function</span>{" "}
          <span className="text-[#2563EB]">transfer</span>() {"{"}
          {"\n"}
          {"  "}balances[to] += amt;
          {"\n"}
          {"  "}
          <span className="text-[#DC2626]">// reentrancy</span>
          {"\n"}
          {"}"}
        </pre>
      </div>

      {/* Checklist */}
      <ul className="relative space-y-2">
        {[
          "Security Analysis",
          "Vulnerability Scan",
          "Remediation Hints",
          "PDF Export",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-[12px] text-foreground">
            <CheckBlue className="h-4 w-4 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* Brand constellation */}
      <div className="absolute bottom-3 right-3 flex items-center -space-x-1.5 sm:bottom-4 sm:right-4">
        <EthereumMark className="h-7 w-7 rounded-full shadow-sm ring-2 ring-white" />
        <SolidityMark className="h-7 w-7 rounded-full shadow-sm ring-2 ring-white" />
        <RustMark className="h-7 w-7 rounded-full shadow-sm ring-2 ring-white" />
        <MoveMark className="h-7 w-7 rounded-full shadow-sm ring-2 ring-white" />
        <GitHubMark className="h-7 w-7 rounded-full shadow-sm ring-2 ring-white" />
      </div>
    </div>
  );
}

function SiteGuardVisual() {
  return (
    <div className="relative mt-5 flex min-h-[120px] items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_65%)]" />
      <div className="relative rounded-xl border border-border bg-white p-3 shadow-sm">
        <div className="mb-2 h-2 w-28 rounded bg-[#E5E7EB]" />
        <div className="mb-1 h-2 w-20 rounded bg-[#F3F4F6]" />
        <div className="h-2 w-24 rounded bg-[#F3F4F6]" />
        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#10B981] text-[11px] font-bold text-white shadow">
          ✓
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <ChromeMark className="h-8 w-8 drop-shadow-sm" />
        <FirefoxMark className="h-8 w-8 drop-shadow-sm" />
        <SafariMark className="h-8 w-8 drop-shadow-sm" />
      </div>
    </div>
  );
}

function AgentShieldVisual() {
  return (
    <div className="relative mt-5 flex min-h-[120px] flex-col items-center justify-center gap-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,163,127,0.08),transparent_65%)]" />
      <div className="relative flex items-center gap-3">
        <OpenAIMark className="h-10 w-10 drop-shadow-sm" />
        <AnthropicMark className="h-10 w-10 drop-shadow-sm" />
        <GoogleMark className="h-10 w-10 drop-shadow-sm" />
      </div>
      <div className="rounded-full border border-border bg-white px-3 py-1 text-[10px] font-medium text-muted shadow-sm">
        Policy · Spend limits · Allowlists
      </div>
    </div>
  );
}

function VaultOpsVisual() {
  return (
    <div className="relative mt-5 flex min-h-[120px] flex-col items-center justify-center gap-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,117,202,0.1),transparent_65%)]" />
      <div className="relative flex items-center gap-3">
        <NearMark className="h-10 w-10 drop-shadow-sm" />
        <UsdcMark className="h-10 w-10 drop-shadow-sm" />
        <KeyMark className="h-10 w-10 drop-shadow-sm" />
      </div>
      <div className="rounded-full border border-border bg-white px-3 py-1 text-[10px] font-medium text-muted shadow-sm">
        Identity · Receipts · History
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="relative scroll-mt-16 overflow-hidden sm:scroll-mt-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-blueprint">
            Products
          </p>
          <h2 className="mt-3 font-serif text-[1.75rem] tracking-tight text-foreground sm:text-3xl md:text-4xl">
            One vault. Many locks.
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-muted sm:mt-4 sm:text-[15px]">
            Knox houses the tools that keep builders safe — starting with Web5
            Audit, with more under construction.
          </p>
        </div>

        {/* Featured: Web5 Audit */}
        <BlueprintCard className="mt-8 p-5 sm:mt-12 sm:p-7 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-blueprint">
                  01 / Active tool
                </span>
                <span className="rounded-full bg-live/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-live">
                  Live
                </span>
              </div>
              <h3 className="mt-3 font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
                Web5 Audit
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
                AI-assisted smart contract audits across Solidity, Rust, Move,
                and 10+ languages — severity-graded findings and remediation in
                seconds.
              </p>

              <div className="mt-4">
                <MarkRow>
                  <MarkChip label="Ethereum">
                    <EthereumMark className="h-5 w-5" />
                  </MarkChip>
                  <MarkChip label="Solidity">
                    <SolidityMark className="h-5 w-5" />
                  </MarkChip>
                  <MarkChip label="Rust">
                    <RustMark className="h-5 w-5" />
                  </MarkChip>
                  <MarkChip label="Sui / Move">
                    <MoveMark className="h-5 w-5" />
                  </MarkChip>
                  <MarkChip label="GitHub">
                    <GitHubMark className="h-5 w-5" />
                  </MarkChip>
                </MarkRow>
              </div>

              <a
                href="https://audit.web5.nexus/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background shadow-[0_8px_24px_rgba(10,10,10,0.14)] transition-opacity hover:opacity-90"
              >
                Open Audit →
              </a>
            </div>

            <AuditVisual />
          </div>
        </BlueprintCard>

        {/* Coming soon grid */}
        <div className="mt-4 grid gap-4 sm:mt-5 md:grid-cols-3">
          <BlueprintCard className="flex h-full flex-col p-5 sm:p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-blueprint">
              02 / Site protection
            </span>
            <div className="mt-2 flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">Site Guard</h3>
              <span className="rounded-full bg-background px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted ring-1 ring-border">
                Soon
              </span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              Chrome extension that hardens vibe-coded sites — leaked keys, weak
              headers, and risky patterns before ship.
            </p>
            <SiteGuardVisual />
            <div className="mt-4 flex items-center gap-2">
              <ChromeMark className="h-6 w-6" />
              <FirefoxMark className="h-6 w-6" />
              <SafariMark className="h-6 w-6" />
            </div>
          </BlueprintCard>

          <BlueprintCard className="flex h-full flex-col p-5 sm:p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-blueprint">
              03 / Agent policy
            </span>
            <div className="mt-2 flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">Agent Shield</h3>
              <span className="rounded-full bg-background px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted ring-1 ring-border">
                Soon
              </span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              Guardrails for agent stacks — spend limits, tool allowlists, and
              audit trails under one Knox policy.
            </p>
            <AgentShieldVisual />
            <div className="mt-4 flex items-center gap-2">
              <OpenAIMark className="h-6 w-6" />
              <AnthropicMark className="h-6 w-6" />
              <GoogleMark className="h-6 w-6" />
            </div>
          </BlueprintCard>

          <BlueprintCard className="flex h-full flex-col p-5 sm:p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-blueprint">
              04 / Trust layer
            </span>
            <div className="mt-2 flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">Vault Ops</h3>
              <span className="rounded-full bg-background px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted ring-1 ring-border">
                Soon
              </span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              Shared trust layer — identities, receipts, and incident history
              across every Knox product.
            </p>
            <VaultOpsVisual />
            <div className="mt-4 flex items-center gap-2">
              <NearMark className="h-6 w-6" />
              <UsdcMark className="h-6 w-6" />
              <KeyMark className="h-6 w-6" />
            </div>
          </BlueprintCard>
        </div>
      </div>
    </section>
  );
}
