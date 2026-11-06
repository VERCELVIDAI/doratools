"use client";

import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { Download, Wifi, PhoneCall, Mail, Check, Copy } from "lucide-react";
import { recordToolActivity } from "@/lib/store";

function QrPreviewCard({ dataUrl, title, onDownload }: { dataUrl: string; title: string; onDownload: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#F8FBFF] border border-dora-border rounded-3xl">
      <div className="p-4 bg-white rounded-2xl shadow-xs border border-slate-100 flex items-center justify-center min-w-[200px] min-h-[200px]">
        {dataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={dataUrl} alt={title} className="w-52 h-52 object-contain" />
        ) : (
          <div className="w-5 h-5 border-2 border-dora-blue border-t-transparent rounded-full animate-spin" />
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={onDownload}
          className="px-4 py-2 rounded-xl bg-dora-blue text-white text-xs font-bold hover:bg-dora-deep flex items-center gap-1.5 transition-colors shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PNG</span>
        </button>
        <button
          onClick={handleCopy}
          className="px-3 py-2 rounded-xl bg-white border border-dora-border text-dora-text text-xs font-bold hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <span className="text-[11px] text-dora-textLight mt-2 font-semibold">Instant Live Camera Scan</span>
    </div>
  );
}

// 31. URL QR GENERATOR
export function UrlQrTool() {
  const [url, setUrl] = useState("https://www.doratools.online");
  const [color, setColor] = useState("#168DE2");
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    if (url) {
      QRCode.toDataURL(url, {
        width: 300,
        margin: 2,
        color: { dark: color, light: "#FFFFFF" },
      }).then(setQrDataUrl).catch(() => {});
    }
  }, [url, color]);

  const downloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "url-qr.png";
    a.click();
    recordToolActivity({
      toolSlug: "url-qr-generator",
      toolName: "URL QR Generator",
      categoryName: "QR Tools",
      summary: `Created QR code for ${url}`,
    });
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
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium text-dora-text focus:outline-none"
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
        </div>

        <QrPreviewCard dataUrl={qrDataUrl} title="URL QR" onDownload={downloadQr} />
      </div>
    </div>
  );
}

// 32. TEXT QR GENERATOR
export function TextQrTool() {
  const [text, setText] = useState("Dora Tools — Digital Gadget Universe!");
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    if (text) {
      QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
        color: { dark: "#17324D", light: "#FFFFFF" },
      }).then(setQrDataUrl).catch(() => {});
    }
  }, [text]);

  const downloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "text-qr.png";
    a.click();
    recordToolActivity({
      toolSlug: "text-qr-generator",
      toolName: "Text QR Generator",
      categoryName: "QR Tools",
      summary: `Created Text QR Code`,
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-dora-border shadow-dora-card space-y-6">
      <h2 className="text-xl font-bold text-dora-text">Offline Text & Secret Note QR</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <label className="block text-xs font-bold text-dora-text mb-1">Plain Text or Note:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-32 px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
          />
        </div>
        <QrPreviewCard dataUrl={qrDataUrl} title="Text QR" onDownload={downloadQr} />
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
  const [qrDataUrl, setQrDataUrl] = useState("");

  const wifiPayload = `WIFI:T:${encryption};S:${ssid};P:${password};H:${hidden ? "true" : "false"};;`;

  useEffect(() => {
    QRCode.toDataURL(wifiPayload, {
      width: 300,
      margin: 2,
      color: { dark: "#0866B2", light: "#FFFFFF" },
    }).then(setQrDataUrl).catch(() => {});
  }, [wifiPayload]);

  const downloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = `${ssid}-wifi-qr.png`;
    a.click();
    recordToolActivity({
      toolSlug: "wifi-qr-generator",
      toolName: "WiFi QR Generator",
      categoryName: "QR Tools",
      summary: `Created WiFi QR for ${ssid}`,
    });
  };

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
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">WiFi Password *</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
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

        <div className="space-y-2">
          <QrPreviewCard dataUrl={qrDataUrl} title="WiFi QR" onDownload={downloadQr} />
          <div className="text-center">
            <span className="text-xs font-bold text-dora-deep inline-flex items-center gap-1">
              <Wifi className="w-3.5 h-3.5 text-dora-blue" />
              <span>Connect to {ssid}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 34. WHATSAPP QR GENERATOR
export function WhatsappQrTool() {
  const [phone, setPhone] = useState("+919876543210");
  const [message, setMessage] = useState("Hi! I'd like to ask about your services.");
  const [qrDataUrl, setQrDataUrl] = useState("");

  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    QRCode.toDataURL(waUrl, {
      width: 300,
      margin: 2,
      color: { dark: "#059669", light: "#FFFFFF" },
    }).then(setQrDataUrl).catch(() => {});
  }, [waUrl]);

  const downloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "whatsapp-qr.png";
    a.click();
    recordToolActivity({
      toolSlug: "whatsapp-qr-generator",
      toolName: "WhatsApp QR Generator",
      categoryName: "QR Tools",
      summary: `Created WhatsApp QR for ${phone}`,
    });
  };

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
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Pre-filled Greeting Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-24 px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <QrPreviewCard dataUrl={qrDataUrl} title="WhatsApp QR" onDownload={downloadQr} />
          <div className="text-center">
            <span className="text-xs font-bold text-emerald-700 inline-flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Chat</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 35. EMAIL QR GENERATOR
export function EmailQrTool() {
  const [email, setEmail] = useState("support@doratools.online");
  const [subject, setSubject] = useState("Inquiry regarding Dora Tools");
  const [qrDataUrl, setQrDataUrl] = useState("");

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  useEffect(() => {
    QRCode.toDataURL(mailto, {
      width: 300,
      margin: 2,
      color: { dark: "#7C3AED", light: "#FFFFFF" },
    }).then(setQrDataUrl).catch(() => {});
  }, [mailto]);

  const downloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "email-qr.png";
    a.click();
    recordToolActivity({
      toolSlug: "email-qr-generator",
      toolName: "Email QR Generator",
      categoryName: "QR Tools",
      summary: `Created Email QR for ${email}`,
    });
  };

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
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-dora-text mb-1">Default Subject Line:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-dora-border bg-[#F8FBFF] text-xs font-medium focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <QrPreviewCard dataUrl={qrDataUrl} title="Email QR" onDownload={downloadQr} />
          <div className="text-center">
            <span className="text-xs font-bold text-purple-700 inline-flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Compose to {email}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
