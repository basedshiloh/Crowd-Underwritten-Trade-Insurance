'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { cn } from '@/utils/cn';

interface ConnectWalletButtonProps {
  className?: string;
  /** Use compact style for mobile (icon or shorter label) */
  compact?: boolean;
}

export function ConnectWalletButton({ className, compact }: ConnectWalletButtonProps) {
  return (
    <WalletMultiButton
      className={cn(
        '!inline-flex !h-12 !cursor-pointer !items-center !justify-center !gap-1.5 !rounded-full !font-medium !lowercase !transition-all !duration-500',
        '!border-0 !bg-white !text-black hover:!bg-primary-500 hover:!text-white',
        compact && '!min-w-0 !px-3 xl:!px-6',
        !compact && '!px-6',
        className,
      )}
    />
  );
}
