import { Metadata } from "next";
import PercentageCalculator from "@/components/tools/PercentageCalculator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Percentage Calculator | StudentDev Hub",
  description: "Easily find the percentage of a number or what percentage one number is of another.",
};

export default function PercentageCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tools
        </Link>
        <h1 className="text-4xl font-bold mb-4">Percentage Calculator</h1>
        <p className="text-lg text-muted-foreground">Find percentages quickly without memorizing the formula. Perfect for grade reviews and mathematics.</p>
      </div>

      <div className="mb-16">
        <PercentageCalculator />
      </div>

      <article className="prose prose-invert max-w-none text-muted-foreground border-t border-border pt-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">How Do Percentages Work?</h2>
        <p className="mb-4">
          The term "percent" simply means "per hundred." A percentage is a mathematical way of expressing a number as a fraction of 100. For instance, 45% means 45 out of 100, or the fraction 45/100, which evaluates to 0.45.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">Common Formulas</h3>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li>
            <strong>Finding a percentage of a number:</strong>
            <br/>To find X% of Y, use the formula: <code>(X / 100) * Y</code>. Let's say you scored 85% on a test worth 60 points. Your score is: (85 / 100) * 60 = 51 points.
          </li>
          <li>
            <strong>Finding what percentage X is of Y:</strong>
            <br/>To find what percentage X is of Y, use the formula: <code>(X / Y) * 100</code>. Let's say you got 42 out of 50 questions right. The percentage is: (42 / 50) * 100 = 84%.
          </li>
        </ul>
      </article>
    </div>
  );
}
