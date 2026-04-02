import { Metadata } from "next";
import QuizComponent, { Question } from "@/components/quiz/QuizComponent";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Java Basics Quiz | StudentDev Hub",
  description: "Evaluate your understanding of OOP principles and Java syntax.",
};

const questions: Question[] = [
  {
    question: "Which of these cannot be used for a variable name in Java?",
    options: ["identifier", "keyword", "variable", "None of the above"],
    answer: 1,
    explanation: "Keywords (like public, void, static, class) are reserved words in Java and cannot be used as variable names (identifiers)."
  },
  {
    question: "Which of the following creates a new instance of an array in Java?",
    options: ["int[] array = new int[5];", "int array = new int[];", "int array[] = {1, 2, 3};", "Both A and C"],
    answer: 3,
    explanation: "Both explicitly defining the length using the 'new' keyword and implicitly defining via array literal initializer braces are valid ways to instantiate an array."
  },
  {
    question: "What is the return type of a constructor?",
    options: ["void", "int", "None of the above", "The class type"],
    answer: 2,
    explanation: "Constructors DO NOT have a return type in Java, not even void."
  },
  {
    question: "Which OOP concept is achieved by using the 'extends' keyword?",
    options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    answer: 2,
    explanation: "The 'extends' keyword is specifically used to allow a subclass to inherit the fields and methods of a parent class (Inheritance)."
  },
  {
    question: "Which memory area stores objects in Java?",
    options: ["Stack memory", "Heap memory", "Register", "Cache"],
    answer: 1,
    explanation: "In Java, all objects and arrays are dynamically allocated within the Heap memory segment."
  }
];

export default function JavaBasicsQuiz() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <Link href="/practice" className="inline-flex items-center text-sm text-muted-foreground hover:text-green-500 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Quizzes
        </Link>
        <h1 className="text-4xl font-bold mb-4">Java Basics Quiz</h1>
        <p className="text-lg text-muted-foreground">Check your understanding of basic Java syntax and memory management.</p>
      </div>
      <div className="mb-16">
        <QuizComponent questions={questions} title="Java Fundamentals" />
      </div>
    </div>
  );
}
