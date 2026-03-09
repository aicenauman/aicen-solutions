/**
 * AICEN SOLUTIONS NAVBAR
 * Design: Glass morphism on scroll, midnight blue base
 * Font: Plus Jakarta Sans for brand name, DM Sans for nav links
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "BC Implementation", href: "/services#implementation" },
      { label: "Support & Maintenance", href: "/services#support" },
      { label: "Consulting", href: "/services#consulting" },
      { label: "Training", href: "/services#training" },
      { label: "Upgrades & Migration", href: "/services#migration" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href: string) => location === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0078D4] to-[#00B4D8] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>A</span>
              </div>
              <div>
                <span
                  className="text-white font-bold text-xl tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Aicen
                </span>
                <span
                  className="text-[#00B4D8] font-bold text-xl tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {" "}Solutions
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="bg-[#0A2540] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1">
                      {link.children.map((child) => (
                        <Link key={child.label} href={child.href}>
                          <div className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {child.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  <div
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      isActive(link.href)
                        ? "text-[#00B4D8] bg-white/5"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </div>
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button
                className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] hover:from-[#006BBD] hover:to-[#00A3C4] text-white font-semibold px-5 py-2 rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/30 hover:scale-105"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get a Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D1B2A]/98 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link key={child.label} href={child.href}>
                          <div className="px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {child.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  <div
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      isActive(link.href)
                        ? "text-[#00B4D8] bg-white/5"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </div>
                </Link>
              )
            )}
            <div className="pt-3 pb-1">
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-[#0078D4] to-[#00B4D8] text-white font-semibold rounded-lg">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
