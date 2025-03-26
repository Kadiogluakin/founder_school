import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Program from '@/components/Program';
import Benefits from '@/components/Benefits';
import FocusAreas from '@/components/FocusAreas';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Founder School | From Idea to Execution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <Header />
        <Hero />
        <Program />
        <Benefits />
        <FocusAreas />
        <CTA />
        <Footer />
      </main>
    </>
  );
} 