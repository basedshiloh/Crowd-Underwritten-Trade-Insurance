'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { cn } from '@/utils/cn';

interface ConnectWalletButtonProps {
  className?: string;
  /** Use compact style for mobile (smaller padding) */
  compact?: boolean;
}

/**
 * Connect Wallet button styled to match the design system (same as "Get started"):
 * btn-md-v2, btn-v2-white, hover:btn-primary-v2
 */
export function ConnectWalletButton({ className, compact }: ConnectWalletButtonProps) {
  return (
    <div
      className={cn(
        'group/btn-v2 inline-block rounded-full transition-transform duration-500 ease-in-out',
        compact && 'min-w-0',
        className,
      )}>
      <WalletMultiButton
        className={cn(
          'text-tagline-1 !inline-flex !h-12 !min-w-[90px] !cursor-pointer !items-center !justify-center !gap-1.5 !rounded-full !border !border-stroke-3 !bg-white !font-medium !lowercase !text-secondary !transition-all !duration-500 ease-in-out',
          'hover:!scale-102 hover:!border-primary-600 hover:!border hover:!bg-primary-500 hover:!text-white',
          compact ? '!px-3 xl:!px-5' : '!px-5 !py-2.5',
        )}
      />
    </div>
  );
}
