'use client';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background-3 dark:bg-background-7">
      <main className="min-h-0 flex-1">{children}</main>
    </div>
  );
}
