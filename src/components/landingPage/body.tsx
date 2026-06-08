'use client';

import { ChevronLeft, ChevronRight, ArrowUp, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Testimonial from "./testimonial";
import { AnimatePresence, motion } from 'motion/react';
import Link from "next/link";
import AppleScroll from "./appleScroll";

export default function Body() {
  const [show, setShow] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  function handleClick(id: number) {
    setShow((prev) => prev === id ? null : id);
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsAtStart(scrollLeft <= 10);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = () => {
    checkScroll();
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Apple-inspired copy: [Strong statement]. [Supporting explanation]
  const features = [
    {
      tag: 'AI WRITE',
      heading: 'Improve every application',
      desc: 'Highlight your achievements with precise, metrics-driven professional copy suggestions.'
    },
    {
      tag: 'TEMPLATES',
      heading: 'Select designed templates',
      desc: 'Choose layout options built for extreme readability and ATS compliance.'
    },
    {
      tag: 'EDITOR',
      heading: 'Edit sections instantly',
      desc: 'Organize experience milestones, customize spacing, and refine layout panels instantly.'
    },
    {
      tag: 'COMPLIANCE',
      heading: 'Pass ATS screening',
      desc: 'Scan formatting, keyword frequency, and sections to maximize matching success.'
    },
    {
      tag: 'REVIEWS',
      heading: 'Get review suggestions',
      desc: 'Analyze drafting content against industry benchmarks to identify weaknesses early.'
    },
    {
      tag: 'TRACKING',
      heading: 'Track active applications',
      desc: 'Organize application pipelines, schedules, and analytics charts in one interface.'
    }
  ];

  const pricing = [
    {
      head: 'Free',
      price: '$0',
      role: 'Perfect for trying out the platform',
      task: '1 resume',
      templates: 'Basic templates',
      features: ['Export to PDF'],
      button: 'Get Started'
    },
    {
      head: 'Pro',
      price: '$12',
      period: '/month',
      role: 'Everything needed for your job search',
      task: 'Unlimited resumes',
      templates: 'All templates',
      features: [
        'AI content assistant',
        'ATS optimization',
        'Priority support'
      ],
      button: 'Get Pro'
    },
    {
      head: 'Enterprise',
      price: '$49',
      period: '/month',
      role: 'For teams and career services',
      task: 'Everything in Pro',
      templates: 'All templates',
      features: [
        'Team management',
        'Custom branding',
        'Dedicated support',
        'API access'
      ],
      button: 'Contact Sales'
    }
  ];

  const accordian = [
    {
      question: "How does AIResumeBuilder compare to other resume builders?",
      answers: "AIResumeBuilder offers AI-powered content suggestions, ATS optimization, and expert feedback that most other builders don't provide. Our templates are designed by HR professionals and our platform is more intuitive and user-friendly."
    },
    {
      question: "Can I use AIResumeBuilder for free?",
      answers: "Yes! We offer a free plan that allows you to create one resume and access basic templates. You can export your resume to PDF and use it for your job applications."
    },
    {
      question: "How does the AI content assistant work?",
      answers: "Our AI content assistant analyzes your experience and skills, then suggests professional bullet points and descriptions that highlight your achievements. It helps you quantify your impact and use industry-specific keywords that catch recruiters' attention."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answers: "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your Pro features until the end of your billing period."
    },
    {
      question: "Do you offer refunds?",
      answers: "We offer a 14-day money-back guarantee if you're not satisfied with your Pro subscription. Contact our support team to request a refund."
    }
  ];

  const parentVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const childrenVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <div className="w-full transition-colors duration-300 bg-[#f5f5f7] dark:bg-neutral-950">

      {/* Features Section */}
      <section id="features" className="py-24 md:py-36 max-w-6xl mx-auto px-6 overflow-hidden bg-transparent">
        {/* Header and Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 w-full">
          <div className="flex flex-col gap-3 text-left max-w-xl">
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Build resumes faster.
            </h2>
            <p className="font-sans text-[#6e6e73] dark:text-neutral-400 text-sm sm:text-base leading-[1.45]">
              Optimize keywords, templates, and structured milestones before you submit your application.
            </p>
          </div>

          {/* Scroll Slider Controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 pb-1">
            <button
              onClick={() => scroll('left')}
              disabled={isAtStart}
              className="h-10 w-10 rounded-full border border-[#e5e5e7] dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-[#6e6e73] dark:text-neutral-400" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={isAtEnd}
              className="h-10 w-10 rounded-full border border-[#e5e5e7] dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-[#6e6e73] dark:text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6 -mx-6 px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="group snap-start shrink-0 h-[360px] w-[290px] sm:w-[330px] flex flex-col justify-between p-8 rounded-[24px] bg-white dark:bg-[#1d1d1f] border border-[#e5e5e7] dark:border-neutral-800/80 shadow-sm transition-all duration-300 relative select-none"
            >
              <div className="flex flex-col gap-4">
                <span className="text-[10px] tracking-wider uppercase font-bold text-[#86868b] dark:text-neutral-500">
                  {item.tag}
                </span>

                {/* Inline strong statement + supporting description constrained to 32ch */}
                <p className="font-sans text-sm sm:text-base leading-[1.45] text-[#6e6e73] dark:text-neutral-400 max-w-[32ch] text-left">
                  <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {item.heading}.{" "}
                  </span>
                  {item.desc}
                </p>
              </div>

              {/* Bottom Portion: Icon and Plus Button */}
              <div className="flex items-center justify-between mt-auto">
                {/* Circular Plus Icon */}
                <div className="h-8 w-8 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center border border-[#e5e5e7] dark:border-neutral-700 shadow-sm group-hover:scale-105 transition-transform duration-200">
                  <span className="text-[#6e6e73] dark:text-neutral-400 text-sm font-bold">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AppleScroll />

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-36 border-t border-[#e5e5e7] dark:border-neutral-900 bg-white/40 dark:bg-neutral-950/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col gap-4">
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Simple pricing.
            </h2>
            <p className="font-sans text-[#6e6e73] dark:text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Choose the plan that works best for your career stage. No hidden fees.
            </p>
          </div>

          <motion.div
            variants={parentVarient}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4"
          >
            {pricing.map((item, index) => {
              const isPro = item.head === 'Pro';
              return (
                <motion.div
                  variants={childrenVarient}
                  key={index}
                  className={`flex flex-col justify-between p-8 rounded-[24px] transition-all duration-300 relative ${isPro
                    ? 'bg-white dark:bg-[#1d1d1f] border-2 border-[#1d1d1f] dark:border-neutral-700 shadow-md scale-100 md:scale-105 z-10'
                    : 'bg-white dark:bg-[#161617] border border-[#e5e5e7] dark:border-neutral-800 shadow-sm hover:shadow-md'
                    }`}
                >
                  {isPro && (
                    <span className="absolute -top-3 right-6 bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] font-sans text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                      Popular
                    </span>
                  )}

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display font-bold text-xl text-[#1d1d1f] dark:text-[#f5f5f7]">
                        {item.head}
                      </h3>
                      <p className="font-sans text-xs text-[#6e6e73] dark:text-neutral-400">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1 border-b border-[#e5e5e7] dark:border-neutral-800 pb-6">
                      <span className="font-display font-extrabold text-4xl text-[#1d1d1f] dark:text-[#f5f5f7]">
                        {item.price}
                      </span>
                      {item.period && (
                        <span className="font-sans text-sm text-[#6e6e73] dark:text-neutral-400">
                          {item.period}
                        </span>
                      )}
                    </div>

                    <ul className="flex flex-col gap-3 font-sans text-sm text-[#6e6e73] dark:text-neutral-300">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#1d1d1f] dark:text-[#f5f5f7]" />
                        <span>{item.task}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#1d1d1f] dark:text-[#f5f5f7]" />
                        <span>{item.templates}</span>
                      </li>
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-[#1d1d1f] dark:text-[#f5f5f7]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link href="/resume" className="w-full block">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        className={`w-full font-sans text-sm font-semibold py-2 px-4 rounded-full transition-all duration-200 ${isPro
                          ? 'bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] hover:bg-[#3a3a3c] dark:hover:bg-[#e5e5e7] shadow-sm'
                          : 'bg-transparent border border-[#d2d2d7] dark:border-neutral-750 text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-neutral-800/5 dark:hover:bg-white/5'
                          }`}
                      >
                        {item.button}
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-36 max-w-3xl mx-auto px-6 border-t border-[#e5e5e7] dark:border-neutral-900">
        <div className="text-center mb-16 flex flex-col gap-4">
          <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-[#6e6e73] dark:text-neutral-400 text-base md:text-lg">
            Find answers to common questions about our platform.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={parentVarient}
          className="flex flex-col gap-4"
        >
          {accordian.map((item, index) => (
            <motion.div
              variants={childrenVarient}
              key={index}
              onClick={() => handleClick(index)}
              className="cursor-pointer border border-[#e5e5e7] dark:border-neutral-800 rounded-xl bg-white dark:bg-[#161617] px-6 py-4 transition-all duration-250 hover:bg-neutral-50/50 dark:hover:bg-[#1d1d1f]/50 shadow-sm"
            >
              <div className="flex justify-between items-center py-1">
                <h3 className="font-display font-semibold text-base sm:text-lg text-[#1d1d1f] dark:text-neutral-100">
                  {item.question}
                </h3>
                <ArrowUp
                  size={16}
                  className={`transition-transform duration-300 ease-out ${show === index ? 'rotate-180' : 'rotate-0'
                    } text-neutral-400`}
                />
              </div>
              <AnimatePresence>
                {show === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 pb-2 font-sans text-sm text-[#6e6e73] dark:text-neutral-400 leading-relaxed border-t border-[#e5e5e7] dark:border-neutral-800 mt-2">
                      {item.answers}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-36 border-t border-[#e5e5e7] dark:border-neutral-900 bg-white/40 dark:bg-neutral-950/10">
        <Testimonial />
      </section>
    </div>
  );
}