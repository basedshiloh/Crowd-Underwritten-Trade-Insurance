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
    <main className="bg-background-3 dark:bg-background-7">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-tagline-2 mb-6 inline-block text-primary-500 hover:underline"
          >
            ← Back
          </Link>
          <h1 className="text-heading-4 mb-4 font-semibold text-secondary dark:text-accent">
            Underwrite trades
          </h1>
          <p className="text-tagline-1 mb-10 text-secondary/80 dark:text-accent/80">
            Open coverage requests. Stake SOL to underwrite; you must hold at least the tier’s % of
            the governance token supply.
          </p>

          {requests.length === 0 ? (
            <div className="rounded-xl border border-stroke-5 bg-background-4 p-8 text-center dark:border-stroke-6 dark:bg-background-9">
              <p className="text-tagline-1 text-secondary/80 dark:text-accent/80">
                No open requests. Create one from the{' '}
                <Link href="/request" className="text-primary-500 underline hover:no-underline">
                  request
                </Link>{' '}
                page.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {requests.map((req) => {
                const totalSol = totalStakedSol(req.id);
                const requiredHold = getRequiredHoldPercentForCoverage(req.coverageAmountSol);
                return (
                  <li
                    key={req.id}
                    className="rounded-xl border border-stroke-5 bg-background-4 p-6 dark:border-stroke-6 dark:bg-background-9"
                  >
                    <div className="mb-4 grid gap-2 text-tagline-2 text-secondary dark:text-accent">
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
