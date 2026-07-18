"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 bg-background py-28"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-[35%] right-0 h-px bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500"></div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-[35%] h-px bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="mb-6 block text-sm font-medium uppercase tracking-[0.5em] text-secondary">
            CONTACT
          </span>

          <h2
            className="text-4xl font-bold leading-tight md:text-6xl"
            style={{
              background:
                "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Build
            <br />
            Something Amazing.
          </h2>

          <p className="mt-8 max-w-xl text-secondary leading-8">
           Whether you're launching a startup, scaling an existing product,
or building an AI-powered platform, we're here to transform your
ideas into exceptional digital experiences.
          </p>

          <div className="relative mt-12">

  <motion.div
    className="absolute inset-0 rounded-[36px] bg-sky-500/15 blur-[60px]"
    animate={{
      opacity: [0.2, 0.35, 0.2],
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_35px_100px_rgba(59,130,246,.18)]">
    <ContactForm />
  </div>

</div>

        </motion.div>

      {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>

  {/* Background Glow */}

  <motion.div
    className="absolute h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-[130px]"
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.2, 0.35, 0.2],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Floating Badge */}

  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-0 top-12 z-20 rounded-full border border-sky-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
  >
    🚀 Free Consultation
  </motion.div>

  {/* Floating Badge */}

  <motion.div
    animate={{
      y: [0, 10, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-0 top-40 z-20 rounded-full border border-violet-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
  >
    ⭐ Trusted by Businesses
  </motion.div>

  {/* Floating Badge */}

  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-10 left-16 z-20 rounded-full border border-pink-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
  >
    💬 24h Response
  </motion.div>

  {/* Illustration */}

  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 1.5, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/images/bg/girl.png"
      alt="Girl Illustration"
      width={520}
      height={520}
      priority
      className="relative z-10 object-contain"
    />
  </motion.div>

</motion.div>

      </div>
    </section>
  );
}