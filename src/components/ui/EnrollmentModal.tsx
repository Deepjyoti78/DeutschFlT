'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import { PRICING_DATA } from '@/data/pricing';
import { cn } from '@/lib/utils';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLevel?: string;
  isMiniLesson?: boolean;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialLevel,
  isMiniLesson = false,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string>(
    initialLevel || 'A1.1'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const currentPlan = PRICING_DATA.find((p) => p.level === selectedLevel) || PRICING_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate seamless booking
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-dark/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto no-scrollbar bg-[#FBF8F5] border border-border-subtle rounded-3xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-muted hover:text-forest-dark hover:bg-forest/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-lime-soft text-forest rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9 text-forest" />
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-forest-heading mb-2">
              {isMiniLesson ? 'Vielen Dank! Mini Lesson Booked' : 'Anmeldung Erhalten!'}
            </h3>
            <p className="text-body text-sm sm:text-base leading-relaxed mb-6">
              Thank you, <strong className="text-forest-dark">{name}</strong>. Coach Utkal Das will reach out to you at <strong className="text-forest-dark">{email}</strong> within 24 hours with your preparation materials and meeting link.
            </p>
            <div className="p-4 bg-bg-cream rounded-2xl border border-border-subtle mb-6 text-left text-xs text-muted">
              <p className="font-semibold text-forest mb-1">
                {isMiniLesson ? 'Complimentary 25-min 1-on-1 Session' : `Selected Course: ${currentPlan.level} — ${currentPlan.category}`}
              </p>
              <p>Direct Coach Contact: utkaldasdeutchland@gmail.com | +91 60008 70481</p>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 px-6 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-soft text-forest text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                {isMiniLesson ? 'Free 25-Min Trial' : 'Course Enrollment'}
              </span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl text-forest-heading mb-1">
              {isMiniLesson ? 'Book Your Free Mini Lesson' : 'Begin Your German Coaching'}
            </h3>
            <p className="text-body text-xs sm:text-sm mb-6">
              {isMiniLesson
                ? 'Experience personal coaching with Utkal Das and get your tailored language roadmap.'
                : 'Select your level and submit your details to receive schedule and enrollment confirmation.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isMiniLesson && (
                <div>
                  <label className="block text-xs font-semibold text-forest-heading uppercase tracking-wider mb-1.5">
                    Select Target Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-border-subtle text-forest-heading text-sm focus:outline-none focus:border-forest"
                  >
                    {PRICING_DATA.map((plan) => (
                      <option key={plan.id} value={plan.level}>
                        {plan.level} ({plan.category}) — {plan.currency}{plan.price}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-forest-heading uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-border-subtle text-forest-heading text-sm focus:outline-none focus:border-forest"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-forest-heading uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-border-subtle text-forest-heading text-sm focus:outline-none focus:border-forest"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-forest-heading uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-border-subtle text-forest-heading text-sm focus:outline-none focus:border-forest"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-forest-heading uppercase tracking-wider mb-1.5">
                  Your German Goal (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Master's in Munich, Goethe B2 prep, or work relocation..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-border-subtle text-forest-heading text-sm focus:outline-none focus:border-forest resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
                >
                  {loading ? (
                    'Processing...'
                  ) : isMiniLesson ? (
                    'Confirm Free Mini Lesson ↗'
                  ) : (
                    `Complete Enrollment (${currentPlan.currency}${currentPlan.price}) ↗`
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-muted">
                No automatic charges. We confirm session times personally with you before payment.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
