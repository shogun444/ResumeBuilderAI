'use client';

import { useState } from "react";
import { 
  ArrowRight, 
  Play, 
  FileText, 
  LayoutDashboard, 
  FileCheck, 
  BarChart3,
  Target, 
  Settings as SettingsIcon, 
  Crown,
  Mail,
  Phone,
  MapPin,
  Pencil,
  ChevronRight,
  Star,
  Briefcase,
  Check,
  CheckCircle2,
  Sliders,
  Globe,
  Lock,
  User
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedTemplate, setSelectedTemplate] = useState("Modern Minimal");
  const [selectedLetter, setSelectedLetter] = useState("Software Engineer");

  const tabs = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Resumes', icon: FileText },
    { name: 'Cover Letters', icon: FileCheck },
    { name: 'Job Tracker', icon: Target },
    { name: 'Settings', icon: SettingsIcon },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 flex flex-col items-center justify-center min-h-[90vh] bg-[#f5f5f7] dark:bg-neutral-950 transition-colors duration-300">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col items-center gap-12 md:gap-16">
        
        {/* Top Text Content (Column Layout - Centered) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center text-center gap-6 max-w-3xl"
        >
          {/* Editorial Header */}
          <h1 className="font-display font-extrabold text-[40px] sm:text-[56px] lg:text-[64px] tracking-tight leading-[1.05] text-[#1d1d1f] dark:text-[#f5f5f7]">
            Build a resume <br />
            <span className="text-[#6e6e73] dark:text-neutral-400">
              that gets you hired.
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#6e6e73] dark:text-neutral-400 max-w-lg leading-[1.45]">
            Create ATS-friendly resumes, get AI-powered suggestions, and land more interviews with confidence.
          </p>

          {/* Action Buttons (Strict Design System Pill Buttons) */}
          <div className="flex flex-row items-center justify-center gap-4 mt-2">
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

        {/* Bottom Section: Centered Desktop Dashboard Mockup Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="w-full relative flex justify-center px-1"
        >
          {/* The Main Application Mockup Container */}
          <div className="w-full max-w-6xl aspect-[16/9.5] sm:aspect-[16/9.5] rounded-[24px] border border-[#e5e5e7] dark:border-neutral-850 bg-white dark:bg-[#161617] shadow-md flex overflow-hidden select-none relative z-10">
            
            {/* 1. Sidebar Panel (Dark Surface #1d1d1f - 20% width) */}
            <div className="w-[20%] bg-[#1d1d1f] dark:bg-[#121213] text-neutral-300 p-4 flex flex-col justify-between border-r border-neutral-800 select-none shrink-0">
              <div className="flex flex-col gap-5">
                {/* Brand Section */}
                <div className="flex items-center gap-1.5 px-2 py-1">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span className="text-[10px] font-extrabold tracking-wider text-white uppercase font-sans">Resume AI</span>
                </div>
                {/* Clickable Sidebar Tabs */}
                <div className="flex flex-col gap-1">
                  {tabs.map((nav, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(nav.name)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold w-full text-left transition-all duration-200 ${
                        activeTab === nav.name
                          ? 'bg-white/10 text-white shadow-sm'
                          : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
                      }`}
                    >
                      <nav.icon className="h-4 w-4 shrink-0" />
                      <span className="text-[10px] sm:text-xs truncate font-sans">{nav.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Pro Upgrade indicator */}
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between gap-1 select-none">
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

            {/* 2. DYNAMIC CONTENT WORKSPACE */}

            {/* TAB: DASHBOARD VIEW (Original Mockup) */}
            {activeTab === 'Dashboard' && (
              <>
                {/* Resume Column (Middle Panel - 50% width) */}
                <div className="w-[50%] bg-white dark:bg-neutral-900 border-r border-[#e5e5e7] dark:border-neutral-800 p-6 flex flex-col gap-4.5 text-left overflow-hidden select-none font-sans shrink-0">
                  <div className="flex flex-col gap-1.5 border-b border-neutral-100 dark:border-neutral-800 pb-4">
                    <span className="font-sans font-semibold text-[9px] uppercase tracking-wider text-[#86868b] dark:text-[#86868b] leading-none">Welcome back</span>
                    <h2 className="font-display font-bold text-base sm:text-lg text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight mt-0.5">Darshil Patel</h2>
                    <p className="font-sans text-xs text-[#6e6e73] dark:text-neutral-400 font-medium leading-none mt-0.5">Full Stack Developer</p>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[8.5px] text-[#86868b] font-medium mt-1.5">
                      <span className="flex items-center gap-1">
                        <Mail className="h-2.5 w-2.5 text-neutral-400" /> darshil@example.com
                      </span>
                      <span>|</span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-2.5 w-2.5 text-neutral-400" /> +91 98765 43210
                      </span>
                      <span>|</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-2.5 w-2.5 text-neutral-400" /> Bangalore, India
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-display font-semibold text-[12px] tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">Professional Summary</h3>
                      <Pencil className="h-2.5 w-2.5 text-neutral-400 cursor-pointer" />
                    </div>
                    <div className="flex flex-col gap-1 mt-0.5">
                      <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-xs" />
                      <div className="h-1.5 w-[94%] bg-neutral-100 dark:bg-neutral-800 rounded-xs" />
                      <div className="h-1.5 w-[80%] bg-neutral-100 dark:bg-neutral-800 rounded-xs" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="flex justify-between items-center">
                      <h3 className="font-display font-semibold text-[12px] tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">Experience</h3>
                      <Pencil className="h-2.5 w-2.5 text-neutral-400 cursor-pointer" />
                    </div>
                    <div className="flex flex-col gap-2 mt-0.5">
                      {[
                        'h-1.5 w-[88%] bg-neutral-100 dark:bg-neutral-800',
                        'h-1.5 w-[94%] bg-neutral-100 dark:bg-neutral-800',
                        'h-1.5 w-[78%] bg-neutral-100 dark:bg-neutral-800',
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
                          <div className={`rounded-xs ${bullet}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-semibold text-[12px] tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">Skills</h3>
                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'].map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] font-semibold bg-white dark:bg-neutral-850 border border-[#e5e5e7] dark:border-neutral-800 px-2.5 py-1 rounded-full text-[#6e6e73] dark:text-neutral-300 leading-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Widgets Column (Right Panel - 30% width) */}
                <div className="w-[30%] bg-[#fbfbfb] dark:bg-neutral-950 p-4.5 flex flex-col gap-3.5 text-left overflow-hidden select-none font-sans shrink-0">
                  <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-3 flex items-center gap-3.5 shadow-2xs">
                    <div className="relative flex items-center justify-center h-10 w-10 shrink-0">
                      <svg className="absolute inset-0 -rotate-90" width="40" height="40" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e5e7" strokeWidth="2.5" />
                        <circle
                          cx="20"
                          cy="20"
                          r="16"
                          fill="none"
                          stroke="#1d1d1f"
                          strokeWidth="2.5"
                          strokeDasharray="100.5"
                          strokeDashoffset="8"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-[10px] font-extrabold text-[#1d1d1f] dark:text-[#f5f5f7]">92</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-semibold text-[#6e6e73] dark:text-neutral-400 tracking-tight leading-none">AI Resume Score</span>
                      <span className="text-[13px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7] leading-none mt-0.5">Excellent</span>
                      <span className="text-[9.5px] text-[#86868b] dark:text-neutral-500 leading-none mt-0.5">Highly optimized resume</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-3 flex flex-col gap-2 shadow-2xs">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-display font-semibold text-[11px] text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">Suggestions</span>
                      <span className="text-[#6e6e73] dark:text-neutral-400 font-semibold text-[10px] hover:underline cursor-pointer">View all</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { icon: BarChart3, label: 'Add more metrics', sub: 'Improve impact' },
                        { icon: Star, label: 'Highlight key skills', sub: 'Boost relevance' },
                        { icon: Briefcase, label: 'Tailor for role', sub: 'Increase match rate' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-1.5 p-1.5 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                          <div className="flex items-center gap-2">
                            <div className="h-5 w-5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center justify-center rounded shrink-0">
                              <item.icon className="h-2.5 w-2.5" />
                            </div>
                            <div className="flex flex-col text-left">
                              <span className="text-[11px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] leading-none">{item.label}</span>
                              <span className="text-[9.5px] text-[#6e6e73] dark:text-neutral-450 mt-0.5 leading-none">{item.sub}</span>
                            </div>
                          </div>
                          <ChevronRight className="h-2.5 w-2.5 text-neutral-400 shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-3 flex flex-col gap-1.5 shadow-2xs">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[9.5px] font-semibold text-[#6e6e73] dark:text-neutral-450 tracking-tight">ATS Match</span>
                      <span className="text-[13px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">96%</span>
                    </div>
                    <div className="w-full h-1 bg-neutral-150 dark:bg-neutral-800 rounded-full overflow-hidden mt-0.5">
                      <div className="h-full w-[96%] bg-[#1d1d1f] dark:bg-[#f5f5f7] rounded-full" />
                    </div>
                    <p className="text-[9.5px] text-[#86868b] dark:text-neutral-500 leading-tight mt-1">Highly likely to pass ATS scans.</p>
                  </div>
                </div>
              </>
            )}

            {/* TAB: RESUMES VIEW (Template Previews) */}
            {activeTab === 'Resumes' && (
              <>
                {/* Resume Templates List (Middle Panel - 50% width) */}
                <div className="w-[50%] bg-white dark:bg-neutral-900 border-r border-[#e5e5e7] dark:border-neutral-800 p-6 flex flex-col gap-4 text-left overflow-y-auto font-sans shrink-0">
                  <div className="border-b border-neutral-100 dark:border-neutral-800 pb-3">
                    <h3 className="font-display font-bold text-base text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">Resume Templates</h3>
                    <p className="font-sans font-normal text-xs text-[#6e6e73] dark:text-neutral-400 mt-1">Select a standard template designed by recruiters.</p>
                  </div>
                  
                  {/* Grid of templates */}
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    {[
                      { name: "Modern Minimal", desc: "Clean left-column structure" },
                      { name: "Executive Standard", desc: "Classic HR-friendly layout" },
                      { name: "Technical CV", desc: "Optimized for engineering" },
                      { name: "Creative Highlight", desc: "Bold visual milestones" }
                    ].map((tpl) => (
                      <div 
                        key={tpl.name}
                        onClick={() => setSelectedTemplate(tpl.name)}
                        className={`border rounded-xl p-3 text-left cursor-pointer flex flex-col justify-between h-28 transition-all ${
                          selectedTemplate === tpl.name 
                            ? 'border-[#1d1d1f] bg-neutral-50/50 dark:border-[#f5f5f7] dark:bg-neutral-800/40 shadow-xs' 
                            : 'border-[#e5e5e7] dark:border-neutral-800 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/20'
                        }`}
                      >
                        {/* Schematic Resume blocks */}
                        <div className="flex flex-col gap-1.5">
                          <div className="h-1.5 w-12 bg-neutral-800 dark:bg-neutral-350 rounded-xs" />
                          <div className="flex gap-1">
                            {tpl.name === "Modern Minimal" ? (
                              <>
                                <div className="w-1.5 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-2xs" />
                                <div className="flex-1 flex flex-col gap-1">
                                  <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 rounded-3xs" />
                                  <div className="h-1 w-[80%] bg-neutral-200 dark:bg-neutral-600 rounded-3xs" />
                                </div>
                              </>
                            ) : (
                              <div className="flex-1 flex flex-col gap-1.5">
                                <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 rounded-3xs" />
                                <div className="h-1 w-[90%] bg-neutral-200 dark:bg-neutral-600 rounded-3xs" />
                                <div className="h-1 w-[70%] bg-neutral-200 dark:bg-neutral-600 rounded-3xs" />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col gap-0.5 mt-auto">
                          <span className="font-sans font-semibold text-[11px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-none">{tpl.name}</span>
                          <span className="font-sans font-normal text-[9.5px] text-[#6e6e73] dark:text-neutral-400 leading-none mt-0.5">{tpl.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Templates Configuration (Right Panel - 30% width) */}
                <div className="w-[30%] bg-[#fbfbfb] dark:bg-neutral-950 p-5 flex flex-col gap-4 text-left select-none font-sans shrink-0">
                  <div className="border-b border-[#e5e5e7] dark:border-neutral-800 pb-3">
                    <span className="font-sans font-medium text-[9px] text-[#86868b] dark:text-neutral-500 uppercase tracking-wider">Template Config</span>
                    <h4 className="font-display font-bold text-sm text-[#1d1d1f] dark:text-white leading-none mt-1">{selectedTemplate}</h4>
                  </div>
                  
                  <div className="flex flex-col gap-3.5">
                    {[
                      { label: "Font Family", val: "Inter / Manrope" },
                      { label: "Margins", val: "Compact (0.5 in)" },
                      { label: "Section Headings", val: "Uppercase bold" },
                      { label: "Accent Color", val: "Charcoal Dark (#1d1d1f)" }
                    ].map((opt, oI) => (
                      <div key={oI} className="flex flex-col gap-1">
                        <span className="font-sans font-medium text-[9px] text-[#86868b] dark:text-neutral-500 tracking-tight">{opt.label}</span>
                        <span className="font-sans font-semibold text-[11px] text-[#1d1d1f] dark:text-neutral-200 leading-none mt-0.5">{opt.val}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] py-1.5 rounded-full text-[8.5px] font-bold mt-auto hover:opacity-95 transition-colors shadow-xs">
                    Apply Design System
                  </button>
                </div>
              </>
            )}

            {/* TAB: COVER LETTERS VIEW (Template List) */}
            {activeTab === 'Cover Letters' && (
              <>
                {/* Cover Letters List (Middle Panel - 50% width) */}
                <div className="w-[50%] bg-white dark:bg-neutral-900 border-r border-[#e5e5e7] dark:border-neutral-800 p-6 flex flex-col gap-4 text-left overflow-y-auto font-sans shrink-0">
                  <div className="border-b border-neutral-100 dark:border-neutral-800 pb-3">
                    <h3 className="font-display font-bold text-base text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">Cover Letters</h3>
                    <p className="font-sans font-normal text-xs text-[#6e6e73] dark:text-neutral-400 mt-1">Select a tailored cover letter template to edit.</p>
                  </div>

                  {/* List of letters */}
                  <div className="flex flex-col gap-2 mt-1">
                    {[
                      { name: "Software Engineer", company: "Google", desc: "Focuses on technical execution, latency reduction, and modern framework skills." },
                      { name: "Product Manager", company: "Stripe", desc: "Emphasizes cross-functional roadmap leadership and metrics-driven growth." },
                      { name: "UX Designer", company: "Figma", desc: "Highlights user research protocols, visual polish, and design tooling standards." }
                    ].map((letter) => (
                      <div
                        key={letter.name}
                        onClick={() => setSelectedLetter(letter.name)}
                        className={`border rounded-xl p-3 cursor-pointer text-left transition-all ${
                          selectedLetter === letter.name 
                            ? 'border-[#1d1d1f] bg-neutral-50/50 dark:border-[#f5f5f7] dark:bg-neutral-800/40 shadow-xs' 
                            : 'border-[#e5e5e7] dark:border-neutral-800 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/20'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-sans font-semibold text-[12px] text-[#1d1d1f] dark:text-[#f5f5f7]">{letter.name}</span>
                          <span className="font-sans font-bold text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 uppercase tracking-wider">
                            {letter.company}
                          </span>
                        </div>
                        <p className="font-sans font-normal text-[10px] text-[#86868b] dark:text-neutral-400 mt-1 leading-relaxed">{letter.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cover Letter Editor / Preview (Right Panel - 30% width) */}
                <div className="w-[30%] bg-[#fbfbfb] dark:bg-neutral-950 p-5 flex flex-col gap-4 text-left select-none font-sans shrink-0">
                  <div className="border-b border-[#e5e5e7] dark:border-neutral-800 pb-3">
                    <span className="font-sans font-medium text-[9px] text-[#86868b] dark:text-neutral-500 tracking-tight">AI Letter Draft</span>
                    <h4 className="font-display font-bold text-sm text-[#1d1d1f] dark:text-white leading-none mt-1">{selectedLetter} Draft</h4>
                  </div>

                  <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800 rounded-lg p-3 text-[10px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans select-text max-h-[220px] overflow-y-auto">
                    <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-[10px]">Dear Hiring Team,</p>
                    <p className="mt-1">
                      {selectedLetter === "Software Engineer" && "I am writing to express my strong interest in the Software Engineer position. With a strong track record of engineering scalable backend structures and optimizing data models, I am confident in my capacity to add immediate value to Google's engineering organization."}
                      {selectedLetter === "Product Manager" && "I am excited to apply for the Product Manager role. Having led engineering teams to deploy structured features from initial discovery phases to launch, I align directly with Stripe's emphasis on user developer experience and API design standards."}
                      {selectedLetter === "UX Designer" && "I am writing to apply for the UX Designer position. My background is centered around user empathy protocols, design tokens, and rapid wireframing, allowing me to build robust interfaces that improve conversion and retain engagement."}
                    </p>
                  </div>

                  <button className="w-full bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] py-1.5 rounded-full text-[8.5px] font-bold hover:opacity-95 transition-colors shadow-xs">
                    Copy to Clipboard
                  </button>
                </div>
              </>
            )}

            {/* TAB: JOB TRACKER VIEW (Sent Jobs Database - 80% width) */}
            {activeTab === 'Job Tracker' && (
              <div className="w-[80%] bg-white dark:bg-neutral-900 p-6 flex flex-col gap-4 overflow-y-auto select-none font-sans">
                <div className="border-b border-neutral-100 dark:border-neutral-800 pb-3 flex flex-col text-left">
                  <h3 className="font-display font-bold text-base text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">Application Tracker</h3>
                  <p className="font-sans font-normal text-xs text-[#6e6e73] dark:text-neutral-400 mt-1">
                    Complete history of jobs this resume has been submitted to.
                  </p>
                </div>

                {/* Job applications list */}
                <div className="flex flex-col mt-1">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-2 text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider pb-2 border-b border-[#e5e5e7] dark:border-neutral-800 text-left px-2">
                    <span className="col-span-3">Company</span>
                    <span className="col-span-4">Position Title</span>
                    <span className="col-span-3">Date Applied</span>
                    <span className="col-span-2 text-right">Status</span>
                  </div>

                  {/* Table Rows */}
                  {[
                    { company: "Google", role: "Front End Engineer (L4)", date: "June 04, 2026", status: "Interview Scheduled", color: "purple" },
                    { company: "Meta", role: "Full Stack Developer", date: "June 02, 2026", status: "Offer Received", color: "emerald" },
                    { company: "Stripe", role: "React Developer", date: "May 28, 2026", status: "Application Sent", color: "blue" },
                    { company: "Amazon", role: "Software Engineer II", date: "May 25, 2026", status: "Interviewing", color: "indigo" },
                    { company: "Netflix", role: "UI Engineer", date: "May 20, 2026", status: "Applied", color: "neutral" },
                    { company: "Vercel", role: "Solutions Architect", date: "May 14, 2026", status: "Screening Scheduled", color: "blue" }
                  ].map((job, jIdx) => (
                    <div 
                      key={jIdx} 
                      className="grid grid-cols-12 gap-2 py-3.5 text-[11px] text-neutral-800 dark:text-neutral-255 border-b border-[#e5e5e7] dark:border-neutral-800 text-left items-center hover:bg-neutral-50 dark:hover:bg-neutral-800/20 px-2 transition-colors duration-200"
                    >
                      <span className="col-span-3 font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-800 shrink-0" />
                        {job.company}
                      </span>
                      <span className="col-span-4 font-semibold text-[#6e6e73] dark:text-neutral-400">{job.role}</span>
                      <span className="col-span-3 text-neutral-400 dark:text-neutral-500 font-medium">{job.date}</span>
                      
                      <span className="col-span-2 text-right">
                        <span className={`inline-block text-[8.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          job.color === 'purple' ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400' :
                          job.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400' :
                          job.color === 'blue' ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400' :
                          job.color === 'indigo' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400' :
                          'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-450'
                        }`}>
                          {job.status}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: SETTINGS VIEW (Account Settings - 80% width) */}
            {activeTab === 'Settings' && (
              <div className="w-[80%] bg-white dark:bg-neutral-900 p-6 flex flex-col gap-4 overflow-y-auto select-none font-sans">
                <div className="border-b border-neutral-100 dark:border-neutral-800 pb-3 flex flex-col text-left">
                  <h3 className="font-display font-bold text-base text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">Account Settings</h3>
                  <p className="font-sans font-normal text-xs text-[#6e6e73] dark:text-neutral-400 mt-1">
                    Manage default profiles, API configurations, and dashboard preferences.
                  </p>
                </div>

                <div className="flex flex-col gap-4 text-left mt-1">
                  
                  {/* Settings section 1 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-[#e5e5e7] dark:border-neutral-800 rounded-xl p-3 flex flex-col gap-2 bg-neutral-50/20">
                      <span className="font-sans font-semibold text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                        <User className="h-3 w-3" /> Profile Details
                      </span>
                      <div className="flex flex-col gap-1 text-[11px] text-neutral-800 dark:text-neutral-200 mt-1">
                        <span className="font-sans font-bold text-[12px] text-[#1d1d1f] dark:text-[#f5f5f7]">Darshil Patel</span>
                        <span className="font-sans font-normal text-[11px] text-[#6e6e73] dark:text-neutral-400">darshil@example.com</span>
                        <span className="font-sans font-medium text-[9.5px] text-neutral-400 dark:text-neutral-500 mt-1">Developer Account Type</span>
                      </div>
                    </div>

                    <div className="border border-[#e5e5e7] dark:border-neutral-800 rounded-xl p-3 flex flex-col gap-2 bg-neutral-50/20">
                      <span className="font-sans font-semibold text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                        <Sliders className="h-3 w-3" /> ATS Configurations
                      </span>
                      <div className="flex flex-col gap-1 text-[11px] text-neutral-800 dark:text-neutral-200 mt-1">
                        <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Target Industry: Software & Tech</span>
                        <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Default Format: Standard ATS PDF</span>
                        <span className="font-sans font-medium text-[9.5px] text-neutral-400 dark:text-neutral-500 mt-1">MFA Verification: Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Settings section 2 */}
                  <div className="border border-[#e5e5e7] dark:border-neutral-800 rounded-xl p-3 flex flex-col gap-2 bg-neutral-50/20">
                    <span className="font-sans font-semibold text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                      <Globe className="h-3 w-3" /> Integrations
                    </span>
                    <div className="flex items-center justify-between text-[11px] border-b border-neutral-100 dark:border-neutral-850 pb-2 mt-1">
                      <div className="flex flex-col">
                        <span className="font-sans font-semibold text-[11px] text-[#1d1d1f] dark:text-[#f5f5f7]">LinkedIn Profile Sync</span>
                        <span className="font-sans font-normal text-[9.5px] text-[#6e6e73] dark:text-neutral-450 mt-0.5">Updates templates with recent job updates</span>
                      </div>
                      <span className="font-sans font-bold text-[8.5px] text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">Connected</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <div className="flex flex-col">
                        <span className="font-sans font-semibold text-[11px] text-[#1d1d1f] dark:text-[#f5f5f7]">GitHub Profile Import</span>
                        <span className="font-sans font-normal text-[9.5px] text-[#6e6e73] dark:text-neutral-450 mt-0.5">Pulls repo milestones directly into project templates</span>
                      </div>
                      <span className="font-sans font-bold text-[8.5px] text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">Connected</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
}