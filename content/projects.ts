export type Project = {
  slug: string;
  index: string;
  title: string;
  type: string;
  period: string;
  summary: string;
  challenge: string;
  role: string;
  outcome: string;
  highlights: { title: string; text: string }[];
  stack: string[];
  repository: string;
  accent: "lime" | "violet" | "coral";
  visual: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    index: "01",
    title: "TaskFlow",
    type: "Full-stack web application",
    period: "May — July 2026",
    summary:
      "A collaborative project and task management system built around a fast Kanban workflow, clear permissions, and end-to-end type safety.",
    challenge:
      "Project tools often become slow and difficult to navigate as work grows. TaskFlow needed to keep everyday actions immediate while supporting roles, comments, search, and a detailed activity trail.",
    role:
      "I designed the product structure and implemented the complete application: data model, type-safe API, authentication, server state, interactions, and responsive interface.",
    outcome:
      "The result is a production-shaped application with optimistic task movement, shareable filter state, role-based collaboration, threaded comments, and keyboard-oriented navigation.",
    highlights: [
      {
        title: "Immediate interaction",
        text: "Optimistic updates make task movement feel instant while server state remains synchronized through TanStack Query.",
      },
      {
        title: "Type-safe by design",
        text: "tRPC, Zod, TypeScript, and Drizzle connect database operations to interface code without duplicated contracts.",
      },
      {
        title: "Built for teams",
        text: "Owner, admin, member, and viewer roles protect project actions while invitations and activity history keep work visible.",
      },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "tRPC", "TanStack Query", "PostgreSQL", "Drizzle", "dnd-kit"],
    repository: "https://github.com/YuliaVorotintseva/taskflow",
    accent: "lime",
    visual: "kanban",
  },
  {
    slug: "finance-tracker",
    index: "02",
    title: "Finance Tracker",
    type: "Full-stack web application",
    period: "March — May 2026",
    summary:
      "A personal finance workspace that combines manual tracking, resilient CSV imports, categorization rules, and useful visual analytics.",
    challenge:
      "Bank exports are inconsistent and manual bookkeeping is repetitive. The experience needed to normalize varied files, prevent duplicates, and turn transactions into understandable trends.",
    role:
      "I built the monorepo architecture, frontend data experience, API contracts, database layer, import workflow, security controls, and automated tests.",
    outcome:
      "Users can map CSV columns, preview imports, filter large transaction sets, define automatic categorization rules, and understand monthly income and spending from one dashboard.",
    highlights: [
      {
        title: "Defensive imports",
        text: "The parser detects common delimiters and encodings, supports bank presets, and identifies duplicate transactions before insertion.",
      },
      {
        title: "Useful analytics",
        text: "Aggregated monthly and category views turn raw transactions into an at-a-glance picture of personal cash flow.",
      },
      {
        title: "Production safeguards",
        text: "Input validation, encrypted access tokens, rate limiting, security headers, and automated tests support reliable handling of sensitive data.",
      },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "NestJS", "tRPC", "PostgreSQL", "Redis", "Playwright"],
    repository: "https://github.com/YuliaVorotintseva/finance_tracker",
    accent: "violet",
    visual: "chart",
  },
  {
    slug: "travel-tracker",
    index: "03",
    title: "TravelTracker",
    type: "Cross-platform mobile application",
    period: "January — March 2026",
    summary:
      "A collaborative travel planner with live updates, route building, maps, and an offline-aware experience across iOS and Android.",
    challenge:
      "Travel plans change while people are moving and connectivity is unreliable. Shared itineraries needed to remain responsive, understandable, and secure across devices.",
    role:
      "I developed the Expo application and Supabase backend integration, including navigation, data persistence, realtime subscriptions, geolocation, deep links, and row-level security.",
    outcome:
      "The application supports collaborative trips, role-based invite links, map visualization, drag-and-drop itineraries, comments, and persisted data during network interruptions.",
    highlights: [
      {
        title: "Network resilient",
        text: "Persisted query state and connection feedback keep the interface useful when connectivity changes during a trip.",
      },
      {
        title: "Realtime together",
        text: "Supabase channels update comments and membership changes across devices, with debounced invalidation to control request volume.",
      },
      {
        title: "Native context",
        text: "Location, geocoding, deep links, system themes, and optimized lists make collaboration feel at home on mobile.",
      },
    ],
    stack: ["React Native", "Expo SDK 54", "TypeScript", "Expo Router", "TanStack Query", "Supabase", "PostgreSQL", "RLS"],
    repository: "https://github.com/YuliaVorotintseva/travel_tracker_mobile",
    accent: "coral",
    visual: "map",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
