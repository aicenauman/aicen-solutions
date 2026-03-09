/**
 * AICEN SOLUTIONS - CONTACT PAGE
 * Design: Modern Tech-Forward B2B SaaS
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@aicensolutions.com",
    sub: "We respond within 24 hours",
    href: "mailto:info@aicensolutions.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (234) 567-890",
    sub: "Mon–Fri, 9am–6pm",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Business Avenue",
    sub: "Tech District, City 00000",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon–Fri: 9am–6pm",
    sub: "Weekend: By appointment",
    href: "#",
  },
];

const services = [
  "BC Implementation",
  "Support & Maintenance",
  "ERP Consulting",
  "User Training",
  "Upgrades & Migration",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#0A2540] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0078D4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00B4D8]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Contact Us
            </h1>
            <p className="text-white/60 text-lg max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ready to transform your business? Let's start a conversation. Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-extrabold text-[#0D1B2A] mb-6"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Let's Talk
                </h2>
                <p className="text-[#64748B] text-sm leading-relaxed mb-8"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Whether you're ready to start a project or just exploring your options, we'd love to hear from you. Reach out through any of the channels below.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-[#F0F4F8] hover:bg-[#E8F0FE] transition-colors group border border-transparent hover:border-[#0078D4]/20"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078D4]/10 to-[#00B4D8]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#0078D4]/20 group-hover:to-[#00B4D8]/20 transition-all">
                        <item.icon className="w-5 h-5 text-[#0078D4]" />
                      </div>
                      <div>
                        <p className="text-[#0D1B2A] font-semibold text-sm mb-0.5"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {item.title}
                        </p>
                        <p className="text-[#374151] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.value}
                        </p>
                        <p className="text-[#64748B] text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.sub}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Microsoft Partner Note */}
                <div className="mt-8 p-5 bg-[#0D1B2A] rounded-xl">
                  <div className="flex gap-0.5 mb-3">
                    <div className="w-4 h-4 bg-[#F25022]" />
                    <div className="w-4 h-4 bg-[#7FBA00]" />
                    <div className="w-4 h-4 bg-[#00A4EF]" />
                    <div className="w-4 h-4 bg-[#FFB900]" />
                  </div>
                  <p className="text-white font-semibold text-sm mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Microsoft Certified Partner
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Aicen Solutions is a certified Microsoft Partner with proven expertise in Business Central ERP solutions.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0078D4]/10 to-[#00B4D8]/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-[#0078D4]" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0D1B2A] mb-3"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Message Sent!
                    </h3>
                    <p className="text-[#64748B] text-base mb-6"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Thank you for reaching out. One of our consultants will contact you within 24 business hours.
                    </p>
                    <Button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" }); }}
                      className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] text-white font-semibold px-6 py-3 rounded-lg"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-extrabold text-[#0D1B2A] mb-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Book a Free Consultation
                    </h2>
                    <p className="text-[#64748B] text-sm mb-7"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Fill out the form below and one of our Business Central experts will be in touch within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name" className="text-[#374151] text-sm font-medium mb-1.5 block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className="border-gray-200 focus:border-[#0078D4] focus:ring-[#0078D4]/20 rounded-lg"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-[#374151] text-sm font-medium mb-1.5 block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Email Address <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="border-gray-200 focus:border-[#0078D4] focus:ring-[#0078D4]/20 rounded-lg"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="company" className="text-[#374151] text-sm font-medium mb-1.5 block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            placeholder="Your Company Ltd."
                            value={form.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            className="border-gray-200 focus:border-[#0078D4] rounded-lg"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-[#374151] text-sm font-medium mb-1.5 block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            placeholder="+1 (234) 567-890"
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="border-gray-200 focus:border-[#0078D4] rounded-lg"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-[#374151] text-sm font-medium mb-1.5 block"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          Service of Interest
                        </Label>
                        <Select onValueChange={(val) => handleChange("service", val)}>
                          <SelectTrigger className="border-gray-200 focus:border-[#0078D4] rounded-lg"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem key={s} value={s} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-[#374151] text-sm font-medium mb-1.5 block"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your business and what you're looking to achieve with Business Central..."
                          rows={5}
                          value={form.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          className="border-gray-200 focus:border-[#0078D4] rounded-lg resize-none"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[#0078D4] to-[#00B4D8] hover:from-[#006BBD] hover:to-[#00A3C4] text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] disabled:opacity-70"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </span>
                        )}
                      </Button>

                      <p className="text-[#64748B] text-xs text-center"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F0F4F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1B2A]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical Business Central implementation take?",
                a: "Implementation timelines vary based on complexity, but most projects range from 3 to 6 months. We'll provide a detailed project timeline during our initial consultation.",
              },
              {
                q: "Do you offer post-implementation support?",
                a: "Yes, we offer comprehensive support and maintenance packages with defined SLAs to ensure your Business Central system continues to perform optimally after go-live.",
              },
              {
                q: "Can you migrate data from our existing ERP system?",
                a: "Absolutely. Our migration specialists have experience migrating from a wide range of ERP systems including SAP, Oracle, Sage, and many others. We ensure data integrity throughout the process.",
              },
              {
                q: "Do you offer training for our team?",
                a: "Yes, we provide comprehensive role-based training programs tailored to your specific Business Central configuration. Training can be delivered on-site, remotely, or through custom e-learning modules.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-[#0D1B2A] font-semibold text-base mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {faq.q}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
