import Link from 'next/link';
import { createCoverageAction } from './actions';
import { RequestForm } from './request-form';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Request Coverage - Crowd-Underwritten Trade Insurance',
  description:
    'Request SOL coverage for a trade on a token. Hold the required % of governance token supply to participate.',
};

export default function RequestPage() {
  return (
    <main className="min-h-screen">
      <section className="px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-heading-4 mb-4 font-semibold text-secondary dark:text-accent">
            Request coverage
          </h1>
          <p className="text-tagline-1 mb-8 text-secondary/80 dark:text-accent/80">
            Request SOL coverage for a trade on a token. You must hold at least the tier’s % of the
            governance token supply to request at this size.
          </p>
          <RequestForm createCoverageAction={createCoverageAction} />
          <p className="mt-8 text-tagline-2 text-secondary/70 dark:text-accent/70">
            <Link href="/underwrite" className="text-primary-500 underline hover:no-underline">
              Underwrite trades
            </Link>{' '}
            — stake SOL to back open coverage requests.
          </p>
        </div>
      </section>
    </main>
  );
}
