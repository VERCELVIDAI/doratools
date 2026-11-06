"use client";

import React, { useState } from "react";
import { Copy, Check, Download, AlertCircle, CheckCircle, Code2, Link as LinkIcon, Binary } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// 16. JSON FORMATTER
export function JsonFormatterTool() {
  const [input, setInput] = useState('{"name":"Dora Tools","universe":"Gadget","tools":50,"tags":["pdf","image","code"],"active":true}');
  const [indent, setIndent] = useState(2);
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const format = () => {
    try {
      setError(null);
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indent);
      setOutput(formatted);
      recordToolActivity({
        toolSlug: "json-formatter",
        toolName: "JSON Formatter",
        categoryName: "Developer Tools",
        summary: "Prettified JSON payload",
      });
    } catch (e: any) {
      setError(e.message || "Invalid JSON syntax.");
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output || input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([output || input], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    a.click();
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">JSON Prettifier & Formatter</h2>
          <p className="text-xs text-dora-textLight">Clean up messy JSON payloads with customizable indentation.</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl border border-dora-border bg-slate-50 text-xs font-bold"
          >
            <option value={2}>2 Spaces Indent</option>
            <option value={4}>4 Spaces Indent</option>
          </select>
          <button onClick={format} className="px-4 py-1.5 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep">
            Format JSON
          </button>
          <button onClick={copy} className="p-2 rounded-xl border border-dora-border hover:bg-slate-50 text-xs font-bold">
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-dora-blue" />}
          </button>
          <button onClick={download} className="p-2 rounded-xl border border-dora-border hover:bg-slate-50 text-xs font-bold">
            <Download className="w-4 h-4 text-dora-blue" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Input Raw JSON:</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-80 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border font-mono text-xs focus:outline-none focus:border-dora-blue"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Formatted Output:</label>
          <textarea
            readOnly
            value={output || input}
            className="w-full h-80 p-4 rounded-2xl bg-slate-900 text-sky-300 font-mono text-xs focus:outline-none"
          />
        </div>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

// 17. JSON VALIDATOR
export function JsonValidatorTool() {
  const [json, setJson] = useState('{\n  "title": "Valid JSON",\n  "status": 200\n}');
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    try {
      JSON.parse(json);
      setStatus("valid");
      setErrorMsg("");
      recordToolActivity({
        toolSlug: "json-validator",
        toolName: "JSON Validator",
        categoryName: "Developer Tools",
        summary: "Validated JSON structure successfully",
      });
    } catch (e: any) {
      setStatus("invalid");
      setErrorMsg(e.message);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">JSON Syntax Validator</h2>
          <p className="text-xs text-dora-textLight">Find precise line & column syntax errors in your JSON code.</p>
        </div>
        <button onClick={validate} className="px-5 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs">
          Validate Syntax
        </button>
      </div>

      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        className="w-full h-64 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border font-mono text-xs focus:outline-none"
      />

      {status === "valid" && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <span>Valid JSON! RFC 8259 compliant with zero syntax errors.</span>
        </div>
      )}

      {status === "invalid" && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono space-y-1">
          <div className="flex items-center gap-2 font-bold text-rose-700">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>Invalid JSON detected:</span>
          </div>
          <p className="pl-6">{errorMsg}</p>
        </div>
      )}
    </div>
  );
}

// 18. JSON MINIFIER
export function JsonMinifierTool() {
  const [input, setInput] = useState('{\n  "version": 1,\n  "minify": true\n}');
  const [minified, setMinified] = useState("");

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setMinified(JSON.stringify(parsed));
      recordToolActivity({
        toolSlug: "json-minifier",
        toolName: "JSON Minifier",
        categoryName: "Developer Tools",
        summary: "Compressed JSON data",
      });
    } catch {
      alert("Invalid JSON format");
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">JSON Minifier & Compressor</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste formatted JSON..."
        className="w-full h-48 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border font-mono text-xs focus:outline-none"
      />
      <button onClick={minify} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
        Minify JSON
      </button>
      {minified && (
        <div className="p-4 rounded-2xl bg-slate-900 text-emerald-400 font-mono text-xs break-all">
          {minified}
        </div>
      )}
    </div>
  );
}

// 19. BASE64 ENCODER/DECODER
export function Base64Tool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleProcess = () => {
    try {
      if (mode === "encode") {
        setResult(btoa(unescape(encodeURIComponent(text))));
      } else {
        setResult(decodeURIComponent(escape(atob(text))));
      }
      recordToolActivity({
        toolSlug: "base64-encoder-decoder",
        toolName: "Base64 Encoder/Decoder",
        categoryName: "Developer Tools",
        summary: `${mode === "encode" ? "Encoded" : "Decoded"} string via Base64`,
      });
    } catch {
      setResult("Error processing Base64. Ensure valid input string.");
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h2 className="text-xl font-bold text-dora-text">Base64 Encoder & Decoder</h2>
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setMode("encode")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold ${mode === "encode" ? "bg-white text-dora-deep shadow-xs" : "text-slate-500"}`}
          >
            Encode
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold ${mode === "decode" ? "bg-white text-dora-deep shadow-xs" : "text-slate-500"}`}
          >
            Decode
          </button>
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={mode === "encode" ? "Enter plain text to encode..." : "Enter Base64 string to decode..."}
        className="w-full h-36 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-xs font-mono focus:outline-none"
      />

      <button onClick={handleProcess} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
        {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
      </button>

      {result && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono break-all text-dora-text">
          {result}
        </div>
      )}
    </div>
  );
}

// 20. URL ENCODER/DECODER
export function UrlEncoderTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const processUrl = () => {
    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
      recordToolActivity({
        toolSlug: "url-encoder-decoder",
        toolName: "URL Encoder/Decoder",
        categoryName: "Developer Tools",
        summary: `${mode === "encode" ? "Encoded" : "Decoded"} URL query string`,
      });
    } catch {
      setOutput("Error: Invalid URI string.");
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">URL Percent-Encoder & Decoder</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setMode("encode")}
          className={`px-4 py-2 rounded-xl text-xs font-bold ${mode === "encode" ? "bg-dora-blue text-white" : "bg-slate-100"}`}
        >
          Encode URL
        </button>
        <button
          onClick={() => setMode("decode")}
          className={`px-4 py-2 rounded-xl text-xs font-bold ${mode === "decode" ? "bg-dora-blue text-white" : "bg-slate-100"}`}
        >
          Decode URL
        </button>
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter URL parameter..."
        className="w-full h-32 p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border text-xs font-mono focus:outline-none"
      />

      <button onClick={processUrl} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
        Transform
      </button>

      {output && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono break-all text-dora-text">
          {output}
        </div>
      )}
    </div>
  );
}
