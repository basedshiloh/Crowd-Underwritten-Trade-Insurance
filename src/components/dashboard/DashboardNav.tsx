'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/underwrite', label: 'Underwrite trades' },
  { href: '/trades', label: 'My trades' },
  { href: '/request', label: 'Request coverage' },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5 py-4" role="navigation" aria-label="Dashboard">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href));
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'rounded-lg px-4 py-3 text-sm font-medium transition-colors',
              isActive
                ? 'bg-primary-500/10 text-primary-500 dark:bg-primary-500/15 dark:text-primary-400'
                : 'text-secondary hover:bg-background-5 hover:text-primary-500 dark:hover:bg-background-7 dark:hover:text-primary-400'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
