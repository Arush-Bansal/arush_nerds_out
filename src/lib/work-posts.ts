import { workTiles } from "@/lib/content";

export type WorkPostMeta = {
  slug: string;
  title: string;
  subtitle: string;
};

export type WorkSection =
  | { id: string; type: "heading"; content: string }
  | { id: string; type: "paragraph"; content: string; note?: string }
  | { id: string; type: "callout"; content: string }
  | { id: string; type: "quote"; content: string }
  | {
      id: string;
      type: "numbered";
      intro?: string;
      items: { title: string; body: string }[];
    }
  | { id: string; type: "insight"; content: string };

export type WorkPost = WorkPostMeta & {
  category: string;
  categoryEmoji: string;
  description: string;
  externalHref?: string;
  externalLabel?: string;
  sections: WorkSection[];
  nextRead?: WorkPostMeta;
};

const nextReadOrder = [
  "floworks",
  "phoenix",
  "novagpt",
  "creatorbox",
  "jlr",
  "projects",
] as const;

function metaForSlug(slug: string): WorkPostMeta {
  const tile = workTiles.find((t) => t.id === slug)!;
  return { slug: tile.id, title: tile.title, subtitle: tile.subtitle };
}

function withNextRead(post: Omit<WorkPost, "nextRead">): WorkPost {
  const idx = nextReadOrder.indexOf(post.slug as (typeof nextReadOrder)[number]);
  const nextSlug = nextReadOrder[(idx + 1) % nextReadOrder.length];
  return { ...post, nextRead: metaForSlug(nextSlug) };
}

const posts: Record<string, Omit<WorkPost, "nextRead">> = {
  floworks: {
    slug: "floworks",
    title: "Floworks.ai",
    subtitle: "YC W23 · Early engineering",
    category: "Product",
    categoryEmoji: "🚀",
    description:
      "One of four engineers who built and shipped the go-to-market MVP. Agentic automation for sales.",
    externalHref: "https://floworks.ai",
    externalLabel: "floworks.ai",
    sections: [
      {
        id: "intro",
        type: "callout",
        content:
          "Floworks hires specialized AI agents — Jesse for prospecting, Alisha for email, Linda for LinkedIn — so revenue teams spend time closing, not list-building.",
      },
      {
        id: "h1",
        type: "heading",
        content: "Shipping the GTM MVP",
      },
      {
        id: "p1",
        type: "paragraph",
        content:
          "I joined Floworks as one of four engineers on the early team, right as the company was turning YC W23 momentum into a product customers could actually buy. The mandate was not a slide deck — it was a go-to-market MVP: agentic automation for B2B sales that could run prospecting, outreach, and follow-up with minimal human babysitting.",
        note: "Pipeline is the north star — everything else is overhead.",
      },
      {
        id: "p2",
        type: "paragraph",
        content:
          "On floworks.ai today, the product is positioned around autonomous AI agents backed by ThorV2, their proprietary model, with claims of 43% higher accuracy versus other sales agents and plug-and-play onboarding. Customers report 6× ROI, 48%+ email open rates, and pipeline generated at scale — the kind of outcomes we were designing toward from day one.",
      },
      {
        id: "h2",
        type: "heading",
        content: "What early engineering looked like",
      },
      {
        id: "numbered",
        type: "numbered",
        intro: "Three shifts that defined how we built:",
        items: [
          {
            title: "Agents, not chatbots",
            body: "Sales workflows are multi-step — research, personalize, send, follow up, log to CRM. We treated each lane as an agent with a job description, not a single prompt wrapper.",
          },
          {
            title: "Trust over theatre",
            body: "Hallucination kills outbound. Grounding agents in real contact data, intent signals, and verifiable research was non-negotiable for anything customer-facing.",
          },
          {
            title: "Speed with compliance",
            body: "Enterprise buyers care about SOC 2, GDPR, and deliverability. We shipped fast, but security and reputation had to keep pace with feature velocity.",
          },
        ],
      },
      {
        id: "quote",
        type: "quote",
        content:
          "The best sales tool is the one your team actually runs — without a human in the loop for every mundane step.",
      },
      {
        id: "insight",
        type: "insight",
        content:
          "B2B agentic products win when they replace a workflow end-to-end. Partial automation feels clever in demos and frustrating in production.",
      },
    ],
  },
  phoenix: {
    slug: "phoenix",
    title: "Phoenix",
    subtitle: "IIT Delhi · Product community",
    category: "Community",
    categoryEmoji: "👥",
    description:
      "Led Phoenix — the institute's largest product community and a two-month innovation campaign.",
    sections: [
      {
        id: "intro",
        type: "callout",
        content:
          "Phoenix was not a club on paper — it was the institute's largest product community, built so builders could ship together instead of competing in isolation.",
      },
      {
        id: "h1",
        type: "heading",
        content: "Community as a product",
      },
      {
        id: "p1",
        type: "paragraph",
        content:
          "At IIT Delhi, interest in product far outpaced structured paths to practice it. Phoenix filled that gap: talks with practitioners, build nights, peer feedback, and a culture where \"I shipped\" mattered more than \"I attended.\"",
        note: "Scale without quality is just noise — we optimized for builders who finish.",
      },
      {
        id: "p2",
        type: "paragraph",
        content:
          "As lead, I owned programming, partnerships, and the tone of the room. The goal was simple — lower the activation energy for students to go from idea to demo. That meant clear rituals (weekly builds, demo days), accountable leads, and campaigns that had deadlines, not open-ended enthusiasm.",
      },
      {
        id: "h2",
        type: "heading",
        content: "The innovation campaign",
      },
      {
        id: "p3",
        type: "paragraph",
        content:
          "The two-month innovation campaign was the flagship beat: teams formed around real problems, iterated in public, and presented outcomes to peers and mentors. It compressed the product loop — problem, prototype, feedback, ship — into a campus-sized sprint.",
      },
      {
        id: "numbered",
        type: "numbered",
        items: [
          {
            title: "Recruit for finishers",
            body: "We biased toward people who had shipped something small before — a bot, a landing page, a hackathon repo — because momentum compounds.",
          },
          {
            title: "Create forcing functions",
            body: "Open-ended communities decay. Campaigns with dates, demos, and lightweight prizes kept attendance honest.",
          },
          {
            title: "Bridge to industry",
            body: "Alumni and founder visits turned abstract advice into concrete next steps — hiring loops, GTM mistakes, and tech choices.",
          },
        ],
      },
      {
        id: "quote",
        type: "quote",
        content:
          "The best communities do not hoard inspiration — they convert it into shipped work.",
      },
      {
        id: "insight",
        type: "insight",
        content:
          "Leadership here was product management for humans: clear outcomes, tight feedback loops, and systems that worked when I was not in the room.",
      },
    ],
  },
  novagpt: {
    slug: "novagpt",
    title: "NovaGPT",
    subtitle: "AI · LLM applications",
    category: "AI",
    categoryEmoji: "🤖",
    description:
      "Applied LLMs — custom agents, retrieval, and interfaces that make AI useful without the theatre.",
    sections: [
      {
        id: "intro",
        type: "callout",
        content:
          "NovaGPT was my lab for applied LLMs: custom agents, retrieval, and interfaces where the model served the task — not the other way around.",
      },
      {
        id: "h1",
        type: "heading",
        content: "Useful without the theatre",
      },
      {
        id: "p1",
        type: "paragraph",
        content:
          "Most AI demos optimize for wow. NovaGPT optimized for repeat use — clear inputs, inspectable outputs, and guardrails that made failures boring instead of catastrophic.",
        note: "If users cannot tell what the model did, they cannot trust it.",
      },
      {
        id: "p2",
        type: "paragraph",
        content:
          "The stack mixed agent orchestration with retrieval: chunking and embedding documents, routing queries to the right tools, and keeping humans in the loop only where judgment actually mattered. Interfaces were deliberately plain — chat where chat fit, forms where structure helped, and citations where facts had to be checked.",
      },
      {
        id: "h2",
        type: "heading",
        content: "Patterns that stuck",
      },
      {
        id: "numbered",
        type: "numbered",
        intro: "Three principles I still use on AI products:",
        items: [
          {
            title: "Retrieve before you riff",
            body: "Ground answers in sources the user can open. RAG is not magic — it is disciplined context management.",
          },
          {
            title: "Agents need budgets",
            body: "Steps, tokens, and tool calls should have limits. Unbounded agents feel smart until they loop or leak cost.",
          },
          {
            title: "Design for failure",
            body: "Empty retrieval, tool timeouts, and refusals should degrade gracefully with copy users understand.",
          },
        ],
      },
      {
        id: "quote",
        type: "quote",
        content: "The best AI interface disappears — you notice the outcome, not the model.",
      },
      {
        id: "insight",
        type: "insight",
        content:
          "Applied LLM work is mostly product engineering: evaluation harnesses, latency budgets, and UX that makes uncertainty visible.",
      },
    ],
  },
  creatorbox: {
    slug: "creatorbox",
    title: "Creatorbox",
    subtitle: "Creator tools & experiments",
    category: "Product",
    categoryEmoji: "🛠️",
    description:
      "A sandbox for creator-focused products — tooling, workflows, and prototypes around content and UGC.",
    sections: [
      {
        id: "intro",
        type: "callout",
        content:
          "Creatorbox is where I prototype creator-economy ideas — tooling, workflows, and UGC experiments without pretending each one is a company on day one.",
      },
      {
        id: "h1",
        type: "heading",
        content: "A sandbox, not a pitch deck",
      },
      {
        id: "p1",
        type: "paragraph",
        content:
          "Creators juggle distribution, editing, rights, and community — often with duct-taped spreadsheets and DMs. Creatorbox is my space to test small products that remove one sharp pain at a time: repurposing workflows, lightweight analytics, templates, or automation around content pipelines.",
      },
      {
        id: "p2",
        type: "paragraph",
        content:
          "Because the surface area is broad, I keep scope brutal. Each experiment has a hypothesis, a two-week build cap, and a single metric — time saved, posts shipped, or repeat usage. What graduates out of the box becomes a real repo; what does not gets documented and shelved without guilt.",
        note: "UGC products die when creators do extra work to use them.",
      },
      {
        id: "h2",
        type: "heading",
        content: "What I explore here",
      },
      {
        id: "numbered",
        type: "numbered",
        items: [
          {
            title: "Workflow, not features",
            body: "Tools win when they slot into how someone already posts — not when they demand a new habit.",
          },
          {
            title: "Prototypes over polish",
            body: "Neo-brutalist UIs and scripts are fine if they prove the loop. Polish comes after retention.",
          },
          {
            title: "Rights and reuse",
            body: "Remix-friendly formats and clear attribution reduce friction for collaborative creator teams.",
          },
        ],
      },
      {
        id: "quote",
        type: "quote",
        content:
          "Build for the creator's Tuesday night, not the conference stage demo.",
      },
      {
        id: "insight",
        type: "insight",
        content:
          "Creator products compound when they respect attention as the scarce resource — every click should earn the next one.",
      },
    ],
  },
  jlr: {
    slug: "jlr",
    title: "Jaguar Land Rover",
    subtitle: "Graduate Software Engineer",
    category: "Engineering",
    categoryEmoji: "⚙️",
    description:
      "Python behavioral simulation module modeling human driving across drive cycles.",
    externalHref: "https://www.linkedin.com/company/jlrindia",
    externalLabel: "JLR India on LinkedIn",
    sections: [
      {
        id: "intro",
        type: "callout",
        content:
          "At JLR I built a Python behavioral simulation module that models human driving across regulatory and real-world drive cycles — bridging vehicle performance data and how people actually drive.",
      },
      {
        id: "h1",
        type: "heading",
        content: "Simulation with real-world texture",
      },
      {
        id: "p1",
        type: "paragraph",
        content:
          "Automotive engineering lives on cycles — standardized patterns that stress efficiency, emissions, and durability. Lab results alone miss variability: acceleration habits, coasting, stop-start traffic. The module translated behavioral assumptions into repeatable simulations so teams could stress-test outcomes before hardware spent weeks in a cell.",
      },
      {
        id: "p2",
        type: "paragraph",
        content:
          "Implementation was Python-first: clear data pipelines in, scenario parameters, and outputs engineers could compare across cycles. The work rewarded patience with domain experts — tiny changes in driver behavior swamped naive averages.",
        note: "Models are only as honest as the behaviors you feed them.",
      },
      {
        id: "h2",
        type: "heading",
        content: "How we approached the problem",
      },
      {
        id: "numbered",
        type: "numbered",
        intro: "Three anchors for the simulation work:",
        items: [
          {
            title: "Separate cycle from behavior",
            body: "Drive cycles provide structure; human parameters provide realism. Keeping them explicit made sensitivity analysis tractable.",
          },
          {
            title: "Validate against known baselines",
            body: "Every new scenario needed a reference point — otherwise you optimize for a story, not a measurement.",
          },
          {
            title: "Document assumptions",
            body: "Future you (and the next engineer) should see why a distribution looked the way it did, not just the chart.",
          },
        ],
      },
      {
        id: "quote",
        type: "quote",
        content:
          "In automotive, the model is never finished — it is only current enough to decide.",
      },
      {
        id: "insight",
        type: "insight",
        content:
          "This role sharpened how I build systems: explicit interfaces, testable modules, and respect for domain complexity over clever code.",
      },
    ],
  },
  projects: {
    slug: "projects",
    title: "Everything else",
    subtitle: "48+ repos · side quests",
    category: "Engineering",
    categoryEmoji: "🗺️",
    description:
      "FeynmanAI, opportunity portals, optimizers, and the rest of the garage.",
    externalHref: "https://github.com/Arush-Bansal",
    externalLabel: "GitHub",
    sections: [
      {
        id: "intro",
        type: "callout",
        content:
          "Beyond the headline roles, my GitHub is a garage of experiments — 48 public repos spanning AI tutors, optimizers, campus tools, and automation scripts.",
      },
      {
        id: "h1",
        type: "heading",
        content: "The rest of the garage",
      },
      {
        id: "p1",
        type: "paragraph",
        content:
          "Not every project deserves a landing page. Some are learning spikes (Android tutorials, Python challenges), some are club infrastructure (Aeromodelling pages), and some are serious bets — FeynmanAI for teaching with AI, opportunity portals for surfacing programs, and Agentic-LLM-For-Optimizers for pushing LLMs into numerical workflows.",
      },
      {
        id: "p2",
        type: "paragraph",
        content:
          "Recent activity clusters around applied AI apps and design experiments — repos like WhatsYourAiApp and Deep-Design-1 show where attention is now: fast prototypes, shared components, and shipping in public.",
        note: "Repos are receipts — they show what you actually tried.",
      },
      {
        id: "h2",
        type: "heading",
        content: "Themes in the backlog",
      },
      {
        id: "numbered",
        type: "numbered",
        items: [
          {
            title: "FeynmanAI",
            body: "Explaining concepts in plain language — AI as a tutor that forces understanding, not just answers.",
          },
          {
            title: "Opportunity portals",
            body: "Aggregating programs, deadlines, and fit so students spend less time searching and more time applying.",
          },
          {
            title: "Optimizers & agents",
            body: "Agentic-LLM-For-Optimizers and related work — using models to navigate complex search spaces with guardrails.",
          },
        ],
      },
      {
        id: "quote",
        type: "quote",
        content: "Side projects are how you practice judgment before the stakes get real.",
      },
      {
        id: "insight",
        type: "insight",
        content:
          "I keep the garage public on purpose — it is the honest archive of curiosity, dead ends, and things that might graduate into products.",
      },
    ],
  },
};

export function getWorkSlugs(): string[] {
  return workTiles.map((t) => t.id);
}

export function getWorkPost(slug: string): WorkPost | undefined {
  const raw = posts[slug];
  if (!raw) return undefined;
  return withNextRead(raw);
}

export function getWorkPostMetadata(slug: string) {
  const post = getWorkPost(slug);
  if (!post) return null;
  return {
    title: `${post.title} · Work`,
    description: post.description,
  };
}
