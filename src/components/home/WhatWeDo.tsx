'use client';

import { useWordAnimation } from '@/hooks/useWordAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const WhatWeDo = () => {
  const { titleRef } = useWordAnimation();
  return (
    <section className="mb-10 max-[1920px]:px-5">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-12 mx-auto max-w-[1880px] rounded-3xl md:rounded-4xl md:px-5 lg:py-24 xl:py-28">
          <div className="main-container mx-auto max-w-[1400px] py-16 md:py-30">
            <h2
              ref={titleRef}
              className="split-text-team-title text-secondary font-inter-tight text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-2 xl:text-heading-1 text-center font-light wrap-break-word 2xl:text-[88px] 2xl:leading-[120%]">
              Our AI speaker gadget is designed to bring the future of smart home technology into your hands. Powered by
              advanced artificial intelligence.
            </h2>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

WhatWeDo.displayName = 'WhatWeDo';
export default WhatWeDo;
