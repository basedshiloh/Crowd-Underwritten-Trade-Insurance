import Link from 'next/link';
import {
  getRequestsByRequester,
  getRequestsUnderwrittenBy,
  getStakeForRequest,
  totalStakedSol,
} from '@/lib/agent';
import type { CoverageRequest } from '@/lib/coverage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { QuickActionIcons } from '@/components/dashboard/QuickActionIcons';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'My Trades - Crowd-Underwritten Trade Insurance',
  description: 'View coverage you requested and trades you underwrote, with status and progress.',
};

const CURRENT_USER = 'web-user';

function getProgressLabel(req: CoverageRequest): { label: string; variant: 'open' | 'active' | 'expired' | 'survived' | 'rugged' } {
  const now = new Date();
  const expiresAt = new Date(req.expiresAt);
  if (req.status === 'resolved') {
    return req.outcome === 'survived'
      ? { label: 'Survived', variant: 'survived' }
      : { label: 'Rugged', variant: 'rugged' };
  }
  if (req.status === 'open') {
    if (expiresAt.getTime() <= now.getTime()) return { label: 'Expired', variant: 'expired' };
    return { label: 'Open', variant: 'open' };
  }
  if (req.status === 'active') {
    if (expiresAt.getTime() <= now.getTime()) return { label: 'Ended', variant: 'expired' };
    return { label: 'Active', variant: 'active' };
  }
  return { label: req.status, variant: 'open' };
}

function ProgressBadge({ label, variant }: { label: string; variant: string }) {
  const base = 'rounded-full px-2.5 py-0.5 text-tagline-3 font-medium';
  const variants: Record<string, string> = {
    open: 'bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-300',
    active: 'bg-ns-cyan-light text-secondary dark:bg-ns-cyan/20 dark:text-ns-cyan',
    expired: 'bg-background-11 text-secondary dark:bg-stroke-7 dark:text-accent/80',
    survived: 'bg-ns-green-light text-secondary dark:bg-ns-green/20 dark:text-ns-green',
    rugged: 'bg-ns-red/20 text-ns-red dark:bg-ns-red/30 dark:text-ns-red',
  };
  return <span className={`${base} ${variants[variant] ?? variants.open}`}>{label}</span>;
}

function TradeCard({
  request,
  stakeSol,
  type,
}: {
  request: CoverageRequest;
  stakeSol?: number;
  type: 'requested' | 'underwritten';
}) {
  const progress = getProgressLabel(request);
  const totalSol = totalStakedSol(request.id);

  return (
    <article className="rounded-xl border border-stroke-5 bg-background-4 p-4 dark:border-stroke-6 dark:bg-background-9 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-tagline-2 font-medium text-secondary dark:text-accent">
            {request.tokenMint} · {request.coverageAmountSol} ETH
          </p>
          <p className="text-tagline-3 text-secondary/70 dark:text-accent/70">
            Premium {request.premiumSol} ETH · {request.durationHours}h · ID: {request.id}
          </p>
          {type === 'underwritten' && stakeSol != null && (
            <p className="mt-1 text-tagline-3 text-primary-600 dark:text-primary-400">
              Your stake: {stakeSol} ETH
            </p>
          )}
        </div>
        <ProgressBadge label={progress.label} variant={progress.variant} />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-tagline-3 text-secondary/70 dark:text-accent/70">
        <span>Total staked: {totalSol} ETH</span>
        {request.status === 'resolved' && request.resolvedAt && (
          <span>Resolved {new Date(request.resolvedAt).toLocaleDateString()}</span>
        )}
        {request.status !== 'resolved' && (
          <span>
            {new Date(request.expiresAt).getTime() > Date.now()
              ? `Ends ${new Date(request.expiresAt).toLocaleString()}`
              : `Expired ${new Date(request.expiresAt).toLocaleString()}`}
          </span>
        )}
      </div>
    </article>
  );
}

export default async function MyTradesPage() {
  const requested = getRequestsByRequester(CURRENT_USER);
  const underwritten = getRequestsUnderwrittenBy(CURRENT_USER);
  const underwrittenWithStake = underwritten.map((req) => ({
    request: req,
    stakeSol: getStakeForRequest(CURRENT_USER, req.id)?.amountStakedSol ?? 0,
  }));

  return (
    <main className="min-h-screen">
      <section className="px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-heading-5 mb-3 font-semibold text-secondary dark:text-accent sm:text-heading-4 sm:mb-4">
            My trades
          </h1>
          <p className="text-tagline-2 mb-8 text-secondary/80 dark:text-accent/80 sm:text-tagline-1">
            Coverage you requested and trades you underwrote, with status and progress.
          </p>

          <QuickActions
            actions={[
              {
                icon: QuickActionIcons.request,
                title: 'Request coverage',
                description: 'Submit a new coverage request for a token trade.',
                href: '/request',
              },
              {
                icon: QuickActionIcons.underwrite,
                title: 'Underwrite trades',
                description: 'Stake ETH to back open coverage requests.',
                href: '/underwrite',
              },
            ]}
          />

          <div className="space-y-10">
            <div>
              <h2 className="text-heading-6 mb-4 font-semibold text-secondary dark:text-accent">
                Requested by you
              </h2>
              {requested.length === 0 ? (
                <div className="rounded-xl border border-stroke-5 bg-background-4 p-6 text-center dark:border-stroke-6 dark:bg-background-9">
                  <p className="text-tagline-2 text-secondary/80 dark:text-accent/80">
                    No coverage requests yet.{' '}
                    <Link href="/request" className="text-primary-500 underline hover:no-underline">
                      Request coverage
                    </Link>
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {requested.map((req) => (
                    <li key={req.id}>
                      <TradeCard request={req} type="requested" />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h2 className="text-heading-6 mb-4 font-semibold text-secondary dark:text-accent">
                Underwritten by you
              </h2>
              {underwrittenWithStake.length === 0 ? (
                <div className="rounded-xl border border-stroke-5 bg-background-4 p-6 text-center dark:border-stroke-6 dark:bg-background-9">
                  <p className="text-tagline-2 text-secondary/80 dark:text-accent/80">
                    No underwritten trades yet.{' '}
                    <Link href="/underwrite" className="text-primary-500 underline hover:no-underline">
                      Underwrite trades
                    </Link>
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {underwrittenWithStake.map(({ request, stakeSol }) => (
                    <li key={request.id}>
                      <TradeCard request={request} stakeSol={stakeSol} type="underwritten" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
