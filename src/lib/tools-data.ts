import { ToolItem } from "./types";

export const TOOLS: ToolItem[] = [
  // --- Category 1: Paper Portal (PDF Tools) ---
  {
    id: "tool-1",
    slug: "pdf-merger",
    name: "PDF Merger",
    shortDesc: "Combine multiple PDF documents into a single organized file.",
    category: "paper-portal",
    categoryName: "PDF Tools",
    gadgetName: "Paper Portal",
    icon: "Combine",
    tags: ["pdf", "merge", "combine", "document"],
    isPopular: true,
    description: "The Paper Portal PDF Merger seamlessly binds several PDF files together in your desired order right inside your browser. No files are uploaded to an external server.",
    howToUse: [
      "Select or drag and drop two or more PDF files into the upload portal.",
      "Rearrange the order of documents by clicking the up and down arrows.",
      "Click 'Merge PDFs' to bundle them together.",
      "Download your newly assembled unified PDF file."
    ],
    features: [
      "100% Client-Side Processing for ultimate privacy",
      "Interactive page-order reordering",
      "Instant real-time merger with zero lag",
      "No file size or upload waiting"
    ],
    faqs: [
      { question: "Is my document secure?", answer: "Yes! Processing happens entirely in your local browser using WebAssembly and pdf-lib. No document data is transmitted over the internet." },
      { question: "How many files can I merge?", answer: "Free users can merge up to 5 documents simultaneously; Pro and Business subscribers can merge unlimited files." }
    ],
    supportedFormats: [".pdf"],
    maxFileSizeMB: 50
  },
  {
    id: "tool-2",
    slug: "pdf-splitter",
    name: "PDF Splitter",
    shortDesc: "Extract specific pages or page ranges from any PDF file.",
    category: "paper-portal",
    categoryName: "PDF Tools",
    gadgetName: "Paper Portal",
    icon: "Scissors",
    tags: ["pdf", "split", "extract", "pages"],
    isPopular: true,
    description: "Extract specific sections, individual pages, or custom page intervals (e.g. 1-3, 5, 8-10) with surgical precision.",
    howToUse: [
      "Upload your PDF document to the Paper Portal.",
      "Inspect total pages detected in your file.",
      "Enter the target page range (e.g., '1-2, 5') or select 'Split All Pages'.",
      "Click 'Split PDF' and download your customized PDF excerpt."
    ],
    features: [
      "Flexible page range syntax support (e.g. 1-4, 7, 9-12)",
      "Single-page extraction mode",
      "Preserves original document formatting and vector graphics",
      "Instant browser-based generation"
    ],
    faqs: [
      { question: "Can I extract non-consecutive pages?", answer: "Yes, simply use commas and hyphens like '1-3, 5, 7-9'." }
    ],
    supportedFormats: [".pdf"],
    maxFileSizeMB: 50
  },
  {
    id: "tool-3",
    slug: "pdf-compressor",
    name: "PDF Compressor",
    shortDesc: "Reduce PDF file size by stripping redundant streams and metadata.",
    category: "paper-portal",
    categoryName: "PDF Tools",
    gadgetName: "Paper Portal",
    icon: "Minimize2",
    tags: ["pdf", "compress", "shrink", "optimize"],
    isPopular: false,
    description: "Compress oversized PDF files for email attachments and portal submissions by eliminating duplicate objects and stream overhead.",
    howToUse: [
      "Upload your PDF into the compressor portal.",
      "Select your compression level (Standard or Maximum).",
      "Hit 'Compress PDF' to process the document streams.",
      "Preview the byte savings and download the optimized PDF."
    ],
    features: [
      "Pure in-browser stream compaction",
      "Detailed size reduction comparison",
      "No quality loss on text and vector curves",
      "Fast processing even for multi-page scans"
    ],
    faqs: [
      { question: "Does this alter my text?", answer: "No, textual content, fonts, and vector paths remain sharp and fully readable." }
    ],
    supportedFormats: [".pdf"],
    maxFileSizeMB: 50
  },
  {
    id: "tool-4",
    slug: "pdf-to-jpg",
    name: "PDF to JPG",
    shortDesc: "Convert PDF pages into high-clarity JPG images.",
    category: "paper-portal",
    categoryName: "PDF Tools",
    gadgetName: "Paper Portal",
    icon: "FileImage",
    tags: ["pdf", "jpg", "converter", "image"],
    isPopular: false,
    description: "Transform multi-page or single-page PDF files into crystal-clear JPG imagery for presentations, social media, and web embedding.",
    howToUse: [
      "Drag and drop your PDF into the Magic Paper Portal.",
      "Choose output image quality (Standard or Ultra-HD).",
      "Click 'Convert to JPG'.",
      "Download individual page JPGs or a single zipped archive."
    ],
    features: [
      "High-DPI canvas rendering",
      "Batch download as ZIP",
      "Individual page previews",
      "Local browser execution"
    ],
    faqs: [
      { question: "Can I convert protected PDFs?", answer: "PDFs with no password restrictions convert instantly. Passwords must be removed first." }
    ],
    supportedFormats: [".pdf"],
    maxFileSizeMB: 30
  },
  {
    id: "tool-5",
    slug: "jpg-to-pdf",
    name: "JPG to PDF",
    shortDesc: "Compile a collection of JPG images into a single clean PDF document.",
    category: "paper-portal",
    categoryName: "PDF Tools",
    gadgetName: "Paper Portal",
    icon: "FilePlus2",
    tags: ["jpg", "image", "pdf", "converter"],
    isPopular: false,
    description: "Package photos, receipts, identity proofs, and visual scans into a standardized, printable PDF file.",
    howToUse: [
      "Upload one or more JPG/PNG images.",
      "Re-order photos to match your preferred page order.",
      "Select page orientation (Portrait or Landscape) and margins.",
      "Click 'Generate PDF' and download immediately."
    ],
    features: [
      "Multi-image batch support",
      "Automatic page sizing and margin adjustment",
      "Instant PDF compilation",
      "Ideal for bills, receipts, and school/office submissions"
    ],
    faqs: [
      { question: "What image formats are supported?", answer: "JPG, JPEG, and PNG images are supported seamlessly." }
    ],
    supportedFormats: [".jpg", ".jpeg", ".png"],
    maxFileSizeMB: 40
  },

  // --- Category 2: Magic Lens (Image Tools) ---
  {
    id: "tool-6",
    slug: "image-compressor",
    name: "Image Compressor",
    shortDesc: "Shrink image file size with a live quality slider and real-time preview.",
    category: "magic-lens",
    categoryName: "Image Tools",
    gadgetName: "Magic Lens",
    icon: "Minimize",
    tags: ["image", "compress", "optimize", "photo"],
    isPopular: true,
    description: "The Magic Lens compressor slashes image payload sizes by up to 85% while keeping optical quality crisp, powered by HTML5 Canvas.",
    howToUse: [
      "Upload your PNG, JPG, or WebP photo.",
      "Adjust the interactive Quality slider (10% to 100%).",
      "Inspect the live side-by-side comparison and estimated file size.",
      "Click 'Download Compressed Image'."
    ],
    features: [
      "Live byte-size comparison and percentage reduction metric",
      "Canvas-powered hardware-accelerated compression",
      "Preserves original dimensions or allows optional downscaling",
      "Zero server latency"
    ],
    faqs: [
      { question: "Is this lossless or lossy?", answer: "It allows fine-grained lossy visual compression with adjustable quantization so you choose your balance of quality and size." }
    ],
    supportedFormats: [".jpg", ".jpeg", ".png", ".webp"],
    maxFileSizeMB: 25
  },
  {
    id: "tool-7",
    slug: "image-resizer",
    name: "Image Resizer",
    shortDesc: "Resize image pixel dimensions with aspect ratio lock and presets.",
    category: "magic-lens",
    categoryName: "Image Tools",
    gadgetName: "Magic Lens",
    icon: "Maximize2",
    tags: ["image", "resize", "scale", "dimensions"],
    isPopular: true,
    description: "Scale images to exact pixel widths, heights, or percentage values with intelligent aspect ratio preservation.",
    howToUse: [
      "Drop your image into the Magic Lens.",
      "Enter target width or height, or pick a popular preset (Instagram, Twitter, Full HD).",
      "Toggle 'Keep Aspect Ratio' to avoid stretching.",
      "Download the perfectly dimensioned graphic."
    ],
    features: [
      "Bicubic smoothing via Canvas 2D API",
      "Social media preset dimensions (Square, Story, Banner)",
      "Instant preview before saving",
      "Retains color fidelity"
    ],
    faqs: [
      { question: "Will my image look distorted?", answer: "No, keeping the aspect ratio lock enabled prevents any unnatural stretching." }
    ],
    supportedFormats: [".jpg", ".jpeg", ".png", ".webp"],
    maxFileSizeMB: 25
  },
  {
    id: "tool-8",
    slug: "image-cropper",
    name: "Image Cropper",
    shortDesc: "Crop images interactively with preset aspect ratios.",
    category: "magic-lens",
    categoryName: "Image Tools",
    gadgetName: "Magic Lens",
    icon: "Crop",
    tags: ["image", "crop", "cut", "aspect-ratio"],
    isPopular: false,
    description: "Frame and crop any photo to perfection using an intuitive bounding box with 1:1, 4:3, 16:9, or freeform crop ratios.",
    howToUse: [
      "Upload your photo to the Magic Lens cropper.",
      "Select an aspect ratio (1:1 Square, 16:9 Landscape, 4:5 Portrait, or Free).",
      "Drag the interactive cropping box over the focal area.",
      "Click 'Crop & Download'."
    ],
    features: [
      "Interactive drag-and-resize crop mask",
      "Standard aspect ratio presets",
      "Real-time crop preview",
      "Clean canvas pixel extraction"
    ],
    faqs: [
      { question: "Can I do circular crops?", answer: "You can crop to a 1:1 square, ideal for avatar upload requirements." }
    ],
    supportedFormats: [".jpg", ".jpeg", ".png", ".webp"],
    maxFileSizeMB: 25
  },
  {
    id: "tool-9",
    slug: "jpg-to-png",
    name: "JPG to PNG",
    shortDesc: "Convert JPG photos into lossless PNG format.",
    category: "magic-lens",
    categoryName: "Image Tools",
    gadgetName: "Magic Lens",
    icon: "FileType2",
    tags: ["jpg", "png", "convert", "image"],
    isPopular: false,
    description: "Convert compressed JPG files into uncompressed PNG graphics for graphic design workflows and transparency preparation.",
    howToUse: [
      "Select your JPG file.",
      "Review the source image preview.",
      "Click 'Convert to PNG'.",
      "Download the resulting crystal-clear PNG."
    ],
    features: [
      "Lossless canvas re-encoding",
      "Instant one-click operation",
      "Retains high resolution",
      "No quality degradation"
    ],
    faqs: [
      { question: "Does this add a transparent background?", answer: "JPGs do not carry alpha channels, so it creates an opaque PNG. You can edit further in graphic software." }
    ],
    supportedFormats: [".jpg", ".jpeg"],
    maxFileSizeMB: 20
  },
  {
    id: "tool-10",
    slug: "webp-converter",
    name: "WebP Converter",
    shortDesc: "Convert PNG and JPG images into modern high-efficiency WebP files.",
    category: "magic-lens",
    categoryName: "Image Tools",
    gadgetName: "Magic Lens",
    icon: "Sparkle",
    tags: ["webp", "converter", "speed", "performance"],
    isPopular: true,
    description: "Leverage Google's WebP format to deliver lightning-fast web pages. Slash payload sizes by 30-50% compared to JPG/PNG.",
    howToUse: [
      "Upload PNG or JPG files.",
      "Select WebP target quality (default: 85%).",
      "Click 'Transmute to WebP'.",
      "Download the lightweight modern web asset."
    ],
    features: [
      "Next-generation web image format",
      "Drastic bandwidth reduction for better Core Web Vitals",
      "Alpha channel transparency preserved for PNGs",
      "Instant client-side encoding"
    ],
    faqs: [
      { question: "Do all modern browsers support WebP?", answer: "Yes, Chrome, Safari, Firefox, and Edge all natively support WebP." }
    ],
    supportedFormats: [".jpg", ".jpeg", ".png"],
    maxFileSizeMB: 25
  },

  // --- Category 3: Word Pocket (Text Tools) ---
  {
    id: "tool-11",
    slug: "word-counter",
    name: "Word Counter",
    shortDesc: "Real-time word, character, sentence, and reading-time counter.",
    category: "word-pocket",
    categoryName: "Text Tools",
    gadgetName: "Word Pocket",
    icon: "FileSpreadsheet",
    tags: ["text", "counter", "words", "stats", "reading"],
    isPopular: true,
    description: "Drop your draft into the Word Pocket for instant deep analytics: word count, reading duration, speaking time, and sentence averages.",
    howToUse: [
      "Type or paste your text into the editor pocket.",
      "View live counters updating with every keystroke.",
      "Analyze reading time, speaking pace, and top keyword occurrences."
    ],
    features: [
      "Zero-latency real-time count",
      "Estimated reading time (200 wpm) and speaking time (130 wpm)",
      "Sentence, paragraph, and character metrics",
      "Copy or clear text with one click"
    ],
    faqs: [
      { question: "Is my text saved anywhere?", answer: "No, everything runs purely in your browser memory." }
    ]
  },
  {
    id: "tool-12",
    slug: "character-counter",
    name: "Character Counter",
    shortDesc: "Precise character analytics with and without spaces, Twitter limits, and SMS segments.",
    category: "word-pocket",
    categoryName: "Text Tools",
    gadgetName: "Word Pocket",
    icon: "Binary",
    tags: ["characters", "twitter", "sms", "counter"],
    isPopular: false,
    description: "Ideal for social media managers and copywriters adhering to strict platform character limits (Twitter/X, LinkedIn, Meta, SMS).",
    howToUse: [
      "Enter your copy into the input area.",
      "Check character meters for Twitter (280 limit), SMS (160 limit), and Meta descriptions.",
      "Copy sanitized copy directly to your clipboard."
    ],
    features: [
      "Live progress bar for Twitter/X character limits",
      "Breakdown of characters with spaces vs without spaces",
      "SMS segment calculator (160 GSM-7 / 70 UCS-2)",
      "Unicode and emoji counting accuracy"
    ],
    faqs: [
      { question: "Are emojis counted properly?", answer: "Yes, emojis and composite unicode glyphs are analyzed accurately." }
    ]
  },
  {
    id: "tool-13",
    slug: "case-converter",
    name: "Case Converter",
    shortDesc: "Transform text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, and kebab-case.",
    category: "word-pocket",
    categoryName: "Text Tools",
    gadgetName: "Word Pocket",
    icon: "CaseSensitive",
    tags: ["case", "uppercase", "lowercase", "title-case", "camelCase"],
    isPopular: true,
    description: "Instantly transmute text across 8 typography and code case formats with one click.",
    howToUse: [
      "Paste your text or code identifiers.",
      "Click your target transformation: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case, or CONSTANT_CASE.",
      "Copy transformed text to clipboard."
    ],
    features: [
      "8 dynamic case conversions",
      "Preserves spacing and punctuation where appropriate",
      "Code-friendly casing options for developers",
      "Instant one-click copy"
    ],
    faqs: [
      { question: "Does Title Case capitalize prepositions?", answer: "It follows standard style guidelines keeping small words (a, an, the, in, on) lowercase unless they start the sentence." }
    ]
  },
  {
    id: "tool-14",
    slug: "text-cleaner",
    name: "Text Cleaner",
    shortDesc: "Strip HTML tags, extra whitespace, line breaks, tabs, and unwanted symbols.",
    category: "word-pocket",
    categoryName: "Text Tools",
    gadgetName: "Word Pocket",
    icon: "Eraser",
    tags: ["cleaner", "strip-html", "whitespace", "format"],
    isPopular: false,
    description: "Sanitize messy copied text from emails, PDFs, and web pages. Strip HTML, normalize spaces, remove empty lines, and unwrap line breaks.",
    howToUse: [
      "Paste untidy text into the tool.",
      "Toggle your desired cleaners: Remove HTML, Remove Extra Spaces, Remove Blank Lines, Remove Tabs.",
      "Click 'Clean Text' and copy the pristine output."
    ],
    features: [
      "Regex-powered comprehensive cleaning",
      "Selective toggles for customized hygiene",
      "Strips invisible non-breaking spaces and formatting artifacts",
      "Instant preview"
    ],
    faqs: [
      { question: "Will it preserve paragraph structure?", answer: "Yes, you can choose whether to keep single line breaks while collapsing multi-line gaps." }
    ]
  },
  {
    id: "tool-15",
    slug: "duplicate-line-remover",
    name: "Duplicate Line Remover",
    shortDesc: "Remove duplicate lines from lists, logs, and datasets with optional sorting.",
    category: "word-pocket",
    categoryName: "Text Tools",
    gadgetName: "Word Pocket",
    icon: "ListFilter",
    tags: ["duplicates", "dedupe", "list", "lines", "sort"],
    isPopular: false,
    description: "Eliminate repetitive items from email lists, IP logs, keyword lists, or CSV rows in seconds.",
    howToUse: [
      "Paste your multi-line list.",
      "Select options: Case Sensitivity, Trim Whitespace, and Alphabetical Sort (A-Z or Z-A).",
      "Click 'Remove Duplicates'.",
      "Review the count of removed items and copy clean list."
    ],
    features: [
      "Case-sensitive or case-insensitive matching",
      "Built-in alphabetical and numerical sorting",
      "Duplicate count statistics",
      "Handles 100,000+ lines in milliseconds"
    ],
    faqs: [
      { question: "Can it sort my list alphabetically?", answer: "Yes, simply check the 'Sort A-Z' or 'Sort Z-A' checkbox." }
    ]
  },

  // --- Category 4: Code Capsule (Developer Tools) ---
  {
    id: "tool-16",
    slug: "json-formatter",
    name: "JSON Formatter",
    shortDesc: "Prettify and format chaotic JSON with customizable indentation and syntax coloring.",
    category: "code-capsule",
    categoryName: "Developer Tools",
    gadgetName: "Code Capsule",
    icon: "Code",
    tags: ["json", "format", "prettify", "developer"],
    isPopular: true,
    description: "Turn minified or messy JSON strings into beautifully organized, indented, and human-readable structures.",
    howToUse: [
      "Paste your raw JSON code into the Code Capsule.",
      "Select indentation (2 spaces, 4 spaces, or Tabs).",
      "Click 'Format JSON'.",
      "Copy formatted output or download as a .json file."
    ],
    features: [
      "Customizable indentation levels (2 spaces, 4 spaces, tab)",
      "Full syntax validation before formatting",
      "One-click copy and file download",
      "Handles massive payloads smoothly"
    ],
    faqs: [
      { question: "What if my JSON has a syntax error?", answer: "The tool will highlight the error location so you can rectify it." }
    ]
  },
  {
    id: "tool-17",
    slug: "json-validator",
    name: "JSON Validator",
    shortDesc: "Validate JSON syntax with exact line number, column, and error description.",
    category: "code-capsule",
    categoryName: "Developer Tools",
    gadgetName: "Code Capsule",
    icon: "CheckCircle",
    tags: ["json", "validate", "syntax", "lint"],
    isPopular: true,
    description: "Identify misplaced commas, missing quotes, unclosed braces, and illegal characters in JSON payloads with surgical precision.",
    howToUse: [
      "Paste your JSON payload into the validation chamber.",
      "Click 'Validate JSON'.",
      "If valid, see a green confirmation badge with key counts. If invalid, inspect the exact line and error cause."
    ],
    features: [
      "Pinpoints exact error location (line and character position)",
      "Detailed parsing diagnostics",
      "Type inspection (Object, Array, Primitives)",
      "Safe evaluation with zero execution danger"
    ],
    faqs: [
      { question: "Does it accept JSON with comments?", answer: "Standard JSON (RFC 8259) forbids comments; the validator adheres strictly to the official spec." }
    ]
  },
  {
    id: "tool-18",
    slug: "json-minifier",
    name: "JSON Minifier",
    shortDesc: "Compress JSON data by stripping whitespace and indentation for production.",
    category: "code-capsule",
    categoryName: "Developer Tools",
    gadgetName: "Code Capsule",
    icon: "Minimize2",
    tags: ["json", "minify", "compress", "payload"],
    isPopular: false,
    description: "Reduce API transmission payload sizes by stripping all unnecessary whitespace, line feeds, and indentation from JSON documents.",
    howToUse: [
      "Paste your formatted JSON payload.",
      "Click 'Minify JSON'.",
      "Observe byte savings and copy the compressed string."
    ],
    features: [
      "Extreme byte reduction for network transfer",
      "Validates syntax integrity before stripping spaces",
      "Displays size before vs after minification",
      "Instant execution"
    ],
    faqs: [
      { question: "Will minification change my data?", answer: "No, all keys, values, data types, and nesting remain 100% identical." }
    ]
  },
  {
    id: "tool-19",
    slug: "base64-encoder-decoder",
    name: "Base64 Encoder/Decoder",
    shortDesc: "Encode strings and files to Base64 or decode Base64 back to plain text/media.",
    category: "code-capsule",
    categoryName: "Developer Tools",
    gadgetName: "Code Capsule",
    icon: "Binary",
    tags: ["base64", "encode", "decode", "binary"],
    isPopular: true,
    description: "Safely encode and decode UTF-8 text strings, authentication tokens, and files to and from Base64 ASCII representation.",
    howToUse: [
      "Select 'Encode' or 'Decode' mode.",
      "Type or paste your input into the source box.",
      "View instant converted output with live copy capability."
    ],
    features: [
      "Full UTF-8 support with multi-byte characters and emojis",
      "Instant two-way conversion switch",
      "Data URL format generator for embedded images",
      "Copy output with a single click"
    ],
    faqs: [
      { question: "Does it support UTF-8 special characters?", answer: "Yes, our implementation handles emojis and international characters without mangling." }
    ]
  },
  {
    id: "tool-20",
    slug: "url-encoder-decoder",
    name: "URL Encoder/Decoder",
    shortDesc: "Encode strings into URL-safe percent-encoding or decode encoded URL parameters.",
    category: "code-capsule",
    categoryName: "Developer Tools",
    gadgetName: "Code Capsule",
    icon: "Link",
    tags: ["url", "encode", "decode", "query-params"],
    isPopular: false,
    description: "Convert special characters, spaces, and query parameters into standard percent-encoded format (RFC 3986) or parse encoded URLs.",
    howToUse: [
      "Choose Encode or Decode mode.",
      "Enter your query parameter string or full URL.",
      "Toggle between standard `encodeURI` or strict `encodeURIComponent`.",
      "Copy the safe URL output."
    ],
    features: [
      "RFC 3986 compliant percent-encoding",
      "Supports full URL or individual query parameter encoding",
      "Decode broken or double-encoded parameters",
      "Instant live conversion"
    ],
    faqs: [
      { question: "What is the difference between encodeURI and encodeURIComponent?", answer: "encodeURI preserves protocol slashes (http://) while encodeURIComponent encodes everything including slashes, which is needed for query parameter values." }
    ]
  },

  // --- Category 5: Creator Compass (Marketing Tools) ---
  {
    id: "tool-21",
    slug: "utm-builder",
    name: "UTM Builder",
    shortDesc: "Construct clean Google Analytics campaign tracking URLs with live preview.",
    category: "creator-compass",
    categoryName: "Marketing Tools",
    gadgetName: "Creator Compass",
    icon: "Compass",
    tags: ["utm", "analytics", "marketing", "tracking", "campaign"],
    isPopular: true,
    description: "Create standard Google Analytics UTM links with source, medium, campaign name, term, and content parameters.",
    howToUse: [
      "Enter your target Website URL.",
      "Fill in Campaign Source (e.g. google, newsletter, twitter).",
      "Fill in Campaign Medium (e.g. cpc, email, social).",
      "Enter Campaign Name and optional Term/Content.",
      "Copy your generated trackable URL or shortened version."
    ],
    features: [
      "Automatic URL sanitization and parameter encoding",
      "Live URL preview as you type",
      "Popular preset platforms (Meta Ads, Google Ads, Twitter, LinkedIn)",
      "One-click copy to clipboard"
    ],
    faqs: [
      { question: "Are UTM parameters case sensitive?", answer: "Google Analytics treats utm_source=Twitter and utm_source=twitter as two separate sources, so our builder offers auto-lowercasing." }
    ]
  },
  {
    id: "tool-22",
    slug: "hashtag-generator",
    name: "Hashtag Generator",
    shortDesc: "Generate categorized high-engagement hashtags for Instagram, TikTok, and LinkedIn.",
    category: "creator-compass",
    categoryName: "Marketing Tools",
    gadgetName: "Creator Compass",
    icon: "Hash",
    tags: ["hashtags", "instagram", "tiktok", "social", "viral"],
    isPopular: true,
    description: "Elevate your social media reach. Enter a keyword or niche to receive organized buckets of trending, high-volume, and niche hashtags.",
    howToUse: [
      "Enter your primary topic or niche (e.g. 'saas', 'fitness', 'travel', 'ai').",
      "Select platform (Instagram, TikTok, LinkedIn, or Twitter).",
      "Choose hashtag volume (Top, Medium, or Niche mix).",
      "Copy formatted hashtag set directly into your post."
    ],
    features: [
      "Platform-specific formatting guidelines",
      "Balanced hashtag tiers to avoid shadowbans",
      "One-click copy with space separations",
      "Keyword-based contextual generation"
    ],
    faqs: [
      { question: "How many hashtags should I use on Instagram?", answer: "Instagram officially recommends 3 to 5 targeted hashtags for optimal algorithmic categorization." }
    ]
  },
  {
    id: "tool-23",
    slug: "caption-template-builder",
    name: "Caption Template Builder",
    shortDesc: "Assemble high-converting social media captions with Hook, Story, Value, and CTA.",
    category: "creator-compass",
    categoryName: "Marketing Tools",
    gadgetName: "Creator Compass",
    icon: "MessageSquare",
    tags: ["caption", "copywriting", "hook", "social-media"],
    isPopular: false,
    description: "Write captivating social captions using proven copywriting formulas: Hook, Relatable Problem, Core Insight, and Call-to-Action.",
    howToUse: [
      "Choose a post archetype (Tutorial, Storytelling, Product Launch, Controversial Take).",
      "Fill in your core Hook, Key Insights, and desired Call-to-Action.",
      "Preview the formatted caption with clean line breaks.",
      "Copy and publish."
    ],
    features: [
      "Preserves clean line breaks for Instagram and LinkedIn",
      "Built-in library of 20+ viral hook formulas",
      "Engaging Call-to-Action templates",
      "Character counter integration"
    ],
    faqs: [
      { question: "Will Instagram collapse my line breaks?", answer: "No, our builder formats with invisible zero-width spaces so your formatting stays intact on mobile." }
    ]
  },
  {
    id: "tool-24",
    slug: "youtube-title-builder",
    name: "YouTube Title Builder",
    shortDesc: "Generate high-CTR, click-worthy YouTube video titles with curiosity and emotion.",
    category: "creator-compass",
    categoryName: "Marketing Tools",
    gadgetName: "Creator Compass",
    icon: "Video",
    tags: ["youtube", "title", "ctr", "video", "creator"],
    isPopular: true,
    description: "Generate dozens of viral YouTube video titles tailored to your topic, using high-performing formulas (Curiosity Gap, Listicle, vs, How-To, Warning).",
    howToUse: [
      "Enter your video topic or primary keyword.",
      "Select your video genre (Educational, Entertainment, Tech Review, Vlog).",
      "Browse generated titles grouped by emotional angle.",
      "Copy your favorite title."
    ],
    features: [
      "Algorithm-tested CTR headline frameworks",
      "Title length meter (optimal 50-70 characters for mobile display)",
      "Curiosity and urgency modifiers",
      "Filter by style: Minimalist, Shocking, Analytical, or Question"
    ],
    faqs: [
      { question: "What is the best YouTube title length?", answer: "Under 70 characters ensures titles are never cut off with ellipses on mobile screens." }
    ]
  },
  {
    id: "tool-25",
    slug: "youtube-tag-builder",
    name: "YouTube Tag Builder",
    shortDesc: "Generate comma-separated SEO tags and keywords for YouTube video uploads.",
    category: "creator-compass",
    categoryName: "Marketing Tools",
    gadgetName: "Creator Compass",
    icon: "Tags",
    tags: ["youtube", "tags", "seo", "keywords"],
    isPopular: false,
    description: "Build an optimized set of YouTube video tags containing primary keywords, long-tail variations, and common misspelling captures under the 500-character cap.",
    howToUse: [
      "Enter your main video subject.",
      "Select suggested related tag clusters.",
      "Monitor the total character count progress toward the 500-character limit.",
      "Click 'Copy Tags' to paste directly into YouTube Studio."
    ],
    features: [
      "Exact 500-character YouTube Studio meter",
      "Comma-separated format ready for copy-pasting",
      "Includes broad, specific, and long-tail variants",
      "Remove or add individual tags dynamically"
    ],
    faqs: [
      { question: "Where do I paste these tags in YouTube?", answer: "In YouTube Studio under Video Details > 'Show More' > 'Tags'." }
    ]
  },

  // --- Category 6: Number Machine (Calculators) ---
  {
    id: "tool-26",
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    shortDesc: "Solve percentage increase, decrease, discount, and proportion problems instantly.",
    category: "number-machine",
    categoryName: "Calculators",
    gadgetName: "Number Machine",
    icon: "Percent",
    tags: ["percentage", "math", "discount", "calculator"],
    isPopular: true,
    description: "Effortlessly compute 'What is X% of Y?', percentage increase/decrease between two values, and final price after discount.",
    howToUse: [
      "Choose your calculation formula tab.",
      "Input the numbers into the respective fields.",
      "View instant step-by-step breakdown and percentage result."
    ],
    features: [
      "4 versatile calculation modes",
      "Step-by-step mathematical explanation",
      "Formatted currency and percentage outputs",
      "Instant responsive recalculation"
    ],
    faqs: [
      { question: "Can it calculate negative percentages?", answer: "Yes, decreases show clearly as negative percentage drops." }
    ]
  },
  {
    id: "tool-27",
    slug: "gst-calculator",
    name: "GST Calculator",
    shortDesc: "Calculate Indian Goods & Services Tax (GST) with CGST, SGST, and IGST breakdowns.",
    category: "number-machine",
    categoryName: "Calculators",
    gadgetName: "Number Machine",
    icon: "Coins",
    tags: ["gst", "tax", "india", "finance", "cgst", "sgst"],
    isPopular: true,
    description: "Standard Indian GST calculator supporting 5%, 12%, 18%, and 28% slabs. Calculate Inclusive or Exclusive GST with automatic CGST + SGST or IGST bifurcation.",
    howToUse: [
      "Enter the base or total amount in ₹ (INR).",
      "Select GST rate slab (5%, 12%, 18%, 28%, or custom).",
      "Choose 'GST Exclusive' (Add GST) or 'GST Inclusive' (Remove GST).",
      "Pick transaction type (Intra-State: CGST+SGST, or Inter-State: IGST).",
      "View total tax, net amount, and itemized bill preview."
    ],
    features: [
      "Standard government GST slabs (5%, 12%, 18%, 28%)",
      "Inclusive & Exclusive mode calculations",
      "Clear CGST + SGST (50/50 split) and IGST display",
      "Printable invoice breakdown summary"
    ],
    faqs: [
      { question: "When do I apply CGST + SGST vs IGST?", answer: "If buyer and seller are in the same state, apply CGST + SGST. If in different states, apply IGST." }
    ]
  },
  {
    id: "tool-28",
    slug: "emi-calculator",
    name: "EMI Calculator",
    shortDesc: "Calculate Equated Monthly Installment for home, car, or personal loans with amortization.",
    category: "number-machine",
    categoryName: "Calculators",
    gadgetName: "Number Machine",
    icon: "CreditCard",
    tags: ["emi", "loan", "interest", "finance", "bank"],
    isPopular: true,
    description: "Calculate your exact monthly loan repayments, total interest payable, and overall payout with an interactive visual pie breakdown.",
    howToUse: [
      "Set Loan Amount (Principal) using slider or input.",
      "Set Annual Interest Rate (%).",
      "Set Loan Tenure in Years or Months.",
      "Review Monthly EMI, Total Interest, and Total Amount."
    ],
    features: [
      "Interactive sliders with real-time numeric inputs",
      "Visual Principal vs Interest ratio breakdown",
      "Monthly amortization schedule table",
      "Currency formatting in Indian Lakhs/Crores & International"
    ],
    faqs: [
      { question: "What formula is used for EMI?", answer: "Standard reducing balance formula: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]." }
    ]
  },
  {
    id: "tool-29",
    slug: "roi-calculator",
    name: "ROI Calculator",
    shortDesc: "Measure Return on Investment, net profit, and annualized ROI percentages.",
    category: "number-machine",
    categoryName: "Calculators",
    gadgetName: "Number Machine",
    icon: "TrendingUp",
    tags: ["roi", "investment", "finance", "profit", "business"],
    isPopular: false,
    description: "Evaluate the profitability of marketing campaigns, business investments, stocks, or real estate opportunities.",
    howToUse: [
      "Enter Initial Amount Invested.",
      "Enter Final Amount Returned (or Total Revenue).",
      "Optionally enter Investment Duration in years for annualized rate.",
      "View ROI %, Total Net Profit, and Capital Multiple."
    ],
    features: [
      "Simple ROI and Annualized (CAGR) ROI calculation",
      "Profit / Loss distinction with dynamic styling",
      "Capital multiplier metric (e.g. 2.4x)",
      "Clear financial summary card"
    ],
    faqs: [
      { question: "How is Annualized ROI calculated?", answer: "Annualized ROI accounts for compound growth over multiple years: ((Final/Initial)^(1/Years) - 1) * 100." }
    ]
  },
  {
    id: "tool-30",
    slug: "cpc-calculator",
    name: "CPC Calculator",
    shortDesc: "Calculate Cost Per Click, CTR, Impressions, Clicks, and CPM for ad campaigns.",
    category: "number-machine",
    categoryName: "Calculators",
    gadgetName: "Number Machine",
    icon: "Target",
    tags: ["cpc", "cpm", "ctr", "ads", "google-ads", "meta-ads"],
    isPopular: false,
    description: "Plan and analyze paid media campaigns across Google Ads, Meta Ads, and LinkedIn. Calculate CPC, CTR, and necessary budget seamlessly.",
    howToUse: [
      "Select target metric to solve for (CPC, Total Cost, Clicks, or CTR).",
      "Enter your known parameters (e.g. Total Ad Spend and Total Clicks).",
      "Click Calculate to view unit costs and marketing metrics."
    ],
    features: [
      "Calculates CPC, CPM (Cost per Mille), and CTR %",
      "Supports budget forecasting",
      "Interactive multi-metric solver",
      "Clear marketing efficiency indicators"
    ],
    faqs: [
      { question: "What is a healthy CTR for search ads?", answer: "Standard Google Search benchmarks hover between 3% to 5% across general industries." }
    ]
  },

  // --- Category 7: Scan Portal (QR Tools) ---
  {
    id: "tool-31",
    slug: "url-qr-generator",
    name: "URL QR Generator",
    shortDesc: "Generate high-resolution scannable QR codes for website URLs.",
    category: "scan-portal",
    categoryName: "QR Tools",
    gadgetName: "Scan Portal",
    icon: "QrCode",
    tags: ["qr", "url", "website", "generator", "scan"],
    isPopular: true,
    description: "Turn website links, landing pages, and portfolio URLs into scannable QR codes with custom foreground and background colors.",
    howToUse: [
      "Enter your website address (e.g., https://doratools.online).",
      "Customize QR color and background color.",
      "Select resolution size (256px to 1024px).",
      "Download high-resolution PNG or SVG."
    ],
    features: [
      "High-error-correction redundancy (Level H)",
      "Customizable foreground and background color pickers",
      "Instant real-time live preview",
      "PNG and SVG vector downloads"
    ],
    faqs: [
      { question: "Do these QR codes expire?", answer: "No! They are direct static QR codes that point directly to your URL and will never expire." }
    ]
  },
  {
    id: "tool-32",
    slug: "text-qr-generator",
    name: "Text QR Generator",
    shortDesc: "Encode plain text, secret notes, serial numbers, or instructions into a QR code.",
    category: "scan-portal",
    categoryName: "QR Tools",
    gadgetName: "Scan Portal",
    icon: "FileText",
    tags: ["qr", "text", "notes", "generator"],
    isPopular: false,
    description: "Convert freeform text, serial keys, inventory notes, or secret messages into a fast-scanning offline QR code.",
    howToUse: [
      "Type or paste your message into the text area.",
      "Watch the QR code adapt in real time.",
      "Download the image for print or digital sharing."
    ],
    features: [
      "Works 100% offline when scanned",
      "Supports unicode and multi-language scripts",
      "Error correction prevents damage reading issues",
      "Direct clipboard copy or download"
    ],
    faqs: [
      { question: "Can anyone read this text?", answer: "Any standard smartphone camera will display the decoded text upon scanning." }
    ]
  },
  {
    id: "tool-33",
    slug: "wifi-qr-generator",
    name: "WiFi QR Generator",
    shortDesc: "Allow guests to join your WiFi network instantly without typing passwords.",
    category: "scan-portal",
    categoryName: "QR Tools",
    gadgetName: "Scan Portal",
    icon: "Wifi",
    tags: ["wifi", "qr", "network", "connect", "password"],
    isPopular: true,
    description: "Generate a convenient WiFi access QR code for homes, offices, cafes, and hotels. Guests simply scan with their phone camera to connect.",
    howToUse: [
      "Enter your Network Name (SSID).",
      "Choose Encryption Type (WPA/WPA2/WPA3 or WEP).",
      "Enter your WiFi Password.",
      "Check 'Hidden Network' if your SSID is not broadcasting.",
      "Print or download the generated QR card."
    ],
    features: [
      "Fully compatible with iOS and Android native camera scanners",
      "No app installation required for your guests",
      "Hidden SSID network support",
      "Printable table-tent display card format"
    ],
    faqs: [
      { question: "Is my WiFi password sent to your servers?", answer: "Never! The WiFi QR format string (WIFI:S:..;P:..;;) is compiled completely in your local browser." }
    ]
  },
  {
    id: "tool-34",
    slug: "whatsapp-qr-generator",
    name: "WhatsApp QR Generator",
    shortDesc: "Create QR codes that open a pre-filled WhatsApp conversation with your number.",
    category: "scan-portal",
    categoryName: "QR Tools",
    gadgetName: "Scan Portal",
    icon: "PhoneCall",
    tags: ["whatsapp", "qr", "chat", "contact", "support"],
    isPopular: true,
    description: "Empower customers and clients to initiate a direct WhatsApp chat with your business or support desk with an optional pre-typed greeting message.",
    howToUse: [
      "Enter Country Code and Phone Number (e.g. +91 9876543210).",
      "Type an optional pre-filled greeting message (e.g., 'Hi, I would like to inquire about...').",
      "Generate and download your custom WhatsApp QR code."
    ],
    features: [
      "Pre-filled starter message for faster customer inquiries",
      "International country code support",
      "Direct `wa.me` protocol integration",
      "Ideal for packaging, posters, and business cards"
    ],
    faqs: [
      { question: "Does the user need to save my number first?", answer: "No! Scanning immediately launches WhatsApp directly into chat mode with you." }
    ]
  },
  {
    id: "tool-35",
    slug: "email-qr-generator",
    name: "Email QR Generator",
    shortDesc: "Generate QR codes that launch a pre-addressed email draft with subject and body.",
    category: "scan-portal",
    categoryName: "QR Tools",
    gadgetName: "Scan Portal",
    icon: "Mail",
    tags: ["email", "qr", "mailto", "contact"],
    isPopular: false,
    description: "Generate a scannable mailto QR code. When scanned, it opens the user's default email client with your email address, subject, and message pre-populated.",
    howToUse: [
      "Enter recipient Email Address.",
      "Add Subject Line.",
      "Add default Message Body template.",
      "Download and place on flyers, business cards, or event booths."
    ],
    features: [
      "RFC standard mailto protocol encoding",
      "Works on iOS Mail, Gmail, Outlook, and all native clients",
      "Reduces customer friction for RSVPs and feedback",
      "PNG and vector SVG options"
    ],
    faqs: [
      { question: "Can I include multiple recipients?", answer: "Yes, you can separate multiple email addresses with a comma." }
    ]
  },

  // --- Category 8: Search Navigator (SEO Tools) ---
  {
    id: "tool-36",
    slug: "meta-title-generator",
    name: "Meta Title Generator",
    shortDesc: "Create click-worthy, search-optimized title tags under 60 characters with SERP preview.",
    category: "search-navigator",
    categoryName: "SEO Tools",
    gadgetName: "Search Navigator",
    icon: "Globe",
    tags: ["seo", "meta-title", "serp", "google", "ctr"],
    isPopular: true,
    description: "Craft pixel-perfect meta titles that prevent Google truncation. Includes live Google Search desktop and mobile SERP snippet previews.",
    howToUse: [
      "Enter your Target Keyword and Brand Name.",
      "Choose a title structure (e.g., Keyword | Brand, Action + Keyword, Question).",
      "Monitor the character length gauge (ideal: 50-60 characters).",
      "Inspect the live Google SERP simulation and copy the HTML tag."
    ],
    features: [
      "Live Google Desktop & Mobile SERP preview simulator",
      "Pixel-width truncation detector (approx 580px limit)",
      "HTML `<title>` tag code copy",
      "Power-word suggestions for CTR boost"
    ],
    faqs: [
      { question: "What happens if a title is too long?", answer: "Google truncates titles over ~60 characters with ellipses (...), reducing click-through rates." }
    ]
  },
  {
    id: "tool-37",
    slug: "meta-description-generator",
    name: "Meta Description Generator",
    shortDesc: "Craft persuasive search snippet descriptions with character and pixel counters.",
    category: "search-navigator",
    categoryName: "SEO Tools",
    gadgetName: "Search Navigator",
    icon: "FileText",
    tags: ["seo", "meta-description", "google", "search"],
    isPopular: true,
    description: "Build compelling 150-160 character meta descriptions that maximize click-through rates from search results.",
    howToUse: [
      "Enter your page summary or primary value proposition.",
      "Include your call-to-action (e.g., 'Discover more', 'Try free today').",
      "Keep the meter inside the green 120-160 character sweet spot.",
      "Copy the finished `<meta name='description'>` tag."
    ],
    features: [
      "Character and pixel counter with visual traffic-light indicators",
      "Live Google snippet rendering",
      "Call-to-Action enhancer presets",
      "Automated quotes and character escaping"
    ],
    faqs: [
      { question: "Does meta description affect rankings directly?", answer: "While not a direct ranking signal, an enticing description boosts CTR, which strongly influences rankings." }
    ]
  },
  {
    id: "tool-38",
    slug: "slug-generator",
    name: "Slug Generator",
    shortDesc: "Convert article titles into clean, URL-safe SEO slugs with stop-word removal.",
    category: "search-navigator",
    categoryName: "SEO Tools",
    gadgetName: "Search Navigator",
    icon: "CornerDownRight",
    tags: ["slug", "url", "seo", "permalink"],
    isPopular: false,
    description: "Transform raw headlines and article titles into clean, hyphen-separated, lowercase URL slugs stripped of special characters and stop words.",
    howToUse: [
      "Paste your headline (e.g., '10 Best Magical Gadgets in 2026: A Deep Dive!').",
      "Select options: Remove Stop Words (the, a, in), Lowercase, Separator (- or _).",
      "Copy your pristine permalink slug: `10-best-magical-gadgets-2026-deep-dive`."
    ],
    features: [
      "Automatic stop-word filter for cleaner URLs",
      "Accented character and umlaut transliteration",
      "Custom separator selection (hyphens or underscores)",
      "Instant copy for WordPress, Next.js, and headless CMSs"
    ],
    faqs: [
      { question: "Why remove stop words?", answer: "Shorter, focused URLs emphasize core keywords for search spiders and are easier for users to share." }
    ]
  },
  {
    id: "tool-39",
    slug: "keyword-density-checker",
    name: "Keyword Density Checker",
    shortDesc: "Analyze single-word and multi-word phrase frequencies to avoid keyword stuffing.",
    category: "search-navigator",
    categoryName: "SEO Tools",
    gadgetName: "Search Navigator",
    icon: "BarChart3",
    tags: ["keyword", "density", "seo", "content", "stuffing"],
    isPopular: false,
    description: "Scan your content for 1-word, 2-word, and 3-word phrase frequency percentages to ensure natural semantic distribution and avoid search penalties.",
    howToUse: [
      "Paste your blog post or landing page copy.",
      "Click 'Analyze Content'.",
      "Review the top keyword tables sorted by frequency and density percentage.",
      "Adjust keywords exceeding the recommended 1.5% - 2.5% density threshold."
    ],
    features: [
      "1-word, 2-word, and 3-word n-gram frequency analysis",
      "Stop-word filtering (ignores common words like 'the', 'is', 'and')",
      "Over-optimization warnings for density > 3%",
      "Total word count and reading metrics"
    ],
    faqs: [
      { question: "What is an ideal keyword density?", answer: "Generally between 1% to 2.5% is considered natural by modern semantic search engines." }
    ]
  },
  {
    id: "tool-40",
    slug: "open-graph-tag-generator",
    name: "Open Graph Tag Generator",
    shortDesc: "Generate Open Graph and Twitter Card meta tags for rich social media cards.",
    category: "search-navigator",
    categoryName: "SEO Tools",
    gadgetName: "Search Navigator",
    icon: "Share2",
    tags: ["open-graph", "og", "social", "twitter-cards", "meta"],
    isPopular: true,
    description: "Create standard Open Graph (`og:title`, `og:image`, `og:url`) and Twitter Card tags to ensure stunning link preview cards on Facebook, LinkedIn, X, and Slack.",
    howToUse: [
      "Enter Page Title, Description, Canonical URL, and Image URL.",
      "Select Content Type (website, article, product).",
      "Select Twitter Card Type (summary_large_image or summary).",
      "Preview the visual card and copy the HTML snippet into your `<head>`."
    ],
    features: [
      "Simulated social media share preview card",
      "Standard Facebook Open Graph + Twitter Card syntax",
      "One-click copy to clipboard",
      "Validates recommended image dimension ratios (1200x630)"
    ],
    faqs: [
      { question: "What is the best image size for Open Graph?", answer: "1200 x 630 pixels (1.91:1 aspect ratio) displays crisply on all platforms." }
    ]
  },

  // --- Category 9: Format Transformer (File Converters) ---
  {
    id: "tool-41",
    slug: "png-to-jpg",
    name: "PNG to JPG",
    shortDesc: "Convert PNG images to JPG with selectable background fill and quality.",
    category: "format-transformer",
    categoryName: "File Converters",
    gadgetName: "Format Transformer",
    icon: "Image",
    tags: ["png", "jpg", "converter", "image"],
    isPopular: false,
    description: "Convert transparent or heavy PNG graphics into standard JPG images with a clean white or customized background fill.",
    howToUse: [
      "Upload your PNG file.",
      "Select background replacement color (default: Pure White #FFFFFF).",
      "Adjust JPG compression quality (10% to 100%).",
      "Click 'Convert to JPG' and download."
    ],
    features: [
      "Custom background color fill for transparent areas",
      "Quality and compression slider",
      "Fast Canvas 2D engine",
      "Batch conversion support"
    ],
    faqs: [
      { question: "Why do transparent PNGs turn black in some converters?", answer: "Because JPG does not support transparency. Our tool fills transparent pixels with pure white by default." }
    ],
    supportedFormats: [".png"],
    maxFileSizeMB: 25
  },
  {
    id: "tool-42",
    slug: "jpg-to-webp",
    name: "JPG to WebP",
    shortDesc: "Convert standard JPG photos into modern ultra-lightweight WebP files.",
    category: "format-transformer",
    categoryName: "File Converters",
    gadgetName: "Format Transformer",
    icon: "Sparkles",
    tags: ["jpg", "webp", "compress", "converter"],
    isPopular: true,
    description: "Modernize your image assets. WebP reduces JPEG file sizes by an average of 30% without visible loss of sharpness.",
    howToUse: [
      "Upload your JPG photo.",
      "Set desired WebP quality percentage (default 80%).",
      "Click 'Convert to WebP'.",
      "Download your modern web image asset."
    ],
    features: [
      "Dramatically reduced load times for web pages",
      "Preserves color profile and crispness",
      "Real-time file size comparison",
      "Instant browser conversion"
    ],
    faqs: [
      { question: "Will my website load faster with WebP?", answer: "Yes, Google PageSpeed specifically recommends serving images in next-gen formats like WebP." }
    ],
    supportedFormats: [".jpg", ".jpeg"],
    maxFileSizeMB: 25
  },
  {
    id: "tool-43",
    slug: "svg-to-png",
    name: "SVG to PNG",
    shortDesc: "Rasterize vector SVG files into high-resolution PNG images up to 4K.",
    category: "format-transformer",
    categoryName: "File Converters",
    gadgetName: "Format Transformer",
    icon: "FileCode",
    tags: ["svg", "png", "vector", "raster", "converter"],
    isPopular: true,
    description: "Render scalable vector graphics (SVG) into crisp, transparent PNG images at any resolution (1x, 2x, 4x, or custom pixel width).",
    howToUse: [
      "Upload your .svg file or paste raw SVG markup.",
      "Choose output scale multiplier (1x, 2x, 4x) or custom width.",
      "Click 'Render PNG'.",
      "Download your high-resolution raster graphic."
    ],
    features: [
      "Lossless vector scaling up to 4096px width",
      "Preserves transparent backgrounds flawlessly",
      "Live vector preview before rasterization",
      "No raster blurriness or pixelation"
    ],
    faqs: [
      { question: "Will the exported PNG have transparent background?", answer: "Yes, all transparent regions in your SVG vector will remain completely transparent in the PNG." }
    ],
    supportedFormats: [".svg"],
    maxFileSizeMB: 10
  },
  {
    id: "tool-44",
    slug: "csv-to-json",
    name: "CSV to JSON",
    shortDesc: "Parse CSV spreadsheet rows into structured JSON arrays and objects.",
    category: "format-transformer",
    categoryName: "File Converters",
    gadgetName: "Format Transformer",
    icon: "Table",
    tags: ["csv", "json", "spreadsheet", "converter", "data"],
    isPopular: true,
    description: "Convert comma-separated tabular data from Excel, Google Sheets, or databases into clean, valid JSON arrays of objects.",
    howToUse: [
      "Paste your CSV text or upload a .csv file.",
      "Choose parsing options: First row as headers, auto-detect numbers and booleans.",
      "Click 'Convert to JSON'.",
      "Copy formatted JSON output or download as .json."
    ],
    features: [
      "Intelligent type casting (numbers, booleans, nulls)",
      "Handles quoted strings and commas inside cells",
      "Table preview of parsed records",
      "Download as .json or copy to clipboard"
    ],
    faqs: [
      { question: "Can it handle custom delimiters like semicolons or tabs?", answer: "Yes, our parser auto-detects comma, semicolon, and tab delimiters." }
    ],
    supportedFormats: [".csv", ".txt"]
  },
  {
    id: "tool-45",
    slug: "json-to-csv",
    name: "JSON to CSV",
    shortDesc: "Flatten JSON arrays of objects into downloadable CSV spreadsheet tables.",
    category: "format-transformer",
    categoryName: "File Converters",
    gadgetName: "Format Transformer",
    icon: "FileSpreadsheet",
    tags: ["json", "csv", "data", "export", "spreadsheet"],
    isPopular: false,
    description: "Convert JSON API responses or object arrays into tabular CSV files ready for import into Microsoft Excel, Google Sheets, or databases.",
    howToUse: [
      "Paste your JSON array of objects.",
      "Select delimiter (Comma `,` or Semicolon `;`).",
      "Click 'Convert to CSV'.",
      "Preview table rows and download `.csv` spreadsheet."
    ],
    features: [
      "Flattens nested keys automatically",
      "Properly escapes quotes and commas",
      "Instant spreadsheet download",
      "Live table preview"
    ],
    faqs: [
      { question: "What if my JSON has nested objects?", answer: "Nested objects are automatically flattened into dot-notation headers (e.g. `address.city`)." }
    ]
  },

  // --- Category 10: Smart Pocket (Productivity Tools) ---
  {
    id: "tool-46",
    slug: "invoice-generator",
    name: "Invoice Generator",
    shortDesc: "Create professional GST-compliant PDF invoices with custom branding and tax calculations.",
    category: "smart-pocket",
    categoryName: "Productivity Tools",
    gadgetName: "Smart Pocket",
    icon: "Receipt",
    tags: ["invoice", "pdf", "billing", "gst", "business"],
    isPopular: true,
    description: "A complete professional invoice maker for freelancers, agencies, and businesses. Add line items, taxes, discounts, notes, bank details, and print or download clean PDFs.",
    howToUse: [
      "Fill in your Company Name, Logo, and Client Details.",
      "Add billable line items with quantity, rate, and tax rate.",
      "Select currency (₹ INR, $ USD, € EUR, £ GBP).",
      "Add bank transfer details and payment terms.",
      "Click 'Print / Save as PDF'."
    ],
    features: [
      "Automatic subtotal, discount, tax, and grand total calculations",
      "Professional print-ready stylesheet with no watermarks",
      "Save invoices locally to edit later",
      "Multi-currency support"
    ],
    faqs: [
      { question: "Can I add my business logo?", answer: "Yes, upload your company logo for instant display in the header." }
    ]
  },
  {
    id: "tool-47",
    slug: "receipt-generator",
    name: "Receipt Generator",
    shortDesc: "Generate clean digital cash and payment receipts with signatures.",
    category: "smart-pocket",
    categoryName: "Productivity Tools",
    gadgetName: "Smart Pocket",
    icon: "FileCheck2",
    tags: ["receipt", "payment", "cash", "pdf", "proof"],
    isPopular: false,
    description: "Quickly generate official payment receipts for rent, freelance retainers, consulting fees, or cash payments.",
    howToUse: [
      "Enter Receipt Number, Date, and Payer Name.",
      "Enter Amount Received and Payment Method (Cash, UPI, Bank Transfer, Card).",
      "Specify Payment For (Rent, Services, Deposit).",
      "Add Authorized Signatory Name.",
      "Generate printable receipt."
    ],
    features: [
      "Official receipt slip format with decorative borders",
      "Amount in words conversion helper",
      "Payment method badges",
      "Instant print and PDF export"
    ],
    faqs: [
      { question: "Can I use this for house rent allowance (HRA) claims?", answer: "Yes, it contains all required fields: landlord name, pan, amount, date, and signature field." }
    ]
  },
  {
    id: "tool-48",
    slug: "resume-builder",
    name: "Resume Builder",
    shortDesc: "Build sleek, ATS-friendly resumes with live preview and PDF export.",
    category: "smart-pocket",
    categoryName: "Productivity Tools",
    gadgetName: "Smart Pocket",
    icon: "FileUser",
    tags: ["resume", "cv", "ats", "job", "career"],
    isPopular: true,
    description: "Craft a modern, recruiter-approved resume in minutes. Features modular sections for experience, education, skills, and projects with real-time preview.",
    howToUse: [
      "Enter Personal Contact Information.",
      "Add Work Experience entries with bullet points.",
      "Add Education, Certifications, and Technical Skills.",
      "Choose a sleek theme layout.",
      "Export to ATS-optimized PDF or print."
    ],
    features: [
      "100% ATS (Applicant Tracking System) friendly typography",
      "Re-orderable section blocks",
      "Real-time dual-pane live preview",
      "Instant print/export without watermarks"
    ],
    faqs: [
      { question: "Is this resume ATS compliant?", answer: "Yes, it uses single-column semantic structures and standard fonts that parsers read without parsing errors." }
    ]
  },
  {
    id: "tool-49",
    slug: "todo-list",
    name: "To-Do List",
    shortDesc: "Interactive Kanban and priority task manager with local storage persistence.",
    category: "smart-pocket",
    categoryName: "Productivity Tools",
    gadgetName: "Smart Pocket",
    icon: "CheckSquare",
    tags: ["todo", "tasks", "productivity", "planner", "kanban"],
    isPopular: true,
    description: "A fast, beautiful, and private task manager. Categorize tasks by priority, set due dates, mark items complete, and persist everything in your browser.",
    howToUse: [
      "Type a new task and choose priority (High, Medium, Low).",
      "Filter by All, Active, or Completed tasks.",
      "Click checkboxes to mark items done with celebratory sparkles.",
      "Clear completed tasks when finished."
    ],
    features: [
      "Persists automatically to browser localStorage",
      "Priority badges with color indicators",
      "Progress bar showing completion percentage",
      "Confetti celebration upon finishing all tasks"
    ],
    faqs: [
      { question: "Do my tasks stay saved if I close the tab?", answer: "Yes, tasks are safely saved in your browser's persistent local storage." }
    ]
  },
  {
    id: "tool-50",
    slug: "business-card-generator",
    name: "Business Card Generator",
    shortDesc: "Design print-ready 3.5\" x 2\" digital business cards with QR code and live 3D preview.",
    category: "smart-pocket",
    categoryName: "Productivity Tools",
    gadgetName: "Smart Pocket",
    icon: "CreditCard",
    tags: ["business-card", "branding", "print", "design"],
    isPopular: false,
    description: "Create professional front-and-back business cards with your contact info, social handles, and an integrated scan-to-save QR code.",
    howToUse: [
      "Enter your Name, Title, Company, Phone, Email, and Website.",
      "Choose a theme palette (Magical Blue, Modern Dark, Minimalist White).",
      "Toggle Front and Back card preview with 3D flip effect.",
      "Export print-ready 300 DPI graphics or PDF."
    ],
    features: [
      "Standard 3.5\" x 2\" business card proportions",
      "Interactive 3D flip card preview",
      "Auto-generated vCard or URL QR code on the back",
      "High-res print-ready download"
    ],
    faqs: [
      { question: "What dimensions are exported?", answer: "Standard 1050 x 600 pixels (3.5\" x 2\" at 300 DPI) suitable for professional printing." }
    ]
  }
];

export function getToolBySlug(slug: string): ToolItem | undefined {
  return TOOLS.find(t => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string): ToolItem[] {
  return TOOLS.filter(t => t.category === categorySlug);
}

export function searchTools(query: string): ToolItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return TOOLS;
  return TOOLS.filter(
    t =>
      t.name.toLowerCase().includes(q) ||
      t.shortDesc.toLowerCase().includes(q) ||
      t.categoryName.toLowerCase().includes(q) ||
      t.gadgetName.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q))
  );
}
