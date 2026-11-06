"use client";

import { useState, useEffect } from "react";
import { UserProfile, UserSubscription, SavedProject } from "./types";
import { PRICING_PLANS } from "./plans-data";

const STORAGE_KEYS = {
  FAVORITES: "dora_favorites",
  HISTORY: "dora_history",
  SAVED_PROJECTS: "dora_saved_projects",
  CURRENT_USER: "dora_current_user",
  USAGE_TODAY: "dora_usage_today",
};

export interface HistoryItem {
  id: string;
  toolSlug: string;
  toolName: string;
  categoryName: string;
  timestamp: string;
  summary: string;
  fileSizeBytes?: number;
}

const DEFAULT_USER: UserProfile = {
  id: "usr_free_demo",
  name: "Gadget Explorer",
  email: "explorer@doratools.online",
  role: "user",
  avatar: "🤖",
  createdAt: "2026-10-01",
  subscription: {
    planId: "free",
    planName: "Free Explorer",
    price: 0,
    billingPeriod: "monthly",
    status: "active",
    startDate: "2026-10-01",
    endDate: "2027-10-01",
    features: {
      bulkOperationsLimit: 5,
      bulkOperationsUsedToday: 0,
      savedProjectsLimit: 3,
      savedProjectsCount: 0,
      historyDays: 7,
      teamMembersLimit: 1,
      customBranding: false,
      prioritySupport: false,
    },
  },
  stats: {
    totalToolsUsed: 12,
    totalFilesProcessed: 28,
    savedProjectsCount: 1,
    favoriteToolsCount: 3,
  },
};

// Safe localStorage getter
function getLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

// Safe localStorage setter
function setLocalStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
}

// Favorites management
export function getFavoriteSlugs(): string[] {
  return getLocalStorage<string[]>(STORAGE_KEYS.FAVORITES, [
    "pdf-merger",
    "image-compressor",
    "json-formatter",
  ]);
}

export function toggleFavorite(slug: string): boolean {
  const favs = getFavoriteSlugs();
  let updated: string[];
  let isNowFav = false;
  if (favs.includes(slug)) {
    updated = favs.filter((s) => s !== slug);
    isNowFav = false;
  } else {
    updated = [...favs, slug];
    isNowFav = true;
  }
  setLocalStorage(STORAGE_KEYS.FAVORITES, updated);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("dora-favorites-updated"));
  }
  return isNowFav;
}

export function isFavorite(slug: string): boolean {
  return getFavoriteSlugs().includes(slug);
}

// History tracking
export function recordToolActivity(item: {
  toolSlug: string;
  toolName: string;
  categoryName: string;
  summary: string;
  fileSizeBytes?: number;
}): void {
  const history = getLocalStorage<HistoryItem[]>(STORAGE_KEYS.HISTORY, []);
  const newItem: HistoryItem = {
    id: "act_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
    toolSlug: item.toolSlug,
    toolName: item.toolName,
    categoryName: item.categoryName,
    summary: item.summary,
    timestamp: new Date().toISOString(),
    fileSizeBytes: item.fileSizeBytes,
  };
  const updated = [newItem, ...history].slice(0, 100);
  setLocalStorage(STORAGE_KEYS.HISTORY, updated);

  // Increment usage count for today
  incrementDailyUsage();

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("dora-history-updated"));
  }
}

export function getToolHistory(): HistoryItem[] {
  return getLocalStorage<HistoryItem[]>(STORAGE_KEYS.HISTORY, [
    {
      id: "demo-1",
      toolSlug: "pdf-merger",
      toolName: "PDF Merger",
      categoryName: "PDF Tools",
      summary: "Merged 3 pages successfully",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: "demo-2",
      toolSlug: "image-compressor",
      toolName: "Image Compressor",
      categoryName: "Image Tools",
      summary: "Compressed 2.4 MB down to 480 KB (-80%)",
      timestamp: new Date(Date.now() - 14400000).toISOString(),
    },
  ]);
}

export function clearToolHistory(): void {
  setLocalStorage(STORAGE_KEYS.HISTORY, []);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("dora-history-updated"));
  }
}

// Daily usage tracker
export function getDailyUsage(): { date: string; count: number } {
  const todayStr = new Date().toISOString().split("T")[0];
  const usage = getLocalStorage<{ date: string; count: number }>(
    STORAGE_KEYS.USAGE_TODAY,
    { date: todayStr, count: 0 }
  );
  if (usage.date !== todayStr) {
    return { date: todayStr, count: 0 };
  }
  return usage;
}

export function incrementDailyUsage(): number {
  const current = getDailyUsage();
  const updated = { date: current.date, count: current.count + 1 };
  setLocalStorage(STORAGE_KEYS.USAGE_TODAY, updated);
  return updated.count;
}

// User and Subscription management
export function getCurrentUser(): UserProfile {
  return getLocalStorage<UserProfile>(STORAGE_KEYS.CURRENT_USER, DEFAULT_USER);
}

export function updateCurrentUser(user: Partial<UserProfile>): UserProfile {
  const current = getCurrentUser();
  const updated = { ...current, ...user };
  setLocalStorage(STORAGE_KEYS.CURRENT_USER, updated);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("dora-user-updated"));
  }
  return updated;
}

export function upgradeUserPlan(
  planId: "free" | "starter" | "pro" | "business",
  period: "monthly" | "yearly" = "monthly"
): UserProfile {
  const plan = PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[0];
  const current = getCurrentUser();
  const now = new Date();
  const nextMonth = new Date();
  if (period === "yearly") {
    nextMonth.setFullYear(now.getFullYear() + 1);
  } else {
    nextMonth.setMonth(now.getMonth() + 1);
  }

  const newSub: UserSubscription = {
    planId: plan.id,
    planName: plan.name,
    price: period === "yearly" ? plan.priceYearly : plan.priceMonthly,
    billingPeriod: period,
    status: "active",
    startDate: now.toISOString(),
    endDate: nextMonth.toISOString(),
    features: {
      bulkOperationsLimit: plan.limits.bulkOperationsPerDay,
      bulkOperationsUsedToday: 0,
      savedProjectsLimit: plan.limits.savedProjects,
      savedProjectsCount: current.subscription.features.savedProjectsCount,
      historyDays: plan.limits.historyDays,
      teamMembersLimit: plan.limits.teamMembers,
      customBranding: plan.id === "business" || plan.id === "pro",
      prioritySupport: plan.id === "pro" || plan.id === "business",
    },
  };

  const updated = {
    ...current,
    subscription: newSub,
  };
  setLocalStorage(STORAGE_KEYS.CURRENT_USER, updated);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("dora-user-updated"));
  }
  return updated;
}

// Saved Projects
export function getSavedProjects(): SavedProject[] {
  return getLocalStorage<SavedProject[]>(STORAGE_KEYS.SAVED_PROJECTS, [
    {
      id: "proj_demo_1",
      userId: "usr_free_demo",
      toolSlug: "invoice-generator",
      toolName: "Invoice Generator",
      title: "Client Retainer Invoice #INV-2026-001",
      description: "Q4 Web Architecture & Design Retainer",
      data: { invoiceNumber: "INV-2026-001", total: 45000 },
      createdAt: "2026-11-01T10:00:00Z",
      updatedAt: "2026-11-01T10:00:00Z",
    },
  ]);
}

export function saveProject(project: Omit<SavedProject, "id" | "createdAt" | "updatedAt">): SavedProject {
  const existing = getSavedProjects();
  const newProj: SavedProject = {
    ...project,
    id: "proj_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const updated = [newProj, ...existing];
  setLocalStorage(STORAGE_KEYS.SAVED_PROJECTS, updated);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("dora-projects-updated"));
  }
  return newProj;
}

export function deleteSavedProject(id: string): void {
  const existing = getSavedProjects();
  const updated = existing.filter((p) => p.id !== id);
  setLocalStorage(STORAGE_KEYS.SAVED_PROJECTS, updated);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("dora-projects-updated"));
  }
}
