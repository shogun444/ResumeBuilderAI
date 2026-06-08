'use client';

import { motion } from "motion/react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Frontend Developer at PixelCraft",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback: "The AI Resume Builder saved me hours! It understood my experience and generated a clean, professional resume in minutes. Landed 3 interviews within a week.",
    },
    {
      name: "Rohan Mehta",
      role: "Fullstack Engineer at CodeNest",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback: "I was struggling to highlight my technical skills properly, but this tool structured everything so well. The AI suggestions were shockingly good.",
    },
    {
      name: "Sneha Iyer",
      role: "UI/UX Designer at BrightIdeas",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      feedback: "I love how intuitive and fast the resume builder is. The design templates are beautiful, and the AI made it feel like I had a personal career coach.",
    },
    {
      name: "Arjun Singh",
      role: "Backend Developer at StackForge",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      feedback: "Honestly, this is the best resume builder I've used. It tailored my resume to backend roles perfectly and even helped me fix small grammar issues I’d missed.",
    },
    {
      name: "Divya Patel",
      role: "Product Manager at AppHive",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
      feedback: "As someone switching careers, the AI Resume Builder helped me frame my transferable skills in a way that made sense. Total game-changer.",
    }
  ];
  
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-neutral-900 dark:text-neutral-50 text-center mb-16">
        Loved by builders worldwide
      </h2>
      
      <div className="w-full relative py-4">
        {/* Gradients on Left/Right edge for smooth mask fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5f5f7] dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f5f5f7] dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

        <motion.div 
          initial={{ x: '0%' }}
          animate={{ x: '-40%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear'
          }}
          className="flex w-max gap-8 px-8"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between p-6 rounded-[18px] h-64 w-80 sm:w-96 bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 shadow-sm transition-shadow duration-200 hover:shadow-md font-sans text-neutral-600 dark:text-neutral-350 shrink-0"
            >
              <p className="text-sm italic leading-relaxed">
                "{item.feedback}"
              </p>

              <div className="flex items-center gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-4 mt-auto"> 
                <img 
                  className="rounded-full h-11 w-11 object-cover border border-neutral-200/50 dark:border-neutral-700/50" 
                  src={item.avatar} 
                  alt={item.name} 
                />
                <div className="flex flex-col text-left"> 
                  <span className="font-display font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                    {item.name}
                  </span>
                  <span className="font-sans text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}