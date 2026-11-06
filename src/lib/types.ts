export type ToolCategorySlug =
  | "paper-portal"
  | "magic-lens"
  | "word-pocket"
  | "code-capsule"
  | "creator-compass"
  | "number-machine"
  | "scan-portal"
  | "search-navigator"
  | "format-transformer"
  | "smart-pocket";

export interface ToolCategory {
  id: string;
  slug: ToolCategorySlug;
  name: string;
  gadgetName: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  accentColor: string;
  toolsCount: number;
  featuredTools: string[];
}

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolItem {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  category: ToolCategorySlug;
  categoryName: string;
  gadgetName: string;
  icon: string;
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
  isPremium?: boolean;
  description: string;
  howToUse: string[];
  features: string[];
  faqs: ToolFaq[];
  supportedFormats?: string[];
  maxFileSizeMB?: number;
}

export interface UserSubscription {
  planId: "free" | "starter" | "pro" | "business";
  planName: string;
  price: number;
  billingPeriod: "monthly" | "yearly";
  status: "active" | "cancelled" | "expired" | "past_due";
  startDate: string;
  endDate: string;
  features: {
    bulkOperationsLimit: number;
    bulkOperationsUsedToday: number;
    savedProjectsLimit: number;
    savedProjectsCount: number;
    historyDays: number;
    teamMembersLimit: number;
    customBranding: boolean;
    prioritySupport: boolean;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatar?: string;
  createdAt: string;
  subscription: UserSubscription;
  stats: {
    totalToolsUsed: number;
    totalFilesProcessed: number;
    savedProjectsCount: number;
    favoriteToolsCount: number;
  };
}

export interface SavedProject {
  id: string;
  userId: string;
  toolSlug: string;
  toolName: string;
  title: string;
  description?: string;
  data: any;
  createdAt: string;
  updatedAt: string;
}

export interface ToolExecutionRecord {
  id: string;
  userId?: string;
  toolSlug: string;
  toolName: string;
  status: "success" | "error";
  durationMs: number;
  fileSizeBytes?: number;
  timestamp: string;
  ipHash?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface SupportTicket {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  subject: string;
  category: "tool-bug" | "billing" | "feature-request" | "account" | "other";
  priority: "low" | "medium" | "high";
  status: "open" | "in-progress" | "resolved" | "closed";
  messages: {
    id: string;
    sender: "user" | "support";
    senderName: string;
    message: string;
    timestamp: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
