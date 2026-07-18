"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="sticky top-0  flex min-h-screen items-center bg-[#F4F8FC] pt-10"
    >

       {/* Background Blur */}
  <div className="absolute left-[-150px] top-20 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[120px]" />

  <div className="absolute right-[-150px] bottom-10 -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700"
          >
             Business Growth Platform
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold leading-tight md:text-7xl"
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
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-8 max-w-xl text-xl leading-9 text-slate-600"
          >
            GoCommercially combines powerful marketing tools,
            experienced professionals, and proven growth strategies
            to help businesses generate more leads, improve ROI,
            and scale faster.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .6 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <a href="#contact">
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
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  <span className="relative z-10">
    Get Started
  </span>
</motion.button>
</a>

            <button className="rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-900
hover:text-white hover:cursor-pointer">
              Book a Demo
            </button>
          </motion.div>

          
          {/* Stats */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-10 flex flex-wrap gap-10"
>
  <div>
    <h3 className="text-3xl font-bold text-slate-900">
      <CountUp end={1000} duration={2.5} separator="," />+
    </h3>
    <p className="text-slate-500">
      Businesses Served
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-slate-900">
      <CountUp end={15} duration={2} />+
    </h3>
    <p className="text-slate-500">
      Years Experience
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-slate-900">
      <CountUp end={300} duration={2.2} />+
    </h3>
    <p className="text-slate-500">
      Experts
    </p>
  </div>
</motion.div>

        </div>

        {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>
  {/* Glow */}
  <div className="absolute -inset-6 rounded-[40px] bg-blue-500/10 blur-3xl"></div>

  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative"
  >
    <Image
      src="/images/bg/dashboard.jpeg"
      alt="Dashboard Preview"
      width={820}
      height={600}
      priority
      className="rounded-3xl border border-slate-200 shadow-2xl"
    />
  </motion.div>
</motion.div>

      </div>
    </section>
  );
}