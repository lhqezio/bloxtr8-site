"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/copy";
import { trackEvent } from "@/components/analytics";
import { useErrorHandler } from "@/components/error-boundary";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { handleError } = useErrorHandler();

  // Form validation
  const validateForm = (formData: FormData): Record<string, string> => {
    const errors: Record<string, string> = {};
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const context = formData.get("context") as string;
    
    if (!name || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!context || context.trim().length < 10) {
      errors.context = "Please provide more details about your use case (at least 10 characters)";
    }
    
    return errors;
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    
    const form = new FormData(e.currentTarget);
    
    // Validate form
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      
      // Track validation errors
      trackEvent("form_validation_error", {
        event_category: "error",
        event_label: "contact_form_validation",
        error_fields: Object.keys(validationErrors).join(",")
      });
      return;
    }
    
    // Track form submission attempt
    trackEvent("form_submit", {
      event_category: "engagement",
      event_label: "contact_form",
      form_type: "early_access"
    });
    
    try {
      const res = await fetch("/api/subscribe", { method: "POST", body: form });
      
      if (res.ok) {
        setStatus("ok");
        setErrors({});
        // Track successful submission
        trackEvent("form_success", {
          event_category: "conversion",
          event_label: "contact_form_success",
          form_type: "early_access"
        });
      } else {
        const errorData = await res.json().catch(() => ({}));
        setStatus("err");
        setErrors({ 
          general: errorData.message || "Something went wrong. Please try again." 
        });
        
        // Track form error
        trackEvent("form_error", {
          event_category: "error",
          event_label: "contact_form_error",
          error_type: "server_error",
          status_code: res.status
        });
      }
    } catch (error) {
      setStatus("err");
      setErrors({ 
        general: "Network error. Please check your connection and try again." 
      });
      
      // Handle error with error boundary
      handleError(error as Error, "contact_form_submission");
      
      // Track network error
      trackEvent("form_error", {
        event_category: "error",
        event_label: "contact_form_error",
        error_type: "network_error"
      });
    }
  }

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container-narrow">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Form Card */}
          <div className="bg-card/50 backdrop-blur-md border-2 border-border rounded-3xl p-6 md:p-8 lg:p-12 shadow-strong">
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-mono-medium text-foreground mb-2">
                    {contact.form.name.label}
                  </label>
                  <Input 
                    name="name" 
                    placeholder={contact.form.name.placeholder} 
                    required 
                    className={`bg-background/50 border-2 border-border text-foreground placeholder:text-muted-foreground h-12 md:h-14 rounded-xl transition-all ${
                      errors.name ? "border-red-500" : "hover:border-foreground/30"
                    }`}
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-sm font-mono-medium text-foreground mb-2">
                    {contact.form.email.label}
                  </label>
                  <Input 
                    name="email" 
                    placeholder={contact.form.email.placeholder} 
                    type="email" 
                    required 
                    className={`bg-background/50 border-2 border-border text-foreground placeholder:text-muted-foreground h-12 md:h-14 rounded-xl transition-all ${
                      errors.email ? "border-red-500" : "hover:border-foreground/30"
                    }`}
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Discord Handle */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-sm font-mono-medium text-foreground mb-2">
                  {contact.form.discord.label}
                </label>
                <Input 
                  name="discord" 
                  placeholder={contact.form.discord.placeholder} 
                  className="bg-background/50 border-2 border-border text-foreground placeholder:text-muted-foreground h-12 md:h-14 rounded-xl transition-all hover:border-foreground/30" 
                />
              </motion.div>

              {/* Use Case */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-sm font-mono-medium text-foreground mb-2">
                  {contact.form.context.label}
                </label>
                <Textarea 
                  name="context" 
                  placeholder={contact.form.context.placeholder} 
                  className={`bg-background/50 border-2 border-border text-foreground placeholder:text-muted-foreground min-h-[140px] rounded-xl transition-all resize-none ${
                    errors.context ? "border-red-500" : "hover:border-foreground/30"
                  }`}
                />
                {errors.context && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.context}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-4"
              >
                <Button 
                  type="submit" 
                  className="w-full h-12 md:h-14 text-base font-mono-medium rounded-xl min-h-[44px]" 
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      />
                      {contact.form.submit.loading}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {contact.form.submit.default}
                    </span>
                  )}
                </Button>
              </motion.div>

              {/* Status Messages */}
              {status === "ok" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-background/50 border-2 border-border rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0" />
                  <p className="text-foreground font-mono-medium">{contact.form.messages.success}</p>
                </motion.div>
              )}
              {status === "err" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-background/50 border-2 border-red-500/30 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 font-mono-medium">
                    {errors.general || contact.form.messages.error}
                  </p>
                </motion.div>
              )}
            </form>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              We respect your privacy. Your information will only be used to notify you about Bloxtr8 updates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}