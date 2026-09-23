import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkedInLink } from "@/components/LinkedInLink";
import {
  EDUCATION,
  EXPERIENCE,
  IMPACT,
  PRINCIPLES,
  PROFILE,
  TOOLKIT_GROUPS,
} from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <Breadcrumbs current="About" />
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          {PROFILE.name}
        </h1>
        <p className="max-w-2xl text-muted sm:text-lg">{PROFILE.summary}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">At a glance</h2>
          <div className="mt-6 grid gap-2 text-sm text-muted sm:text-base">
            <div>
              <span className="text-fg/90">Based in:</span>{" "}
              {SITE.person.location}
            </div>
            <div>
              <span className="text-fg/90">Focus:</span>{" "}
              {PROFILE.resumeTagline}
            </div>
          </div>
        </div>

        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Contact</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Email is best. I typically respond within 1–2 business days.
          </p>

          <div className="mt-6 space-y-3">
            <a
              className="flex items-center justify-between rounded-dvy border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-fg/90 hover:bg-white/[0.06] sm:text-base"
              href={`mailto:${SITE.links.email}`}
            >
              <span>Email</span>
              <span className="text-muted">{SITE.links.email}</span>
            </a>
            <LinkedInLink variant="row" />
            <a
              className="flex items-center justify-between rounded-dvy border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-fg/90 hover:bg-white/[0.06] sm:text-base"
              href={SITE.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              <span>Resume</span>
              <span className="text-muted">Open PDF →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Product impact</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT.map((stat) => (
            <Stat key={stat.kpi} kpi={stat.kpi} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Experience</h2>
        <div className="mt-6 space-y-4">
          {EXPERIENCE.map((role) => (
            <Role
              key={role.company}
              company={role.company}
              title={role.title}
              dates={"dates" in role ? role.dates : undefined}
              summary={role.summary}
              bullets={[...role.bullets]}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Design toolkit</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
            {TOOLKIT_GROUPS.map((group) => (
              <li key={group.label}>
                <div className="text-fg/90">{group.label}</div>
                <div>{group.items}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Principles</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
            {PRINCIPLES.map((principle) => (
              <li key={principle.title}>
                <span className="text-fg/90">{principle.title}:</span>{" "}
                {principle.body}
              </li>
            ))}
          </ul>
        </div>
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Education</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
            {EDUCATION.map((item) => (
              <li key={`${item.credential}-${item.school}`}>
                <div className="text-fg/90">{item.credential}</div>
                <div>{item.school}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Let’s build something</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          If you share a short brief, timeline, and what “success” means, I can
          respond with a clear approach and next steps.
        </p>
      </section>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-dvy border border-white/10 bg-white/[0.03] p-5">
      <div className="text-2xl font-semibold tracking-tight text-fg">{kpi}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

function Role({
  company,
  title,
  dates,
  summary,
  bullets,
}: {
  company: string;
  title: string;
  dates?: string;
  summary?: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-dvy border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <div className="space-y-1">
          <div className="text-base font-semibold text-fg">{company}</div>
          <div className="text-sm text-muted">{title}</div>
        </div>
        {dates ? <div className="text-sm text-muted">{dates}</div> : null}
      </div>
      {summary ? (
        <p className="mt-3 text-sm italic text-muted sm:text-base">{summary}</p>
      ) : null}
      <ul className="mt-4 space-y-2 text-sm text-muted sm:text-base">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
