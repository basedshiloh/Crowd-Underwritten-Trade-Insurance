'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { cn } from '@/utils/cn';

const navItems = [
  { href: '/', label: 'Home' },
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
          'flex flex-col border-r border-stroke-5 bg-background-4 dark:border-stroke-6 dark:bg-background-8',
          'w-64 flex-shrink-0',
          'md:relative md:translate-x-0 md:border-r',
          onClose
            ? cn(
                'fixed inset-y-0 left-0 z-50 h-full w-64 transform transition-transform duration-200 ease-out',
                open ? 'translate-x-0' : '-translate-x-full'
              )
            : ''
        )}
      >
        <div className="flex h-full flex-col p-4 sm:p-5">
          {onClose && (
            <div className="mb-4 flex items-center justify-between md:hidden">
              <span className="text-tagline-1 font-semibold text-secondary dark:text-accent">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="nav-hamburger-close flex size-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-stroke-5 bg-background-5 dark:border-stroke-6 dark:bg-background-7"
              >
                <span className="h-0.5 w-5 origin-center rotate-45 translate-y-1 bg-secondary dark:bg-accent" />
                <span className="h-0.5 w-5 origin-center -rotate-45 -translate-y-0.5 bg-secondary dark:bg-accent" />
              </button>
            </div>
          )}
          <h2 className="text-heading-6 mb-5 font-semibold text-secondary dark:text-accent sm:mb-6">
            Dashboard
          </h2>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'text-tagline-1 rounded-lg px-3 py-2.5 font-medium transition-all duration-200',
                    'border-l-2 border-transparent',
                    isActive
                      ? 'border-primary-500 bg-primary-100 text-primary-700 shadow-[var(--shadow-11)] dark:border-primary-500 dark:bg-primary-500/20 dark:text-primary-300'
                      : 'text-secondary/80 hover:border-primary-400/50 hover:bg-primary-50 hover:text-primary-600 dark:text-accent/80 dark:hover:border-primary-500/50 dark:hover:bg-primary-500/10 dark:hover:text-primary-400'
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
