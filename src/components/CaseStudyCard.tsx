import Image from "next/image";
import Link from "next/link";

export function CaseStudyCard({
  title,
  body,
  imageSrc,
  imageAlt,
  imageClassName = "object-cover",
  imageSizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  href,
  action,
}: {
  title: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
  imageSizes?: string;
  href?: string;
  action?: string;
}) {
  const card = (
    <div className="rounded-dvy border border-white/10 bg-white/[0.03] p-6">
      <div className="text-base font-semibold text-fg">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-muted">{body}</div>
      {href ? (
        <div className="mt-4 text-sm text-fg/90 sm:text-base">
          Explore{" "}
          <span className="inline-block transition group-hover:translate-x-0.5">
            →
          </span>
        </div>
      ) : action ? (
        <div className="mt-4 text-sm text-muted sm:text-base">{action}</div>
      ) : null}
      <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            sizes={imageSizes}
            className={imageClassName}
          />
        ) : null}
      </div>
    </div>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      className="group block rounded-dvy transition hover:-translate-y-0.5 hover:bg-white/[0.02]"
    >
      {card}
    </Link>
  );
}
