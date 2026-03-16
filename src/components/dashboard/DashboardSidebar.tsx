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
          'flex flex-col flex-shrink-0 w-[240px]',
          'bg-white dark:bg-[#0d1117]',
          'border-r border-[#e5e7eb] dark:border-[#21262d]',
          'md:relative md:translate-x-0',
          onClose
            ? cn(
                'fixed inset-y-0 left-0 z-50 h-full w-[240px] transform transition-transform duration-200 ease-out',
                open ? 'translate-x-0' : '-translate-x-full'
              )
            : ''
        )}
      >
        <div className="flex h-full flex-col py-8 px-5">
          {onClose && (
            <div className="mb-6 flex items-center justify-between md:hidden">
              <span className="text-sm font-medium text-[#57606a] dark:text-[#8b949e]">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex size-9 items-center justify-center rounded-lg text-[#1a1a1c] hover:bg-[#f3f4f6] dark:text-[#e6edf3] dark:hover:bg-[#21262d] transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          <h2 className="text-base font-semibold text-[#1a1a1c] dark:text-[#e6edf3] mb-6">
            Dashboard
          </h2>
          <nav className="flex flex-col" role="list">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  role="listitem"
                  className={cn(
                    'text-[15px] py-2.5 pl-3 pr-3 rounded-md font-medium transition-colors duration-150',
                    'border-l-[3px] border-transparent -ml-px pl-[15px]',
                    isActive
                      ? 'border-[#864ffe] bg-[#f4f2fe] text-[#6d1fe2] dark:border-[#a585ff] dark:bg-[#864ffe]/10 dark:text-[#c3b1ff]'
                      : 'text-[#57606a] hover:bg-[#f6f8fa] hover:text-[#1a1a1c] dark:text-[#8b949e] dark:hover:bg-[#21262d] dark:hover:text-[#e6edf3]'
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
