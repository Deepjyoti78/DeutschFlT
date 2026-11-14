'use client';

import React from 'react';
import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TRANSFORMATION_DATA } from '@/data/site';

export const Transformation: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F5EC] overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow={TRANSFORMATION_DATA.eyebrow}
          title="From Hesitation to"
          italicWord="Confidence."
          subtitle={TRANSFORMATION_DATA.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LEFT CARD: Vorher — Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FAF7F2] border border-[#E9E4D8] rounded-[28px] p-6 sm:p-10 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E9E4D8]">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE0] text-[#93523B] font-semibold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#C25E3B]" />
                {TRANSFORMATION_DATA.before.badge}
              </span>
              <span className="text-xs text-muted font-medium">Common Hurdles</span>
            </div>

            <ul className="space-y-4 sm:space-y-5">
              {TRANSFORMATION_DATA.before.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#F5E6E0] text-[#C25E3B] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-body text-sm sm:text-base leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT CARD: Nachher — After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#F0F6E2] border border-[#DCE8BF] rounded-[28px] p-6 sm:p-10 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#DCE8BF]">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1EDC5] text-forest font-semibold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-forest" />
                {TRANSFORMATION_DATA.after.badge}
              </span>
              <span className="text-xs text-olive-dark font-medium">Target Outcomes</span>
            </div>

            <ul className="space-y-4 sm:space-y-5">
              {TRANSFORMATION_DATA.after.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-forest-heading text-sm sm:text-base font-medium leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
