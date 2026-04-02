import { BookOpen, FileCode2, Database, LayoutTemplate, Box, GitBranch } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding Resources | StudentDev Hub",
  description: "Comprehensive coding references and cheatsheets for students.",
};

const resources = [
  { name: "HTML Basics", icon: <LayoutTemplate className="w-8 h-8" />, href: "/resources/html-basics", desc: "Essential tags, structure, and attributes." },
  { name: "CSS Flexbox Guide", icon: <Box className="w-8 h-8" />, href: "/resources/css-flexbox-guide", desc: "Master CSS Flexbox layouts with clear visual rules." },
  { name: "JavaScript Arrays", icon: <FileCode2 className="w-8 h-8" />, href: "/resources/javascript-arrays", desc: "Array methods, manipulation, and modern JS techniques." },
  { name: "Java OOP Notes", icon: <BookOpen className="w-8 h-8" />, href: "/resources/java-oop-notes", desc: "Core Object-Oriented Programming concepts in Java." },
  { name: "SQL Commands", icon: <Database className="w-8 h-8" />, href: "/resources/sql-commands", desc: "Essential DDL, DML, and query patterns in SQL." },
  { name: "Git Cheatsheet", icon: <GitBranch className="w-8 h-8" />, href: "/resources/git-cheatsheet", desc: "Critical branch, commit, and remote commands." },
];

export default function ResourcesIndex() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Coding Resources</h1>
        <p className="text-lg text-muted-foreground">Detailed cheatsheets and reference guides to help you ace your programming assignments and understand core concepts without skimming through bloated wikis.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => (
          <Link key={res.name} href={res.href} className="group block h-full p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-colors">
            <div className="text-blue-500 bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {res.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{res.name}</h2>
            <p className="text-muted-foreground">{res.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
