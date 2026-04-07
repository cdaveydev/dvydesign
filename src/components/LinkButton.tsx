import Link from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function LinkButton({ variant = "secondary", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-fg text-bg hover:bg-fg/90"
      : "border border-white/15 bg-white/5 text-fg hover:bg-white/8";

  const href = props.href?.toString() ?? "";
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const classes = [base, styles, className].filter(Boolean).join(" ");

  if (isExternal) {
    // Avoid passing `href` twice (and avoid spreading it onto <a>).
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href: _ignoredHref, ...rest } = props;
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noreferrer"
        {...(rest as Record<string, unknown>)}
      />
    );
  }

  return <Link className={classes} {...props} />;
}

