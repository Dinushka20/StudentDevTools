"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export default function QuizComponent({ questions, title }: { questions: Question[], title: string }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[currentQ].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 text-center max-w-xl mx-auto shadow-sm">
        <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
        <div className="text-6xl font-bold text-primary mb-6">{score}/{questions.length}</div>
        <p className="text-muted-foreground mb-8">
          {score === questions.length ? "Perfect score! You truly master this topic." : "Good effort! Review the concepts you missed and try again."}
        </p>
        <button onClick={reset} className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition text-lg w-full md:w-auto">
          Retake Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm text-card-foreground p-6 md:p-8 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground font-medium border-b border-border pb-4">
        <span>{title}</span>
        <span>Question {currentQ + 1} of {questions.length}</span>
      </div>
      
      <h2 className="text-2xl font-semibold mb-8 leading-tight">{q.question}</h2>
      
      <div className="space-y-4 mb-8">
        {q.options.map((opt, idx) => {
          let stateStyle = "border-border hover:border-primary/50 bg-background";
          if (selected !== null) {
            if (idx === q.answer) {
              stateStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
            } else if (idx === selected) {
              stateStyle = "border-destructive bg-destructive/10 text-destructive";
            } else {
              stateStyle = "border-border opacity-50";
            }
          }

          return (
            <button 
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              className={`w-full text-left p-4 rounded-xl border-2 transition font-medium flex justify-between items-center text-lg ${stateStyle}`}
            >
              <span>{opt}</span>
              {selected !== null && idx === q.answer && <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 ml-2" />}
              {selected !== null && idx === selected && idx !== q.answer && <XCircle className="w-6 h-6 text-destructive flex-shrink-0 ml-2" />}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div className="bg-muted/30 border border-border rounded-xl p-5 mb-8 animate-in fade-in slide-in-from-bottom-4 text-left">
          <h4 className="font-semibold text-foreground mb-2 flex items-center uppercase tracking-wider text-xs">
            Explanation
          </h4>
          <p className="text-muted-foreground text-base leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <div className="flex justify-end border-t border-border pt-6">
          <button onClick={nextQuestion} className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition text-lg w-full md:w-auto">
            {currentQ < questions.length - 1 ? "Next Question" : "View Results"}
          </button>
        </div>
      )}
    </div>
  );
}
