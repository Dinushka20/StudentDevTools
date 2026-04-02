import { Metadata } from "next";
import StudyTimer from "@/components/tools/StudyTimer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pomodoro Study Timer | StudentDev Hub",
  description: "Boost your productivity with our free Pomodoro-style study timer.",
};

export default function StudyTimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <Link href="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tools
        </Link>
        <h1 className="text-4xl font-bold mb-4">Focus Study Timer</h1>
        <p className="text-lg text-muted-foreground">Utilize the Pomodoro Technique to master your study sessions and prevent burnout.</p>
      </div>

      <div className="mb-16">
        <StudyTimer />
      </div>

      <article className="prose prose-invert max-w-none text-muted-foreground border-t border-border pt-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">What is the Pomodoro Technique?</h2>
        <p className="mb-4">
          The Pomodoro Technique is a time management system developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a Pomodoro.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">How does it work?</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li><strong>Pick a task:</strong> Decide on the subject or assignment you need to finish.</li>
          <li><strong>Set the timer:</strong> Use the tool above to set a 25-minute study interval.</li>
          <li><strong>Work until it rings:</strong> Focus completely on the task. Avoid checking phones or emails.</li>
          <li><strong>Take a short break:</strong> When the 25 minutes are up, take a 5-minute break to stretch, grab water, or rest your eyes.</li>
          <li><strong>Repeat:</strong> After four Pomodoros, take a longer break (15–30 minutes).</li>
        </ol>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-3">Why are breaks important?</h3>
        <p className="mb-4">Frequent breaks are essential for mental agility. Continuous studying for hours without rest leads to diminishing returns and cognitive fatigue. Working in tight intervals trains your brain to hyper-focus because the end of the sprint is always in sight.</p>
      </article>
    </div>
  );
}
