"use client";

import { useEffect, useState } from "react";

const productItems = [
  {
    name: "Web5 Audit",
    href: "https://audit.web5.nexus/",
    external: true,
    note: "Live",
  },
  { name: "Site Guard", href: "#products", external: false, note: "Soon" },
  { name: "Agent Shield", href: "#products", external: false, note: "Soon" },
  { name: "Vault Ops", href: "#products", external: false, note: "Soon" },
];

const links = [
  { href: "https://audit.web5.nexus/", label: "Audit", external: true },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="relative z-40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Knox home"
          onClick={closeMobile}
        >
          <span className="flex h-4 items-end gap-[3px]" aria-hidden>
            <span className="h-2.5 w-[3px] rounded-sm bg-foreground" />
            <span className="h-4 w-[3px] rounded-sm bg-foreground" />
            <span className="h-3 w-[3px] rounded-sm bg-foreground" />
          </span>
          <span className="text-[15px] font-medium tracking-tight text-foreground">
            knox
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 xl:gap-7 lg:flex"
          aria-label="Primary"
        >
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[13px] text-muted transition-colors hover:text-foreground"
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
                className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {productsOpen && (
              <div className="absolute left-1/2 top-full z-40 w-52 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                  {productItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center justify-between px-4 py-2.5 text-[13px] text-foreground transition-colors hover:bg-background"
                    >
                      <span>{item.name}</span>
                      <span
                        className={`text-[11px] ${
                          item.note === "Live" ? "text-live" : "text-muted"
                        }`}
                      >
                        {item.note}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[13px] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="#products"
            className="hidden h-9 items-center rounded-full bg-foreground px-3.5 text-[12px] font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex sm:h-10 sm:px-4 sm:text-[13px] lg:inline-flex"
          >
            <span className="sm:hidden">Explore →</span>
            <span className="hidden sm:inline">Explore products →</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background shadow-sm transition-opacity hover:opacity-90 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M3.5 5.5H14.5M3.5 9H14.5M3.5 12.5H14.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        id="mobile-nav"
        className={`border-t border-border bg-background lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-h-[min(80vh,560px)] max-w-6xl flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6">
          <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            Products
          </p>
          {productItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={closeMobile}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] text-foreground transition-colors hover:bg-surface"
            >
              <span>{item.name}</span>
              <span
                className={`text-[11px] ${
                  item.note === "Live" ? "text-live" : "text-muted"
                }`}
              >
                {item.note}
              </span>
            </a>
          ))}

          <div className="my-2 h-px bg-border" />

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={closeMobile}
              className="rounded-xl px-3 py-3 text-[15px] text-foreground transition-colors hover:bg-surface"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#products"
            onClick={closeMobile}
            className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background sm:hidden"
          >
            Explore products →
          </a>
        </div>
      </div>
    </header>
  );
}
