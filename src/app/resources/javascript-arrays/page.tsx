import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "JavaScript Arrays Guide | StudentDev Hub",
  description: "Learn JavaScript Array methods and techniques.",
};

export default function JavascriptArrays() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-500 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Resources
      </Link>
      <h1 className="text-4xl font-bold mb-4">JavaScript Arrays Cheat Sheet</h1>
      <p className="text-lg text-muted-foreground mb-12">The Ultimate guide to mutating and iterating through arrays in JavaScript.</p>

      <div className="prose prose-invert max-w-none prose-blue">
        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">1. Iteration Methods (Modern ES6)</h2>
        <p className="mb-4 text-muted-foreground">The best ways to loop through array elements cleanly.</p>
        
        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">Array.prototype.forEach()</h3>
        <p className="text-muted-foreground mb-2">Executes a provided function once for each array element. Does not return a new array.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-6"><code className="text-foreground">
{`const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); // 1, 2, 3`}
        </code></pre>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">Array.prototype.map()</h3>
        <p className="text-muted-foreground mb-2">Creates a new array populated with the results of calling a provided function on every element.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-6"><code className="text-foreground">
{`const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
// doubled is [2, 4, 6]`}
        </code></pre>

        <h3 className="text-xl font-medium text-foreground mt-6 mb-2">Array.prototype.filter()</h3>
        <p className="text-muted-foreground mb-2">Creates a shallow copy containing only elements that pass the test implemented by the provided function.</p>
        <pre className="bg-card p-4 rounded-xl border border-border overflow-x-auto text-sm mb-8"><code className="text-foreground">
{`const ages = [12, 18, 24, 7];
const adults = ages.filter(age => age >= 18);
// adults is [18, 24]`}
        </code></pre>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">2. Mutating Arrays</h2>
        <p className="mb-4 text-muted-foreground">Methods that change the array in place.</p>
        
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
          <li><code>push(items)</code>: Adds one or more elements to the end of an array.</li>
          <li><code>pop()</code>: Removes the last element from an array.</li>
          <li><code>shift()</code>: Removes the first element from an array.</li>
          <li><code>unshift(items)</code>: Adds one or more elements to the front of an array.</li>
          <li><code>splice(start, count, items)</code>: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2">3. Searching Arrays</h2>
        <p className="mb-4 text-muted-foreground">Quickly find items within your arrays.</p>
        
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
          <li><code>find(callback)</code>: Returns the first element that satisfies the testing function.</li>
          <li><code>findIndex(callback)</code>: Returns the index of the first element that satisfies the test.</li>
          <li><code>includes(value)</code>: Determines whether an array includes a certain value (returns boolean).</li>
          <li><code>indexOf(value)</code>: Returns the first index at which a given element can be found, or -1 if it is not present.</li>
        </ul>
      </div>
    </div>
  );
}
