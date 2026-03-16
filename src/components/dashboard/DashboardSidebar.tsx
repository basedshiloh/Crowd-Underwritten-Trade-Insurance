'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { cn } from '@/utils/cn';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/trades', label: 'My trades' },
  { href: '/request', label: 'Request coverage' },
  { href: '/underwrite', label: 'Underwrite trades' },
];

type DashboardSidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

export function DashboardSidebar({ open = true, onClose }: DashboardSidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open && onClose) onClose();
  }, [pathname, open, onClose]);

  return (
    <>
      {/* Mobile backdrop */}
      {onClose && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className={cn(
            'fixed inset-0 z-40 bg-secondary/60 dark:bg-secondary/80 backdrop-blur-sm transition-opacity md:hidden',
            open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
          )}
        />
      )}

      <aside
        className={cn(
          'flex flex-col border-r border-stroke-1 bg-background-1 dark:border-stroke-6 dark:bg-background-8',
          'w-56 flex-shrink-0',
          'md:relative md:translate-x-0',
          onClose
            ? cn(
                'fixed inset-y-0 left-0 z-50 h-full w-56 transform transition-transform duration-200 ease-out',
                open ? 'translate-x-0' : '-translate-x-full'
              )
            : ''
        )}
      >
        <div className="flex h-full flex-col py-6 px-4">
          {onClose && (
            <div className="mb-6 flex items-center justify-between md:hidden">
              <span className="text-tagline-2 font-medium uppercase tracking-wider text-secondary/70 dark:text-accent/70">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex size-9 items-center justify-center rounded-md border border-stroke-1 bg-background-2 text-secondary hover:bg-background-3 dark:border-stroke-6 dark:bg-background-9 dark:text-accent dark:hover:bg-background-7 transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          <p className="text-tagline-2 mb-6 font-medium uppercase tracking-wider text-secondary/60 dark:text-accent/50">
            Dashboard
          </p>
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'text-tagline-1 rounded-md py-2.5 pl-4 pr-3 font-medium transition-colors duration-150 border-l-2',
                    isActive
                      ? 'border-primary-500 bg-primary-100 text-primary-700 dark:border-primary-500 dark:bg-primary-500/15 dark:text-primary-300'
                      : 'border-transparent text-secondary/80 hover:bg-background-2 hover:text-secondary dark:text-accent/70 dark:hover:bg-background-9 dark:hover:text-accent'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
