import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import '../app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Developer Portfolio 2025 | Full-Stack & AI Developer',
  description: 'Portfolio professionale di uno sviluppatore full-stack con focus su AI, cloud e tecnologie moderne',
  keywords: ['developer', 'portfolio', 'full-stack', 'AI', 'cloud', 'React', 'TypeScript', 'Next.js'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    title: 'Developer Portfolio 2025',
    description: 'Portfolio professionale full-stack developer',
    siteName: 'Developer Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <SmoothScroll>
            <PageTransition>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </PageTransition>
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
