'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { JOURNEY_STEPS } from '@/data/site';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F5EFE9] overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="YOUR LEARNING JOURNEY"
          title="From Hallo to"
          italicWord="Zertifikat."
          subtitle="A clear, guided journey from your first German word to confident communication."
        />

        {/* Timeline Desktop & Mobile */}
        <div className="relative max-w-6xl mx-auto mb-14">
          {/* Subtle horizontal connector on desktop */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#EED5CF] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {JOURNEY_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FAF5F0] border border-[#E8DFD8] rounded-[22px] p-6 flex flex-col justify-between transition-shadow duration-300 hover:shadow-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-maroon text-white flex items-center justify-center font-bold text-sm tracking-wider mb-5 shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="font-editorial text-lg text-forest-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Journey CTA */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="btn-pill inline-flex items-center gap-2 font-medium text-xs sm:text-sm px-7 py-3 rounded-full bg-maroon hover:bg-maroon-dark text-white shadow-sm transition-all active:scale-[0.98]"
          >
            <span>Start Your Journey</span>
            <span>↗</span>
          </button>
        </div>
      </Container>
    </section>
  );
};
