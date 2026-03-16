'use client';

import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana } from '@reown/appkit/networks';
import type { ReactNode } from 'react';

// Get projectId from https://dashboard.reown.com – set in .env.local as NEXT_PUBLIC_PROJECT_ID
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? '';

// Per Reown docs: call createAppKit outside any React component to avoid unwanted rerenders
// https://docs.reown.com/appkit/next/core/installation
if (projectId) {
  try {
    const solanaAdapter = new SolanaAdapter();
    const metadata = {
      name: 'Crowd-Underwritten Trade Insurance',
      description: 'SOL-based, token-gated crowd underwriting for degen trades.',
      url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
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
  } catch (err) {
    // Ignore on server (e.g. missing window). Modal is created when this module runs on client.
    if (typeof window !== 'undefined') {
      console.error('[AppKit] createAppKit failed:', err);
    }
  }
} else if (typeof window !== 'undefined') {
  console.warn(
    '[AppKit] NEXT_PUBLIC_PROJECT_ID is missing. Add it to .env.local – get one at https://dashboard.reown.com',
  );
}

export function AppKitProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
