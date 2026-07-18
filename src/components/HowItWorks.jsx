"use client";

import { motion } from "framer-motion";
import { Search, Settings2, Users, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search size={28} />,
    title: "Business Discovery",
    description:
      "We understand your business goals, audience, challenges and growth opportunities.",
  },
  {
    number: "02",
    icon: <Settings2 size={28} />,
    title: "Choose Your Platform",
    description:
      "Select the right marketing tools and growth solutions tailored to your business.",
  },
  {
    number: "03",
    icon: <Users size={28} />,
    title: "Experts Get to Work",
    description:
      "Dedicated marketing, design and technology professionals execute your strategy.",
  },
  {
    number: "04",
    icon: <Rocket size={28} />,
    title: "Launch & Optimize",
    description:
      "Campaigns go live while our team continuously improves performance and ROI.",
  },
  {
    number: "05",
    icon: <TrendingUp size={28} />,
    title: "Measure & Scale",
    description:
      "Track every result, generate more leads and scale your business with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0B0B0F] py-32"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}

        <motion.span
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 block text-center text-sm font-semibold uppercase tracking-[0.5em] text-sky-400"
        >
          HOW IT WORKS
        </motion.span>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl font-bold leading-tight md:text-6xl"
          style={{
            background: "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          From Strategy
          <br />
          To Sustainable Growth
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400"
        >
          Our proven growth process combines technology, experienced
          professionals and continuous optimization to help businesses grow
          faster with measurable results.
        </motion.p>

        {/* Timeline */}

        <div className="relative mt-12">
          {/* Connecting Line *}

          {/* Steps */}

         <div className="relative hidden h-[800px] lg:block">

    <svg
  className="absolute inset-0 h-full w-full pointer-events-none"
  viewBox="0 0 1200 800"
  fill="none"
>

  {/* 1 → 2 */}
  <motion.path
    d="M140 460 C180 300 260 180 330 180"
    stroke="url(#gradient)"
    strokeWidth="4"
    strokeLinecap="round"
    fill="none"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: .8,
      delay: .2
    }}
  />

  {/* 2 → 3 */}

  <motion.path
    d="M390 180 C500 220 540 430 600 460"
    stroke="url(#gradient)"
    strokeWidth="4"
    strokeLinecap="round"
    fill="none"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: .8,
      delay: .8
    }}
  />

  {/* 3 → 4 */}

  <motion.path
    d="M660 460 C760 420 840 240 900 240"
    stroke="url(#gradient)"
    strokeWidth="4"
    strokeLinecap="round"
    fill="none"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: .8,
      delay: 1.4
    }}
  />

  {/* 4 → 5 */}

  <motion.path
    d="M960 240 C1040 260 1080 380 1120 460"
    stroke="url(#gradient)"
    strokeWidth="4"
    strokeLinecap="round"
    fill="none"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: .8,
      delay: 2
    }}
  />

  <defs>
    <linearGradient
      id="gradient"
      x1="0%"
      x2="100%"
      y1="0%"
      y2="0%"
    >
      <stop offset="0%" stopColor="#38bdf8"/>
      <stop offset="50%" stopColor="#8b5cf6"/>
      <stop offset="100%" stopColor="#ec4899"/>
    </linearGradient>
  </defs>

</svg>
  {steps.map((step, index) => {
    const positions = [
  "left-[4%] top-[420px]",
  "left-[20%] top-[120px]",
  "left-[42%] top-[420px]",
  "left-[68%] top-[180px]",
  "left-[86%] top-[420px]",
];

    return (
      <motion.div
        key={index}
        className={`absolute ${positions[index]}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
        }}
      >
       <div className="group relative flex w-64 flex-col items-center text-center">

          {/* Circle */}
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
            transition={{ duration: 0.3 }}
            className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#12131A] shadow-[0_0_60px_rgba(59,130,246,0.25)]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-pink-500/20 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <span className="absolute -top-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-2 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg">
              {step.number}
            </span>

            <motion.div
  animate={{
    y: [0, -6, 0],
  }}
  transition={{
    duration: 2.8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.2,
  }}
  className="relative z-10 text-white"
>
              {step.icon}
            </motion.div>
          </motion.div>

          {/* Title */}
          <h3 className="mt-8 text-2xl font-bold text-white transition group-hover:text-sky-400">
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-4 max-w-xs leading-7 text-gray-400">
            {step.description}
          </p>

        </div>
      </motion.div>
    );
  })}
</div>


{/* Desktop timeline ends */}

{/* Mobile & Tablet Timeline */}
<div className="mt-16 space-y-14 lg:hidden">

  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: .6,
        delay: index * .15,
      }}
      className="relative flex gap-6"
    >

      {/* Left Side */}
      <div className="relative flex flex-col items-center">

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#12131A] shadow-[0_0_35px_rgba(59,130,246,.25)]"
        >

          <span className="absolute -top-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-2 py-1 text-[10px] font-bold text-white">
            {step.number}
          </span>

          {step.icon}

        </motion.div>

        {index !== steps.length - 1 && (
          <div className="mt-2 h-24 w-[2px] bg-gradient-to-b from-sky-500 via-violet-500 to-pink-500" />
        )}

      </div>

      {/* Right Side */}

      <div className="pb-10">

        <h3 className="text-2xl font-bold text-white">
          {step.title}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {step.description}
        </p>

      </div>

    </motion.div>
  ))}

</div>

          {/* Bottom CTA */}
          <div className="mx-auto mb-20 h-px w-40 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative mt-10 py-24"
>
  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[140px]" />

  <div className="relative z-10 text-center">

    <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.4em] text-sky-400">
      READY TO GROW
    </span>

    <h2
      className="mt-8 text-5xl font-bold md:text-7xl"
      style={{
        background:
          "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Let's Build Your
      <br />
      Growth Engine
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
      Everything you need to grow your business—
      technology, marketing experts, proven strategies,
      and measurable results—all from one platform.
    </p>

    {/* Stats */}
    <div className="mt-14 flex flex-wrap justify-center gap-14">

      <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-md">
  <h3 className="text-4xl font-bold text-white">1000+</h3>
  <p className="mt-2 text-gray-400">Businesses Served</p>
</div>

      <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-md">
        <h3 className="text-4xl font-bold text-white">15+</h3>
        <p className="mt-2 text-gray-400">
          Years Experience
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-md">
        <h3 className="text-4xl font-bold text-white">300+</h3>
        <p className="mt-2 text-gray-400">
          Marketing Experts
        </p>
      </div>

    </div>

    {/* Buttons */}
    <div className="mt-14 flex flex-wrap justify-center gap-6">

      <motion.button
  whileHover={{
    scale: 1.05,
    y: -2,
  }}
  whileTap={{
    scale: 0.97,
  }}
  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 px-6 py-2 font-semibold text-white shadow-[0_0_35px_rgba(56,189,248,.35)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(56,189,248,.65)] hover:cursor-pointer"
>
  {/* Animated Shine */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full " />

  <span className="relative z-10">
    Book a Demo
  </span>
</motion.button>

      <button className="rounded-full border border-white/15 bg-white/5 px-9 py-4 text-lg font-semibold text-white backdrop-blur transition hover:border-sky-400 hover:bg-white/10 hover:cursor-pointer">
        Contact Sales
      </button>

    </div>

  </div>
</motion.section>
        </div>
      </div>
    </section>
  );
}
