export type CaseStudySlug =
  | "hido-health"
  | "bekonix"
  | "woomph"
  | "fort-rock-brewing"
  | "shannon-family-automotive";

export type CaseStudySection =
  | { kind: "text"; title: string; body: string }
  | { kind: "bullets"; title: string; items: string[] }
  | {
      kind: "figma-prototype";
      title: string;
      description?: string;
      embedUrl: string;
      /** iframe width in px (default 400). */
      width?: number;
      /** iframe height in px (default 800). */
      height?: number;
      /** Visible wrapper height; crops Figma letterboxing when smaller than height. */
      frameHeight?: number;
      /** Negative Y offset (px) to center the device inside the crop. */
      frameOffsetY?: number;
    }
  | {
      kind: "web-prototype";
      title: string;
      description?: string;
      embedUrl: string;
      /** Tailwind aspect ratio class suffix, e.g. "3200/2400" (default 4/3). */
      aspectRatio?: string;
      /** iframe min height in px when using fixed height instead of aspect ratio. */
      height?: number;
    }
  | {
      kind: "gallery";
      title: string;
      /** Short intro under the title (e.g. separate copy per gallery when mixing formats). */
      description?: string;
      /** Outer grid; defaults by image count when omitted. */
      gridClass?: string;
      /** Tile aspect + width (default aspect-[4/3], full width of cell). */
      tileClass?: string;
      /** Passed to next/image `sizes` (default suits two-column grids). */
      imageSizes?: string;
      images: Array<{
        src?: string;
        alt: string;
        /** Tailwind object-* classes for cropping wide composites (e.g. object-left). */
        objectClass?: string;
        /** Muted looping video in the tile; `src` is the poster. */
        videoSrc?: string;
        /** Empty slot for visuals that are not ready yet. */
        placeholder?: boolean;
      }>;
    }
  | {
      kind: "carousel";
      title: string;
      description?: string;
      pdfHref?: string;
      slides: Array<{ src: string; alt: string }>;
    };

export type CaseStudy = {
  slug: CaseStudySlug;
  title: string;
  summary: string;
  heroImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  overview?: {
    role?: string;
    timeline?: string;
    platforms?: string;
  };
  /** Second pill next to “Case study” on the detail page. */
  discipline?: string;
  /** Override default “Back to UX/UI” link. */
  backLink?: { href: string; label: string };
  sections: CaseStudySection[];
};

export const CASE_STUDIES: Record<CaseStudySlug, CaseStudy> = {
  "hido-health": {
    slug: "hido-health",
    title: "HiDO Health",
    summary:
      "Mobile apps and web-based dashboards for cognitive care patients.",
    heroImage: {
      src: "/assets/hido_health.png",
      alt: "HiDO Health product UX/UI",
    },
    overview: {
      platforms: "Mobile + web dashboard",
    },
    sections: [
      {
        kind: "text",
        title: "Overview",
        body: "HiDO Health connects patients, caregivers, and clinicians through mobile apps and web dashboards—focused on clarity, safety, and calm interaction for cognitive care.",
      },
      {
        kind: "bullets",
        title: "Main Tasks",
        items: [
          "Lead UX/UI for companion apps and web dashboards.",
          "Define user flows, information architecture, and interaction patterns.",
          "Build high-fidelity prototypes for usability validation and engineering.",
          "Support App Store and Play Store submission-ready UI and documentation.",
        ],
      },
      {
        kind: "bullets",
        title: "Accomplishments",
        items: [
          "Shipped production-ready interfaces aligned with clinical and caregiver workflows.",
          "Reduced ambiguity for engineering through annotated specs and component-level thinking.",
          "Improved consistency across mobile and web surfaces.",
        ],
      },
      {
        kind: "bullets",
        title: "Tools Used",
        items: [
          "Figma",
          "Sketch / UXPin (as needed)",
          "Design handoff + collaboration (Slack, Jira)",
        ],
      },
      {
        kind: "figma-prototype",
        title: "Patient app prototype",
        description:
          "Tap through medication schedules, progress, and day-to-day patient flows.",
        embedUrl:
          "https://embed.figma.com/proto/GMLuIkxq49ID6zUcWVJZ3B/HiDO---App?page-id=2696%3A5144&node-id=3841-10707&viewport=498%2C47%2C0.49&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2696%3A5145&hide-proto-sidebar=1&footer=false&embed-host=share",
        width: 360,
        height: 800,
        frameHeight: 640,
        frameOffsetY: -80,
      },
      {
        kind: "gallery",
        title: "Patient app (iOS)",
        description:
          "Portrait flows for medication schedules, progress, and day-to-day patient tasks.",
        gridClass:
          "mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3",
        tileClass:
          "relative mx-auto aspect-[1242/2688] w-full max-w-[min(100%,280px)] overflow-hidden rounded-dvy border border-white/10 bg-black/20",
        imageSizes: "(max-width: 640px) 50vw, 33vw",
        images: [
          {
            src: "/assets/iOS_Patient_Style1_Slide_01.png",
            alt: "HiDO Health iOS patient app — slide 1 of 6",
          },
          {
            src: "/assets/iOS_Patient_Style1_Slide_02.png",
            alt: "HiDO Health iOS patient app — slide 2 of 6",
          },
          {
            src: "/assets/iOS_Patient_Style1_Slide_03.png",
            alt: "HiDO Health iOS patient app — slide 3 of 6",
          },
          {
            src: "/assets/iOS_Patient_Style1_Slide_04.png",
            alt: "HiDO Health iOS patient app — slide 4 of 6",
          },
          {
            src: "/assets/iOS_Patient_Style1_Slide_05.png",
            alt: "HiDO Health iOS patient app — slide 5 of 6",
          },
          {
            src: "/assets/iOS_Patient_Style1_Slide_06.png",
            alt: "HiDO Health iOS patient app — slide 6 of 6",
          },
        ],
      },
      {
        kind: "web-prototype",
        title: "Medication study dashboard prototype",
        description:
          "Built with Cursor — explore study overview, patient analysis, roster, and detail views.",
        embedUrl: "https://hido-medication-dashboard.vercel.app/",
        aspectRatio: "3200/2400",
      },
      {
        kind: "gallery",
        title: "Medication study dashboard (web)",
        description:
          "4:3 (3200×2400) views for study teams: overview, analysis, roster, patient detail, appointments, and account.",
        gridClass: "mt-6 grid gap-5 sm:grid-cols-2",
        tileClass:
          "relative aspect-[3200/2400] w-full overflow-hidden rounded-dvy border border-white/10 bg-black/20",
        imageSizes: "(max-width: 640px) 100vw, 50vw",
        images: [
          {
            src: "/assets/hido-medication-dashboard_Overview.png",
            alt: "HiDO web dashboard — study overview with adherence and dose timing",
          },
          {
            src: "/assets/hido-medication-dashboard_Analysis.png",
            alt: "HiDO web dashboard — patient analysis",
          },
          {
            src: "/assets/hido-medication-dashboard_patients.png",
            alt: "HiDO web dashboard — patients list",
          },
          {
            src: "/assets/hido-medication-dashboard_PatientDetails.png",
            alt: "HiDO web dashboard — patient details",
          },
          {
            src: "/assets/hido-medication-dashboard_appointments.png",
            alt: "HiDO web dashboard — appointments",
          },
          {
            src: "/assets/hido-medication-dashboard_account.png",
            alt: "HiDO web dashboard — account",
          },
        ],
      },
    ],
  },
  "fort-rock-brewing": {
    slug: "fort-rock-brewing",
    title: "Fort Rock Brewing Company",
    summary:
      "Brand identity, packaging art, and shelf-ready visuals for a Pacific Northwest craft brewery.",
    heroImage: {
      src: "/assets/fort_rock_brewing.png",
      alt: "Fort Rock Brewing brand composition",
      width: 1920,
      height: 1021,
    },
    overview: {
      platforms: "Brand, packaging & print",
    },
    discipline: "Branding",
    backLink: { href: "/branding", label: "Back to Branding" },
    sections: [
      {
        kind: "text",
        title: "Overview",
        body: "Fort Rock Brewing needed a cohesive look across cans, cases, and campaign imagery—bold enough for cold-box retail, still grounded in craft authenticity. Work spanned illustration-forward packaging, color systems, and composited brand scenes for web and social.",
      },
      {
        kind: "bullets",
        title: "Main Tasks",
        items: [
          "Develop packaging concepts and final can art for seasonal and core lineup releases.",
          "Establish palette, typography, and graphic motifs that extend across touchpoints.",
          "Produce high-resolution print-ready assets and retouched brand compositions.",
          "Collaborate with production on proofs, finishes, and color consistency on press.",
        ],
      },
      {
        kind: "bullets",
        title: "Accomplishments",
        items: [
          "Delivered shelf-forward packaging that reads clearly at distance and in low light.",
          "Unified illustration style and logo lockups across multiple SKUs.",
          "Supported faster stakeholder sign-off with clear mockups and print specifications.",
        ],
      },
      {
        kind: "bullets",
        title: "Tools Used",
        items: [
          "Adobe Illustrator & Photoshop",
          "Figma (layouts & handoff where applicable)",
          "Color-managed print workflows (PDF/X, spot + process)",
        ],
      },
      {
        kind: "gallery",
        title: "Selected visuals",
        description:
          "Website mockup, print collateral (business cards), promo poster art, and tap handle graphics for retail, web, and marketing.",
        gridClass: "mt-6 grid gap-5 sm:grid-cols-2",
        imageSizes: "(max-width: 640px) 100vw, 50vw",
        images: [
          {
            src: "/assets/FokRock_Website_Mockup.png",
            alt: "Fort Rock Brewing — website mockup",
          },
          {
            src: "/assets/Fort_Rock_Business_Cards.png",
            alt: "Fort Rock Brewing — business cards",
          },
          {
            src: "/assets/Fort_Rock_Promo_Poster_PaleAle.png",
            alt: "Fort Rock Brewing — Pale Ale promo poster",
          },
          {
            src: "/assets/TapHandles.png",
            alt: "Fort Rock Brewing — tap handles",
          },
        ],
      },
    ],
  },
  "shannon-family-automotive": {
    slug: "shannon-family-automotive",
    title: "Shannon Family Automotive",
    summary:
      "Identity and environmental graphics for a family automotive shop—signage that reads at speed and after dark.",
    heroImage: {
      src: "/assets/Shannon Store Fron Singage.jpg",
      alt: "Shannon Family Automotive storefront script signage at night",
      width: 1920,
      height: 1200,
    },
    overview: {
      platforms: "Brand, environmental & merch",
    },
    discipline: "Branding",
    backLink: { href: "/branding", label: "Back to Branding" },
    sections: [
      {
        kind: "text",
        title: "Overview",
        body: "Shannon Family Automotive needed a mark and system that holds up on a shop facade, a bay door, and staff gear. The identity had to read from the street, stay clean in embroidery, and feel like a family-run shop rather than a generic service chain.",
      },
      {
        kind: "bullets",
        title: "Main Tasks",
        items: [
          "Develop the script lockup, gear mark, and type hierarchy for building and apparel.",
          "Design environmental graphics for the facade, entry glass, and color-blocked bay door.",
          "Extend the system across hats, jackets, shirts, totes, and drinkware.",
          "Prepare production files for signage, embroidery, and print decoration.",
        ],
      },
      {
        kind: "bullets",
        title: "Accomplishments",
        items: [
          "Delivered a lockup that reads at distance in daylight and as illuminated signage after dark.",
          "Unified building graphics and merch so the shop and staff wear the same identity.",
          "Built repeatable art files for embroidery, vinyl, and print across multiple SKUs.",
        ],
      },
      {
        kind: "bullets",
        title: "Tools Used",
        items: [
          "Adobe Illustrator & Photoshop",
          "Environmental graphic and signage production",
          "Embroidery and apparel decoration files",
        ],
      },
      {
        kind: "carousel",
        title: "Brand guidelines",
        description:
          "Logo, type, color, and application pages from the Shannon Family Automotive brand guide.",
        pdfHref: "/assets/Shannon_Family_Automotive_Brand_Guidelines.pdf",
        slides: [
          {
            src: "/assets/shannon-brand-guide/page-01.jpg",
            alt: "Shannon Family Automotive brand guidelines cover with the official lockup",
          },
          {
            src: "/assets/shannon-brand-guide/page-02.jpg",
            alt: "How to use this guide — contents of the Shannon brand system",
          },
          {
            src: "/assets/shannon-brand-guide/page-03.jpg",
            alt: "The mark — lockup, wordmark, descriptor, and gear symbol rules",
          },
          {
            src: "/assets/shannon-brand-guide/page-04.jpg",
            alt: "Logo color — four approved finishes",
          },
          {
            src: "/assets/shannon-brand-guide/page-05.jpg",
            alt: "Type system — Cocktail Shaker script and Quicksand",
          },
          {
            src: "/assets/shannon-brand-guide/page-06.jpg",
            alt: "Color system — Navy, Steel, Graphite, Ink, and Amber",
          },
          {
            src: "/assets/shannon-brand-guide/page-07.jpg",
            alt: "Technical specifications — HEX, RGB, CMYK, and Pantone values",
          },
          {
            src: "/assets/shannon-brand-guide/page-08.jpg",
            alt: "Business cards corrected to the brand system",
          },
          {
            src: "/assets/shannon-brand-guide/page-09.jpg",
            alt: "Uniforms — hat, chest, and sleeve embroidery rules",
          },
          {
            src: "/assets/shannon-brand-guide/page-10.jpg",
            alt: "Corrections — previous vs approved brand applications",
          },
          {
            src: "/assets/shannon-brand-guide/page-11.jpg",
            alt: "Production notes for cards, shirts, and hats",
          },
        ],
      },
      {
        kind: "gallery",
        title: "Selected visuals",
        description:
          "Building applications, merch, and apparel.",
        gridClass: "mt-6 grid gap-5 sm:grid-cols-2",
        imageSizes: "(max-width: 640px) 100vw, 50vw",
        images: [
          {
            src: "/assets/ShannonSHopFront.png",
            alt: "Shannon Family Automotive shop front with facade lettering and branded bay door",
          },
          {
            src: "/assets/Shannon_Hat@3x.png",
            alt: "Navy and white trucker hat with embroidered Shannon Family Automotive mark",
          },
          {
            src: "/assets/Work Jacket.jpg",
            alt: "Tan work jacket with Shannon Family Automotive embroidery on the chest and back",
          },
          {
            src: "/assets/Jacket and Insulated Cups.jpg",
            alt: "Navy vest with matching insulated bottle and travel cup",
          },
          {
            src: "/assets/Shirts_totes_Hats_cups.jpg",
            alt: "Shannon merch set with hats, shirts, tote, mug, and bottle",
          },
          {
            src: "/assets/Shirts_totes_Hats_cups.jpg",
            videoSrc: "/assets/Shirt-video.mp4",
            alt: "Shannon Family Automotive shirt animation",
          },
        ],
      },
    ],
  },
  bekonix: {
    slug: "bekonix",
    title: "Bekonix, Inc.",
    summary: "SaaS platform for creating smart-connected products.",
    heroImage: {
      src: "/assets/BekonixMonitor.jpg",
      alt: "Bekonix monitor UX/UI",
    },
    overview: {
      platforms: "Web platform",
    },
    sections: [
      {
        kind: "text",
        title: "Overview",
        body: "Bekonix is a SaaS platform for creating smart-connected products—from initial setup through monitoring and ongoing management. The experience needed to stay approachable for new users while scaling to dense device, fleet, and analytics workflows.",
      },
      {
        kind: "bullets",
        title: "Main Tasks",
        items: [
          "Lead UX/UI for core platform flows across onboarding, device management, and monitoring.",
          "Define user flows, information architecture, and interaction patterns for multi-surface IoT data.",
          "Build high-fidelity prototypes and a component-oriented UI system for engineering alignment.",
          "Produce annotated specs, edge-case notes, and design QA support through release.",
        ],
      },
      {
        kind: "bullets",
        title: "Accomplishments",
        items: [
          "Shipped production-ready interfaces tuned for setup-to-operations workflows.",
          "Reduced ambiguity for engineering through system-level thinking and reusable patterns.",
          "Improved consistency across dashboards, configuration, and status-heavy views.",
        ],
      },
      {
        kind: "bullets",
        title: "Tools Used",
        items: [
          "Figma",
          "Sketch / UXPin (as needed)",
          "Design handoff + collaboration (Slack, Jira)",
        ],
      },
    ],
  },
  woomph: {
    slug: "woomph",
    title: "Woomph",
    summary:
      "Mobile app that enables users to order replacement propane tanks, or purchase new ones. Tanks are delivered and picked up at the user’s location.",
    heroImage: {
      src: "/assets/woomph-cover.png",
      alt: "Woomph use-flow study with overlapping iPhone screens from the propane exchange app.",
      width: 1920,
      height: 1433,
    },
    overview: {
      platforms: "iOS app + marketing site",
    },
    sections: [
      {
        kind: "text",
        title: "Overview",
        body: "Woomph takes the pain out of propane exchange. Instead of loading a tank into the car and waiting in line, users order a replacement or a new tank from their phone. Delivery and pickup happen at their location, with the app handling cart, account, and payment.",
      },
      {
        kind: "bullets",
        title: "Main Tasks",
        items: [
          "Rapid, low-fidelity mock-ups guiding a user through replacing or purchasing a propane tank.",
          "In-flow upsells such as “Need an Extra Tank?”",
          "Camera integration so the user can photograph the tank’s location for pickup.",
          "Account creation, address verification, and payment with credit card, Apple Pay, or PayPal.",
        ],
      },
      {
        kind: "bullets",
        title: "Accomplishments",
        items: [
          "Wireframed and usability-tested the full exchange and purchase journey.",
          "Conducted user interviews to shape pickup, delivery, and account flows.",
          "Designed the mobile interface, brand identity, and marketing website.",
          "Built a design system for the app and prepared store submissions.",
        ],
      },
      {
        kind: "bullets",
        title: "Tools Used",
        items: [
          "Adobe Illustrator",
          "Adobe XD, Figma",
          "Webflow, Outseta",
        ],
      },
      {
        kind: "figma-prototype",
        title: "Interactive prototype",
        description:
          "Tap through the Adobe XD prototype to walk the exchange, purchase, and payment flows.",
        embedUrl:
          "https://xd.adobe.com/embed/d8e2a87f-b1f8-46d5-5b38-a6b16a0f569e-aed3/?fullscreen",
        width: 360,
        height: 812,
        frameHeight: 640,
      },
      {
        kind: "gallery",
        title: "User flow",
        description:
          "The end-to-end map covering tank selection, delivery, pickup photography, and checkout.",
        gridClass: "mt-6 grid grid-cols-1 gap-3",
        tileClass:
          "relative aspect-[3840/2501] w-full overflow-hidden rounded-dvy border border-white/10 bg-black/20",
        imageSizes: "(max-width: 1024px) 100vw, min(80vw, 1152px)",
        images: [
          {
            src: "/assets/woomph-flow.png",
            alt: "Woomph user-flow diagram mapping tank exchange, purchase, delivery, and payment.",
          },
        ],
      },
      {
        kind: "gallery",
        title: "App screens",
        description:
          "Key frames from the mobile experience, from first choice through pickup and payment.",
        gridClass: "mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3",
        tileClass:
          "relative mx-auto aspect-[1242/2688] w-full max-w-[min(100%,280px)] overflow-hidden rounded-dvy border border-white/10 bg-black/20",
        imageSizes: "(max-width: 640px) 50vw, 33vw",
        images: [
          {
            src: "/assets/woomph-splash.png",
            alt: "Woomph splash screen with the app logo on a dark background.",
          },
          {
            src: "/assets/woomph-choose.png",
            alt: "Choose how to get started: exchange a tank or buy a new tank.",
          },
          {
            src: "/assets/woomph-plans.png",
            alt: "Pay-as-you-go versus subscription plans for propane delivery.",
          },
          {
            src: "/assets/woomph-cart.png",
            alt: "Cart screen with a 20-pound tank, extra-tank upsell, and checkout total.",
          },
          {
            src: "/assets/woomph-pickup.png",
            alt: "Leave for pick-up screen prompting the user to photograph the tank location.",
          },
          {
            src: "/assets/woomph-payment.png",
            alt: "Payment screen with credit card, Apple Pay, and PayPal options.",
          },
        ],
      },
      {
        kind: "gallery",
        title: "Account",
        gridClass: "mt-6 mx-auto grid max-w-xl grid-cols-2 gap-4",
        tileClass:
          "relative mx-auto aspect-[1242/2688] w-full max-w-[min(100%,280px)] overflow-hidden rounded-dvy border border-white/10 bg-black/20",
        imageSizes: "(max-width: 640px) 50vw, 25vw",
        images: [
          {
            src: "/assets/woomph-create-account.png",
            alt: "Create account screen with name, email, password, and address fields.",
          },
          {
            src: "/assets/woomph-account.png",
            alt: "Signed-in account screen with profile details and saved payment methods.",
          },
        ],
      },
      {
        kind: "gallery",
        title: "Marketing site",
        description:
          "The companion website that introduces the service and points people to the app.",
        gridClass: "mt-6 grid grid-cols-1 gap-3",
        tileClass:
          "relative aspect-[16/9] w-full overflow-hidden rounded-dvy border border-white/10 bg-black/20",
        imageSizes: "(max-width: 1024px) 100vw, min(80vw, 1152px)",
        images: [
          {
            src: "/assets/woomph-website.png",
            alt: "Woomph marketing site hero with a grill, propane tank, and Exchange Your Tank headline.",
          },
        ],
      },
    ],
  },
};
