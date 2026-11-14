'use client';

import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PRICING_DATA, PricingItem } from '@/data/pricing';
import { cn } from '@/lib/utils';

interface PricingProps {
  onEnroll: (level: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onEnroll }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filterTabs = ['All', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const filteredItems =
    activeTab === 'All'
      ? PRICING_DATA
      : PRICING_DATA.filter((item) => item.group === activeTab);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F6F5EC]">
      <Container>
        <SectionHeading
          eyebrow="COURSE PRICING"
          title="Choose Your Level."
          italicWord="Build Your Future."
          subtitle="Explore structured German courses and choose the level that matches your learning journey."
        />

        {/* Level Selector Tabs — Horizontally swipeable on mobile */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-10 sm:mb-12 px-1 py-1">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 active:scale-95',
                activeTab === tab
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-white text-forest-heading border border-border-subtle hover:border-olive hover:bg-forest/5'
              )}
            >
              {tab === 'All' ? 'View All Levels' : tab}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid with Animated Staggered Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto min-h-[480px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, delay: idx * 0.04 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={cn(
                  'rounded-[24px] p-6 sm:p-7 border flex flex-col justify-between transition-shadow duration-300 relative bg-[#FBF8F5]',
                  item.popular
                    ? 'border-olive shadow-hover'
                    : 'border-border-subtle hover:border-olive/40 hover:shadow-hover'
                )}
              >
                {item.popular && (
                  <div className="absolute top-4 right-5 px-3 py-0.5 rounded-full bg-lime-soft text-forest text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-editorial text-2xl text-forest-heading font-semibold">
                      {item.level}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#ECEFE4] text-olive-dark font-medium">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="font-editorial text-3xl sm:text-4xl text-forest font-semibold">
                      {item.currency}
                      {item.price}
                    </span>
                    <span className="text-xs text-muted">/ standard level module</span>
                  </div>

                  <div className="h-[1px] bg-border-subtle my-5" />

                  <ul className="space-y-3 mb-6">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#E5EFCF] text-forest flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-body text-xs sm:text-sm leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onEnroll(item.level)}
                    className="btn-pill w-full py-3 px-5 rounded-full font-medium text-xs sm:text-sm bg-forest hover:bg-forest-dark text-white flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-[0.98]"
                  >
                    <span>Enroll in {item.level}</span>
                    <span>↗</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10 text-xs text-muted">
          Need help deciding between standard and intensive batch options?{' '}
          <a href="#contact" className="text-forest underline font-medium hover:text-forest-dark">
            Ask our team directly
          </a>.
        </div>
      </Container>
    </section>
  );
};
