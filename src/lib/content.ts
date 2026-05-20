export const site = {
  name: "Arush Bansal",
  domain: "arush-nerds-out",
  tagline: "Building products that ship",
  bio: "IIT Delhi alum and co-founder of Grifi. Product, engineering, and communities",
  email: "arush@grifi.in",
  links: {
    linkedin: "https://www.linkedin.com/in/arush-bansal",
    github: "https://github.com/Arush-Bansal",
    grifi: "https://www.linkedin.com/company/grifitech",
    x: "https://x.com/arush_nerds_out",
    instagram: "https://www.instagram.com/arush_nerds_out/",
    substack: "https://substack.com/@arushbansal",
    reddit: "https://www.reddit.com/user/arush_nerds_out",
  },
} as const;

export const siteUrl = `https://${site.domain}.com` as const;

export const hero = {
  badge: "Engineer · Founder",
  headlineBefore: "I build ",
  headlineHighlight: "products",
  headlineAfter: " that ship.",
  subtext:
    "I'm Arush — IIT Delhi alum, co-founder of Grifi, and ex-JLR & Floworks (YC W23). This site is my work: product, engineering, and communities — with context, not résumé fluff.",
  primaryCta: { label: "See my work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  resumeCta: { label: "View resume", href: "/resume" },
  insights: [
    {
      emoji: "🛠️",
      label: "Product",
      bgClass: "bg-white",
      labelLight: false,
    },
    {
      emoji: "⚙️",
      label: "Engineering",
      bgClass: "bg-teal",
      labelLight: true,
    },
    {
      emoji: "👥",
      label: "Community",
      bgClass: "bg-red",
      labelLight: true,
    },
    {
      emoji: "🤖",
      label: "AI",
      bgClass: "bg-yellow",
      labelLight: false,
    },
  ],
} as const;

export const about = {
  headline: "Engineer, founder, and community builder.",
  paragraphs: [
    "I'm Arush — IIT Delhi alum, co-founder of Grifi, and formerly a software engineer at Jaguar Land Rover. I've spent the last few years at the intersection of product and engineering: early team at Floworks (YC W23), leading Phoenix at IIT Delhi, and building communities where builders actually build.",
    "What keeps me going is simple: real problems, tight feedback loops, and systems that work when nobody's watching.",
  ],
  highlights: [
    { label: "B.Tech Chemical Engineering", value: "IIT Delhi" },
    { label: "Startups I've built", value: "Co-founder @ Grifi | Unipace.in" },
    { label: "Previously worked at", value: "Jaguar Land Rover | Floworks.ai (YC W23)" },
    { label: "Based in", value: "Bengaluru, India" },
  ],
} as const;

export type WorkTileFloatingPlacement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right";

export type WorkTileFloatingIcon = {
  emoji: string;
  placement: WorkTileFloatingPlacement;
  rotate: string;
  bgClass?: string;
};

export type WorkTileLogo = {
  src: string;
  alt: string;
};

export type WorkTile = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
  storyHref?: string;
  storyLabel?: string;
  category: string;
  categoryEmoji: string;
  barClass: string;
  logo?: WorkTileLogo;
  floatingIcons?: WorkTileFloatingIcon[];
};

export const workTiles: WorkTile[] = [
  {
    id: "floworks",
    title: "Floworks.ai",
    subtitle: "YC W23 · Early engineering",
    description:
      "One of four engineers who built and shipped the go-to-market MVP. Agentic automation for sales.",
    tags: ["YC", "Agents", "B2B SaaS"],
    href: "https://floworks.ai",
    hrefLabel: "floworks.ai",
    category: "Early startup engineer",
    categoryEmoji: "🚀",
    barClass: "work-bar-red",
    logo: { src: "/logos/floworks.svg", alt: "Floworks.ai (YC W23)" },
    floatingIcons: [
      { emoji: "🟧", placement: "top-right", rotate: "rotate-12", bgClass: "bg-yellow" },
      { emoji: "🤖", placement: "bottom-left", rotate: "-rotate-6", bgClass: "bg-white" },
    ],
  },
  {
    id: "phoenix",
    title: "Phoenix IITD",
    subtitle: "IIT Delhi · Product community",
    description:
      "Formed Phoenix IITD, the institute's very own product community and a two-month innovation campaign.",
    tags: ["Leadership", "Community"],
    category: "Community builder",
    categoryEmoji: "👥",
    barClass: "work-bar-purple",
    logo: { src: "/logos/phoenix.svg", alt: "Phoenix IIT Delhi" },
    floatingIcons: [
      { emoji: "🔥", placement: "top-left", rotate: "-rotate-12", bgClass: "bg-red" },
      { emoji: "🏛️", placement: "right", rotate: "rotate-6", bgClass: "bg-yellow" },
    ],
  },
  {
    id: "novagpt",
    title: "NovaGPT",
    subtitle: "AI · LLM applications",
    description:
      "Applied LLMs — custom agents, retrieval, and interfaces that make AI useful without the theatre.",
    tags: ["LLMs", "Agents", "RAG"],
    category: "Early AI engineer",
    categoryEmoji: "🤖",
    barClass: "work-bar-teal",
    logo: { src: "/logos/novagpt.svg", alt: "NovaGPT" },
    floatingIcons: [
      { emoji: "✨", placement: "top-right", rotate: "rotate-6", bgClass: "bg-teal" },
      { emoji: "💬", placement: "bottom-left", rotate: "-rotate-3", bgClass: "bg-white" },
    ],
  },
  {
    id: "creatorbox",
    title: "Creatorbox",
    subtitle: "Creator tools & experiments",
    description:
      "A sandbox for creator-focused products — tooling, workflows, and prototypes around content and UGC.",
    tags: ["Creators", "UGC"],
    category: "Product tinkerer",
    categoryEmoji: "🛠️",
    barClass: "work-bar-yellow",
    logo: { src: "/logos/creatorbox.svg", alt: "Creatorbox" },
    floatingIcons: [
      { emoji: "🎬", placement: "left", rotate: "-rotate-6", bgClass: "bg-purple" },
      { emoji: "🎨", placement: "bottom-right", rotate: "rotate-12", bgClass: "bg-yellow" },
    ],
  },
  {
    id: "jlr",
    title: "Jaguar Land Rover",
    subtitle: "Graduate Software Engineer",
    description:
      "Python behavioral simulation module modeling human driving across drive cycles.",
    tags: ["Automotive", "Python"],
    href: "https://www.linkedin.com/company/jlrindia",
    hrefLabel: "JLR India",
    category: "Graduate engineer",
    categoryEmoji: "⚙️",
    barClass: "work-bar-teal",
    logo: { src: "/logos/jlr.svg", alt: "Jaguar Land Rover" },
    floatingIcons: [
      { emoji: "🚗", placement: "top-right", rotate: "rotate-3", bgClass: "bg-teal" },
      { emoji: "🐍", placement: "bottom-left", rotate: "-rotate-12", bgClass: "bg-white" },
    ],
  },
  {
    id: "projects",
    title: "Everything else",
    subtitle: "48+ repos · side quests",
    description:
      "FeynmanAI, opportunity portals, optimizers, and the rest of the garage.",
    tags: ["Open source"],
    href: "https://github.com/Arush-Bansal",
    hrefLabel: "GitHub",
    category: "Open-source builder",
    categoryEmoji: "💻",
    barClass: "work-bar-purple",
    logo: { src: "/logos/projects.svg", alt: "GitHub projects" },
    floatingIcons: [
      { emoji: "⭐", placement: "top-left", rotate: "-rotate-6", bgClass: "bg-yellow" },
      { emoji: "🐙", placement: "bottom-right", rotate: "rotate-6", bgClass: "bg-white" },
    ],
  },
];

export const resume = {
  name: site.name,
  title: "Engineer · Co-founder",
  location: "Bengaluru, India",
  pdfUrl: "/resume.pdf",
  pdfLabel: "Open PDF",
  summary:
    "Engineer and co-founder at the intersection of product and engineering. IIT Delhi alum; early engineer at Floworks (YC W23), shipping agentic B2B sales automation. Former graduate software engineer at Jaguar Land Rover. Co-founder of Grifi. I focus on real problems, tight feedback loops, and systems that work when nobody's watching.",
  contact: [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/arush-bansal",
      href: site.links.linkedin,
    },
    { label: "GitHub", value: "github.com/Arush-Bansal", href: site.links.github },
    { label: "X", value: "@arush_nerds_out", href: site.links.x },
    {
      label: "Instagram",
      value: "@arush_nerds_out",
      href: site.links.instagram,
    },
  ],
  experience: [
    {
      company: "Grifi",
      role: "Co-founder",
      period: "Present",
      location: "Bengaluru",
      bullets: [
        "Building product and engineering at a startup focused on shipping real tools, not slide decks.",
      ],
    },
    {
      company: "Floworks.ai",
      role: "Early Engineer",
      period: "YC W23",
      location: "Bengaluru",
      bullets: [
        "One of four engineers who built and shipped the go-to-market MVP.",
        "Agentic automation for sales — B2B SaaS from zero to customers.",
      ],
    },
    {
      company: "Jaguar Land Rover",
      role: "Graduate Software Engineer",
      period: "Previously",
      location: "India",
      bullets: [
        "Python behavioral simulation module modeling human driving across drive cycles.",
      ],
    },
    {
      company: "Phoenix · IIT Delhi",
      role: "Lead",
      period: "Campus",
      location: "New Delhi",
      bullets: [
        "Led Phoenix — the institute's largest product community and a two-month innovation campaign.",
      ],
    },
  ],
  projects: [
    {
      name: "NovaGPT",
      subtitle: "AI · LLM applications",
      description:
        "Applied LLMs — custom agents, retrieval, and interfaces built for repeat use, not demo theatre.",
      tags: ["LLMs", "Agents", "RAG"],
    },
    {
      name: "SportsHub",
      subtitle: "Sports · Campus platform",
      description:
        "End-to-end platform for sports scheduling, teams, and live updates across IIT Delhi intramurals.",
      tags: ["Full-stack", "Product"],
    },
    {
      name: "Creatorbox",
      subtitle: "Creator tools & experiments",
      description:
        "Sandbox for creator-economy prototypes — workflows, UGC tooling, and content pipeline automation.",
      tags: ["Creators", "UGC"],
    },
    {
      name: "Mess-system",
      subtitle: "Campus infrastructure",
      description:
        "Mess ordering and operations stack for IIT Delhi hostels — payments, menus, and kitchen workflows.",
      tags: ["Scale", "Full-stack"],
    },
    {
      name: "FeynmanAI",
      subtitle: "EdTech · AI tutoring",
      description:
        "Teaching assistant using LLMs to explain concepts step-by-step with Socratic follow-ups.",
      tags: ["EdTech", "LLMs"],
    },
    {
      name: "Unipace",
      subtitle: "Opportunity discovery",
      description:
        "Portal surfacing programs, competitions, and deadlines for students — built and shipped as a startup.",
      tags: ["Product", "B2C"],
    },
  ],
  achievements: [
    {
      title: "Mess-system at scale",
      description:
        "Scaled campus mess platform to 10k+ DAUs across hostels; featured in The Indian Express.",
      period: "IIT Delhi",
    },
    {
      title: "InterIIT Tech Meet",
      description: "Product + ML problem statement lead — owned end-to-end delivery for the institute team.",
      period: "InterIIT",
    },
    {
      title: "Phoenix IIT Delhi",
      description:
        "Founded and led the institute's product community; ran a two-month innovation campaign with hundreds of builders.",
      period: "Campus",
    },
    {
      title: "Floworks.ai (YC W23)",
      description:
        "Early engineer on a four-person team that shipped the go-to-market MVP for agentic B2B sales automation.",
      period: "YC W23",
    },
    {
      title: "Open source",
      description: "48+ public repositories — agents, optimizers, portals, and side experiments on GitHub.",
      period: "Ongoing",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology Delhi",
      degree: "B.Tech Chemical Engineering",
      period: "IIT Delhi",
    },
  ],
  skills: [
    "Product strategy & execution",
    "Full-stack engineering",
    "Python",
    "LLMs & agentic systems",
    "B2B SaaS",
    "Community building",
    "Technical leadership",
  ],
} as const;

export const instagram = {
  headline: "Follow along on Instagram",
  subtext:
    "Build logs, campus life, and the occasional hot take — less polished than the site, more real-time.",
  cta: { label: "Follow @arush_nerds_out", href: site.links.instagram },
} as const;

export const contact = {
  headline: "Say hello",
  subtext:
    "Got something interersting to discuss? Or just want to invite me for a trip :)....just message me any of these channels",
  channels: [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      label: "LinkedIn",
      value: "arush-bansal",
      href: site.links.linkedin,
    },
    {
      label: "GitHub",
      value: "Arush-Bansal",
      href: site.links.github,
    },
    {
      label: "X",
      value: "@arush_nerds_out",
      href: site.links.x,
    },
    {
      label: "Instagram",
      value: "@arush_nerds_out",
      href: site.links.instagram,
    },
    {
      label: "Substack",
      value: "@arushbansal",
      href: site.links.substack,
    },
    {
      label: "Reddit",
      value: "u/arush_nerds_out",
      href: site.links.reddit,
    },
  ],
};
