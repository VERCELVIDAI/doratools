"use client";

import React, { useState, useMemo } from "react";
import { Copy, Check, Trash2, Sliders, Type, ListFilter } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// 11. WORD COUNTER
export function WordCounterTool() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const charsWithSpaces = text.length;
    const charsNoSpaces = text.replace(/\s+/g, "").length;
    const sentences = trimmed ? (trimmed.match(/[.!?]+(?:\s+|$)/g) || []).length || 1 : 0;
    const paragraphs = trimmed ? trimmed.split(/\n+/).filter((p) => p.trim().length > 0).length : 0;
    const readingTimeMin = Math.ceil(words / 200);
    const speakingTimeMin = Math.ceil(words / 130);

    return {
      words,
      charsWithSpaces,
      charsNoSpaces,
      sentences: trimmed ? sentences : 0,
      paragraphs,
      readingTime: `${readingTimeMin} min`,
      speakingTime: `${speakingTimeMin} min`,
    };
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    recordToolActivity({
      toolSlug: "word-counter",
      toolName: "Word Counter",
      categoryName: "Text Tools",
      summary: `Analyzed ${stats.words} words`,
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Real-Time Word & Reading Counter</h2>
          <p className="text-xs text-dora-textLight">Instant word frequency and readability metrics as you type.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            disabled={!text}
            className="px-3 py-1.5 rounded-xl border border-dora-border text-xs font-bold hover:bg-slate-50 flex items-center gap-1.5 disabled:opacity-40"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-dora-blue" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
          <button
            onClick={() => setText("")}
            disabled={!text}
            className="p-1.5 rounded-xl hover:bg-rose-50 text-rose-500 disabled:opacity-30"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Real-time Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {[
          { label: "Words", val: stats.words, color: "text-dora-blue", bg: "bg-sky-50" },
          { label: "Characters", val: stats.charsWithSpaces, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "No Spaces", val: stats.charsNoSpaces, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Sentences", val: stats.sentences, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Paragraphs", val: stats.paragraphs, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Reading Time", val: stats.readingTime, color: "text-rose-600", bg: "bg-rose-50" },
        ].map((item) => (
          <div key={item.label} className={`p-3 rounded-2xl ${item.bg} border border-dora-border/60 text-center`}>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">{item.label}</span>
            <span className={`text-xl font-black ${item.color} mt-0.5 block`}>{item.val}</span>
          </div>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type, paste, or draft your text here..."
        className="w-full h-64 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-dora-text text-sm font-normal focus:outline-none focus:border-dora-blue focus:bg-white transition-all resize-y leading-relaxed"
      />
    </div>
  );
}

// 12. CHARACTER COUNTER
export function CharacterCounterTool() {
  const [text, setText] = useState("");
  const limitTwitter = 280;
  const limitSms = 160;

  const count = text.length;
  const twitterLeft = limitTwitter - count;
  const smsSegments = Math.ceil(count / limitSms) || 1;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Character Counter & Social Limits</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-center">
          <span className="text-xs font-bold text-slate-500 block">Total Characters</span>
          <span className="text-3xl font-black text-dora-text mt-1 block">{count}</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-center">
          <span className="text-xs font-bold text-slate-500 block">Twitter/X (280 cap)</span>
          <span className={`text-3xl font-black mt-1 block ${twitterLeft < 0 ? "text-rose-600" : "text-dora-blue"}`}>
            {twitterLeft} left
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-center">
          <span className="text-xs font-bold text-slate-500 block">SMS Segments</span>
          <span className="text-3xl font-black text-purple-600 mt-1 block">{smsSegments} segment(s)</span>
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type social media draft..."
        className="w-full h-44 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-dora-text text-sm focus:outline-none focus:border-dora-blue"
      />
    </div>
  );
}

// 13. CASE CONVERTER
export function CaseConverterTool() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const applyCase = (type: string) => {
    let result = text;
    switch (type) {
      case "upper":
        result = text.toUpperCase();
        break;
      case "lower":
        result = text.toLowerCase();
        break;
      case "title":
        result = text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
        break;
      case "sentence":
        result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case "camel":
        result = text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, "");
        break;
      case "snake":
        result = text.trim().toLowerCase().replace(/\s+/g, "_");
        break;
      case "kebab":
        result = text.trim().toLowerCase().replace(/\s+/g, "-");
        break;
      case "constant":
        result = text.trim().toUpperCase().replace(/\s+/g, "_");
        break;
    }
    setText(result);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Text Case Converter</h2>
          <p className="text-xs text-dora-textLight">Instant one-click typography transformations.</p>
        </div>
        <button onClick={copy} className="px-4 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs">
          {copied ? "Copied!" : "Copy Text"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { id: "upper", label: "UPPERCASE" },
          { id: "lower", label: "lowercase" },
          { id: "title", label: "Title Case" },
          { id: "sentence", label: "Sentence case" },
          { id: "camel", label: "camelCase" },
          { id: "snake", label: "snake_case" },
          { id: "kebab", label: "kebab-case" },
          { id: "constant", label: "CONSTANT_CASE" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => applyCase(btn.id)}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-dora-lightSky text-dora-text font-bold text-xs transition-colors"
          >
            {btn.label}
          </button>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text to convert..."
        className="w-full h-52 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-dora-text text-sm focus:outline-none focus:border-dora-blue font-mono"
      />
    </div>
  );
}

// 14. TEXT CLEANER
export function TextCleanerTool() {
  const [text, setText] = useState("");
  const [stripHtml, setStripHtml] = useState(true);
  const [extraSpaces, setExtraSpaces] = useState(true);
  const [blankLines, setBlankLines] = useState(true);

  const clean = () => {
    let result = text;
    if (stripHtml) {
      result = result.replace(/<[^>]*>?/gm, "");
    }
    if (extraSpaces) {
      result = result.replace(/[ \t]+/g, " ");
    }
    if (blankLines) {
      result = result.replace(/^\s*[\r\n]/gm, "");
    }
    setText(result.trim());
    recordToolActivity({
      toolSlug: "text-cleaner",
      toolName: "Text Cleaner",
      categoryName: "Text Tools",
      summary: "Sanitized formatting and whitespace",
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Sanitize & Clean Messy Text</h2>

      <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-dora-text">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={stripHtml} onChange={(e) => setStripHtml(e.target.checked)} />
          <span>Remove HTML Tags</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={extraSpaces} onChange={(e) => setExtraSpaces(e.target.checked)} />
          <span>Collapse Extra Spaces</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={blankLines} onChange={(e) => setBlankLines(e.target.checked)} />
          <span>Remove Empty Lines</span>
        </label>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text containing messy HTML, extra whitespace, or broken lines..."
        className="w-full h-52 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-dora-text text-sm focus:outline-none"
      />

      <button onClick={clean} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
        Clean Text
      </button>
    </div>
  );
}

// 15. DUPLICATE LINE REMOVER
export function DuplicateLineRemoverTool() {
  const [text, setText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [sortAlpha, setSortAlpha] = useState(false);
  const [removedCount, setRemovedCount] = useState<number | null>(null);

  const handleDedupe = () => {
    const lines = text.split("\n");
    const seen = new Set();
    const result: string[] = [];

    for (const line of lines) {
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        result.push(line);
      }
    }

    if (sortAlpha) {
      result.sort((a, b) => a.localeCompare(b));
    }

    setRemovedCount(lines.length - result.length);
    setText(result.join("\n"));

    recordToolActivity({
      toolSlug: "duplicate-line-remover",
      toolName: "Duplicate Line Remover",
      categoryName: "Text Tools",
      summary: `Removed ${lines.length - result.length} duplicate lines`,
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Duplicate Line Remover</h2>
          <p className="text-xs text-dora-textLight">Deduplicate email lists, logs, and rows in milliseconds.</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-dora-text">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
          <span>Case Sensitive</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={sortAlpha} onChange={(e) => setSortAlpha(e.target.checked)} />
          <span>Sort Lines Alphabetically (A-Z)</span>
        </label>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste list with duplicate items..."
        className="w-full h-56 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-dora-text text-sm focus:outline-none font-mono"
      />

      <div className="flex items-center gap-4">
        <button onClick={handleDedupe} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
          Remove Duplicates
        </button>
        {removedCount !== null && (
          <span className="text-xs font-bold text-emerald-600">
            ✓ Cleaned! Removed {removedCount} duplicate lines.
          </span>
        )}
      </div>
    </div>
  );
}
