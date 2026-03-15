'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/request', label: 'Request coverage' },
  { href: '/underwrite', label: 'Underwrite trades' },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-stroke-5 dark:border-stroke-6 flex w-56 flex-shrink-0 flex-col border-r bg-background-4 dark:bg-background-8">
      <div className="p-4">
        <h2 className="text-tagline-1 mb-4 font-semibold text-secondary dark:text-accent">Dashboard</h2>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-tagline-1 rounded-lg px-3 py-2 font-medium transition-colors',
                  isActive
                    ? 'bg-primary-500/15 text-primary-600 dark:text-primary-400'
                    : 'text-secondary/80 hover:bg-background-5 hover:text-secondary dark:text-accent/80 dark:hover:bg-background-7 dark:hover:text-accent'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
