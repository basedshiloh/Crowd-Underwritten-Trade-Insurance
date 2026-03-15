'use client';

import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana } from '@reown/appkit/networks';
import type { ReactNode } from 'react';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (typeof window !== 'undefined' && projectId) {
  const solanaAdapter = new SolanaAdapter();
  const metadata = {
    name: 'Crowd-Underwritten Trade Insurance',
    description: 'SOL-based, token-gated crowd underwriting for degen trades.',
    url: window.location.origin,
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
  };
  createAppKit({
    adapters: [solanaAdapter],
    networks: [solana],
    defaultNetwork: solana,
    metadata,
    projectId,
    features: {
      analytics: true,
    },
  });
} else if (typeof window !== 'undefined' && !projectId) {
  console.warn(
    'NEXT_PUBLIC_PROJECT_ID is missing. Get one at https://dashboard.reown.com and add it to .env.local',
  );
}

export function AppKitProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
