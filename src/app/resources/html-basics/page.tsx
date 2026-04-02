import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "HTML Basics Reference | StudentDev Hub",
  description: "A comprehensive reference guide for essential HTML structure, tags, and attributes.",
};

export default function HtmlBasics() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Resources
      </Link>
      <h1 className="text-4xl font-bold mb-4">HTML Basics Reference</h1>
      <p className="text-lg text-muted-foreground mb-12">The foundation of every website. Learn standard HTML5 structure, semantic tags, and attributes.</p>

      <div className="prose prose-invert max-w-none prose-blue">
        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">1. The Basic Boilerplate</h2>
        <p className="mb-4 text-muted-foreground">Every HTML page starts with a standard structure that declares the language and encodes metadata.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <h1>Main Heading</h1>
    <p>Content goes here.</p>
</body>
</html>`}
        </code></pre>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">2. Text Formatting Tags</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
          <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings, with h1 being the most important.</li>
          <li><code>&lt;p&gt;</code>: Defines a paragraph.</li>
          <li><code>&lt;br&gt;</code>: Inserts a single line break (self-closing).</li>
          <li><code>&lt;strong&gt;</code>: Defines important text (bold).</li>
          <li><code>&lt;em&gt;</code>: Defines emphasized text (italic).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">3. Links and Images</h2>
        <p className="mb-4 text-muted-foreground">Links block <code>href</code> and images require an <code>src</code> attribute.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`<!-- Anchor Link -->
<a href="https://example.com" target="_blank">Visit Example</a>

<!-- Image Tag -->
<img src="image.jpg" alt="Description of the image" width="500" height="300">`}
        </code></pre>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">4. Lists</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground border-l-4 border-blue-500 ml-4 mb-8">
          <li><strong>Unordered List:</strong> Uses <code>&lt;ul&gt;</code> along with <code>&lt;li&gt;</code> for bullet points.</li>
          <li><strong>Ordered List:</strong> Uses <code>&lt;ol&gt;</code> along with <code>&lt;li&gt;</code> for numbered points.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">5. Semantic HTML5 Elements</h2>
        <p className="mb-4 text-muted-foreground">Semantic tags describe their meaning to both the browser and the developer, improving accessibility and SEO.</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><code>&lt;header&gt;</code>: Introductory content or navigational links.</li>
          <li><code>&lt;nav&gt;</code>: Defines navigation links.</li>
          <li><code>&lt;article&gt;</code>: Contains independent, self-contained content.</li>
          <li><code>&lt;section&gt;</code>: Represents a standalone section of a document.</li>
          <li><code>&lt;footer&gt;</code>: The footer of a document or section.</li>
        </ul>
      </div>
    </div>
  );
}
