import About from '@/components/home/About';
import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import HowItWork from '@/components/home/HowItWork';
import Services from '@/components/home/Services';
import WhatWeDo from '@/components/home/WhatWeDo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Insure | Crowd-Underwritten Trade Insurance',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Insure | Crowd-Underwritten Trade Insurance',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Insure | Crowd-Underwritten Trade Insurance',
    images: ['/images/og-image.png'],
  },
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Clients />
      <WhatWeDo />
      <About />
      <Services />
      <HowItWork />
      <CTA />
    </main>
  );
};

export default page;
