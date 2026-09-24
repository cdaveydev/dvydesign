import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GalleryLightboxTile } from "@/components/GalleryLightboxTile";

export const metadata: Metadata = {
  title: "Products",
};

export default function IndustrialPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <Breadcrumbs current="Products" />
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Industrial Design that turns ideas into manufacturable products
        </h1>
        <p className="max-w-2xl text-muted sm:text-lg">
          Thoughtful industrial design balances usability, engineering, and
          production to create products that work in the real world.
        </p>
      </header>

      <section>
        <Feature
          title="CAD &amp; production"
          body="CAD, DFM, prototyping, and production-ready detail that moves cleanly into tooling."
        />
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Work samples</h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Product renders, animations, and in-context shots from connected
          hardware and consumer devices.
        </p>
        <div className="mt-6 grid auto-rows-[minmax(11rem,18vw)] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <WorkSampleImage
            src="/assets/TreaterHero.jpg"
            videoSrc="/assets/Treater.mp4"
            alt="Treater automatic pet feeder product animation"
            imageClassName="object-cover object-center"
            title="Treater"
            span="feature"
          />
          <WorkSampleImage
            src="/assets/TreaterHero.jpg"
            alt="Treater automatic pet feeder product render"
            imageClassName="object-cover object-center"
            title="Treater"
          />
          <WorkSampleImage
            src="/assets/TreaterWithDog.jpg"
            alt="Treater automatic pet feeder with a dog and dispensed kibble"
            imageClassName="object-cover object-center"
            title="Treater"
          />
          <WorkSampleImage
            src="/assets/iv-medtag-hero.jpg"
            alt="IV Drip Monitor infusion device on a hospital pole"
            imageClassName="object-cover object-center"
            title="IV Drip Monitor"
            span="wide"
          />
          <WorkSampleImage
            src="/assets/NexePackaging.png"
            videoSrc="/assets/NexeRotate.mp4"
            alt="Nexe product rotation animation"
            imageClassName="object-cover object-center"
            title="Nexe"
            span="wide"
          />
          <WorkSampleImage
            src="/assets/NexePackaging.png"
            videoSrc="/assets/NexeDesktopnimation.mp4"
            alt="Nexe desktop product animation"
            imageClassName="object-cover object-center"
            title="Nexe"
          />
          <WorkSampleImage
            src="/assets/NexePackaging.png"
            alt="Nexe Launch Kit packaging"
            imageClassName="object-cover object-center"
            title="Nexe"
          />
          <WorkSampleImage
            src="/assets/MedTechDeviceOnNeckl.png"
            alt="Med tech neck-worn device industrial design"
            imageClassName="object-cover object-center scale-125"
            title="Med-Tech Monitor"
            span="wide"
          />
          <WorkSampleImage
            src="/assets/victorybeam.png"
            alt="Victory Beam industrial design work"
            imageClassName="object-cover object-bottom"
            title="Victory Beam"
          />
          <WorkSampleImage
            src="/assets/SportsMonitor.png"
            videoSrc="/assets/MuscleMonitor.mp4"
            alt="Sports monitor industrial design"
            imageClassName="object-cover object-bottom"
            title="Muscle Analizer"
          />
          <WorkSampleImage
            src="/assets/Military Field Analyzer.jpg"
            alt="Military Field Analyzer weathered enclosure with a camouflage helmet"
            imageClassName="object-cover object-center"
            title="Military Field Analyzer"
            span="feature"
          />
          <WorkSampleImage
            src="/assets/Dropbox AI Camera.jpg?v=20260922c"
            alt="Dropbox AI Camera exploded product view on a black background"
            imageClassName="object-cover object-center"
            title="Dropbox AI Camera"
            span="feature"
          />
          <WorkSampleImage
            src="/assets/Circle_Light_room.jpg"
            alt="Circle light room industrial design"
            imageClassName="object-cover object-top"
            title="Circle Light"
          />
          <WorkSampleImage
            src="/assets/Flame.jpg"
            alt="Flame table lamp glowing on a dark wood table"
            imageClassName="object-cover object-center"
            title="Flame"
          />
          <WorkSampleImage
            src="/assets/RFID Inventory Tracker.jpg"
            alt="RFID inventory tracker on a convenience-store cooler shelf"
            imageClassName="object-cover object-center"
            title="RFID Inventory Tracker"
          />
          <WorkSampleImage
            src="/assets/ChamberDrip2.png"
            alt="Chamber drip device industrial design"
            imageClassName="object-cover object-center"
            title="IV Drip Monitor"
          />
          <WorkSampleImage
            src="/assets/Purell Hand Sanitizer.jpg"
            alt="Purell hand sanitizer dispenser product render"
            imageClassName="object-cover object-center"
            title="Purell Hand Sanitizer"
            span="feature"
          />
          <WorkSampleImage
            src="/assets/Purell Hand Sanitizer.jpg"
            videoSrc="/assets/Hand Sanitizer Video.mp4"
            alt="Purell hand sanitizer dispenser product animation"
            imageClassName="object-cover object-center"
            title="Hand Sanitizer Video"
            span="wide"
          />
          <WorkSampleImage
            src="/assets/OBDII.jpg"
            alt="Fleetwerks OBD-II diagnostic module on a car seat"
            imageClassName="object-cover object-center"
            title="OBD-II"
          />
          <WorkSampleImage
            src="/assets/CNC Dust Guard.jpg"
            alt="OpenBuilds CNC spindle with a clear dust guard on a wood board"
            imageClassName="object-cover object-center"
            title="CNC Dust Guard"
          />
          <WorkSampleImage
            src="/assets/Siri Speaker.jpg"
            alt="Siri Speaker on a wood desk"
            imageClassName="object-cover object-center"
            title="Siri Speaker"
            span="feature"
          />
          <WorkSampleImage
            src="/assets/Siri Speaker.jpg"
            videoSrc="/assets/Siri Speaker.mp4"
            alt="Siri Speaker product animation"
            imageClassName="object-cover object-center"
            title="Siri Speaker Video"
            span="feature"
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

const mosaicSpan = {
  feature: "col-span-2 row-span-2",
  wide: "col-span-2",
  default: "",
} as const;

function WorkSampleImage({
  src,
  alt,
  imageClassName = "object-cover",
  title,
  videoSrc,
  posterSrc,
  span = "default",
}: {
  src: string;
  alt: string;
  imageClassName?: string;
  title?: string;
  videoSrc?: string;
  posterSrc?: string;
  span?: keyof typeof mosaicSpan;
}) {
  const sizes =
    span === "feature"
      ? "(max-width: 640px) 100vw, 50vw"
      : span === "wide"
        ? "(max-width: 640px) 100vw, 50vw"
        : "(max-width: 640px) 50vw, 25vw";

  return (
    <GalleryLightboxTile
      src={src}
      alt={alt}
      sizes={sizes}
      imageClassName={imageClassName}
      tileClassName={[
        "relative h-full min-h-[11rem] overflow-hidden rounded-dvy border border-white/10 bg-black/20",
        mosaicSpan[span],
      ]
        .filter(Boolean)
        .join(" ")}
      videoSrc={videoSrc}
      posterSrc={posterSrc}
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

