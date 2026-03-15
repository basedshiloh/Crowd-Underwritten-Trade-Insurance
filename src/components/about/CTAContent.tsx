import RevealAnimation from '@/components/animation/RevealAnimation';

const Content = () => {
  return (
    <div className="relative z-10 p-10 min-[475px]:p-14 sm:p-20 lg:p-[100px]">
      <div className="mb-10 space-y-5 text-center sm:mb-14">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-cyan">Get started</span>
        </RevealAnimation>
        <div className="space-y-3">
          <RevealAnimation delay={0.2}>
            <h2 className="font-normal text-white">Get started with industry-leading cyber security</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-accent/60">
              No hidden fees. no steep learning curves. Just a platform built for your growth.
            </p>
          </RevealAnimation>
        </div>
      </div>

      <RevealAnimation delay={0.4}>
        <form className="flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-3 md:gap-y-0">
          <fieldset className="inline-block">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-accent/10 border-accent/20 shadow-1 ring-accent/20 focus:ring-primary-600 placeholder:text-accent/60 block h-12 w-[270px] rounded-full border px-[18px] py-3 font-normal text-white ring-[0.7px] outline-none placeholder:font-normal focus:ring-1 max-[376px]:w-[250px] md:w-[371px]"
            />
          </fieldset>
          <div className="group/btn-v2 mx-auto inline-block h-12 w-full rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto">
            <button
              type="submit"
              className="btn-lg-v2 btn-primary-v2 group-hover/btn-v2:btn-v2-white mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium text-nowrap lowercase transition-all duration-500 ease-in-out md:mx-0 md:h-auto md:w-auto">
              <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                Get started
              </span>
              <div className="relative size-6 overflow-hidden">
                {/* one  */}
                <span className="btn-v2-icon absolute inset-0 size-6 -translate-x-6 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11 5H13V7H11V5Z" />
                    <path d="M5 5H7V7H5V5Z" />
                    <path d="M14 8H16V10H14V8Z" />
                    <path d="M8 8H10V10H8V8Z" />
                    <path d="M17 11H19V13H17V11Z" />
                    <path d="M11 11H13V13H11V11Z" />
                    <path d="M14 14H16V16H14V14Z" />
                    <path d="M8 14H10V16H8V14Z" />
                    <path d="M11 17H13V19H11V17Z" />
                    <path d="M5 17H7V19H5V17Z" />
                  </svg>
                </span>
                {/* two  */}
                <span className="btn-v2-icon absolute size-6 -translate-x-2 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11 5H13V7H11V5Z" />
                    <path d="M5 5H7V7H5V5Z" />
                    <path d="M14 8H16V10H14V8Z" />
                    <path d="M8 8H10V10H8V8Z" />
                    <path d="M17 11H19V13H17V11Z" />
                    <path d="M11 11H13V13H11V11Z" />
                    <path d="M14 14H16V16H14V14Z" />
                    <path d="M8 14H10V16H8V14Z" />
                    <path d="M11 17H13V19H11V17Z" />
                    <path d="M5 17H7V19H5V17Z" />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </form>
      </RevealAnimation>
    </div>
  );
};
Content.displayName = 'Content';
export default Content;
