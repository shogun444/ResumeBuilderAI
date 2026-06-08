'use client';

import ClassyThemeToggle from "@/components/ClassyThemeToggle";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f7] dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 text-sm border-t border-neutral-200/60 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo & Brand Info */}
          <div className="flex flex-col items-start gap-4"> 
            <div className="flex items-center gap-3">
              <img className="rounded-xl h-10 w-10 object-cover" src="/Logo.jpeg" alt="Logo" /> 
              <span className="font-display font-bold text-lg text-neutral-900 dark:text-neutral-50">
                AIResumeBuilder
              </span>
            </div>
            <p className="font-sans text-xs text-neutral-400 dark:text-neutral-500 max-w-xs leading-relaxed">
              Create standard-compliant, ATS-optimized resumes in minutes with modern SaaS capabilities.
            </p>
          </div>
       
          {/* Footer Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            {/* Company */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                Company
              </h4>
              <ul className="space-y-2 font-sans text-neutral-500 dark:text-neutral-400">
                <li><a href="#about" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Careers</a></li>
                <li><a href="#press" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Press</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                Resources
              </h4>
              <ul className="space-y-2 font-sans text-neutral-500 dark:text-neutral-400">
                <li><a href="#blog" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Blog</a></li>
                <li><a href="#help" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Help Center</a></li>
                <li><a href="#guides" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Guides</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                Legal
              </h4>
              <ul className="space-y-2 font-sans text-neutral-500 dark:text-neutral-400">
                <li><a href="#terms" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Terms</a></li>
                <li><a href="#privacy" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Privacy</a></li>
                <li><a href="#cookies" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Cookies</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                Contact
              </h4>
              <ul className="space-y-2 font-sans text-neutral-500 dark:text-neutral-400">
                <li><a href="mailto:support@example.com" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">support@example.com</a></li>
                <li><a href="tel:+121943753294" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">+121 943753294</a></li>
                <li><a href="#location" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Asia, Pacific</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-400 dark:text-neutral-500 text-xs">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <span>© {new Date().getFullYear()} AIResumeBuilder. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div>
            <ClassyThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}