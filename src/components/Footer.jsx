"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Products", href: "#products" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "AI Solutions",
  "UI / UX Design",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090B]">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Top */}

        <div className="grid gap-16 lg:grid-cols-[1.3fr_.8fr_.8fr]">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold"
              style={{
                background:
                  "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PRISM
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Building premium digital products, AI-powered platforms,
              scalable SaaS applications and beautiful user experiences
              for ambitious businesses.
            </p>

            {/* Social */}

<div className="mt-10 flex gap-4">

  {[
    {
      icon: FaGithub,
      href: "#",
    },
    {
      icon: FaLinkedin,
      href: "#",
    },
    {
      icon: FaXTwitter,
      href: "#",
    },
    {
      icon: Mail,
      href: "mailto:hello@yourcompany.com",
    },
  ].map(({ icon: Icon, href }, index) => (
    <motion.a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -5,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-sky-400/40 hover:bg-white/10 hover:text-sky-400"
    >
      <Icon size={20} />
    </motion.a>
  ))}

</div>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .15 }}
          >
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-8 space-y-5">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-gray-400 transition hover:text-sky-400"
                >
                  {link.name}

                  <ArrowUpRight
                    size={16}
                    className="ml-2 opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </Link>
              ))}

            </div>
          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
          >
            <h3 className="text-xl font-semibold text-white">
              Services
            </h3>

            <div className="mt-8 space-y-5">

              {services.map((item) => (
                <p
                  key={item}
                  className="text-gray-400"
                >
                  {item}
                </p>
              ))}

            </div>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">

          <p className="text-sm text-gray-500">
            © 2026 PRISM. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-gray-500">

            <Link
              href="#"
              className="transition hover:text-sky-400"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition hover:text-sky-400"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="transition hover:text-sky-400"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}