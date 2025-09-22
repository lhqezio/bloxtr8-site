"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, AlertTriangle, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const SecurityVerificationDemo = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  const verificationSteps = [
    {
      step: "Wallet Check",
      status: "verified",
      details: "No blacklisted addresses",
      time: "2.3s"
    },
    {
      step: "Roblox Verification", 
      status: "verified",
      details: "Account age: 2.3 years",
      time: "1.8s"
    },
    {
      step: "Identity Check",
      status: "verified", 
      details: "Phone + Email verified",
      time: "3.1s"
    },
    {
      step: "Risk Assessment",
      status: "low",
      details: "Trust score: 94/100",
      time: "4.2s"
    }
  ];

  // Intersection Observer to detect when component comes into viewport
  useEffect(() => {
    const currentRef = demoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setIsRunning(true);
            setHasRun(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasRun]);

  useEffect(() => {
    if (!isRunning) return;

    // Complete first step immediately
    setCompletedSteps([0]);
    
    const interval = setInterval(() => {
      setCompletedSteps(prev => {
        const nextStep = prev.length;
        if (nextStep < verificationSteps.length) {
          return [...prev, nextStep];
        }
        return prev;
      });
    }, 2000); // Fixed 2-second interval between steps

    // Stop after all steps are completed
    const stopTimeout = setTimeout(() => {
      clearInterval(interval);
      setIsRunning(false);
    }, verificationSteps.length * 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, [isRunning, verificationSteps.length]);

  return (
    <div ref={demoRef} className="bg-background/50 rounded-2xl p-6 border border-border max-w-4xl mx-auto shadow-light">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <Shield className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="text-foreground font-semibold">Security Verification</h3>
          <p className="text-muted-foreground text-sm">Real-time protection checks</p>
        </div>
      </div>

      {/* Verification Steps */}
      <div className="space-y-3">
        {verificationSteps.map((item, index) => {
          const isCompleted = completedSteps.includes(index);
          const isCurrentlyRunning = isRunning && !isCompleted && (index === 0 || completedSteps.includes(index - 1));
          
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <Card className={`bg-card/50 border-border p-4 shadow-light transition-all duration-500 ${
                isCompleted ? 'border-green-600 dark:border-green-400' : ''
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCompleted 
                        ? (item.status === 'verified' ? 'bg-card border-2 border-green-600 dark:border-green-400' : 'bg-yellow-100 dark:bg-yellow-900/30')
                        : isCurrentlyRunning 
                        ? 'bg-blue-100 dark:bg-blue-900/30 animate-pulse'
                        : 'bg-gray-100 dark:bg-gray-900/30'
                    }`}>
                      {isCompleted ? (
                        item.status === 'verified' ? (
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        )
                      ) : isCurrentlyRunning ? (
                        <div className="w-4 h-4 border-2 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Clock className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className={`text-foreground font-medium transition-colors duration-500 ${
                        isCompleted ? 'text-green-700 dark:text-green-300' : ''
                      }`}>
                        {item.step}
                        {isCurrentlyRunning && <span className="ml-2 text-blue-600 dark:text-blue-400 text-sm">Running...</span>}
                      </h4>
                      <p className="text-muted-foreground text-sm">{item.details}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted ? (
                      item.status === 'verified' ? (
                        <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400 text-xs">
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          Low Risk
                        </Badge>
                      )
                    ) : (
                      <Badge variant="outline" className="text-xs">
                        {isCurrentlyRunning ? 'Checking...' : 'Pending'}
                      </Badge>
                    )}
                    {isCompleted && (
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Clock className="h-3 w-3" />
                        <span>{item.time}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span>All checks completed in 11.4s</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span>Trade approved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export with dynamic import to ensure client-side only rendering
export default dynamic(() => Promise.resolve(SecurityVerificationDemo), {
  ssr: false,
  loading: () => (
    <div className="bg-background/50 rounded-2xl p-6 border border-border max-w-4xl mx-auto shadow-light">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <Shield className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="text-foreground font-semibold">Security Verification</h3>
          <p className="text-muted-foreground text-sm">Loading verification system...</p>
        </div>
      </div>
    </div>
  )
});
