import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Truck } from "lucide-react";
import { PHONE, navLinks } from "@/lib/constants";

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${PHONE}`}
      className={`inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      <Phone className="size-4" aria-hidden="true" />
      Call Now: {PHONE}
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-soft">
            <Truck className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight sm:text-lg">
              QUICK N SAFE LOGISTICS
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Packers and Movers
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CallButton />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="grid size-11 place-items-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          {menuOpen ? <Menu className="size-5 hidden" /> : null}
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary [&.active]:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <CallButton className="mt-2 justify-center" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
