export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'prior-knowledge',
    question: 'Do I need prior German knowledge to start?',
    answer:
      'Not at all! Our Foundation A1 courses are specifically designed for complete beginners with zero prior experience. We guide you step-by-step through German pronunciation, the alphabet, core vocabulary, and practical conversational foundations.',
  },
  {
    id: 'placement-assessment',
    question: 'How does the placement assessment work?',
    answer:
      'If you have already studied some German, you will complete a friendly 20-minute diagnostic session and conversation with coach Utkal Das. This ensures you are placed in the exact sub-level (e.g. A2.2 or B1.1) matching your active speaking and grammar proficiency.',
  },
  {
    id: 'exams-prep',
    question: 'Which German exams can I prepare for?',
    answer:
      'Our targeted prep modules equip learners for internationally recognized standards including the Goethe-Zertifikat (A1–C2), ÖSD (Österreichisches Sprachdiplom Deutsch), and TestDaF for university entry, aligning with the official CEFR framework.',
  },
  {
    id: 'pace',
    question: 'Can I learn at my own pace?',
    answer:
      'Yes. We offer both structured intensive tracks (for fast-track relocation and exam deadlines) and flexible part-time tracks designed for working professionals and university students who balance other commitments.',
  },
  {
    id: 'free-trial',
    question: 'Is there a free trial or mini lesson?',
    answer:
      'Yes! You can book a complimentary 25-minute 1-on-1 mini lesson. It provides an immediate taste of our communicative coaching style, checks your current level, and outlines your personal learning roadmap.',
  },
  {
    id: 'live-coaching',
    question: 'How do live coaching sessions work?',
    answer:
      'Live coaching happens via interactive video sessions focusing heavily on active dialogue, pronunciation drills, role-play scenarios, and real-time corrections. Session recordings, vocabulary summaries, and exercises are shared after each class.',
  },
  {
    id: 'mobile-access',
    question: 'Can I access my learning materials on mobile?',
    answer:
      'All lesson notes, digital flashcard decks, homework prompts, and vocabulary guides are fully responsive and cloud-accessible on your smartphone, tablet, or laptop anytime.',
  },
  {
    id: 'certificate',
    question: 'What type of certificate do I receive?',
    answer:
      'Upon completing each course tier and passing internal module assessments, you receive a verified DeutschFIT Course Completion Certificate documenting your CEFR level hours. Official language certificates are issued directly by accredited testing bodies (such as Goethe-Institut or ÖSD) following your exam.',
  },
];
