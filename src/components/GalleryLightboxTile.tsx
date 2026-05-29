"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

export type GalleryLightboxTileProps = {
  /** Image URL, or poster image when `videoSrc` is set */
  src: string;
  alt: string;
  sizes: string;
  imageClassName?: string;
  tileClassName?: string;
  overlay?: ReactNode;
  /** When set, tile plays muted video and lightbox opens a larger version with controls */
  videoSrc?: string;
  /** Optional poster overrides `src` for the video `poster` attribute */
  posterSrc?: string;
};

const defaultTileClass =
  "relative aspect-[4/3] overflow-hidden rounded-dvy border border-white/10 bg-black/20";

export function GalleryLightboxTile({
  src,
  alt,
  sizes,
  imageClassName = "object-cover object-center",
  tileClassName = defaultTileClass,
  overlay,
  videoSrc,
  posterSrc,
}: GalleryLightboxTileProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const modal =
    open && mounted ? (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-6"
        role="presentation"
        onClick={close}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded ${videoSrc ? "video" : "image"}: ${alt}`}
          className="flex max-h-[min(92vh,calc(80vh+3.5rem))] w-full max-w-[min(96vw,1400px)] flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex shrink-0 justify-end pb-2">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-lg leading-none text-fg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              aria-label="Close"
            >
              <span aria-hidden className="-mt-0.5 text-2xl font-light">
                ×
              </span>
            </button>
          </div>
          <div className="relative flex h-[80vh] max-h-[80vh] w-full min-w-0 items-center justify-center overflow-hidden rounded-dvy border border-white/15 bg-black/40">
            {videoSrc ? (
              <video
                src={videoSrc}
                poster={posterSrc ?? src}
                controls
                playsInline
                className="max-h-full max-w-full object-contain"
                autoPlay
              />
            ) : (
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1400px) 96vw, 1400px"
                className="object-contain"
                priority
              />
            )}
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group block w-full cursor-zoom-in rounded-dvy p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 ${tileClassName}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={videoSrc ? alt : undefined}
      >
        <span className="absolute inset-0">
          {videoSrc ? (
            <video
              src={videoSrc}
              poster={posterSrc ?? src}
              muted
              playsInline
              loop
              autoPlay
              className={`absolute inset-0 h-full w-full ${imageClassName}`}
              aria-hidden
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className={imageClassName}
            />
          )}
          {overlay}
        </span>
      </button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
