import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        Case study not found
      </h1>
      <p className="max-w-2xl text-muted sm:text-lg">
        This case study doesn’t exist (yet).
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/product"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          <span aria-hidden>←</span>
          Back to UX/UI
        </Link>
      </div>
    </div>
  );
}
