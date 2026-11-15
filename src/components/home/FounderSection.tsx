'use client';

import React from 'react';
import { Mic, MessageSquare, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/data/site';

interface FounderSectionProps {
  onOpenBooking: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F9F5F2] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* Left Column: Coach Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-terracotta">
              <span className="w-6 h-[2px] bg-maroon inline-block rounded-full" />
              <span>Meet Your Coach</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-[44px] leading-tight text-forest-heading mb-3 font-normal">
              Meet the Person Behind <span className="text-maroon">DeutschFIT.</span>
            </h2>

            <div className="mb-6">
              <div className="font-editorial text-2xl text-maroon font-semibold">
                {SITE_CONFIG.founderName}
              </div>
              <div className="text-xs sm:text-sm text-terracotta font-medium uppercase tracking-wider mt-0.5">
                {SITE_CONFIG.founderTitle}
              </div>
            </div>

            <p className="text-body text-base sm:text-lg leading-relaxed mb-8">
              {SITE_CONFIG.founderCopy}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Highlight 1 */}
              <div className="bg-[#F5EFE9] border border-[#E8DFD8] rounded-2xl p-5 transition-shadow hover:shadow-subtle">
                <div className="flex items-center gap-2 text-forest-heading font-semibold text-xs uppercase tracking-wider mb-2">
                  <Mic className="w-4 h-4 text-maroon" />
                  <span>Speaking Specialization</span>
                </div>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Focused on communication, fluency, pronunciation, and confidence in real-world German conversations.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="bg-[#F5EFE9] border border-[#E8DFD8] rounded-2xl p-5 transition-shadow hover:shadow-subtle">
                <div className="flex items-center gap-2 text-forest-heading font-semibold text-xs uppercase tracking-wider mb-2">
                  <MessageSquare className="w-4 h-4 text-maroon" />
                  <span>Beyond the Classroom</span>
                </div>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Communication training for presentations, professional conversations, interviews, and everyday interactions.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-pill inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-6 py-3 rounded-full bg-maroon hover:bg-maroon-dark text-white shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Connect with Utkal Das</span>
              <span>↗</span>
            </button>
          </motion.div>

          {/* Right Column: Premium Framed Photograph Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[400px]">
              {/* Organic Soft-Terracotta Backdrop Shape */}
              <div className="absolute inset-0 bg-[#F4E5E0] rounded-[36px] rotate-2 transform transition-transform duration-500 hover:rotate-3" />

              <div className="relative z-10 bg-[#FAF5F0] border border-[#E8DFD8] rounded-[32px] p-4 sm:p-5 shadow-sm text-center">
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden shadow-sm group bg-[#F5EFE9]">
                  <img
                    src="/images/utkal-portrait.png"
                    alt="Utkal Das — Founder & Lead German Coach at DeutschFIT"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Floating Top Badge */}
                  <div className="absolute top-3.5 right-3.5 z-20 bg-white/95 backdrop-blur-md border border-[#EED9D5] text-maroon text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <span>🇩🇪</span>
                    <span>CEFR A1–C1 Coach</span>
                  </div>

                  {/* Bottom Editorial Caption Overlay */}
                  <div className="absolute inset-x-3 bottom-3 z-20 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl p-3.5 text-left text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="font-editorial text-lg text-white font-semibold">
                        Utkal Das
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E57D6F] bg-white/10 px-2 py-0.5 rounded-full">
                        Founder
                      </span>
                    </div>
                    <div className="text-[11px] text-white/90 font-medium mt-0.5">
                      Lead German Language Trainer & Coach
                    </div>
                    <p className="text-[11px] text-white/75 mt-1.5 italic leading-tight">
                      "Speaking German is about courage, structure, and daily momentum."
                    </p>
                  </div>
                </div>

                {/* Card Sub-bar */}
                <div className="mt-3.5 pt-3 border-t border-[#E8DFD8] flex items-center justify-between px-2 text-xs text-muted">
                  <span className="flex items-center gap-1.5 text-maroon font-semibold">
                    <Award className="w-4 h-4 text-terracotta" /> Goethe & ÖSD Prep
                  </span>
                  <span className="text-terracotta font-medium">1-on-1 & Small Batches</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
