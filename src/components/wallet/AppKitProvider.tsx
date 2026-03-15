'use client';

import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana } from '@reown/appkit/networks';
import type { ReactNode } from 'react';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  console.warn(
    'NEXT_PUBLIC_PROJECT_ID is missing. Get one at https://dashboard.reown.com and add it to .env.local',
  );
}

const solanaAdapter = new SolanaAdapter();

const metadata = {
  name: 'Crowd-Underwritten Trade Insurance',
  description: 'SOL-based, token-gated crowd underwriting for degen trades.',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

if (projectId) {
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
}

export function AppKitProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
