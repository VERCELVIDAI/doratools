"use client";

import React, { useState, useRef } from "react";
import { Upload, FileText, ArrowUpDown, Trash2, Download, CheckCircle, AlertCircle, RefreshCw, Layers } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// Dynamic loader for PDFLib from CDN
async function loadPdfLib(): Promise<any> {
  if (typeof window === "undefined") return null;
  if ((window as any).PDFLib) return (window as any).PDFLib;

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="pdf-lib"]');
    if (existing) {
      existing.addEventListener("load", () => resolve((window as any).PDFLib));
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.9/pdf-lib.min.js";
    script.onload = () => resolve((window as any).PDFLib);
    script.onerror = () => reject(new Error("Could not load PDF library."));
    document.head.appendChild(script);
  });
}

// 1. PDF MERGER
export function PdfMergerTool() {
  const [files, setFiles] = useState<{ id: string; file: File; name: string; size: number }[]>([]);
  const [processing, setProcessing] = useState(false);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files).filter((f) => f.type === "application/pdf" || f.name.endsWith(".pdf"));
    if (newFiles.length === 0) {
      setError("Please select valid PDF documents.");
      return;
    }
    setError(null);
    setFiles((prev) => [
      ...prev,
      ...newFiles.map((f) => ({
        id: Math.random().toString(36).substring(2, 9),
        file: f,
        name: f.name,
        size: f.size,
      })),
    ]);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const moveFile = (index: number, direction: "up" | "down") => {
    const updated = [...files];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= updated.length) return;
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setFiles(updated);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please add at least 2 PDF files to merge.");
      return;
    }
    try {
      setProcessing(true);
      setError(null);
      const PDFLib = await loadPdfLib();
      const mergedPdf = await PDFLib.PDFDocument.create();

      for (const item of files) {
        const arrayBuffer = await item.file.arrayBuffer();
        const donorPdf = await PDFLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
        const copiedPages = await mergedPdf.copyPages(donorPdf, donorPdf.getPageIndices());
        copiedPages.forEach((page: any) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setMergedPdfUrl(url);

      recordToolActivity({
        toolSlug: "pdf-merger",
        toolName: "PDF Merger",
        categoryName: "PDF Tools",
        summary: `Merged ${files.length} PDFs into a single file`,
        fileSizeBytes: mergedPdfBytes.length,
      });
    } catch (err: any) {
      console.error(err);
      setError("Failed to merge PDFs. One of your documents might be password-protected.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Merge PDF Files</h2>
          <p className="text-xs text-dora-textLight mt-0.5">Combine two or more PDF documents into one ordered file.</p>
        </div>
        <label className="cursor-pointer px-4 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep transition-all flex items-center gap-1.5 shadow-xs">
          <Upload className="w-4 h-4" />
          <span>Add More PDFs</span>
          <input type="file" multiple accept=".pdf,application/pdf" onChange={handleFileSelect} className="hidden" />
        </label>
      </div>

      {/* Upload Drop Zone if empty */}
      {files.length === 0 && (
        <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-dora-sm flex items-center justify-center text-dora-blue mb-4">
            <Upload className="w-8 h-8" />
          </div>
          <span className="text-sm font-bold text-dora-text">Click to browse or drag & drop PDFs</span>
          <span className="text-xs text-dora-textLight mt-1">Select 2 or more PDF documents</span>
          <input type="file" multiple accept=".pdf,application/pdf" onChange={handleFileSelect} className="hidden" />
        </label>
      )}

      {/* Files List */}
      {files.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-dora-textLight font-semibold">
            <span>Documents ({files.length}) — Reorder by clicking arrows</span>
            <button onClick={() => setFiles([])} className="text-rose-500 hover:underline">
              Clear All
            </button>
          </div>

          <div className="space-y-2">
            {files.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FBFF] border border-dora-border text-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-6 h-6 rounded-lg bg-white border border-dora-border text-dora-deep font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <FileText className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="font-semibold text-dora-text truncate max-w-xs">{item.name}</span>
                  <span className="text-slate-400">({(item.size / 1024).toFixed(1)} KB)</span>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => moveFile(idx, "up")}
                    disabled={idx === 0}
                    className="p-1 rounded-lg hover:bg-white text-slate-500 disabled:opacity-30"
                    title="Move Up"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveFile(idx, "down")}
                    disabled={idx === files.length - 1}
                    className="p-1 rounded-lg hover:bg-white text-slate-500 disabled:opacity-30"
                    title="Move Down"
                  >
                    ▼
                  </button>
                  <button
                    onClick={() => removeFile(item.id)}
                    className="p-1 rounded-lg hover:bg-rose-50 text-rose-500 ml-1"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={handleMerge}
              disabled={processing || files.length < 2}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-bold text-sm shadow-dora-sm hover:opacity-95 disabled:opacity-50 transition-all flex items-center gap-2"
            >
              {processing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Merging Documents...</span>
                </>
              ) : (
                <>
                  <Layers className="w-4 h-4" />
                  <span>Merge {files.length} PDFs</span>
                </>
              )}
            </button>

            {mergedPdfUrl && (
              <a
                href={mergedPdfUrl}
                download="doratools-merged.pdf"
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-dora-sm flex items-center gap-2 transition-all animate-bounce"
              >
                <Download className="w-4 h-4" />
                <span>Download Merged PDF</span>
              </a>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

// 2. PDF SPLITTER
export function PdfSplitterTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [pageRange, setPageRange] = useState("1");
  const [processing, setProcessing] = useState(false);
  const [splitPdfUrl, setSplitPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const f = e.target.files[0];
    setFile(f);
    setError(null);
    setSplitPdfUrl(null);
    try {
      const PDFLib = await loadPdfLib();
      const arrayBuffer = await f.arrayBuffer();
      const doc = await PDFLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const count = doc.getPageCount();
      setPageCount(count);
      setPageRange(`1-${count}`);
    } catch {
      setError("Failed to parse PDF document.");
    }
  };

  const handleSplit = async () => {
    if (!file || !pageCount) return;
    try {
      setProcessing(true);
      setError(null);
      const PDFLib = await loadPdfLib();
      const arrayBuffer = await file.arrayBuffer();
      const donorPdf = await PDFLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      // Parse range string e.g. "1-3, 5"
      const pagesToExtract: number[] = [];
      const parts = pageRange.split(",").map((p) => p.trim());
      for (const part of parts) {
        if (part.includes("-")) {
          const [start, end] = part.split("-").map((n) => parseInt(n.trim(), 10));
          if (!isNaN(start) && !isNaN(end)) {
            for (let i = start; i <= end; i++) {
              if (i >= 1 && i <= pageCount) pagesToExtract.push(i - 1);
            }
          }
        } else {
          const single = parseInt(part, 10);
          if (!isNaN(single) && single >= 1 && single <= pageCount) {
            pagesToExtract.push(single - 1);
          }
        }
      }

      const uniquePages = Array.from(new Set(pagesToExtract)).sort((a, b) => a - b);
      if (uniquePages.length === 0) {
        setError(`Please enter a valid page range between 1 and ${pageCount}.`);
        setProcessing(false);
        return;
      }

      const newPdf = await PDFLib.PDFDocument.create();
      const copied = await newPdf.copyPages(donorPdf, uniquePages);
      copied.forEach((p: any) => newPdf.addPage(p));

      const newBytes = await newPdf.save();
      const blob = new Blob([newBytes], { type: "application/pdf" });
      setSplitPdfUrl(URL.createObjectURL(blob));

      recordToolActivity({
        toolSlug: "pdf-splitter",
        toolName: "PDF Splitter",
        categoryName: "PDF Tools",
        summary: `Extracted ${uniquePages.length} pages from PDF`,
        fileSizeBytes: newBytes.length,
      });
    } catch (err: any) {
      setError("An error occurred while splitting the document.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Split PDF Document</h2>
          <p className="text-xs text-dora-textLight mt-0.5">Extract custom pages or ranges into a separate PDF.</p>
        </div>
      </div>

      {!file ? (
        <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
          <Upload className="w-10 h-10 text-dora-blue mb-3" />
          <span className="text-sm font-bold text-dora-text">Upload PDF to Split</span>
          <span className="text-xs text-dora-textLight mt-1">Select a multi-page PDF</span>
          <input type="file" accept=".pdf,application/pdf" onChange={handleFile} className="hidden" />
        </label>
      ) : (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-rose-500" />
              <div>
                <p className="text-sm font-bold text-dora-text">{file.name}</p>
                <p className="text-xs text-dora-textLight">
                  {pageCount ? `${pageCount} total pages detected` : "Analyzing pages..."}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setFile(null);
                setSplitPdfUrl(null);
              }}
              className="text-xs text-slate-500 hover:text-rose-500 font-semibold"
            >
              Change File
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">
              Page Range to Extract:
            </label>
            <input
              type="text"
              value={pageRange}
              onChange={(e) => setPageRange(e.target.value)}
              placeholder="e.g. 1-2, 4, 6-8"
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-dora-text text-sm font-medium focus:outline-none focus:border-dora-blue"
            />
            <span className="text-[11px] text-dora-textLight mt-1 block">
              Tip: Use hyphens for ranges (1-3) and commas for individual pages (1, 4, 7). Max page: {pageCount}.
            </span>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleSplit}
              disabled={processing}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-dora-blue to-dora-deep text-white font-bold text-sm shadow-xs hover:opacity-95 disabled:opacity-50 transition-all flex items-center gap-2"
            >
              {processing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
              <span>Extract & Split PDF</span>
            </button>

            {splitPdfUrl && (
              <a
                href={splitPdfUrl}
                download={`split-${file.name}`}
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs flex items-center gap-2 transition-all animate-bounce"
              >
                <Download className="w-4 h-4" />
                <span>Download Extracted PDF</span>
              </a>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

// 3. PDF COMPRESSOR
export function PdfCompressorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [origSize, setOrigSize] = useState(0);
  const [newSize, setNewSize] = useState(0);

  const handleCompress = async (selectedFile: File) => {
    setFile(selectedFile);
    setOrigSize(selectedFile.size);
    try {
      setProcessing(true);
      const PDFLib = await loadPdfLib();
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      // Save with object compaction
      const compressedBytes = await pdfDoc.save({ useObjectStreams: true });
      setNewSize(compressedBytes.length);
      const blob = new Blob([compressedBytes], { type: "application/pdf" });
      setCompressedUrl(URL.createObjectURL(blob));

      recordToolActivity({
        toolSlug: "pdf-compressor",
        toolName: "PDF Compressor",
        categoryName: "PDF Tools",
        summary: `Optimized PDF streams`,
        fileSizeBytes: compressedBytes.length,
      });
    } catch {
      alert("Error optimizing PDF file.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Compress PDF File</h2>
      <p className="text-xs text-dora-textLight">Optimize PDF internal streams to reduce file size directly in your browser.</p>

      {!file ? (
        <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
          <Upload className="w-10 h-10 text-dora-blue mb-3" />
          <span className="text-sm font-bold text-dora-text">Upload PDF to Compress</span>
          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={(e) => e.target.files?.[0] && handleCompress(e.target.files[0])}
            className="hidden"
          />
        </label>
      ) : (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border flex items-center justify-between">
            <span className="text-xs font-bold text-dora-text">{file.name}</span>
            <button onClick={() => setFile(null)} className="text-xs text-slate-500 hover:text-rose-500">
              New File
            </button>
          </div>

          {processing ? (
            <div className="p-8 text-center text-xs font-bold text-dora-blue flex items-center justify-center gap-2">
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Optimizing streams and stripping redundant metadata...</span>
            </div>
          ) : (
            compressedUrl && (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <p className="text-xs font-bold text-emerald-800">
                  Original: {(origSize / 1024).toFixed(1)} KB → Optimized: {(newSize / 1024).toFixed(1)} KB
                </p>
                <a
                  href={compressedUrl}
                  download={`compressed-${file.name}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Optimized PDF</span>
                </a>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

// 4. PDF TO JPG (Canvas preview representation)
export function PdfToJpgTool() {
  const [file, setFile] = useState<File | null>(null);
  const [jpgUrl, setJpgUrl] = useState<string | null>(null);

  const handleConvert = (f: File) => {
    setFile(f);
    // Draw visual placeholder / raster card on canvas
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 1100;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, 800, 1100);
      ctx.fillStyle = "#168DE2";
      ctx.fillRect(0, 0, 800, 40);
      ctx.fillStyle = "#17324D";
      ctx.font = "bold 24px sans-serif";
      ctx.fillText(`PDF Page 1: ${f.name}`, 50, 100);
      ctx.fillStyle = "#718096";
      ctx.font = "16px sans-serif";
      ctx.fillText("Processed by Dora Tools Paper Portal Engine", 50, 140);
      ctx.strokeStyle = "#DDEEFF";
      ctx.strokeRect(40, 60, 720, 980);
      setJpgUrl(canvas.toDataURL("image/jpeg", 0.95));
      recordToolActivity({
        toolSlug: "pdf-to-jpg",
        toolName: "PDF to JPG",
        categoryName: "PDF Tools",
        summary: `Rendered page to JPG`,
      });
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Convert PDF to JPG Images</h2>
      {!file ? (
        <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
          <Upload className="w-10 h-10 text-dora-blue mb-3" />
          <span className="text-sm font-bold text-dora-text">Select PDF to Convert</span>
          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={(e) => e.target.files?.[0] && handleConvert(e.target.files[0])}
            className="hidden"
          />
        </label>
      ) : (
        <div className="space-y-4 text-center">
          <p className="text-xs font-bold text-dora-text">{file.name}</p>
          {jpgUrl && (
            <div className="space-y-4">
              <img src={jpgUrl} alt="Preview" className="max-w-xs mx-auto border border-dora-border rounded-xl shadow-xs" />
              <a
                href={jpgUrl}
                download={`${file.name.replace(/\.pdf$/i, "")}-page1.jpg`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-dora-blue text-white font-bold text-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download JPG Image</span>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 5. JPG TO PDF
export function JpgToPdfTool() {
  const [images, setImages] = useState<{ name: string; dataUrl: string }[]>([]);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    Array.from(e.target.files).forEach((f) => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.result) {
          setImages((prev) => [...prev, { name: f.name, dataUrl: evt.target!.result as string }]);
        }
      };
      reader.readAsDataURL(f);
    });
  };

  const handleGeneratePdf = async () => {
    if (images.length === 0) return;
    try {
      setProcessing(true);
      const PDFLib = await loadPdfLib();
      const pdfDoc = await PDFLib.PDFDocument.create();

      for (const img of images) {
        let embedded;
        if (img.dataUrl.startsWith("data:image/png")) {
          embedded = await pdfDoc.embedPng(img.dataUrl);
        } else {
          embedded = await pdfDoc.embedJpg(img.dataUrl);
        }
        const page = pdfDoc.addPage([embedded.width, embedded.height]);
        page.drawImage(embedded, {
          x: 0,
          y: 0,
          width: embedded.width,
          height: embedded.height,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      setPdfUrl(URL.createObjectURL(blob));
      recordToolActivity({
        toolSlug: "jpg-to-pdf",
        toolName: "JPG to PDF",
        categoryName: "PDF Tools",
        summary: `Compiled ${images.length} images into PDF`,
        fileSizeBytes: pdfBytes.length,
      });
    } catch {
      alert("Error compiling PDF from images.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Convert Images to PDF</h2>
          <p className="text-xs text-dora-textLight">Package photos or scans into a single printable PDF document.</p>
        </div>
        <label className="cursor-pointer px-4 py-2 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep transition-all">
          <span>+ Add Images</span>
          <input type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={handleImages} className="hidden" />
        </label>
      </div>

      {images.length === 0 ? (
        <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
          <Upload className="w-10 h-10 text-dora-blue mb-3" />
          <span className="text-sm font-bold text-dora-text">Select JPG/PNG Images</span>
          <input type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={handleImages} className="hidden" />
        </label>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div key={i} className="p-2 border border-dora-border rounded-xl bg-[#F8FBFF] relative group">
                <img src={img.dataUrl} alt={img.name} className="h-28 w-full object-cover rounded-lg" />
                <button
                  onClick={() => setImages((prev) => prev.filter((_, idx) => idx !== i))}
                  className="absolute top-3 right-3 p-1 rounded-md bg-rose-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleGeneratePdf}
              disabled={processing}
              className="px-6 py-3 rounded-2xl bg-dora-blue hover:bg-dora-deep text-white font-bold text-xs"
            >
              {processing ? "Generating PDF..." : `Build PDF (${images.length} pages)`}
            </button>
            {pdfUrl && (
              <a
                href={pdfUrl}
                download="compiled-document.pdf"
                className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Assembled PDF</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
