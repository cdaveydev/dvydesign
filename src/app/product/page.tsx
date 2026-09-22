import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "UX/UI",
};

export default function ProductPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <Breadcrumbs current="UX/UI" />
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
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <CaseStudyCard
            title="Woomph"
            body="Mobile app for ordering replacement or new propane tanks, delivered and picked up at the user’s location."
            imageSrc="/assets/woomph-devices.png"
            imageAlt="Woomph propane exchange app on overlapping iPhones"
            href="/case-studies/woomph"
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

