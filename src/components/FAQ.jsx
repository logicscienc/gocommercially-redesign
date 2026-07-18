"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most MVPs are delivered within 2–6 weeks depending on project scope, integrations and custom features.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We build with React, Next.js, Node.js, AI, PostgreSQL, AWS, Tailwind CSS and modern cloud infrastructure.",
  },
  {
    question: "Can you redesign an existing product?",
    answer:
      "Absolutely. We modernize outdated products with improved UI, better performance and scalable architecture.",
  },
  {
    question: "Do you build AI-powered applications?",
    answer:
      "Yes. We integrate OpenAI, automation, AI assistants, intelligent workflows and custom LLM solutions.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, monitoring, performance optimization and feature development.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply schedule a discovery call. We'll understand your goals and propose the best roadmap for your business.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0B0B0F] py-16">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Badge */}

        <motion.span
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-center text-sm font-semibold uppercase tracking-[0.45em] text-sky-400"
        >
          FAQ
        </motion.span>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-6 text-center text-5xl font-bold md:text-7xl"
          style={{
            background:
              "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Frequently Asked
          <br />
          Questions
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400"
        >
          Everything you need to know before starting your next
          project with us.
        </motion.p>

        <div className="mt-20 space-y-6">
  {faqs.map((faq, index) => {
    const isOpen = open === index;

    return (
      <motion.div
        key={faq.question}
        layout
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
        }}
        className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-sky-400/30 hover:bg-white/[0.07]"
      >
        {/* Question */}

        <button
          onClick={() => setOpen(isOpen ? -1 : index)}
          className="flex w-full items-center justify-between px-8 py-7 text-left"
        >
          <h3 className="pr-8 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-sky-300">
            {faq.question}
          </h3>

          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
             whileHover={{
    y: -6,
  }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_0_rgba(56,189,248,0)] transition-all duration-500 group-hover:border-sky-400/50 group-hover:shadow-[0_0_30px_rgba(56,189,248,.35)]"
          >
            {isOpen ? (
              <Minus className="h-5 w-5 text-sky-400" />
            ) : (
              <Plus className="h-5 w-5 text-gray-300" />
            )}
          </motion.div>
        </button>

        {/* Answer */}

        <motion.div
          layout
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <motion.p
            initial={{ y: 12 }}
            animate={{
              y: isOpen ? 0 : 12,
            }}
            transition={{
              duration: 0.3,
            }}
            className="px-8 pb-8 pr-20 leading-8 text-gray-400"
          >
            {faq.answer}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  })}
</div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-24 text-center"
>

  <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />

  <h3 className="mt-14 text-4xl font-bold text-white">
    Still Have Questions?
  </h3>

  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
    We'd love to discuss your project, answer your questions,
    and help you choose the right solution.
  </p>

  <motion.button
    whileHover={{
      scale: 1.05,
      y: -2,
    }}
    whileTap={{
      scale: 0.96,
    }}
    className="mt-10 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 px-10 py-4 font-semibold text-white shadow-[0_0_35px_rgba(56,189,248,.45)]"
  >
    Let's Talk →
  </motion.button>

</motion.div>

      </div>

    </section>
  );
}