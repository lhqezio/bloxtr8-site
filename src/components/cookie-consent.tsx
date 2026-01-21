"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "bloxtr8-cookie-consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to ensure smooth animation
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[200] transition-all duration-300 ${
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-background/98 backdrop-blur-md border-t border-border shadow-lg">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-mono-medium text-base mb-2">Cookie Consent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept", you consent to our use of cookies.{" "}
                <a
                  href="#"
                  className="underline hover:text-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    // Link to cookie policy
                  }}
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="rounded-xl border-border text-muted-foreground hover:text-foreground font-mono text-sm"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="rounded-xl font-mono text-sm"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
