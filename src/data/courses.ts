export interface CourseTier {
  id: string;
  name: string;
  levelCode: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  description: string;
  outcomes: string[];
  ctaLabel: string;
  accentBg?: string;
}

export const COURSES_DATA: CourseTier[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    levelCode: 'A1 – A2',
    tagline: 'Build essential German communication skills from day one.',
    description:
      'Start your German journey with pronunciation, essential vocabulary, grammar foundations, and everyday conversations.',
    outcomes: [
      'German pronunciation and alphabet mastery',
      'Core daily vocabulary & polite social interactions',
      'Essential sentence structures and word order',
      'Everyday communication for shopping, directions & greetings',
      'Beginner grammar principles explained with clarity',
      'Guided listening and reading practice with authentic clips',
    ],
    ctaLabel: 'Explore Foundation ↗',
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    levelCode: 'B1 – B2',
    badge: 'Most Popular',
    isPopular: true,
    tagline: 'Achieve conversational fluency and professional independence.',
    description:
      'Build confidence in independent communication, develop stronger grammar, and prepare for academic and professional conversations.',
    outcomes: [
      'Intermediate grammar (Subjunctive II, passive voice, clauses)',
      'Expanded thematic vocabulary for work, university & travel',
      'Guided writing and active conversational speaking practice',
      'Listening comprehension for podcasts, lectures & broadcasts',
      'Professional communication & German workplace etiquette',
      'Targeted B1/B2 exam preparation (Goethe-Zertifikat / ÖSD)',
    ],
    ctaLabel: 'Explore Intermediate ↗',
    accentBg: 'bg-[#FBF1EE] border-maroon/30',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    levelCode: 'C1 – C2',
    tagline: 'Master nuanced expression and academic German precision.',
    description:
      'Refine your language abilities through advanced communication, complex texts, academic writing, and professional expression.',
    outcomes: [
      'Advanced grammatical structures and stylistic nuance',
      'Academic writing, thesis support & analytical essays',
      'Sophisticated idiomatic vocabulary and rhetorical skills',
      'Professional presentation skills and debate techniques',
      'High-level listening comprehension of academic lectures',
      'Advanced exam preparation for TestDaF, Goethe C1 & C2',
    ],
    ctaLabel: 'Explore Advanced ↗',
  },
];
