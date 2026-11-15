import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#211614] text-[#F9F5F2] pt-16 sm:pt-20 pb-12 border-t border-[#362522]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#362522]">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="#home" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-full bg-maroon text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm transition-transform group-hover:scale-105">
                D!
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">
                Deutsch<span className="font-normal text-[#E57D6F]">FIT</span>
              </span>
            </Link>

            <p className="text-sm text-[#D8CCC7] leading-relaxed max-w-sm mb-6">
              Personalized German coaching to help you communicate confidently and pursue new opportunities in Germany and beyond.
            </p>

            <div className="text-xs text-[#AA9C97]">
              Founded by <span className="text-white font-medium">Utkal Das</span>. Guided online coaching for learners worldwide.
            </div>
          </div>

          {/* COLUMN 1 — Explore (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E57D6F] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CCC7]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-german" className="hover:text-white transition-colors">
                  Why Learn German?
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 2 — Learn (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E57D6F] mb-4">
              Learn
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CCC7]">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  A1 Foundation
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  A2 Elementary
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  B1 Intermediate
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  B2 Upper Intermediate
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  C1–C2 Advanced
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E57D6F] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CCC7]">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Learning Resources
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Exam Preparation
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Vocabulary Guide
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E57D6F] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CCC7]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About DeutschFIT
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Meet Your Coach
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AA9C97]">
          <div>© 2026 DeutschFIT. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Designed with modern European editorial aesthetics</span>
            <a href="#home" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
