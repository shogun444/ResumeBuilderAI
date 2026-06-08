'use client';

import { SquarePen } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  const content = {
    features: ['Features', 'Pricing', 'Testimonials', 'FAQ']
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-[#e5e5e7] dark:border-neutral-800/80 transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-2.5">
        {/* Logo Section */}
        <Link href="/">
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <SquarePen size={20} className="text-[#1d1d1f] dark:text-[#f5f5f7]" />
            <span className="font-display font-bold text-lg tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              AIResumeBuilder
            </span>
          </motion.div>
        </Link>
       
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {content.features.map((item, index) => (
            <motion.a
              whileTap={{ scale: 0.98 }}
              href={`#${item.toLowerCase()}`}
              key={index}
              className="font-sans text-sm font-medium text-[#6e6e73] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
            >
              {item}
            </motion.a>
          ))}
        </nav>
 
        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/resume">
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="font-sans text-sm font-medium text-[#6e6e73] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-200"
            >
              Login
            </motion.button>
          </Link>
          <Link href="/resume">
            <motion.button 
              whileTap={{ scale: 0.97 }}
              className="font-sans text-sm font-semibold bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] px-4 py-1.5 rounded-full hover:bg-[#3a3a3c] dark:hover:bg-[#e5e5e7] shadow-sm transition-all duration-200"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
}