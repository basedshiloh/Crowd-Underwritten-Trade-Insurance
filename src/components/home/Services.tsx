import serviceBg from '@public/images/ns-img-328.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: 'ns-shape-47',
    title: 'Smart Integration',
    description: 'Seamlessly connect your gadgets with one hub, from voice assistants to home devices.',
    delay: 0.4,
  },
  {
    id: 2,
    icon: 'ns-shape-12',
    title: 'AI Automation',
    description: 'Let artificial intelligence handle routine tasks and optimize your daily workflows automatically.',
    delay: 0.5,
  },
  {
    id: 3,
    icon: 'ns-shape-8',
    title: 'Real-time Monitoring',
    description: 'Track your devices and get instant insights with comprehensive real-time monitoring.',
    delay: 0.6,
  },
  {
    id: 4,
    icon: 'ns-shape-3',
    title: 'Voice Control',
    description: 'Control all your connected devices with simple voice commands and natural language.',
    delay: 0.7,
  },
  {
    id: 5,
    icon: 'ns-shape-52',
    title: 'Energy Management',
    description: 'Optimize energy consumption across all devices with intelligent power management.',
    delay: 0.8,
  },
  {
    id: 6,
    icon: 'ns-shape-35',
    title: 'Security & Privacy',
    description: 'Advanced encryption and privacy controls to keep your smart home data secure.',
    delay: 0.9,
  },
];
const Services = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-secondary relative mx-auto max-w-[1880px] overflow-hidden rounded-3xl py-25 md:rounded-4xl md:px-5 xl:py-28">
        <RevealAnimation delay={0.4}>
          <figure className="absolute right-0 bottom-0 h-full w-full">
            <Image src={serviceBg} alt="service bg" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
        <div className="main-container mb-13">
          <div className="mb-19 text-center lg:mx-auto lg:max-w-[730px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-white !text-secondary !text-tagline-2 mb-5 font-medium">services</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-accent mb-3">Our smart AI services</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent/60 lg:mx-auto lg:max-w-[420px]">
                Everything you need to connect, control, and simplify life powered by intelligent AI.
              </p>
            </RevealAnimation>
          </div>
          {/* services cards */}
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {servicesData.map((service) => (
              <RevealAnimation key={service.id} delay={service.delay}>
                <article className="flex flex-col items-center justify-center space-y-8 p-6 text-center lg:p-9 xl:p-11">
                  <div className="">
                    <span className={`${service.icon} text-accent text-[52px]`} />
                  </div>
                  <div className="max-w-[322px] space-y-2">
                    <h5 className="text-white">{service.title}</h5>
                    <p className="text-tagline-1 text-accent/60">{service.description}</p>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
        <RevealAnimation delay={1}>
          <div className="mx-auto flex w-[90%] items-center justify-center md:w-auto">
            <LinkButton
              href="/services"
              btnClass="btn-xl-v2 btn-v2-white !border-0 group-hover/btn-v2:btn-secondary-v2">
              See all services
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
