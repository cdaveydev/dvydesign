/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { LinkButton } from "@/components/LinkButton";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/product", label: "UX/UI" },
  { href: "/industrial", label: "Products" },
  { href: "/branding", label: "Branding" },
  { href: "/about", label: "About" },
] as const;

const navLinkBase =
  "inline-flex items-center rounded-full border border-solid px-3 py-2 text-sm transition-[color,background-color,box-shadow,border-color]";

function navLinkClass(active: boolean) {
  if (active) {
    // Distinct from primary CTAs: translucent “segment” on the page purple, not solid light fill.
    return [
      navLinkBase,
      "border-white/22 bg-white/[0.07] text-fg",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.28)]",
    ].join(" ");
  }
  return [
    navLinkBase,
    "border-transparent text-fg/80",
    "hover:bg-white/[0.06] hover:text-fg",
  ].join(" ");
}

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="dvy-container">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <img
              src="/assets/Asset 4.png"
              alt={`${SITE.name} logo`}
              className="h-6 w-auto opacity-95 transition group-hover:opacity-100"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={navLinkClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-fg/90 hover:bg-white/8 md:inline-flex"
              href={SITE.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <LinkButton href={SITE.links.resume} variant="primary">
              Resume
            </LinkButton>
          </div>
        </div>

        <div className="-mx-2 flex gap-1 overflow-x-auto pb-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={["shrink-0", navLinkClass(pathname === item.href)].join(
                " ",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

