export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 border-t border-border sm:scroll-mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-14 md:flex-row md:items-end md:justify-between lg:px-8 lg:py-16">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-4 items-end gap-[3px]" aria-hidden>
              <span className="h-2.5 w-[3px] rounded-sm bg-foreground" />
              <span className="h-4 w-[3px] rounded-sm bg-foreground" />
              <span className="h-3 w-[3px] rounded-sm bg-foreground" />
            </span>
            <span className="text-[15px] font-medium tracking-tight">knox</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Parent security company for Web5 Audit and the tools that keep
            builders&apos; systems locked down.
          </p>
          <a
            href="mailto:hello@knox.security"
            className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
          >
            Contact →
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted sm:gap-x-8">
          <a href="#products" className="hover:text-foreground">
            Products
          </a>
          <a
            href="https://audit.web5.nexus/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Web5 Audit
          </a>
          <a href="#approach" className="hover:text-foreground">
            Approach
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Knox. All rights reserved.</p>
          <p>Web5 Security · Built like Knox.</p>
        </div>
      </div>
    </footer>
  );
}
