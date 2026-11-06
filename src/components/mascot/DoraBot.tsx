"use client";

import React from "react";

export type DoraBotExpression =
  | "idle"
  | "happy"
  | "working"
  | "celebrating"
  | "thinking"
  | "waving";

interface DoraBotProps {
  expression?: DoraBotExpression;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  showSpeechBubble?: boolean;
  speechText?: string;
}

export function DoraBot({
  expression = "idle",
  size = "md",
  className = "",
  showSpeechBubble = false,
  speechText = "Hello! I'm DoraBot, your gadget companion!",
}: DoraBotProps) {
  const sizeMap = {
    sm: { width: 80, height: 95 },
    md: { width: 140, height: 165 },
    lg: { width: 200, height: 235 },
    xl: { width: 280, height: 330 },
    hero: { width: 360, height: 420 },
  };

  const { width, height } = sizeMap[size];

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Optional Speech Bubble */}
      {showSpeechBubble && (
        <div className="mb-3 px-4 py-2 bg-white/95 backdrop-blur-md border border-dora-border rounded-2xl shadow-dora-card text-dora-text text-sm font-medium animate-float-slow max-w-xs text-center relative">
          <span className="relative z-10">{speechText}</span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-dora-border rotate-45" />
        </div>
      )}

      {/* Mascot SVG */}
      <div className="relative group filter drop-shadow-lg">
        {/* Holographic Glowing Aura */}
        <div className="absolute inset-0 bg-gradient-to-t from-dora-sky/30 via-dora-blue/20 to-transparent rounded-full blur-2xl -z-10 animate-pulse-glow" />

        <svg
          width={width}
          height={height}
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 transform group-hover:scale-105"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="bodyBlue" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#4BB5FF" />
              <stop offset="65%" stopColor="#168DE2" />
              <stop offset="100%" stopColor="#0866B2" />
            </radialGradient>

            <radialGradient id="whitePlate" cx="45%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="85%" stopColor="#F0F7FF" />
              <stop offset="100%" stopColor="#D8ECFF" />
            </radialGradient>

            <linearGradient id="goldBell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF275" />
              <stop offset="50%" stopColor="#FFD84D" />
              <stop offset="100%" stopColor="#E6A800" />
            </linearGradient>

            <linearGradient id="redCollar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Golden Antenna with Pulsing Idea Sparkle */}
          <g className="animate-float">
            <line x1="100" y1="42" x2="100" y2="18" stroke="#168DE2" strokeWidth="4" strokeLinecap="round" />
            <circle cx="100" cy="14" r="8" fill="url(#goldBell)" filter="url(#softGlow)" />
            <circle cx="98" cy="11" r="3" fill="#FFFFFF" opacity="0.8" />
            {/* Sparkle Rays */}
            <path d="M100 2L100 6 M100 22L100 26 M88 14L92 14 M108 14L112 14" stroke="#FFD84D" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
          </g>

          {/* Left Foot */}
          <ellipse cx="70" cy="226" rx="24" ry="12" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="2" />
          {/* Right Foot */}
          <ellipse cx="130" cy="226" rx="24" ry="12" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="2" />

          {/* Robotic Body */}
          <ellipse cx="100" cy="165" rx="58" ry="52" fill="url(#bodyBlue)" />

          {/* White Belly Oval */}
          <ellipse cx="100" cy="172" rx="44" ry="38" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="1.5" />

          {/* Magical Dimensional Pocket ("The Infinite Gadget Pocket") */}
          <g>
            <path
              d="M72 166C72 166 76 198 100 198C124 198 128 166 128 166Z"
              fill="#FFFFFF"
              stroke="#168DE2"
              strokeWidth="2.5"
            />
            {/* Pocket Top Rim */}
            <path d="M70 166C70 166 85 169 100 169C115 169 130 166 130 166" stroke="#0866B2" strokeWidth="3" strokeLinecap="round" />
            {/* Pocket Depth Gradient */}
            <path d="M76 170C82 186 92 192 100 192C108 192 118 186 124 170" fill="#EAF5FF" opacity="0.7" />
          </g>

          {/* Left Arm & Hand */}
          <g>
            {expression === "waving" ? (
              // Normal resting left arm
              <ellipse cx="42" cy="170" rx="14" ry="14" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="2" />
            ) : expression === "celebrating" ? (
              // Raised left arm
              <g className="animate-bounce">
                <path d="M50 150Q30 130 35 110" stroke="#168DE2" strokeWidth="16" strokeLinecap="round" />
                <circle cx="34" cy="105" r="14" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="2" />
              </g>
            ) : (
              // Normal resting arm
              <g>
                <path d="M55 155Q42 165 42 175" stroke="#168DE2" strokeWidth="16" strokeLinecap="round" />
                <circle cx="40" cy="178" r="13" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="2" />
              </g>
            )}
          </g>

          {/* Right Arm & Hand */}
          <g>
            {expression === "waving" ? (
              // Animated Waving Right Hand
              <g className="animate-bounce origin-bottom-left">
                <path d="M145 155Q162 135 165 115" stroke="#168DE2" strokeWidth="16" strokeLinecap="round" />
                <circle cx="166" cy="110" r="14" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="2" />
                {/* Motion Lines */}
                <path d="M178 98C182 104 182 112 178 118" stroke="#64C8FF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M185 102C188 107 188 113 185 118" stroke="#64C8FF" strokeWidth="2" strokeLinecap="round" />
              </g>
            ) : expression === "celebrating" ? (
              // Raised right arm
              <g className="animate-bounce">
                <path d="M150 150Q170 130 165 110" stroke="#168DE2" strokeWidth="16" strokeLinecap="round" />
                <circle cx="166" cy="105" r="14" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="2" />
              </g>
            ) : (
              // Normal resting arm
              <g>
                <path d="M145 155Q158 165 158 175" stroke="#168DE2" strokeWidth="16" strokeLinecap="round" />
                <circle cx="160" cy="178" r="13" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="2" />
              </g>
            )}
          </g>

          {/* Head Sphere */}
          <circle cx="100" cy="90" r="62" fill="url(#bodyBlue)" />

          {/* White Face Plate */}
          <ellipse cx="100" cy="97" rx="52" ry="46" fill="url(#whitePlate)" stroke="#DDEEFF" strokeWidth="1.5" />

          {/* Whiskers / Acoustic Sensors */}
          <g stroke="#718096" strokeWidth="2" strokeLinecap="round" opacity="0.6">
            {/* Left Cheek */}
            <line x1="50" y1="92" x2="72" y2="94" />
            <line x1="48" y1="102" x2="72" y2="102" />
            <line x1="52" y1="112" x2="72" y2="110" />
            {/* Right Cheek */}
            <line x1="150" y1="92" x2="128" y2="94" />
            <line x1="152" y1="102" x2="128" y2="102" />
            <line x1="148" y1="112" x2="128" y2="110" />
          </g>

          {/* Cute Nose Button */}
          <circle cx="100" cy="85" r="9" fill="#FF4D4D" />
          <circle cx="97" cy="83" r="3" fill="#FFFFFF" opacity="0.8" />
          {/* Vertical Philtrum Line */}
          <line x1="100" y1="94" x2="100" y2="114" stroke="#17324D" strokeWidth="2" strokeLinecap="round" />

          {/* Expressive Eyes */}
          {expression === "happy" || expression === "celebrating" ? (
            // Curved joyous smiling eyes (^_^)
            <g stroke="#0866B2" strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M78 72Q88 62 96 72" />
              <path d="M104 72Q112 62 122 72" />
            </g>
          ) : expression === "working" ? (
            // Focused analytical lenses
            <g>
              <ellipse cx="88" cy="70" rx="11" ry="13" fill="#FFFFFF" stroke="#0866B2" strokeWidth="2.5" />
              <ellipse cx="112" cy="70" rx="11" ry="13" fill="#FFFFFF" stroke="#0866B2" strokeWidth="2.5" />
              <circle cx="89" cy="70" r="5" fill="#168DE2" />
              <circle cx="113" cy="70" r="5" fill="#168DE2" />
              {/* Working visor HUD glow */}
              <line x1="78" y1="64" x2="122" y2="64" stroke="#64C8FF" strokeWidth="2" opacity="0.8" />
            </g>
          ) : expression === "thinking" ? (
            // Inquisitive eyes looking up
            <g>
              <ellipse cx="88" cy="68" rx="11" ry="14" fill="#FFFFFF" stroke="#0866B2" strokeWidth="2.5" />
              <ellipse cx="112" cy="68" rx="11" ry="14" fill="#FFFFFF" stroke="#0866B2" strokeWidth="2.5" />
              <circle cx="91" cy="63" r="5" fill="#17324D" />
              <circle cx="115" cy="63" r="5" fill="#17324D" />
            </g>
          ) : (
            // Friendly wide open eyes
            <g>
              <ellipse cx="88" cy="70" rx="11" ry="14" fill="#FFFFFF" stroke="#0866B2" strokeWidth="2" />
              <ellipse cx="112" cy="70" rx="11" ry="14" fill="#FFFFFF" stroke="#0866B2" strokeWidth="2" />
              {/* Pupils */}
              <ellipse cx="90" cy="71" rx="4.5" ry="6" fill="#17324D" />
              <ellipse cx="110" cy="71" rx="4.5" ry="6" fill="#17324D" />
              {/* Eye Catchlights */}
              <circle cx="88.5" cy="68" r="2" fill="#FFFFFF" />
              <circle cx="108.5" cy="68" r="2" fill="#FFFFFF" />
            </g>
          )}

          {/* Mouth */}
          {expression === "happy" || expression === "celebrating" ? (
            // Big open happy mouth
            <path
              d="M80 114Q100 138 120 114Z"
              fill="#FF6B6B"
              stroke="#17324D"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          ) : expression === "waving" ? (
            // Cheerful smile
            <path d="M84 114Q100 130 116 114" stroke="#17324D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          ) : expression === "working" ? (
            // Determined slight smirk
            <path d="M90 118Q100 122 112 116" stroke="#17324D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          ) : (
            // Friendly soft smile
            <path d="M86 114Q100 126 114 114" stroke="#17324D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          )}

          {/* Red Collar Neck Ring */}
          <rect x="68" y="136" width="64" height="10" rx="5" fill="url(#redCollar)" />

          {/* Golden Gadget Core Bell */}
          <g>
            <circle cx="100" cy="148" r="10" fill="url(#goldBell)" stroke="#B48200" strokeWidth="1" filter="url(#softGlow)" />
            <circle cx="98" cy="146" r="3" fill="#FFFFFF" opacity="0.6" />
            {/* Bell Groove & Hole */}
            <line x1="91" y1="148" x2="109" y2="148" stroke="#785500" strokeWidth="1.5" />
            <circle cx="100" cy="152" r="2" fill="#422E00" />
          </g>
        </svg>
      </div>
    </div>
  );
}
