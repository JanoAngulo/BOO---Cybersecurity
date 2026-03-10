import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DetailedServices } from './components/DetailedServices';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-[#e2b331] selection:text-white">
        <Header />
        <main>
          <Hero />
          <div className="relative">
            {/* Override Features component background to be transparent so the image shows through */}
            <div className="relative z-10 [&>section]:!bg-transparent dark:[&>section]:!bg-transparent">
              <Features />
            </div>
          </div>
          <DetailedServices />
          <About />
          <Pricing />
          <div className="relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e2b331]/30 to-transparent"></div>
            <div className="[&>section]:!bg-transparent">
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
