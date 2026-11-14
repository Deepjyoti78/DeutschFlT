export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'interactive-lessons',
    iconName: 'Sparkles',
    title: 'Interactive Lessons',
    description: 'Structured lessons designed to make learning simple, immersive, and engaging.',
  },
  {
    id: 'vocabulary-builder',
    iconName: 'BookOpen',
    title: 'Vocabulary Builder',
    description: 'Reinforce high-frequency vocabulary through contextual usage and active recall.',
  },
  {
    id: 'grammar-practice',
    iconName: 'FileCheck',
    title: 'Grammar Practice',
    description: 'Understand essential grammar patterns through clear explanations and practical exercises.',
  },
  {
    id: 'speaking-exercises',
    iconName: 'Mic',
    title: 'Speaking Exercises',
    description: 'Build pronunciation, fluency, and spoken confidence through guided conversation drills.',
  },
  {
    id: 'progress-tracking',
    iconName: 'TrendingUp',
    title: 'Progress Tracking',
    description: 'Gain clear visibility into competencies mastered and pinpoint areas for improvement.',
  },
  {
    id: 'mock-exams',
    iconName: 'Award',
    title: 'Mock Exams',
    description: 'Practice exam-style questions timed for Goethe, ÖSD, and TestDaF preparation.',
  },
  {
    id: 'live-tutoring',
    iconName: 'Users',
    title: 'Live Tutoring',
    description: 'Receive focused personal support, pronunciation corrections, and individualized coaching.',
  },
  {
    id: 'completion-certificates',
    iconName: 'ShieldCheck',
    title: 'Completion Certificates',
    description: 'Document your course completion and CEFR level study hours with official records.',
  },
];

export interface AudienceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export const AUDIENCE_DATA: AudienceItem[] = [
  {
    id: 'speaking',
    iconName: 'Mic',
    title: 'Speaking',
    description: 'You want to speak German confidently in everyday situations, not just memorize grammar rules.',
  },
  {
    id: 'vocabulary',
    iconName: 'BookOpen',
    title: 'Vocabulary',
    description: 'You want to expand your vocabulary and communicate more naturally with native German speakers.',
  },
  {
    id: 'career',
    iconName: 'Briefcase',
    title: 'Career',
    description: "You're preparing for German-language job interviews, workplace communication, and professional roles.",
  },
  {
    id: 'growth',
    iconName: 'TrendingUp',
    title: 'Growth',
    description: "You're planning to study, work, or relocate to Germany and want to make meaningful, steady progress.",
  },
];

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export const JOURNEY_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Discover Your Level',
    description: 'Begin with a placement assessment to understand your current German proficiency and learning goals.',
  },
  {
    step: '02',
    title: 'Follow Your Learning Path',
    description: 'Study through structured lessons covering vocabulary, grammar, reading, listening, writing, and speaking.',
  },
  {
    step: '03',
    title: 'Practice Consistently',
    description: 'Strengthen your skills with guided exercises, regular revision, and active speaking practice.',
  },
  {
    step: '04',
    title: 'Prepare for Your Exam',
    description: 'Develop familiarity with common exam formats and improve your test-taking skills through focused preparation.',
  },
  {
    step: '05',
    title: 'Move Forward with Confidence',
    description: 'Complete your learning journey, review your progress, and prepare for your next language milestone in Europe.',
  },
];

export const TRANSFORMATION_DATA = {
  eyebrow: 'YOUR LANGUAGE TRANSFORMATION',
  heading: 'From Hesitation to Confidence.',
  subtitle: 'Discover what changes when you stop memorizing German and start speaking it.',
  before: {
    badge: 'Vorher — Before',
    points: [
      'You memorize vocabulary, but struggle to remember words during real conversations.',
      'You understand German shows with subtitles, but feel stuck when trying to respond.',
      'You formulate sentences slowly while conversations move ahead without you.',
      'You repeatedly rely on the same basic expressions instead of using richer vocabulary.',
      'Your German progress feels stagnant despite months of learning apps and videos.',
      'You hesitate when speaking because you constantly worry about making grammar mistakes.',
    ],
  },
  after: {
    badge: 'Nachher — After',
    points: [
      'You recall vocabulary more naturally in spontaneous conversations.',
      'You speak with greater confidence without mentally rehearsing every sentence.',
      'Your speech becomes smoother, more rhythmic, and naturally paced.',
      'You express yourself using a wider range of vocabulary and sentence structures.',
      'You follow a clear learning plan and recognize steady, measurable progress.',
      'You communicate ideas confidently in everyday, academic, and professional situations.',
    ],
  },
};

export const SITE_CONFIG = {
  brandName: 'DeutschFIT',
  founderName: 'Utkal Das',
  founderTitle: 'Founder of DeutschFIT | German Language Trainer & Coach',
  founderCopy:
    'Helping learners develop practical German communication skills through structured coaching, focused speaking practice, and personalized guidance.',
  email: 'utkaldasdeutchland@gmail.com',
  phone: '+916000870481',
  phoneDisplay: '+91 60008 70481',
};
