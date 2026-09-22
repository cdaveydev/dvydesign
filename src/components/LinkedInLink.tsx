import { SITE } from "@/lib/site";

type LinkedInLinkProps = {
  className?: string;
  /** Visual treatment for the icon button. */
  variant?: "nav" | "plain" | "row";
};

const variantClass = {
  nav: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-fg/90 hover:bg-white/8",
  plain: "inline-flex items-center justify-center text-fg/85 hover:text-fg",
  row: "flex items-center justify-between rounded-dvy border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-fg/90 hover:bg-white/[0.06] sm:text-base",
} as const;

export function LinkedInLink({
  className,
  variant = "nav",
}: LinkedInLinkProps) {
  const classes = [variantClass[variant], className].filter(Boolean).join(" ");

  return (
    <a
      href={SITE.links.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className={classes}
    >
      <LinkedInIcon />
      {variant === "row" ? (
        <span className="text-muted">Open profile →</span>
      ) : null}
    </a>
  );
}

export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
