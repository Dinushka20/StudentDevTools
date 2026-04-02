"use client";

import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function StudyTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"study" | "break">("study");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === "study" ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode: "study" | "break") => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(newMode === "study" ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden text-center max-w-sm mx-auto">
      <div className="flex bg-muted/30 border-b border-border">
        <button 
          onClick={() => switchMode("study")} 
          className={`flex-1 py-4 text-sm font-semibold transition ${mode === "study" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
        >
          Study (25m)
        </button>
        <button 
          onClick={() => switchMode("break")} 
          className={`flex-1 py-4 text-sm font-semibold transition ${mode === "break" ? "bg-emerald-600 text-white" : "text-muted-foreground hover:bg-muted"}`}
        >
          Break (5m)
        </button>
      </div>

      <div className="p-12">
        <div className={`text-7xl font-bold tabular-nums tracking-tighter mb-8 ${mode === "study" ? "text-primary" : "text-emerald-500"}`}>
          {formatTime(timeLeft)}
        </div>

        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={toggleTimer}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-md ${mode === "study" ? "bg-primary text-primary-foreground" : "bg-emerald-600 text-white"}`}
          >
            {isActive ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10 ml-2" />}
          </button>
          
          <button 
            onClick={resetTimer}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-muted/80 transition-transform hover:scale-105"
            title="Reset Timer"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
