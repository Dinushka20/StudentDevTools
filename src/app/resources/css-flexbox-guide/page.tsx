import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "CSS Flexbox Guide | StudentDev Hub",
  description: "Master CSS Flexbox layouts with this easy-to-understand cheat sheet.",
};

export default function CssFlexbox() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Resources
      </Link>
      <h1 className="text-4xl font-bold mb-4">CSS Flexbox Guide</h1>
      <p className="text-lg text-muted-foreground mb-12">The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.</p>

      <div className="prose prose-invert max-w-none prose-blue">
        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">1. Flexbox Container Properties</h2>
        <p className="mb-4 text-muted-foreground">These properties belong strictly to the flex container (the parent element).</p>
        
        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">display</h3>
        <p className="text-muted-foreground mb-4">Defines a flex container.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-6"><code className="text-foreground">
{`.container {
  display: flex; /* or inline-flex */
}`}
        </code></pre>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">flex-direction</h3>
        <p className="text-muted-foreground mb-4">Establishes the main-axis, defining the direction flex items are placed in the flex container.</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li><code>row</code> (default): left to right</li>
          <li><code>row-reverse</code>: right to left</li>
          <li><code>column</code>: top to bottom</li>
          <li><code>column-reverse</code>: bottom to top</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">justify-content</h3>
        <p className="text-muted-foreground mb-4">Defines the alignment along the main axis. It helps distribute extra free space.</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li><code>flex-start</code> (default): items are packed toward the start line</li>
          <li><code>flex-end</code>: items are packed toward to end line</li>
          <li><code>center</code>: items are centered along the line</li>
          <li><code>space-between</code>: items are evenly distributed (first item is on the start line, the last on the end)</li>
          <li><code>space-around</code>: items are evenly distributed with equal space around them</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">align-items</h3>
        <p className="text-muted-foreground mb-4">Defines the default behavior for how flex items are laid out along the cross axis.</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
          <li><code>stretch</code> (default): stretch to fill the container</li>
          <li><code>flex-start</code>: items are placed at the start of the cross axis</li>
          <li><code>flex-end</code>: items are placed at the end of the cross axis</li>
          <li><code>center</code>: items are centered in the cross-axis</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">2. Flex Item Properties</h2>
        <p className="mb-4 text-muted-foreground">These properties apply only to the children within the flex container.</p>
        
        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">flex-grow</h3>
        <p className="text-muted-foreground mb-4">Defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. For instance, if all items have <code>flex-grow: 1</code>, they will share the remaining space equally.</p>
        
        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">flex-basis</h3>
        <p className="text-muted-foreground mb-4">Defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.</p>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">align-self</h3>
        <p className="text-muted-foreground mb-8">Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.</p>
      </div>
    </div>
  );
}
