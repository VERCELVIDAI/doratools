import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dora: {
          blue: "#168DE2",
          deep: "#0866B2",
          sky: "#64C8FF",
          lightSky: "#EAF6FF",
          bg: "#F5FAFF",
          white: "#FFFFFF",
          yellow: "#FFD84D",
          orange: "#FF8C42",
          red: "#FF4D4D",
          green: "#10B981",
          text: "#17324D",
          textLight: "#718096",
          border: "#DDEEFF",
          glass: "rgba(255, 255, 255, 0.75)",
          glassBorder: "rgba(221, 238, 255, 0.8)",
          portal: "#168DE2",
        },
      },
      boxShadow: {
        'dora-sm': '0 2px 8px -2px rgba(22, 141, 226, 0.12), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'dora-card': '0 8px 30px -4px rgba(22, 141, 226, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'dora-hover': '0 20px 40px -8px rgba(22, 141, 226, 0.22), 0 4px 12px -2px rgba(22, 141, 226, 0.1)',
        'dora-glow': '0 0 35px -5px rgba(100, 200, 255, 0.5)',
        'dora-yellow-glow': '0 0 25px -4px rgba(255, 216, 77, 0.5)',
        'dora-inner': 'inset 0 2px 6px 0 rgba(255, 255, 255, 0.8), inset 0 -2px 6px 0 rgba(22, 141, 226, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        portalSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        sparkle: 'sparkle 2.5s ease-in-out infinite',
        'portal-spin': 'portalSpin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
