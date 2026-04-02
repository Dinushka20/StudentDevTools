"use client";

import { useState } from "react";

export default function PercentageCalculator() {
  const [val1A, setVal1A] = useState("");
  const [val1B, setVal1B] = useState("");
  
  const [val2A, setVal2A] = useState("");
  const [val2B, setVal2B] = useState("");

  const calc1 = () => {
    const a = parseFloat(val1A);
    const b = parseFloat(val1B);
    if (!isNaN(a) && !isNaN(b)) {
      return ((a / 100) * b).toFixed(2);
    }
    return "0.00";
  };

  const calc2 = () => {
    const a = parseFloat(val2A);
    const b = parseFloat(val2B);
    if (!isNaN(a) && !isNaN(b) && b !== 0) {
      return ((a / b) * 100).toFixed(2);
    }
    return "0.00";
  }

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden text-card-foreground">
      <div className="p-6 border-b border-border bg-muted/20">
        <h2 className="text-xl font-semibold">What is % of a number?</h2>
      </div>
      <div className="p-6 flex flex-col md:flex-row items-center gap-4">
        <input 
          type="number" 
          value={val1A}
          onChange={(e) => setVal1A(e.target.value)}
          className="w-full md:w-32 bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="%"
        />
        <span className="font-medium text-muted-foreground">% of</span>
        <input 
          type="number" 
          value={val1B}
          onChange={(e) => setVal1B(e.target.value)}
          className="w-full md:w-32 bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Value"
        />
        <span className="font-medium text-muted-foreground">=</span>
        <div className="w-full md:w-auto bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-center min-w-[100px]">
          {calc1()}
        </div>
      </div>

      <div className="p-6 border-y border-border bg-muted/20 mt-4">
        <h2 className="text-xl font-semibold">Number is what % of another?</h2>
      </div>
      <div className="p-6 flex flex-col md:flex-row items-center gap-4">
        <input 
          type="number" 
          value={val2A}
          onChange={(e) => setVal2A(e.target.value)}
          className="w-full md:w-32 bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Value 1"
        />
        <span className="font-medium text-muted-foreground">is what % of</span>
        <input 
          type="number" 
          value={val2B}
          onChange={(e) => setVal2B(e.target.value)}
          className="w-full md:w-32 bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Value 2"
        />
        <span className="font-medium text-muted-foreground">=</span>
        <div className="w-full md:w-auto bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-center min-w-[100px]">
          {calc2()}%
        </div>
      </div>
    </div>
  );
}
