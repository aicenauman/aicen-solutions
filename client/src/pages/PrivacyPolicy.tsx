/**
 * AICEN SOLUTIONS - PRIVACY POLICY PAGE
 * Design: Modern Tech-Forward B2B SaaS
 * Palette: Midnight blue #0D1B2A, Microsoft blue #0078D4, Teal #00B4D8
 * Typography: Plus Jakarta Sans (headings), DM Sans (body)
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    content: `Aicen Solutions ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (aicensolutions.com.ph) or engage with our services, including Microsoft Dynamics 365 Business Central implementation, support, consulting, training, and related ERP services.

Please read this policy carefully. If you disagree with its terms, please discontinue use of our website and services. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect information that you voluntarily provide to us when you fill out a contact form, request a consultation, subscribe to our newsletter, or otherwise communicate with us. This may include:

• **Personal Identification Information:** Full name, job title, company name, email address, phone number, and mailing address.
• **Business Information:** Industry, company size, current ERP system, and business requirements you share with us during consultations or discovery sessions.
• **Communication Records:** Emails, messages, and records of conversations between you and our team.
• **Technical Data:** IP address, browser type, operating system, referring URLs, and pages visited on our website, collected automatically via cookies and similar tracking technologies.
• **Usage Data:** Information about how you interact with our website, including time spent on pages, links clicked, and navigation paths.

We do not collect sensitive personal data such as government identification numbers, financial account details, or health information unless explicitly required for a specific service engagement and with your express consent.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

• **To provide and manage our services:** Including ERP implementation projects, support contracts, training programs, and consulting engagements.
• **To respond to inquiries:** When you contact us through our website or by email, we use your information to respond to your questions and provide requested information.
• **To send service communications:** Including project updates, support notifications, invoices, and other transactional communications related to your engagement with us.
• **To send marketing communications:** With your consent, we may send newsletters, product updates, event invitations, and other promotional content. You may opt out at any time.
• **To improve our website and services:** We analyze usage data to understand how visitors interact with our website and to improve our content and user experience.
• **To comply with legal obligations:** We may process your data to comply with applicable laws, regulations, and legal proceedings.`,
  },
  {
    title: "4. Sharing Your Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:

• **Service Providers:** We may share information with trusted third-party vendors who assist us in operating our website and delivering our services (e.g., cloud hosting providers, email platforms, CRM systems). These parties are contractually obligated to keep your information confidential and use it only for the purposes for which it was disclosed.
• **Microsoft:** As a certified Microsoft Partner, we may share relevant business information with Microsoft in connection with licensing, partner program compliance, and co-selling activities. Microsoft's privacy practices are governed by the Microsoft Privacy Statement.
• **Legal Requirements:** We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect our rights, your safety, or the safety of others.
• **Business Transfers:** In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control.`,
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect usage data. Cookies are small text files stored on your device that help us recognize you on return visits and understand how you use our website.

We use the following types of cookies:

• **Essential Cookies:** Necessary for the website to function properly. These cannot be disabled.
• **Analytics Cookies:** Help us understand how visitors interact with our website by collecting anonymous usage statistics.
• **Marketing Cookies:** Used to track visitors across websites to display relevant advertisements (only with your consent).

You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect the functionality of our website.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:

• Contact and inquiry data is retained for up to 3 years from the date of last contact.
• Client project data is retained for the duration of the engagement plus 7 years to comply with legal and accounting obligations.
• Website analytics data is retained in anonymized form for up to 2 years.

When your information is no longer needed, we will securely delete or anonymize it.`,
  },
  {
    title: "7. Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), access controls, and regular security reviews.

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. You are responsible for maintaining the confidentiality of any credentials used to access our services.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on your location and applicable law, you may have the following rights regarding your personal information:

• **Right to Access:** You may request a copy of the personal information we hold about you.
• **Right to Rectification:** You may request that we correct inaccurate or incomplete information.
• **Right to Erasure:** You may request that we delete your personal information, subject to certain legal exceptions.
• **Right to Restrict Processing:** You may request that we limit how we use your information in certain circumstances.
• **Right to Data Portability:** You may request a copy of your information in a structured, machine-readable format.
• **Right to Object:** You may object to our processing of your information for direct marketing purposes at any time.
• **Right to Withdraw Consent:** Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.

To exercise any of these rights, please contact us at info@aicensolutions.com.ph. We will respond to your request within 30 days.`,
  },
  {
    title: "9. Third-Party Links",
    content: `Our website may contain links to third-party websites, including Microsoft's website and other partner resources. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our website and services are intended for business professionals and are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete it.`,
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Aicen Solutions**
Uptown Bonifacio Tower, 11th Ave.
Bonifacio Global City, Taguig, Manila, Philippines

Email: info@aicensolutions.com.ph
Phone: +63 (02) 7442-8843`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#0A2540] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0078D4]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0078D4]/20 border border-[#0078D4]/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#00B4D8]" />
              </div>
              <span className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Legal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Last Updated: March 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link href="/">
            <div className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#0078D4] transition-colors mb-10 cursor-pointer"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </div>
          </Link>

          <div className="prose max-w-none">
            <p className="text-[#475569] text-base leading-relaxed mb-10 p-5 bg-[#F0F7FF] border border-[#0078D4]/20 rounded-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              This Privacy Policy describes how Aicen Solutions collects, uses, and protects your personal information. We are committed to transparency and to handling your data responsibly in accordance with applicable data protection laws, including the Data Privacy Act of 2012 (Republic Act No. 10173) of the Philippines.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <h2 className="text-xl font-extrabold text-[#0D1B2A] mb-4 pb-2 border-b border-gray-100"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {section.title}
                  </h2>
                  <div className="text-[#475569] text-base leading-relaxed space-y-3"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {section.content.split("\n\n").map((para, j) => (
                      <p key={j}>
                        {para.split("\n").map((line, k) => (
                          <span key={k}>
                            {line.startsWith("•") ? (
                              <span className="flex items-start gap-2 my-1.5">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0078D4] flex-shrink-0" />
                                <span dangerouslySetInnerHTML={{
                                  __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong class='text-[#0D1B2A]'>$1</strong>")
                                }} />
                              </span>
                            ) : (
                              <span dangerouslySetInnerHTML={{
                                __html: line.replace(/\*\*(.*?)\*\*/g, "<strong class='text-[#0D1B2A]'>$1</strong>") + (k < para.split("\n").length - 1 ? "<br/>" : "")
                              }} />
                            )}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
