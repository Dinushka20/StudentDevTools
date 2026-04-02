"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type Semester = {
  id: string;
  name: string;
  credits: number | "";
  gpa: number | "";
};

export default function CgpaCalculator() {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: "1", name: "Semester 1", credits: 15, gpa: 3.5 },
    { id: "2", name: "Semester 2", credits: 14, gpa: 3.8 },
  ]);

  const addSemester = () => {
    setSemesters([...semesters, { id: Math.random().toString(), name: `Semester ${semesters.length + 1}`, credits: "", gpa: "" }]);
  };

  const removeSemester = (id: string) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter((s) => s.id !== id));
    }
  };

  const updateSemester = (id: string, field: keyof Semester, value: string | number) => {
    setSemesters(semesters.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const calculateCgpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    semesters.forEach((sem) => {
      const gpa = Number(sem.gpa);
      const credits = Number(sem.credits);
      if (gpa >= 0 && credits > 0) {
        totalPoints += gpa * credits;
        totalCredits += credits;
      }
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm text-card-foreground">
      <div className="p-6 border-b border-border bg-muted/20 rounded-t-2xl">
        <h2 className="text-2xl font-semibold">Cumulative GPA Calculator</h2>
        <p className="text-muted-foreground mt-1 text-sm">Add your past semesters to find out your overall CGPA.</p>
      </div>
      <div className="p-6">
        <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-muted-foreground">
          <div className="col-span-1 border-b border-border pb-2 md:col-span-4">Semester Name</div>
          <div className="col-span-1 border-b border-border pb-2 md:col-span-3">Credits Attempted</div>
          <div className="col-span-1 border-b border-border pb-2 md:col-span-3">Semester GPA</div>
          <div className="col-span-1 border-b border-border pb-2 text-center md:col-span-2">Action</div>
        </div>
        <div className="space-y-4">
          {semesters.map((sem, index) => (
            <div key={sem.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="col-span-1 md:col-span-4 relative mt-4 md:mt-0">
                <span className="md:hidden text-xs font-semibold text-muted-foreground absolute -top-5 left-1">Semester</span>
                <input
                  type="text"
                  placeholder={`Semester ${index + 1}`}
                  value={sem.name}
                  onChange={(e) => updateSemester(sem.id, "name", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <div className="col-span-1 md:col-span-3 relative mt-4 md:mt-0">
                <span className="md:hidden text-xs font-semibold text-muted-foreground absolute -top-5 left-1">Credits</span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={sem.credits}
                  onChange={(e) => updateSemester(sem.id, "credits", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="e.g. 15"
                />
              </div>
              <div className="col-span-1 md:col-span-3 relative mt-4 md:mt-0">
                <span className="md:hidden text-xs font-semibold text-muted-foreground absolute -top-5 left-1">GPA</span>
                <input
                  type="number"
                  min="0"
                  max="4"
                  step="0.01"
                  value={sem.gpa}
                  onChange={(e) => updateSemester(sem.id, "gpa", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="e.g. 3.5"
                />
              </div>
              <div className="col-span-1 flex md:col-span-2 justify-end md:justify-center mt-2 md:mt-0">
                <button
                  onClick={() => removeSemester(sem.id)}
                  disabled={semesters.length === 1}
                  className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition disabled:opacity-50"
                  title="Remove Semester"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-border pt-6">
          <button
            onClick={addSemester}
            className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition mb-4 md:mb-0 bg-primary/10 px-4 py-2 rounded-lg"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Semester
          </button>
          
          <div className="bg-primary/5 px-6 py-4 rounded-xl border border-primary/20 flex flex-col items-end w-full md:w-auto">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Cumulative GPA</span>
            <span className="text-4xl md:text-5xl font-bold text-primary">{calculateCgpa()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
