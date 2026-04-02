import Link from 'next/link';
import { Calculator, Code2, GraduationCap, BrainCircuit } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="bg-primary/20 p-2 rounded-lg">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight">StudentDev <span className="text-primary">Hub</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/tools" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Calculator className="h-4 w-4" /> Tools
          </Link>
          <Link href="/resources" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Code2 className="h-4 w-4" /> Resources
          </Link>
          <Link href="/practice" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <BrainCircuit className="h-4 w-4" /> Practice
          </Link>
        </nav>
      </div>
    </header>
  );
}
