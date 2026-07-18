import WhyChooseUsCards from "./WhyChooseUsCards";

import {
  MonitorSmartphone,
  Users,
  Workflow,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B0B0F] py-28"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <span className="mb-6 block text-center text-sm font-semibold uppercase tracking-[0.5em] text-blue-400">
          WHY CHOOSE GOCOMMERCIALLY
        </span>

        <h2
          className="text-center text-4xl font-bold leading-tight md:text-6xl"
          style={{
            background:
              "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Everything You Need
          <br />
          To Grow Your Business
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400">
          GoCommercially combines powerful marketing technology,
          experienced professionals, proven processes, and continuous
          auditing to deliver measurable business growth.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-4xl font-bold text-white">1000+</h3>
            <p className="mt-2 text-gray-400">
              Businesses Served
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">15+</h3>
            <p className="mt-2 text-gray-400">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">300+</h3>
            <p className="mt-2 text-gray-400">
              Experts
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">98%</h3>
            <p className="mt-2 text-gray-400">
              Client Satisfaction
            </p>
          </div>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          <WhyChooseUsCards
            icon={<MonitorSmartphone size={34} color="#38bdf8" />}
            title="Platform"
            description="Access powerful marketing software, automation tools, CRM, SEO, analytics and everything your business needs."
          />

          <WhyChooseUsCards
            icon={<Users size={34} color="#8b5cf6" />}
            title="Professionals"
            description="Dedicated marketing, design and technology experts working as an extension of your team."
          />

          <WhyChooseUsCards
            icon={<Workflow size={34} color="#ec4899" />}
            title="Process"
            description="Battle-tested workflows that ensure consistency, faster delivery and maximum ROI."
          />

          <WhyChooseUsCards
            icon={<ShieldCheck size={34} color="#22c55e" />}
            title="Audit"
            description="Every campaign and every task is reviewed to maintain quality, transparency and measurable results."
          />

          <WhyChooseUsCards
            icon={<TrendingUp size={34} color="#f59e0b" />}
            title="Growth"
            description="Scale faster with continuous optimization, better conversions and predictable business growth."
          />

        </div>

      </div>
    </section>
  );
}