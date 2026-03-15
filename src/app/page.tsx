import About from '@/components/home/About';
import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';
import FAQ from '@/components/home/FAQ';
import Gadgets from '@/components/home/Gadgets';
import Hero from '@/components/home/Hero';
import HowItWork from '@/components/home/HowItWork';
import Pricing from '@/components/home/Pricing';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import WhatWeDo from '@/components/home/WhatWeDo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Gadgets || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Clients />
      <WhatWeDo />
      <Gadgets />
      <About />
      <Services />
      <HowItWork />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
};

export default page;
