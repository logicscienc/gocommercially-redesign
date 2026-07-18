"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Microsoft",
    image: "/images/testimonials/sarah.jpg",
    logo: "/images/logos/microsoft.png",
    review:
      "GoCommercially completely transformed our sales workflow. The platform is beautifully designed, incredibly fast, and helped our team become more productive from day one.",
  },

  {
    id: 2,
    name: "Emily Carter",
    role: "Marketing Director",
    company: "Shopify",
    image: "/images/testimonials/emily.jpg",
    logo: "/images/logos/Shopify.jpg",
    review:
      "Working with this team was effortless. Every interaction felt professional and the final product exceeded every expectation we had for our business.",
  },

  {
    id: 3,
    name: "Alex Morgan",
    role: "Founder",
    company: "Stripe",
    image: "/images/testimonials/Alex.jpg",
    logo: "/images/logos/Stripe.png",
    review:
      "The attention to detail, animations, performance and user experience are simply outstanding. Our customers immediately noticed the difference.",
  },

  {
    id: 4,
    name: "Nova Wilson",
    role: "Product Manager",
    company: "Notion",
    image: "/images/testimonials/Nova.jpg",
    logo: "/images/logos/notion.webp",
    review:
      "Exactly what modern SaaS development should look like. Fast delivery, excellent communication and a premium product from start to finish.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Slide
  useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, 5000);

  return () => clearInterval(interval);
}, [isPaused]);

  const current = testimonials[active];

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 60,
      scale: 0.96,
    },

    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    exit: {
      opacity: 0,
      y: -40,
      scale: 0.96,
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#0B0B0F] py-36">

      {/* Left Glow */}

      <motion.div
        className="absolute left-0 top-24 h-96 w-96 rounded-full bg-sky-500/10 blur-[160px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Right Glow */}

      <motion.div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[160px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.25, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-400">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Loved by Modern Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Trusted by startups, growing companies and enterprise teams
            building exceptional digital products.
          </p>
        </motion.div>

        {/* Part 2 starts here */}

        <AnimatePresence mode="wait">
  <motion.div
    key={current.id}
    variants={cardVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="relative mx-auto mt-20 max-w-5xl"
     onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  >
    {/* Animated Glow */}

    <motion.div
      className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-sky-500/20 via-violet-500/20 to-pink-500/20 blur-[90px]"
      animate={{
        opacity: [0.25, 0.45, 0.25],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Glass Card */}

    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl">

      {/* Top Gradient */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70" />

      <div className="grid items-center gap-12 p-10 lg:grid-cols-[260px_1fr]">

        {/* Left */}

        <div className="flex flex-col items-center">

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-sky-500/30 blur-2xl" />

            <Image
              src={current.image}
              alt={current.name}
              width={180}
              height={180}
              className="relative h-44 w-44 rounded-full border-4 border-white/10 object-cover"
            />
          </motion.div>

          {/* Company Logo */}

          <motion.div
            whileHover={{
              scale: 1.08,
            }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <Image
              src={current.logo}
              alt={current.company}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </motion.div>

        </div>

        {/* Right */}

        <div>

          <Quote
            size={44}
            className="mb-6 text-sky-400"
          />

          {/* Stars */}

          <div className="mb-6 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: i * 0.08,
                }}
              >
                <Star
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              </motion.div>
            ))}
          </div>

          {/* Review */}

          <motion.p
            key={current.review}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="text-xl leading-9 text-gray-300"
          >
            "{current.review}"
          </motion.p>

          {/* User */}

          <motion.div
            key={current.name}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
            }}
            className="mt-10"
          >
            <h3 className="text-2xl font-bold text-white">
              {current.name}
            </h3>

            <p className="mt-2 text-gray-400">
              {current.role} •{" "}
              <span className="text-sky-400">
                {current.company}
              </span>
            </p>
          </motion.div>

        </div>

      </div>

    </div>

  </motion.div>
</AnimatePresence>

{/* Avatar Navigation */}

<motion.div
  className="mt-16 flex flex-wrap items-center justify-center gap-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  {testimonials.map((person, index) => (
    <motion.button
      key={person.id}
      onClick={() => setActive(index)}
      whileHover={{
        y: -8,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`relative transition-all duration-500 ${
        active === index ? "scale-110" : "opacity-60 hover:opacity-100"
      }`}
    >
      {/* Active Glow */}

      {active === index && (
        <motion.div
          layoutId="avatarGlow"
          className="absolute inset-0 rounded-full bg-sky-500/30 blur-xl"
        />
      )}

      <Image
        src={person.image}
        alt={person.name}
        width={72}
        height={72}
        className={`relative rounded-full border-2 object-cover transition-all duration-500 ${
          active === index
            ? "border-sky-400"
            : "border-white/10"
        }`}
      />

      <motion.p
        animate={{
          opacity: active === index ? 1 : 0,
          y: active === index ? 0 : 8,
        }}
        transition={{
          duration: 0.3,
        }}
        className="absolute left-1/2 mt-3 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-sky-300"
      >
        {person.name}
      </motion.p>
    </motion.button>
  ))}
</motion.div>

{/* Progress Bar */}

<div className="mx-auto mt-16 h-[3px] w-72 overflow-hidden rounded-full bg-white/10">
  <motion.div
    key={active}
    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{
      duration: 5,
      ease: "linear",
    }}
  />
</div>

      </div>

    </section>
  );
}