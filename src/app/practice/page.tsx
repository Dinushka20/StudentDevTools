import { BrainCircuit, PenTool, Server } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Quizzes | StudentDev Hub",
  description: "Test your programming and computer science knowledge.",
};

const quizzes = [
  { name: "HTML & CSS Quiz", icon: <PenTool className="w-8 h-8" />, href: "/practice/html-css-quiz", desc: "Test your knowledge on frontend structures, Flexbox, and CSS specificities." },
  { name: "Java Basics Quiz", icon: <BrainCircuit className="w-8 h-8" />, href: "/practice/java-basics-quiz", desc: "Evaluate your understanding of OOP principles, syntax, and memory in Java." },
  { name: "DBMS Quiz", icon: <Server className="w-8 h-8" />, href: "/practice/dbms-quiz", desc: "Check your knowledge of database normalization, SQL queries, and ACID properties." },
];

export default function PracticeIndex() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Quiz Center</h1>
        <p className="text-lg text-muted-foreground">Challenge yourself with interactive quizzes designed to prepare you for midterms, finals, and entry-level programming interviews. Every question includes a detailed explanation.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Link key={quiz.name} href={quiz.href} className="group block h-full p-6 rounded-2xl bg-card border border-border flex flex-col items-start hover:border-green-500/50 transition-colors">
            <div className="text-green-500 bg-green-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {quiz.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{quiz.name}</h2>
            <p className="text-muted-foreground">{quiz.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
