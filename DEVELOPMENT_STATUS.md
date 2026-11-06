# DORA TOOLS — Development Status & Tracking

**Project:** DORA TOOLS  
**Domain:** [www.doratools.online](https://www.doratools.online)  
**Tagline:** Your Digital Gadget Universe! / Every Problem Has a Gadget.  
**Design System:** Pure White + Sky Blue (#168DE2, #0866B2, #64C8FF, #F5FAFF, #FFD84D) + Glassmorphism + Premium 3D  
**Status:** Complete & Production Ready  

---

## 1. Phase Completion Summary

| Phase | Description | Status | Verification & Deliverables |
| :--- | :--- | :--- | :--- |
| **Phase 1: Foundation** | Project architecture, Design System, Mascot, 3D Gadgets, DB Schema | **COMPLETED** | Pure White + Sky Blue Glassmorphism, DoraBot mascot SVG, 10 3D Gadget SVGs, Prisma schema (24 models) |
| **Phase 2: Frontend & Navigation** | Hero Portal, Categories, Magic Search, Navbar, Footer | **COMPLETED** | Swirling Hero Portal, Floating gadgets, responsive Navbar, 5-column Footer |
| **Phase 3: 50 Gadget Tool Engine** | 10 Categories × 5 Tools (All 50 functional client-side) | **COMPLETED** | 100% in-browser processing via Canvas, WebAssembly, Web Crypto, pdf-lib, qrcode |
| **Phase 4: Authentication** | Login, Register, Forgot Password, Reset Password, Verify Email | **COMPLETED** | Clean credential forms with instant 1-click test buttons for Demo Explorer and Admin Center |
| **Phase 5: User Dashboard** | Overview, Profile, Subscription, Analytics, Projects, History, Favs, Tickets, Settings | **COMPLETED** | 11 subroutes in `/dashboard/*` with real localStorage sync & state management |
| **Phase 6: Admin Dashboard** | Command Center, Users, 50 Tools, Categories, Plans, Payments, Coupons, Analytics, Blog, SEO, Support, Settings | **COMPLETED** | 13 subroutes in `/admin/*` with high-security command console |
| **Phase 7: Billing & Payments** | 4 Plans (Free, ₹99, ₹199, ₹399), Razorpay APIs, Coupons | **COMPLETED** | `/api/razorpay/create-order`, `/api/razorpay/verify-payment` with HMAC-SHA256 signature verification & coupon engine |
| **Phase 8: SEO & Blog Academy** | Blog engine, articles, dynamic sitemap.xml, robots.txt, metadata | **COMPLETED** | `sitemap.ts` (all 50 tools + 10 categories + blogs), `robots.ts`, Open Graph tags |
| **Phase 9: Quality Assurance** | Functional verification of tools, mobile responsiveness, error boundary | **COMPLETED** | All 50 tools render with zero mock interfaces, strict input validation, client-side safety |
| **Phase 10: Production Readiness** | Ready for Vercel / Docker / self-hosted Next.js deployment | **COMPLETED** | Complete codebase cleanly organized in `src/` |

---

## 2. Complete Catalog of 50 Functional Gadgets

### Category 1: Paper Portal — PDF Tools
1. `pdf-merger`: Combine multiple PDF documents with order sorting & byte download
2. `pdf-splitter`: Extract page intervals (e.g. 1-2, 4) or individual pages
3. `pdf-compressor`: Optimize internal PDF streams and eliminate duplicate objects
4. `pdf-to-jpg`: Render high-clarity JPG canvas images from PDF documents
5. `jpg-to-pdf`: Compile collections of photos into a structured PDF document

### Category 2: Magic Lens — Image Tools
6. `image-compressor`: Live quality slider (10%-100%), real-time byte savings metric, side-by-side comparison
7. `image-resizer`: Pixel scaling with aspect-ratio lock and social media presets
8. `image-cropper`: Interactive crop masks with 1:1, 4:3, 16:9, and freeform aspect ratios
9. `jpg-to-png`: Convert JPG images to lossless PNG format
10. `webp-converter`: Transmute PNG/JPG images to next-gen WebP format

### Category 3: Word Pocket — Text Tools
11. `word-counter`: Real-time words, characters, sentences, paragraphs, reading & speaking time
12. `character-counter`: Character breakdown, Twitter/X 280-character cap bar, SMS segment calculator
13. `case-converter`: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case, CONSTANT_CASE
14. `text-cleaner`: Strip HTML tags, normalize whitespace, collapse blank lines, unwrap line breaks
15. `duplicate-line-remover`: Remove duplicate lines with case sensitivity and alphabetical sorting

### Category 4: Code Capsule — Developer Tools
16. `json-formatter`: Prettify JSON with customizable indentation (2 spaces, 4 spaces, tab) and download
17. `json-validator`: Pinpoint line & column syntax errors with RFC 8259 validation
18. `json-minifier`: Strip whitespace and compress payload for production API requests
19. `base64-encoder-decoder`: UTF-8 string & data-URL Base64 encoder and decoder
20. `url-encoder-decoder`: Standard URI and URI Component percent-encoding and decoding

### Category 5: Creator Compass — Marketing Tools
21. `utm-builder`: Construct Google Analytics campaign URLs with live preview & platform presets
22. `hashtag-generator`: Topic-based categorized viral hashtag buckets with one-click copy
23. `caption-template-builder`: Hook + Story + Value + CTA template builder with zero-width line breaks
24. `youtube-title-builder`: High-CTR title frameworks (curiosity gap, listicle, vs, warning)
25. `youtube-tag-builder`: SEO tag extractor & comma-separated list under 500 characters

### Category 6: Number Machine — Calculators
26. `percentage-calculator`: 4 percentage formulas with step-by-step mathematical breakdowns
27. `gst-calculator`: Indian GST (5%, 12%, 18%, 28%), Inclusive/Exclusive, CGST+SGST / IGST breakdown
28. `emi-calculator`: Loan EMI with amortization breakdown, monthly payment, and interest ratio
29. `roi-calculator`: Initial vs final investment, net profit, total ROI %, and annualized CAGR %
30. `cpc-calculator`: Cost-per-click, CPM, CTR %, and paid ad budget calculator

### Category 7: Scan Portal — QR Tools
31. `url-qr-generator`: URL QR code with custom foreground color and PNG download
32. `text-qr-generator`: Plain text / secret notes offline QR code generator
33. `wifi-qr-generator`: Instant WiFi connect QR code (WPA/WPA2/WPA3 and WEP)
34. `whatsapp-qr-generator`: WhatsApp direct click-to-chat QR code with pre-filled greeting
35. `email-qr-generator`: Mailto draft QR code with pre-filled recipient, subject, and message

### Category 8: Search Navigator — SEO Tools
36. `meta-title-generator`: Title tag generator under 60 characters with live Google SERP preview
37. `meta-description-generator`: 140-160 character description generator with traffic-light meter
38. `slug-generator`: URL-safe permalink generator with stop-word stripping
39. `keyword-density-checker`: 1-word, 2-word, 3-word n-gram frequency & over-optimization alert
40. `open-graph-tag-generator`: Facebook OG & Twitter Cards meta generator with social card preview

### Category 9: Format Transformer — File Converters
41. `png-to-jpg`: PNG to JPG with selectable background fill color (prevents black background)
42. `jpg-to-webp`: JPG to next-gen WebP converter with quality control
43. `svg-to-png`: Vector SVG to 1x, 2x, 4x high-resolution transparent PNG rasterizer
44. `csv-to-json`: Parse CSV spreadsheet rows into structured JSON arrays of objects
45. `json-to-csv`: Flatten JSON arrays of objects into downloadable `.csv` spreadsheet tables

### Category 10: Smart Pocket — Productivity Tools
46. `invoice-generator`: GST-ready PDF invoice maker with itemized lines, taxes, notes, and print stylesheet
47. `receipt-generator`: Digital cash receipt slip with signatures and print stylesheet
48. `resume-builder`: ATS-compliant modern resume builder with live dual-pane layout and PDF export
49. `todo-list`: Kanban priority task manager with localStorage persistence & completion celebrations
50. `business-card-generator`: 3.5" x 2" printable business card designer with 3D flip card preview

---

## 3. Database Architecture (Prisma Schema)
- 24 normalized models covering Users, Profiles, Roles, Permissions, Categories, Tools, Plans, Subscriptions, Payments, PaymentEvents, Coupons, Redemptions, ToolUsages, UsageLimits, SavedProjects, Favorites, ActivityLogs, BlogPosts, BlogCategories, BlogTags, SupportTickets, Notifications, Teams, TeamMembers, WebsiteSettings.
- Normalized PostgreSQL relations with cascading deletes, indexing on slugs, emails, and order IDs.

---

## 4. Payment & Billing Architecture (Razorpay)
- Plans: Free Explorer (₹0), Starter Wizard (₹99/mo, ₹950/yr), Pro Sorcerer (₹199/mo, ₹1900/yr), Business Universe (₹399/mo, ₹3800/yr).
- Endpoints:
  - `POST /api/razorpay/create-order` (Server-side order creation & coupon validation)
  - `POST /api/razorpay/verify-payment` (HMAC-SHA256 signature verification)
  - `GET /api/analytics` (Telemetry and platform metrics)
- Coupon Codes Supported: `DORA2026` (50% off), `MAGIC50` (50% off).
