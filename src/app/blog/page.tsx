import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookText } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Blog & Guides | StudentDev Hub",
  description: "Comprehensive guides on time management, academic success, and productivity for students.",
};

const POSTS = [
  {
    title: "The Ultimate Guide to Student Time Management",
    slug: "time-management-for-students",
    category: "Productivity",
    excerpt: "Discover how to leverage the Pomodoro technique to eliminate burnout, retain more information, and finally stop cramming before midterms.",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  },
  {
    title: "Does Your College GPA Actually Matter?",
    slug: "ultimate-guide-to-gpa",
    category: "Academics",
    excerpt: "An in-depth look at when your transcript is crucial (internships, grad school, finance) and when employers barely even glance at it.",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }
];

export default function BlogIndexPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
          <BookText className="w-4 h-4" /> Articles & Guides
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">StudentDev Blog</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          In-depth articles, productivity hacks, and academic advice designed specifically for computer science students, engineers, and ambitious undergrads.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col justify-between p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors h-full">
            <div>
              <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-3 block">{post.category}</span>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <div className="text-sm text-primary font-medium flex items-center">
                Read <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
