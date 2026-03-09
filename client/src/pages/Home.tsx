/**
 * AICEN SOLUTIONS - HOME PAGE
 * Design: Modern Tech-Forward B2B SaaS
 * Sections: Hero, Stats, Detailed Services, Why Us, Industries, Testimonials, CTA
 * Colors: Midnight Blue (#0D1B2A) + MS Blue (#0078D4) + Teal (#00B4D8)
 * Typography: Plus Jakarta Sans (headings) + DM Sans (body)
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Star, ChevronRight, Plus,
  Cog, HeadphonesIcon, GraduationCap, TrendingUp, Wrench,
  Building2, ShoppingCart, Factory, Truck, Landmark, Leaf,
  BarChart3, CloudCog, RefreshCw, Users, Shield, Zap
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
      <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <span className="gradient-text">{count}{suffix}</span>
      </div>
      <p className="text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {label}
      </p>
    </div>
  );
}

// ─── DATA ───────────────────────────────────────────────────────────────────

const detailedServices = [
  {
    id: "implementation",
    icon: Cog,
    tag: "Core Service",
    title: "Business Central Implementation",
    subtitle: "Full-cycle ERP deployment, configured to your exact business processes.",
    color: "#0078D4",
    gradient: "from-[#0078D4] to-[#005A9E]",
    lightBg: "bg-[#EBF5FF]",
    description:
      "We deliver end-to-end Business Central implementations using a proven, structured methodology. From the initial discovery workshop through go-live and hypercare, our certified consultants ensure your ERP is configured to match your workflows — not the other way around.",
    features: [
      { icon: BarChart3, text: "Requirements analysis & business process mapping" },
      { icon: CloudCog, text: "Full system configuration & customization" },
      { icon: RefreshCw, text: "Data migration from legacy ERP or spreadsheets" },
      { icon: Shield, text: "Integration with Microsoft 365, Power BI & third-party apps" },
      { icon: Users, text: "User acceptance testing (UAT) & sign-off" },
      { icon: Zap, text: "Go-live execution & post-launch hypercare support" },
    ],
    outcomes: ["60% faster month-end close", "Real-time financial visibility", "Unified data across departments"],
    href: "/services#implementation",
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    tag: "Ongoing",
    title: "Support & Maintenance",
    subtitle: "Dedicated helpdesk and proactive system care to keep you running at peak performance.",
    color: "#00B4D8",
    gradient: "from-[#00B4D8] to-[#0090B0]",
    lightBg: "bg-[#E8FAFE]",
    description:
      "After go-live, your Business Central environment needs ongoing attention. Our support packages provide a dedicated team, defined SLAs, proactive monitoring, and continuous optimization — so your team can focus on the business, not the system.",
    features: [
      { icon: HeadphonesIcon, text: "Dedicated support team with named contacts" },
      { icon: Shield, text: "Tiered SLAs: Critical (2hr), High (4hr), Normal (1 day)" },
      { icon: BarChart3, text: "Proactive system health monitoring & alerts" },
      { icon: RefreshCw, text: "Microsoft update management & patch deployment" },
      { icon: Zap, text: "Performance tuning & query optimization" },
      { icon: Users, text: "Monthly review calls & quarterly roadmap sessions" },
    ],
    outcomes: ["99.9% system uptime", "2-hour critical response SLA", "Proactive issue prevention"],
    href: "/services#support",
  },
  {
    id: "consulting",
    icon: TrendingUp,
    tag: "Strategic",
    title: "ERP Consulting",
    subtitle: "Strategic advisory to align your ERP roadmap with long-term business objectives.",
    color: "#0078D4",
    gradient: "from-[#0078D4] to-[#005A9E]",
    lightBg: "bg-[#EBF5FF]",
    description:
      "Not sure where to start, or struggling to get ROI from your current system? Our senior consultants conduct a thorough assessment of your processes, identify gaps, and build a pragmatic roadmap that delivers measurable business value — fast.",
    features: [
      { icon: BarChart3, text: "Current-state assessment & gap analysis" },
      { icon: TrendingUp, text: "ERP strategy & digital transformation roadmap" },
      { icon: RefreshCw, text: "Business process re-engineering & optimization" },
      { icon: Users, text: "Change management planning & stakeholder alignment" },
      { icon: Shield, text: "ROI analysis & business case development" },
      { icon: Zap, text: "Vendor evaluation & technology selection support" },
    ],
    outcomes: ["Clear ERP roadmap in 4 weeks", "Measurable ROI targets", "Stakeholder buy-in secured"],
    href: "/services#consulting",
  },
  {
    id: "training",
    icon: GraduationCap,
    tag: "Enablement",
    title: "User Training",
    subtitle: "Role-based training programs that turn your team into confident Business Central power users.",
    color: "#00B4D8",
    gradient: "from-[#00B4D8] to-[#0090B0]",
    lightBg: "bg-[#E8FAFE]",
    description:
      "Technology is only as powerful as the people using it. Our training specialists design and deliver role-based programs tailored to your specific BC configuration — ensuring every user, from finance clerks to warehouse staff, is productive from day one.",
    features: [
      { icon: Users, text: "Role-based curriculum: Finance, Operations, Sales, Warehouse" },
      { icon: GraduationCap, text: "On-site, remote, and blended delivery options" },
      { icon: BarChart3, text: "Train-the-trainer programs for internal champions" },
      { icon: Shield, text: "Custom user guides & quick-reference cards" },
      { icon: Zap, text: "E-learning module development for self-paced learning" },
      { icon: RefreshCw, text: "Post-training competency assessments & refreshers" },
    ],
    outcomes: ["90%+ user adoption rate", "Reduced support tickets post-training", "Faster onboarding for new hires"],
    href: "/services#training",
  },
  {
    id: "migration",
    icon: Wrench,
    tag: "Transition",
    title: "Upgrades & Migration",
    subtitle: "Seamless transitions from legacy ERP systems or older BC versions with zero data loss.",
    color: "#0078D4",
    gradient: "from-[#0078D4] to-[#005A9E]",
    lightBg: "bg-[#EBF5FF]",
    description:
      "Whether you're moving from NAV, GP, SAP, Sage, or a custom system, our migration specialists have the tools and experience to get you to Business Central safely. We use a phased approach to minimize risk and ensure data integrity throughout the transition.",
    features: [
      { icon: BarChart3, text: "Legacy system analysis & data mapping workshops" },
      { icon: Shield, text: "Data cleansing, transformation & validation" },
      { icon: RefreshCw, text: "Phased migration with parallel-run management" },
      { icon: CloudCog, text: "On-premise to cloud (SaaS) migration support" },
      { icon: Zap, text: "Cutover planning, rehearsal & execution" },
      { icon: Users, text: "Post-migration validation, reconciliation & support" },
    ],
    outcomes: ["Zero data loss guaranteed", "Minimal business disruption", "Faster cloud adoption"],
    href: "/services#migration",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Successful Implementations" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 5, suffix: "+", label: "Years of Experience" },
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

// ─── DETAILED SERVICE CARD COMPONENT ────────────────────────────────────────

function ServiceCard({ service, index }: { service: typeof detailedServices[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
    >
      {/* Top gradient accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${service.gradient}`} />

      <div className="p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
              style={{ background: `${service.color}18` }}
            >
              <service.icon className="w-7 h-7" style={{ color: service.color }} />
            </div>
            <div>
              {/* Tag */}
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                style={{ color: service.color, background: `${service.color}15` }}
              >
                {service.tag}
              </span>
              <h3
                className="text-xl font-extrabold text-[#0D1B2A] leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {service.title}
              </h3>
            </div>
          </div>

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300"
            style={{
              borderColor: expanded ? service.color : "#E2E8F0",
              background: expanded ? `${service.color}10` : "transparent",
              color: expanded ? service.color : "#94A3B8",
            }}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <Plus
              className="w-4 h-4 transition-transform duration-300"
              style={{ transform: expanded ? "rotate(45deg)" : "rotate(0deg)" }}
            />
          </button>
        </div>

        {/* Subtitle */}
        <p
          className="text-[#374151] font-medium text-base mb-4 leading-snug"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {service.subtitle}
        </p>

        {/* Description */}
        <p
          className="text-[#64748B] text-sm leading-relaxed mb-6"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {service.description}
        </p>

        {/* Feature list — always visible, 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {service.features.map((f, fi) => (
            <div key={fi} className="flex items-start gap-2.5">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${service.color}15` }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: service.color }} />
              </div>
              <span
                className="text-[#374151] text-sm leading-snug"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {f.text}
              </span>
            </div>
          ))}
        </div>

        {/* Expandable: Outcomes + CTA */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div
                className={`rounded-2xl p-5 mb-5 ${service.lightBg} border`}
                style={{ borderColor: `${service.color}25` }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: service.color, fontFamily: "'DM Sans', sans-serif" }}
                >
                  Typical Client Outcomes
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.outcomes.map((o) => (
                    <span
                      key={o}
                      className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full bg-white shadow-sm"
                      style={{ color: service.color, fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link href={service.href}>
            <div
              className="flex items-center gap-1.5 text-sm font-semibold transition-all group/link cursor-pointer"
              style={{ color: service.color, fontFamily: "'DM Sans', sans-serif" }}
            >
              Learn More
              <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/contact">
            <Button
              size="sm"
              className="text-white font-semibold rounded-lg px-4 py-2 text-xs shadow-sm transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${service.color}, ${service.color === "#0078D4" ? "#00B4D8" : "#0078D4"})`,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────

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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] hover:from-[#006BBD] hover:to-[#00A3C4] text-white font-semibold px-8 py-3 rounded-lg shadow-xl shadow-blue-500/30 transition-all hover:scale-105"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-3 rounded-lg bg-transparent"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Explore Our Services
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-10"
            >
              {["150+ Implementations", "98% Satisfaction", "5+ Years Experience"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

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
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} inView={statsInView} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DETAILED SERVICES SECTION ─── */}
      <section id="services" className="py-24 bg-[#F0F4F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

          {/* Section header */}
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
              Our ERP Solutions & Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#64748B] text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              From first deployment to long-term growth, we cover every stage of your Business Central journey with specialist expertise and a client-first approach.
            </motion.p>
          </div>

          {/* Service overview strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {detailedServices.map((s) => (
              <a
                key={s.id}
                href={`#svc-${s.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-[#0078D4]/40 hover:bg-[#EBF5FF] transition-all text-sm font-medium text-[#374151] hover:text-[#0078D4] shadow-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <s.icon className="w-4 h-4" style={{ color: s.color }} />
                {s.title}
              </a>
            ))}
          </motion.div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {detailedServices.map((service, i) => (
              <div key={service.id} id={`svc-${service.id}`}>
                <ServiceCard service={service} index={i} />
              </div>
            ))}

            {/* CTA card — fills the last slot */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="rounded-3xl bg-gradient-to-br from-[#0D1B2A] via-[#0A2540] to-[#0D1B2A] p-8 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative blobs */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0078D4]/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#00B4D8]/15 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex gap-0.5 mb-6">
                  <div className="w-4 h-4 bg-[#F25022]" />
                  <div className="w-4 h-4 bg-[#7FBA00]" />
                  <div className="w-4 h-4 bg-[#00A4EF]" />
                  <div className="w-4 h-4 bg-[#FFB900]" />
                </div>
                <h3
                  className="text-2xl font-extrabold text-white mb-3 leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Not Sure Which Service You Need?
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed mb-8"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Our consultants will assess your current situation and recommend the right combination of services to achieve your goals — at no cost.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Free 60-minute discovery call",
                    "No obligation assessment",
                    "Tailored service recommendation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                      <span className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button
                    className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] hover:from-[#006BBD] hover:to-[#00A3C4] text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl bg-transparent"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Full Services Page
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US SECTION ─── */}
      <section id="why-us" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <div className="absolute -bottom-6 -right-6 bg-[#0D1B2A] rounded-2xl p-5 shadow-2xl">
                <div className="text-3xl font-extrabold text-white mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="gradient-text">5+</span>
                </div>
                <p className="text-white/60 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Years of Microsoft<br />Partnership</p>
              </div>
            </motion.div>

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
