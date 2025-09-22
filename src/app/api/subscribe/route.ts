import { NextResponse } from "next/server";
import { Resend } from "resend";
import { emailTemplates, apiMessages } from "@/config/contact";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const community = String(form.get("discord") || "");
    const context = String(form.get("context") || "");
    
    if (!email) {
      return NextResponse.json({ ok: false, error: apiMessages.errors.emailRequired }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    
    // Send email via Resend
    if (!resendKey) {
      return NextResponse.json({ 
        ok: false, 
        error: "Email service not configured. Please set RESEND_API_KEY environment variable." 
      }, { status: 500 });
    }

    try {
      const resend = new Resend(resendKey);
      
      await resend.emails.send({
        from: emailTemplates.earlyAccess.from,
        to: emailTemplates.earlyAccess.to,
        subject: emailTemplates.earlyAccess.subject,
        text: `Name: ${name}\nEmail: ${email}\nCommunity: ${community}\n\nContext:\n${context}`,
      });
      
      console.log("✅ Email sent via Resend");
    } catch (emailError) {
      console.error("❌ Failed to send email via Resend:", emailError);
      return NextResponse.json({ 
        ok: false, 
        error: "Failed to send email. Please try again later." 
      }, { status: 500 });
    }
    
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ ok: false, error: apiMessages.errors.internalError }, { status: 500 });
  }
}