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
                Where bold ideas <br className="hidden lg:block" />
                come to life
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="left">
              <p className="mb-8 md:mb-12 lg:mb-8">
                At our creative agency, we specialize in bringing bold ideas to life. We believe that creativity is the
                key to connecting brands with their audiences in meaningful ways. Our team of talented designers,
                strategists, and storytellers work collaboratively to
                <br className="hidden lg:block" />
                <br className="hidden lg:block" />
                craft unique campaigns that resonate and inspire. Whether it’s branding, digital marketing, or content
                creation, we approach every project with fresh perspectives and a passion for innovation. We don’t just
                follow trends; we set them, ensuring that our clients stand out in a crowded marketplace. Let us help
                you tell your story and make a lasting impact.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left">
              <div className="inline-block w-full list-none md:w-auto">
                <LinkButton href="/about" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                  Explore more
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
