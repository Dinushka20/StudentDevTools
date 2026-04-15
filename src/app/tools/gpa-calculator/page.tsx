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
        <h2 className="text-3xl font-semibold text-foreground mb-4">The Ultimate Guide to Calculating and Understanding Your GPA</h2>
        <p className="mb-4">
          Your Grade Point Average (GPA) is one of the most critical metrics of your academic career. Whether you are a high school student aiming for a prestigious Ivy League college, or a university undergraduate applying for highly competitive internships and graduate programs, your GPA serves as a standardized measurement of your academic achievement and diligence over time. 
        </p>
        <p className="mb-4">
          Because grading systems vary wildly across different schools, states, and countries, the 4.0 GPA scale has become the de facto standard for academic evaluation in the United States and North America. In this comprehensive guide, we'll explain how to calculate your GPA, the difference between weighted and unweighted GPAs, and actionable strategies you can use to raise your score.
        </p>

        <h3 className="text-2xl font-medium text-foreground mt-8 mb-3">How to Calculate Your GPA: The Mathematical Formula</h3>
        <p className="mb-4">
          While our automated tool at the top of the page makes this process instant, understanding the underlying math is empowering. Your overall GPA is essentially a weighted average. You cannot simply average your letter grades; you must account for the <strong>credit hours</strong> (also known as credit units or semester hours) assigned to each course. A challenging 4-credit calculus class impacts your final GPA significantly more than a 1-credit physical education elective.
        </p>
        <p className="mb-4">The standard formula for calculating GPA is:</p>
        <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm border border-border mb-6">
          GPA = Total Grade Points Earned / Total Credit Hours Attempted
        </div>
        <p className="mb-4">
          <strong>Step-by-Step Example:</strong> Imagine you took two courses. You earned an 'A' (4.0 points) in a 3-credit Psychology course, and a 'B' (3.0 points) in a 4-credit Biology course.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Psychology: 4.0 grade points × 3 credits = <strong>12 total points</strong></li>
          <li>Biology: 3.0 grade points × 4 credits = <strong>12 total points</strong></li>
          <li><strong>Sum of Points:</strong> 12 + 12 = 24 total points</li>
          <li><strong>Sum of Credits:</strong> 3 + 4 = 7 total credits</li>
          <li><strong>Final Calculation:</strong> 24 / 7 = <strong>3.42 GPA</strong></li>
        </ul>

        <h3 className="text-2xl font-medium text-foreground mt-8 mb-3">Standard 4.0 Grading Scale Chart</h3>
        <p className="mb-4">
          Most modern colleges and universities utilize a standard 4.0 scale with pluses and minuses affecting the exact decimal value. Our calculator defaults to the standard values utilized by the College Board and most major universities:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 border-y border-border font-semibold text-foreground">Letter Grade</th>
                <th className="p-3 border-y border-border font-semibold text-foreground">GPA Value</th>
                <th className="p-3 border-y border-border font-semibold text-foreground">Percentage Equivalent (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-border">A / A+</td><td className="p-3 border-b border-border font-mono text-primary">4.0</td><td className="p-3 border-b border-border">93 - 100</td></tr>
              <tr><td className="p-3 border-b border-border">A-</td><td className="p-3 border-b border-border font-mono text-primary">3.7</td><td className="p-3 border-b border-border">90 - 92</td></tr>
              <tr><td className="p-3 border-b border-border">B+</td><td className="p-3 border-b border-border font-mono text-primary">3.3</td><td className="p-3 border-b border-border">87 - 89</td></tr>
              <tr><td className="p-3 border-b border-border">B</td><td className="p-3 border-b border-border font-mono text-primary">3.0</td><td className="p-3 border-b border-border">83 - 86</td></tr>
              <tr><td className="p-3 border-b border-border">B-</td><td className="p-3 border-b border-border font-mono text-primary">2.7</td><td className="p-3 border-b border-border">80 - 82</td></tr>
              <tr><td className="p-3 border-b border-border">C+</td><td className="p-3 border-b border-border font-mono text-primary">2.3</td><td className="p-3 border-b border-border">77 - 79</td></tr>
              <tr><td className="p-3 border-b border-border">C</td><td className="p-3 border-b border-border font-mono text-primary">2.0</td><td className="p-3 border-b border-border">73 - 76</td></tr>
              <tr><td className="p-3 border-b border-border">C-</td><td className="p-3 border-b border-border font-mono text-primary">1.7</td><td className="p-3 border-b border-border">70 - 72</td></tr>
              <tr><td className="p-3 border-b border-border">D+</td><td className="p-3 border-b border-border font-mono text-primary">1.3</td><td className="p-3 border-b border-border">67 - 69</td></tr>
              <tr><td className="p-3 border-b border-border">D</td><td className="p-3 border-b border-border font-mono text-primary">1.0</td><td className="p-3 border-b border-border">60 - 66</td></tr>
              <tr><td className="p-3 border-b border-border">F</td><td className="p-3 border-b border-border font-mono text-primary">0.0</td><td className="p-3 border-b border-border">Below 60</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-medium text-foreground mt-8 mb-3">Unweighted vs. Weighted GPA: What’s the Difference?</h3>
        <p className="mb-4">
          Particularly relevant for high school students in the U.S., you may encounter two variations of Grade Point Averages on your transcript.
        </p>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li>
            <strong>Unweighted GPA:</strong> This represents grades measured on the standard 4.0 scale, regardless of course difficulty. An 'A' in standard Biology and an 'A' in AP Advanced Biology both equal a 4.0. This makes it difficult for colleges to differentiate students who took easy workloads from those who challenged themselves.
          </li>
          <li>
            <strong>Weighted GPA:</strong> This alternate scale accounts for class difficulty, typically by adding bonus points (usually 0.5 to 1.0 points) to upper-level courses like Honors, Advanced Placement (AP), or International Baccalaureate (IB) classes. In a weighted system, an 'A' in an AP class might be worth a 5.0 instead of a 4.0, allowing exceptional students to achieve GPAs higher than 4.0.
          </li>
        </ul>

        <h3 className="text-2xl font-medium text-foreground mt-8 mb-3">Frequently Asked Questions</h3>
        <dl className="space-y-6">
          <div>
            <dt className="font-semibold text-foreground text-lg">How do Pass/Fail classes affect my GPA?</dt>
            <dd className="mt-2 text-muted-foreground">In the vast majority of institutions, courses taken as Pass/Fail (or Satisfactory/Unsatisfactory) are <strong>not</strong> factored into your GPA formula. You receive the credits if you pass, but no mathematical value is added to your grade point total. However, beware: at some strict academic universities, failing a pass/fail class acts as an 'F' (0.0) on your GPA, while passing has no positive numerical impact.</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground text-lg">What is a "good" GPA in college?</dt>
            <dd className="mt-2 text-muted-foreground">The definition of a "good" GPA is highly subjective and depends entirely on your major, your career goals, and the prestige of your university. Generally speaking, a <strong>3.0 (B average)</strong> is the baseline requirement for many entry-level corporate jobs and standard graduate programs. Highly competitive fields (like Investment Banking, Top-Tier Tech Companies, Medical School, and Law School) typically screen out applicants falling below a <strong>3.5 or 3.7 GPA</strong>. If your goal is Academic Honors (cum laude), you generally need a 3.5 or higher.</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground text-lg">My GPA is low. How can I fix it quickly?</dt>
            <dd className="mt-2 text-muted-foreground">Raising a GPA becomes mathematically harder the more credits you have already accumulated. The fastest way to boost a low GPA is through <strong>grade replacement or academic forgiveness programs</strong>. Many universities allow you to retake a class you got a D or F in, completely replacing the old 0.0 with the new, higher grade in the calculation. Beyond that, taking an intentional semester filled with easier "GPA booster" electives, reducing your credit hour load to focus on fewer classes, and strictly utilizing the Pomodoro technique for study management are your best bets.</dd>
          </div>
        </dl>
      </article>
    </div>
  );
}
