/**
 * AICEN SOLUTIONS - HOME PAGE
 * Design: Modern Tech-Forward B2B SaaS
 * Sections: Hero, Stats, Services, Why Us, Industries, Testimonials, CTA
 * Colors: Midnight Blue (#0D1B2A) + MS Blue (#0078D4) + Teal (#00B4D8)
 * Typography: Plus Jakarta Sans (headings) + DM Sans (body)
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Star, ChevronRight,
  Cog, HeadphonesIcon, GraduationCap, TrendingUp, Wrench,
  Building2, ShoppingCart, Factory, Truck, Landmark, Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Separate StatCounter component to properly use hooks
function StatCounter({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, inView]);

  return (
    <div className="text-center">
      <div
        className="text-4xl lg:text-5xl font-extrabold text-white mb-2"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <span className="gradient-text">{count}{suffix}</span>
      </div>
      <p className="text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {label}
      </p>
    </div>
  );
}

const services = [
  {
    icon: Cog,
    title: "BC Implementation",
    description: "End-to-end Business Central deployment tailored to your business processes, from requirements gathering to go-live and beyond.",
    color: "#0078D4",
    href: "/services#implementation",
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Dedicated ongoing support to keep your Business Central running smoothly, with rapid response SLAs and proactive monitoring.",
    color: "#00B4D8",
    href: "/services#support",
  },
  {
    icon: TrendingUp,
    title: "ERP Consulting",
    description: "Strategic advisory services to align your ERP roadmap with business goals, optimizing workflows and maximizing ROI.",
    color: "#0078D4",
    href: "/services#consulting",
  },
  {
    icon: GraduationCap,
    title: "User Training",
    description: "Comprehensive training programs that empower your team to fully leverage Business Central's capabilities from day one.",
    color: "#00B4D8",
    href: "/services#training",
  },
  {
    icon: Wrench,
    title: "Upgrades & Migration",
    description: "Seamless migration from legacy ERP systems or older BC versions, ensuring data integrity and minimal business disruption.",
    color: "#0078D4",
    href: "/services#migration",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Successful Implementations" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Certified Consultants" },
];

const industries = [
  { icon: Factory, label: "Manufacturing", desc: "Streamline production planning and shop floor management" },
  { icon: ShoppingCart, label: "Retail & E-Commerce", desc: "Unified commerce with inventory and POS integration" },
  { icon: Truck, label: "Distribution", desc: "End-to-end supply chain and warehouse management" },
  { icon: Landmark, label: "Financial Services", desc: "Robust financial reporting and compliance management" },
  { icon: Building2, label: "Professional Services", desc: "Project management and resource planning" },
  { icon: Leaf, label: "Food & Beverage", desc: "Lot tracking, quality control, and recipe management" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "CFO, Meridian Manufacturing",
    quote: "Aicen Solutions transformed our financial operations. The Business Central implementation was seamless, and their ongoing support has been exceptional. Our month-end close time reduced by 60%.",
    rating: 5,
  },
  {
    name: "David Chen",
    title: "Operations Director, Pacific Distribution",
    quote: "The team at Aicen truly understood our distribution challenges. They customized BC to fit our workflows perfectly, and the training program ensured our team was confident from day one.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    title: "CEO, Bright Retail Group",
    quote: "Migrating from our old ERP was daunting, but Aicen made it smooth. Their expertise and professionalism are unmatched. We now have real-time visibility across all our retail locations.",
    rating: 5,
  },
];

const whyUsPoints = [
  "Certified Microsoft Gold Partner with proven implementation methodology",
  "Dedicated project manager and consultant assigned to every engagement",
  "Industry-specific pre-built templates to accelerate deployment",
  "Post-go-live hypercare support for a smooth transition",
  "Transparent fixed-fee pricing with no hidden costs",
  "Local expertise with global Microsoft best practices",
];

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663415723832/JrGn9WVGPcqBe9gGrUn75a/hero-bg-8KsPkVCmya5vaqQBiXnwwY.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/40" />

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Microsoft Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 ms-partner-badge rounded-full px-4 py-2 mb-6"
            >
              <div className="flex gap-0.5">
                <div className="w-2.5 h-2.5 bg-[#F25022]" />
                <div className="w-2.5 h-2.5 bg-[#7FBA00]" />
                <div className="w-2.5 h-2.5 bg-[#00A4EF]" />
                <div className="w-2.5 h-2.5 bg-[#FFB900]" />
              </div>
              <span className="text-xs text-white/80 font-medium tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Certified Microsoft Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Transform Your Business with{" "}
              <span className="gradient-text">Microsoft Business Central</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Aicen Solutions is a certified Microsoft Partner delivering end-to-end ERP implementation, support, and consulting services. We help SMEs and mid-market companies unlock the full power of Business Central.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] hover:from-[#006BBD] hover:to-[#00A3C4] text-white font-semibold px-8 py-3 rounded-lg shadow-xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/40"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-3 rounded-lg bg-transparent"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-10"
            >
              {["150+ Implementations", "98% Satisfaction", "12+ Years Experience"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-white/30 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="bg-[#0A2540] py-16" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  inView={statsInView}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-[#0078D4] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What We Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Comprehensive ERP Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#64748B] text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              From initial implementation to ongoing support, we provide the full spectrum of Business Central services to ensure your success.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#0078D4]/20 relative overflow-hidden"
              >
                {/* Gradient accent top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${service.color}, #00B4D8)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>

                <h3
                  className="text-lg font-bold text-[#0D1B2A] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#64748B] text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {service.description}
                </p>

                <Link href={service.href}>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#0078D4] group-hover:gap-2 transition-all cursor-pointer"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* View All Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/services">
                <div className="h-full min-h-[200px] rounded-2xl border-2 border-dashed border-[#0078D4]/30 flex flex-col items-center justify-center p-7 hover:border-[#0078D4] hover:bg-[#0078D4]/5 transition-all group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#0078D4]/10 flex items-center justify-center mb-4 group-hover:bg-[#0078D4]/20 transition-colors">
                    <ArrowRight className="w-5 h-5 text-[#0078D4]" />
                  </div>
                  <p className="text-[#0078D4] font-semibold text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    View All Services
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US SECTION ─── */}
      <section id="why-us" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663415723832/JrGn9WVGPcqBe9gGrUn75a/about-team-bFt2GSDrbd7BhuQSbtij6c.webp"
                  alt="Aicen Solutions team collaborating"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-[#0D1B2A] rounded-2xl p-5 shadow-2xl">
                <div className="text-3xl font-extrabold text-white mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="gradient-text">12+</span>
                </div>
                <p className="text-white/60 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Years of Microsoft<br />Partnership</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#0078D4] font-semibold text-sm uppercase tracking-widest mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-5 leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Your Trusted Microsoft Business Central Partner
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                With over a decade of experience and 150+ successful implementations, Aicen Solutions brings deep expertise, industry knowledge, and a commitment to your long-term success. We don't just implement software — we transform businesses.
              </p>

              <ul className="space-y-4">
                {whyUsPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0078D4] mt-0.5 flex-shrink-0" />
                    <span className="text-[#374151] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/about">
                  <Button
                    className="bg-[#0D1B2A] hover:bg-[#0A2540] text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES SECTION ─── */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663415723832/JrGn9WVGPcqBe9gGrUn75a/industries-bg-UZx6ULCxpJBcJPFiMRfkR5.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/90" />

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Industries We Serve
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Tailored ERP Solutions for Every Sector
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/60 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We bring deep industry knowledge to every engagement, delivering Business Central solutions that address your sector's unique challenges.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0078D4]/30 to-[#00B4D8]/30 flex items-center justify-center mb-4 group-hover:from-[#0078D4]/50 group-hover:to-[#00B4D8]/50 transition-all">
                  <industry.icon className="w-6 h-6 text-[#00B4D8]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {industry.label}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/industries">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-3 rounded-lg bg-transparent"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore All Industries
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS SECTION ─── */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-[#0078D4] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Client Success Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#FFB900] text-[#FFB900]" />
                  ))}
                </div>

                <p className="text-[#374151] text-sm leading-relaxed mb-6 italic"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00B4D8] flex items-center justify-center text-white font-bold text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#0D1B2A] font-semibold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {t.name}
                    </p>
                    <p className="text-[#64748B] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BC FEATURE HIGHLIGHT ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block text-[#0078D4] font-semibold text-sm uppercase tracking-widest mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Microsoft Dynamics 365
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-5 leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Why Microsoft Business Central?
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Business Central is a comprehensive, cloud-based ERP solution that connects your entire business — from finance and operations to sales and customer service — in a single, unified platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Cloud-First", desc: "Access your business data anywhere, anytime" },
                  { title: "AI-Powered", desc: "Built-in intelligence for smarter decisions" },
                  { title: "Scalable", desc: "Grows with your business needs" },
                  { title: "Integrated", desc: "Seamless Microsoft 365 integration" },
                  { title: "Secure", desc: "Enterprise-grade security & compliance" },
                  { title: "Customizable", desc: "Tailored to your unique workflows" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-[#F0F4F8] hover:bg-[#E8F0FE] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#0078D4] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#0D1B2A] font-semibold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {item.title}
                      </p>
                      <p className="text-[#64748B] text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663415723832/JrGn9WVGPcqBe9gGrUn75a/bc-implementation-6WjPKJ2XYZtSBdi2Pk5cfr.webp"
                  alt="Business Central ERP dashboard"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#0A2540] to-[#0D1B2A] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0078D4]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#00B4D8]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/60 text-lg mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Schedule a free consultation with our Business Central experts and discover how Aicen Solutions can help you achieve operational excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] hover:from-[#006BBD] hover:to-[#00A3C4] text-white font-semibold px-10 py-4 rounded-lg shadow-xl shadow-blue-500/30 transition-all hover:scale-105 text-base"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-lg bg-transparent text-base"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
