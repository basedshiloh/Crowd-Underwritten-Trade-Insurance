import aboutImage from '@public/images/ns-img-338.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const About = () => {
  return (
    <section className="overflow-x-hidden py-18 md:py-28">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-y-20 md:grid-cols-2 lg:gap-x-10 xl:gap-x-20">
          <div className="order-1">
            <RevealAnimation delay={0.1} direction="left">
              <span className="badge badge-gray-light-v2 mb-5">About</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="left">
              <h2 className="mb-3">
                Insurance by the crowd, <br className="hidden lg:block" />
                not a central pool
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="left">
              <p className="mb-8 md:mb-12 lg:mb-8">
                Traders request SOL coverage for risky token trades. Underwriters stake SOL to back them—no single treasury. You must hold a tiered amount of the governance token to participate: higher coverage means a higher hold
                requirement. Survival is decided by market cap at resolution vs placement. If the token survives, underwriters earn the premium; if it rugs, coverage is paid from staked SOL.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left">
              <div className="inline-block w-full list-none md:w-auto">
                <LinkButton href="/request" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                  Request coverage
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.2} direction="right" useSpring={true} duration={2.4}>
            <div className="order-2 overflow-hidden rounded-[20px]">
              <figure className="overflow-hidden rounded-[20px] transition-all duration-300 ease-in-out hover:scale-105">
                <Image src={aboutImage} alt="about image" className="h-full w-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

About.displayName = 'About';
export default About;
