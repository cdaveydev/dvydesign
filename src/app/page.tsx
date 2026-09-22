import Image from "next/image";
import Link from "next/link";
import { HeroBanner } from "@/components/HeroBanner";

const disciplines = [
  {
    title: "UX/UI",
    subtitle: "Systems, flows, interaction polish",
    href: "/product",
    imageSrc: "/assets/bekonix-desk.jpg",
    imageAlt: "Bekonix connected-product designer at a workstation",
    imageClass: "object-cover object-[70%_center]",
  },
  {
    title: "Products",
    subtitle: "Form, function, manufacturability",
    href: "/industrial",
    imageSrc: "/assets/MedTechDeviceOnNeckl.png",
    imageAlt: "Med-Tech neck-worn monitor",
    imageClass: "object-cover object-center",
  },
  {
    title: "Branding / Graphic",
    subtitle: "Identity, typography, story",
    href: "/branding",
    imageSrc: "/assets/shannon-sign.png",
    imageAlt: "Shannon Family Automotive illuminated sign",
    imageClass: "object-cover object-left",
  },
] as const;

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="relative left-1/2 w-screen -translate-x-1/2 -mt-10 sm:-mt-14">
        <HeroBanner />
      </div>

      <p className="mx-auto max-w-3xl text-pretty text-center text-xl leading-relaxed text-fg/85 sm:text-2xl">
        Proven UX/UI, Product, and Branding designer. With leadership experience
        shipping dozens of connected hardware and software products across
        medical and consumer SaaS, from high‑fidelity prototyping through
        production.
      </p>

      <section className="grid gap-5 md:grid-cols-3">
        {disciplines.map((item) => (
          <DisciplineCard key={item.href} {...item} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Approach</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Clarity first. I reduce cognitive load, design for real constraints
            (engineering, manufacturing, timelines), and iterate quickly with
            high‑fidelity prototypes.
          </p>
        </div>
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Available for</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            End-to-end product design across hardware + software, UX/UI for
            connected devices, and production-ready industrial design.
          </p>
        </div>
      </section>
    </div>
  );
}

function DisciplineCard({
  title,
  subtitle,
  href,
  imageSrc,
  imageAlt,
  imageClass,
}: (typeof disciplines)[number]) {
  return (
    <Link
      href={href}
      className="group relative grid min-h-[30rem] grid-rows-[2fr_1fr] overflow-hidden rounded-dvy border border-solid border-white/15 bg-white/[0.03] transition hover:bg-white/[0.06] sm:min-h-[34rem]"
    >
      <div className="relative min-h-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`${imageClass} transition duration-300 group-hover:scale-[1.03]`}
        />
      </div>
      <div className="flex flex-col justify-center px-5 py-5 sm:px-6">
        <div className="text-2xl font-semibold tracking-tight text-fg">
          {title}
        </div>
        <div className="mt-1.5 text-sm text-muted sm:text-base">{subtitle}</div>
        <div className="mt-4 text-sm text-fg/90 sm:text-base">
          Explore{" "}
          <span className="inline-block transition group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15"
      />
    </Link>
  );
}
