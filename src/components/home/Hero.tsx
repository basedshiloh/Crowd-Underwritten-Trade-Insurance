import HeroBanner from '@public/images/ns-img-330.png';
import GradientOne from '@public/images/ns-img-540.png';
import GradientTwo from '@public/images/ns-img-541.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Hero = () => {
  return (
    <section className="relative z-0 overflow-hidden bg-black pt-46 md:pt-[220px]">
      <RevealAnimation delay={0.3} direction="up" offset={100} instant>
        <figure className="absolute top-0 left-0 -z-10">
          <Image src={GradientOne} alt="hero-gradient" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.3} direction="up" offset={100} instant>
        <figure className="absolute top-0 right-0 -z-10">
          <Image src={GradientTwo} alt="hero-gradient" />
        </figure>
      </RevealAnimation>
      <div className="main-container relative z-30">
        <div className="mb-16 text-center md:mb-24 lg:mb-40">
          <RevealAnimation delay={0.1}>
            <h1 className="text-accent mb-3 font-medium">Smarter living starts here</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-accent/60 mx-auto mb-7 max-w-[500px] md:mb-10 lg:mb-14">
              Discover the next generation of AI-powered gadgets that make life faster, easier, and effortlessly
              connected.
            </p>
          </RevealAnimation>
          <ul className="flex flex-col items-center justify-center gap-x-4 gap-y-3 md:flex-row md:gap-y-0">
            <RevealAnimation delay={0.4} direction="left" offset={50} instant>
              <div>
                <LinkButton
                  href="services"
                  btnClass="btn-xl-v2 !border-0 btn-secondary-v2 group-hover/btn-v2:btn-gray-v2">
                  Explore products
                </LinkButton>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={50} instant>
              <div>
                <LinkButton href="/signup" btnClass="btn-xl-v2 !border-0 btn-gray-v2 group-hover/btn-v2:btn-primary-v2">
                  Get started free
                </LinkButton>
              </div>
            </RevealAnimation>
          </ul>
        </div>
        {/* banner */}
        <RevealAnimation delay={0.4}>
          <figure className="mx-auto max-w-[550px] overflow-hidden rounded-3xl">
            <Image src={HeroBanner} alt="Hero banner" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
