import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Program from '@/components/Program';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Sponsors from '@/components/Sponsors';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Founder School | From Idea to Execution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Hero />
      <Program />
      <Benefits />
      <Testimonials />
      <CTA />
      <Sponsors />
    </Layout>
  );
} 