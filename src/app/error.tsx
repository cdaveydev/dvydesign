"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-6">
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        Something went wrong
      </h1>
      <p className="max-w-2xl text-muted sm:text-lg">
        This page hit an error while loading. You can try again or head back to
        the home page.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
        >
          <span aria-hidden>←</span>
          Home
        </Link>
      </div>
    </div>
  );
}
