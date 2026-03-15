'use client';

import { useState } from 'react';
import { resolveByMarketCap } from '@/lib/coverage';

export function ResolutionDemo({
  marketCapAtPlacement,
  survivalThresholdPercent,
}: {
  requestId: string;
  marketCapAtPlacement: number;
  survivalThresholdPercent: number;
}) {
  const [currentMarketCap, setCurrentMarketCap] = useState(marketCapAtPlacement);
  const outcome = resolveByMarketCap(
    marketCapAtPlacement,
    currentMarketCap,
    survivalThresholdPercent
  );
  const thresholdValue = (survivalThresholdPercent / 100) * marketCapAtPlacement;

  return (
    <div className="rounded-lg border border-stroke-5 bg-background-8 p-3 dark:border-stroke-6">
      <p className="mb-2 text-tagline-3 font-medium text-secondary/70 dark:text-accent/70">
        Resolution demo (mock)
      </p>
      <label className="mb-2 flex items-center gap-2 text-tagline-2">
        <span className="text-secondary dark:text-accent">Current market cap:</span>
        <input
          type="number"
          value={currentMarketCap}
          onChange={(e) => setCurrentMarketCap(Number(e.target.value))}
          className="w-28 rounded border border-stroke-3 bg-background-4 px-2 py-1 text-secondary dark:border-stroke-6 dark:bg-background-7 dark:text-accent"
        />
      </label>
      <p className="text-tagline-2 text-secondary dark:text-accent">
        Placement: {marketCapAtPlacement} · Threshold: {survivalThresholdPercent}% ={' '}
        {thresholdValue.toLocaleString()}. Outcome:{' '}
        <strong
          className={
            outcome === 'survived' ? 'text-ns-green' : 'text-ns-red'
          }
        >
          {outcome}
        </strong>
        {outcome === 'survived'
          ? ' → underwriters earn premium'
          : ' → coverage paid from staked SOL'}
      </p>
    </div>
  );
}
