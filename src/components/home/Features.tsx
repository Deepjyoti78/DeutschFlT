'use client';

import React from 'react';
import {
  Sparkles,
  BookOpen,
  FileCheck,
  Mic,
  TrendingUp,
  Award,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FEATURES_DATA } from '@/data/site';

export const Features: React.FC = () => {
  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'BookOpen':
        return BookOpen;
      case 'FileCheck':
        return FileCheck;
      case 'Mic':
        return Mic;
      case 'TrendingUp':
        return TrendingUp;
      case 'Award':
        return Award;
      case 'Users':
        return Users;
      case 'ShieldCheck':
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#F9F5F2] overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="THE LEARNING EXPERIENCE"
          title="Everything You Need to"
          italicWord="Succeed in German."
          subtitle="A complete learning experience built around structured practice, personal guidance, and measurable progress."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((item, idx) => {
            const Icon = getFeatureIcon(item.iconName);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#F5EFE9] border border-[#E8DFD8] rounded-[22px] p-6 sm:p-7 flex flex-col justify-between transition-shadow duration-300 hover:shadow-hover hover:border-maroon/40 group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#F8ECE9] text-maroon flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="font-editorial text-lg sm:text-xl text-forest-heading mb-2 group-hover:text-maroon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
