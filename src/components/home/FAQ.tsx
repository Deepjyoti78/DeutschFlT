'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQS_DATA } from '@/data/faqs';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['prior-knowledge']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F9F5F2]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="NEED HELP?"
          title="Frequently Asked"
          italicWord="Questions."
          subtitle="Everything you need to know before beginning your German learning journey."
        />

        <div className="space-y-4 max-w-3xl mx-auto mb-12">
          {FAQS_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#F5EFE9] border border-[#E8DFD8] rounded-2xl overflow-hidden transition-all duration-200 hover:border-maroon/40"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl text-forest-heading font-medium">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-maroon flex items-center justify-center shrink-0 border border-[#E8DFD8] transition-transform">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-maroon" />
                    ) : (
                      <Plus className="w-4 h-4 text-maroon" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-body text-sm sm:text-base leading-relaxed border-t border-[#E8DFD8]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Prompt */}
        <div className="text-center pt-4">
          <p className="text-body text-sm sm:text-base">
            Still have questions? We're happy to help.{' '}
            <a
              href="#contact"
              className="text-maroon font-semibold hover:text-maroon-dark inline-flex items-center gap-1 underline underline-offset-4 ml-1"
            >
              <span>Contact Our Team</span>
              <span>↗</span>
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};
