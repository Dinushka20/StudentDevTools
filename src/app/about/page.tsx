import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | StudentDev Hub",
  description: "Learn about the mission of StudentDev Hub.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About StudentDev Hub</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          StudentDev Hub was created with a single mission in mind: to provide students in technology, computer science, and engineering with all the necessary tools and references they need in one accessible platform.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Our Vision</h2>
        <p className="text-muted-foreground mb-6">
          We believe that learning should be streamlined. Too often, students spend hours searching for the right GPA calculator, the exact syntax for a SQL join, or clear explanations of core programming concepts. We want to eliminate that friction.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Student Tools:</strong> Practical utilities like CGPA calculators, study timers, and unit converters.</li>
          <li><strong>Coding Resources:</strong> Comprehensive, text-rich references covering HTML, CSS, JavaScript, Java, and SQL.</li>
          <li><strong>Practice Exams:</strong> Curated quizzes designed to prepare you for interviews and university exams.</li>
        </ul>
      </div>
    </div>
  );
}
