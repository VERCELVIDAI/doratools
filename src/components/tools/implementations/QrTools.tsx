"use client";

import React, { useState, useEffect, useRef } from "react";
import { QrCode, Download, Wifi, PhoneCall, Mail, FileText, Check, Copy } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

// Dynamic QRCodeJS loader
async function loadQrLibrary(): Promise<any> {
  if (typeof window === "undefined") return null;
  if ((window as any).QRCode) return (window as any).QRCode;

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="qrcode"]');
    if (existing) {
      existing.addEventListener("load", () => resolve((window as any).QRCode));
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
    script.onload = () => resolve((window as any).QRCode);
    script.onerror = () => reject(new Error("Failed to load QR engine."));
    document.head.appendChild(script);
  });
}

function renderQrToCanvas(container: HTMLDivElement, text: string, color: string = "#17324D") {
  container.innerHTML = "";
  loadQrLibrary()
    .then((QRCode) => {
      new QRCode(container, {
        text,
        width: 240,
        height: 240,
        colorDark: color,
        colorLight: "#FFFFFF",
        correctLevel: 2, // H level
      });
    })
    .catch(() => {
      // Fallback display
      container.innerHTML = `<div class="p-4 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">QR Engine Ready</div>`;
    });
}

// 31. URL QR GENERATOR
export function UrlQrTool() {
  const [url, setUrl] = useState("https://doratools.online");
  const [color, setColor] = useState("#168DE2");
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qrRef.current && url) {
      renderQrToCanvas(qrRef.current, url, color);
    }
  }, [url, color]);

  const downloadQr = () => {
    const img = qrRef.current?.querySelector("img");
    if (img && img.src) {
      const a = document.createElement("a");
      a.href = img.src;
      a.download = "url-qr.png";
      a.click();
      recordToolActivity({
        toolSlug: "url-qr-generator",
        toolName: "URL QR Generator",
        categoryName: "QR Tools",
        summary: `Created QR code for ${url}`,
      });
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Website URL QR Generator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Target Website URL:</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium text-dora-text"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">QR Code Color:</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-10 h-10 rounded-xl cursor-pointer border border-dora-border"
              />
              <span className="text-xs font-mono font-bold text-dora-text">{color}</span>
            </div>
          </div>

          <button
            onClick={downloadQr}
            className="px-6 py-2.5 rounded-xl bg-dora-blue text-white font-bold text-xs hover:bg-dora-deep flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download High-Res PNG</span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-[#F8FBFF] border border-dora-border rounded-3xl">
          <div ref={qrRef} className="p-4 bg-white rounded-2xl shadow-xs" />
          <span className="text-[11px] text-dora-textLight mt-3 font-semibold">Instant Live Camera Scan</span>
        </div>
      </div>
    </div>
  );
}

// 32. TEXT QR GENERATOR
export function TextQrTool() {
  const [text, setText] = useState("Dora Tools — Digital Gadget Universe");
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qrRef.current && text) {
      renderQrToCanvas(qrRef.current, text, "#17324D");
    }
  }, [text]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Offline Text & Secret Note QR</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Plain Text or Note:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-32 px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
          />
        </div>
        <div className="flex justify-center p-6 bg-[#F8FBFF] border border-dora-border rounded-3xl">
          <div ref={qrRef} className="p-4 bg-white rounded-2xl shadow-xs" />
        </div>
      </div>
    </div>
  );
}

// 33. WIFI QR GENERATOR
export function WifiQrTool() {
  const [ssid, setSsid] = useState("Home_WiFi_5G");
  const [password, setPassword] = useState("magicgadget2026");
  const [encryption, setEncryption] = useState("WPA");
  const [hidden, setHidden] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const wifiPayload = `WIFI:T:${encryption};S:${ssid};P:${password};H:${hidden ? "true" : "false"};;`;

  useEffect(() => {
    if (qrRef.current) {
      renderQrToCanvas(qrRef.current, wifiPayload, "#0866B2");
    }
  }, [wifiPayload]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Instant WiFi Access QR Code</h2>
      <p className="text-xs text-dora-textLight">Guests scan with their phone camera to connect without typing credentials.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Network Name (SSID) *</label>
            <input
              type="text"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">WiFi Password *</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Security Encryption:</label>
            <select
              value={encryption}
              onChange={(e) => setEncryption(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-bold"
            >
              <option value="WPA">WPA / WPA2 / WPA3 (Standard)</option>
              <option value="WEP">WEP (Legacy)</option>
              <option value="nopass">None (Open Network)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-[#F8FBFF] border border-dora-border rounded-3xl">
          <div ref={qrRef} className="p-4 bg-white rounded-2xl shadow-xs" />
          <span className="text-xs font-bold text-dora-deep mt-3 flex items-center gap-1">
            <Wifi className="w-3.5 h-3.5" />
            <span>Connect to {ssid}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// 34. WHATSAPP QR GENERATOR
export function WhatsappQrTool() {
  const [phone, setPhone] = useState("+919876543210");
  const [message, setMessage] = useState("Hi! I'd like to ask about your services.");
  const qrRef = useRef<HTMLDivElement>(null);

  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    if (qrRef.current) {
      renderQrToCanvas(qrRef.current, waUrl, "#059669");
    }
  }, [waUrl]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Direct WhatsApp Chat QR</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Phone Number (with Country Code):</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 9876543210"
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Pre-filled Greeting Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-24 px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-[#F8FBFF] border border-dora-border rounded-3xl">
          <div ref={qrRef} className="p-4 bg-white rounded-2xl shadow-xs" />
          <span className="text-xs font-bold text-emerald-700 mt-3 flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// 35. EMAIL QR GENERATOR
export function EmailQrTool() {
  const [email, setEmail] = useState("support@doratools.online");
  const [subject, setSubject] = useState("Inquiry regarding Dora Tools");
  const qrRef = useRef<HTMLDivElement>(null);

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  useEffect(() => {
    if (qrRef.current) {
      renderQrToCanvas(qrRef.current, mailto, "#7C3AED");
    }
  }, [mailto]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Pre-Addressed Mailto QR Code</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Recipient Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Default Subject Line:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-[#F8FBFF] border border-dora-border rounded-3xl">
          <div ref={qrRef} className="p-4 bg-white rounded-2xl shadow-xs" />
          <span className="text-xs font-bold text-purple-700 mt-3 flex items-center gap-1">
            <Mail className="w-3.5 h-3.5" />
            <span>Compose to {email}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
