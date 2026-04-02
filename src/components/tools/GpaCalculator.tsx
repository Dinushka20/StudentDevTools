"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type Course = {
  id: string;
  name: string;
  credits: number;
  grade: string;
};

const gradePoints: Record<string, number> = {
  "A+": 4.0, "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "F": 0.0
};

export default function GpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "", credits: 3, grade: "A" },
    { id: "2", name: "", credits: 3, grade: "B" },
    { id: "3", name: "", credits: 3, grade: "A-" }
  ]);

  const addCourse = () => {
    setCourses([...courses, { id: Math.random().toString(), name: "", credits: 3, grade: "A" }]);
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const gpaValue = gradePoints[course.grade] || 0;
      totalPoints += gpaValue * course.credits;
      totalCredits += course.credits;
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const gpa = calculateGpa();

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm text-card-foreground">
      <div className="p-6 border-b border-border bg-muted/20 rounded-t-2xl">
        <h2 className="text-2xl font-semibold">Semester GPA Calculator</h2>
        <p className="text-muted-foreground mt-1 text-sm">Add your courses below to calculate your GPA.</p>
      </div>
      <div className="p-6">
        <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-muted-foreground">
          <div className="col-span-1 border-b border-border pb-2 md:col-span-5">Course Name</div>
          <div className="col-span-1 border-b border-border pb-2 md:col-span-3">Credits</div>
          <div className="col-span-1 border-b border-border pb-2 md:col-span-3">Grade</div>
          <div className="col-span-1 border-b border-border pb-2 text-center">Action</div>
        </div>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={course.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="col-span-1 md:col-span-5 relative mt-4 md:mt-0">
                <span className="md:hidden text-xs font-semibold text-muted-foreground absolute -top-5 left-1">Course</span>
                <input
                  type="text"
                  placeholder={`Course ${index + 1}`}
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <div className="col-span-1 md:col-span-3 relative mt-4 md:mt-0">
                <span className="md:hidden text-xs font-semibold text-muted-foreground absolute -top-5 left-1">Credits</span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={course.credits || ""}
                  onChange={(e) => updateCourse(course.id, "credits", parseFloat(e.target.value) || 0)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <div className="col-span-1 md:col-span-3 relative mt-4 md:mt-0">
                <span className="md:hidden text-xs font-semibold text-muted-foreground absolute -top-5 left-1">Grade</span>
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none appearance-none"
                >
                  {Object.keys(gradePoints).map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-1 flex justify-end md:justify-center mt-2 md:mt-0">
                <button
                  onClick={() => removeCourse(course.id)}
                  disabled={courses.length === 1}
                  className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition disabled:opacity-50"
                  title="Remove Course"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-border pt-6">
          <button
            onClick={addCourse}
            className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition mb-4 md:mb-0 bg-primary/10 px-4 py-2 rounded-lg"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Course
          </button>
          
          <div className="bg-primary/5 px-6 py-4 rounded-xl border border-primary/20 flex flex-col items-end w-full md:w-auto">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Your GPA</span>
            <span className="text-4xl md:text-5xl font-bold text-primary">{gpa}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
