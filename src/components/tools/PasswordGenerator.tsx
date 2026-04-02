"use client";

import { useState, useEffect } from "react";
import { Copy, RefreshCw, Check } from "lucide-react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
    setCopied(false);
  };

  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm text-card-foreground p-6 max-w-xl mx-auto">
        <div className="relative mb-8">
            <input 
                type="text" 
                readOnly 
                value={password}
                className="w-full bg-background border border-border rounded-xl px-4 py-4 text-xl tracking-wider font-mono pr-24 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute right-2 top-2 flex gap-2">
                <button 
                  onClick={generatePassword}
                  className="p-2 text-muted-foreground hover:text-primary bg-muted/50 hover:bg-muted/80 rounded-lg transition"
                  title="Generate New"
                >
                    <RefreshCw className="w-5 h-5" />
                </button>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition"
                  title="Copy"
                >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
            </div>
        </div>

        <div className="space-y-6">
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Password Length</label>
                    <span className="text-primary font-bold">{length}</span>
                </div>
                <input 
                  type="range" 
                  min="8" max="32" 
                  value={length} 
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center space-x-3 bg-background p-3 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition">
                    <input 
                      type="checkbox" 
                      className="form-checkbox h-5 w-5 text-primary rounded border-border" 
                      checked={includeUppercase}
                      onChange={(e) => setIncludeUppercase(e.target.checked)}
                    />
                    <span className="text-sm font-medium">Uppercase (A-Z)</span>
                </label>
                <label className="flex items-center space-x-3 bg-background p-3 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition">
                    <input 
                      type="checkbox" 
                      className="form-checkbox h-5 w-5 text-primary rounded border-border" 
                      checked={includeNumbers}
                      onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                    <span className="text-sm font-medium">Numbers (0-9)</span>
                </label>
                <label className="flex items-center space-x-3 bg-background p-3 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition sm:col-span-2">
                    <input 
                      type="checkbox" 
                      className="form-checkbox h-5 w-5 text-primary rounded border-border" 
                      checked={includeSymbols}
                      onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                    <span className="text-sm font-medium">Symbols (@#$)</span>
                </label>
            </div>
        </div>
    </div>
  );
}
