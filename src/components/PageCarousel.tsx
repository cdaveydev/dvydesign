"use client";

import Image from "next/image";
import {
  useCallback,
  useRef,
  useState,
  type PointerEvent,
} from "react";

export type PageCarouselSlide = {
  src: string;
  alt: string;
};

const SWIPE_THRESHOLD_PX = 40;

export function PageCarousel({
  label,
  slides,
  pdfHref,
}: {
  label: string;
  slides: readonly PageCarouselSlide[];
  pdfHref?: string;
}) {
  const [index, setIndex] = useState(0);
  const pointerStart = useRef<{
    x: number;
    y: number;
    id: number;
  } | null>(null);

  const goTo = useCallback(
    (next: number) => {
      const count = slides.length;
      setIndex(((next % count) + count) % count);
    },
    [slides.length],
  );

  const onPointerDown = useCallback((event: PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("button, a")) return;
    pointerStart.current = {
      x: event.clientX,
      y: event.clientY,
      id: event.pointerId,
    };
  }, []);

  const endPointer = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      const start = pointerStart.current;
      pointerStart.current = null;
      if (!start || start.id !== event.pointerId) return;

      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) <= Math.abs(dy)) {
        return;
      }
      goTo(index + (dx < 0 ? 1 : -1));
    },
    [goTo, index],
  );

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className="mt-6"
    >
      <div
        className="relative touch-pan-y overflow-hidden rounded-dvy border border-white/10 bg-black/30"
        onPointerDown={onPointerDown}
        onPointerUp={endPointer}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
      >
        <div className="relative aspect-[16/9] w-full">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={[
                "absolute inset-0 transition-opacity duration-500 ease-out",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, min(80vw, 1152px)"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-fg hover:bg-black/65 sm:left-3"
          aria-label="Previous page"
        >
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-fg hover:bg-black/65 sm:right-3"
          aria-label="Next page"
        >
          <span aria-hidden>→</span>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-muted">
          Page {index + 1} of {slides.length}
        </div>
        {pdfHref ? (
          <a
            href={pdfHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-fg/90 hover:bg-white/8"
          >
            Open PDF →
          </a>
        ) : null}
      </div>

      <div
        className="mt-3 flex flex-wrap items-center justify-center gap-1.5"
        role="tablist"
        aria-label={`${label} pages`}
      >
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-label={`Show page ${i + 1}`}
              aria-selected={active}
              onClick={() => goTo(i)}
              className={[
                "h-2.5 rounded-full transition-[width,background-color] duration-300 ease-out",
                active
                  ? "w-8 bg-[#7B82F6]"
                  : "w-2.5 bg-white/35 hover:bg-white/55",
              ].join(" ")}
            />
          );
        })}
      </div>
    </section>
  );
}
