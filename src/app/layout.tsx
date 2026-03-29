import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <Navbar />
              {children}
              <Footer />
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
