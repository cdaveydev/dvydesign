import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GalleryLightboxTile } from "@/components/GalleryLightboxTile";
import {
  CASE_STUDIES,
  type CaseStudySection,
  type CaseStudySlug,
} from "@/lib/caseStudies";

type Props = {
  params: {
    slug: string;
  };
};

function isCaseStudySlug(slug: string): slug is CaseStudySlug {
  return slug in CASE_STUDIES;
}

/** Pre-register known slugs so builds list these routes explicitly (helps dev + hosting consistency). */
export function generateStaticParams(): { slug: CaseStudySlug }[] {
  return (Object.keys(CASE_STUDIES) as CaseStudySlug[]).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isCaseStudySlug(params.slug)) return { title: "Case study" };
  const cs = CASE_STUDIES[params.slug];
  return {
    title: cs.title,
    description: cs.summary,
  };
}

export default function CaseStudyPage({ params }: Props) {
  if (!isCaseStudySlug(params.slug)) {
    notFound();
  }

  const cs = CASE_STUDIES[params.slug];

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <Breadcrumbs current={cs.title} />
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          {cs.title}
        </h1>
        <p className="max-w-2xl text-muted sm:text-lg">{cs.summary}</p>
      </header>

      {cs.heroImage ? (
        <section className="dvy-card overflow-hidden p-4 sm:p-6">
          <div className="overflow-hidden rounded-dvy border border-white/10 bg-black/20">
            <Image
              src={cs.heroImage.src}
              alt={cs.heroImage.alt}
              width={cs.heroImage.width ?? 1920}
              height={cs.heroImage.height ?? 1200}
              sizes="(max-width: 1024px) 100vw, min(80vw, 1152px)"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-3">
        {cs.overview?.role ? (
          <MetaCard label="Role" value={cs.overview.role} />
        ) : null}
        {cs.overview?.timeline ? (
          <MetaCard label="Timeline" value={cs.overview.timeline} />
        ) : null}
        {cs.overview?.platforms ? (
          <MetaCard label="Platforms" value={cs.overview.platforms} />
        ) : null}
      </section>

      <section className="grid gap-4">
        {cs.sections.map((section, i) => (
          <CaseStudySectionBlock key={`${section.title}-${i}`} section={section} />
        ))}
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href={cs.backLink?.href ?? "/product"}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          <span aria-hidden>←</span>
          {cs.backLink?.label ?? "Back to UX/UI"}
        </Link>
      </div>
    </div>
  );
}

function CaseStudySectionBlock({ section }: { section: CaseStudySection }) {
  if (section.kind === "text") {
    return (
      <div className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">{section.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {section.body}
        </p>
      </div>
    );
  }

  if (section.kind === "bullets") {
    return (
      <div className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">{section.title}</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
          {section.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.kind === "figma-prototype") {
    const width = section.width ?? 400;
    const height = section.height ?? 800;
    const frameHeight = section.frameHeight ?? height;
    const frameOffsetY = section.frameOffsetY ?? 0;

    return (
      <div className="dvy-card overflow-hidden p-6 sm:p-8">
        <PrototypeSectionHeader
          title={section.title}
          description={section.description}
        />
        <div
          className="relative mx-auto mt-6 overflow-hidden rounded-dvy border border-white/10 bg-[rgb(var(--bg))] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          style={{ maxWidth: width, height: frameHeight }}
        >
          <iframe
            title={`${section.title} — interactive prototype`}
            src={section.embedUrl}
            className="absolute left-0 block w-full border-0 bg-[rgb(var(--bg))]"
            style={{
              top: frameOffsetY,
              height,
              colorScheme: "dark",
            }}
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  if (section.kind === "web-prototype") {
    const aspectRatio = section.aspectRatio ?? "4/3";

    return (
      <div className="dvy-card overflow-hidden p-6 sm:p-8">
        <PrototypeSectionHeader
          title={section.title}
          description={section.description}
          action={
            <a
              href={section.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
            >
              Open prototype ↗
            </a>
          }
        />
        <div
          className="relative mt-6 w-full overflow-hidden rounded-dvy border border-white/10 bg-[rgb(var(--bg))] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          style={
            section.height
              ? { height: section.height }
              : { aspectRatio: aspectRatio.replace("/", " / ") }
          }
        >
          <iframe
            title={`${section.title} — interactive prototype`}
            src={section.embedUrl}
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="dvy-card overflow-hidden p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-fg">{section.title}</h2>
      {section.description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {section.description}
        </p>
      ) : null}
      <div
        className={
          section.gridClass ??
          (section.images.length === 1
            ? "mt-6 grid max-w-3xl grid-cols-1 gap-3"
            : "mt-6 grid gap-3 sm:grid-cols-2")
        }
      >
        {section.images.map((img, j) => (
          <GalleryLightboxTile
            key={`${img.src}-${j}`}
            src={img.src}
            alt={img.alt}
            sizes={section.imageSizes ?? "(max-width: 640px) 100vw, 50vw"}
            imageClassName={`object-cover ${img.objectClass ?? "object-center"}`}
            tileClassName={
              section.tileClass ??
              "relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-black/20"
            }
          />
        ))}
      </div>
    </div>
  );
}

function PrototypeSectionHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div className="space-y-3">
        <span className="dvy-pill">Interactive prototype</span>
        <h2 className="text-xl font-semibold text-fg">{title}</h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="dvy-card p-6">
      <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-2 text-sm font-semibold text-fg">{value}</div>
    </div>
  );
}
