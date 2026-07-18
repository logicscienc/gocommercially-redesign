"use client";

import { motion } from "framer-motion";

export default function WhyChooseUsCards({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]"
    >
      {/* Gradient Glow */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition duration-300 group-hover:scale-110 group-hover:border-blue-400/50">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-white transition duration-300 group-hover:text-blue-400">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-8 text-gray-400">
        {description}
      </p>

      {/* Bottom Line */}
      <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}