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
        <h2 className="text-3xl font-semibold text-foreground mb-4">Mastering Percentages: The Complete Reference Guide</h2>
        <p className="mb-4">
          While often handled by calculators in the modern age, a fundamental understanding of percentage mathematics is completely unavoidable in daily life. Whether you are attempting to accurately calculate the tip at a restaurant, analyzing your return on investment (ROI) on a stock portfolio, processing corporate sales tax metrics, or merely deciphering the final discounted price of a laptop during a Black Friday sale, percentages dictate the logic of modern commerce and academics.
        </p>
        <p className="mb-4">
          Our specialized percentage calculator suite above prevents manual arithmetic errors, saving significant time during accounting exams, laboratory data analysis, and small-business bookkeeping. Below, we dive into the core concepts underpinning these essential mathematical operations.
        </p>

        <h3 className="text-2xl font-medium text-foreground mt-8 mb-3">What Exactly is a Percentage?</h3>
        <p className="mb-4">
          Etymologically stemming from the Latin phrase <em>per centum</em>, the root word literally translates to "by the hundred." Therefore, a percentage represents a mathematical ratio expressed as a fractional piece of a baseline of 100.
        </p>
        <p className="mb-4">
          Conceptually, if you possess a pie divided perfectly into 100 uniform slices, and you eat 45 of those slices, you have consumed 45% of the total pie. In pure mathematical terms, 45% is functionally identical to the standard fraction <strong>45/100</strong>, which evaluates precisely to the decimal format of <strong>0.45</strong>. Being able to mentally convert between percentages, decimals, and fractional baselines is a foundation of financial literacy.
        </p>

        <h3 className="text-2xl font-medium text-foreground mt-8 mb-4">Core Mathematical Formulas (With Examples)</h3>
        
        <div className="space-y-8">
          <div className="bg-card border border-border p-6 rounded-2xl">
            <h4 className="text-foreground text-xl font-semibold mb-2 flex items-center"><span className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span> Finding the Percentage of a Known Number</h4>
            <p className="mb-3 text-sm"><strong>Scenario:</strong> You need to calculate a 15% tip on a $85.00 dinner bill.</p>
            <div className="bg-muted p-3 px-4 rounded-lg font-mono text-sm border border-border/50 mb-3 text-emerald-400">
              Formula: ( Percentage / 100 ) × Base Number = Target Value
            </div>
            <p className="text-sm">
              <strong>Execution:</strong> First, convert 15% to a decimal by dividing by 100 (which gives 0.15). Then, multiply 0.15 by $85.00. The result is $12.75. Your final bill with the tip included is $97.75.
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl">
            <h4 className="text-foreground text-xl font-semibold mb-2 flex items-center"><span className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span> Figuring Out What Percentage One Number is of Another Number</h4>
            <p className="mb-3 text-sm"><strong>Scenario:</strong> You are taking a university entrance exam containing exactly 140 questions. You score 112 correct answers. What is your final letter grade percentage?</p>
            <div className="bg-muted p-3 px-4 rounded-lg font-mono text-sm border border-border/50 mb-3 text-blue-400">
              Formula: ( Smaller Number ÷ Total Base Number ) × 100 = Percentage %
            </div>
            <p className="text-sm">
              <strong>Execution:</strong> Divide your correct answers (112) by the total possible questions (140) to reach the decimal 0.80. Multiply 0.80 by 100 to shift the decimal place, revealing an even <strong>80%</strong> final score.
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl">
            <h4 className="text-foreground text-xl font-semibold mb-2 flex items-center"><span className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span> Calculating the Percentage Increase or Decrease Between Two Values</h4>
            <p className="mb-3 text-sm"><strong>Scenario:</strong> A local landlord shockingly raises your monthly apartment rent from $1,200 to $1,450. You want to loudly complain to your friends using the exact percentage increase metric.</p>
            <div className="bg-muted p-3 px-4 rounded-lg font-mono text-sm border border-border/50 mb-3 text-rose-400">
              Formula: ( | New Value - Old Value | ÷ Old Value ) × 100 = Percent Change %
            </div>
            <p className="text-sm">
              <strong>Execution:</strong> Find the absolute absolute difference between the rates: $1,450 minus $1,200 equals a raw increase of $250. Divide that difference ($250) by your <em>original starting rent</em> ($1,200) to get roughly ~0.2083. Multiply by 100 to finalize the calculation: you suffered a brutal <strong>20.83%</strong> increase in your cost of living.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-medium text-foreground mt-10 mb-3">Professional Applications Across Industries</h3>
        <p className="mb-4">
          Percentage math isn't restricted to school grades. Real estate agents utilize percentage logic constantly for calculating property commission yields (typically 3-6%). Retail floor managers calculate margin rates to identify product profitability. Software engineers routinely use modulo and percentage formulas in data pagination logic, loading bar UI animations, and randomized AB testing distributions. Familiarity with these tools is universally beneficial regardless of your final career path.
        </p>
      </article>
    </div>
  );
}
