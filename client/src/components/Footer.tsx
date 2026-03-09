/**
 * AICEN SOLUTIONS FOOTER
 * Design: Dark midnight blue, gradient accent line at top
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B2A] text-white">
      {/* Gradient accent line */}
      <div className="h-0.5 bg-gradient-to-r from-[#0078D4] via-[#00B4D8] to-[#0078D4]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <div className="flex items-center mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663415723832/JrGn9WVGPcqBe9gGrUn75a/aicen-logo_5c677265.jpg"
                  alt="Aicen Solutions Logo"
                  className="h-14 w-auto object-contain rounded-lg"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              A certified Microsoft Partner delivering world-class Business Central ERP solutions to help businesses grow, streamline operations, and make smarter decisions.
            </p>
            {/* Microsoft Partner Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <div className="flex gap-0.5">
                <div className="w-3 h-3 bg-[#F25022]" />
                <div className="w-3 h-3 bg-[#7FBA00]" />
                <div className="w-3 h-3 bg-[#00A4EF]" />
                <div className="w-3 h-3 bg-[#FFB900]" />
              </div>
              <span className="text-xs text-white/70 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Microsoft Partner</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "BC Implementation", href: "/services#implementation" },
                { label: "Support & Maintenance", href: "/services#support" },
                { label: "ERP Consulting", href: "/services#consulting" },
                { label: "User Training", href: "/services#training" },
                { label: "Upgrades & Migration", href: "/services#migration" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <div className="flex items-center gap-2 text-white/60 hover:text-[#00B4D8] text-sm transition-colors group cursor-pointer"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                      {item.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Industries We Serve", href: "/industries" },
                { label: "Why Choose Us", href: "/#why-us" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <div className="flex items-center gap-2 text-white/60 hover:text-[#00B4D8] text-sm transition-colors group cursor-pointer"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                      {item.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@aicensolutions.com" className="text-white/60 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  info@aicensolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/60 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  123 Business Avenue,<br />Tech District, City 00000
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00B4D8] hover:border-[#00B4D8]/30 hover:bg-[#00B4D8]/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © {currentYear} Aicen Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
