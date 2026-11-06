"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, Sliders, CheckCircle, Image as ImageIcon } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// 6. IMAGE COMPRESSOR
export function ImageCompressorTool() {
  const [origFile, setOrigFile] = useState<File | null>(null);
  const [origUrl, setOrigUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState(80);
  const [origSize, setOrigSize] = useState(0);
  const [newSize, setNewSize] = useState(0);

  const handleFile = (f: File) => {
    setOrigFile(f);
    setOrigSize(f.size);
    const url = URL.createObjectURL(f);
    setOrigUrl(url);
    compress(url, quality, f.type);
  };

  const compress = (imageUrl: string, q: number, mimeType: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      const targetMime = mimeType === "image/png" ? "image/png" : "image/jpeg";
      const dataUrl = canvas.toDataURL(targetMime, q / 100);
      setCompressedUrl(dataUrl);

      // Estimate compressed bytes from data URL
      const head = `data:${targetMime};base64,`;
      const base64Length = dataUrl.length - head.length;
      const bytes = Math.round((base64Length * 3) / 4);
      setNewSize(bytes);

      recordToolActivity({
        toolSlug: "image-compressor",
        toolName: "Image Compressor",
        categoryName: "Image Tools",
        summary: `Compressed image by ${Math.max(0, Math.round((1 - bytes / origSize) * 100))}%`,
        fileSizeBytes: bytes,
      });
    };
  };

  const handleQualityChange = (newQ: number) => {
    setQuality(newQ);
    if (origUrl && origFile) {
      compress(origUrl, newQ, origFile.type);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-dora-text">Smart Image Compressor</h2>
          <p className="text-xs text-dora-textLight">Adjust the slider to balance visual fidelity and byte reduction.</p>
        </div>
      </div>

      {!origFile ? (
        <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
          <Upload className="w-10 h-10 text-dora-blue mb-3" />
          <span className="text-sm font-bold text-dora-text">Upload JPG, PNG, or WebP</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            className="hidden"
          />
        </label>
      ) : (
        <div className="space-y-6">
          {/* Quality Slider Control */}
          <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-dora-border space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-dora-text">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-dora-blue" />
                <span>Compression Quality: {quality}%</span>
              </span>
              <span className="text-emerald-600 font-extrabold">
                {origSize > 0 && newSize > 0
                  ? `-${Math.max(0, Math.round((1 - newSize / origSize) * 100))}% reduction`
                  : ""}
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="98"
              value={quality}
              onChange={(e) => handleQualityChange(Number(e.target.value))}
              className="w-full accent-dora-blue cursor-pointer"
            />
          </div>

          {/* Size Comparison Badge */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Original Size</span>
              <span className="text-base font-black text-dora-text">{(origSize / 1024).toFixed(1)} KB</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-[11px] font-bold text-emerald-700 uppercase block">Compressed Size</span>
              <span className="text-base font-black text-emerald-700">{(newSize / 1024).toFixed(1)} KB</span>
            </div>
          </div>

          {/* Image Preview & Download */}
          {compressedUrl && (
            <div className="space-y-4 text-center">
              <img
                src={compressedUrl}
                alt="Compressed"
                className="max-h-80 mx-auto rounded-2xl border border-dora-border shadow-xs object-contain"
              />
              <div className="flex items-center justify-center gap-4">
                <a
                  href={compressedUrl}
                  download={`compressed-${origFile.name}`}
                  className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Compressed Image</span>
                </a>
                <button
                  onClick={() => {
                    setOrigFile(null);
                    setOrigUrl(null);
                    setCompressedUrl(null);
                  }}
                  className="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-dora-text font-bold text-xs"
                >
                  New Image
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 7. IMAGE RESIZER
export function ImageResizerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [origW, setOrigW] = useState(0);
  const [origH, setOrigH] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lockAspect, setLockAspect] = useState(true);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);

  const handleFile = (f: File) => {
    setFile(f);
    const url = URL.createObjectURL(f);
    setImgUrl(url);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setOrigW(img.width);
      setOrigH(img.height);
      setWidth(img.width);
      setHeight(img.height);
    };
  };

  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (lockAspect && origW > 0) {
      setHeight(Math.round((val * origH) / origW));
    }
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (lockAspect && origH > 0) {
      setWidth(Math.round((val * origW) / origH));
    }
  };

  const handleResize = () => {
    if (!imgUrl || width <= 0 || height <= 0) return;
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, width, height);
      setResizedUrl(canvas.toDataURL("image/png"));
      recordToolActivity({
        toolSlug: "image-resizer",
        toolName: "Image Resizer",
        categoryName: "Image Tools",
        summary: `Resized image to ${width}x${height}px`,
      });
    };
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Resize Image Dimensions</h2>
      {!file ? (
        <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
          <Upload className="w-10 h-10 text-dora-blue mb-3" />
          <span className="text-sm font-bold text-dora-text">Upload Image to Resize</span>
          <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} className="hidden" />
        </label>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-dora-text mb-1">Target Width (px):</label>
              <input
                type="number"
                value={width}
                onChange={(e) => handleWidthChange(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-dora-text text-sm font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-dora-text mb-1">Target Height (px):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => handleHeightChange(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-dora-text text-sm font-medium"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-xs font-bold text-dora-text cursor-pointer select-none">
            <input type="checkbox" checked={lockAspect} onChange={(e) => setLockAspect(e.target.checked)} className="rounded" />
            <span>Maintain Aspect Ratio ({origW} : {origH})</span>
          </label>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={handleResize}
              className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep"
            >
              Resize to {width} × {height}
            </button>
            {resizedUrl && (
              <a
                href={resizedUrl}
                download={`resized-${width}x${height}-${file.name}`}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Result</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// 8. IMAGE CROPPER
export function ImageCropperTool() {
  const [file, setFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [aspect, setAspect] = useState<"1:1" | "4:3" | "16:9" | "free">("1:1");
  const [croppedUrl, setCroppedUrl] = useState<string | null>(null);

  const handleFile = (f: File) => {
    setFile(f);
    setImgUrl(URL.createObjectURL(f));
    setCroppedUrl(null);
  };

  const handleCrop = () => {
    if (!imgUrl) return;
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let cropW = img.width;
      let cropH = img.height;

      if (aspect === "1:1") {
        const side = Math.min(img.width, img.height);
        cropW = side;
        cropH = side;
      } else if (aspect === "16:9") {
        cropW = img.width;
        cropH = Math.round((img.width * 9) / 16);
      } else if (aspect === "4:3") {
        cropW = img.width;
        cropH = Math.round((img.width * 3) / 4);
      }

      canvas.width = cropW;
      canvas.height = cropH;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, (img.width - cropW) / 2, (img.height - cropH) / 2, cropW, cropH, 0, 0, cropW, cropH);
      setCroppedUrl(canvas.toDataURL("image/png"));
      recordToolActivity({
        toolSlug: "image-cropper",
        toolName: "Image Cropper",
        categoryName: "Image Tools",
        summary: `Cropped image to ${aspect}`,
      });
    };
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Crop Image</h2>
      {!file ? (
        <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
          <Upload className="w-10 h-10 text-dora-blue mb-3" />
          <span className="text-sm font-bold text-dora-text">Upload Photo to Crop</span>
          <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} className="hidden" />
        </label>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {(["1:1", "4:3", "16:9", "free"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setAspect(r)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  aspect === r ? "bg-dora-blue text-white" : "bg-slate-100 text-dora-text"
                }`}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={handleCrop} className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs">
              Apply {aspect} Crop
            </button>
            {croppedUrl && (
              <a
                href={croppedUrl}
                download={`cropped-${aspect}-${file.name}`}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Cropped Image</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// 9. JPG TO PNG
export function JpgToPngTool() {
  const [pngUrl, setPngUrl] = useState<string | null>(null);

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
      setPngUrl(canvas.toDataURL("image/png"));
      recordToolActivity({
        toolSlug: "jpg-to-png",
        toolName: "JPG to PNG",
        categoryName: "Image Tools",
        summary: "Converted JPG to lossless PNG",
      });
    };
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Convert JPG to PNG</h2>
      <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
        <Upload className="w-10 h-10 text-dora-blue mb-3" />
        <span className="text-sm font-bold text-dora-text">Select JPG File</span>
        <input type="file" accept="image/jpeg,image/jpg" onChange={(e) => e.target.files?.[0] && convert(e.target.files[0])} className="hidden" />
      </label>
      {pngUrl && (
        <div className="text-center">
          <a
            href={pngUrl}
            download="converted.png"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download PNG Image</span>
          </a>
        </div>
      )}
    </div>
  );
}

// 10. WEBP CONVERTER
export function WebpConverterTool() {
  const [webpUrl, setWebpUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState(85);

  const convert = (f: File, q: number) => {
    const img = new Image();
    img.src = URL.createObjectURL(f);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      setWebpUrl(canvas.toDataURL("image/webp", q / 100));
      recordToolActivity({
        toolSlug: "webp-converter",
        toolName: "WebP Converter",
        categoryName: "Image Tools",
        summary: `Transmuted image to WebP format (${q}%)`,
      });
    };
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Convert to Modern WebP</h2>
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold text-dora-text">Target Quality: {quality}%</span>
        <input
          type="range"
          min="20"
          max="100"
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="accent-dora-blue"
        />
      </div>
      <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-dora-sky/60 hover:border-dora-blue rounded-3xl bg-dora-lightSky/30 hover:bg-dora-lightSky/50 cursor-pointer transition-all">
        <Upload className="w-10 h-10 text-dora-blue mb-3" />
        <span className="text-sm font-bold text-dora-text">Select Image to Transmute to WebP</span>
        <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && convert(e.target.files[0], quality)} className="hidden" />
      </label>
      {webpUrl && (
        <div className="text-center">
          <a
            href={webpUrl}
            download="converted.webp"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download High-Speed WebP</span>
          </a>
        </div>
      )}
    </div>
  );
}
