"use client";

import React, { useState } from "react";
import { Copy, Check, ExternalLink, Sparkles, Compass, Hash, Video } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// 21. UTM BUILDER
export function UtmBuilderTool() {
  const [url, setUrl] = useState("https://doratools.online");
  const [source, setSource] = useState("google");
  const [medium, setMedium] = useState("cpc");
  const [campaign, setCampaign] = useState("winter_launch");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);

  const fullUrl = (() => {
    try {
      if (!url) return "";
      const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
      if (source) parsed.searchParams.set("utm_source", source);
      if (medium) parsed.searchParams.set("utm_medium", medium);
      if (campaign) parsed.searchParams.set("utm_campaign", campaign);
      if (term) parsed.searchParams.set("utm_term", term);
      if (content) parsed.searchParams.set("utm_content", content);
      return parsed.toString();
    } catch {
      return url;
    }
  })();

  const copy = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    recordToolActivity({
      toolSlug: "utm-builder",
      toolName: "UTM Builder",
      categoryName: "Marketing Tools",
      summary: `Generated trackable UTM campaign link`,
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Campaign UTM URL Builder</h2>
          <p className="text-xs text-dora-textLight">Track marketing conversions in Google Analytics with precision.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Target Website URL *</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium text-dora-text"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Campaign Source (utm_source) *</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g. google, newsletter, twitter"
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium text-dora-text"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Campaign Medium (utm_medium) *</label>
          <input
            type="text"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            placeholder="e.g. cpc, banner, email"
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium text-dora-text"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Campaign Name (utm_campaign) *</label>
          <input
            type="text"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            placeholder="e.g. launch_2026"
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium text-dora-text"
          />
        </div>
      </div>

      {/* Live Preview */}
      <div className="p-4 rounded-2xl bg-slate-900 text-sky-300 font-mono text-xs break-all flex items-center justify-between gap-4">
        <span>{fullUrl}</span>
        <button
          onClick={copy}
          className="shrink-0 px-3 py-1.5 rounded-lg bg-dora-blue text-white font-sans font-bold text-xs hover:bg-dora-deep flex items-center gap-1"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied" : "Copy URL"}</span>
        </button>
      </div>
    </div>
  );
}

// 22. HASHTAG GENERATOR
export function HashtagGeneratorTool() {
  const [topic, setTopic] = useState("saas");
  const [copied, setCopied] = useState(false);

  const hashtags = [
    `#${topic.replace(/\s+/g, "")}`,
    `#${topic.replace(/\s+/g, "")}Tips`,
    `#${topic.replace(/\s+/g, "")}Hacks`,
    `#${topic.replace(/\s+/g, "")}Growth`,
    `#${topic.replace(/\s+/g, "")}Community`,
    `#${topic.replace(/\s+/g, "")}2026`,
    `#Digital${topic.replace(/\s+/g, "")}`,
    `#Best${topic.replace(/\s+/g, "")}`,
    `#${topic.replace(/\s+/g, "")}Strategy`,
    `#${topic.replace(/\s+/g, "")}Tools`,
  ];

  const copy = () => {
    navigator.clipboard.writeText(hashtags.join(" "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    recordToolActivity({
      toolSlug: "hashtag-generator",
      toolName: "Hashtag Generator",
      categoryName: "Marketing Tools",
      summary: `Generated viral hashtags for #${topic}`,
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Viral Hashtag Generator</h2>
      <div>
        <label className="block text-xs font-bold text-dora-text mb-1">Enter Niche or Topic:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. saas, fitness, travel, tech"
          className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium text-dora-text"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {hashtags.map((h) => (
          <span key={h} className="px-3 py-1.5 rounded-xl bg-sky-50 text-dora-deep text-xs font-bold border border-dora-border">
            {h}
          </span>
        ))}
      </div>

      <button onClick={copy} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs flex items-center gap-1.5">
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copied ? "Copied All!" : "Copy All Hashtags"}</span>
      </button>
    </div>
  );
}

// 23. CAPTION TEMPLATE BUILDER
export function CaptionBuilderTool() {
  const [hook, setHook] = useState("Most people waste 5 hours every week doing this wrong...");
  const [value, setValue] = useState("Here is the secret gadget that simplifies the entire workflow in 60 seconds.");
  const [cta, setCta] = useState("Drop a comment below and I'll send you the direct link!");

  const finalCaption = `${hook}\n\n${value}\n\n👇 Next Step:\n${cta}`;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Social Media Caption Builder</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Hook (First Line to stop scrolling):</label>
          <input
            type="text"
            value={hook}
            onChange={(e) => setHook(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Core Insight / Value:</label>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full h-24 px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Call to Action (CTA):</label>
          <input
            type="text"
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
          />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-[#F0F7FF] border border-dora-border whitespace-pre-line text-xs font-medium text-dora-text">
        {finalCaption}
      </div>

      <button
        onClick={() => navigator.clipboard.writeText(finalCaption)}
        className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs"
      >
        Copy Formatted Caption
      </button>
    </div>
  );
}

// 24. YOUTUBE TITLE BUILDER
export function YoutubeTitleTool() {
  const [keyword, setKeyword] = useState("Productivity Tools");

  const titles = [
    `I Tested Every ${keyword} in 2026 (Only 3 Actually Work)`,
    `How to Master ${keyword} in 10 Minutes`,
    `Stop Using Boring Apps! Top ${keyword} You Need to Try`,
    `${keyword}: The Ultimate Beginner's Guide`,
    `Why Nobody is Talking About This ${keyword} Secret`,
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">High-CTR YouTube Title Generator</h2>
      <div>
        <label className="block text-xs font-bold text-dora-text mb-1">Video Topic / Keyword:</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
        />
      </div>

      <div className="space-y-2">
        {titles.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FBFF] border border-dora-border text-xs font-bold text-dora-text"
          >
            <span>{t}</span>
            <button
              onClick={() => navigator.clipboard.writeText(t)}
              className="text-dora-blue hover:underline text-[11px]"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 25. YOUTUBE TAG BUILDER
export function YoutubeTagTool() {
  const [topic, setTopic] = useState("Gadgets");
  const tags = [`${topic}`, `${topic} 2026`, `best ${topic}`, `${topic} review`, `how to use ${topic}`, `${topic} tutorial`, `${topic} online`];
  const tagString = tags.join(", ");

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">YouTube SEO Tag Generator</h2>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
      />
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono break-all text-dora-text">
        {tagString}
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(tagString)}
        className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs"
      >
        Copy Comma-Separated Tags
      </button>
    </div>
  );
}
