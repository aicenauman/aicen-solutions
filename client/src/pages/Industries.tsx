/**
 * AICEN SOLUTIONS - INDUSTRIES PAGE
 * Design: Modern Tech-Forward B2B SaaS
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Factory, ShoppingCart, Truck, Landmark, Building2, Leaf,
  CheckCircle2, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    color: "#0078D4",
    description: "Streamline your production operations with Business Central's powerful manufacturing capabilities. From production planning to shop floor management, we help manufacturers achieve operational excellence.",
    challenges: [
      "Complex production planning and scheduling",
      "Inventory and materials management",
      "Quality control and compliance",
      "Cost tracking and profitability analysis",
    ],
    solutions: [
      "Production orders and capacity planning",
      "Bill of materials (BOM) management",
      "Machine center and work center tracking",
      "Integrated quality management",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    color: "#00B4D8",
    description: "Unify your retail operations with a single platform that connects your physical stores, online channels, and back-office operations for a seamless customer experience.",
    challenges: [
      "Multi-channel inventory management",
      "Customer loyalty and retention",
      "Seasonal demand forecasting",
      "Omnichannel order fulfillment",
    ],
    solutions: [
      "Unified commerce platform integration",
      "Real-time inventory across all channels",
      "Customer relationship management",
      "Automated replenishment and forecasting",
    ],
  },
  {
    icon: Truck,
    title: "Distribution & Logistics",
    color: "#0078D4",
    description: "Optimize your supply chain and warehouse operations with Business Central's comprehensive distribution capabilities, from purchase orders to last-mile delivery.",
    challenges: [
      "Complex warehouse operations",
      "Supplier management and procurement",
      "Route optimization and delivery tracking",
      "Returns and reverse logistics",
    ],
    solutions: [
      "Advanced warehouse management",
      "Automated purchase order management",
      "Shipment tracking and logistics",
      "Vendor performance management",
    ],
  },
  {
    icon: Landmark,
    title: "Financial Services",
    color: "#00B4D8",
    description: "Meet the stringent financial reporting, compliance, and audit requirements of financial services organizations with Business Central's robust financial management capabilities.",
    challenges: [
      "Complex regulatory compliance",
      "Multi-entity and multi-currency management",
      "Audit trails and financial controls",
      "Real-time financial reporting",
    ],
    solutions: [
      "Comprehensive general ledger management",
      "Multi-dimensional financial reporting",
      "Automated compliance workflows",
      "Consolidated financial statements",
    ],
  },
  {
    icon: Building2,
    title: "Professional Services",
    color: "#0078D4",
    description: "Manage projects, resources, and client relationships efficiently with Business Central's professional services capabilities, ensuring profitability on every engagement.",
    challenges: [
      "Project profitability tracking",
      "Resource allocation and utilization",
      "Time and expense management",
      "Client billing and invoicing",
    ],
    solutions: [
      "Project management and job costing",
      "Resource planning and scheduling",
      "Timesheet and expense integration",
      "Automated billing workflows",
    ],
  },
  {
    icon: Leaf,
    title: "Food & Beverage",
    color: "#00B4D8",
    description: "Address the unique challenges of the food and beverage industry with lot tracking, expiry management, recipe management, and regulatory compliance built into Business Central.",
    challenges: [
      "Food safety and traceability requirements",
      "Recipe and formula management",
      "Expiry date and lot tracking",
      "Regulatory compliance (FDA, HACCP)",
    ],
    solutions: [
      "Full lot and serial number traceability",
      "Recipe and production formula management",
      "Expiry date management and FEFO",
      "Compliance reporting and documentation",
    ],
  },
];

export default function Industries() {
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
              Sector Expertise
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Industries We Serve
            </h1>
            <p className="text-white/60 text-lg max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Deep industry knowledge combined with Business Central expertise to deliver solutions that address your sector's unique challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${industry.color}15` }}
                  >
                    <industry.icon className="w-7 h-7" style={{ color: industry.color }} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1B2A] mb-4"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {industry.title}
                  </h2>
                  <p className="text-[#64748B] leading-relaxed mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {industry.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-[#0D1B2A] font-semibold text-sm mb-3 uppercase tracking-wide"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Common Challenges
                    </h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-[#64748B] text-sm"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#64748B] mt-2 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button
                      className="font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${industry.color}, #00B4D8)`,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Discuss Your Needs
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Solutions Card */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-[#F0F4F8] rounded-2xl p-8 border border-gray-100">
                    <h4 className="text-[#0D1B2A] font-bold text-base mb-5 flex items-center gap-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                        style={{ background: `${industry.color}20` }}>
                        <CheckCircle2 className="w-4 h-4" style={{ color: industry.color }} />
                      </div>
                      Our Business Central Solutions
                    </h4>
                    <ul className="space-y-4">
                      {industry.solutions.map((s) => (
                        <li key={s} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: industry.color }} />
                          <span className="text-[#374151] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Don't See Your Industry?
          </h2>
          <p className="text-white/80 text-base mb-7"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Business Central is highly adaptable. Contact us to discuss how we can tailor a solution for your specific industry needs.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0078D4] hover:bg-white/90 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all hover:scale-105"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Talk to an Expert
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
