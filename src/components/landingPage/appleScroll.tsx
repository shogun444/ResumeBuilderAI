'use client';

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "motion/react";
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
  ChevronRight
} from "lucide-react";

const screens = [
  {
    tag: "ATS ANALYTICS",
    headline: "Know exactly how recruiters see your resume.",
    subtext: "Instant ATS analysis helps you identify weaknesses before you apply.",
  },
  {
    tag: "AI RECOMMENDATIONS",
    headline: "Get personalized AI recommendations.",
    subtext: "Improve impact, relevance, and interview potential with every revision.",
  },
  {
    tag: "RESUME EDITOR",
    headline: "Build professional resumes effortlessly.",
    subtext: "Create polished resumes in minutes with beautiful templates.",
  },
  {
    tag: "COVER LETTER GENERATOR",
    headline: "Generate tailored cover letters instantly.",
    subtext: "Customize applications for every role without starting from scratch.",
  },
  {
    tag: "CAREER TRACKING",
    headline: "Track your job search with confidence.",
    subtext: "Measure progress and stay organized throughout your career journey.",
  }
];

export default function AppleScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = 1 / 5;
    const index = Math.min(Math.floor(latest / step), 4);
    setActiveIndex(index);
  });

  const renderScreenContent = (index: number) => {
    // Common top UI Bar for the simulated iPhone screen
    const iPhoneHeader = (
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e5e7] dark:border-neutral-800 bg-white dark:bg-neutral-900 select-none">
        <div className="flex items-center gap-2 text-left">
          <Menu className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
          <div className="flex flex-col text-left">
            <span className="font-display font-extrabold text-[10px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-none">Manuscript</span>
            <span className="text-[5px] font-bold text-neutral-400 dark:text-neutral-500 tracking-wider uppercase mt-0.5">EXPERT AI</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bell className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
            <div className="absolute top-0 right-0 h-1.5 w-1.5 bg-red-500 rounded-full" />
          </div>
          <div className="h-4.5 w-4.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-[#e5e5e7] dark:border-neutral-700 overflow-hidden flex items-center justify-center">
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
      case 0: // ATS Score Dashboard
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-3 text-left overflow-y-auto scrollbar-none flex-1">
              <div className="flex items-center gap-1.5 text-[8px] font-bold text-neutral-600 dark:text-neutral-400 uppercase">
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-950 dark:bg-neutral-100" />
                <span>Active Portfolio</span>
              </div>
              <h3 className="font-sans font-bold text-xs text-[#1d1d1f] dark:text-[#f5f5f7] leading-none">
                Welcome back, Alex Hamilton
              </h3>

              {/* Large Score Card (Premium Dark Slate #1d1d1f) */}
              <div className="bg-[#1d1d1f] dark:bg-neutral-900 rounded-2xl p-4 text-white shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[7.5px] font-bold bg-white/10 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-wider w-fit">
                      ✦ Premium Status
                    </span>
                    <h4 className="font-sans font-bold text-xs mt-1.5">Profile Strength</h4>
                    <p className="text-[7.5px] text-neutral-300 font-medium leading-tight mt-0.5">
                      Complete your portfolio to unlock VIP Templates.
                    </p>
                  </div>
                  
                  {/* Gauge */}
                  <div className="relative flex items-center justify-center h-14 w-14 shrink-0">
                    <svg className="absolute inset-0 -rotate-90" width="56" height="56" viewBox="0 0 56 56">
                      <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="3" />
                      <circle
                        cx="28"
                        cy="28"
                        r="22"
                        fill="none"
                        stroke="white"
                        strokeWidth="3.5"
                        strokeDasharray="138.2"
                        strokeDashoffset="20.7" // ~85%
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-sans text-[9px] font-bold text-white z-10">85%</span>
                  </div>
                </div>

                <button className="w-full bg-white text-[#1d1d1f] py-1.5 rounded-full text-[8px] font-extrabold flex items-center justify-center gap-1 shadow-xs hover:bg-neutral-50 transition-colors">
                  <Zap className="h-2.5 w-2.5 fill-current" />
                  <span>Complete Profile</span>
                </button>
              </div>

              {/* Suggestions header */}
              <div className="flex items-center justify-between mt-1">
                <span className="text-[9px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">AI Suggestions</span>
                <span className="text-[7.5px] font-semibold text-[#6e6e73] dark:text-neutral-400">View All</span>
              </div>

              {/* Small suggestion list card */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 shadow-2xs flex items-center gap-3">
                <div className="h-7 w-7 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 shrink-0">
                  <Compass className="h-4 w-4" />
                </div>
                <div className="flex-1 flex flex-col gap-0.5">
                  <span className="text-[8.5px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7] leading-none">Skills Optimization</span>
                  <span className="text-[6.5px] font-bold text-[#6e6e73] dark:text-neutral-400 uppercase tracking-wider">Matching: Product Designer</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
              </div>

            </div>
          </div>
        );

      case 1: // AI Suggestions View (Image 2 exact match, styled neutrally)
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-3 text-left overflow-y-auto scrollbar-none flex-1">
              <div className="flex items-center gap-1 text-[8px] font-bold text-neutral-600 dark:text-neutral-400 uppercase">
                <Sparkles className="h-2.5 w-2.5 fill-current" />
                <span>AI Assistant Suggestions</span>
              </div>
              <h3 className="font-sans font-bold text-[12px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                Refine your professional storytelling.
              </h3>

              {/* White Card: Google Metric Update */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-2xl p-3.5 shadow-sm flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-neutral-950 rounded flex items-center justify-center shrink-0 border border-neutral-800">
                    <span className="text-[8px] font-black text-white">G</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8.5px] font-bold text-neutral-800 dark:text-neutral-200 leading-none">Google Match Update</span>
                    <span className="text-[6px] text-neutral-400 mt-0.5">Google • 2m ago</span>
                  </div>
                </div>

                <p className="text-[8.5px] text-neutral-700 dark:text-neutral-300 font-medium leading-normal">
                  I noticed your experience lacks metrics. Would you like to add:
                </p>

                {/* Highlighted text block (Neutral light background) */}
                <div className="bg-neutral-50 dark:bg-neutral-850/60 border border-neutral-100 dark:border-neutral-800/40 rounded-lg p-2.5 text-[8.5px] text-[#1d1d1f] dark:text-neutral-300 italic font-semibold leading-normal">
                  "Improved latency by 25% by optimizing SQL queries"
                </div>

                {/* Actions button bar */}
                <div className="flex items-center gap-2 mt-0.5">
                  <button className="flex-1 bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] font-bold py-1.5 rounded-lg text-[8.5px] text-center shadow-xs transition-colors hover:bg-neutral-800">
                    Accept
                  </button>
                  <button className="flex-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-bold py-1.5 rounded-lg text-[8.5px] text-center transition-colors hover:bg-neutral-250">
                    Discard
                  </button>
                </div>
              </div>

              {/* Second Card: Copy Enhancement */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-2xl p-3.5 shadow-sm flex flex-col gap-1.5 opacity-60">
                <span className="text-[7px] font-bold text-neutral-600 dark:text-neutral-400 tracking-wider uppercase leading-none">
                  Copy Enhancement
                </span>
                <p className="text-[8px] text-neutral-500 dark:text-neutral-400">
                  Your summary sounds a bit passive. Try starting with:
                </p>
              </div>

            </div>
          </div>
        );

      case 2: // Resume Builder Interface
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-3 text-left overflow-y-auto scrollbar-none flex-1">
              <div className="flex items-center gap-1 text-[8px] font-bold text-neutral-600 dark:text-neutral-400 uppercase">
                <Layers className="h-2.5 w-2.5" />
                <span>Live Editor</span>
              </div>
              <h3 className="font-sans font-bold text-[12px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                Design with pixel-perfect layouts.
              </h3>

              {/* Drag and Drop layers */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[7.5px] font-bold text-neutral-400 uppercase tracking-wider">Document Hierarchy</span>
                {[
                  { name: 'Contact & Header', type: 'Primary' },
                  { name: 'Professional Experience', type: 'Work' },
                  { name: 'Key Projects', type: 'Work' },
                  { name: 'Education & Honors', type: 'School' },
                ].map((sec, sI) => (
                  <div 
                    key={sI} 
                    className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl px-3 py-2 flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col gap-0.5 justify-center shrink-0">
                        <div className="h-0.5 w-2 bg-neutral-300 dark:bg-neutral-600 rounded-sm" />
                        <div className="h-0.5 w-2 bg-neutral-300 dark:bg-neutral-600 rounded-sm" />
                      </div>
                      <span className="text-[8.5px] font-semibold text-neutral-800 dark:text-neutral-200">{sec.name}</span>
                    </div>
                    <span className="text-[6.5px] font-bold px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 uppercase tracking-wide border border-neutral-200 dark:border-neutral-700">
                      {sec.type}
                    </span>
                  </div>
                ))}
              </div>

              {/* Live typing visual indicator */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 shadow-2xs mt-1">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-800 dark:bg-[#f5f5f7] animate-pulse" />
                  <span className="text-[7.5px] text-neutral-400 font-bold uppercase tracking-wider">Typing AI Enhancement...</span>
                </div>
                <p className="text-[8px] font-mono text-neutral-700 dark:text-neutral-300 mt-1.5 bg-neutral-50 dark:bg-neutral-950 p-2 rounded border border-[#e5e5e7] dark:border-neutral-800/50">
                  "Engineered web architecture with Next.js and Tailwind... |"
                </p>
              </div>

            </div>
          </div>
        );

      case 3: // Cover Letter Generator screen (Neutral styling)
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-3 text-left overflow-y-auto scrollbar-none flex-1">
              <div className="flex items-center gap-1 text-[8px] font-bold text-neutral-600 dark:text-neutral-400 uppercase">
                <FileText className="h-2.5 w-2.5" />
                <span>Tailored Cover Letters</span>
              </div>
              <h3 className="font-sans font-bold text-[12px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                Instantly matches any role context.
              </h3>

              {/* Cover Letter Sheet Draft */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-2xl p-4 shadow-sm flex flex-col gap-2 relative">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] text-neutral-800 dark:text-neutral-200 font-bold font-sans">To: Google Hiring Team</span>
                  <span className="text-[6px] text-neutral-400">Position: Product Designer</span>
                </div>

                <div className="border-t border-neutral-100 dark:border-neutral-800/80 my-1" />

                <p className="text-[7.5px] text-neutral-800 dark:text-neutral-200 font-semibold leading-relaxed">
                  Dear Hiring Team,
                </p>
                <p className="text-[7px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  I am writing to express my strong interest in the Product Designer position. With over 4 years of experience crafting interactive layouts and developer tool dashboards...
                </p>

                {/* Ambient glow fade at the bottom */}
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none rounded-b-2xl" />
              </div>

              {/* Pill Button: solid #1d1d1f instead of gradient */}
              <button className="bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] font-bold py-1.5 px-4 rounded-full text-[8.5px] shadow-sm flex items-center justify-center gap-1 mt-1 mx-auto transition-transform hover:opacity-95">
                <Sparkles className="h-3 w-3 fill-current" />
                <span>Improve Content</span>
              </button>

            </div>
          </div>
        );

      case 4: // Career Analytics & Job Tracker
        return (
          <div className="flex flex-col h-full bg-[#f8fafc] dark:bg-neutral-950 font-sans">
            {iPhoneHeader}
            <div className="p-4 flex flex-col gap-3 text-left overflow-y-auto scrollbar-none flex-1">
              <div className="flex items-center gap-1 text-[8px] font-bold text-neutral-600 dark:text-neutral-400 uppercase">
                <Sliders className="h-2.5 w-2.5" />
                <span>Hiring Dashboard</span>
              </div>
              <h3 className="font-sans font-bold text-[12px] text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
                Keep applications fully organized.
              </h3>

              {/* Application Progress cards */}
              <div className="flex flex-col gap-2">
                {[
                  { company: 'Meta', role: 'Product Designer', status: 'Interview Scheduled', color: 'neutral' },
                  { company: 'Google', role: 'UX Engineer', status: 'Offer Received', detail: '$140K / Year', color: 'neutral' },
                  { company: 'Apple', role: 'Senior Designer', status: 'Applied', color: 'neutral' },
                ].map((app, aI) => (
                  <div 
                    key={aI} 
                    className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-3 shadow-2xs flex flex-col gap-1 text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-neutral-900 dark:text-neutral-50">{app.company}</span>
                      
                      <span className="text-[6.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-neutral-100 dark:bg-neutral-850 text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50">
                        {app.status}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between mt-0.5">
                      <span className="text-[7.5px] text-neutral-500 dark:text-neutral-400 font-medium leading-none">{app.role}</span>
                      {app.detail && (
                        <span className="text-[8px] text-neutral-800 dark:text-neutral-200 font-bold leading-none">{app.detail}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Simple Chart Bar representation */}
              <div className="bg-white dark:bg-neutral-900 border border-[#e5e5e7] dark:border-neutral-800/80 rounded-xl p-2.5 shadow-2xs flex items-center justify-between">
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
    <section ref={containerRef} className="relative h-[450vh] w-full bg-[#f5f5f7] dark:bg-neutral-950/40 transition-colors duration-300 select-none">
      
      {/* Sticky Frame Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Dynamic backdrop (Subtle, neutral shadows only) */}
        <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full py-12">
          
          {/* Left half: Text transitions */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center items-start text-left gap-4 h-[25vh] lg:h-full z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col gap-4 font-sans"
              >
                {/* Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#e5e5e7] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[#6e6e73] dark:text-neutral-400 text-xs font-semibold tracking-wide w-fit uppercase font-sans">
                  <span>{screens[activeIndex].tag}</span>
                </div>

                {/* Headline (Manrope 600) */}
                <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-[1.12] text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {screens[activeIndex].headline}
                </h2>

                {/* Subtext (Inter 400) */}
                <p className="font-sans text-base sm:text-lg text-[#6e6e73] dark:text-neutral-400 leading-relaxed max-w-md">
                  {screens[activeIndex].subtext}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right half: Sticky iPhone device */}
          <div className="col-span-1 lg:col-span-7 flex items-center justify-center h-[55vh] lg:h-full relative select-none">
            
            {/* High-fidelity simulated iPhone 15 Pro device frame */}
            <div className="relative w-[285px] h-[575px] rounded-[48px] border-[12px] border-neutral-950 dark:border-neutral-900 bg-neutral-950 shadow-md outline outline-[1px] outline-neutral-800/10 select-none z-10 flex flex-col overflow-hidden">
              
              {/* Dynamic Island Pill */}
              <div className="w-24 h-5.5 bg-black rounded-full absolute top-3 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full ml-auto mr-3" />
              </div>

              {/* Status Bar */}
              <div className="absolute top-1.5 left-0 right-0 px-6 py-1 w-full flex justify-between items-center text-[8px] font-bold text-neutral-700 dark:text-neutral-300 z-30 select-none font-sans">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-1.5 bg-neutral-700 dark:bg-neutral-300 rounded-2xs" />
                    <div className="w-0.5 h-2 bg-neutral-700 dark:bg-neutral-300 rounded-2xs" />
                    <div className="w-0.5 h-2.5 bg-neutral-700 dark:bg-neutral-300 rounded-2xs" />
                  </div>
                  <span className="text-[7px]">5G</span>
                  <div className="w-4 h-2 border border-neutral-700 dark:border-neutral-300 rounded-2xs p-0.25 flex items-center">
                    <div className="w-full h-full bg-neutral-700 dark:bg-neutral-300 rounded-3xs" />
                  </div>
                </div>
              </div>

              {/* Display screen wrapper */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden pt-9 bg-[#f8fafc] dark:bg-neutral-950 flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full h-full flex flex-col bg-[#f8fafc] dark:bg-neutral-950 overflow-hidden"
                  >
                    {renderScreenContent(activeIndex)}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
