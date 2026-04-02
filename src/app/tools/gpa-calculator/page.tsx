import { Metadata } from "next";
import GpaCalculator from "@/components/tools/GpaCalculator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "College GPA Calculator (4.0 Scale) | StudentDev Hub",
  description: "Free online semester GPA calculator for college and university students. Easily calculate your GPA using a standard 4.0 scale with custom credits.",
};

export default function GpaCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tools
        </Link>
        <h1 className="text-4xl font-bold mb-4">GPA Calculator</h1>
        <p className="text-lg text-muted-foreground">Easily calculate your semester Grade Point Average (GPA) using our interactive 4.0 scale tool.</p>
      </div>

      <div className="mb-16">
        <GpaCalculator />
      </div>

      {/* AdSense Optimized Knowledge Section */}
      <article className="prose prose-invert max-w-none text-muted-foreground border-t border-border pt-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">How to Calculate Your GPA</h2>
        <p className="mb-4">
          Your Grade Point Average (GPA) is a standard way of measuring your academic achievement in the U.S. and many other countries. It is calculated on a 4.0 scale, where an A represents 4.0, a B represents 3.0, and so on.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">The GPA Formula</h3>
        <p className="mb-4">
          To calculate your GPA manually, you divide the total number of grade points earned by the total number of credit hours attempted.
        </p>
        <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm border border-border mb-6">
          GPA = Total Grade Points / Total Credit Hours Attempted
        </div>
        <p className="mb-4">
          For example, if you earned an 'A' (4.0 points) in a 3-credit course, you have earned 12 total grade points for that class. Repeat this across all courses, sum the grade points, and divide by the sum of your credits.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">Standard 4.0 Grading Scale</h3>
        <p className="mb-4">Most colleges and universities utilize a standard 4.0 scale. Our calculator defaults to the following values:</p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 border-y border-border">Letter Grade</th>
                <th className="p-3 border-y border-border">GPA Value</th>
                <th className="p-3 border-y border-border">Percentage equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-border">A / A+</td><td className="p-3 border-b border-border">4.0</td><td className="p-3 border-b border-border">93% - 100%</td></tr>
              <tr><td className="p-3 border-b border-border">A-</td><td className="p-3 border-b border-border">3.7</td><td className="p-3 border-b border-border">90% - 92%</td></tr>
              <tr><td className="p-3 border-b border-border">B+</td><td className="p-3 border-b border-border">3.3</td><td className="p-3 border-b border-border">87% - 89%</td></tr>
              <tr><td className="p-3 border-b border-border">B</td><td className="p-3 border-b border-border">3.0</td><td className="p-3 border-b border-border">83% - 86%</td></tr>
              <tr><td className="p-3 border-b border-border">B-</td><td className="p-3 border-b border-border">2.7</td><td className="p-3 border-b border-border">80% - 82%</td></tr>
              <tr><td className="p-3 border-b border-border">C+</td><td className="p-3 border-b border-border">2.3</td><td className="p-3 border-b border-border">77% - 79%</td></tr>
              <tr><td className="p-3 border-b border-border">C</td><td className="p-3 border-b border-border">2.0</td><td className="p-3 border-b border-border">73% - 76%</td></tr>
              <tr><td className="p-3 border-b border-border">C-</td><td className="p-3 border-b border-border">1.7</td><td className="p-3 border-b border-border">70% - 72%</td></tr>
              <tr><td className="p-3 border-b border-border">D+</td><td className="p-3 border-b border-border">1.3</td><td className="p-3 border-b border-border">67% - 69%</td></tr>
              <tr><td className="p-3 border-b border-border">D</td><td className="p-3 border-b border-border">1.0</td><td className="p-3 border-b border-border">60% - 66%</td></tr>
              <tr><td className="p-3 border-b border-border">F</td><td className="p-3 border-b border-border">0.0</td><td className="p-3 border-b border-border">Below 60%</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">Frequently Asked Questions</h3>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-foreground">How do pass/fail classes affect GPA?</dt>
            <dd className="mt-1">In most institutions, courses taken as Pass/Fail (or Satisfactory/Unsatisfactory) do not factor into your GPA. However, in some schools, a failing grade could harm your GPA while a passing grade will not improve it. Always check your university's explicit transcript policy.</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">What is a good GPA in college?</dt>
            <dd className="mt-1">A "good" GPA largely depends on your major and your career field's expectations. Generally, anything above a 3.0 (B average) is considered acceptable, while a 3.5 or higher often qualifies for honors and is preferred for competitive internships or graduate school applications.</dd>
          </div>
        </dl>
      </article>
    </div>
  );
}
