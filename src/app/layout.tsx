import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://deutschfit.com'),
  title: 'DeutschFIT | Premium German Language Coaching by Utkal Das',
  description:
    'Personalized German coaching designed to help you speak confidently, prepare for Goethe, ÖSD, and TestDaF exams, and unlock exciting education and career opportunities in Europe.',
  keywords: [
    'German coaching',
    'Learn German online',
    'Goethe Zertifikat preparation',
    'TestDaF prep',
    'ÖSD German',
    'Utkal Das German tutor',
    'DeutschFIT',
    'German speaking practice',
  ],
  authors: [{ name: 'Utkal Das' }],
  openGraph: {
    title: 'DeutschFIT | Learn German, Open Opportunities in Europe',
    description:
      'Personalized German coaching designed to help you speak confidently, prepare for exams, and unlock education and career opportunities in Germany and beyond.',
    url: 'https://deutschfit.com',
    siteName: 'DeutschFIT',
    images: [
      {
        url: '/images/master-reference.jpg',
        width: 1200,
        height: 630,
        alt: 'DeutschFIT German Coaching',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23B9D348'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='50' font-weight='bold' fill='%23123E27'>D!</text></svg>" />
      </head>
      <body className="bg-[#FBF8F5] text-body antialiased selection:bg-lime/30 selection:text-forest-dark">
        {children}
      </body>
    </html>
  );
}
