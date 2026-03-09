/**
 * AICEN SOLUTIONS - CASE STUDIES PAGE
 * Design: Modern Tech-Forward B2B SaaS
 * Palette: Midnight blue #0D1B2A, Microsoft blue #0078D4, Teal #00B4D8
 * Typography: Plus Jakarta Sans (headings), DM Sans (body)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Building2,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = ["All", "Manufacturing", "Retail", "Distribution", "Finance", "Services"];

const caseStudies = [
  {
    id: 1,
    company: "Al-Faris Manufacturing Co.",
    industry: "Manufacturing",
    tag: "BC Implementation",
    tagColor: "#0078D4",
    location: "Riyadh, Saudi Arabia",
    size: "250 employees",
    duration: "4 months",
    heroColor: "from-[#0D1B2A] to-[#0A2540]",
    accentColor: "#0078D4",
    icon: Building2,
    summary:
      "A mid-sized steel fabrication company struggling with disconnected spreadsheets and manual production tracking. Aicen Solutions delivered a full Business Central implementation covering finance, production, and inventory — reducing reporting time by 70%.",
    challenge:
      "Al-Faris was managing production orders, inventory, and financials across 12 separate spreadsheets, leading to data inconsistencies, delayed month-end closings (averaging 15 days), and zero real-time visibility into production costs.",
    solution:
      "We implemented Microsoft Dynamics 365 Business Central with custom manufacturing modules, integrating production orders, bill of materials, capacity planning, and real-time cost tracking. A phased rollout ensured zero production downtime.",
    results: [
      { metric: "70%", label: "Reduction in reporting time" },
      { metric: "3 days", label: "Month-end close (down from 15)" },
      { metric: "100%", label: "Real-time inventory visibility" },
      { metric: "22%", label: "Reduction in material waste" },
    ],
    modules: ["Finance & Accounting", "Production Orders", "Inventory Management", "Cost Accounting", "Purchasing"],
    testimonial: {
      quote:
        "Aicen Solutions transformed how we run our factory. We now have real-time visibility into every production order and our month-end close went from 15 days to 3. The ROI was evident within the first quarter.",
      author: "Operations Director, Al-Faris Manufacturing Co.",
    },
  },
  {
    id: 2,
    company: "Horizon Retail Group",
    industry: "Retail",
    tag: "BC Implementation + Support",
    tagColor: "#00B4D8",
    location: "Dubai, UAE",
    size: "120 employees, 8 branches",
    duration: "3 months",
    heroColor: "from-[#0A2540] to-[#0D2B45]",
    accentColor: "#00B4D8",
    icon: BarChart3,
    summary:
      "A multi-branch retail chain needed a unified ERP to replace their legacy POS and accounting system. Aicen Solutions implemented Business Central with full POS integration, cutting inventory discrepancies by 85% across all branches.",
    challenge:
      "Horizon Retail was running 8 branches on separate legacy POS systems with no central inventory or financial consolidation. Stock discrepancies were costing the business an estimated AED 200,000 per year, and branch-level P&L reporting took over a week.",
    solution:
      "We deployed Business Central with a centralized inventory management system, integrated with their existing POS terminals across all 8 branches. Automated inter-branch transfers, real-time stock alerts, and consolidated financial reporting were configured from day one.",
    results: [
      { metric: "85%", label: "Reduction in inventory discrepancies" },
      { metric: "1 day", label: "Branch P&L reporting (down from 7)" },
      { metric: "AED 180K", label: "Annual savings from stock accuracy" },
      { metric: "8 branches", label: "Unified on a single platform" },
    ],
    modules: ["Retail POS Integration", "Inventory Management", "Financial Consolidation", "Sales & Receivables", "Reporting & BI"],
    testimonial: {
      quote:
        "Before Aicen, reconciling stock across our 8 branches was a nightmare. Now it's automated and accurate. The implementation was smooth and the team was incredibly professional throughout.",
      author: "CEO, Horizon Retail Group",
    },
  },
  {
    id: 3,
    company: "Gulf Distribution Partners",
    industry: "Distribution",
    tag: "ERP Migration",
    tagColor: "#7C3AED",
    location: "Kuwait City, Kuwait",
    size: "180 employees",
    duration: "5 months",
    heroColor: "from-[#1A0A3A] to-[#0D1B2A]",
    accentColor: "#7C3AED",
    icon: Zap,
    summary:
      "A regional FMCG distributor migrated from a 10-year-old on-premise ERP to Business Central Online. Aicen Solutions managed the full data migration, custom integrations, and user training — achieving go-live with zero data loss.",
    challenge:
      "Gulf Distribution Partners was running a heavily customized on-premise ERP that was no longer supported by the vendor. The system had over 8 years of transactional data, complex pricing rules, and custom workflows that needed to be preserved or rebuilt in the new platform.",
    solution:
      "We conducted a full discovery and gap analysis, rebuilt critical custom workflows natively in Business Central, and developed a phased data migration strategy. All 8 years of historical data was migrated and validated before go-live. Comprehensive training was delivered to 180 users across 3 warehouses.",
    results: [
      { metric: "0", label: "Data loss during migration" },
      { metric: "180", label: "Users trained and onboarded" },
      { metric: "40%", label: "Faster order processing" },
      { metric: "60%", label: "Reduction in IT maintenance costs" },
    ],
    modules: ["Data Migration", "Warehouse Management", "Sales Order Processing", "Vendor Management", "Custom Workflows"],
    testimonial: {
      quote:
        "We were nervous about migrating 8 years of data, but Aicen's team made it seamless. The go-live was on schedule, under budget, and we didn't lose a single record. Exceptional work.",
      author: "IT Manager, Gulf Distribution Partners",
    },
  },
  {
    id: 4,
    company: "Pinnacle Financial Services",
    industry: "Finance",
    tag: "BC Consulting + Training",
    tagColor: "#059669",
    location: "Manama, Bahrain",
    size: "60 employees",
    duration: "2 months",
    heroColor: "from-[#0A2A1A] to-[#0D1B2A]",
    accentColor: "#059669",
    icon: Shield,
    summary:
      "A boutique financial services firm needed to optimize their existing Business Central setup and upskill their finance team. Aicen Solutions delivered a full system audit, optimization, and a structured training program — reducing manual journal entries by 65%.",
    challenge:
      "Pinnacle had implemented Business Central two years prior through a different partner, but the setup was incomplete and underutilized. The finance team was still performing many tasks manually, and the system lacked proper approval workflows, bank reconciliation automation, and management reporting.",
    solution:
      "We performed a comprehensive system audit, reconfigured the chart of accounts, built automated approval workflows, set up bank feed integration, and created custom management report layouts. A 3-week structured training program was delivered to the entire finance team of 12 users.",
    results: [
      { metric: "65%", label: "Reduction in manual journal entries" },
      { metric: "90%", label: "Bank reconciliation automated" },
      { metric: "12 users", label: "Fully trained and certified" },
      { metric: "2 days", label: "Monthly close (down from 8)" },
    ],
    modules: ["Finance Optimization", "Approval Workflows", "Bank Reconciliation", "Management Reporting", "User Training"],
    testimonial: {
      quote:
        "Our previous implementation left us with a system we barely used. Aicen came in, fixed everything, and trained our team properly. We're now using 90% of Business Central's capabilities.",
      author: "CFO, Pinnacle Financial Services",
    },
  },
  {
    id: 5,
    company: "Nexus Professional Services",
    industry: "Services",
    tag: "BC Implementation",
    tagColor: "#EA580C",
    location: "Doha, Qatar",
    size: "90 employees",
    duration: "3 months",
    heroColor: "from-[#2A1A0A] to-[#0D1B2A]",
    accentColor: "#EA580C",
    icon: Users,
    summary:
      "A professional services consultancy needed project-based accounting and resource management. Aicen Solutions implemented Business Central with full project management integration, improving project profitability visibility by 80%.",
    challenge:
      "Nexus was managing 30+ concurrent client projects using a combination of Excel timesheets, a standalone invoicing tool, and a basic accounting package. Project profitability was invisible until month-end, and billing delays were causing cash flow issues.",
    solution:
      "We implemented Business Central with the Projects module fully configured for time & materials billing, fixed-fee projects, and retainer contracts. Resource planning, timesheet approvals, WIP tracking, and automated client invoicing were all set up and integrated with their CRM.",
    results: [
      { metric: "80%", label: "Improvement in project profitability visibility" },
      { metric: "50%", label: "Faster client invoicing" },
      { metric: "30+", label: "Projects managed in real-time" },
      { metric: "15%", label: "Increase in billable utilization" },
    ],
    modules: ["Project Management", "Time & Expense", "Resource Planning", "Client Billing", "CRM Integration"],
    testimonial: {
      quote:
        "We can now see the profitability of every project in real-time. Aicen's implementation has fundamentally changed how we manage our business. Billing is faster and our cash flow has improved significantly.",
      author: "Managing Director, Nexus Professional Services",
    },
  },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = study.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-r ${study.heroColor} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
          style={{ background: study.accentColor, transform: "translate(30%, -30%)" }} />
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${study.accentColor}20`, border: `1px solid ${study.accentColor}40` }}>
              <Icon className="w-6 h-6" style={{ color: study.accentColor }} />
            </div>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: `${study.accentColor}30`, border: `1px solid ${study.accentColor}50` }}
            >
              {study.tag}
            </span>
          </div>
          <h3 className="text-white font-extrabold text-xl mb-1"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {study.company}
          </h3>
          <div className="flex flex-wrap gap-3 text-white/50 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span>{study.industry}</span>
            <span>·</span>
            <span>{study.location}</span>
            <span>·</span>
            <span>{study.size}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="p-6">
        <p className="text-[#64748B] text-sm leading-relaxed mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {study.summary}
        </p>

        {/* Key Results Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {study.results.map((r) => (
            <div key={r.label} className="bg-[#F8FAFC] rounded-xl p-3 border border-gray-100">
              <div className="font-extrabold text-lg text-[#0D1B2A]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: study.accentColor }}>
                {r.metric}
              </div>
              <div className="text-[#64748B] text-xs leading-tight mt-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {r.label}
              </div>
            </div>
          ))}
        </div>

        {/* Modules Used */}
        <div className="flex flex-wrap gap-2 mb-5">
          {study.modules.map((mod) => (
            <span key={mod}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: study.accentColor,
                background: `${study.accentColor}10`,
                border: `1px solid ${study.accentColor}20`,
              }}>
              {mod}
            </span>
          ))}
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold transition-colors w-full justify-between"
          style={{ color: study.accentColor, fontFamily: "'DM Sans', sans-serif" }}
        >
          <span>{expanded ? "Hide full case study" : "Read full case study"}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-5 space-y-5 border-t border-gray-100 mt-5">
                {/* Challenge */}
                <div>
                  <h4 className="text-[#0D1B2A] font-bold text-sm mb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                      style={{ background: study.accentColor }}>1</span>
                    The Challenge
                  </h4>
                  <p className="text-[#64748B] text-sm leading-relaxed pl-7"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-[#0D1B2A] font-bold text-sm mb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                      style={{ background: study.accentColor }}>2</span>
                    Our Solution
                  </h4>
                  <p className="text-[#64748B] text-sm leading-relaxed pl-7"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {study.solution}
                  </p>
                </div>

                {/* Testimonial */}
                <div className="rounded-xl p-4" style={{ background: `${study.accentColor}08`, border: `1px solid ${study.accentColor}20` }}>
                  <p className="text-[#0D1B2A] text-sm leading-relaxed italic mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    "{study.testimonial.quote}"
                  </p>
                  <p className="text-xs font-semibold" style={{ color: study.accentColor, fontFamily: "'DM Sans', sans-serif" }}>
                    — {study.testimonial.author}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-[#64748B]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <Clock className="w-4 h-4" style={{ color: study.accentColor }} />
                  <span>Implementation duration: <strong className="text-[#0D1B2A]">{study.duration}</strong></span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((s) => s.industry === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#0A2540] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0078D4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00B4D8]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Proven Results
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 max-w-3xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Real Businesses.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] to-[#00B4D8]">
                Real Results.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Explore how Aicen Solutions has helped businesses across industries transform their operations with Microsoft Business Central ERP.
            </p>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { icon: CheckCircle2, value: "150+", label: "Implementations" },
              { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
              { icon: Users, value: "50+", label: "Certified Consultants" },
              { icon: Clock, value: "Avg 3.5mo", label: "Go-Live Timeline" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-5 h-5 text-[#00B4D8]" />
                <div>
                  <div className="text-white font-extrabold text-lg leading-none"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            <span className="text-[#64748B] text-sm font-medium mr-2 whitespace-nowrap"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Filter by industry:
            </span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveFilter(ind)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === ind
                    ? "bg-[#0078D4] text-white shadow-md shadow-blue-500/20"
                    : "bg-gray-100 text-[#64748B] hover:bg-gray-200"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map((study, i) => (
                <CaseStudyCard key={study.id} study={study} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#64748B] text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                No case studies found for this industry yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[#0078D4] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              How We Deliver
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Our Implementation Methodology
            </h2>
            <p className="text-[#64748B] text-base mt-4 max-w-xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Every case study above followed our proven 5-phase delivery framework, ensuring consistent, on-time, and on-budget results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery", desc: "Business analysis, requirements gathering, and gap assessment." },
              { step: "02", title: "Design", desc: "Solution architecture, data mapping, and project planning." },
              { step: "03", title: "Build", desc: "Configuration, customization, and integration development." },
              { step: "04", title: "Test & Train", desc: "UAT, data migration validation, and user training." },
              { step: "05", title: "Go-Live", desc: "Cutover, hypercare support, and post-go-live optimization." },
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 hover:border-[#0078D4]/30 hover:shadow-md transition-all group"
              >
                {i < 4 && (
                  <div className="hidden lg:block absolute top-8 -right-2 z-10">
                    <ArrowRight className="w-4 h-4 text-[#0078D4]/40" />
                  </div>
                )}
                <div className="text-3xl font-extrabold text-[#0078D4]/20 mb-3 group-hover:text-[#0078D4]/40 transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {phase.step}
                </div>
                <h3 className="text-[#0D1B2A] font-bold text-base mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {phase.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] to-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0078D4]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Your Success Story Starts Here
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Ready to Become Our Next Case Study?
            </h2>
            <p className="text-white/60 text-base mb-8 max-w-xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Let's discuss your business challenges and show you how Business Central can deliver measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] text-white font-semibold px-8 rounded-lg shadow-xl shadow-blue-500/30 transition-all hover:scale-105"
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
                  className="border-white/20 text-white hover:bg-white/10 px-8 rounded-lg bg-transparent"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
