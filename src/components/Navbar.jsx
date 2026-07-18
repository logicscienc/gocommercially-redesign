"use client";
import {useState} from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 h-20 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl  transition-all duration-300">
      
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Image
          src="/images/logos/logo.webp"
          alt="A Studio Logo"
          width={65}
          height={65}
          priority
           className="h-14 w-14 object-contain lg:h-16 lg:w-16"
        />
        
       {/* Right Section */}
        <div className="flex items-center gap-5 lg:gap-8 ">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
  href="#hero"
  className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-sky-600"
>
  Home
</a>

            

            <a href="#services"   className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-sky-600">
              Services
            </a>

            <a href="#process"   className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-sky-600">
              Process
            </a>

            <a href="#products"  className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-sky-600">
              Products
            </a>

            <a href="#reviews"  className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-sky-600">
              Reviews
            </a>

            <a href="#contact"  className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-sky-600">
              Contact
            </a>

          </nav>
<a href="#contact">
          <button className=" rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 px-6 py-2 font-semibold text-white shadow-[0_0_35px_rgba(56,189,248,.45)] hover:cursor-pointer transition-all furation-300">
  Get Started
</button>
</a>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}  className="flex items-center justify-center text-2xl text-zinc-700 hover:text-sky-600 md:hidden">
    {isMenuOpen ? <FiX /> : <FiMenu />}
  </button>
        </div>
      </div>

      {isMenuOpen && (
  <div className="fixed inset-0 top-20 z-40 flex flex-col items-center justify-center gap-8 bg-[rgba(18,24,38,0.92)] backdrop-blur-3xl  md:hidden mt-26">
    <a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-zinc-700 transition-all duration-300 hover:scale-105 hover:text-sky-400">Home</a>
    
    <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-zinc-700 transition-all duration-300 hover:scale-105 hover:text-sky-400">Services</a>
    <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-zinc-700 transition-all duration-300 hover:scale-105 hover:text-sky-400">Process</a>
    <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-zinc-700 transition-all duration-300 hover:scale-105 hover:text-sky-400">Products</a>
    <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-zinc-700 transition-all duration-300 hover:scale-105 hover:text-sky-400">Reviews</a>
    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-zinc-700 transition-all duration-300 hover:scale-105 hover:text-sky-400">Contact</a>
  </div>
)}
    </header>
  );
}  
