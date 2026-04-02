"use client";
import { useState } from "react";

export default function UnitConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("km");
  const [to, setTo] = useState("mi");

  const ratios: Record<string, number> = {
    "mm": 0.001,
    "cm": 0.01,
    "m": 1,
    "km": 1000,
    "in": 0.0254,
    "ft": 0.3048,
    "yd": 0.9144,
    "mi": 1609.344
  };

  const convert = () => {
    const amount = parseFloat(val);
    if (isNaN(amount)) return "0.00";
    
    // Convert to base unit (meters)
    const base = amount * ratios[from];
    // Convert from base to target
    const result = base / ratios[to];
    
    // Format to 4 decimal places max if it has decimals
    return Number.isInteger(result) ? result.toString() : result.toFixed(4).replace(/\.?0+$/, '');
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden text-card-foreground p-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
        <div className="space-y-4">
          <label className="text-sm font-medium text-muted-foreground">From</label>
          <input 
            type="number" 
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <select 
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none p-2"
          >
            {Object.keys(ratios).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
        
        <div className="text-2xl font-bold text-muted-foreground flex justify-center mt-6">=</div >
        
        <div className="space-y-4">
          <label className="text-sm font-medium text-muted-foreground">To</label>
          <div className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 min-h-[50px] flex items-center font-bold text-lg text-foreground">
            {convert()}
          </div>
          <select 
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none p-2"
          >
            {Object.keys(ratios).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
