'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-28 pb-14 lg:pb-20 overflow-hidden bg-[#F9F5F2]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column — 50% on desktop */}
          <div className="lg:col-span-6 text-left z-10 lg:-mt-4 xl:-mt-6">
            {/* Eyebrow — Maroon / Terracotta line and text */}
            <div className="inline-flex items-center gap-2 mb-3 text-[10.5px] sm:text-[11px] font-bold tracking-widest uppercase text-terracotta">
              <span className="w-6 h-[1.5px] bg-maroon inline-block rounded-full" />
              <span>Personalized German Coaching</span>
            </div>

            {/* Main Headline — Three-liner, with maroon italic accent */}
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.16] text-forest-heading tracking-tight mb-6 sm:mb-7 font-normal">
              Learn German,
              <br />
              Open Opportunities
              <br />
              <span className="italic text-maroon font-normal">
                in Europe.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-[15px] text-body/90 leading-relaxed mb-7 sm:mb-8 max-w-lg">
              Personalized German coaching designed to help you speak confidently, prepare for internationally recognized language exams, and unlock exciting education and career opportunities in Germany and across Europe.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="btn-pill inline-flex items-center justify-center font-medium text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-maroon hover:bg-maroon-dark text-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Try a Free Mini Lesson</span>
                <span className="ml-1.5 text-xs">↗</span>
              </button>

              <a
                href="#courses"
                className="btn-pill inline-flex items-center justify-center font-medium text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#F5EFE9] hover:bg-[#EFE8E0] text-forest-heading border border-[#E8DFD8] hover:border-maroon transition-all duration-200 text-center"
              >
                <span>Explore Our Courses</span>
              </a>
            </div>
          </div>

          {/* Right Column — Hero Illustration Container */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] transition-transform duration-300 hover:scale-[1.01]">
              <img
                src="/images/collaborative-learning-success.png"
                alt="Personalized German Coaching — Students Learning Together"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
