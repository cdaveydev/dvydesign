import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Branding / Graphic Design",
};

export default function BrandingPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="dvy-pill">Identity</span>
          <span className="dvy-pill">Typography</span>
          <span className="dvy-pill">Graphic systems</span>
          <span className="dvy-pill">Art direction</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Branding that helps businesses stand out and scale.
        </h1>
        <p className="max-w-2xl text-muted sm:text-lg">
          Effective branding differentiates your business, builds credibility,
          and supports long-term growth.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Feature
          title="Identity"
          body="Brand identity systems; logo design & visual language."
        />
        <Feature
          title="System + guidelines"
          body="Color, typography, and usage guidelines; messaging & brand positioning."
        />
        <Feature
          title="Assets"
          body="Print, packaging, and digital brand assets."
        />
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Selected work</h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Add brand project tiles here—each can open a detail page later if you
          want deeper storytelling.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]">
            <Image
              src="/assets/shannon_automotive.png"
              alt="Shannon Automotive brand work"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]">
            <Image
              src="/assets/Fort_Rock_Cans_on_blue.png"
              alt="Fort Rock Brewing cans on blue"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center scale-[1.35]"
            />
          </div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="aspect-[4/3] rounded-dvy border border-white/10 bg-white/[0.03]"
            />
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/about"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          Next: About + Contact →
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

