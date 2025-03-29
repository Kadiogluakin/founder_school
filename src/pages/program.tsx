import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import ProgramDetails from '@/components/ProgramDetails';
// import Benefits from '@/components/Benefits'; // Remove Benefits import
import FocusAreas from '@/components/FocusAreas';

export default function ProgramPage() {
  return (
    <Layout>
      <Head>
        <title>Program Details | Founder School</title>
        <meta name="description" content="Learn about the Founder School program structure, modules, benefits, and focus areas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <ProgramDetails />
      {/* <Benefits /> */} {/* Removed Benefits component instance */}
      <FocusAreas />
    </Layout>
  );
} 