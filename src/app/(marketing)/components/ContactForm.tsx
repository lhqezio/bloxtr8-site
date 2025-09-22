"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/copy";
import { trackEvent } from "@/components/analytics";
import { useErrorHandler } from "@/components/error-boundary";

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
    const formData = Object.fromEntries(form.entries());
    
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
    <section id="contact" className="py-20">
      <div className="container-narrow">
        <div className="mb-12">
          <h2 className="text-4xl font-mono-bold mb-6">{contact.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {contact.description}
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-6 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input 
                name="name" 
                placeholder={contact.form.name.placeholder} 
                required 
                className={`bg-background/5 border-border text-foreground placeholder:text-muted-foreground h-12 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input 
                name="email" 
                placeholder={contact.form.email.placeholder} 
                type="email" 
                required 
                className={`bg-background/5 border-border text-foreground placeholder:text-muted-foreground h-12 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          <Input 
            name="discord" 
            placeholder={contact.form.discord.placeholder} 
            className="bg-background/5 border-border text-foreground placeholder:text-muted-foreground h-12" 
          />
          <div>
            <Textarea 
              name="context" 
              placeholder={contact.form.context.placeholder} 
              className={`bg-background/5 border-border text-foreground placeholder:text-muted-foreground min-h-[120px] ${
                errors.context ? "border-red-500" : ""
              }`}
            />
            {errors.context && <p className="text-red-400 text-sm mt-1">{errors.context}</p>}
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-medium" 
            disabled={status === "loading"}
          >
            {status === "loading" ? contact.form.submit.loading : contact.form.submit.default}
          </Button>
          {status === "ok" && <p className="text-emerald-400 font-medium">{contact.form.messages.success}</p>}
          {status === "err" && (
            <p className="text-red-400 font-medium">
              {errors.general || contact.form.messages.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}