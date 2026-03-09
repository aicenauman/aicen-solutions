/**
 * AICEN SOLUTIONS - TERMS OF SERVICE PAGE
 * Design: Modern Tech-Forward B2B SaaS
 * Palette: Midnight blue #0D1B2A, Microsoft blue #0078D4, Teal #00B4D8
 * Typography: Plus Jakarta Sans (headings), DM Sans (body)
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { FileText, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing our website (aicensolutions.com.ph) or engaging Aicen Solutions for any of our services — including but not limited to Microsoft Dynamics 365 Business Central implementation, ERP consulting, support and maintenance, user training, and system migration — you agree to be bound by these Terms of Service ("Terms").

These Terms constitute a legally binding agreement between you (the "Client" or "User") and Aicen Solutions ("Company," "we," "our," or "us"), a Microsoft Partner company registered and operating in the Philippines. If you do not agree to these Terms, please do not use our website or engage our services.`,
  },
  {
    title: "2. Description of Services",
    content: `Aicen Solutions provides the following professional services:

• **Business Central Implementation:** End-to-end deployment of Microsoft Dynamics 365 Business Central, including system configuration, data migration, integration, and go-live support.
• **Support & Maintenance:** Ongoing technical support, bug resolution, system monitoring, and helpdesk services for Business Central environments.
• **ERP Consulting:** Strategic advisory services for ERP selection, process optimization, system architecture, and digital transformation planning.
• **User Training:** Structured training programs for end users and administrators of Business Central, delivered in-person or remotely.
• **Upgrades & Migration:** Migration from legacy ERP systems or older versions of Microsoft Dynamics to Business Central Online or On-Premises.

The specific scope, deliverables, timeline, and fees for any service engagement will be defined in a separate Statement of Work (SOW) or Service Agreement signed by both parties.`,
  },
  {
    title: "3. Use of Our Website",
    content: `You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website. Specifically, you agree not to:

• Use the website in any way that violates applicable local, national, or international laws or regulations.
• Transmit any unsolicited or unauthorized advertising or promotional material.
• Attempt to gain unauthorized access to any part of our website, servers, or databases.
• Introduce viruses, trojans, worms, or other malicious or technologically harmful material.
• Scrape, harvest, or collect data from our website without our express written consent.
• Use automated tools to access or interact with our website in a manner that places an unreasonable load on our infrastructure.

We reserve the right to terminate or restrict your access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.`,
  },
  {
    title: "4. Intellectual Property",
    content: `All content on this website — including but not limited to text, graphics, logos, images, icons, audio clips, and software — is the property of Aicen Solutions or its content suppliers and is protected by applicable intellectual property laws.

You are granted a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial informational purposes only. This license does not include the right to:

• Reproduce, distribute, or publicly display any content from our website without our prior written consent.
• Modify or create derivative works based on our content.
• Use our trademarks, service marks, or logos without express written permission.
• Use our content for any commercial purpose or for any public display.

The Aicen Solutions name, logo, and all related product and service names are trademarks of Aicen Solutions. Microsoft, Dynamics 365, and Business Central are registered trademarks of Microsoft Corporation. Our use of Microsoft trademarks is governed by our Microsoft Partner Agreement.`,
  },
  {
    title: "5. Client Responsibilities",
    content: `In connection with any service engagement, the Client agrees to:

• Provide accurate, complete, and timely information required for the delivery of services, including access to systems, data, and key personnel.
• Designate a project sponsor and point of contact with sufficient authority to make decisions within the agreed project scope.
• Ensure that all necessary internal approvals, licenses, and permissions are obtained prior to the commencement of services.
• Participate in user acceptance testing (UAT) and provide timely feedback and sign-off on deliverables.
• Pay all invoices in accordance with the payment terms specified in the applicable Statement of Work or Service Agreement.
• Maintain appropriate backups of all data prior to any system changes or migrations performed by Aicen Solutions.

Failure to fulfill these responsibilities may result in project delays, additional costs, or service interruptions for which Aicen Solutions shall not be held liable.`,
  },
  {
    title: "6. Payment Terms",
    content: `Unless otherwise specified in a Statement of Work or Service Agreement:

• Invoices are due within thirty (30) days of the invoice date.
• Late payments are subject to a monthly interest charge of 1.5% or the maximum rate permitted by applicable law, whichever is lower.
• Aicen Solutions reserves the right to suspend services for accounts that are more than thirty (30) days past due.
• All fees are quoted and payable in Philippine Pesos (PHP) unless otherwise agreed in writing.
• Fees are exclusive of applicable taxes, including VAT, which will be added to invoices as required by law.

Disputed invoices must be raised in writing within fifteen (15) days of the invoice date. Undisputed portions of invoices must be paid by the due date.`,
  },
  {
    title: "7. Confidentiality",
    content: `Both parties acknowledge that in the course of a service engagement, each may have access to confidential information belonging to the other party, including but not limited to business processes, financial data, technical systems, customer data, and proprietary methodologies.

Each party agrees to: (a) hold the other party's confidential information in strict confidence; (b) not disclose such information to any third party without prior written consent; and (c) use such information solely for the purposes of the service engagement.

These confidentiality obligations survive the termination of any service agreement for a period of three (3) years. They do not apply to information that is or becomes publicly available through no fault of the receiving party, or that is independently developed by the receiving party without reference to the confidential information.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, Aicen Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, business interruption, or loss of goodwill, arising out of or in connection with our services or website, even if we have been advised of the possibility of such damages.

Our total aggregate liability to you for any claims arising out of or related to these Terms or our services shall not exceed the total fees paid by you to Aicen Solutions in the three (3) months immediately preceding the event giving rise to the claim.

Nothing in these Terms limits our liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited by applicable law.`,
  },
  {
    title: "9. Disclaimer of Warranties",
    content: `Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

We do not warrant that: (a) our website will be uninterrupted, error-free, or secure; (b) any defects will be corrected; or (c) the results obtained from using our services will meet your specific requirements or expectations.

We are not responsible for any errors or omissions in the content of our website, or for any loss or damage of any kind incurred as a result of your use of or reliance on any content posted, transmitted, or otherwise made available via the website.`,
  },
  {
    title: "10. Termination",
    content: `Either party may terminate a service engagement in accordance with the terms specified in the applicable Statement of Work or Service Agreement. In the absence of specific termination provisions, either party may terminate with thirty (30) days' written notice.

Upon termination: (a) all outstanding fees for services rendered become immediately due and payable; (b) each party shall return or destroy the other party's confidential information; and (c) Aicen Solutions will provide reasonable transition assistance for up to thirty (30) days at its standard rates.

We reserve the right to terminate your access to our website immediately and without notice if we determine that you have violated these Terms.`,
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions.

Any dispute arising out of or in connection with these Terms or our services shall first be subject to good-faith negotiation between the parties. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may submit the dispute to binding arbitration in accordance with the rules of the Philippine Dispute Resolution Center, Inc. (PDRCI). The arbitration shall take place in Taguig City, Metro Manila, Philippines, and shall be conducted in English.

Nothing in this clause prevents either party from seeking urgent injunctive or other equitable relief from a court of competent jurisdiction.`,
  },
  {
    title: "12. Changes to These Terms",
    content: `We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page with a revised "Last Updated" date. Your continued use of our website or services after such changes constitutes your acceptance of the revised Terms.

We encourage you to review these Terms periodically to stay informed of any updates.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us:

**Aicen Solutions**
Uptown Bonifacio Tower, 11th Ave.
Bonifacio Global City, Taguig, Manila, Philippines

Email: info@aicensolutions.com.ph
Phone: +63 (02) 7442-8843`,
  },
];

export default function TermsOfService() {
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
                <FileText className="w-5 h-5 text-[#00B4D8]" />
              </div>
              <span className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Legal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Terms of Service
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
              Please read these Terms of Service carefully before using our website or engaging our services. These Terms govern your use of the Aicen Solutions website and your relationship with us as a service provider. By using our website or services, you agree to these Terms in full.
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
