// Contact information and social media links
// Following best practices for centralized configuration

export const contact = {
  // Primary contact emails
  emails: {
    general: "contact@bloxtr8.com",
    founders: "founders@bloxtr8.com", 
    investors: "investors@bloxtr8.com",
    site: "site@bloxtr8.com",
    // Individual founder emails
    youssef: "youssef@bloxtr8.com",
    hoang: "hoang@bloxtr8.com",
    minh: "minh@bloxtr8.com"
  },
  
  // Social media and external links
  social: {
    community: "#", // Community platform link
    twitter: "#", // X/Twitter link
    linkedin: "#", // LinkedIn link
    github: "#" // GitHub link (if applicable)
  },
  
  // External services
  services: {
    calendly: "https://calendly.com/bloxtr8/demo"
  },
  
  // Company information
  company: {
    name: "Bloxtr8",
    domain: "bloxtr8.com"
  }
};

// Email templates and subjects
export const emailTemplates = {
  earlyAccess: {
    from: `${contact.company.name} <${contact.emails.site}>`,
    subject: "New Early Access Request",
    to: process.env.CONTACT_TO || contact.emails.founders
  }
};

// API error messages
export const apiMessages = {
  errors: {
    emailRequired: "Email is required",
    internalError: "Internal server error"
  },
  success: {
    emailSent: "Email sent successfully via Resend",
    resendUnavailable: "Resend not available, logging submission instead",
    contactSubmission: "Contact form submission:"
  }
};
