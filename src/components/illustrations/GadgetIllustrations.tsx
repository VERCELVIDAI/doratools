"use client";

import React from "react";
import { ToolCategorySlug } from "@/lib/types";

interface GadgetIllustrationProps {
  categorySlug: ToolCategorySlug;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

export function GadgetIllustration({
  categorySlug,
  size = "md",
  className = "",
  animate = true,
}: GadgetIllustrationProps) {
  const sizeMap = {
    sm: 48,
    md: 80,
    lg: 120,
    xl: 180,
  };

  const dim = sizeMap[size];
  const animClass = animate ? "animate-float hover:scale-110 transition-transform duration-300" : "";

  switch (categorySlug) {
    case "paper-portal":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ppGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB7185" />
                <stop offset="100%" stopColor="#E11D48" />
              </linearGradient>
              <radialGradient id="portalRing" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF1F2" />
                <stop offset="60%" stopColor="#FDA4AF" />
                <stop offset="100%" stopColor="#E11D48" />
              </radialGradient>
            </defs>
            {/* Swirling Portal Oval */}
            <ellipse cx="50" cy="50" rx="44" ry="40" fill="url(#portalRing)" opacity="0.4" />
            <ellipse cx="50" cy="50" rx="38" ry="34" stroke="url(#ppGrad)" strokeWidth="3" strokeDasharray="6 4" />
            {/* Dimensional Stacked Paper entering portal */}
            <rect x="28" y="24" width="36" height="46" rx="4" fill="#FFFFFF" stroke="#FDA4AF" strokeWidth="2" transform="rotate(-8 28 24)" />
            <rect x="36" y="28" width="36" height="46" rx="4" fill="url(#ppGrad)" opacity="0.9" />
            {/* Paper Fold Corner */}
            <path d="M60 28L72 40H60V28Z" fill="#FECDD3" />
            {/* Text lines */}
            <line x1="42" y1="46" x2="64" y2="46" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="54" x2="60" y2="54" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="62" x2="54" y2="62" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            {/* Sparkles */}
            <circle cx="78" cy="22" r="3" fill="#FFD84D" />
            <circle cx="22" cy="74" r="2.5" fill="#FFD84D" />
          </svg>
        </div>
      );

    case "magic-lens":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lensRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
              <radialGradient id="glassFaceted" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#DDD6FE" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
              </radialGradient>
            </defs>
            {/* Magic Handle */}
            <path d="M66 66L88 88" stroke="url(#lensRing)" strokeWidth="10" strokeLinecap="round" />
            <path d="M66 66L88 88" stroke="#FFD84D" strokeWidth="3" strokeLinecap="round" />
            {/* Lens Outer Bezel */}
            <circle cx="45" cy="45" r="34" fill="#FFFFFF" stroke="url(#lensRing)" strokeWidth="6" />
            {/* Optical Glass Core */}
            <circle cx="45" cy="45" r="28" fill="url(#glassFaceted)" />
            {/* Lens Reflection Arc */}
            <path d="M28 32C32 24 44 20 54 22" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            {/* Center Image Aperture Star */}
            <circle cx="45" cy="45" r="7" fill="#FFFFFF" />
            <path d="M45 32V58M32 45H58" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
            <circle cx="78" cy="20" r="3" fill="#FFD84D" />
          </svg>
        </div>
      );

    case "word-pocket":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
            </defs>
            {/* Pocket Body */}
            <path d="M20 30H80C80 30 84 80 50 84C16 80 20 30 20 30Z" fill="url(#pocketGrad)" stroke="#0369A1" strokeWidth="3" />
            <path d="M16 30C16 30 35 34 50 34C65 34 84 30 84 30" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
            {/* Floating Magical Letter Glyphs emerging from pocket */}
            <rect x="36" y="16" width="28" height="28" rx="6" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2" transform="rotate(-10 36 16)" />
            <text x="44" y="34" fill="#0284C7" fontSize="16" fontWeight="bold" fontFamily="sans-serif">A</text>
            <text x="64" y="24" fill="#FFD84D" fontSize="13" fontWeight="bold" fontFamily="sans-serif">あ</text>
            <circle cx="24" cy="20" r="2.5" fill="#FFD84D" />
          </svg>
        </div>
      );

    case "code-capsule":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="capsuleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            {/* Dimensional Tech Capsule Pill tilted 45 deg */}
            <rect x="25" y="20" width="30" height="65" rx="15" fill="#FFFFFF" stroke="#059669" strokeWidth="3" transform="rotate(45 50 50)" />
            <path d="M36 31L69 64C74 59 74 51 69 46L54 31C49 26 41 26 36 31Z" fill="url(#capsuleGrad)" />
            {/* Code Brackets on glass side */}
            <path d="M42 56L36 62L42 68" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M58 56L64 62L58 68" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {/* Glowing Binary Core Ring */}
            <circle cx="50" cy="50" r="4" fill="#FFD84D" />
          </svg>
        </div>
      );

    case "creator-compass":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="compassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
            </defs>
            {/* Compass Outer Ring */}
            <circle cx="50" cy="50" r="38" fill="#FFFFFF" stroke="url(#compassGrad)" strokeWidth="4" />
            <circle cx="50" cy="50" r="32" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1.5" />
            {/* Cardinal Ticks */}
            <line x1="50" y1="20" x2="50" y2="25" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="50" y1="75" x2="50" y2="80" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="20" y1="50" x2="25" y2="50" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="75" y1="50" x2="80" y2="50" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
            {/* Magnetic Needle */}
            <polygon points="50,24 57,48 50,44 43,48" fill="#EA580C" />
            <polygon points="50,76 57,52 50,56 43,52" fill="#9A3412" />
            {/* Center Pivot */}
            <circle cx="50" cy="50" r="5" fill="#FFD84D" stroke="#EA580C" strokeWidth="2" />
          </svg>
        </div>
      );

    case "number-machine":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="calcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            {/* Machine Isometric Body */}
            <rect x="22" y="18" width="56" height="66" rx="10" fill="#FFFFFF" stroke="url(#calcGrad)" strokeWidth="3.5" />
            {/* Solar LED Display */}
            <rect x="30" y="26" width="40" height="18" rx="4" fill="#78350F" />
            <text x="36" y="40" fill="#FDE68A" fontSize="12" fontWeight="bold" fontFamily="monospace">₹8,888</text>
            {/* Keypad Buttons */}
            <circle cx="36" cy="54" r="4.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="50" cy="54" r="4.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="64" cy="54" r="4.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="36" cy="68" r="4.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="50" cy="68" r="4.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
            <circle cx="64" cy="68" r="4.5" fill="url(#calcGrad)" />
          </svg>
        </div>
      );

    case "scan-portal":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="qrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            {/* Holographic Target Frame */}
            <rect x="18" y="18" width="64" height="64" rx="8" fill="#FFFFFF" stroke="url(#qrGrad)" strokeWidth="3" />
            {/* QR Eyes */}
            <rect x="26" y="26" width="16" height="16" rx="3" fill="#7C3AED" />
            <rect x="30" y="30" width="8" height="8" rx="1.5" fill="#FFFFFF" />
            <rect x="58" y="26" width="16" height="16" rx="3" fill="#7C3AED" />
            <rect x="62" y="30" width="8" height="8" rx="1.5" fill="#FFFFFF" />
            <rect x="26" y="58" width="16" height="16" rx="3" fill="#7C3AED" />
            <rect x="30" y="62" width="8" height="8" rx="1.5" fill="#FFFFFF" />
            {/* Laser Scanning Beam */}
            <line x1="14" y1="50" x2="86" y2="50" stroke="#FFD84D" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="50" r="3" fill="#FFD84D" />
          </svg>
        </div>
      );

    case "search-navigator":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="searchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            {/* Radar Globe Background */}
            <circle cx="46" cy="46" r="30" fill="#EFF6FF" stroke="url(#searchGrad)" strokeWidth="3" />
            <ellipse cx="46" cy="46" rx="30" ry="12" stroke="#93C5FD" strokeWidth="1.5" fill="none" />
            <line x1="46" y1="16" x2="46" y2="76" stroke="#93C5FD" strokeWidth="1.5" />
            {/* Search Handle */}
            <path d="M68 68L86 86" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" />
            {/* #1 Ranking Flag */}
            <polygon points="46,28 58,34 46,40" fill="#FFD84D" />
            <line x1="46" y1="26" x2="46" y2="46" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "format-transformer":
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="transGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#0D9488" />
              </linearGradient>
            </defs>
            {/* Circular Orbiting Arrows */}
            <circle cx="50" cy="50" r="34" stroke="url(#transGrad)" strokeWidth="3.5" strokeDasharray="14 10" />
            <polygon points="50,12 58,20 42,20" fill="#0D9488" />
            <polygon points="50,88 42,80 58,80" fill="#0D9488" />
            {/* Two Transmuting Formats (File A -> File B) */}
            <rect x="26" y="38" width="22" height="26" rx="3" fill="#FFFFFF" stroke="#0D9488" strokeWidth="2" />
            <text x="29" y="54" fill="#0D9488" fontSize="8" fontWeight="bold">PNG</text>
            <rect x="52" y="38" width="22" height="26" rx="3" fill="url(#transGrad)" stroke="#115E59" strokeWidth="1.5" />
            <text x="54" y="54" fill="#FFFFFF" fontSize="8" fontWeight="bold">JPG</text>
          </svg>
        </div>
      );

    case "smart-pocket":
    default:
      return (
        <div className={`relative inline-flex items-center justify-center ${animClass} ${className}`}>
          <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="smartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64C8FF" />
                <stop offset="100%" stopColor="#168DE2" />
              </linearGradient>
            </defs>
            {/* Smart Pocket Badge */}
            <circle cx="50" cy="50" r="38" fill="#FFFFFF" stroke="url(#smartGrad)" strokeWidth="4" />
            <path d="M28 42C28 42 32 72 50 72C68 72 72 42 72 42Z" fill="url(#smartGrad)" />
            {/* Top Pocket Rim */}
            <path d="M26 42C26 42 38 45 50 45C62 45 74 42 74 42" stroke="#0866B2" strokeWidth="4" strokeLinecap="round" />
            {/* Glowing Golden Productivity Star */}
            <polygon
              points="50,22 53,30 62,31 55,37 57,45 50,40 43,45 45,37 38,31 47,30"
              fill="#FFD84D"
              stroke="#B48200"
              strokeWidth="1"
            />
          </svg>
        </div>
      );
  }
}
