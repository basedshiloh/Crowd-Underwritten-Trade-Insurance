'use client';

import { useState, useEffect } from 'react';
import { DashboardSidebar } from './DashboardSidebar';

const MD = 768;

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MD}px)`);
    const update = () => setMobile(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (mobile && sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobile, sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-background-3 dark:bg-background-7">
      <DashboardSidebar
        open={mobile ? sidebarOpen : true}
        onClose={mobile ? () => setSidebarOpen(false) : undefined}
      />
      <div className="min-w-0 flex-1 flex flex-col">
        <header className="flex shrink-0 items-center gap-3 border-b border-stroke-5 bg-background-4 px-4 py-3 dark:border-stroke-6 dark:bg-background-8 md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            className="nav-hamburger flex size-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-stroke-5 bg-background-5 dark:border-stroke-6 dark:bg-background-7"
          >
            <span className="h-0.5 w-5 bg-secondary dark:bg-accent" />
            <span className="h-0.5 w-5 bg-secondary dark:bg-accent" />
            <span className="h-0.5 w-5 bg-secondary dark:bg-accent" />
          </button>
          <span className="text-tagline-1 font-semibold text-secondary dark:text-accent">
            Dashboard
          </span>
        </header>
        <main className="min-h-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
