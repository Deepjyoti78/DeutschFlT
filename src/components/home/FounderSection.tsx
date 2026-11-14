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
    <section id="about" className="py-20 lg:py-28 bg-[#FBF8F5] relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-olive-dark">
              <span className="w-6 h-[2px] bg-olive inline-block rounded-full" />
              <span>Meet Your Coach</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-[44px] leading-tight text-forest-heading mb-3 font-normal">
              Meet the Person Behind <span className="text-forest">DeutschFIT.</span>
            </h2>

            <div className="mb-6">
              <div className="font-editorial text-2xl text-forest font-semibold">
                {SITE_CONFIG.founderName}
              </div>
              <div className="text-xs sm:text-sm text-olive-dark font-medium uppercase tracking-wider mt-0.5">
                {SITE_CONFIG.founderTitle}
              </div>
            </div>

            <p className="text-body text-base sm:text-lg leading-relaxed mb-8">
              {SITE_CONFIG.founderCopy}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Highlight 1 */}
              <div className="bg-bg-cream border border-border-subtle rounded-2xl p-5 transition-shadow hover:shadow-subtle">
                <div className="flex items-center gap-2 text-forest font-semibold text-xs uppercase tracking-wider mb-2">
                  <Mic className="w-4 h-4 text-olive" />
                  <span>Speaking Specialization</span>
                </div>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Focused on communication, fluency, pronunciation, and confidence in real-world German conversations.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="bg-bg-cream border border-border-subtle rounded-2xl p-5 transition-shadow hover:shadow-subtle">
                <div className="flex items-center gap-2 text-forest font-semibold text-xs uppercase tracking-wider mb-2">
                  <MessageSquare className="w-4 h-4 text-olive" />
                  <span>Beyond the Classroom</span>
                </div>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Communication training for presentations, professional conversations, interviews, and everyday interactions.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-pill inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-6 py-3 rounded-full bg-forest hover:bg-forest-dark text-white shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Connect with Utkal Das</span>
              <span>↗</span>
            </button>
          </motion.div>

          {/* Right Column: Large Portrait Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Organic Soft-Green Backdrop */}
              <div className="absolute inset-0 bg-[#EBF2D6] rounded-[38px] rotate-2 transform transition-transform duration-500 hover:rotate-3" />

              <div className="relative z-10 bg-[#F5F8EC] border-2 border-[#E1ECD0] rounded-[34px] p-6 shadow-md text-center">
                <div className="relative w-full h-[360px] sm:h-[380px] rounded-[24px] overflow-hidden bg-gradient-to-b from-[#E7EED7] to-[#D5E4BD] flex items-center justify-center">
                  {/* Portrait Silhouette/Illustration with clean typography */}
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#174D2A] text-white flex items-center justify-center text-3xl font-editorial shadow-inner mb-4">
                      UD
                    </div>
                    <div className="font-editorial text-2xl text-forest-heading font-semibold">
                      Utkal Das
                    </div>
                    <div className="text-xs text-olive-dark font-medium tracking-wide uppercase mt-1">
                      Lead German Coach & Mentor
                    </div>
                    <p className="text-xs text-body mt-3 max-w-[240px] leading-relaxed">
                      "Speaking German is not about perfection — it is about courage, structure, and daily momentum."
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between px-2 text-xs text-muted">
                  <span className="flex items-center gap-1.5 text-forest font-semibold">
                    <Award className="w-4 h-4 text-olive" /> Verified CEFR Coach
                  </span>
                  <span>1-on-1 & Small Batches</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
