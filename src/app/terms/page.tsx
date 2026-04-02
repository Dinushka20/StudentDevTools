import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | StudentDev Hub",
  description: "Terms of Service for using StudentDev Hub.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
        <p>By accessing and using StudentDev Hub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8">2. Educational Purposes Only</h2>
        <p>All calculators, quizzes, and reference materials provided on StudentDev Hub are for educational and informational purposes only. We do not guarantee the absolute accuracy of the calculations or that the code snippets will be error-free in all contexts. Always verify your own work.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8">3. Modifications</h2>
        <p>We reserve the right to modify these terms from time to time at our sole discretion. Your continued use of the site following such change constitutes your agreement to follow and be bound by the modified terms.</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8">4. Contact Information</h2>
        <p>If you have any questions or concerns regarding our terms, please contact us via our Contact page.</p>
      </div>
    </div>
  );
}
