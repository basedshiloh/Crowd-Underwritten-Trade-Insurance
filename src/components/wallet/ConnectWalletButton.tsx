'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { cn } from '@/utils/cn';

interface ConnectWalletButtonProps {
  className?: string;
  /** Use compact style for mobile (smaller width) */
  compact?: boolean;
}

export function ConnectWalletButton({ className, compact }: ConnectWalletButtonProps) {
  const { connected, publicKey } = useWallet();

  const address = publicKey?.toBase58() ?? '';
  const label = connected && address
    ? `${address.slice(0, 4)}...${address.slice(-4)}`
    : 'Connect Wallet';

  return (
    <div
      className={cn(
        'group/btn-v2 mx-auto inline-block w-[85%] rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto',
        compact && '!w-auto',
        className,
      )}>
      <div className="relative">
        {/* Visible layer: same as HowItWork "Request coverage" (LinkButton with btn-secondary-v2, group-hover:btn-primary-v2) + grid SVG */}
        <div
          className="pointer-events-none mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium lowercase text-nowrap transition-all duration-500 ease-in-out md:mx-0 md:h-auto md:w-auto btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2"
          aria-hidden>
          <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
            {label}
          </span>
          <div className="relative size-6 overflow-hidden">
            <span className="btn-v2-icon absolute inset-0 size-6 -translate-x-6 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M11 5H13V7H11V5Z" />
                <path d="M5 5H7V7H5V5Z" />
                <path d="M14 8H16V10H14V8Z" />
                <path d="M8 8H10V10H8V8Z" />
                <path d="M17 11H19V13H17V11Z" />
                <path d="M11 11H13V13H11V11Z" />
                <path d="M14 14H16V16H14V14Z" />
                <path d="M8 14H10V16H8V14Z" />
                <path d="M11 17H13V19H11V17Z" />
                <path d="M5 17H7V19H5V17Z" />
              </svg>
            </span>
            <span className="btn-v2-icon absolute size-6 -translate-x-2 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M11 5H13V7H11V5Z" />
                <path d="M5 5H7V7H5V5Z" />
                <path d="M14 8H16V10H14V8Z" />
                <path d="M8 8H10V10H8V8Z" />
                <path d="M17 11H19V13H17V11Z" />
                <path d="M11 11H13V13H11V11Z" />
                <path d="M14 14H16V16H14V14Z" />
                <path d="M8 14H10V16H8V14Z" />
                <path d="M11 17H13V19H11V17Z" />
                <path d="M5 17H7V19H5V17Z" />
              </svg>
            </span>
          </div>
        </div>
        {/* Invisible wallet button so click opens the modal */}
        <WalletMultiButton className="!absolute !inset-0 !h-full !w-full !cursor-pointer !opacity-0" />
      </div>
    </div>
  );
}
