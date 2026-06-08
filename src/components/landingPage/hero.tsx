'use client';

import { 
  ArrowRight, 
  Play, 
  FileText, 
  LayoutDashboard, 
  FileCheck, 
  BarChart3, 
  Target, 
  Settings, 
  Crown,
  Mail,
  Phone,
  MapPin,
  Pencil,
  ChevronRight,
  Star,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 flex flex-col items-center justify-center min-h-[90vh] bg-[#f5f5f7] dark:bg-neutral-950 transition-colors duration-300">
      
      {/* Background Grid Pattern (Extremely subtle and neutral) */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col gap-16">
        {/* Main Grid: Left Column Text, Right Column Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column (Apple editorial copy style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 flex flex-col items-start text-left gap-6"
          >
            {/* Editorial Header */}
            <h1 className="font-display font-extrabold text-[40px] sm:text-[52px] lg:text-[58px] tracking-tight leading-[1.08] text-[#1d1d1f] dark:text-[#f5f5f7]">
              Build a resume <br />
              <span className="text-[#6e6e73] dark:text-neutral-400">
                that gets you hired.
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-sans text-sm sm:text-base text-[#6e6e73] dark:text-neutral-400 max-w-md leading-[1.45]">
              Create ATS-friendly resumes, get AI-powered suggestions, and land more interviews with confidence.
            </p>

            {/* Action Buttons (Strict Design System Pill Buttons) */}
            <div className="flex flex-row items-center gap-4 mt-2">
              <Link href="/resume">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="font-sans text-sm font-semibold bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] px-6 py-2.5 rounded-full hover:opacity-95 shadow-sm flex items-center gap-2 transition-all duration-200"
                >
                  <span>Build My Resume</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>

              <button className="flex items-center gap-2 font-sans text-sm font-semibold bg-transparent border border-[#d2d2d7] dark:border-neutral-700 text-[#1d1d1f] dark:text-[#f5f5f7] px-6 py-2.5 rounded-full hover:bg-neutral-800/5 dark:hover:bg-white/5 transition-all duration-200 group">
                <span>See How It Works</span>
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: New Desktop Dashboard Mockup Layout (Matches screenshot 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 relative flex justify-center lg:justify-end mt-8 lg:mt-0 px-1"
          >
            {/* The Main Application Mockup Container */}
            <div className="w-full max-w-[650px] aspect-[16/11] rounded-[24px] border border-[#e5e5e7] dark:border-neutral-850 bg-white dark:bg-[#161617] shadow-md flex overflow-hidden select-none relative z-10">
              
              {/* 1. Sidebar Panel (Dark Surface #1d1d1f) */}
              <div className="w-[22%] bg-[#1d1d1f] dark:bg-[#121213] text-neutral-300 p-3 flex flex-col justify-between border-r border-neutral-800">
                <div className="flex flex-col gap-4">
                  {/* Brand Section */}
                  <div className="flex items-center gap-1.5 px-2 py-1">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    <span className="text-[9px] font-extrabold tracking-wider text-white uppercase font-sans">Resume AI</span>
                  </div>
                  {/* Navigation Links */}
                  <div className="flex flex-col gap-1">
                    {[
                      { name: 'Dashboard', icon: LayoutDashboard, active: true },
                      { name: 'Resumes', icon: FileText, active: false },
                      { name: 'Cover Letters', icon: FileCheck, active: false },
                      { name: 'Analytics', icon: BarChart3, active: false },
                      { name: 'Job Tracker', icon: Target, active: false },
                      { name: 'Settings', icon: Settings, active: false },
                    ].map((nav, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                          nav.active
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
                        }`}
                      >
                        <nav.icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="text-[9px] sm:text-[10px] truncate font-sans">{nav.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Pro Upgrade indicator matching the screenshot */}
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between gap-1">
                  <div className="flex flex-col text-left gap-0.5">
                    <div className="flex items-center gap-1 text-amber-500 font-extrabold text-[8px] uppercase tracking-wide">
                      <Crown className="h-2.5 w-2.5 fill-current" />
                      <span>Upgrade to Pro</span>
                    </div>
                    <span className="text-[6.5px] text-neutral-400 leading-tight">Unlimited access to all features</span>
                  </div>
                  <div className="h-4.5 w-4.5 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 cursor-pointer hover:bg-white/25 transition-colors">
                    <ArrowRight className="h-2.5 w-2.5" />
                  </div>
                </div>
              </div>

              {/* 2. Resume Column (Middle Panel - White background) */}
              <div className="w-[48%] bg-white dark:bg-neutral-900 border-r border-[#e5e5e7] dark:border-neutral-800 p-4.5 flex flex-col gap-3.5 text-left overflow-hidden select-none font-sans">
                {/* Profile header */}
                <div className="flex flex-col gap-1 border-b border-neutral-100 dark:border-neutral-800 pb-3">
                  <span className="text-[8px] text-[#6e6e73] dark:text-neutral-400 font-medium">Welcome back,</span>
                  <h2 className="font-sans font-extrabold text-base text-neutral-900 dark:text-neutral-50 leading-tight">Darshil Patel</h2>
                  <p className="font-sans text-[9px] text-[#6e6e73] dark:text-neutral-400 font-semibold leading-none">Full Stack Developer</p>
                  
                  {/* Contact row with tiny icons */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[7px] text-[#86868b] font-medium mt-1">
                    <span className="flex items-center gap-0.5">
                      <Mail className="h-2 w-2 text-neutral-400" /> darshil@example.com
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-0.5">
                      <Phone className="h-2 w-2 text-neutral-400" /> +91 98765 43210
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin className="h-2 w-2 text-neutral-400" /> Bangalore, India
                    </span>
                  </div>
                </div>

                {/* Section 1: Professional Summary */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-sans font-bold text-[8px] text-[#1d1d1f] dark:text-[#f5f5f7] tracking-wider uppercase">Professional Summary</h3>
                    <Pencil className="h-2 w-2 text-neutral-400 cursor-pointer" />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-xs" />
                    <div className="h-1.5 w-[92%] bg-neutral-100 dark:bg-neutral-800 rounded-xs" />
                  </div>
                </div>

                {/* Section 2: Experience */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-sans font-bold text-[8px] text-[#1d1d1f] dark:text-[#f5f5f7] tracking-wider uppercase">Experience</h3>
                    <Pencil className="h-2 w-2 text-neutral-400 cursor-pointer" />
                  </div>
                  <div className="flex flex-col gap-1.5 mt-0.5">
                    {[
                      'h-1.5 w-[85%] bg-neutral-100 dark:bg-neutral-800',
                      'h-1.5 w-[92%] bg-neutral-100 dark:bg-neutral-800',
                      'h-1.5 w-[75%] bg-neutral-100 dark:bg-neutral-800',
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex gap-1.5 items-center">
                        <div className="w-1 h-1 rounded-full bg-neutral-350 shrink-0" />
                        <div className={`rounded-xs ${bullet}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Skills */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-sans font-bold text-[8px] text-[#1d1d1f] dark:text-[#f5f5f7] tracking-wider uppercase">Skills</h3>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'].map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[7px] font-semibold bg-white dark:bg-neutral-850 border border-[#e5e5e7] dark:border-neutral-800 px-2 py-0.5 rounded-full text-[#6e6e73] dark:text-neutral-300 leading-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Widgets Column (Right Panel - Clean light background) */}
              <div className="w-[30%] bg-[#fbfbfb] dark:bg-neutral-950 p-3.5 flex flex-col gap-3 text-left overflow-hidden select-none font-sans">
                
                {/* Widget 1: Score */}
                <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 flex items-center gap-2.5 shadow-2xs">
                  <div className="relative flex items-center justify-center h-10 w-10 shrink-0">
                    <svg className="absolute inset-0 -rotate-90" width="40" height="40" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e5e7" dark-stroke="#2d2d2d" strokeWidth="2.5" />
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#1d1d1f"
                        strokeWidth="2.5"
                        strokeDasharray="100.5"
                        strokeDashoffset="8" // ~92%
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-[10px] font-extrabold text-[#1d1d1f] dark:text-[#f5f5f7]">92</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[6.5px] font-bold text-neutral-400 uppercase tracking-wider leading-none">AI Resume Score</span>
                    <span className="text-[9px] font-extrabold text-[#1d1d1f] dark:text-[#f5f5f7] leading-none">Excellent</span>
                    <span className="text-[6px] text-neutral-400 leading-none mt-0.5">Highly optimized resume</span>
                  </div>
                </div>

                {/* Widget 2: Suggestions */}
                <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 flex flex-col gap-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-[7px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5">
                    <span>Suggestions</span>
                    <span className="text-[#6e6e73] font-semibold hover:underline cursor-pointer">View all</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {[
                      { icon: BarChart3, label: 'Add more metrics', sub: 'Improve impact' },
                      { icon: Star, label: 'Highlight key skills', sub: 'Boost relevance' },
                      { icon: Briefcase, label: 'Tailor for role', sub: 'Increase match rate' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-1.5 p-1 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                        <div className="flex items-center gap-1.5">
                          <div className="h-4.5 w-4.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center justify-center rounded shrink-0">
                            <item.icon className="h-2.5 w-2.5" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-[7.5px] font-bold text-neutral-800 dark:text-neutral-250 leading-none">{item.label}</span>
                            <span className="text-[6px] text-neutral-400 mt-0.5 leading-none">{item.sub}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-2 w-2 text-neutral-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Widget 3: ATS Match */}
                <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 flex flex-col gap-1.5 shadow-2xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[7px] font-bold text-neutral-400 uppercase tracking-wider">ATS Match</span>
                    <span className="text-[10px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">96%</span>
                  </div>
                  <div className="w-full h-1 bg-neutral-150 dark:bg-neutral-800 rounded-full overflow-hidden mt-0.5">
                    <div className="h-full w-[96%] bg-[#1d1d1f] dark:bg-[#f5f5f7] rounded-full" />
                  </div>
                  <p className="text-[6.5px] text-neutral-400 leading-tight">Highly likely to pass ATS scans.</p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}