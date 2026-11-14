'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Transformation } from '@/components/home/Transformation';
import { FounderSection } from '@/components/home/FounderSection';
import { TargetAudience } from '@/components/home/TargetAudience';
import { Features } from '@/components/home/Features';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Courses } from '@/components/home/Courses';
import { Pricing } from '@/components/home/Pricing';
import { FAQ } from '@/components/home/FAQ';
import { Contact } from '@/components/home/Contact';
import { Footer } from '@/components/layout/Footer';
import { EnrollmentModal } from '@/components/ui/EnrollmentModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('A1.1');
  const [isMiniLesson, setIsMiniLesson] = useState(false);

  const handleOpenMiniLesson = () => {
    setIsMiniLesson(true);
    setSelectedLevel('A1.1');
    setModalOpen(true);
  };

  const handleOpenCourseTier = (levelCode: string) => {
    setIsMiniLesson(false);
    if (levelCode.includes('A1')) setSelectedLevel('A1.1');
    else if (levelCode.includes('B1')) setSelectedLevel('B1.1');
    else if (levelCode.includes('C1')) setSelectedLevel('C1.1');
    else setSelectedLevel('A1.1');
    setModalOpen(true);
  };

  const handleEnrollLevel = (level: string) => {
    setIsMiniLesson(false);
    setSelectedLevel(level);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F5] text-body selection:bg-lime/30 selection:text-forest-dark">
      {/* 1. Navbar */}
      <Navbar onOpenBooking={handleOpenMiniLesson} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onOpenBooking={handleOpenMiniLesson} />

        {/* 3. Trust / Credibility Strip */}
        <TrustStrip />

        {/* 4. Why Learn With Us */}
        <WhyChooseUs />

        {/* 5. Before / After Transformation */}
        <Transformation />

        {/* 6. Meet the Founder */}
        <FounderSection onOpenBooking={handleOpenMiniLesson} />

        {/* 7. Who Is This Course For? */}
        <TargetAudience onOpenBooking={handleOpenMiniLesson} />

        {/* 8. Platform Features */}
        <Features />

        {/* 9. How It Works */}
        <HowItWorks onOpenBooking={handleOpenMiniLesson} />

        {/* 10. Courses */}
        <Courses onSelectTier={handleOpenCourseTier} />

        {/* 11. Pricing */}
        <Pricing onEnroll={handleEnrollLevel} />

        {/* 12. FAQ */}
        <FAQ />

        {/* 13. Contact */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Interactive Booking & Enrollment Modal */}
      <EnrollmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialLevel={selectedLevel}
        isMiniLesson={isMiniLesson}
      />
    </div>
  );
}
