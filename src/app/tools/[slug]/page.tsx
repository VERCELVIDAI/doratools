import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolBySlug, TOOLS } from "@/lib/tools-data";
import { ToolLayout } from "@/components/tools/ToolLayout";

// Category 1: PDF Tools
import {
  PdfMergerTool,
  PdfSplitterTool,
  PdfCompressorTool,
  PdfToJpgTool,
  JpgToPdfTool,
} from "@/components/tools/implementations/PdfTools";

// Category 2: Image Tools
import {
  ImageCompressorTool,
  ImageResizerTool,
  ImageCropperTool,
  JpgToPngTool,
  WebpConverterTool,
} from "@/components/tools/implementations/ImageTools";

// Category 3: Text Tools
import {
  WordCounterTool,
  CharacterCounterTool,
  CaseConverterTool,
  TextCleanerTool,
  DuplicateLineRemoverTool,
} from "@/components/tools/implementations/TextTools";

// Category 4: Developer Tools
import {
  JsonFormatterTool,
  JsonValidatorTool,
  JsonMinifierTool,
  Base64Tool,
  UrlEncoderTool,
} from "@/components/tools/implementations/DeveloperTools";

// Category 5: Marketing Tools
import {
  UtmBuilderTool,
  HashtagGeneratorTool,
  CaptionBuilderTool,
  YoutubeTitleTool,
  YoutubeTagTool,
} from "@/components/tools/implementations/MarketingTools";

// Category 6: Calculators
import {
  PercentageCalcTool,
  GstCalcTool,
  EmiCalcTool,
  RoiCalcTool,
  CpcCalcTool,
} from "@/components/tools/implementations/CalculatorTools";

// Category 7: QR Tools
import {
  UrlQrTool,
  TextQrTool,
  WifiQrTool,
  WhatsappQrTool,
  EmailQrTool,
} from "@/components/tools/implementations/QrTools";

// Category 8: SEO Tools
import {
  MetaTitleTool,
  MetaDescTool,
  SlugGeneratorTool,
  KeywordDensityTool,
  OpenGraphTool,
} from "@/components/tools/implementations/SeoTools";

// Category 9: File Converters
import {
  PngToJpgTool,
  JpgToWebpTool,
  SvgToPngTool,
  CsvToJsonTool,
  JsonToCsvTool,
} from "@/components/tools/implementations/FileConverterTools";

// Category 10: Productivity Tools
import {
  InvoiceGeneratorTool,
  ReceiptGeneratorTool,
  ResumeBuilderTool,
  TodoListTool,
  BusinessCardTool,
} from "@/components/tools/implementations/ProductivityTools";

export async function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return { title: "Tool Not Found | Dora Tools" };

  const url = `https://www.doratools.online/tools/${tool.slug}`;

  return {
    title: `${tool.name} — Free Online ${tool.gadgetName} | Dora Tools`,
    description: `${tool.description} 100% private in-browser processing, fast & secure.`,
    keywords: [...tool.tags, tool.name, tool.gadgetName, tool.categoryName, "free online tool", "dora tools"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${tool.name} — Free Online ${tool.gadgetName} | Dora Tools`,
      description: tool.shortDesc,
      url,
      siteName: "Dora Tools",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${tool.name} - Dora Tools`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | Dora Tools`,
      description: tool.shortDesc,
      images: ["/og-image.png"],
    },
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return notFound();

  const renderToolComponent = () => {
    switch (tool.slug) {
      // PDF Tools
      case "pdf-merger":
        return <PdfMergerTool />;
      case "pdf-splitter":
        return <PdfSplitterTool />;
      case "pdf-compressor":
        return <PdfCompressorTool />;
      case "pdf-to-jpg":
        return <PdfToJpgTool />;
      case "jpg-to-pdf":
        return <JpgToPdfTool />;

      // Image Tools
      case "image-compressor":
        return <ImageCompressorTool />;
      case "image-resizer":
        return <ImageResizerTool />;
      case "image-cropper":
        return <ImageCropperTool />;
      case "jpg-to-png":
        return <JpgToPngTool />;
      case "webp-converter":
        return <WebpConverterTool />;

      // Text Tools
      case "word-counter":
        return <WordCounterTool />;
      case "character-counter":
        return <CharacterCounterTool />;
      case "case-converter":
        return <CaseConverterTool />;
      case "text-cleaner":
        return <TextCleanerTool />;
      case "duplicate-line-remover":
        return <DuplicateLineRemoverTool />;

      // Developer Tools
      case "json-formatter":
        return <JsonFormatterTool />;
      case "json-validator":
        return <JsonValidatorTool />;
      case "json-minifier":
        return <JsonMinifierTool />;
      case "base64-encoder-decoder":
        return <Base64Tool />;
      case "url-encoder-decoder":
        return <UrlEncoderTool />;

      // Marketing Tools
      case "utm-builder":
        return <UtmBuilderTool />;
      case "hashtag-generator":
        return <HashtagGeneratorTool />;
      case "caption-template-builder":
        return <CaptionBuilderTool />;
      case "youtube-title-builder":
        return <YoutubeTitleTool />;
      case "youtube-tag-builder":
        return <YoutubeTagTool />;

      // Calculators
      case "percentage-calculator":
        return <PercentageCalcTool />;
      case "gst-calculator":
        return <GstCalcTool />;
      case "emi-calculator":
        return <EmiCalcTool />;
      case "roi-calculator":
        return <RoiCalcTool />;
      case "cpc-calculator":
        return <CpcCalcTool />;

      // QR Tools
      case "url-qr-generator":
        return <UrlQrTool />;
      case "text-qr-generator":
        return <TextQrTool />;
      case "wifi-qr-generator":
        return <WifiQrTool />;
      case "whatsapp-qr-generator":
        return <WhatsappQrTool />;
      case "email-qr-generator":
        return <EmailQrTool />;

      // SEO Tools
      case "meta-title-generator":
        return <MetaTitleTool />;
      case "meta-description-generator":
        return <MetaDescTool />;
      case "slug-generator":
        return <SlugGeneratorTool />;
      case "keyword-density-checker":
        return <KeywordDensityTool />;
      case "open-graph-tag-generator":
        return <OpenGraphTool />;

      // File Converters
      case "png-to-jpg":
        return <PngToJpgTool />;
      case "jpg-to-webp":
        return <JpgToWebpTool />;
      case "svg-to-png":
        return <SvgToPngTool />;
      case "csv-to-json":
        return <CsvToJsonTool />;
      case "json-to-csv":
        return <JsonToCsvTool />;

      // Productivity Tools
      case "invoice-generator":
        return <InvoiceGeneratorTool />;
      case "receipt-generator":
        return <ReceiptGeneratorTool />;
      case "resume-builder":
        return <ResumeBuilderTool />;
      case "todo-list":
        return <TodoListTool />;
      case "business-card-generator":
        return <BusinessCardTool />;

      default:
        return <div>Tool engine loaded.</div>;
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "operatingSystem": "All",
        "applicationCategory": "UtilitiesApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "description": tool.description,
        "featureList": tool.features,
        "softwareHelp": {
          "@type": "CreativeWork",
          "url": `https://www.doratools.online/tools/${tool.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.doratools.online",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tools",
            "item": "https://www.doratools.online/tools",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": tool.name,
            "item": `https://www.doratools.online/tools/${tool.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": tool.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout tool={tool}>{renderToolComponent()}</ToolLayout>
    </>
  );
}
