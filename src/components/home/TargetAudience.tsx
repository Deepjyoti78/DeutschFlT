'use client';

import React from 'react';
import { Mic, BookOpen, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AUDIENCE_DATA } from '@/data/site';

interface TargetAudienceProps {
  onOpenBooking: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Mic':
        return Mic;
      case 'BookOpen':
        return BookOpen;
      case 'Briefcase':
        return Briefcase;
      case 'TrendingUp':
      default:
        return TrendingUp;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5EFE9] overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="WHO IS IT FOR?"
          title="German Learning Designed Around"
          italicWord="Your Goals."
          subtitle="For ambitious learners who want to communicate confidently and pursue opportunities in Germany."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {AUDIENCE_DATA.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FAF5F0] border border-[#E8DFD8] rounded-[24px] p-7 sm:p-8 transition-shadow duration-300 hover:shadow-hover"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F8ECE9] text-maroon flex items-center justify-center mb-5 transition-transform hover:scale-105">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl text-forest-heading mb-2.5">
                  {item.title}
                </h3>
                <p className="text-body text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Centered Closing CTA */}
        <div className="text-center mt-12 pt-4">
          <p className="text-base sm:text-lg font-editorial text-forest-heading mb-4">
            "Your German journey starts with one conversation."
          </p>
          <a
            href="#courses"
            className="btn-pill inline-flex items-center gap-2 font-medium text-xs sm:text-sm px-6 py-3 rounded-full bg-maroon hover:bg-maroon-dark text-white shadow-sm transition-all duration-200 active:scale-[0.98]"
          >
            <span>Find Your Course</span>
            <span>↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
};
