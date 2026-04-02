import { Metadata } from "next";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Secure Password Generator | StudentDev Hub",
  description: "Create strong, secure, random passwords instantly to protect your academic accounts.",
};

export default function PasswordGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <Link href="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tools
        </Link>
        <h1 className="text-4xl font-bold mb-4">Secure Password Generator</h1>
        <p className="text-lg text-muted-foreground">Generate random, secure passwords to keep your university accounts and personal data safe.</p>
      </div>

      <div className="mb-16">
        <PasswordGenerator />
      </div>

      <article className="prose prose-invert max-w-none text-muted-foreground border-t border-border pt-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Why you need a strong password</h2>
        <p className="mb-4">
          In today's digital era, college students manage dozens of platforms: portals, emails, banking, and social profiles. Reusing simple passwords makes you incredibly vulnerable to credential stuffing attacks. A strong password acts as the primary defense line against unauthorized access.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">What makes a password strong?</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Length:</strong> It should be at least 12 characters long. The longer it is, the harder it is for a computer to crack via brute force.</li>
          <li><strong>Complexity:</strong> It should contain a mix of uppercase letters, lowercase letters, numbers, and special symbols.</li>
          <li><strong>Unpredictability:</strong> It should avoid dictionary words, names, or predictable patterns like "Password123!".</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">Password Management Tips</h3>
        <p className="mb-4">Since attempting to memorize 20+ randomly generated strings is impossible, we highly recommend pairing this generator with a dedicated password manager. A password manager encrypts and stores all your credentials so you only ever have to memorize one single master password.</p>
        
        <div className="bg-muted/30 p-4 rounded-lg border border-border mt-8">
          <h4 className="text-foreground font-semibold mb-2">Did you know?</h4>
          <p className="text-sm">A 16-character password with letters, numbers, and symbols takes significantly longer to crack than the current age of the universe using traditional brute-force computing.</p>
        </div>
      </article>
    </div>
  );
}
