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
  title: 'Crowd-Underwritten Trade Insurance',
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
