import Link from "next/link";
import { LinkButton } from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="dvy-card overflow-hidden p-6 sm:p-10">
        <div className="space-y-6">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
            Designing connected hardware and software—beautifully.
          </h1>
          <p className="max-w-2xl text-pretty text-base text-muted sm:text-lg">
            Chris Davey is a Product (UX/UI), Industrial, and Branding designer.
            With leadership experience—shipping dozens of connected hardware and
            software products across medical and consumer SaaS, from high‑fidelity
            prototyping through production.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="/product" variant="primary">
              Explore featured work
            </LinkButton>
            <LinkButton href="/industrial" variant="secondary">
              Industrial work
            </LinkButton>
            <LinkButton href="/about" variant="secondary">
              About + Contact
            </LinkButton>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <DisciplineCard
            icon={<IconSpark />}
            title="Product (UX/UI)"
            subtitle="Systems, flows, interaction polish"
            href="/product"
          />
          <DisciplineCard
            icon={<IconCube />}
            title="Industrial Design"
            subtitle="Form, function, manufacturability"
            href="/industrial"
          />
          <DisciplineCard
            icon={<IconMark />}
            title="Branding / Graphic"
            subtitle="Identity, typography, story"
            href="/branding"
          />
        </div>
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
  icon,
  title,
  subtitle,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-dvy border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
    >
      <div className="flex items-start gap-3">
        <div className="dvy-icon3d mt-0.5 text-fg/90">{icon}</div>
        <div>
          <div className="text-base font-semibold text-fg">{title}</div>
          <div className="mt-1 text-sm text-muted">{subtitle}</div>
        </div>
      </div>
      <div className="mt-4 text-sm text-fg/90">
        Explore <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}

function IconCube() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2.75 20.5 7.75v8.5L12 21.25 3.5 16.25v-8.5L12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M12 21.25v-9.5M20.5 7.75 12 11.75 3.5 7.75"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2.5 14.3 9.7 21.5 12l-7.2 2.3L12 21.5l-2.3-7.2L2.5 12l7.2-2.3L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 5.8l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6.6-1.9Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 7.5h10M7 12h7M7 16.5h10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M5.25 4.75h13.5c.83 0 1.5.67 1.5 1.5v11.5c0 .83-.67 1.5-1.5 1.5H5.25c-.83 0-1.5-.67-1.5-1.5V6.25c0-.83.67-1.5 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}
