"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/assets/iv-medtag-hero.jpg",
    alt: "IV MedTag infusion device on a hospital pole",
    objectClass: "object-cover object-center",
  },
  {
    src: "/assets/MedTechDeviceOnNeckl.png",
    alt: "Med-Tech neck-worn monitor",
    objectClass: "object-cover object-center",
  },
  {
    src: "/assets/hido_health.png",
    alt: "HiDO Health patient app and clinician dashboard",
    objectClass: "object-cover object-top",
  },
  {
    src: "/assets/Circle_Light_room.jpg",
    alt: "Circle Light installed in a living space",
    objectClass: "object-cover object-top",
  },
  {
    src: "/assets/BekonixMonitor.jpg",
    alt: "Bekonix connected-product designer on a desktop display",
    objectClass: "object-cover object-center",
  },
  {
    src: "/assets/Fort_Rock_Cans_on_blue.png",
    alt: "Fort Rock Brewing cans on a blue background",
    objectClass: "object-cover object-center",
  },
] as const;

const INTERVAL_MS = 5500;

export function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback((next: number) => {
    const count = SLIDES.length;
    setIndex(((next % count) + count) % count);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(
      () => goTo(index + 1),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [goTo, index, paused, reduceMotion]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured work"
      className="relative h-[min(72vh,38rem)] min-h-[22rem] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={[
            "absolute inset-0 transition-opacity duration-700 ease-out",
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={slide.objectClass}
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <h1 className="max-w-5xl text-balance text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl">
          Shaped by Design
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center sm:bottom-8">
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Banner slides"
        >
          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-label={`Show slide ${i + 1}`}
                aria-selected={active}
                onClick={() => goTo(i)}
                className={[
                  "h-3 rounded-full transition-[width,background-color] duration-300 ease-out",
                  active
                    ? "w-11 bg-[#7B82F6]"
                    : "w-3 bg-white/40 hover:bg-white/60",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
