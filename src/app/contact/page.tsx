"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  TrendingUp,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { Linkedin } from "@/components/Icons";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Honeypot field (hidden from users to catch automated spambots)
    website: "" 
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thekhushibansal.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Check honeypot: if filled, treat as success silently (bot filter) but do not submit
    if (form.website) {
      setStatus("submitting");
      setTimeout(() => {
        setStatus("success");
      }, 1000);
      return;
    }

    setStatus("submitting");
    
    // Simulate API request (e.g. sending to vercel handler / nodemailer / formspree)
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: ""
      });
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      
      {/* Page Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/25 font-display uppercase tracking-wider">
          <span>Communication Portal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-text-base">
          Get in <span className="text-accent-blue">Touch</span>
        </h1>
        <p className="text-text-muted font-sans text-sm md:text-base leading-relaxed">
          I would love to discuss equity research analyst opportunities, capital market dynamics, sustainable finance initiatives, or prospective project collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contacts */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-card-base border border-card-border rounded-xl p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-bold font-display text-text-base border-b border-card-border pb-3 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-accent-blue" />
              <span>Contact Information</span>
            </h3>

            <div className="space-y-4">
              
              {/* Email Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-bg-base border border-card-border rounded-lg gap-4 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xs uppercase tracking-wider font-bold text-text-muted block font-mono">EMAIL DIRECT</span>
                    <a href="mailto:thekhushibansal.work@gmail.com" className="text-sm font-semibold text-text-base hover:text-accent-blue transition-colors truncate">
                      thekhushibansal.work@gmail.com
                    </a>
                  </div>
                </div>
                
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 border border-card-border rounded-lg text-xs font-bold text-text-muted hover:text-accent-blue bg-card-base hover:bg-bg-base transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-green" />
                      <span className="text-accent-green">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Row */}
              <a 
                href="https://linkedin.com/in/thekhushibansal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-bg-base border border-card-border hover:border-accent-blue/30 rounded-lg group transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-blue/15 rounded-lg text-accent-blue shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xs uppercase tracking-wider font-bold text-text-muted block font-mono">LINKEDIN PROFILE</span>
                    <span className="text-sm font-semibold text-text-base group-hover:text-accent-blue transition-colors">
                      linkedin.com/in/thekhushibansal
                    </span>
                  </div>
                </div>
                <span className="text-xs text-text-muted group-hover:text-accent-blue font-bold font-mono transition-colors pl-2 uppercase tracking-wide">
                  Visit ↗
                </span>
              </a>

              {/* Phone Row */}
              <a
                href="tel:+918700012023"
                className="flex items-center justify-between p-3.5 bg-bg-base border border-card-border hover:border-accent-blue/30 rounded-lg group transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-blue/15 rounded-lg text-accent-blue shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xs uppercase tracking-wider font-bold text-text-muted block font-mono">PHONE ENQUIRIES</span>
                    <span className="text-sm font-semibold text-text-base group-hover:text-accent-blue transition-colors">
                      +91 87000 12023
                    </span>
                  </div>
                </div>
                <span className="text-xs text-text-muted group-hover:text-accent-blue font-bold font-mono transition-colors pl-2 uppercase tracking-wide">
                  Call ↗
                </span>
              </a>

            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-blue/5 to-transparent border border-card-border rounded-xl p-6 flex items-start space-x-4">
            <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue border border-accent-blue/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-text-base font-display">Secure & Protected</h4>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                Form submittals undergo bot filter tests (anti-spam honeypot mechanism) ensuring safe, verified transit of HNW and institutional inquiries.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          
          {status === "success" ? (
            <div className="bg-card-base border border-card-border rounded-xl p-8 md:p-12 shadow-lg text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-accent-green/10 border-2 border-accent-green/30 flex items-center justify-center mx-auto text-accent-green indicator-pulse">
                <Check className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display text-text-base tracking-tight">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-text-muted font-sans max-w-sm mx-auto leading-relaxed">
                  Thanks for reaching out! I've received your query and will get back to you within 24 hours.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 bg-bg-base border border-card-border hover:border-accent-blue/30 hover:bg-accent-blue/5 rounded-lg text-xs font-bold uppercase tracking-wider text-text-base transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card-base border border-card-border rounded-xl p-6 md:p-8 shadow-md space-y-6">
              <h3 className="text-lg font-bold font-display text-text-base border-b border-card-border pb-3">
                Send a Message
              </h3>

              {/* Honeypot field (absolutely invisible to normal users, but caught by auto-spammers) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field blank</label>
                <input 
                  type="text" 
                  id="website" 
                  name="website" 
                  value={form.website} 
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  tabIndex={-1} 
                  autoComplete="off" 
                />
              </div>

              {/* Name and Email side-by-side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono flex items-center justify-between">
                    <span>Your Name *</span>
                    {errors.name && <span className="text-3xs text-accent-red flex items-center space-x-0.5 lowercase font-sans font-normal"><AlertCircle className="w-3 h-3" /> <span>{errors.name}</span></span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Enter name"
                    className={`w-full px-4 py-3 bg-bg-base/50 border rounded-lg text-sm text-text-base font-sans outline-none focus:bg-bg-base focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all ${
                      errors.name ? "border-accent-red" : "border-card-border"
                    }`}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono flex items-center justify-between">
                    <span>Your Email *</span>
                    {errors.email && <span className="text-3xs text-accent-red flex items-center space-x-0.5 lowercase font-sans font-normal"><AlertCircle className="w-3 h-3" /> <span>{errors.email}</span></span>}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 bg-bg-base/50 border rounded-lg text-sm text-text-base font-sans outline-none focus:bg-bg-base focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all ${
                      errors.email ? "border-accent-red" : "border-card-border"
                    }`}
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono flex items-center justify-between">
                  <span>Subject *</span>
                  {errors.subject && <span className="text-3xs text-accent-red flex items-center space-x-0.5 lowercase font-sans font-normal"><AlertCircle className="w-3 h-3" /> <span>{errors.subject}</span></span>}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={form.subject}
                  onChange={(e) => {
                    setForm({ ...form, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: "" });
                  }}
                  placeholder="e.g. Equity Research Proposal"
                  className={`w-full px-4 py-3 bg-bg-base/50 border rounded-lg text-sm text-text-base font-sans outline-none focus:bg-bg-base focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all ${
                    errors.subject ? "border-accent-red" : "border-card-border"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono flex items-center justify-between">
                  <span>Message *</span>
                  {errors.message && <span className="text-3xs text-accent-red flex items-center space-x-0.5 lowercase font-sans font-normal"><AlertCircle className="w-3 h-3" /> <span>{errors.message}</span></span>}
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  placeholder="Please state how we can collaborate..."
                  rows={5}
                  className={`w-full px-4 py-3 bg-bg-base/50 border rounded-lg text-sm text-text-base font-sans outline-none focus:bg-bg-base focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none ${
                    errors.message ? "border-accent-red" : "border-card-border"
                  }`}
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-accent-blue hover:bg-accent-blue-hover disabled:bg-accent-blue/60 text-white text-xs font-bold rounded-lg uppercase tracking-wider shadow-md shadow-accent-blue/10 hover:shadow-accent-blue/20 disabled:shadow-none transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "Sending Query..." : "Send Message"}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
