import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exeter Bike Park',
  description: 'Official website for Exeter Bike Park - Premier mountain biking destination',
  keywords: 'Exeter, Bike Park, Mountain Biking, Cycling, Trails, BMX, Dirt Jumping',
  authors: [{ name: 'Exeter Bike Park' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Exeter Bike Park',
    description: 'Official website for Exeter Bike Park - Premier mountain biking destination',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 500,
        alt: 'Exeter Bike Park Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="pt-16 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
