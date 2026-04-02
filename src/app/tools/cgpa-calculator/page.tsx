import { Metadata } from "next";
import CgpaCalculator from "@/components/tools/CgpaCalculator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cumulative GPA (CGPA) Calculator | StudentDev Hub",
  description: "Calculate your overall Cumulative GPA by combining recent semesters with your past credits easily.",
};

export default function CgpaCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tools
        </Link>
        <h1 className="text-4xl font-bold mb-4">CGPA Calculator</h1>
        <p className="text-lg text-muted-foreground">Calculate your overall Cumulative Grade Point Average across multiple semesters or years.</p>
      </div>

      <div className="mb-16">
        <CgpaCalculator />
      </div>

      <article className="prose prose-invert max-w-none text-muted-foreground border-t border-border pt-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">What is a Cumulative GPA (CGPA)?</h2>
        <p className="mb-4">
          While a GPA represents your average grade within a specific term or semester, a CGPA (Cumulative Grade Point Average) is an average of your GPA grades across all the terms you have completed so far.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">How to Calculate CGPA</h3>
        <p className="mb-4">
          You cannot simply take the average of all your semester GPAs unless every semester had the exact same number of credit hours. To calculate a true CGPA, you must weight the GPA of each semester by the number of credit hours attempted during that semester.
        </p>
        <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm border border-border mb-6 overflow-x-auto text-nowrap">
          CGPA = (GPA1 * Credits1 + GPA2 * Credits2 + ...) / (Total Credits)
        </div>
        
        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">Why does your CGPA matter?</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Graduation Requirements:</strong> Many degrees require you to maintain a minimum CGPA to graduate (often a 2.0).</li>
          <li><strong>Academic Standing:</strong> Your CGPA determines whether you are placed on the Dean's List or Academic Probation.</li>
          <li><strong>Employment & Graduate School:</strong> Hiring managers for entry-level positions and graduate school committees look closely at your overall cumulative performance to gauge consistency.</li>
        </ul>
      </article>
    </div>
  );
}
