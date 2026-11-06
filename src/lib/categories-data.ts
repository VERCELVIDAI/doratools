import { ToolCategory } from "./types";

export const CATEGORIES: ToolCategory[] = [
  {
    id: "cat-1",
    slug: "paper-portal",
    name: "PDF Tools",
    gadgetName: "Paper Portal",
    tagline: "Warp, merge, and transform your documents with magical precision",
    description: "Your digital gateway for document manipulation. Merge multiple PDFs into one, split pages, compress file sizes, and effortlessly convert between PDF and image formats directly in your browser without data leaving your device.",
    icon: "FileText",
    color: "#E11D48",
    gradient: "from-rose-500 to-red-600",
    accentColor: "rgba(225, 29, 72, 0.12)",
    toolsCount: 5,
    featuredTools: ["pdf-merger", "pdf-splitter", "pdf-compressor", "pdf-to-jpg", "jpg-to-pdf"]
  },
  {
    id: "cat-2",
    slug: "magic-lens",
    name: "Image Tools",
    gadgetName: "Magic Lens",
    tagline: "Clarify, crop, and transform visuals with crystal optics",
    description: "An enchanted magnifying lens that enhances your images in seconds. Compress file size while preserving fidelity, resize with aspect-ratio locks, crop visually, and convert between JPG, PNG, and WebP formats.",
    icon: "Image",
    color: "#8B5CF6",
    gradient: "from-purple-500 to-indigo-600",
    accentColor: "rgba(139, 92, 246, 0.12)",
    toolsCount: 5,
    featuredTools: ["image-compressor", "image-resizer", "image-cropper", "jpg-to-png", "webp-converter"]
  },
  {
    id: "cat-3",
    slug: "word-pocket",
    name: "Text Tools",
    gadgetName: "Word Pocket",
    tagline: "Pull out clean words, stats, and tidy formats on demand",
    description: "A pocket full of text utilities. Count words and reading duration in real-time, inspect character compositions, convert between letter cases, remove duplicate lines, and sanitize text instantly.",
    icon: "Type",
    color: "#0284C7",
    gradient: "from-sky-500 to-blue-600",
    accentColor: "rgba(2, 132, 199, 0.12)",
    toolsCount: 5,
    featuredTools: ["word-counter", "character-counter", "case-converter", "text-cleaner", "duplicate-line-remover"]
  },
  {
    id: "cat-4",
    slug: "code-capsule",
    name: "Developer Tools",
    gadgetName: "Code Capsule",
    tagline: "Instant developer utilities packaged in pocket-sized power",
    description: "Essential utilities for software engineers and makers. Format chaotic JSON, pinpoint syntax validation errors, minify payloads, encode/decode Base64 buffers, and sanitize URL strings instantly.",
    icon: "Code2",
    color: "#059669",
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "rgba(5, 150, 105, 0.12)",
    toolsCount: 5,
    featuredTools: ["json-formatter", "json-validator", "json-minifier", "base64-encoder-decoder", "url-encoder-decoder"]
  },
  {
    id: "cat-5",
    slug: "creator-compass",
    name: "Marketing Tools",
    gadgetName: "Creator Compass",
    tagline: "Point your campaigns toward viral reach and high conversions",
    description: "A navigational gadget for creators, founders, and marketers. Construct campaign UTM tags, find trending hashtags, generate engaging caption templates, and build high-CTR YouTube titles and tags.",
    icon: "Compass",
    color: "#EA580C",
    gradient: "from-orange-500 to-amber-600",
    accentColor: "rgba(234, 88, 12, 0.12)",
    toolsCount: 5,
    featuredTools: ["utm-builder", "hashtag-generator", "caption-template-builder", "youtube-title-builder", "youtube-tag-builder"]
  },
  {
    id: "cat-6",
    slug: "number-machine",
    name: "Calculators",
    gadgetName: "Number Machine",
    tagline: "Crunch financial and mathematical algorithms with effortless charm",
    description: "A high-precision arithmetic gadget. Compute percentages, calculate Indian GST with CGST/SGST/IGST breakdowns, calculate loan EMIs with amortization schedules, measure ROI, and optimize Ad CPC/CPM budgets.",
    icon: "Calculator",
    color: "#D97706",
    gradient: "from-amber-500 to-yellow-600",
    accentColor: "rgba(217, 119, 6, 0.12)",
    toolsCount: 5,
    featuredTools: ["percentage-calculator", "gst-calculator", "emi-calculator", "roi-calculator", "cpc-calculator"]
  },
  {
    id: "cat-7",
    slug: "scan-portal",
    name: "QR Tools",
    gadgetName: "Scan Portal",
    tagline: "Bridge the physical and digital universes with scannable codes",
    description: "Generate customized high-resolution QR codes for websites, plain text, WiFi networks, pre-filled WhatsApp chats, and email messages. Download in PNG or SVG with custom styling.",
    icon: "QrCode",
    color: "#7C3AED",
    gradient: "from-violet-500 to-purple-600",
    accentColor: "rgba(124, 58, 237, 0.12)",
    toolsCount: 5,
    featuredTools: ["url-qr-generator", "text-qr-generator", "wifi-qr-generator", "whatsapp-qr-generator", "email-qr-generator"]
  },
  {
    id: "cat-8",
    slug: "search-navigator",
    name: "SEO Tools",
    gadgetName: "Search Navigator",
    tagline: "Navigate search engine algorithms to claim the #1 ranking spot",
    description: "Comprehensive SEO enhancement gadgets. Generate click-worthy Meta Titles and Descriptions with character limits, create clean URL slugs, analyze keyword density, and craft Open Graph tags for social previews.",
    icon: "Search",
    color: "#2563EB",
    gradient: "from-blue-600 to-cyan-600",
    accentColor: "rgba(37, 99, 235, 0.12)",
    toolsCount: 5,
    featuredTools: ["meta-title-generator", "meta-description-generator", "slug-generator", "keyword-density-checker", "open-graph-tag-generator"]
  },
  {
    id: "cat-9",
    slug: "format-transformer",
    name: "File Converters",
    gadgetName: "Format Transformer",
    tagline: "Transmute file structures and formats in the blink of an eye",
    description: "Convert data and media structures across boundaries. Seamlessly convert PNG to JPG, JPG to WebP, vector SVG to high-res raster PNG, CSV spreadsheets to formatted JSON, and JSON data back to CSV tables.",
    icon: "RefreshCw",
    color: "#0D9488",
    gradient: "from-teal-500 to-emerald-600",
    accentColor: "rgba(13, 148, 136, 0.12)",
    toolsCount: 5,
    featuredTools: ["png-to-jpg", "jpg-to-webp", "svg-to-png", "csv-to-json", "json-to-csv"]
  },
  {
    id: "cat-10",
    slug: "smart-pocket",
    name: "Productivity Tools",
    gadgetName: "Smart Pocket",
    tagline: "Always prepared with business documents and task mastery",
    description: "Your daily professional companion. Draft and download GST-ready PDF Invoices, issue Cash Receipts, assemble modern ATS-friendly Resumes, organize interactive To-Do lists, and design print-ready Business Cards.",
    icon: "Sparkles",
    color: "#168DE2",
    gradient: "from-blue-500 to-sky-400",
    accentColor: "rgba(22, 141, 226, 0.12)",
    toolsCount: 5,
    featuredTools: ["invoice-generator", "receipt-generator", "resume-builder", "todo-list", "business-card-generator"]
  }
];

export function getCategoryBySlug(slug: string): ToolCategory | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
