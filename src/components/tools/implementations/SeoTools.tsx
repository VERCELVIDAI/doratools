"use client";

import React, { useState, useMemo } from "react";
import { Search, Globe, Share2, Copy, Check, BarChart3, CornerDownRight } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// 36. META TITLE GENERATOR
export function MetaTitleTool() {
  const [keyword, setKeyword] = useState("Best Online PDF Merger");
  const [brand, setBrand] = useState("Dora Tools");
  const [separator, setSeparator] = useState("|");

  const title = `${keyword} ${separator} ${brand}`.trim();
  const charLength = title.length;
  const isOptimal = charLength >= 40 && charLength <= 60;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">SEO Meta Title Tag Optimizer</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-dora-text mb-1">Target Search Keyword:</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Brand Name:</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
          />
        </div>
      </div>

      {/* Meter */}
      <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border space-y-2">
        <div className="flex justify-between text-xs font-bold">
          <span>Character Length: {charLength} / 60 characters</span>
          <span className={isOptimal ? "text-emerald-600 font-extrabold" : "text-amber-600"}>
            {isOptimal ? "Optimal Length" : charLength > 60 ? "Too Long (Will Truncate)" : "A bit short"}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
          <div
            className={`h-full transition-all ${charLength > 60 ? "bg-rose-500" : isOptimal ? "bg-emerald-500" : "bg-amber-500"}`}
            style={{ width: `${Math.min(100, (charLength / 60) * 100)}%` }}
          />
        </div>
      </div>

      {/* Google SERP Simulation */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Google Search Desktop Simulation</span>
        <div className="text-[11px] text-slate-500 font-sans">https://www.doratools.online › tools</div>
        <div className="text-base text-blue-800 font-medium hover:underline cursor-pointer line-clamp-1">{title}</div>
        <div className="text-xs text-slate-600 line-clamp-2">
          Discover fast, browser-powered gadgets at Dora Tools. Merge PDFs, compress images, and run calculations with 100% client-side privacy.
        </div>
      </div>

      <button
        onClick={() => navigator.clipboard.writeText(`<title>${title}</title>`)}
        className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs"
      >
        Copy HTML &lt;title&gt; Tag
      </button>
    </div>
  );
}

// 37. META DESCRIPTION GENERATOR
export function MetaDescTool() {
  const [desc, setDesc] = useState("Merge multiple PDF documents into one organized file in seconds. Free, fast, and 100% private in-browser processing with zero file uploads.");
  const count = desc.length;
  const isOptimal = count >= 120 && count <= 160;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">SERP Meta Description Optimizer</h2>
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full h-28 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-xs focus:outline-none"
      />

      <div className="flex justify-between text-xs font-bold">
        <span>Length: {count} characters (Sweet spot: 140 - 160)</span>
        <span className={isOptimal ? "text-emerald-600" : "text-amber-600"}>
          {isOptimal ? "✓ Great for Search Engines" : "Adjust for optimal CTR"}
        </span>
      </div>

      <button
        onClick={() => navigator.clipboard.writeText(`<meta name="description" content="${desc}" />`)}
        className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs"
      >
        Copy &lt;meta name=&quot;description&quot;&gt;
      </button>
    </div>
  );
}

// 38. SLUG GENERATOR
export function SlugGeneratorTool() {
  const [headline, setHeadline] = useState("10 Essential Magical Gadgets in 2026: A Full Review!");
  const [removeStopWords, setRemoveStopWords] = useState(true);

  const stopWords = new Set(["a", "an", "the", "in", "on", "at", "for", "of", "and", "or", "is"]);

  const slug = useMemo(() => {
    let clean = headline.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim();
    if (removeStopWords) {
      clean = clean
        .split(/\s+/)
        .filter((w) => !stopWords.has(w))
        .join(" ");
    }
    return clean.replace(/\s+/g, "-");
  }, [headline, removeStopWords]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Clean URL Slug Generator</h2>
      <div>
        <label className="block text-xs font-bold text-dora-text mb-1">Headline or Title:</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
        />
      </div>

      <label className="flex items-center gap-2 text-xs font-bold text-dora-text cursor-pointer">
        <input type="checkbox" checked={removeStopWords} onChange={(e) => setRemoveStopWords(e.target.checked)} />
        <span>Remove common stop words (a, an, the, in, for...)</span>
      </label>

      <div className="p-4 rounded-2xl bg-slate-900 text-sky-300 font-mono text-xs flex items-center justify-between">
        <span>/{slug}</span>
        <button
          onClick={() => navigator.clipboard.writeText(slug)}
          className="px-3 py-1 rounded bg-dora-blue text-white font-sans text-[11px] font-bold"
        >
          Copy Slug
        </button>
      </div>
    </div>
  );
}

// 39. KEYWORD DENSITY CHECKER
export function KeywordDensityTool() {
  const [text, setText] = useState("Dora Tools provides magical digital gadgets. Use gadgets for PDF merging, image compression, and developer tasks. Every gadget runs inside your browser for maximum gadget privacy.");

  const analysis = useMemo(() => {
    const words = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .split(/\s+/)
      .filter((w) => w.length > 2);

    const freq: Record<string, number> = {};
    words.forEach((w) => {
      freq[w] = (freq[w] || 0) + 1;
    });

    const total = words.length;
    return Object.entries(freq)
      .map(([word, count]) => ({
        word,
        count,
        density: total > 0 ? ((count / total) * 100).toFixed(1) : "0",
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, [text]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Keyword Density Analyzer</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-32 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-xs focus:outline-none"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {analysis.map((item) => (
          <div key={item.word} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="font-bold text-dora-text block">{item.word}</span>
            <div className="flex justify-between text-slate-500 mt-1">
              <span>{item.count} times</span>
              <span className="font-bold text-dora-blue">{item.density}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 40. OPEN GRAPH TAG GENERATOR
export function OpenGraphTool() {
  const [title, setTitle] = useState("Dora Tools — Your Digital Gadget Universe!");
  const [desc, setDesc] = useState("50 free magical gadgets for your everyday digital work.");
  const [url, setUrl] = useState("https://www.doratools.online");
  const [image, setImage] = useState("https://www.doratools.online/og-image.png");

  const ogSnippet = `<meta property="og:title" content="${title}" />\n<meta property="og:description" content="${desc}" />\n<meta property="og:url" content="${url}" />\n<meta property="og:image" content="${image}" />\n<meta name="twitter:card" content="summary_large_image" />`;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Open Graph & Social Share Generator</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">OG Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium" />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Canonical URL:</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-dora-text mb-1">OG Description:</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium" />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-900 text-sky-300 font-mono text-xs whitespace-pre-line">
        {ogSnippet}
      </div>

      <button onClick={() => navigator.clipboard.writeText(ogSnippet)} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
        Copy HTML Meta Tags
      </button>
    </div>
  );
}
