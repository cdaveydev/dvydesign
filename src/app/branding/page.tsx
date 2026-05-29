import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GalleryLightboxTile } from "@/components/GalleryLightboxTile";

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
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <GalleryLightboxTile
            src="/assets/shannon_automotive.png"
            alt="Shannon Automotive brand work"
            sizes="(max-width: 640px) 100vw, 50vw"
            imageClassName="object-cover"
            tileClassName="relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]"
          />
          <Link
            href="/case-studies/fort-rock-brewing"
            className="group relative block aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <Image
              src="/assets/Fort_Rock_Cans_on_blue.png"
              alt="Fort Rock Brewing cans on blue"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              Fort Rock Brewing — case study
            </span>
          </Link>
          <GalleryLightboxTile
            src="/assets/kalabbr.png"
            alt="Kalabbr brand work"
            sizes="(max-width: 640px) 100vw, 50vw"
            imageClassName="object-cover"
            tileClassName="relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]"
          />
          <GalleryLightboxTile
            src="/assets/bekonix.png"
            alt="Bekonix brand work"
            sizes="(max-width: 640px) 100vw, 50vw"
            imageClassName="object-cover object-center"
            tileClassName="relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]"
          />
          <GalleryLightboxTile
            src="/assets/NexePackaging.png"
            alt="NEXE packaging brand work"
            sizes="(max-width: 640px) 100vw, 50vw"
            imageClassName="object-cover"
            tileClassName="relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]"
          />
          <GalleryLightboxTile
            src="/assets/EsplanadeWine.png"
            alt="Esplanade Wine brand work"
            sizes="(max-width: 640px) 100vw, 50vw"
            imageClassName="object-cover"
            tileClassName="relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]"
          />
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

