"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/components/analytics";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to analytics
    trackEvent("error_boundary", {
      event_category: "error",
      event_label: "react_error",
      error_message: error.message,
      error_stack: error.stack,
      component_stack: errorInfo.componentStack
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
      }

      return <DefaultErrorFallback error={this.state.error!} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

// Default error fallback component
const DefaultErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({ 
  error, 
  resetError 
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h2 className="text-2xl font-mono-bold mb-2 text-red-400">
            Something went wrong
          </h2>
          <p className="text-muted-foreground">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
        </div>
        
        {process.env.NODE_ENV === "development" && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-sm text-muted-foreground mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-xs bg-red-900/20 p-3 rounded border border-red-500/20 overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
        
        <div className="flex gap-3 justify-center">
          <Button 
            onClick={resetError}
            variant="outline"
            className="rounded-2xl"
          >
            Try Again
          </Button>
          <Button 
            onClick={() => window.location.reload()}
            className="rounded-2xl"
          >
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  );
};

// Hook for error handling in functional components
export const useErrorHandler = () => {
  const handleError = React.useCallback((error: Error, context?: string) => {
    // Track error in analytics
    trackEvent("client_error", {
      event_category: "error",
      event_label: "javascript_error",
      error_message: error.message,
      error_stack: error.stack,
      context: context || "unknown"
    });

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error(`Error in ${context || "unknown context"}:`, error);
    }
  }, []);

  return { handleError };
};

export default ErrorBoundary;
