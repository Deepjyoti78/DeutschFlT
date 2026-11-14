'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, CheckCircle, Send, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/data/site';

const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(3, { message: 'Please enter a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    // Real interaction simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F6F5EC]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Information */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-olive-dark">
              <span className="w-6 h-[2px] bg-olive inline-block rounded-full" />
              <span>Get In Touch</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-[42px] leading-tight text-forest-heading mb-4 font-normal">
              Let's Start a <span className="italic text-olive-dark">Conversation.</span>
            </h2>

            <p className="text-body text-base sm:text-lg leading-relaxed mb-8">
              Have questions about German courses, exam preparation, partnerships, or corporate training? We'd love to hear from you.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5EFCF] text-forest flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-semibold">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-forest-heading font-medium hover:text-forest transition-colors text-sm sm:text-base"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5EFCF] text-forest flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-semibold">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-forest-heading font-medium hover:text-forest transition-colors text-sm sm:text-base"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5EFCF] text-forest flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-semibold">
                    Coaching Format
                  </div>
                  <p className="text-forest-heading font-medium text-sm sm:text-base">
                    Online Interactive Batches & 1-on-1 Mentorship (Worldwide)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white/70 border border-border-subtle rounded-2xl">
              <p className="text-xs text-muted leading-relaxed">
                Coach Utkal Das directly reviews all prospective student enquiries. We respond within 24 hours on business days.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FBF8F5] border border-border-subtle rounded-[28px] p-7 sm:p-10 shadow-sm relative">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#E5EFCF] text-forest rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-forest-heading mb-2">
                    Nachricht Gesendet!
                  </h3>
                  <p className="text-body text-sm sm:text-base max-w-md mx-auto mb-6">
                    Thank you for reaching out. Your message has been received and our team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-pill px-6 py-2.5 rounded-full bg-forest text-white text-sm font-medium hover:bg-forest-dark transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-heading mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Rahul Verma"
                        {...register('fullName')}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-forest-heading focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-border-subtle focus:border-forest'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-forest-heading mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@domain.com"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-forest-heading focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-border-subtle focus:border-forest'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-forest-heading mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Enquiry for Goethe B2 Batch or 1-on-1 Coaching"
                      {...register('subject')}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-forest-heading focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-border-subtle focus:border-forest'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-forest-heading mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your learning background, target exam date, and study goals..."
                      {...register('message')}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-forest-heading focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-border-subtle focus:border-forest'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-pill w-full py-3.5 px-6 rounded-full bg-forest hover:bg-forest-dark text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        'Sending Message...'
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span className="text-sm">↗</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-muted">
                    Demo Mode: This form validates inputs with React Hook Form & Zod. To connect live delivery, configure SendGrid, Resend, or your preferred SMTP backend.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
