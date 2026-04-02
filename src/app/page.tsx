"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator, Code2, BrainCircuit, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="container relative z-10 text-center mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Empower Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Student Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Everything you need to succeed in one place. Powerful calculators, comprehensive coding references, and interactive practice exams tailored for tech students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/tools" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition shadow-[0_0_30px_-5px_var(--color-primary)]">
                Explore Tools <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link href="/resources" className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition shadow-sm border border-white/5">
                Coding Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-background border border-border shadow-sm flex flex-col items-start gap-4 transition-colors hover:border-primary/50"
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold">Student Tools</h3>
              <p className="text-muted-foreground flex-grow leading-relaxed">
                Calculate your GPA, manage your study sessions, generate secure passwords, and perform quick grade conversions without leaving the site.
              </p>
              <Link href="/tools" className="mt-4 text-primary font-medium flex items-center hover:underline">
                View all tools <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-background border border-border shadow-sm flex flex-col items-start gap-4 transition-colors hover:border-blue-500/50"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                <Code2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold">Coding References</h3>
              <p className="text-muted-foreground flex-grow leading-relaxed">
                Quick, text-rich references for HTML, CSS, JavaScript, Java, and SQL. Stop searching the web and start building assignments faster.
              </p>
              <Link href="/resources" className="mt-4 text-blue-500 font-medium flex items-center hover:underline">
                Explore docs <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-background border border-border shadow-sm flex flex-col items-start gap-4 transition-colors hover:border-green-500/50"
            >
              <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold">Practice Quizzes</h3>
              <p className="text-muted-foreground flex-grow leading-relaxed">
                Test your knowledge with interactive quizzes. Review deep explanations for every answer to ace your next university exam.
              </p>
              <Link href="/practice" className="mt-4 text-green-500 font-medium flex items-center hover:underline">
                Start practice <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
