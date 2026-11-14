import React from 'react';
import { Container } from '@/components/ui/Container';

export const TrustStrip: React.FC = () => {
  const standards = [
    { label: 'Goethe-Institut', desc: 'Exam Alignment' },
    { label: 'ÖSD', desc: 'Austrian Diploma' },
    { label: 'TestDaF', desc: 'University Admission' },
    { label: 'German Universities', desc: 'Academic Pathways' },
    { label: 'CEFR-aligned Learning', desc: 'A1 to C2 Framework' },
  ];

  return (
    <section className="py-8 sm:py-10 border-y border-border-subtle/80 bg-[#FBF8F5]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="text-center lg:text-left shrink-0">
            <span className="text-xs uppercase tracking-widest font-semibold text-muted">
              PREPARING LEARNERS FOR OPPORTUNITIES WITH
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 gap-y-4 text-center">
            {standards.map((item, idx) => (
              <React.Fragment key={item.label}>
                <div className="flex flex-col items-center sm:items-start group">
                  <span className="font-editorial text-lg sm:text-xl font-normal text-forest-heading/85 group-hover:text-forest transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-muted font-medium">
                    {item.desc}
                  </span>
                </div>
                {idx < standards.length - 1 && (
                  <span
                    className="hidden sm:inline-block w-[1px] h-6 bg-border-strong/40 self-center"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
