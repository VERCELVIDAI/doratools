export interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPlan {
  id: "free" | "starter" | "pro" | "business";
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number; // 20% discount built-in
  badge?: string;
  isPopular?: boolean;
  features: PlanFeature[];
  limits: {
    bulkOperationsPerDay: number;
    savedProjects: number;
    historyDays: number;
    teamMembers: number;
    maxFileSizeMB: number;
  };
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free Explorer",
    tagline: "Unleash standard gadgets for everyday tasks at zero cost.",
    priceMonthly: 0,
    priceYearly: 0,
    limits: {
      bulkOperationsPerDay: 5,
      savedProjects: 3,
      historyDays: 7,
      teamMembers: 1,
      maxFileSizeMB: 25,
    },
    features: [
      { text: "Access to all 50 functional gadgets", included: true },
      { text: "Single file & basic batch processing", included: true },
      { text: "3 saved projects in cloud/local", included: true },
      { text: "Standard instant file downloads", included: true },
      { text: "7-day activity & download history", included: true },
      { text: "Max file size: 25MB", included: true },
      { text: "Custom business branding", included: false },
      { text: "Priority processing worker threads", included: false },
      { text: "Team workspace collaboration", included: false },
    ],
  },
  {
    id: "starter",
    name: "Starter Wizard",
    tagline: "Ideal for power creators, students, and freelancers.",
    priceMonthly: 99,
    priceYearly: 950, // Save 20%
    badge: "Great Value",
    limits: {
      bulkOperationsPerDay: 50,
      savedProjects: 10,
      historyDays: 30,
      teamMembers: 1,
      maxFileSizeMB: 50,
    },
    features: [
      { text: "Everything in Free Explorer", included: true },
      { text: "50 bulk operations per day", included: true, highlight: true },
      { text: "Higher file size limits (50MB)", included: true },
      { text: "10 saved projects & templates", included: true },
      { text: "Premium invoice & resume themes", included: true },
      { text: "30-day activity & audit history", included: true },
      { text: "Ad-free uninterrupted experience", included: true },
      { text: "Standard email customer support", included: true },
      { text: "Team workspaces", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro Sorcerer",
    tagline: "Unrestricted gadget superpower for professionals & agencies.",
    priceMonthly: 199,
    priceYearly: 1900,
    badge: "Most Popular",
    isPopular: true,
    limits: {
      bulkOperationsPerDay: 200,
      savedProjects: 9999, // Unlimited
      historyDays: 90,
      teamMembers: 1,
      maxFileSizeMB: 100,
    },
    features: [
      { text: "Everything in Starter Wizard", included: true },
      { text: "200 bulk operations per day", included: true, highlight: true },
      { text: "Unlimited saved projects & drafts", included: true, highlight: true },
      { text: "100MB massive file support", included: true },
      { text: "Advanced export formats (4K PNG, SVG, JSON)", included: true },
      { text: "90-day comprehensive audit history", included: true },
      { text: "Dedicated Web Worker acceleration", included: true },
      { text: "Priority ticket support within 4 hours", included: true },
      { text: "Custom branding on documents", included: true },
    ],
  },
  {
    id: "business",
    name: "Business Universe",
    tagline: "Complete multi-user suite for companies and digital teams.",
    priceMonthly: 399,
    priceYearly: 3800,
    badge: "Team Choice",
    limits: {
      bulkOperationsPerDay: 1000,
      savedProjects: 9999,
      historyDays: 365,
      teamMembers: 5,
      maxFileSizeMB: 200,
    },
    features: [
      { text: "Everything in Pro Sorcerer", included: true },
      { text: "Up to 5 team members included", included: true, highlight: true },
      { text: "Shared collaborative team workspaces", included: true, highlight: true },
      { text: "Custom white-label branding on all outputs", included: true },
      { text: "Team analytics & usage tracking", included: true },
      { text: "365-day enterprise audit history", included: true },
      { text: "Dedicated account manager & 24/7 priority SLA", included: true },
      { text: "Custom API & webhook access", included: true },
    ],
  },
];
