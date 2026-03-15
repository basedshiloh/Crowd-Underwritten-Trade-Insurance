'use client';

import { CheckIcon } from '@/icons';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="max-[1920px]:px-5">
      <RevealAnimation delay={0.2}>
        <div className="bg-background-12 mx-auto max-w-[1880px] rounded-3xl py-25 md:rounded-4xl md:px-5 lg:py-39">
          <div className="main-container flex flex-col gap-[70px]">
            <div className="flex flex-col items-center text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-secondary mb-5 max-[426px]:mb-3">Our Pricing</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="mx-auto mb-8 max-w-[650px] max-[426px]:max-w-[320px]">Simple, Transparent Pricing</h2>
              </RevealAnimation>
              <div className="relative z-0">
                <RevealAnimation delay={0.5} direction="up" offset={150} useSpring={true} duration={2.5}>
                  <span className="bg-ns-green dark:bg-ns-green text-secondary dark:text-secondary text-tagline-2 absolute -top-2.5 -right-6 z-11 inline-block w-[90px] rotate-[20deg] rounded-[36px] px-3.5 py-1.5 font-normal capitalize shadow-xs">
                    save 40%
                  </span>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <label className="dark:bg-background-9 relative z-[10] inline-flex cursor-pointer items-center rounded-full bg-white px-[57px] py-6 max-[426px]:px-10 max-[426px]:py-4">
                    <span className="text-tagline-1 max-[426px]:text-tagline-2 text-secondary dark:text-accent mr-2.5 font-normal">
                      Monthly
                    </span>
                    <input
                      type="checkbox"
                      id="priceCheck"
                      className="peer sr-only"
                      aria-label="Toggle between monthly and yearly pricing"
                      checked={!isMonthly}
                      onChange={() => setIsMonthly(!isMonthly)}
                    />
                    <span className="bg-secondary dark:bg-accent after:bg-accent dark:after:bg-background-8 relative h-[28px] w-13 rounded-[34px] after:absolute after:start-[2px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-full" />
                    <span className="text-tagline-1 max-[426px]:text-tagline-2 text-secondary dark:text-accent ms-2.5 font-normal">
                      Yearly
                    </span>
                  </label>
                </RevealAnimation>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto grid max-w-[500px] grid-cols-1 items-center gap-y-5 lg:mx-0 lg:max-w-full lg:grid-cols-3 lg:gap-8">
                {/* Price Card 1 */}
                <RevealAnimation delay={0.3}>
                  <div className="dark:bg-background-7 w-full flex-1 rounded-[20px] bg-white p-8 max-lg:w-full">
                    <h3 className="text-heading-5 mb-2 font-normal">Starter</h3>
                    <p className="max-[426px]:text-tagline-2 mb-6 max-w-[250px]">
                      Perfect for individuals trying out AI gadgets.
                    </p>
                    <div className="mb-7">
                      {isMonthly ? (
                        <div>
                          <h4 className="text-heading-4 font-normal">
                            $<span>160.00</span>
                          </h4>
                          <p className="text-secondary dark:text-accent">Per Month</p>
                        </div>
                      ) : (
                        <div>
                          <h4 className="text-heading-4 font-normal">
                            $<span>220.00</span>
                          </h4>
                          <p className="text-secondary dark:text-accent">Per Year</p>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-8 block w-full text-center first-letter:uppercase before:content-none">
                      Get started
                    </Link>
                    <ul className="relative list-none space-y-2.5">
                      <li className="flex items-center gap-2.5">
                        <span className="bg-secondary size-5 rounded-full">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                          Connect up to 2 devices
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="bg-secondary size-5 rounded-full">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal">
                          Basic automation features
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="bg-secondary size-5 rounded-full">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal">
                          Standard support
                        </span>
                      </li>
                    </ul>
                  </div>
                </RevealAnimation>
                {/* Price Card 2 */}
                <RevealAnimation delay={0.4} start="top 84%">
                  <div className="w-full flex-1 rounded-[20px] bg-[url('/images/ns-img-329.png')] bg-cover bg-center bg-no-repeat p-2.5 max-lg:w-full dark:bg-[url('/images/ns-img-329.png')]">
                    <div className="rounded-[12px] bg-white p-5 sm:p-8 dark:bg-black">
                      <h3 className="text-heading-5 mb-2.5 font-normal">Pro</h3>
                      <p className="text-secondary/60 dark:text-accent/60 mb-6 max-w-[250px]">
                        For power users who want more control and flexibility.
                      </p>
                      <div className="mb-7">
                        {isMonthly ? (
                          <div>
                            <h4 className="text-heading-4 font-normal">
                              $<span>3342.00</span>
                            </h4>
                            <p className="text-secondary dark:text-accent">Per Month</p>
                          </div>
                        ) : (
                          <div>
                            <h4 className="text-heading-4 font-normal">
                              $<span>4420.00</span>
                            </h4>
                            <p className="text-secondary dark:text-accent">Per Year</p>
                          </div>
                        )}
                      </div>
                      <Link
                        href="/contact-us"
                        className="btn btn-md btn-secondary dark:btn-accent hover:btn-primary mb-8 block w-full text-center first-letter:uppercase before:content-none">
                        Get started
                      </Link>
                      <ul className="relative list-none space-y-2.5">
                        <li className="flex items-center gap-2.5">
                          <span className="bg-secondary size-5 rounded-full">
                            <CheckIcon className="fill-accent" />
                          </span>
                          <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                            Connect up to 10 devices
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="bg-secondary size-5 rounded-full">
                            <CheckIcon className="fill-accent" />
                          </span>
                          <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                            Advanced AI automation
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="bg-secondary size-5 rounded-full">
                            <CheckIcon className="fill-accent" />
                          </span>
                          <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                            Real-time insights &amp; analytics
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="bg-secondary size-5 rounded-full">
                            <CheckIcon className="fill-accent" />
                          </span>
                          <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                            Priority support
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="bg-background-4 size-5 rounded-full">
                            <CheckIcon className="fill-secondary/60" />
                          </span>
                          <span className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal">
                            Custom Notifications &amp; Alerts
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="bg-background-4 size-5 rounded-full">
                            <CheckIcon className="fill-secondary/60" />
                          </span>
                          <span className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal">
                            Cross-Platform Access
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
                {/* Price Card 3 */}
                <RevealAnimation delay={0.5}>
                  <div className="dark:bg-background-7 flex-1 rounded-[20px] bg-white p-8 max-lg:w-full">
                    <h3 className="text-heading-5 mb-2 font-normal">Elite</h3>
                    <p className="text-secondary/60 dark:text-accent/60 mb-6 max-w-[250px]">
                      Best for families and professionals with multiple gadgets.
                    </p>
                    <div className="mb-7">
                      {isMonthly ? (
                        <div>
                          <h4 className="text-heading-4 font-normal">
                            $<span>4800.00</span>
                          </h4>
                          <p className="text-secondary">Per Month</p>
                        </div>
                      ) : (
                        <div>
                          <h4 className="text-heading-4 font-normal">
                            $<span>5800.00</span>
                          </h4>
                          <p className="text-secondary">Per Year</p>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-8 block w-full text-center first-letter:uppercase before:content-none">
                      Get started
                    </Link>
                    <ul className="relative list-none space-y-2.5">
                      <li className="flex items-center gap-2.5">
                        <span className="bg-secondary size-5 rounded-full">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                          Unlimited device connections
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="bg-secondary size-5 rounded-full">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary dark:text-accent/60 text-tagline-1 font-normal">
                          Full AI customization
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="bg-secondary size-5 rounded-full">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal">
                          Cross-platform integration
                        </span>
                      </li>
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

Pricing.displayName = 'Pricing';
export default Pricing;
