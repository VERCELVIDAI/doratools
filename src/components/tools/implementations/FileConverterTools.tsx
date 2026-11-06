"use client";

import React, { useState } from "react";
import { Upload, Download, RefreshCw, FileCode, Table, FileSpreadsheet } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// 41. PNG TO JPG
export function PngToJpgTool() {
  const [jpgUrl, setJpgUrl] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [quality, setQuality] = useState(90);

  const convert = (f: File) => {
    const img = new Image();
    img.src = URL.createObjectURL(f);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      setJpgUrl(canvas.toDataURL("image/jpeg", quality / 100));
      recordToolActivity({
        toolSlug: "png-to-jpg",
        toolName: "PNG to JPG",
        categoryName: "File Converters",
        summary: "Transmuted PNG to clean JPG",
      });
    };
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">PNG to JPG with Background Fill</h2>
      <div className="flex items-center gap-4 text-xs font-bold text-dora-text">
        <label className="flex items-center gap-2">
          <span>Background Color:</span>
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-8 h-8 rounded-lg cursor-pointer" />
        </label>
        <label className="flex items-center gap-2">
          <span>JPG Quality: {quality}%</span>
          <input type="range" min="30" max="100" value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="accent-dora-blue" />
        </label>
      </div>

      <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
        <Upload className="w-10 h-10 text-dora-blue mb-3" />
        <span className="text-sm font-bold text-dora-text">Select PNG Image</span>
        <input type="file" accept="image/png" onChange={(e) => e.target.files?.[0] && convert(e.target.files[0])} className="hidden" />
      </label>

      {jpgUrl && (
        <div className="text-center">
          <a href={jpgUrl} download="converted.jpg" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs">
            <Download className="w-4 h-4" />
            <span>Download High-Quality JPG</span>
          </a>
        </div>
      )}
    </div>
  );
}

// 42. JPG TO WEBP
export function JpgToWebpTool() {
  const [webpUrl, setWebpUrl] = useState<string | null>(null);

  const convert = (f: File) => {
    const img = new Image();
    img.src = URL.createObjectURL(f);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      setWebpUrl(canvas.toDataURL("image/webp", 0.85));
      recordToolActivity({
        toolSlug: "jpg-to-webp",
        toolName: "JPG to WebP",
        categoryName: "File Converters",
        summary: "Transmuted JPG to high-efficiency WebP",
      });
    };
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">JPG to Ultra-Compact WebP</h2>
      <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
        <Upload className="w-10 h-10 text-dora-blue mb-3" />
        <span className="text-sm font-bold text-dora-text">Select JPG File</span>
        <input type="file" accept="image/jpeg,image/jpg" onChange={(e) => e.target.files?.[0] && convert(e.target.files[0])} className="hidden" />
      </label>
      {webpUrl && (
        <div className="text-center">
          <a href={webpUrl} download="converted.webp" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs">
            <Download className="w-4 h-4" />
            <span>Download WebP Asset</span>
          </a>
        </div>
      )}
    </div>
  );
}

// 43. SVG TO PNG
export function SvgToPngTool() {
  const [scale, setScale] = useState(2);
  const [pngUrl, setPngUrl] = useState<string | null>(null);

  const handleSvg = (f: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const svgText = e.target?.result as string;
      const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.src = url;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale || 800 * scale;
        canvas.height = img.height * scale || 800 * scale;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setPngUrl(canvas.toDataURL("image/png"));
        recordToolActivity({
          toolSlug: "svg-to-png",
          toolName: "SVG to PNG",
          categoryName: "File Converters",
          summary: `Rasterized SVG at ${scale}x scale`,
        });
      };
    };
    reader.readAsText(f);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Vector SVG to High-Res PNG Rasterizer</h2>
      <div className="flex items-center gap-2 text-xs font-bold text-dora-text">
        <span>Export Multiplier:</span>
        {[1, 2, 4].map((s) => (
          <button
            key={s}
            onClick={() => setScale(s)}
            className={`px-3 py-1.5 rounded-lg ${scale === s ? "bg-dora-blue text-white" : "bg-slate-100"}`}
          >
            {s}x Resolution
          </button>
        ))}
      </div>

      <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
        <Upload className="w-10 h-10 text-dora-blue mb-3" />
        <span className="text-sm font-bold text-dora-text">Select SVG File</span>
        <input type="file" accept=".svg,image/svg+xml" onChange={(e) => e.target.files?.[0] && handleSvg(e.target.files[0])} className="hidden" />
      </label>

      {pngUrl && (
        <div className="text-center">
          <a href={pngUrl} download={`vector-${scale}x.png`} className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs">
            <Download className="w-4 h-4" />
            <span>Download {scale}x High-Res PNG</span>
          </a>
        </div>
      )}
    </div>
  );
}

// 44. CSV TO JSON
export function CsvToJsonTool() {
  const [csv, setCsv] = useState("name,category,rating\nPDF Merger,Paper Portal,5\nImage Compressor,Magic Lens,5\nGST Calculator,Number Machine,4.8");
  const [json, setJson] = useState("");

  const convert = () => {
    try {
      const lines = csv.trim().split("\n");
      if (lines.length < 2) return;
      const headers = lines[0].split(",").map((h) => h.trim());
      const result = [];

      for (let i = 1; i < lines.length; i++) {
        const obj: any = {};
        const currentline = lines[i].split(",");
        for (let j = 0; j < headers.length; j++) {
          let val: any = currentline[j]?.trim();
          if (!isNaN(Number(val))) val = Number(val);
          obj[headers[j]] = val;
        }
        result.push(obj);
      }
      setJson(JSON.stringify(result, null, 2));
      recordToolActivity({
        toolSlug: "csv-to-json",
        toolName: "CSV to JSON",
        categoryName: "File Converters",
        summary: `Parsed ${result.length} rows into structured JSON`,
      });
    } catch {
      alert("Error parsing CSV syntax.");
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">CSV to Formatted JSON Converter</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">CSV Input:</label>
          <textarea
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
            className="w-full h-64 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border font-mono text-xs focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Parsed JSON:</label>
          <textarea
            readOnly
            value={json}
            className="w-full h-64 p-4 rounded-2xl bg-slate-900 text-sky-300 font-mono text-xs focus:outline-none"
          />
        </div>
      </div>
      <button onClick={convert} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
        Transmute CSV to JSON
      </button>
    </div>
  );
}

// 45. JSON TO CSV
export function JsonToCsvTool() {
  const [json, setJson] = useState('[\n  {"name": "DoraBot", "role": "Mascot", "level": 100},\n  {"name": "Paper Portal", "role": "PDF Engine", "level": 95}\n]');
  const [csv, setCsv] = useState("");

  const convert = () => {
    try {
      const arr = JSON.parse(json);
      if (!Array.isArray(arr) || arr.length === 0) return;
      const headers = Object.keys(arr[0]);
      const csvRows = [headers.join(",")];

      for (const row of arr) {
        const values = headers.map((header) => {
          const val = row[header] ?? "";
          return typeof val === "string" && val.includes(",") ? `"${val}"` : val;
        });
        csvRows.push(values.join(","));
      }

      setCsv(csvRows.join("\n"));
      recordToolActivity({
        toolSlug: "json-to-csv",
        toolName: "JSON to CSV",
        categoryName: "File Converters",
        summary: `Flattened JSON array into CSV rows`,
      });
    } catch {
      alert("Invalid JSON array.");
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">JSON to CSV Spreadsheet Table</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">JSON Array Input:</label>
          <textarea
            value={json}
            onChange={(e) => setJson(e.target.value)}
            className="w-full h-64 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border font-mono text-xs focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Generated CSV Table:</label>
          <textarea
            readOnly
            value={csv}
            className="w-full h-64 p-4 rounded-2xl bg-slate-900 text-emerald-400 font-mono text-xs focus:outline-none"
          />
        </div>
      </div>
      <button onClick={convert} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
        Transmute JSON to CSV
      </button>
    </div>
  );
}
