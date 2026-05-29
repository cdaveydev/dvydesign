import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="dvy-pill">About</span>
          <span className="dvy-pill">Contact</span>
          <span className="dvy-pill">Resume</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Chris Davey
        </h1>
        <p className="max-w-2xl text-muted sm:text-lg">
          UX/UI, Products, and Branding—connected hardware, software
          platforms, and medical products from concept to production.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">At a glance</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Designing connected hardware, software platforms, and medical
            products—from concept to production.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-muted sm:text-base">
            <div>
              <span className="text-fg/90">Based in:</span>{" "}
              {SITE.person.location}
            </div>
            <div>
              <span className="text-fg/90">Focus:</span>{" "}
              UX/UI, Products, Branding
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
            <a
              className="flex items-center justify-between rounded-dvy border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-fg/90 hover:bg-white/[0.06] sm:text-base"
              href={SITE.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span className="text-muted">Open profile →</span>
            </a>
            <a
              className="flex items-center justify-between rounded-dvy border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-fg/90 hover:bg-white/[0.06] sm:text-base"
              href={SITE.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              <span>Resume</span>
              <span className="text-muted">Open doc →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Product impact</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Stat kpi="Dozens" label="hardware + software products shipped" />
          <Stat kpi="50%" label="faster cycles via high‑fidelity prototyping" />
          <Stat kpi="100k+" label="daily users across 22 languages" />
          <Stat kpi="1,000+" label="assets driving +10% revenue" />
        </div>
      </section>

      <section className="dvy-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-fg">Experience</h2>
        <div className="mt-6 space-y-4">
          <Role
            company="Bekonix"
            title="Chief Design Officer · Founder"
            dates="Jun 2020 – Present"
            bullets={[
              "Lead product, industrial, and UX/UI design across hardware and software platforms.",
              "Support Seed and Series A fundraising through product strategy and prototypes.",
              "Manage cross-functional teams across marketing, software, and operations.",
              "Designed dozens of products from concept through CAD, prototyping, and production.",
            ]}
          />
          <Role
            company="HiDO Health"
            title="UX/UI Lead (Contract)"
            dates="Jun 2025 – Mar 2026"
            bullets={[
              "Lead UX/UI design for connected medical device interfaces and companion apps.",
              "Create high-fidelity prototypes guiding development and usability testing.",
              "Manage Apple App Store and Google Play Store submissions.",
              "Design practitioner, caregiver dashboards, and production features with engineering.",
            ]}
          />
          <Role
            company="RocketLife"
            title="Senior UX/UI Designer"
            dates="2012 – 2019"
            bullets={[
              "Led UX/UI design for consumer + enterprise hardware/SaaS product tools.",
              "Reduced concept-to-development time by 50% through high-fidelity prototyping.",
              "Collaborated with partners including HP, Kodak, LG, and Samsung.",
              "Designed onboarding systems and user communities to improve adoption.",
            ]}
          />
          <Role
            company="Rev001 / CDD"
            title="Freelancer"
            dates="Ongoing"
            bullets={[
              "Designed brand identities and marketing materials for 50+ regional businesses.",
              "Produced 30+ beverage can labels with a strong local following.",
              "Developed websites and digital marketing assets.",
            ]}
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Design toolkit</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted sm:text-base">
            <li>Figma, Sketch, UXPin, Adobe XD</li>
            <li>Illustrator, Photoshop, InDesign</li>
            <li>Webflow, WordPress, Cursor AI, HTML/CSS/JS</li>
            <li>Fusion 360, SolidWorks</li>
            <li>CNC, injection molding, 3D printing, laser cutting</li>
            <li>Notion, Slack, Smartsheets, Jira, Trello, Asana</li>
          </ul>
        </div>
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Principles</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
            <li>
              <span className="text-fg/90">Clarity first:</span> Reduce cognitive
              load and make complex systems intuitive.
            </li>
            <li>
              <span className="text-fg/90">Design for reality:</span> Engineering,
              manufacturing, and timelines.
            </li>
            <li>
              <span className="text-fg/90">Form serves function:</span> Aesthetics
              reinforce usability and ergonomics.
            </li>
            <li>
              <span className="text-fg/90">Iterate toward truth:</span> Prototypes
              + feedback to refine quickly.
            </li>
          </ul>
        </div>
        <div className="dvy-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-fg">Education</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
            <li>
              <div className="text-fg/90">B.S. — Industrial Design</div>
              <div>Arizona State University</div>
            </li>
            <li>
              <div className="text-fg/90">
                User Experience Research &amp; Prototyping Certificate
              </div>
              <div>UC San Diego</div>
            </li>
            <li>
              <div className="text-fg/90">A.A.</div>
              <div>Sierra College</div>
            </li>
            <li>
              <div className="text-fg/90">Advanced Graphic Design Certificate</div>
              <div>American River College</div>
            </li>
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
  bullets,
}: {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-dvy border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <div className="space-y-1">
          <div className="text-base font-semibold text-fg">{company}</div>
          <div className="text-sm text-muted">{title}</div>
        </div>
        <div className="text-sm text-muted">{dates}</div>
      </div>
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

