export interface PricingItem {
  id: string;
  level: string; // e.g. "A1.1"
  group: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: string; // e.g. "Beginner I"
  price: number;
  currency: string;
  popular?: boolean;
  features: string[];
}

export const PRICING_DATA: PricingItem[] = [
  {
    id: 'a1-1',
    level: 'A1.1',
    group: 'A1',
    category: 'Beginner I',
    price: 500,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'a1-2',
    level: 'A1.2',
    group: 'A1',
    category: 'Beginner II',
    price: 550,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'a2-1',
    level: 'A2.1',
    group: 'A2',
    category: 'Elementary I',
    price: 600,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'a2-2',
    level: 'A2.2',
    group: 'A2',
    category: 'Elementary II',
    price: 650,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'b1-1',
    level: 'B1.1',
    group: 'B1',
    category: 'Intermediate I',
    price: 700,
    currency: '€',
    popular: true,
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'b1-2',
    level: 'B1.2',
    group: 'B1',
    category: 'Intermediate II',
    price: 750,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'b2-1',
    level: 'B2.1',
    group: 'B2',
    category: 'Upper Intermediate I',
    price: 800,
    currency: '€',
    popular: true,
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'b2-2',
    level: 'B2.2',
    group: 'B2',
    category: 'Upper Intermediate II',
    price: 850,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'c1-1',
    level: 'C1.1',
    group: 'C1',
    category: 'Advanced I',
    price: 900,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'c1-2',
    level: 'C1.2',
    group: 'C1',
    category: 'Advanced II',
    price: 950,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'c2-1',
    level: 'C2.1',
    group: 'C2',
    category: 'Mastery I',
    price: 1000,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
  {
    id: 'c2-2',
    level: 'C2.2',
    group: 'C2',
    category: 'Mastery II',
    price: 1050,
    currency: '€',
    features: [
      'Complete structured curriculum',
      'Guided speaking practice',
      'Learning support & feedback',
      'Course completion documentation',
    ],
  },
];
