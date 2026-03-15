import Link from 'next/link';
import { listOpenRequests, totalStakedSol } from '@/lib/agent';
import { getRequiredHoldPercentForCoverage } from '@/lib/coverage';
import { underwriteAction } from './actions';
import { UnderwriteForm } from './underwrite-form';
import { ResolutionDemo } from './resolution-demo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Underwrite Trades - Crowd-Underwritten Trade Insurance',
  description:
    'Stake SOL to underwrite open coverage requests. Hold the required % of governance token supply to participate.',
};

export default async function UnderwritePage() {
  const requests = listOpenRequests();

  return (
    <main className="min-h-screen">
      <section className="px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-heading-5 mb-3 font-semibold text-secondary dark:text-accent sm:text-heading-4 sm:mb-4">
            Underwrite trades
          </h1>
          <p className="text-tagline-2 mb-6 text-secondary/80 dark:text-accent/80 sm:text-tagline-1 sm:mb-10">
            Open coverage requests. Stake SOL to underwrite; you must hold at least the tier’s % of
            the governance token supply.
          </p>

          {requests.length === 0 ? (
            <div className="rounded-xl border border-stroke-5 bg-background-4 p-6 text-center dark:border-stroke-6 dark:bg-background-9 sm:p-8">
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 sm:text-tagline-1">
                No open requests. Create one from the{' '}
                <Link href="/request" className="text-primary-500 underline hover:no-underline">
                  request
                </Link>{' '}
                page.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4 sm:gap-6">
              {requests.map((req) => {
                const totalSol = totalStakedSol(req.id);
                const requiredHold = getRequiredHoldPercentForCoverage(req.coverageAmountSol);
                return (
                  <li
                    key={req.id}
                    className="rounded-xl border border-stroke-5 bg-background-4 p-4 dark:border-stroke-6 dark:bg-background-9 sm:p-6"
                  >
                    <div className="mb-3 grid gap-1.5 text-tagline-2 text-secondary dark:text-accent sm:mb-4 sm:gap-2">
                      <p>
                        <strong>Token:</strong> {req.tokenMint} ·{' '}
                        <strong>Coverage:</strong> {req.coverageAmountSol} SOL ·{' '}
                        <strong>Premium:</strong> {req.premiumSol} SOL
                      </p>
                      <p>
                        Duration: {req.durationHours}h · Survival: market cap ≥{' '}
                        {req.survivalThresholdPercent}% of placement ({req.marketCapAtPlacement})
                      </p>
                      <p>
                        Required hold to participate: <strong>{requiredHold}%</strong> of supply ·
                        Total staked: <strong>{totalSol} SOL</strong>
                      </p>
                      <p className="text-tagline-3 text-secondary/70 dark:text-accent/70">
                        Request ID: <code className="font-mono">{req.id}</code>
                      </p>
                    </div>
                    <UnderwriteForm
                      requestId={req.id}
                      requiredHoldPercent={requiredHold}
                      underwriteAction={underwriteAction}
                    />
                    <ResolutionDemo
                      requestId={req.id}
                      marketCapAtPlacement={req.marketCapAtPlacement}
                      survivalThresholdPercent={req.survivalThresholdPercent}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
