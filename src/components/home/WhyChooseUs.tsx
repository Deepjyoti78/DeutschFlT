'use client';

import React from 'react';
import { Award, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: Award,
      title: 'Personalized Coaching',
      description:
        'Learn at your own pace with structured lessons, expert guidance, and personal feedback tailored to your goals.',
    },
    {
      icon: Globe,
      title: 'Career & Study Guidance',
      description:
        'Build the language skills and confidence you need to pursue education and professional opportunities in Germany.',
    },
    {
      icon: BookOpen,
      title: 'Exam Preparation',
      description:
        'Prepare for Goethe, ÖSD, TestDaF, and other language assessments with guided practice and targeted learning.',
    },
  ];

  return (
    <section id="why-german" className="py-20 lg:py-28 bg-[#FBF8F5] overflow-hidden">
      <Container>
        <SectionHeading
          title="Why Learn with Us?"
          subtitle="More than just language classes — we help you build real opportunities in Germany."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-bg-cream border border-border-subtle rounded-[24px] p-7 sm:p-9 transition-shadow duration-300 hover:shadow-hover group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAF2D7] text-forest flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl text-forest-heading mb-3 group-hover:text-forest transition-colors">
                  {card.title}
                </h3>

                <p className="text-body text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
