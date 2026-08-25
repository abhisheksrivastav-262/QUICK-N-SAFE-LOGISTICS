import { Link } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { PHONE, ADDRESS_LINE1, ADDRESS_LINE2, navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-brand-gradient text-primary-foreground">
              <Truck className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-bold">QUICK N SAFE LOGISTICS</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Packers and Movers offering safe packing, shifting and transportation services.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-bold uppercase tracking-widest">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              Phone:{" "}
              <a href={`tel:${PHONE}`} className="font-semibold text-primary">
                {PHONE}
              </a>
            </li>
            <li>
              Address: {ADDRESS_LINE1}, {ADDRESS_LINE2}
            </li>
            <li>Business: Packers and Movers</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} QUICK N SAFE LOGISTICS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
