import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Design",
};

export default function IndustrialPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="dvy-pill">Industrial</span>
          <span className="dvy-pill">Prototyping</span>
          <span className="dvy-pill">CMF</span>
          <span className="dvy-pill">DFM</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Industrial Design that turns ideas into manufacturable products
        </h1>
        <p className="max-w-2xl text-muted sm:text-lg">
          Thoughtful industrial design balances usability, engineering, and
          production to create products that work in the real world.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Feature
          title="Form &amp; ergonomics"
          body="Concept development, form exploration, and user-centered design—so ideas hold up in real use."
        />
        <Feature
          title="Materials &amp; manufacturing"
          body="Materials strategy, CMF, and supplier collaboration aligned with how things are actually built."
        />
        <Feature
          title="CAD &amp; production"
          body="CAD, DFM, prototyping, and production-ready detail that moves cleanly into tooling."
        />
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Work samples</h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Add project tiles here (renders, sketches, prototypes). I can plug in
          your real projects as soon as you share images + titles.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <WorkSampleImage
            src="/assets/victorybeam.png"
            alt="Victory Beam industrial design work"
            imageClassName="object-cover object-bottom"
            title="Victory Beam"
          />
          <WorkSampleImage
            src="/assets/MedTechDeviceOnNeckl.png"
            alt="Med tech neck-worn device industrial design"
            imageClassName="object-cover object-center scale-125"
            title="Med-Tech Monitor"
          />
          <WorkSampleImage
            src="/assets/SportsMonitor.png"
            alt="Sports monitor industrial design"
            imageClassName="object-cover object-bottom"
            title="Sports Monitor"
          />
          <WorkSampleImage
            src="/assets/RailroadMuseum.png"
            alt="California State Railroad Museum industrial design work"
            imageClassName="object-cover object-bottom"
            title="CA State Railroad Museum"
          />
          <WorkSampleImage
            src="/assets/HandSanitzer.png"
            alt="Hand sanitizer dispenser industrial design"
            title="Hand Sanitizer"
          />
          <WorkSampleImage
            src="/assets/IV_Monitor.png"
            alt="IV monitor industrial design"
            imageClassName="object-cover object-bottom"
            title="IV Monitor"
          />
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/branding"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          Next: Branding →
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

function WorkSampleImage({
  src,
  alt,
  imageClassName = "object-cover",
  title,
}: {
  src: string;
  alt: string;
  imageClassName?: string;
  title?: string;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-white/[0.03]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={imageClassName}
      />
      {title ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-3 pt-12">
          <div className="text-sm font-semibold tracking-tight text-fg">
            {title}
          </div>
        </div>
      ) : null}
    </div>
  );
}

