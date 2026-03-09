/**
 * AICEN SOLUTIONS - SERVICES PAGE
 * Design: Modern Tech-Forward B2B SaaS
 * Colors: Midnight Blue + MS Blue + Teal
 * Typography: Plus Jakarta Sans + DM Sans
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Cog, HeadphonesIcon, TrendingUp, GraduationCap, Wrench,
  CheckCircle2, ArrowRight, Clock, Users, Shield, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "implementation",
    icon: Cog,
    title: "Business Central Implementation",
    subtitle: "End-to-End ERP Deployment",
    color: "#0078D4",
    description: "Our proven implementation methodology ensures a smooth, on-time, and on-budget Business Central deployment. We follow a structured approach that minimizes disruption to your operations while maximizing adoption and ROI.",
    features: [
      "Requirements analysis and business process mapping",
      "System design and configuration",
      "Data migration from legacy systems",
      "Custom development and integrations",
      "User acceptance testing (UAT)",
      "Go-live support and hypercare",
    ],
    deliverables: ["Project Plan", "Business Blueprint", "Configured System", "Training Materials", "Go-Live Support"],
    duration: "3–6 months",
    teamSize: "2–5 consultants",
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    subtitle: "Ongoing System Excellence",
    color: "#00B4D8",
    description: "Keep your Business Central running at peak performance with our comprehensive support and maintenance services. Our dedicated support team provides rapid response, proactive monitoring, and continuous optimization.",
    features: [
      "Dedicated support team with defined SLAs",
      "Incident management and resolution",
      "Proactive system health monitoring",
      "Regular system updates and patches",
      "Performance optimization",
      "Monthly reporting and reviews",
    ],
    deliverables: ["SLA Agreement", "Support Portal Access", "Monthly Reports", "Quarterly Reviews"],
    duration: "Ongoing",
    teamSize: "Dedicated support team",
  },
  {
    id: "consulting",
    icon: TrendingUp,
    title: "ERP Consulting",
    subtitle: "Strategic Business Transformation",
    color: "#0078D4",
    description: "Our experienced consultants work closely with your leadership team to align your ERP strategy with business objectives, identify improvement opportunities, and create a roadmap for digital transformation.",
    features: [
      "Current state assessment and gap analysis",
      "ERP strategy and roadmap development",
      "Business process optimization",
      "Change management planning",
      "ROI analysis and business case development",
      "Vendor selection and evaluation support",
    ],
    deliverables: ["Assessment Report", "ERP Roadmap", "Business Case", "Process Maps", "Change Management Plan"],
    duration: "4–12 weeks",
    teamSize: "1–3 senior consultants",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "User Training",
    subtitle: "Empowering Your Team",
    color: "#00B4D8",
    description: "Maximize your Business Central investment with our comprehensive training programs. We design role-based training tailored to your specific configuration, ensuring every user is confident and productive.",
    features: [
      "Role-based training curriculum design",
      "On-site and remote training delivery",
      "Train-the-trainer programs",
      "Custom training materials and guides",
      "E-learning module development",
      "Post-training competency assessment",
    ],
    deliverables: ["Training Plan", "Custom User Guides", "Training Videos", "Competency Assessments"],
    duration: "1–4 weeks",
    teamSize: "1–2 training specialists",
  },
  {
    id: "migration",
    icon: Wrench,
    title: "Upgrades & Migration",
    subtitle: "Seamless System Transitions",
    color: "#0078D4",
    description: "Whether upgrading from an older version of Business Central or migrating from a different ERP system, our migration specialists ensure data integrity, minimal downtime, and a smooth transition.",
    features: [
      "Legacy system analysis and data mapping",
      "Data cleansing and transformation",
      "Phased migration approach",
      "Parallel run management",
      "Cutover planning and execution",
      "Post-migration validation and support",
    ],
    deliverables: ["Migration Plan", "Data Mapping Document", "Cutover Checklist", "Validation Report"],
    duration: "2–6 months",
    teamSize: "2–4 migration specialists",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We learn your business, goals, and challenges through structured workshops." },
  { step: "02", title: "Design", desc: "We design the solution architecture and configure Business Central to your needs." },
  { step: "03", title: "Build & Test", desc: "We build, customize, and rigorously test the solution before go-live." },
  { step: "04", title: "Deploy", desc: "We execute a carefully planned go-live with full support on standby." },
  { step: "05", title: "Support", desc: "We provide ongoing support and optimization to ensure long-term success." },
];

export default function Services() {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Our Services
            </h1>
            <p className="text-white/60 text-lg max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Comprehensive Business Central ERP services designed to help your business grow, operate efficiently, and make smarter decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${service.color}15` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest mb-2 block"
                    style={{ color: service.color, fontFamily: "'DM Sans', sans-serif" }}>
                    {service.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1B2A] mb-4"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {service.title}
                  </h2>
                  <p className="text-[#64748B] leading-relaxed mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                        <span className="text-[#374151] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      className="font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, #00B4D8)`,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Info Card */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-[#F0F4F8] rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-[#0D1B2A] font-bold text-lg mb-6"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Service Details
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-[#0078D4]" />
                          <span className="text-xs text-[#64748B] font-medium uppercase tracking-wide"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>Duration</span>
                        </div>
                        <p className="text-[#0D1B2A] font-semibold text-sm"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {service.duration}
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-[#0078D4]" />
                          <span className="text-xs text-[#64748B] font-medium uppercase tracking-wide"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>Team</span>
                        </div>
                        <p className="text-[#0D1B2A] font-semibold text-sm"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {service.teamSize}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[#0D1B2A] font-semibold text-sm mb-3 flex items-center gap-2"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        <Shield className="w-4 h-4 text-[#0078D4]" />
                        Key Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((d) => (
                          <span key={d}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0078D4] bg-[#0078D4]/10 border border-[#0078D4]/20"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Our Proven Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#0078D4]/50 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#00B4D8] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                    <span className="text-white font-extrabold text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0078D4] to-[#00B4D8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-base mb-7"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Contact us today for a free consultation and discover the right service for your business.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0078D4] hover:bg-white/90 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all hover:scale-105"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
