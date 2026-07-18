"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const technologies = [
  {
    name: "React",
    logo: "/images/icons/react.svg",
  },
  {
    name: "Next.js",
    logo: "/images/icons/nextdotjs.svg",
  },
  {
    name: "Node.js",
    logo: "/images/icons/nodedotjs.svg",
  },
  {
    name: "PostgreSQL",
    logo: "/images/icons/postgresql.svg",
  },
  {
    name: "AWS",
    logo: "/images/icons/amazonaws.svg",
  },
  {
    name: "Google Cloud",
    logo: "/images/icons/googlecloud.svg",
  },
  {
    name: "Docker",
    logo: "/images/icons/docker.svg",
  },
  {
    name: "Android",
    logo: "/images/icons/android.svg",
  },
];
export default function Showcase() {
  return (
    <section id="products" className="relative overflow-hidden bg-[#0B0B0F] py-36">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
  className="text-center"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
          <span className="text-sm font-semibold uppercase tracking-[0.45em] text-sky-400">
            OUR PRODUCTS
          </span>

          <h2
            className="mt-6 text-5xl font-bold md:text-7xl"
            style={{
              background:
                "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Built For Every
            <br />
            Modern Business
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Powerful platforms crafted for different industries—designed with
            speed, automation and intelligent workflows at their core.
          </p>
        </motion.div>

        {/* Dashboard Stack */}

        <motion.div
  className="relative mt-28 h-[760px] [perspective:1800px]"
  initial={{ opacity: 0, scale: 0.92 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>

          {/* Left Card */}

        <motion.div
  className="absolute left-0 top-20 w-[34%]"
  initial={{
    opacity: 0,
    x: -120,
    rotate: -15,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    rotate: -8,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    delay: 0.2,
  }}
>
  <motion.div
    animate={{
      y: [0, -10, 0],
      scale: [1, 1.01, 1],
    }}
    transition={{
  duration: 1,
  delay: 0.45,
  ease: [0.22, 1, 0.36, 1],
  y: {
    duration: 5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
  scale: {
    duration: 5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
}}
    
    style={{ rotate: "-8deg" }}
  >
   <div className="relative">

  <motion.div
    className="absolute inset-0 -z-10 rounded-[40px] bg-sky-500/20 blur-[70px]"
    animate={{
      opacity: [0.25, 0.45, 0.25],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_45px_130px_rgba(59,130,246,.35)]">

    <Image

        src="/images/bg/crm.webp"

        alt="CRM Dashboard"

        width={1200}

        height={900}

        className="h-auto w-full"

      />

  </div>

</div>
  </motion.div>
</motion.div>

          

          {/* Center Card */}

<motion.div
  className="absolute left-1/2 top-0 z-20 w-[46%] -translate-x-1/2"
  initial={{
    opacity: 0,
    y: 120,
    scale: 0.82,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{ once: true }}
 
  animate={{
    y: [0, -14, 0],
    scale: [1, 1.015, 1],
  }}
  transition={{
  duration: 1,
  delay: 0.45,
  ease: [0.22, 1, 0.36, 1],
  y: {
    duration: 6,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
  scale: {
    duration: 6,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
}}
  whileHover={{
    y: -20,
    scale: 1.03,
  }}
  style={{
    rotate: "0deg",
  }}
>
  <div className="relative">

  <motion.div
    className="absolute inset-0 -z-10 rounded-[40px] bg-sky-500/20 blur-[70px]"
    animate={{
      opacity: [0.25, 0.45, 0.25],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_45px_130px_rgba(59,130,246,.35)]">

    <Image
      src="/images/bg/finance.webp"
      alt="Finance Dashboard"
      width={1400}
      height={1000}
      className="h-auto w-full"
    />

  </div>

</div>
</motion.div>

        

         {/* Right Card */}

<motion.div
  className="absolute right-0 top-20 w-[34%]"
  initial={{
    opacity: 0,
    x: 120,
    rotate: 15,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    rotate: 8,
  }}
  viewport={{ once: true }}
  transition={{
  duration: 1,
  delay: 0.45,
  ease: [0.22, 1, 0.36, 1],
  y: {
    duration: 5.5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
  scale: {
    duration: 5.5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
}}
  animate={{
    y: [0, -10, 0],
    scale: [1, 1.01, 1],
  }}
  whileHover={{
    y: -18,
    scale: 1.03,
    rotate: 5,
  }}
  style={{
    rotate: "8deg",
  }}
>
 <div className="relative">

  <motion.div
    className="absolute inset-0 -z-10 rounded-[40px] bg-sky-500/20 blur-[70px]"
    animate={{
      opacity: [0.25, 0.45, 0.25],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_45px_130px_rgba(59,130,246,.35)]">

       <Image

      src="/images/bg/fitness.png"

      alt="Fitness Dashboard"

      width={1200}

      height={900}

      className="h-auto w-full"

    />

  </div>

</div>
</motion.div>

        </motion.div>



        {/* ===================== TECH STACK ===================== */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>

  <motion.h3
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="text-center text-4xl font-bold text-white"
  >
    Built With Modern Technologies
  </motion.h3>

  <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
    Production-ready technologies powering scalable,
    secure and lightning-fast digital products.
  </p>

  <div className="mt-20 grid grid-cols-2 gap-7 md:grid-cols-4">

    {technologies.map((tech, index) => (

      <motion.div
        key={tech.name}
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: .5,
          delay: index * .08,
        }}
        whileHover={{
          y: -10,
        }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-sky-400/40 hover:bg-white/[0.06]"
      >

        {/* Glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Logo */}

        <div className="relative flex h-20 items-center justify-center">

          <Image
            src={tech.logo}
            alt={tech.name}
            width={68}
            height={68}
            className="transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
          />

        </div>

        {/* Name */}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-sky-500/15 to-transparent py-5 text-center transition-all duration-500 group-hover:translate-y-0">

          <p className="text-sm font-semibold tracking-wide text-white">
            {tech.name}
          </p>

        </div>

      </motion.div>

    ))}

  </div>

</motion.div>





      </div>
    </section>
  );
}