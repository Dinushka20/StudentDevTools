import { Metadata } from "next";
import QuizComponent, { Question } from "@/components/quiz/QuizComponent";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "HTML & CSS Quiz | StudentDev Hub",
  description: "Test your frontend fundamentals.",
};

const questions: Question[] = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Highly Typed Machine Language"],
    answer: 0,
    explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages."
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["fgcolor", "color", "text-color", "text-style"],
    answer: 1,
    explanation: "The 'color' property in CSS is used to set the color of the text. For example: `color: blue;`"
  },
  {
    question: "How do you make each word in a text start with a capital letter using CSS?",
    options: ["text-transform: capitalize;", "text-transform: uppercase;", "font-style: capitalize;", "text-style: capital;"],
    answer: 0,
    explanation: "The `text-transform: capitalize;` property transforms the first character of each word to uppercase."
  },
  {
    question: "Which HTML5 element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section>", "<nav>"],
    answer: 1,
    explanation: "The <footer> element is a semantic part of HTML5 used to define the footer of a webpage or a section."
  },
  {
    question: "In CSS Flexbox, what is the default value of the flex-direction property?",
    options: ["column", "row", "row-reverse", "column-reverse"],
    answer: 1,
    explanation: "The default flex-direction is 'row', meaning items are placed from left to right."
  }
];

export default function HtmlCssQuiz() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <Link href="/practice" className="inline-flex items-center text-sm text-muted-foreground hover:text-green-500 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Quizzes
        </Link>
        <h1 className="text-4xl font-bold mb-4">HTML & CSS Fundamentals Quiz</h1>
        <p className="text-lg text-muted-foreground">Test your knowledge of core web development building blocks.</p>
      </div>
      <div className="mb-16">
        <QuizComponent questions={questions} title="HTML & CSS Fundamentals" />
      </div>
    </div>
  );
}
