import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { GalleryLightboxTile } from "@/components/GalleryLightboxTile";

export const metadata: Metadata = {
  title: "Branding / Graphic Design",
};

export default function BrandingPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <Breadcrumbs current="Branding" />
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Branding that helps businesses stand out and scale.
        </h1>
        <p className="max-w-2xl text-muted sm:text-lg">
          Effective branding differentiates your business, builds credibility,
          and supports long-term growth.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Feature
          title="Identity"
          body="Brand identity systems; logo design & visual language."
        />
        <Feature
          title="Assets"
          body="Print, packaging, and digital brand assets."
        />
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Case studies</h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Brand systems and packaging stories—identity, applications, and the
          work that shipped.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <CaseStudyCard
            title="Fort Rock Brewing"
            body="Brand identity, packaging art, and shelf-ready visuals for a Pacific Northwest craft brewery."
            imageSrc="/assets/Fort_Rock_Cans_on_blue.png"
            imageAlt="Fort Rock Brewing cans on blue"
            href="/case-studies/fort-rock-brewing"
          />
          <CaseStudyCard
            title="Shannon Family Automotive"
            body="Identity and environmental graphics for a family automotive shop—signage that reads at speed and after dark."
            imageSrc="/assets/Shannon Store Fron Singage.jpg"
            imageAlt="Shannon Family Automotive storefront script signage at night"
            imageClassName="object-cover object-center"
            href="/case-studies/shannon-family-automotive"
          />
        </div>
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Selected work</h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Identity, packaging, and in-context brand applications across
          consumer, beverage, and connected-product work.
        </p>
        <div className="mt-6 grid grid-flow-dense grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          <BrandSampleImage
            src="/assets/brand-bekonix.png"
            alt="Bekonix brand identity"
            imageClassName="object-cover object-center"
            title="Bekonix"
            span="feature"
          />
          <BrandSampleImage
            src="/assets/brand-birdseye.png"
            alt="Birdseye Consulting logo"
            imageClassName="object-cover object-center"
            title="Birdseye Consulting"
          />
          <BrandSampleImage
            src="/assets/brand-nexe.png"
            alt="Nexe wordmark"
            imageClassName="object-cover object-center"
            title="Nexe"
          />
          <BrandSampleImage
            src="/assets/brand-11th-and-l.png"
            alt="Eleventh and L Properties logo"
            imageClassName="object-cover object-center"
            title="Eleventh & L"
            span="featureEnd"
          />
          <BrandSampleImage
            src="/assets/brand-preformd.png"
            alt="preform'd logo"
            imageClassName="object-cover object-center"
            title="preform'd"
          />
          <BrandSampleImage
            src="/assets/brand-black-clover.png"
            alt="Black Clover Cycling logo"
            imageClassName="object-cover object-center"
            title="Black Clover Cycling"
          />
          <BrandSampleImage
            src="/assets/brand-bad-example.png"
            alt="Bad Example Cantina logo"
            imageClassName="object-cover object-center"
            title="Bad Example Cantina"
            span="feature"
          />
          <BrandSampleImage
            src="/assets/brand-kalabbr.png"
            alt="Kalabbr wordmark"
            imageClassName="object-cover object-center"
            title="Kalabbr"
          />
          <BrandSampleImage
            src="/assets/brand-township.png"
            alt="12 Red Blendend Napa Valley mark"
            imageClassName="object-cover object-center"
            title="12 Red Blendend"
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

const mosaicSpan = {
  feature: "col-span-2 row-span-2 aspect-square",
  featureEnd: "col-span-2 row-span-2 aspect-square sm:col-start-2",
  wide: "col-span-2 aspect-[2/1]",
  default: "aspect-square",
} as const;

function BrandSampleImage({
  src,
  alt,
  imageClassName = "object-cover",
  title,
  span = "default",
}: {
  src: string;
  alt: string;
  imageClassName?: string;
  title?: string;
  span?: keyof typeof mosaicSpan;
}) {
  const sizes =
    span === "feature" || span === "featureEnd"
      ? "(max-width: 640px) 100vw, 67vw"
      : span === "wide"
        ? "(max-width: 640px) 100vw, 67vw"
        : "(max-width: 640px) 50vw, 33vw";

  return (
    <GalleryLightboxTile
      src={src}
      alt={alt}
      sizes={sizes}
      imageClassName={imageClassName}
      tileClassName={[
        "relative w-full overflow-hidden rounded-dvy border border-white/10 bg-black/20",
        mosaicSpan[span],
      ]
        .filter(Boolean)
        .join(" ")}
      overlay={
        title ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-3 pt-12">
            <div className="text-sm font-semibold tracking-tight text-fg">
              {title}
            </div>
          </div>
        ) : null
      }
    />
  );
}

