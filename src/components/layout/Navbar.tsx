'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Why Learn German?', href: '#why-german' },
    { label: 'Courses', href: '#courses' },
    { label: 'About Us', href: '#about' },
    { label: 'Resources', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-[#FBF8F5]/95 backdrop-blur-md shadow-sm border-b border-border-subtle py-3'
          : 'bg-[#FBF8F5] border-b border-border-subtle/60 py-4 sm:py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo - Master Reference Style */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer select-none"
            aria-label="DeutschFIT Home"
          >
            <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center font-bold text-forest-dark text-sm tracking-tight shadow-sm transition-transform duration-200 group-hover:scale-105">
              D!
            </div>
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-forest-heading">
              Deutsch<span className="font-normal text-forest">FIT</span>
            </span>
          </Link>

          {/* Desktop Nav Links (Visible on Large Screens) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-forest-heading/85">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-forest transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-olive after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA (Visible on Tablet & Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="btn-pill inline-flex items-center justify-center text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full bg-forest hover:bg-forest-dark text-white shadow-sm transition-all duration-200"
            >
              <span>Book a Free Mini Lesson</span>
              <span className="ml-1 text-xs">↗</span>
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-forest-heading hover:bg-forest/5 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border-subtle bg-[#FBF8F5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-base font-medium text-forest-heading hover:bg-forest/5 rounded-xl transition-colors active:bg-forest/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border-subtle">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-5 rounded-full bg-forest text-white font-medium text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
              >
                <span>Book a Free Mini Lesson</span>
                <span>↗</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
