export const PROFILE = {
  name: "Chris Davey",
  headline:
    "Product Designer · 3D Visualization · Brand Systems",
  glance:
    "Product, industrial, and visual designer with two decades shipping connected hardware, software, and brand systems.",
  focus: "Product Designer, 3D Visualization, Brand Systems",
  resumeTagline: "Product Designer · 3D Visualization · Brand Systems",
  phone: "(916) 205-6733",
  summary:
    "Product, industrial, and visual designer with two decades shipping connected hardware, software, and brand systems—from concept through production, alongside engineering, marketing, and sales.",
} as const;

export const IMPACT = [
  { kpi: "Two decades", label: "shipping connected hardware, software, and brand systems" },
  {
    kpi: "50%",
    label: "faster concept-to-development via high-fidelity prototyping",
  },
  { kpi: "100,000+", label: "users in 22 languages" },
] as const;

export const EXPERIENCE = [
  {
    company: "Bekonix",
    title: "Chief Design Officer",
    dates: "June 2021 – Present",
    summary: "Connected hardware products and cross-platform software tools.",
    bullets: [
      "Own industrial design, product visualization, and brand systems through production.",
      "Model in SolidWorks and Fusion 360; produce stills, decks, and assets for web, print, and packaging.",
      "Lead Bekonix and client programs, including on-site work for Luxer One / Harbor.",
      "Use Figma, Adobe, and AI tools (Cursor, Claude, ChatGPT) to ship files without extra handoffs.",
    ],
  },
  {
    company: "HiDO Health",
    title: "Head of Design (Contract)",
    summary:
      "Connected medical platform for medication-dispensing hardware and companion software.",
    bullets: [
      "Designed hardware visuals and Figma mockups for apps, touchscreens, and dashboards (HTML, JS).",
      "Delivered production files to engineering; managed App Store and Google Play submissions.",
    ],
  },
  {
    company: "RocketLife",
    title: "Senior Product Designer",
    dates: "2012 – 2019",
    summary: "Hardware + SaaS platform for digital product creation and ecommerce.",
    bullets: [
      "Led UX/UI and visual design for tools used with HP, Kodak, LG, and Samsung.",
      "Cut concept-to-development time 50% for a platform serving 100,000+ users in 22 languages.",
    ],
  },
  {
    company: "DVY Design",
    title: "Freelance Product, Brand & Marketing Designer",
    dates: "Ongoing",
    summary: "Brand, packaging, and marketing design for regional companies.",
    bullets: [
      "Identities, sites, and campaigns for 50+ businesses; 30+ beverage-can labels and supporting assets.",
    ],
  },
] as const;

export const TOOLKIT = [
  "SolidWorks, Autodesk Fusion 360, Blender, 3D printing, CNC, injection molding, metal fab.",
  "Illustrator, Photoshop, InDesign, Figma — web, print, decks, packaging, merch",
  "Cursor, Webflow, HTML/CSS, Notion, Jira, Asana, Slack",
] as const;

export const TOOLKIT_GROUPS = [
  {
    label: "3D / CAD",
    items:
      "SolidWorks, Autodesk Fusion 360, Blender, 3D printing, CNC, injection molding, metal fab.",
  },
  {
    label: "Visual / Brand",
    items: "Illustrator, Photoshop, InDesign, Figma — web, print, decks, packaging, merch",
  },
  {
    label: "Workflow",
    items: "Cursor, Webflow, HTML/CSS, Notion, Jira, Asana, Slack",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Clarity first",
    body: "Reduce cognitive load and make complex systems intuitive.",
  },
  {
    title: "Design for reality",
    body: "Engineering, manufacturing, and timelines.",
  },
  {
    title: "Form serves function",
    body: "Aesthetics reinforce usability and ergonomics.",
  },
  {
    title: "Iterate toward truth",
    body: "Prototypes + feedback to refine quickly.",
  },
] as const;

export const EDUCATION = [
  { credential: "B.S. Industrial Design", school: "Arizona State University" },
  {
    credential: "UX Research & Prototyping",
    school: "UC San Diego",
  },
  {
    credential: "Advanced Graphic Design Certificate",
    school: "American River College",
  },
  { credential: "A.A.", school: "Sierra College" },
] as const;
