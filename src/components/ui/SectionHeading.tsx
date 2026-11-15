import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  titleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 mb-3 text-xs md:text-sm font-semibold tracking-wider uppercase text-terracotta',
            align === 'center' ? 'justify-center' : 'justify-start'
          )}
        >
          <span className="w-6 h-[2px] bg-maroon inline-block rounded-full" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={cn(
          'font-editorial text-3xl sm:text-4xl md:text-[44px] leading-[1.18] tracking-tight text-forest-heading text-balance font-normal',
          titleClassName
        )}
      >
        {title}
        {italicWord && (
          <span className="italic text-maroon ml-2 font-normal font-editorial">
            {italicWord}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-body leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
