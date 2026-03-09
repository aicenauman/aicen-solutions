/**
 * AICEN SOLUTIONS - NEWSLETTER SUBSCRIBE COMPONENT
 * Design: Modern Tech-Forward B2B SaaS
 * Palette: Midnight blue #0D1B2A, Microsoft blue #0078D4, Teal #00B4D8
 * Typography: Plus Jakarta Sans (headings), DM Sans (body)
 *
 * EmailJS Integration:
 * To activate email delivery, replace the placeholder IDs below with your real EmailJS credentials:
 *   - EMAILJS_SERVICE_ID: Found in EmailJS Dashboard → Email Services
 *   - EMAILJS_TEMPLATE_ID: Found in EmailJS Dashboard → Email Templates
 *   - EMAILJS_PUBLIC_KEY: Found in EmailJS Dashboard → Account → Public Key
 *
 * Setup steps:
 *   1. Create a free account at https://www.emailjs.com
 *   2. Add an Email Service (Gmail, Outlook, etc.)
 *   3. Create an Email Template with variables: {{subscriber_email}}, {{to_email}}
 *   4. Replace the three placeholder values below with your real credentials
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials to enable email delivery.
// Until replaced, the form will show a success state but no email will be sent.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

type SubscribeVariant = "dark" | "light" | "minimal";

interface NewsletterSubscribeProps {
  variant?: SubscribeVariant;
  title?: string;
  subtitle?: string;
}

export default function NewsletterSubscribe({
  variant = "dark",
  title = "Stay Ahead with ERP Insights",
  subtitle = "Get the latest Business Central tips, implementation guides, and industry updates delivered to your inbox. No spam — unsubscribe anytime.",
}: NewsletterSubscribeProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      // If credentials are still placeholders, simulate success for demo purposes
      if (
        EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
      ) {
        // Simulate network delay for demo
        await new Promise((res) => setTimeout(res, 1200));
        setStatus("success");
        setEmail("");
        return;
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          subscriber_email: email,
          to_email: "info@aicensolutions.com.ph",
          reply_to: email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again later.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setEmail("");
    setErrorMsg("");
  };

  // ── Dark variant (used on Blog page hero strip) ──────────────────────────
  if (variant === "dark") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D1B2A] to-[#0A2540] border border-white/10 p-8 md:p-12">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0078D4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00B4D8]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center gap-8">
          {/* Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#00B4D8] flex items-center justify-center shadow-lg shadow-[#0078D4]/30">
            <Mail className="w-7 h-7 text-white" />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {subtitle}
            </p>
          </div>

          {/* Form */}
          <div className="flex-shrink-0 w-full md:w-auto min-w-[320px]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-3 py-4"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    You're subscribed!
                  </p>
                  <p className="text-white/50 text-xs text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Check your inbox for a confirmation email.
                  </p>
                  <button onClick={resetForm} className="text-[#00B4D8] text-xs hover:underline mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Subscribe another email
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3"
                >
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                      placeholder="Enter your work email"
                      className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0078D4]/60 focus:bg-white/8 transition-all"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      disabled={status === "loading"}
                    />
                    <button
                      type="submit"
                      disabled={status === "loading" || !email}
                      className="flex-shrink-0 bg-gradient-to-r from-[#0078D4] to-[#00B4D8] hover:from-[#0066B8] hover:to-[#0099C0] text-white font-semibold px-5 py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {status === "loading" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>Subscribe <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-xs"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errorMsg}
                    </motion.div>
                  )}
                  <p className="text-white/30 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    By subscribing, you agree to our{" "}
                    <a href="/privacy-policy" className="underline hover:text-white/50 transition-colors">Privacy Policy</a>.
                    Unsubscribe anytime.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  // ── Light variant (used in footer or white-bg sections) ──────────────────
  if (variant === "light") {
    return (
      <div className="bg-[#F0F7FF] border border-[#0078D4]/15 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-[#0078D4]/10 border border-[#0078D4]/20 flex items-center justify-center">
            <Mail className="w-4 h-4 text-[#0078D4]" />
          </div>
          <h3 className="text-lg font-extrabold text-[#0D1B2A]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {title}
          </h3>
        </div>
        <p className="text-[#64748B] text-sm mb-5 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {subtitle}
        </p>
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-green-800 font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  You're subscribed!
                </p>
                <p className="text-green-600 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Check your inbox for a confirmation.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                  placeholder="your@email.com"
                  className="flex-1 border border-[#CBD5E1] rounded-xl px-4 py-2.5 text-[#0D1B2A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/15 transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="flex-shrink-0 bg-[#0078D4] hover:bg-[#0066B8] text-white font-semibold px-4 py-2.5 rounded-xl transition-all disabled:opacity-50 text-sm flex items-center gap-1.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>}
                </button>
              </div>
              {status === "error" && (
                <p className="text-red-500 text-xs flex items-center gap-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <AlertCircle className="w-3.5 h-3.5" /> {errorMsg}
                </p>
              )}
              <p className="text-[#94A3B8] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                No spam. Unsubscribe anytime. See our{" "}
                <a href="/privacy-policy" className="underline hover:text-[#0078D4]">Privacy Policy</a>.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── Minimal variant (inline, e.g. sidebar or footer strip) ───────────────
  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-green-400 text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <CheckCircle2 className="w-4 h-4" />
          Subscribed! Check your inbox.
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0078D4]/60 transition-all"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading" || !email}
            className="bg-[#0078D4] hover:bg-[#0066B8] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-50 flex items-center gap-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {status === "loading" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
