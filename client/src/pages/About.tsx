/**
 * AICEN SOLUTIONS - ABOUT PAGE
 * Design: Modern Tech-Forward B2B SaaS
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Eye, Heart, Award, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Client-Centric",
    desc: "Every decision we make is guided by what's best for our clients. Your success is our success.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in every implementation, every support call, every interaction.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "We operate with transparency, honesty, and accountability in everything we do.",
  },
  {
    icon: Globe,
    title: "Innovation",
    desc: "We stay at the forefront of Microsoft technology to bring you the most advanced solutions.",
  },
];

const team = [
  {
    name: "Ahmed Al-Rashid",
    title: "CEO & Founder",
    expertise: "Business Central Architecture",
    initials: "AA",
  },
  {
    name: "Sarah Thompson",
    title: "Head of Implementation",
    expertise: "ERP Project Management",
    initials: "ST",
  },
  {
    name: "Michael Chen",
    title: "Lead Technical Consultant",
    expertise: "BC Development & Integration",
    initials: "MC",
  },
  {
    name: "Priya Sharma",
    title: "Head of Support",
    expertise: "Customer Success",
    initials: "PS",
  },
  {
    name: "James Wilson",
    title: "Senior Functional Consultant",
    expertise: "Finance & Supply Chain",
    initials: "JW",
  },
  {
    name: "Fatima Al-Zahra",
    title: "Training Manager",
    expertise: "User Adoption & Training",
    initials: "FZ",
  },
];

const milestones = [
  { year: "2012", event: "Aicen Solutions founded with a vision to democratize ERP for SMEs" },
  { year: "2014", event: "Achieved Microsoft Silver Partner status" },
  { year: "2016", event: "Expanded to serve 5 industries with 30+ successful implementations" },
  { year: "2018", event: "Achieved Microsoft Gold Partner status" },
  { year: "2020", event: "Launched cloud-first Business Central practice" },
  { year: "2022", event: "Reached 100+ implementation milestone" },
  { year: "2024", event: "Expanded team to 50+ certified consultants across multiple regions" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#0A2540] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0078D4]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              About Aicen Solutions
            </h1>
            <p className="text-white/60 text-lg max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              A Microsoft Partner company on a mission to transform businesses through the power of Business Central ERP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663415723832/JrGn9WVGPcqBe9gGrUn75a/about-team-bFt2GSDrbd7BhuQSbtij6c.webp"
                alt="Aicen Solutions team"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#0078D4] font-semibold text-sm uppercase tracking-widest mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Empowering Businesses Through Technology
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Founded in 2020, Aicen Solutions has grown from a small ERP consultancy to a leading Microsoft Partner with over 50 certified professionals serving clients across multiple industries and regions.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We specialize exclusively in Microsoft Dynamics 365 Business Central, which means our expertise is deep, focused, and continuously evolving with the platform. Our team brings together functional consultants, technical developers, project managers, and industry specialists to deliver solutions that truly transform businesses.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F0F4F8] rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-[#0078D4]" />
                    <span className="font-bold text-[#0D1B2A] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Our Mission
                    </span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    To deliver transformative ERP solutions that empower businesses to achieve their full potential.
                  </p>
                </div>
                <div className="bg-[#F0F4F8] rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-[#00B4D8]" />
                    <span className="font-bold text-[#0D1B2A] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Our Vision
                    </span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    To be the most trusted Microsoft Business Central partner, known for excellence and lasting client relationships.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[#0078D4] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0078D4]/10 to-[#00B4D8]/10 flex items-center justify-center mx-auto mb-5 group-hover:from-[#0078D4]/20 group-hover:to-[#00B4D8]/20 transition-all">
                  <value.icon className="w-7 h-7 text-[#0078D4]" />
                </div>
                <h3 className="text-[#0D1B2A] font-bold text-base mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {value.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              A Decade of Growth
            </h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0078D4] to-[#00B4D8] hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {m.event}
                      </p>
                    </div>
                  </div>
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00B4D8] flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                    <span className="text-white font-bold text-xs text-center leading-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {m.year}
                    </span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[#0078D4] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              The People Behind Aicen
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Meet Our Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F0F4F8] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#00B4D8] flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] font-bold text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {member.name}
                    </h3>
                    <p className="text-[#0078D4] text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {member.title}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#64748B]" />
                  <span className="text-[#64748B] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {member.expertise}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft Partnership */}
      <section className="py-16 bg-[#F0F4F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <div className="flex justify-center gap-1 mb-6">
              <div className="w-8 h-8 bg-[#F25022]" />
              <div className="w-8 h-8 bg-[#7FBA00]" />
              <div className="w-8 h-8 bg-[#00A4EF]" />
              <div className="w-8 h-8 bg-[#FFB900]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Proud Microsoft Partner
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              As a certified Microsoft Partner, Aicen Solutions has demonstrated deep expertise, proven customer success, and a commitment to delivering high-quality Microsoft solutions. Our partnership gives us direct access to Microsoft resources, training, and support to better serve our clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Microsoft Dynamics 365", "Business Central Specialist", "Cloud Solutions", "ERP Implementation"].map((badge) => (
                <span key={badge}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-[#0078D4] bg-[#0078D4]/10 border border-[#0078D4]/20"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0D1B2A] to-[#0A2540]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ready to Work With Us?
          </h2>
          <p className="text-white/60 text-base mb-7"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Let's discuss how Aicen Solutions can help transform your business.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] text-white font-semibold px-8 py-3 rounded-lg shadow-xl shadow-blue-500/30 transition-all hover:scale-105"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
