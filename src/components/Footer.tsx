import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background/50 mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} StudentDev Hub. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
