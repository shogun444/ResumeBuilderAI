'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  Bell, 
  Sparkles, 
  Plus, 
  Check, 
  BarChart3, 
  Bot, 
  Compass, 
  Briefcase, 
  FileText, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Maximize2, 
  TrendingUp, 
  Layers, 
  Sliders,
  ChevronRight,
  ChevronLeft,
  Wifi
} from "lucide-react";

export default function AppleScroll() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      tag: "RESUME SCORE",
      label: "Resume Score",
      icon: BarChart3,
      headline: "Know where you stand.",
      subtext: "Get an instant score based on ATS compatibility, content quality, and role alignment."
    },
    {
      id: 1,
      tag: "AI SUGGESTIONS",
      label: "AI Suggestions",
      icon: Sparkles,
      headline: "Refine your storytelling.",
      subtext: "Receive metric enhancements and style recommendations directly from the AI agent."
    },
    {
      id: 2,
      tag: "TEMPLATES",
      label: "Templates",
      icon: Layers,
      headline: "Design with clean templates.",
      subtext: "Select layout options designed for readability, clean spacing, and ATS compliance."
    },
    {
      id: 3,
      tag: "JOB TRACKER",
      label: "Job Tracker",
      icon: Sliders,
      headline: "Organize your search.",
      subtext: "Track sent job applications, review active stages, and view interview timelines."
    }
  ];

  const renderScreenContent = (index: number) => {
    // Top bar for simulated iPhone screen (Premium sleek look)
    const iPhoneHeader = (
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e5e7] dark:border-neutral-800 bg-white dark:bg-neutral-900 select-none">
        <div className="flex items-center gap-1.5 text-left">
          <div className="h-2 w-2 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7]" />
          <span className="font-display font-extrabold text-[10px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-none">Manuscript</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500" />
          <div className="h-4.5 w-4.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden flex items-center justify-center border border-[#e5e5e7] dark:border-neutral-700">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&h=40&q=80" 
              alt="Avatar" 
              className="h-full w-full object-cover" 
            />
          </div>
        </div>
      </div>
    );

    switch (index) {
      case 0: // Resume Score Screen
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans text-left">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-4 text-left overflow-y-auto scrollbar-none flex-1 text-neutral-800 dark:text-neutral-200">
              
              {/* Header Title */}
              <div className="text-center mt-1">
                <h4 className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Resume Score</h4>
              </div>

              {/* Centered Gauge */}
              <div className="flex flex-col items-center justify-center my-1">
                <div className="relative flex items-center justify-center h-20 w-20 shrink-0">
                  <svg className="absolute inset-0 -rotate-90" width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#e5e5e7" strokeWidth="4.5" />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="#1d1d1f"
                      strokeWidth="5"
                      strokeDasharray="213.6"
                      strokeDashoffset="17.1" // ~92%
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="flex flex-col items-center justify-center z-10">
                    <span className="font-display text-xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">92</span>
                    <span className="text-[7.5px] font-bold text-neutral-400 dark:text-neutral-505 uppercase tracking-tight -mt-0.5">Excellent</span>
                  </div>
                </div>
                <p className="text-[8.5px] text-neutral-500 dark:text-neutral-400 font-medium text-center mt-2 max-w-[150px] leading-tight">
                  Your resume is well-optimized and ready to apply.
                </p>
              </div>

              {/* Suggestions Section */}
              <div className="flex flex-col gap-2 mt-1">
                <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider">Top Suggestions</span>
                
                {[
                  { label: "Add more metrics", sub: "Quantify your impact" },
                  { label: "Highlight key skills", sub: "Improve relevance" },
                  { label: "Tailor for the role", sub: "Increase match rate" }
                ].map((sug, sI) => (
                  <div 
                    key={sI} 
                    className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 shadow-2xs flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-850/50 transition-colors"
                  >
                    <div className="flex flex-col text-left gap-0.5">
                      <span className="text-[9.5px] font-bold text-neutral-800 dark:text-neutral-200">{sug.label}</span>
                      <span className="text-[8px] text-[#86868b] dark:text-neutral-500">{sug.sub}</span>
                    </div>
                    <ChevronRight className="h-3 w-3 text-neutral-350 dark:text-neutral-500" />
                  </div>
                ))}
              </div>

              {/* ATS Match Slider */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-3 shadow-2xs mt-1 flex flex-col gap-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider">ATS Match</span>
                  <span className="text-[11px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">96%</span>
                </div>
                <div className="w-full h-1 bg-neutral-150 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full w-[96%] bg-[#1d1d1f] dark:bg-[#f5f5f7] rounded-full" />
                </div>
                <p className="text-[7.5px] text-[#86868b] dark:text-neutral-500 leading-tight">This resume is highly likely to pass ATS scans.</p>
              </div>

            </div>
          </div>
        );

      case 1: // AI Suggestions Screen
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans text-left">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-3.5 text-left overflow-y-auto scrollbar-none flex-1">
              <div className="flex items-center gap-1 text-[8px] font-bold text-neutral-500 dark:text-neutral-400 uppercase mt-1">
                <Sparkles className="h-2.5 w-2.5 text-[#1d1d1f] dark:text-[#f5f5f7]" />
                <span>AI Assistant Suggestions</span>
              </div>
              <h3 className="font-display font-semibold text-[13px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                Refine your professional storytelling.
              </h3>

              {/* White Card: Google Metric Update */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-2xl p-3.5 shadow-2xs flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-neutral-950 rounded flex items-center justify-center shrink-0 border border-neutral-850">
                    <span className="text-[8px] font-black text-white">G</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-neutral-800 dark:text-neutral-200 leading-none">Google Match Update</span>
                    <span className="text-[6.5px] text-neutral-400 mt-0.5">Google • 2m ago</span>
                  </div>
                </div>

                <p className="text-[9px] text-neutral-700 dark:text-neutral-300 font-medium leading-normal">
                  I noticed your experience lacks metrics. Would you like to add:
                </p>

                {/* Highlighted text block (Neutral light background) */}
                <div className="bg-neutral-50 dark:bg-neutral-850/60 border border-neutral-100 dark:border-neutral-800/40 rounded-lg p-2.5 text-[9px] text-[#1d1d1f] dark:text-neutral-350 italic font-semibold leading-normal">
                  "Improved latency by 25% by optimizing SQL queries"
                </div>

                {/* Actions button bar */}
                <div className="flex items-center gap-2 mt-0.5">
                  <button className="flex-1 bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] font-bold py-1.5 rounded-lg text-[9px] text-center shadow-xs transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-100">
                    Accept
                  </button>
                  <button className="flex-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-bold py-1.5 rounded-lg text-[9px] text-center transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    Discard
                  </button>
                </div>
              </div>

              {/* Second Card: Copy Enhancement */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-2xl p-3.5 shadow-2xs flex flex-col gap-1.5 opacity-60">
                <span className="text-[7.5px] font-bold text-neutral-500 dark:text-neutral-400 tracking-wider uppercase leading-none">
                  Copy Enhancement
                </span>
                <p className="text-[8px] text-[#86868b] dark:text-neutral-500">
                  Your summary sounds a bit passive. Try starting with:
                </p>
              </div>

            </div>
          </div>
        );

      case 2: // Templates / Live Editor Interface
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans text-left">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-3.5 text-left overflow-y-auto scrollbar-none flex-1">
              <div className="flex items-center gap-1 text-[8px] font-bold text-neutral-500 dark:text-neutral-400 uppercase mt-1">
                <Layers className="h-2.5 w-2.5 text-[#1d1d1f] dark:text-[#f5f5f7]" />
                <span>Live Editor</span>
              </div>
              <h3 className="font-display font-semibold text-[13px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                Design with pixel-perfect layouts.
              </h3>

              {/* Drag and Drop layers */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[7.5px] font-bold text-[#86868b] uppercase tracking-wider">Document Hierarchy</span>
                {[
                  { name: 'Contact & Header', type: 'Primary' },
                  { name: 'Professional Experience', type: 'Work' },
                  { name: 'Key Projects', type: 'Work' }
                ].map((sec, sI) => (
                  <div 
                    key={sI} 
                    className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl px-3 py-2 flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col gap-0.5 justify-center shrink-0">
                        <div className="h-0.5 w-2.5 bg-neutral-300 dark:bg-neutral-600 rounded-sm" />
                        <div className="h-0.5 w-2.5 bg-neutral-300 dark:bg-neutral-600 rounded-sm" />
                      </div>
                      <span className="text-[9px] font-semibold text-neutral-800 dark:text-neutral-200">{sec.name}</span>
                    </div>
                    <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 uppercase tracking-wide border border-neutral-200 dark:border-neutral-700">
                      {sec.type}
                    </span>
                  </div>
                ))}
              </div>

              {/* Live typing visual indicator */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 shadow-2xs mt-0.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-850 dark:bg-[#f5f5f7] animate-pulse" />
                  <span className="text-[7.5px] text-neutral-400 font-bold uppercase tracking-wider">Typing AI Enhancement...</span>
                </div>
                <p className="text-[8px] font-mono text-neutral-700 dark:text-neutral-300 mt-1.5 bg-neutral-50 dark:bg-neutral-950 p-2 rounded border border-[#e5e5e7] dark:border-neutral-800/50">
                  "Engineered web architecture with Next.js and Tailwind... |"
                </p>
              </div>

            </div>
          </div>
        );

      case 3: // Job Tracker Screen
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans text-left">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-3.5 text-left overflow-y-auto scrollbar-none flex-1">
              <div className="flex items-center gap-1 text-[8px] font-bold text-neutral-500 dark:text-neutral-400 uppercase mt-1">
                <Sliders className="h-2.5 w-2.5 text-[#1d1d1f] dark:text-[#f5f5f7]" />
                <span>Hiring Dashboard</span>
              </div>
              <h3 className="font-display font-semibold text-[13px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                Keep applications fully organized.
              </h3>

              {/* Application Progress cards */}
              <div className="flex flex-col gap-2">
                {[
                  { company: 'Meta', role: 'Product Designer', status: 'Interview Scheduled' },
                  { company: 'Google', role: 'UX Engineer', status: 'Offer Received' },
                  { company: 'Apple', role: 'Senior Designer', status: 'Applied' },
                ].map((app, aI) => (
                  <div 
                    key={aI} 
                    className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 shadow-2xs flex flex-col gap-1 text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9.5px] font-bold text-neutral-900 dark:text-neutral-50">{app.company}</span>
                      <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-450 border border-neutral-200/50 dark:border-neutral-700/50">
                        {app.status}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between mt-0.5">
                      <span className="text-[8px] text-[#6e6e73] dark:text-neutral-400 font-medium leading-none">{app.role}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simple Chart Bar representation */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 shadow-2xs flex items-center justify-between mt-0.5">
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[7.5px] text-neutral-400 font-bold uppercase tracking-wider">Interview Conversion</span>
                  <span className="text-xs font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">42.8%</span>
                </div>
                <div className="flex items-end gap-1.5 h-6">
                  <div className="w-1.5 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-xs" />
                  <div className="w-1.5 h-4.5 bg-neutral-300 dark:bg-neutral-700 rounded-xs" />
                  <div className="w-1.5 h-6 bg-[#1d1d1f] dark:bg-[#f5f5f7] rounded-xs" />
                </div>
              </div>

            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative w-full bg-[#f5f5f7] dark:bg-neutral-950/40 transition-colors duration-300 py-24 md:py-32 select-none">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col items-center gap-10">
        
        {/* Top Header Block */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-sans font-semibold text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            SMART TOOLS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] text-[#1d1d1f] dark:text-[#f5f5f7]">
            Tools that help you create better resumes.
          </h2>
          <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#6e6e73] dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mt-1">
            Everything you need to build, optimize, and track your resume—right where you need it.
          </p>
        </div>
        
        {/* Centered Phone Mockup */}
        <div className="flex items-center justify-center relative select-none w-full mt-4">
          {/* Sleek thin-bezel iPhone device frame */}
          <div className="relative w-[300px] h-[600px] rounded-[48px] border-[6px] border-neutral-950 dark:border-neutral-900 bg-neutral-950 shadow-2xl outline outline-[1px] outline-neutral-800/10 select-none z-10 flex flex-col overflow-hidden">
            
            {/* Display screen wrapper */}
            <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-[#f8fafc] dark:bg-neutral-950 flex flex-col pt-2.5">
              
              {/* Sleek iOS Status Bar with centered Dynamic Island */}
              <div className="relative w-full px-6 py-2 flex justify-between items-center text-[9px] font-bold text-neutral-800 dark:text-neutral-200 z-30 select-none font-sans h-6.5 shrink-0">
                {/* Time */}
                <span className="w-10 text-left leading-none mt-[0.5px]">9:41</span>
                
                {/* Centered Dynamic Island Pill */}
                <div className="w-22 h-5 bg-black rounded-full absolute left-1/2 -translate-x-1/2 flex items-center justify-end pr-3.5">
                  {/* Subtle camera dot with blue reflection */}
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 relative flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#1b3d6c]" />
                  </div>
                </div>
                
                {/* Right Indicators */}
                <div className="flex items-center justify-end gap-1.5 w-10 shrink-0">
                  {/* Signal Bars */}
                  <div className="flex items-end gap-[1px] h-2">
                    <div className="w-[1.5px] h-1.5 bg-neutral-800 dark:bg-neutral-200 rounded-[0.5px]" />
                    <div className="w-[1.5px] h-2 bg-neutral-800 dark:bg-neutral-200 rounded-[0.5px]" />
                    <div className="w-[1.5px] h-2.5 bg-neutral-800 dark:bg-neutral-200 rounded-[0.5px]" />
                  </div>
                  {/* Wifi Icon */}
                  <Wifi className="h-2.5 w-2.5 text-neutral-800 dark:text-neutral-200 shrink-0" />
                  {/* Battery Icon */}
                  <div className="relative w-4 h-2.25 border border-neutral-800 dark:border-neutral-200 rounded-[3px] p-[0.5px] flex items-center shrink-0">
                    <div className="h-full w-[75%] bg-neutral-800 dark:bg-neutral-200 rounded-[1.5px]" />
                    {/* Battery tip */}
                    <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1px] h-1 bg-neutral-800 dark:bg-neutral-200 rounded-r-[0.5px]" />
                  </div>
                </div>
              </div>

              {/* Display screen content */}
              <div className="relative w-full flex-1 overflow-hidden flex flex-col pt-1.5">
                <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(2px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.96, filter: "blur(2px)" }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full h-full flex flex-col bg-[#f8fafc] dark:bg-neutral-950 overflow-hidden"
                >
                  {renderScreenContent(activeTab)}
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </div>

        {/* Tab Switcher Button Bar */}
        <div className="bg-[#e5e5e7]/40 dark:bg-neutral-900/60 backdrop-blur-xl border border-[#e5e5e7] dark:border-neutral-800/80 p-1 rounded-[24px] flex flex-row gap-1 items-center w-full max-w-md md:max-w-lg mx-auto shadow-2xs select-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileTap={{ scale: 0.97 }}
                className={`flex-1 py-3.5 rounded-[18px] flex flex-col items-center gap-1.5 select-none transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] shadow-sm scale-100"
                    : "text-[#6e6e73] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:bg-white/40 dark:hover:bg-neutral-800/30"
                }`}
              >
                <tab.icon className="h-4.5 w-4.5" />
                <span className="text-[10px] font-semibold tracking-tight leading-none">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Tab Text Content block (centered text: label, title, description) */}
        <div className="flex flex-col items-center gap-2.5 text-center mt-2">
          <span className="font-sans font-semibold text-[10px] sm:text-xs uppercase tracking-wider text-[#86868b] dark:text-neutral-500">
            {tabs[activeTab].tag}
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            {tabs[activeTab].headline}
          </h3>
          <p className="font-sans font-normal text-sm sm:text-base text-[#6e6e73] dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
            {tabs[activeTab].subtext}
          </p>
        </div>

      </div>
    </section>
  );
}
