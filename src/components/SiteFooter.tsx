import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="dvy-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-fg">{SITE.name}</div>
            <div className="text-sm text-muted">{SITE.tagline}</div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/product" className="text-fg/85 hover:text-fg">
              UX/UI
            </Link>
            <Link href="/industrial" className="text-fg/85 hover:text-fg">
              Products
            </Link>
            <Link href="/branding" className="text-fg/85 hover:text-fg">
              Branding
            </Link>
            <Link href="/about" className="text-fg/85 hover:text-fg">
              About
            </Link>
            <a
              href={SITE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-fg/85 hover:text-fg"
            >
              LinkedIn
            </a>
            <a
              href={SITE.links.resume}
              target="_blank"
              rel="noreferrer"
              className="text-fg/85 hover:text-fg"
            >
              Resume
            </a>
          </nav>
        </div>

        <div className="mt-8 text-xs text-muted/90">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

