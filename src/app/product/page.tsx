import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UX/UI",
};

export default function ProductPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="dvy-pill">UX</span>
          <span className="dvy-pill">UI</span>
          <span className="dvy-pill">Design systems</span>
          <span className="dvy-pill">Prototyping</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          UX/UI that makes complex products intuitive.
        </h1>
        <p className="max-w-2xl text-muted sm:text-lg">
          User-centered design improves usability, reduces friction, and ensures
          digital experiences feel clear and intentional.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Feature
          title="UX clarity"
          body="User flows & information architecture; wireframes & interactive prototypes."
        />
        <Feature
          title="UI craft"
          body="Responsive web & application design—thoughtful layouts and interaction across breakpoints."
        />
        <Feature
          title="System thinking"
          body="UI design systems & components; design–engineering handoff."
        />
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Case studies</h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Drop in your key UX/UI projects here (problem → process → outcome).
          This layout is built to support metrics, screenshots, and story.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <CaseStudyCard
            title="HiDO Health"
            body="Mobile apps and web-based dashboards for cognitive care patients."
            imageSrc="/assets/hido_health.png"
            imageAlt="HiDO Health product UX/UI"
            href="/case-studies/hido-health"
          />
          <CaseStudyCard
            title="Bekonix, Inc."
            body="SaaS platform for creating smart-connected products."
            imageSrc="/assets/BekonixMonitor.jpg"
            imageAlt="Bekonix monitor UX/UI"
            href="/case-studies/bekonix"
          />
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/industrial"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          Next: Products →
        </Link>
      </div>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="dvy-card p-6">
      <div className="text-base font-semibold text-fg">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-muted">{body}</div>
    </div>
  );
}

function CaseStudyCard({
  title,
  body,
  imageSrc,
  imageAlt,
  href,
}: {
  title: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
}) {
  const card = (
    <div className="rounded-dvy border border-white/10 bg-white/[0.03] p-6">
      <div className="text-base font-semibold text-fg">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-muted">{body}</div>
      <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        ) : null}
      </div>
    </div>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      className="block rounded-dvy transition hover:-translate-y-0.5 hover:bg-white/[0.02]"
    >
      {card}
    </Link>
  );
}

