import gadgetProductivity from '@public/images/ns-img-331.png';
import ellipse1 from '@public/images/ns-img-332.png';
import ellipse2 from '@public/images/ns-img-333.png';
import ellipse3 from '@public/images/ns-img-334.png';
import gadgetGraph from '@public/images/ns-img-335.png';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Gadgets = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-background-12 mx-auto max-w-[1880px] rounded-3xl py-12 md:rounded-4xl md:px-5 md:py-24 xl:py-28">
        <div className="main-container 2xl:!max-w-[1440px]">
          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {/* Grid 1 */}
            <RevealAnimation delay={0.1}>
              <div className="flex flex-col justify-between rounded-2xl bg-white p-8 md:col-span-2 lg:col-span-1 lg:row-span-4">
                <div className="space-y-6">
                  <div>
                    <h6 className="text-secondary/60 dark:text-accent/60">Premium gadget access</h6>
                    <p className="text-secondary/40 dark:text-accent/40 text-tagline-2">
                      Unlock exclusive device upgrades
                    </p>
                  </div>
                  <h5 className="flex flex-wrap items-center 2xl:flex-nowrap">
                    <span className="font-inherit mr-1 text-inherit"> $00.00 – </span>
                    <NumberAnimation
                      number={50000}
                      speed={1500}
                      interval={190}
                      rooms={5}
                      heightSpaceRatio={2.5}
                      className="font-inherit text-inherit"></NumberAnimation>
                    <span className="font-inherit text-inherit"> .00 USD </span>
                  </h5>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="item-center border-stroke-1 flex justify-between rounded-[100px] border px-4 py-[15px]">
                      <span className="text-tagline-3">Smart Home</span>
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="#1A1A1C"
                          strokeOpacity="0.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="item-center border-stroke-1 flex justify-between rounded-[100px] border px-4 py-[15px]">
                      <span className="text-tagline-3">LifeStyle</span>
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="#1A1A1C"
                          strokeOpacity="0.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full">
                    <LinkButton
                      href="/login"
                      className="!w-full"
                      btnClass="btn-xl-v2 !w-full btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                      Get started free
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 2 */}
            <RevealAnimation delay={0.2}>
              <div className="item-center flex flex-col justify-center rounded-2xl bg-linear-[180deg,#A585FF_0%,#FFC2AD_100%] p-8 lg:col-span-1 lg:row-span-1">
                <div className="text-center">
                  <h5 className="text-white">Your AI Device Balance</h5>
                  <h3 className="flex items-center justify-center text-white">
                    <NumberAnimation
                      number={35900}
                      speed={1500}
                      interval={190}
                      rooms={5}
                      heightSpaceRatio={2}
                      className="font-inherit text-inherit"></NumberAnimation>
                    <span className="font-inherit text-inherit">.50</span>
                  </h3>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 3 */}
            <RevealAnimation delay={0.3}>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 lg:col-span-1 lg:row-span-1">
                <div className="relative z-0 flex size-[172px] flex-col items-center justify-center overflow-hidden rounded-full">
                  <figure className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-1/2">
                    <Image src={gadgetProductivity} alt="gadget-productivity" />
                  </figure>
                  <div className="text-center">
                    <h5 className="flex items-center justify-center">
                      <NumberAnimation
                        number={60}
                        speed={1500}
                        interval={150}
                        rooms={2}
                        className="font-inherit text-inherit"></NumberAnimation>
                      %
                    </h5>
                    <p className="text-secondary/60 text-tagline-3">Productivity</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 4 */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 md:col-span-2 lg:col-span-1 lg:row-span-3 lg:min-h-[361px]">
                <div className="text-center">
                  <h5>&quot;Track your AI gadgets in real-time with clear insights&quot;</h5>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 5 (center wide card) */}
            <RevealAnimation delay={0.5} start="top 98%">
              <div className="flex flex-col justify-center rounded-2xl bg-white p-8 md:col-span-3 lg:col-span-2 lg:row-span-6 lg:min-h-[452px]">
                <div className="space-y-6 text-center">
                  <figure className="mx-auto hidden lg:block lg:max-w-[198px]">
                    <Image src={mainLogo} alt="NextSaaS" className="dark:invert" />
                  </figure>
                  <div>
                    <h2>
                      Smart Gadgets,
                      <br className="hidden lg:block" />
                      Powered by AI
                    </h2>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 6 */}
            <RevealAnimation delay={0.1} start="top 97%">
              <div className="bg-secondary flex flex-col items-center justify-center rounded-2xl p-8 lg:col-span-1 lg:row-span-2 lg:min-h-[226px]">
                <div className="text-center">
                  <h5 className="text-white">AI-Powered Gadget platform</h5>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 7 */}
            <RevealAnimation delay={0.1} start="top 95%">
              <div className="flex flex-col justify-between rounded-2xl bg-white p-8 md:col-span-2 lg:col-span-1 lg:row-span-4">
                <div className="text-center">
                  <p className="text-secondary/60">Insights</p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center max-[375px]:flex-col">
                    <div className="flex items-center -space-x-3.5">
                      <RevealAnimation delay={0.2} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="bg-ns-green relative z-30 inline-block size-13 rounded-full ring-2 ring-white dark:ring-black"
                            src={ellipse1}
                            alt="Avatar 1"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.3} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="bg-ns-green relative z-20 inline-block size-15 rounded-full ring-2 ring-white dark:ring-black"
                            src={ellipse2}
                            alt="Avatar 2"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.4} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="bg-ns-green relative z-10 inline-block size-13 rounded-full ring-2 ring-white dark:ring-black"
                            src={ellipse3}
                            alt="Avatar 3"
                          />
                        </figure>
                      </RevealAnimation>
                    </div>
                  </div>
                  <h5>Smarter, Faster, AI-Powered Gadgets</h5>
                </div>
                <div className="text-center">
                  <p className="text-secondary/60">2025</p>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 8 */}
            <RevealAnimation delay={0.3} start="top 80%">
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 lg:col-span-1 lg:row-span-3 lg:min-h-[361px]">
                <div className="text-center">
                  <h5>Award-winning AI gadget ecosystem</h5>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 9 */}
            <RevealAnimation delay={0.2} start="top 96%">
              <div className="flex flex-col space-y-8 rounded-2xl bg-white p-8 lg:col-span-1 lg:row-span-1">
                <div className="flex items-center justify-between">
                  <p className="text-tagline-1 text-secondary font-medium">AI Device Health</p>
                  <p className="text-secondary/60 text-tagline-3">92%</p>
                </div>
                <figure>
                  <Image src={gadgetGraph} alt="gadget-chart" />
                </figure>
              </div>
            </RevealAnimation>
            {/* Grid 10 */}
            <RevealAnimation delay={0.3} start="top 96%">
              <div className="flex flex-col items-center justify-center space-y-8 rounded-2xl bg-white p-8 lg:col-span-1 lg:row-span-1">
                <div className="w-full space-y-2 text-center">
                  <div className="bg-primary-500 mx-auto max-w-[240x] rounded-full px-5 py-3.5 text-center">
                    <p className="text-tagline-2 text-accent">Total saved</p>
                  </div>
                  <div>
                    <h4 className="flex items-center justify-center text-black md:flex-wrap 2xl:flex-nowrap">
                      <NumberAnimation
                        number={100333}
                        speed={1500}
                        interval={190}
                        rooms={6}
                        heightSpaceRatio={2}
                        className="font-inherit text-inherit"></NumberAnimation>
                      <span className="font-inherit text-inherit">.50 $</span>
                    </h4>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="bg-ns-yellow flex size-[18px] items-center justify-center rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14" fill="none">
                        <path
                          d="M0.673696 7.00446C0.776925 7.11477 0.918664 7.17963 1.06849 7.1851C1.2291 7.18812 1.38357 7.12258 1.49425 7.00446L5.90667 2.52753V12.9109C5.91084 13.2345 6.16835 13.4958 6.48725 13.5C6.80616 13.4958 7.06367 13.2345 7.06784 12.9109V2.52752L11.4803 7.00446C11.6282 7.15879 11.8461 7.22131 12.0518 7.16846C12.2575 7.11562 12.4198 6.95544 12.4776 6.74826C12.5353 6.54108 12.4797 6.31838 12.3318 6.16405L6.91302 0.666063C6.68303 0.444646 6.32245 0.444646 6.09246 0.666063L0.673696 6.16405C0.562587 6.27481 0.5 6.42622 0.5 6.58425C0.5 6.74229 0.562587 6.8937 0.673696 7.00446Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <p className="text-tagline-2">234.45%</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Gadgets.displayName = 'Gadgets';
export default Gadgets;
