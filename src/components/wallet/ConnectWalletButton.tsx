'use client';

import { useAppKitAccount } from '@reown/appkit/react';
import { modal } from '@reown/appkit/react';
import { cn } from '@/utils/cn';

function truncateAddress(address: string): string {
  if (address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

const buttonClass =
  '!inline-flex !h-12 !min-w-0 !cursor-pointer !items-center !justify-center !gap-1.5 !rounded-md !border-0 !px-5 !font-medium !lowercase !text-nowrap !transition-all !duration-500 ease-in-out btn-xl-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2';

export function ConnectWalletButton({ className }: { className?: string }) {
  const { address, isConnected } = useAppKitAccount();

  const handleClick = () => {
    modal?.open();
  };

  const label = isConnected && address ? truncateAddress(address) : 'Connect wallet';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(buttonClass, className)}
      aria-label={isConnected ? 'View account' : 'Connect wallet'}>
      {label}
    </button>
  );
}
