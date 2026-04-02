import { Metadata } from "next";
import UnitConverter from "@/components/tools/UnitConverter";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Length & Distance Unit Converter | StudentDev Hub",
  description: "Convert units between Metric and Imperial measures instantly.",
};

export default function UnitConverterPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <Link href="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tools
        </Link>
        <h1 className="text-4xl font-bold mb-4">Unit Converter</h1>
        <p className="text-lg text-muted-foreground">Quickly convert length and distance measurements between Metric and Imperial systems.</p>
      </div>

      <div className="mb-16">
        <UnitConverter />
      </div>

      <article className="prose prose-invert max-w-none text-muted-foreground border-t border-border pt-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Metric vs Imperial System</h2>
        <p className="mb-4">
          The world fundamentally uses two major systems of measurement. The <strong>Metric system</strong>, which is based on powers of ten and used globally in science and everyday life by almost all nations, and the <strong>Imperial system</strong> (and US Customary system), predominantly used in the United States.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">Conversion Rules of Thumb</h3>
        <p className="mb-4">Here are some standard lengths you should commit to memory for quick approximations:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>1 inch (in) = exactly 2.54 centimeters (cm)</li>
          <li>1 foot (ft) = 12 inches = 0.3048 meters (m)</li>
          <li>1 yard (yd) = 3 feet = ~0.91 meters (m)</li>
          <li>1 mile (mi) = 5280 feet = ~1.609 kilometers (km)</li>
        </ul>
        <p className="text-sm border border-border p-4 rounded-lg bg-muted/20">Using our robust converter tool guarantees you don't lose precious fractional decimals during tests where precise rounding matters!</p>
      </article>
    </div>
  );
}
