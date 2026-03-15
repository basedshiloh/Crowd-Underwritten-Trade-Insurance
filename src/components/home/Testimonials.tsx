import avatar10 from '@public/images/ns-avatar-10.png';
import avatar11 from '@public/images/ns-avatar-11.png';
import avatar4 from '@public/images/ns-avatar-4.png';
import avatar5 from '@public/images/ns-avatar-5.png';
import avatar6 from '@public/images/ns-avatar-6.png';
import avatar7 from '@public/images/ns-avatar-7.png';
import avatar8 from '@public/images/ns-avatar-8.png';
import avatar9 from '@public/images/ns-avatar-9.png';
import RevealAnimation from '../animation/RevealAnimation';
import { CustomMarquee } from '../shared/CustomMarquee';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Darrell Steward',
    image: avatar4,
    quote:
      'As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.',
    twitterUrl: 'https://x.com',
  },
  {
    name: 'Sarah Johnson',
    image: avatar5,
    quote:
      "The voice duplication feature is absolutely incredible! I've been able to create professional voiceovers for my content in minutes instead of hours.",
    twitterUrl: 'https://x.com',
  },

  {
    name: 'Michael Chen',
    image: avatar6,
    quote:
      "This technology has revolutionized our podcast production. The quality is so realistic that our listeners can't tell the difference from our original recordings.",
    twitterUrl: 'https://x.com',
  },

  {
    name: 'Emma Rodriguez',
    image: avatar7,
    quote:
      'As a language teacher, this tool has been invaluable for creating pronunciation examples in multiple languages. My students love the natural-sounding voices!',
    twitterUrl: 'https://x.com',
  },

  {
    name: 'David Kim',
    image: avatar8,
    quote:
      "The accuracy and speed of voice generation is mind-blowing. We've reduced our audio production time by 80% while maintaining exceptional quality standards.",
    twitterUrl: 'https://x.com',
  },

  {
    name: 'Lisa Thompson',
    image: avatar9,
    quote:
      'This platform has transformed how we create audiobooks. The voice synthesis is so natural and expressive that our listeners are completely engaged throughout the entire experience.',
    twitterUrl: 'https://x.com',
  },

  {
    name: 'Niklas',
    image: avatar10,
    quote:
      'This platform has transformed how we create audiobooks. The voice synthesis is so natural and expressive that our listeners are completely engaged throughout the entire experience.',
    twitterUrl: 'https://x.com',
  },

  {
    name: 'Diego',
    image: avatar11,
    quote:
      'This platform has transformed how we create audiobooks. The voice synthesis is so natural and expressive that our listeners are completely engaged throughout the entire experience.',
    twitterUrl: 'https://x.com',
  },
];

const Testimonials = () => {
  return (
    <section className="pt-14 pb-17 md:pt-22 md:pb-24 xl:pt-28 xl:pb-44" aria-label="Customer testimonials">
      <div className="main-container">
        <div className="mb-14 text-center md:mb-20">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-4">Testimonials</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">What our users say</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-tagline-1 mx-auto max-w-[300px]">
              Trusted by everyday users and tech enthusiasts worldwide.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.1}>
          <div className="relative z-0 grid h-[100vh] grid-cols-1 items-center justify-center gap-0 gap-x-2 overflow-hidden before:absolute before:-bottom-11 before:left-0 before:z-20 before:h-[256px] before:w-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_67.6%)] after:absolute after:-top-11 after:left-0 after:z-10 after:h-[176px] after:w-full after:bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,#ffffff_67.6%)] md:grid-cols-2 lg:grid-cols-3">
            <div className="block">
              <CustomMarquee vertical={true} pauseOnHover={true} className="[--duration:40s]">
                <div className="space-y-6">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} {...testimonial} />
                  ))}
                </div>
              </CustomMarquee>
            </div>
            <div className="hidden md:block">
              <CustomMarquee vertical={true} reverse pauseOnHover={true} className="[--duration:40s]">
                <div className="space-y-6">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} {...testimonial} />
                  ))}
                </div>
              </CustomMarquee>
            </div>
            <div className="hidden lg:block">
              <CustomMarquee vertical={true} pauseOnHover={true} className="[--duration:40s]">
                <div className="space-y-6">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} {...testimonial} />
                  ))}
                </div>
              </CustomMarquee>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Testimonials;
