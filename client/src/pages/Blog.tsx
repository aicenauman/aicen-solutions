/**
 * AICEN SOLUTIONS - BLOG PAGE
 * Design: Modern Tech-Forward B2B SaaS
 * Palette: Midnight blue #0D1B2A, Microsoft blue #0078D4, Teal #00B4D8
 * Typography: Plus Jakarta Sans (headings), DM Sans (body)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  User,
  ChevronRight,
  BookOpen,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Business Central", "ERP Implementation", "Finance", "Cloud ERP", "Best Practices"];

const posts = [
  {
    id: 1,
    slug: "what-is-microsoft-business-central",
    title: "What Is Microsoft Dynamics 365 Business Central? A Complete Guide",
    category: "Business Central",
    categoryColor: "#0078D4",
    author: "Aicen Solutions Team",
    date: "February 28, 2026",
    readTime: "7 min read",
    excerpt:
      "Microsoft Dynamics 365 Business Central is an all-in-one business management solution designed for small and mid-sized companies. In this guide, we break down what it is, what it does, and why thousands of businesses are choosing it as their ERP platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: true,
    content: [
      {
        heading: "What Is Business Central?",
        body: "Microsoft Dynamics 365 Business Central is a cloud-based ERP (Enterprise Resource Planning) solution built for small to mid-sized businesses. It connects finance, sales, purchasing, inventory, manufacturing, and operations into a single unified platform — giving business leaders a complete, real-time view of their operations.\n\nOriginally known as Microsoft Dynamics NAV (Navision), Business Central was re-launched as a cloud-first SaaS product in 2018 and has since become one of the fastest-growing ERP platforms in the world, with over 40,000 companies using it globally.",
      },
      {
        heading: "Key Capabilities of Business Central",
        body: "Business Central covers a broad range of business functions out of the box:\n\n• **Financial Management** — General ledger, accounts payable/receivable, bank reconciliation, budgeting, and multi-currency support.\n• **Supply Chain & Inventory** — Purchase orders, vendor management, warehouse management, and real-time stock tracking.\n• **Sales & Customer Management** — Quotes, orders, invoicing, and CRM integration with Dynamics 365 Sales.\n• **Manufacturing** — Production orders, bill of materials, capacity planning, and shop floor management.\n• **Project Management** — Time tracking, resource planning, WIP accounting, and project profitability.\n• **Reporting & Analytics** — Built-in Power BI dashboards, financial reports, and KPI tracking.",
      },
      {
        heading: "Why Are Businesses Choosing Business Central?",
        body: "There are several compelling reasons why Business Central has become the ERP of choice for SMEs:\n\n**1. It's Built on the Microsoft Ecosystem** — Business Central integrates natively with Microsoft 365 (Outlook, Excel, Teams), Power BI, Power Automate, and Azure. If your team already uses Microsoft tools, the learning curve is significantly reduced.\n\n**2. Cloud-First, Always Up to Date** — Unlike traditional on-premise ERP systems that require expensive upgrades every few years, Business Central is updated automatically twice a year by Microsoft, ensuring you always have the latest features and security patches.\n\n**3. Scalable and Flexible** — Business Central grows with your business. You can start with basic finance and add modules as your needs evolve. It supports multiple companies, currencies, and languages.\n\n**4. Affordable Total Cost of Ownership** — With a subscription-based pricing model starting at around $70/user/month, Business Central eliminates large upfront infrastructure costs.",
      },
      {
        heading: "Is Business Central Right for Your Business?",
        body: "Business Central is typically an excellent fit for companies that:\n\n• Have between 10 and 500 employees\n• Are outgrowing accounting software like QuickBooks or Sage\n• Need better visibility across finance, inventory, and operations\n• Want a cloud-based solution with minimal IT overhead\n• Are already using Microsoft 365 tools\n\nIf your business is experiencing growing pains with disconnected systems, manual processes, or limited reporting capabilities, Business Central is worth serious consideration.",
      },
      {
        heading: "Getting Started with Business Central",
        body: "Implementing Business Central successfully requires careful planning and the right partner. As a certified Microsoft Partner, Aicen Solutions specializes in Business Central implementations tailored to your specific industry and business processes. We handle everything from initial discovery and configuration to data migration, training, and ongoing support.\n\nReady to explore whether Business Central is right for your business? Contact our team for a free consultation and demo.",
      },
    ],
  },
  {
    id: 2,
    slug: "erp-implementation-best-practices",
    title: "10 ERP Implementation Best Practices to Ensure a Successful Go-Live",
    category: "ERP Implementation",
    categoryColor: "#7C3AED",
    author: "Aicen Solutions Team",
    date: "February 15, 2026",
    readTime: "9 min read",
    excerpt:
      "ERP implementations have a reputation for going over budget and over schedule. But with the right approach, they don't have to. Here are 10 proven best practices that separate successful ERP projects from troubled ones.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false,
    content: [
      {
        heading: "Why ERP Implementations Fail",
        body: "Studies consistently show that 50–75% of ERP implementations face significant challenges — cost overruns, schedule delays, or failure to deliver expected benefits. The root causes are rarely technical. They are almost always organizational: poor planning, inadequate change management, unclear requirements, and insufficient executive sponsorship.",
      },
      {
        heading: "1. Secure Executive Sponsorship",
        body: "Every successful ERP project has a senior executive champion who actively removes obstacles, makes decisions, and communicates the importance of the project to the organization. Without this, projects stall when departments resist change or competing priorities emerge.",
      },
      {
        heading: "2. Define Clear Business Requirements",
        body: "Before selecting software or a partner, document your current processes, pain points, and future-state requirements in detail. Vague requirements lead to scope creep, rework, and budget overruns. Invest time upfront in a thorough discovery phase.",
      },
      {
        heading: "3. Choose the Right Implementation Partner",
        body: "Your ERP partner is as important as the software itself. Look for a partner with deep industry experience, a proven methodology, certified consultants, and strong client references. A partner who understands your business will configure the system to fit your processes — not force your processes to fit the software.",
      },
      {
        heading: "4. Adopt a Phased Rollout Approach",
        body: "Trying to implement everything at once is a recipe for failure. A phased approach — starting with core finance and adding modules over time — reduces risk, allows the organization to absorb change gradually, and delivers early wins that build momentum.",
      },
      {
        heading: "5. Invest in Data Quality",
        body: "Migrating dirty data into a new ERP system is one of the most common causes of post-go-live problems. Dedicate significant time to cleaning, deduplicating, and validating your data before migration. 'Garbage in, garbage out' applies more to ERP than almost any other technology.",
      },
      {
        heading: "6. Plan for Change Management",
        body: "An ERP implementation is fundamentally a change management project. Communicate early and often about why the change is happening, what it means for each team, and how people will be supported through the transition. Resistance to change is the #1 cause of adoption failure.",
      },
      {
        heading: "7. Prioritize User Training",
        body: "End users who don't know how to use the system will find workarounds, revert to old habits, or simply not use it. Invest in role-based training that focuses on the specific tasks each user needs to perform — not generic system overviews.",
      },
      {
        heading: "8. Test Thoroughly Before Go-Live",
        body: "User Acceptance Testing (UAT) should involve actual end users testing real business scenarios — not just the implementation team checking boxes. Allow sufficient time for testing, issue resolution, and re-testing before committing to a go-live date.",
      },
      {
        heading: "9. Plan for Hypercare Support",
        body: "The first 4–8 weeks after go-live are critical. Have your implementation partner on standby to resolve issues quickly. A hypercare period with dedicated support prevents small problems from becoming major disruptions.",
      },
      {
        heading: "10. Measure and Optimize Post Go-Live",
        body: "Go-live is not the finish line — it's the starting line. Define KPIs before implementation and measure them after. Schedule regular system reviews to optimize configurations, add automation, and ensure the system continues to deliver value as your business evolves.",
      },
    ],
  },
  {
    id: 3,
    slug: "business-central-vs-quickbooks",
    title: "Business Central vs. QuickBooks: When It's Time to Upgrade Your Accounting Software",
    category: "Business Central",
    categoryColor: "#0078D4",
    author: "Aicen Solutions Team",
    date: "January 30, 2026",
    readTime: "6 min read",
    excerpt:
      "QuickBooks is a great starting point for small businesses, but growing companies often hit a ceiling. We compare Business Central and QuickBooks to help you decide when it's time to make the move to a full ERP platform.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    featured: false,
    content: [
      {
        heading: "The QuickBooks Ceiling",
        body: "QuickBooks is the world's most popular accounting software for small businesses — and for good reason. It's affordable, easy to use, and handles basic bookkeeping well. But as businesses grow, they inevitably hit what we call the 'QuickBooks ceiling': a point where the software can no longer keep up with operational complexity.",
      },
      {
        heading: "Signs You've Outgrown QuickBooks",
        body: "You may be ready to move beyond QuickBooks if you're experiencing any of the following:\n\n• You're managing inventory across multiple locations and QuickBooks can't track it accurately\n• Your month-end close takes more than a week due to manual reconciliations\n• You're running your business from multiple disconnected systems (QuickBooks + Excel + a separate inventory tool)\n• You have more than 10–15 users and performance is degrading\n• You need multi-currency, multi-company, or multi-entity consolidation\n• You can't get the management reports you need without significant manual effort",
      },
      {
        heading: "Business Central vs. QuickBooks: A Direct Comparison",
        body: "| Feature | QuickBooks | Business Central |\n|---|---|---|\n| Target size | 1–25 users | 10–500+ users |\n| Inventory management | Basic | Advanced, multi-location |\n| Manufacturing | Not available | Full production orders, BOM |\n| Multi-currency | Limited | Full support |\n| Project accounting | Not available | Full project management |\n| Power BI integration | Limited | Native integration |\n| Customization | Limited | Highly extensible |\n| Pricing | $30–$200/mo | From $70/user/mo |",
      },
      {
        heading: "The Migration Process",
        body: "Migrating from QuickBooks to Business Central is a well-trodden path. A typical migration involves:\n\n1. Extracting and cleaning your chart of accounts, customer/vendor master data, and open transactions from QuickBooks\n2. Mapping your data to Business Central's data structures\n3. Configuring Business Central to match your business processes\n4. Importing historical data (typically 1–3 years of transactions)\n5. Running parallel for 1–2 months to validate accuracy\n6. Training your team on the new system\n\nWith an experienced partner, a QuickBooks-to-Business Central migration typically takes 2–3 months.",
      },
      {
        heading: "Is the Investment Worth It?",
        body: "For businesses that have outgrown QuickBooks, the ROI of moving to Business Central is typically very strong. Clients commonly report:\n\n• 60–80% reduction in time spent on manual data entry and reconciliation\n• Month-end close time cut from 10+ days to 2–3 days\n• Real-time visibility into inventory, cash flow, and profitability\n• Elimination of 3–5 separate software tools replaced by one integrated platform\n\nIf you're spending more time working around your accounting software than with it, it's time to consider the move.",
      },
    ],
  },
  {
    id: 4,
    slug: "cloud-erp-vs-on-premise",
    title: "Cloud ERP vs. On-Premise ERP: Which Is Right for Your Business in 2026?",
    category: "Cloud ERP",
    categoryColor: "#059669",
    author: "Aicen Solutions Team",
    date: "January 15, 2026",
    readTime: "8 min read",
    excerpt:
      "The debate between cloud and on-premise ERP is largely settled — but the right answer still depends on your specific situation. We break down the key differences, costs, and considerations to help you make an informed decision.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    featured: false,
    content: [
      {
        heading: "The State of Cloud ERP in 2026",
        body: "The shift to cloud ERP has accelerated dramatically over the past five years. According to Gartner, over 70% of new ERP deployments are now cloud-based, and that number continues to rise. Microsoft's own data shows that Business Central Online (cloud) now accounts for over 85% of new Business Central deployments globally.",
      },
      {
        heading: "What Is Cloud ERP?",
        body: "Cloud ERP (also called SaaS ERP) is hosted and managed by the software vendor on their infrastructure. You access it via a web browser or app, pay a monthly subscription per user, and the vendor handles all maintenance, updates, and security. Microsoft Dynamics 365 Business Central Online is a prime example.",
      },
      {
        heading: "What Is On-Premise ERP?",
        body: "On-premise ERP is installed on your own servers, managed by your IT team, and typically involves a large upfront license fee plus annual maintenance costs. You control the infrastructure, customizations, and update schedule. Business Central is also available as an on-premise version (Business Central On-Premises), though Microsoft's investment is increasingly focused on the cloud version.",
      },
      {
        heading: "Cloud ERP: Pros and Cons",
        body: "**Advantages:**\n• No upfront infrastructure investment\n• Automatic updates — always on the latest version\n• Accessible from anywhere on any device\n• Scales easily as your business grows\n• Lower IT overhead\n• Built-in disaster recovery and security\n\n**Disadvantages:**\n• Ongoing subscription costs (higher long-term TCO for some scenarios)\n• Less control over customizations and update timing\n• Requires reliable internet connectivity\n• Data residency concerns for some regulated industries",
      },
      {
        heading: "On-Premise ERP: Pros and Cons",
        body: "**Advantages:**\n• Full control over data, customizations, and update schedule\n• Can be more cost-effective long-term for large deployments\n• Works without internet connectivity\n• Better suited for highly regulated industries with strict data sovereignty requirements\n\n**Disadvantages:**\n• High upfront costs (servers, licenses, implementation)\n• Requires dedicated IT resources for maintenance\n• Upgrades are expensive and disruptive\n• Harder to access remotely\n• Vendor investment increasingly focused on cloud versions",
      },
      {
        heading: "Our Recommendation",
        body: "For the vast majority of SMEs in 2026, cloud ERP is the right choice. The flexibility, lower upfront cost, automatic updates, and remote accessibility outweigh the disadvantages for most businesses. On-premise may still make sense for organizations with very specific data sovereignty requirements, highly customized legacy systems, or large user counts where subscription costs become prohibitive.\n\nIf you're unsure which deployment model is right for your business, our team can help you evaluate the options based on your specific requirements, industry, and budget.",
      },
    ],
  },
  {
    id: 5,
    slug: "business-central-finance-module",
    title: "A Deep Dive into Business Central's Finance Module: Features Every CFO Should Know",
    category: "Finance",
    categoryColor: "#EA580C",
    author: "Aicen Solutions Team",
    date: "January 5, 2026",
    readTime: "10 min read",
    excerpt:
      "Business Central's finance module is the heart of the platform. From multi-entity consolidation to automated bank reconciliation and real-time Power BI dashboards, here's everything finance leaders need to know about what it can do.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    featured: false,
    content: [
      {
        heading: "Why Finance Is the Foundation",
        body: "In any ERP system, the finance module is the backbone. Every transaction — whether it's a purchase order, a sales invoice, a payroll run, or a production order — ultimately flows through the general ledger. Business Central's finance module is mature, comprehensive, and deeply integrated with the rest of the platform.",
      },
      {
        heading: "General Ledger and Chart of Accounts",
        body: "Business Central's general ledger supports unlimited dimensions (cost centers, departments, projects, regions) that can be applied to any transaction. This allows for highly granular reporting without creating an unwieldy chart of accounts. The system supports multi-company, multi-currency, and multi-language operations natively.",
      },
      {
        heading: "Accounts Payable and Receivable",
        body: "The AP and AR modules in Business Central are tightly integrated with purchasing and sales. Key features include:\n\n• Automated payment suggestions based on due dates and discount terms\n• Vendor and customer aging reports\n• Automatic application of payments to invoices\n• Electronic bank payment file generation (SEPA, BACS, and others)\n• Credit limit management and overdue balance alerts",
      },
      {
        heading: "Bank Reconciliation and Cash Management",
        body: "One of the most time-saving features in Business Central is automated bank reconciliation. By connecting directly to your bank via bank feeds, Business Central automatically imports and matches bank transactions to posted ledger entries. What used to take days now takes minutes. Cash flow forecasting is also built in, giving finance teams visibility into projected cash positions.",
      },
      {
        heading: "Fixed Assets",
        body: "Business Central includes a full fixed assets module covering acquisition, depreciation (multiple methods supported), disposal, and insurance. Assets can be tracked across multiple depreciation books (e.g., one for tax purposes, one for IFRS), and depreciation runs can be automated on a schedule.",
      },
      {
        heading: "Financial Reporting and Power BI",
        body: "Business Central includes a built-in financial reporting tool (Account Schedules / Financial Reports) that allows finance teams to create custom P&L statements, balance sheets, and cash flow statements without IT involvement. For more advanced analytics, Business Central integrates natively with Power BI, enabling real-time dashboards that can be embedded directly in the Business Central interface.",
      },
      {
        heading: "Consolidation and Intercompany",
        body: "For businesses with multiple legal entities, Business Central supports full financial consolidation and intercompany transactions. Each company maintains its own books, and consolidation reports can be generated at group level. Intercompany transactions (e.g., sales between subsidiaries) can be automated to eliminate manual journal entries.",
      },
      {
        heading: "Closing the Books Faster",
        body: "Finance teams that implement Business Central properly consistently report dramatic reductions in their month-end close time — from an average of 10–15 days to 2–3 days. This is achieved through automation of recurring journals, automated bank reconciliation, real-time transaction visibility, and elimination of the manual data consolidation that plagues teams running on spreadsheets or disconnected systems.",
      },
    ],
  },
  {
    id: 6,
    slug: "erp-roi-how-to-measure",
    title: "How to Measure the ROI of Your ERP Investment",
    category: "Best Practices",
    categoryColor: "#0891B2",
    author: "Aicen Solutions Team",
    date: "December 20, 2025",
    readTime: "7 min read",
    excerpt:
      "Justifying an ERP investment to the board requires more than a gut feeling. Here's a practical framework for calculating the ROI of Business Central — including the metrics that matter most and how to track them.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    featured: false,
    content: [
      {
        heading: "Why ROI Measurement Matters",
        body: "An ERP implementation is a significant investment — typically ranging from $50,000 to $500,000+ depending on company size and scope. To justify this investment to stakeholders and to ensure you're getting value from the system post-go-live, you need a clear framework for measuring ROI.",
      },
      {
        heading: "Step 1: Establish a Baseline Before Go-Live",
        body: "You can't measure improvement without knowing where you started. Before your ERP goes live, document your current performance on key metrics:\n\n• Time to close the books (days)\n• Inventory accuracy rate (%)\n• Order processing time (hours)\n• Invoice processing cost per invoice\n• Number of FTEs dedicated to manual data entry\n• Reporting preparation time (hours per report)",
      },
      {
        heading: "Step 2: Identify Your Value Drivers",
        body: "ERP ROI comes from multiple sources. The most common value drivers for Business Central implementations include:\n\n**Hard savings (quantifiable):**\n• Reduced headcount or redeployment of staff from manual tasks\n• Lower IT infrastructure and maintenance costs\n• Reduced inventory carrying costs from better stock management\n• Fewer errors and associated correction costs\n\n**Soft savings (harder to quantify but real):**\n• Faster decision-making from real-time data\n• Improved customer satisfaction from faster order processing\n• Reduced compliance risk\n• Better cash flow from faster invoicing and collections",
      },
      {
        heading: "Step 3: Calculate Your ROI",
        body: "The basic ROI formula is:\n\n**ROI = (Total Benefits - Total Costs) / Total Costs × 100**\n\nTotal costs should include: software licenses, implementation fees, training, internal staff time, and any hardware or infrastructure costs.\n\nTotal benefits should include: quantified hard savings over a 3-year period (the standard ERP ROI measurement horizon).\n\nA well-implemented Business Central project typically delivers ROI of 150–300% over three years, with payback periods of 12–24 months.",
      },
      {
        heading: "Step 4: Track KPIs Post Go-Live",
        body: "Set up a simple dashboard (Power BI works perfectly for this) to track your key metrics monthly for the first year post go-live. Compare against your baseline and report progress to leadership quarterly. This keeps the focus on value realization and helps identify areas where further optimization is needed.",
      },
      {
        heading: "Real-World ROI Examples",
        body: "From our client implementations, here are typical ROI outcomes:\n\n• **Month-end close:** Average reduction from 12 days to 3 days = 75% improvement\n• **Inventory accuracy:** Average improvement from 82% to 97% = 15-point gain\n• **Invoice processing:** Average cost reduction from $12/invoice to $3/invoice = 75% savings\n• **Reporting time:** Average reduction from 8 hours/report to 30 minutes = 94% time saving\n\nThese improvements compound over time, making the ROI of a well-implemented ERP system one of the strongest in enterprise technology.",
      },
    ],
  },
];

function BlogCard({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ background: post.categoryColor, fontFamily: "'DM Sans', sans-serif" }}
        >
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-[#94A3B8] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
        </div>
        <h3 className="text-[#0D1B2A] font-extrabold text-base leading-snug mb-3 group-hover:text-[#0078D4] transition-colors line-clamp-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {post.title}
        </h3>
        <p className="text-[#64748B] text-sm leading-relaxed line-clamp-3 flex-1"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-[#0078D4] group-hover:gap-2 transition-all"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Read Article <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

function PostDetail({ post, onBack }: { post: typeof posts[0]; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-0">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                style={{ background: post.categoryColor, fontFamily: "'DM Sans', sans-serif" }}
              >
                {post.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Meta & Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Back + Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-gray-100">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#0078D4] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>
            <div className="flex items-center gap-4 text-sm text-[#94A3B8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-[#475569] text-lg leading-relaxed mb-10 font-medium border-l-4 pl-5"
            style={{ borderColor: post.categoryColor, fontFamily: "'DM Sans', sans-serif" }}>
            {post.excerpt}
          </p>

          {/* Article Body */}
          <div className="space-y-10">
            {post.content.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D1B2A] mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {section.heading}
                </h2>
                <div className="text-[#475569] leading-relaxed space-y-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} className="text-base">
                      {para.split("\n").map((line, k) => (
                        <span key={k}>
                          {line.startsWith("•") ? (
                            <span className="flex items-start gap-2 my-1">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: post.categoryColor }} />
                              <span>{line.slice(2)}</span>
                            </span>
                          ) : line.startsWith("**") && line.endsWith("**") ? (
                            <strong className="text-[#0D1B2A]">{line.slice(2, -2)}</strong>
                          ) : (
                            <span>{line}</span>
                          )}
                          {k < para.split("\n").length - 1 && !line.startsWith("•") && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-gradient-to-r from-[#0D1B2A] to-[#0A2540] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/60 text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Talk to our Business Central experts for a free consultation tailored to your business.
            </p>
            <Link href="/contact">
              <Button
                className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] text-white font-semibold px-6 rounded-lg shadow-lg hover:scale-105 transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts.find((p) => p.featured);

  if (selectedPost) {
    return <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

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
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 max-w-3xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              The Aicen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] to-[#00B4D8]">
                Knowledge Hub
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Expert articles on Microsoft Business Central, ERP implementation, and digital transformation — written by our certified consultants.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-lg"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#00B4D8]/60 focus:bg-white/15 transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && !searchQuery && activeCategory === "All" && (
        <section className="py-12 bg-[#F8FAFC] border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-[#0078D4]" />
              <span className="text-[#0078D4] font-semibold text-sm uppercase tracking-wider"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Featured Article
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPost(featured)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 w-fit"
                    style={{ background: featured.categoryColor, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {featured.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1B2A] mb-4 group-hover:text-[#0078D4] transition-colors leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {featured.title}
                  </h2>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#94A3B8] mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0078D4] group-hover:gap-3 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            <Tag className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-[#0078D4] text-white shadow-md shadow-blue-500/20"
                    : "bg-gray-100 text-[#64748B] hover:bg-gray-200"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {filtered.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filtered.map((post, i) => (
                  <div key={post.id} onClick={() => setSelectedPost(post)}>
                    <BlogCard post={post} index={i} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#64748B] text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                No articles found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0D1B2A] to-[#0A2540]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Stay Informed
            </span>
            <h2 className="text-3xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Have Questions About Business Central?
            </h2>
            <p className="text-white/60 text-base mb-8 max-w-xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our certified consultants are ready to answer your questions and help you explore how Business Central can work for your business.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0078D4] to-[#00B4D8] text-white font-semibold px-8 rounded-lg shadow-xl shadow-blue-500/30 transition-all hover:scale-105"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
