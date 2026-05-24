export type CreatorboxRead = {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  accentClass: string;
  description: string;
  points: { title: string; body: string }[];
};

export const creatorboxReads: CreatorboxRead[] = [
  {
    slug: "agentic-ai",
    title: "For the Agentic AI Gods",
    subtitle: "Harnesses, LangGraph DeepAgents, and why branching beats single-shot",
    emoji: "🤖",
    accentClass: "bg-purple/20",
    description:
      "How CreatorBox orchestrates creative agents — harness-first design, DeepAgents on LangGraph, and checkpoints for real multi-asset workflows.",
    points: [
      {
        title: "Harness-first, not model-first",
        body: "Creative agents need stable tool contracts, memory boundaries, and retry semantics — not a new system prompt every sprint. The harness sits above the model so plan → act → verify → revise loops stay consistent regardless of which LLM backs a step.",
      },
      {
        title: "DeepAgents on LangGraph",
        body: "Orchestration runs through LangGraph’s DeepAgents pattern: graph nodes for planning, delegated tool calls, and human-in-the-loop gates before destructive edits or exports. Branching is first-class — a poster pass and a motion pass can fork, merge, or pause without rewriting product code per workflow.",
      },
      {
        title: "Why a harness at all",
        body: "Single-shot completions break on real creator tasks (multi-asset, multi-format, partial failures). The harness gives replayable checkpoints, explicit tool routing, and evaluation hooks so you can swap models without re-plumbing the editor.",
      },
    ],
  },
  {
    slug: "system-design",
    title: "For the System Design Bros",
    subtitle: "Extension points, electron-vite, and local-first storage",
    emoji: "🏗️",
    accentClass: "bg-teal/15",
    description:
      "The desktop shell behind CreatorBox — thin core, plugin extension points, Electron + Vite, and why drafts stay on disk.",
    points: [
      {
        title: "Extension-point model",
        body: "The core binary stays thin. Features — export presets, platform adapters, asset pipelines, niche tool packs — register through extension points instead of forking the main app. New creator workflows ship as plugins, not rewrites of the shell.",
      },
      {
        title: "Electron + Vite (electron-vite)",
        body: "Renderer gets Vite HMR for fast UI iteration; main and preload bundles stay explicit. Native APIs (filesystem, dialogs, codecs) live behind preload IPC so the React surface does not inherit Node foot-guns.",
      },
      {
        title: "Local-first storage",
        body: "Drafts, renders, and reference boards live on disk — SQLite and project folders — not a sync server in v1. Creators work with large assets, need offline, and care about egress; local storage avoids upload tax on 4K timelines and keeps iteration snappy.",
      },
      {
        title: "Why these choices",
        body: "Extension points decouple release cadence from every niche workflow. Electron-vite optimizes where the product spends time (UI-heavy editor). Local-first defers backend complexity until retention proves cloud value — privacy and performance win by default.",
      },
    ],
  },
  {
    slug: "creative",
    title: "For the Creative & Influencer Geniuses",
    subtitle: "Hook–body–CTA architecture and competitor-aware scripting",
    emoji: "🎬",
    accentClass: "bg-yellow/40",
    description:
      "The content strategy layer — how scripts are structured for retention, how competitor analysis grounds suggestions, and why creators lose on format not wording.",
    points: [
      {
        title: "Hook → Body → CTA architecture",
        body: "Scripts and briefs are structured in three beats: a pattern-interrupt hook (first 1–3 seconds), a body that delivers the promise without fluff, and one clear CTA. The editor treats each beat as its own layer so you can A/B hooks without rewriting full scripts — aligned with how short-form retention actually works.",
      },
      {
        title: "Competitor analysis functions",
        body: "Built-in analysis ingests top performers in your niche and surfaces hook types, pacing, format density, and CTA placement — benchmarks, not copy-paste templates. The goal is to see what your lane rewards (talking head vs. b-roll stack vs. text-on-screen) before you ship.",
      },
      {
        title: "Why it’s shaped this way",
        body: "Creators rarely lose on “bad AI wording”; they lose on structure that does not match the swipe. Separating hook, body, and CTA lets the agent suggest variants per layer. Competitor analysis grounds those suggestions in format reality for your audience — not generic marketing copy.",
      },
    ],
  },
  {
    slug: "user-security",
    title: "For Users Who Read the Fine Print",
    subtitle: "Keychain vault, workspace boundaries, and agent gates before anything touches disk",
    emoji: "🔒",
    accentClass: "bg-red/10",
    description:
      "How CreatorBox keeps your keys, files, and previews under your control — desktop isolation, OS credential storage, workspace-scoped agents, and explicit approval before writes.",
    points: [
      {
        title: "Renderer isolation + main-process gate",
        body: "The UI runs with context isolation and without Node integration — no raw filesystem or shell from React. Native capabilities (open workspace, read files, run FFmpeg, store secrets) flow through a typed preload bridge and tRPC handlers in the main process only. The renderer never sees API keys or arbitrary disk paths.",
      },
      {
        title: "API keys in the OS keychain",
        body: "Anthropic and integration keys (Fal, ElevenLabs, Gemini) live in the system credential vault via keytar — not in project files, env vars, or localStorage. Keys are validated against the provider before storage, read only in the main process when a request needs them, and never logged or sent to the renderer.",
      },
      {
        title: "Workspace-scoped agent filesystem",
        body: "Agents operate inside the open workspace root via virtual paths (`/design.html`, not `C:\\…`). Middleware coerces model-supplied paths, blocks `..` traversal, and rejects escapes outside the workspace. Shell and file tools use deepagents backends rooted at that folder — the agent cannot wander your home directory.",
      },
      {
        title: "Plan mode before destructive work",
        body: "In plan mode the agent is read-only: explicit deny rules block writes, shell execution and HTTP-with-auth tools are off, and only explore/read tools run. The agent submits a plan for your approval; execution mode unlocks writes and shell only after you opt in — human-in-the-loop before anything hits disk.",
      },
      {
        title: "Vault-backed HTTP and sandboxed previews",
        body: "Integration API calls go through a dedicated HTTP tool that injects keys from the vault — agents are instructed never to put secrets in shell commands or URLs. HTML workspace previews render in a sandboxed iframe (`allow-scripts allow-same-origin` only). Media loads through a custom workspace protocol that resolves paths under the open folder and rejects escapes.",
      },
      {
        title: "Explicit permission grants",
        body: "Chromium permission prompts are handled conservatively: microphone and workspace screen capture are allowed when needed for voice input and recording; everything else is denied by default. Large assets stay local — no sync server in v1 — so your drafts and renders are not uploaded as a side effect of editing.",
      },
    ],
  },
];

const readsBySlug = Object.fromEntries(creatorboxReads.map((read) => [read.slug, read]));

export function getCreatorboxReadSlugs(): string[] {
  return creatorboxReads.map((read) => read.slug);
}

export function getCreatorboxRead(slug: string): CreatorboxRead | undefined {
  return readsBySlug[slug];
}

export function getCreatorboxReadMetadata(slug: string) {
  const read = getCreatorboxRead(slug);
  if (!read) return null;
  return {
    title: `${read.title} · CreatorBox AI`,
    description: read.description,
  };
}
