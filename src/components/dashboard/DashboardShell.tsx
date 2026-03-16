'use client';

import { DashboardNav } from './DashboardNav';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background-3 dark:bg-background-7">
      <aside className="flex w-[30%] min-w-0 max-w-[280px] flex-shrink-0 flex-col border-r border-stroke-5 bg-background-4 dark:border-stroke-6 dark:bg-background-8">
        <div className="px-4 pt-6">
          <h2 className="text-lg font-semibold text-secondary dark:text-accent">
            Dashboard
          </h2>
        </div>
        <DashboardNav />
      </aside>
      <div className="min-w-0 flex-1 flex flex-col">
        <main className="min-h-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
