import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="dvy-card p-6 sm:p-10">
      <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        Resume
      </h1>
      <p className="mt-3 max-w-2xl text-muted sm:text-lg">
        View the latest resume here.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={SITE.links.resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-fg px-4 py-2 text-sm text-bg hover:bg-fg/90"
        >
          Open resume →
        </a>
        <a
          href={SITE.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          LinkedIn →
        </a>
        <a
          href={`mailto:${SITE.links.email}?subject=DVYDesign%20Resume`}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          Email me for PDF →
        </a>
      </div>
    </div>
  );
}

