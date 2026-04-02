import { Calculator, Percent, Clock, Binary, Key, Baseline } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Tools | StudentDev Hub",
  description: "Free online calculators and tools for students.",
};

const tools = [
  { name: "GPA Calculator", icon: <Calculator className="w-8 h-8" />, href: "/tools/gpa-calculator", desc: "Calculate your semester GPA easily with custom credits." },
  { name: "CGPA Calculator", icon: <Baseline className="w-8 h-8" />, href: "/tools/cgpa-calculator", desc: "Calculate your cumulative GPA across multiple semesters." },
  { name: "Percentage Calculator", icon: <Percent className="w-8 h-8" />, href: "/tools/percentage-calculator", desc: "Quickly find percentages, percentage differences, and more." },
  { name: "Password Generator", icon: <Key className="w-8 h-8" />, href: "/tools/password-generator", desc: "Generate secure, random passwords for your accounts." },
  { name: "Study Timer", icon: <Clock className="w-8 h-8" />, href: "/tools/study-timer", desc: "Pomodoro-style study timer to keep you focused." },
  { name: "Unit Converter", icon: <Binary className="w-8 h-8" />, href: "/tools/unit-converter", desc: "Convert between various measurement units instantly." },
];

export default function ToolsIndex() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Student Tools</h1>
        <p className="text-lg text-muted-foreground">Access our collection of free, easy-to-use tools designed specifically to help students manage their academics and daily tasks efficiently.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.name} href={tool.href} className="group block h-full p-6 rounded-2xl bg-card border border-border flex flex-col items-start hover:border-primary/50 transition-colors">
            <div className="text-primary bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {tool.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-muted-foreground">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
