import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const HowItWork = () => {
  return (
    <section className="py-20 md:py-28 lg:py-30 xl:pt-39 xl:pb-30">
      <div className="main-container">
        <div className="mb-7 text-center md:mb-19 lg:mx-auto lg:max-w-[730px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-4">How It Works</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">How it works in 3 steps</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[420px]">
              Request ETH coverage for a trade, get backed by the crowd, and resolve at expiry—simple and token-gated.
            </p>
          </RevealAnimation>
        </div>
        <div className="relative grid grid-cols-1 items-start gap-y-6 lg:grid-cols-3 lg:gap-x-5 xl:gap-x-8 xl:items-center">
          <RevealAnimation delay={0.6} direction="left">
            <div className="absolute top-[22%] left-[17%] z-0 hidden h-[1px] w-[calc(100%-35%)] bg-[repeating-linear-gradient(to_right,_rgba(0,0,0,0.2)_0_4px,_transparent_4px_8px)] min-[860px]:top-[27.5%] lg:block" />
          </RevealAnimation>
          <RevealAnimation delay={0.4} direction="left">
            <div className="flex flex-col items-center justify-center space-y-6 px-5 py-10 text-center">
              <div className="border-background-12 text-secondary rounded-[60px] border-8 bg-white px-9 py-2.5">1</div>
              <div className="space-y-1">
                <h5>Request coverage</h5>
                <p className="text-tagline-1">Create a coverage request: token, ETH amount, duration, and premium. You must hold the required % of the governance token.</p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="left">
            <div className="flex flex-col items-center justify-center space-y-6 px-5 py-10 text-center">
              <div className="border-background-12 text-secondary rounded-[60px] border-8 bg-white px-9 py-2.5">2</div>
              <div className="space-y-1">
                <h5>Underwriters stake</h5>
                <p className="text-tagline-1">
                  Others with enough token holding stake ETH to back your request. When the pool is filled, coverage is live.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6} direction="left">
            <div className="flex flex-col items-center justify-center space-y-6 px-5 py-10 text-center">
              <div className="border-background-12 text-secondary rounded-[60px] border-8 bg-white px-9 py-2.5">3</div>
              <div className="space-y-1">
                <h5>Resolve &amp; payout</h5>
                <p className="text-tagline-1">At expiry, market cap vs. threshold decides: survived → underwriters earn premium; rug → coverage pays out from staked ETH.</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
        {/* btn  */}
        <RevealAnimation delay={0.7}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-center">
            <LinkButton href="/request" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
              Request coverage
            </LinkButton>
            <LinkButton href="/underwrite" btnClass="btn-xl-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2">
              Underwrite trades
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

HowItWork.displayName = 'HowItWork';
export default HowItWork;
