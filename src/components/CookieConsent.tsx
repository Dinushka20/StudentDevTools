"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const storedConsent = localStorage.getItem("cookie_consent");
    if (!storedConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShowConsent(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-safe sm:p-6 sm:pb-6"
        >
          <div className="mx-auto max-w-4xl bg-card border border-primary/20 shadow-2xl shadow-black/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 pr-6 space-y-2">
              <h3 className="font-semibold text-foreground">We value your privacy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized ads or content via Google AdSense, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              <Link href="/privacy-policy" className="text-xs text-primary hover:underline font-medium">
                Read our Privacy Policy
              </Link>
            </div>
            <div className="flex shrink-0 gap-3 w-full sm:w-auto">
              <button
                onClick={() => setShowConsent(false)}
                className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium border border-border text-foreground hover:bg-muted rounded-lg transition-colors"
                aria-label="Decline cookies"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 sm:flex-none px-6 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors shadow-sm shadow-primary/20"
                aria-label="Accept cookies"
              >
                Accept All
              </button>
            </div>
            <button 
              onClick={() => setShowConsent(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground hidden sm:block p-1 bg-muted/50 rounded-full"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
