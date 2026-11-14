'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { COURSES_DATA } from '@/data/courses';
import { cn } from '@/lib/utils';

interface CoursesProps {
  onSelectTier: (levelCode: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectTier }) => {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#FBF8F5] overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="EXPLORE OUR COURSES"
          title="A Course for"
          italicWord="Every Ambition."
          subtitle="Whether you're starting from zero or working toward advanced German, find a structured learning path that fits your goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {COURSES_DATA.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className={cn(
                'rounded-[28px] p-7 sm:p-9 border flex flex-col justify-between transition-shadow duration-300 relative',
                tier.isPopular
                  ? 'bg-[#F2F7E6] border-olive shadow-hover lg:-translate-y-2'
                  : 'bg-bg-cream border-border-subtle hover:border-olive/40 hover:shadow-hover'
              )}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-forest text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-lime" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/80 border border-border-subtle text-olive-dark font-semibold text-xs tracking-wider uppercase mb-3">
                  {tier.levelCode}
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-forest-heading mb-2">
                  {tier.name}
                </h3>

                <p className="text-body text-xs sm:text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="h-[1px] bg-border-subtle mb-6" />

                <div className="text-xs font-semibold text-forest-heading uppercase tracking-wider mb-3">
                  Key Learning Highlights
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#E5EFCF] text-forest flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-body text-xs sm:text-sm leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectTier(tier.levelCode)}
                  className={cn(
                    'btn-pill w-full py-3.5 px-6 rounded-full font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98]',
                    tier.isPopular
                      ? 'bg-forest hover:bg-forest-dark text-white shadow-sm'
                      : 'bg-white hover:bg-forest hover:text-white text-forest-heading border border-border-subtle'
                  )}
                >
                  <span>{tier.ctaLabel}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
