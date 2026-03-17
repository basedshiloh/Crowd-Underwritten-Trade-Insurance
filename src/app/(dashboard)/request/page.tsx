import Link from 'next/link';
import { createCoverageAction } from './actions';
import { RequestForm } from './request-form';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { QuickActionIcons } from '@/components/dashboard/QuickActionIcons';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Request Coverage - Crowd-Underwritten Trade Insurance',
  description:
    'Request ETH coverage for a trade on a token. Hold the required % of governance token supply to participate.',
};

export default function RequestPage() {
  return (
    <main className="min-h-screen">
      <section className="px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-heading-5 mb-3 font-semibold text-secondary dark:text-accent sm:text-heading-4 sm:mb-4">
            Request coverage
          </h1>
          <p className="text-tagline-2 mb-6 text-secondary/80 dark:text-accent/80 sm:text-tagline-1 sm:mb-8">
            Request ETH coverage for a trade on a token. You must hold at least the tier’s % of the
            governance token supply to request at this size.
          </p>

          <QuickActions
            actions={[
              {
                icon: QuickActionIcons.underwrite,
                title: 'Underwrite trades',
                description: 'Stake ETH to back open coverage requests.',
                href: '/underwrite',
              },
              {
                icon: QuickActionIcons.myTrades,
                title: 'My trades',
                description: 'View your requested and underwritten coverage.',
                href: '/trades',
              },
              {
                icon: QuickActionIcons.overview,
                title: 'Overview',
                description: 'Back to the main dashboard and home.',
                href: '/',
              },
            ]}
          />

          <RequestForm createCoverageAction={createCoverageAction} />
          <p className="mt-6 text-tagline-2 text-secondary/70 dark:text-accent/70 sm:mt-8">
            <Link href="/underwrite" className="text-primary-500 underline hover:no-underline">
              Underwrite trades
            </Link>{' '}
            — stake ETH to back open coverage requests.
          </p>
        </div>
      </section>
    </main>
  );
}
